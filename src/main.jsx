// Generales
import React from 'react';
import ReactDOM from 'react-dom/client';
// Router
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// Estilos
import './index.css';

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
import AdminLoginPage from '@/pages/admin/LoginPage';
import AdminAgregarPage from '@/pages/admin/AgregarPage';
import AdminModificarPage from '@/pages/admin/ModificarPage';
import AdminEditarPage, { loader as adminEditLoader } from '@/pages/admin/ModificarPage/EditarPage';
import { action as destroyAction } from '@/pages/admin/ModificarPage/DestroyPage/DestroyPage';

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
            {
                path: "agregar",
                element: <AdminAgregarPage />,
            },
            {
                path: "modificar",
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <AdminModificarPage />
                    },
                    {
                        path: "editar/:id",
                        element: <AdminEditarPage />,
                        loader: adminEditLoader
                    },
                    {
                        path: "destroy/:id",
                        action: destroyAction,
                    }
                ],
            }
        ]
    },
    {
        path: "login",
        element: <AdminLoginPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
