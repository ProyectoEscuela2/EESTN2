// Generales
import React from 'react';
import ReactDOM from 'react-dom/client';
// Router
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// Estilos
import './index.css';

// Context
import { AuthProvider } from './context/AuthContext';

// Pages
import RootPage from '@/pages/RootPage';
import IndexPage from '@/pages/IndexPage';
import ErrorPage from '@/pages/ErrorPage';
import EspecialidadesPage from '@/pages/EspecialidadesPage';
import ContactoPage from '@/pages/ContactoPage';
import GaleriaPage from '@/pages/GaleriaPage';
import InscripcionesPage from '@/pages/InscripcionesPage';
import MiembrosPage from '@/pages/MiembrosPage';

// Pages: Admin
import AdminPage from '@/pages/admin';
import AdminIndexPage from '@/pages/admin/IndexPage';
// Pages: Admin/Login
import AdminLoginPage from '@/pages/admin/LoginPage';
import AdminLogoutPage from '@/pages/admin/LogoutPage';
// Pages: Admin/Archivos
import AdminIndexArchivosPage from '@/pages/admin/archivos';
import AdminAgregarArchivosPage, { action as adminAgregarArchivoAction } from '@/pages/admin/archivos/AgregarPage';
import AdminModificarArchivosPage, {loader as adminModificarArchivoLoader} from '@/pages/admin/archivos/ModificarPage';
import AdminEditarArchivosPage, { loader as adminEditArchivoLoader, action as adminEditArchivoAction } from '@/pages/admin/archivos/ModificarPage/EditarPage';
import AdminDestroyArchivosPage, { action as destroyArchivoAction } from '@/pages/admin/archivos/ModificarPage/DestroyPage/DestroyPage';
// Pages: Admin/Imagenes
import AdminEditarImagenesPage from '@/pages/admin/imagenes/EditarPage';

// Crear enrutador
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage path="/" />,
        children: [
            {
                index: true,
                element: <IndexPage />
            },
            {
                path: "especialidades",
                element: <EspecialidadesPage />
            },
            {
                path: "contacto",
                element: <ContactoPage />
            },
            {
                path: "galeria",
                element: <GaleriaPage />
            },
            {
                path: "inscripciones",
                element: <InscripcionesPage />
            },
            {
                path: "miembros",
                element: <MiembrosPage />
            }
        ],
    },
    {
        path: "/admin",
        element: <AdminPage />,
        errorElement: <ErrorPage path="/admin" />,
        children: [
            {
                index: true,
                element: <AdminIndexPage />,
            },
            // Admin: Archivos
            {
                path: "archivos",
                children: [
                    {
                        index: true,
                        element: <AdminIndexArchivosPage />
                    },
                    {
                        path: "agregar",
                        element: <AdminAgregarArchivosPage />,
                        action: adminAgregarArchivoAction,
                    },
                    {
                        path: "modificar",
                        element: <Outlet />,
                        children: [
                            {
                                index: true,
                                element: <AdminModificarArchivosPage />,
                                loader: adminModificarArchivoLoader
                            },
                            {
                                path: "editar/:id",
                                element: <AdminEditarArchivosPage />,
                                loader: adminEditArchivoLoader,
                                action: adminEditArchivoAction
                            },
                            {
                                path: "destroy/:id",
                                element: <AdminDestroyArchivosPage />,
                                action: destroyArchivoAction,
                            }
                        ],
                    }
                ]
            },
            // Admin: Imagenes
            {
                path: "imagenes",
                children: [
                    {
                        path: "editar",
                        element: <AdminEditarImagenesPage />
                    }
                ]
            }
        ]
    },
    {
        path: "login",
        element: <AdminLoginPage />,
        // action: loginAction,
    },
    {
        path: "logout",
        element: <AdminLogoutPage />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>,
);
