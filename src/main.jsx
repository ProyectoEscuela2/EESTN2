/*
NOTA[0]: Bienvenido al archivo principal llamado "main.jsx". Si estás en visual studio code presiona (Alt + Z) así podrás ver esta nota completa en tu pantalla.

El archivo "main.jsx" conecta todas las demás carpetas y archivos del proyecto. Increíble ¿no?. Te iré explicando que es lo que hacemos en este archivo, pero como breve resumen se encarga de crear y administrar las rutas de nuestras páginas. ¿Qué es eso? Si entrás a una página, probablemente veas algo como esto:
    https://www.youtube.com/
Esto es una URL, que cuenta con el protocolo (https), el subdominio (www), el dominio (youtube.com) y el path, route, endpoint, ruta, entre otros que es "/". En este caso, la ruta es la principal, la cual llamamos "root" o "raíz" en español.

Pero Youtube tiene varias funciones, como shorts:
    https://www.youtube.com/shorts
Si miramos atentamente, luego del "/" encontramos "shorts". Esa es una ruta, path, endpoint: "shorts". Si vas a la página de la escuela y haces click en el botón especialidades en la barra de navegación y observas la url notarás que dice:
    https://eest2sn.edu.ar/especialidades
La ruta es "/especialidades". Eso es lo que hacemos aquí. Configuramos los endpoints (rutas) y definimos que es lo que se mostrará en cada página. Es como si tuvieramos muchos htmls en una carpeta y navegamos por ellos a través de enlaces, solo que acá no tenemos HTMLs jajaja.
*/

/* NOTA[0.1]: En React, antes de escribir código debemos importar las librerías, archivos o complementos necesarios para trabajar. Eso es lo que hacemos aquí: */
// Generales (Librerías de React y ReactDOM para renderizar en el documento)
import React from 'react'; 
import ReactDOM from 'react-dom/client';
// Router (Herramientas que react-router proporciona para crear y diseñar rutar)
import { createBrowserRouter, RouterProvider, /*Outlet*/ } from 'react-router-dom';
// Estilos (Nuestros estilos personalizados)
import './index.css';

// Context (Imagina que Context es una variable de alcance global, no lo es, pero para que te hagas una idea. Explicaré context en el archivo './context/AuthContext.jsx') Para comprender mejor ve la Nota[1.1]
import { AuthProvider } from './context/AuthContext';

// Pages (Son los componentes diseñados para las vistas de cada ruta. Si no sabes sobre componentes de React, ve a la documentación oficial. Aunque, en notas posteriores seguramente explique un poco como funcionan)
import RootPage from '@/pages/RootPage'; // Si notas, cuando importamos, en la ruta añadimos al principio un "@" Eso es porque configuramos un alias. "@" es lo mismo que "src/". Acá no se nota util, pero en importaciones donde tenemos que ascender bastante ("../../../") es mejor un alias.
import IndexPage from '@/pages/IndexPage';
import ErrorPage from '@/pages/ErrorPage';
import EspecialidadesPage from '@/pages/EspecialidadesPage';
import ContactoPage from '@/pages/ContactoPage';
import GaleriaPage from '@/pages/GaleriaPage';
import InscripcionesPage from '@/pages/InscripcionesPage';
import MiembrosPage from '@/pages/MiembrosPage';

// Esto es de las páginas creadas para Admin, no llegamos con el tiempo. Intentamos usar Python en el backend pero no encontramos ningún hosting en el cual almacenarlo. Así que ustedes (segundo grupo) tendrán que hacerlo con PHP
/*
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
import AdminIndexImagenesPage from '@/pages/admin/imagenes';
import AdminAgregarImagenesPage from '@/pages/admin/imagenes/AgregarPage';
import AdminModificarImagenesPage, {loader as AdminModificarImagenesLoader} from '@/pages/admin/imagenes/ModificarPage';
import AdminEditarImagenesPage, {loader as adminEditImagenLoader, action as adminEditImagenAction} from '@/pages/admin/imagenes/ModificarPage/EditarPage';
import AdminDestroyImagenesPage, {action as adminDestroyImagenAction} from '@/pages/admin/imagenes/ModificarPage/DestroyPage/DestroyPage';
*/

/*
Nota[0.2]: Ahora viene la mejor parte. Con `createBrowserRouter([])` creamos un navegador de rutas y lo almacenamos en una constante ()`router`) para luego usarlo en el proveedor de rutas (Ver Nota[0.3.1]). El argumento que le pasamos es un array o lista ([]), como quieras llamarle, que contiene objetos. El objeto tiene ciertas propiedades estándares que react router necesita, no es que podemos poner cualquier cosa. Algunas de ellas son:
    - path. Especificamos el nombre de la ruta (o subcarpeta).
    - element. Renderiza el elemento cuando la página se encuentre en la ruta.
    - errorElement. En caso de que algo no salga bien, muestra el elemento de error.
    - children. Especifica las rutas hijas de la ruta. Por ejemplo: "/micuenta" -> "/micuenta/imagen_de_perfil" o "/micuenta/cambiar_nombre" la ruta padre es "/micuenta" y las rutas hijas son "imagen_de_perfil" y "cambiar_nombre"
*/
// Crear enrutador
const router = createBrowserRouter([
    // La ruta raíz tendrá a todas las demás rutas creadas como hijas. Por algo se llamar raíz. Es la principal
    {
        path: "/",
        element: <RootPage />,
        // Por eso en esta ruta vamos a colocar un errorElement, no hace falta ponerlo en todas las rutas. La logica es que cuando algo falle en las rutas hijas, si no tienen un errorElement definido, se ejecuta este errorElement.
        errorElement: <ErrorPage path="/" />, // Tiene un atributo path="/". Ese atributo lo que hace es decirle al componente a que ruta se va a redireccionar en caso de que falle (ver Nota[1.6]).
        children: [
            {
                // ¿index? Index es una ruta que podemos mostrar en caso de que el usuario no haya escodigo nada, no has entendido ¿verdad?. En este caso, este IndexPage lo que hace es mostrar todo el contenido que vemos en la página principal de la escuela, o casi. Ya que el elemento RootPage muestra la barra de navegación, el footer, y cualquier otro componente que se repita en todas las rutas. Más adelante entenderás porque establecemos una ruta Index, pero si quieres indagar más acerca de esto puedes buscar Outlet de react-router y/o leer la Nota[1.3].
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
    // Estas rutas comentadas eran las que usamos para el backend. Te recomiendo que saltees estos comentarios. Ya que hay actions y loaders, que son conceptos muy importantes cuando trabajamos con routers, pero por ahora no hace falta que los sepas.
    /*{
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
                        index: true,
                        element: <AdminIndexImagenesPage />
                    },
                    {
                        path: "agregar",
                        element: <AdminAgregarImagenesPage />
                    },
                    {
                        path: "modificar",
                        element: <Outlet />,
                        children: [
                            {
                                index: true,
                                element: <AdminModificarImagenesPage />,
                                loader: AdminModificarImagenesLoader
                            },
                            {
                                path: "editar/:id",
                                element: <AdminEditarImagenesPage />,
                                action: adminEditImagenAction,
                                loader: adminEditImagenLoader
                            },
                            {
                                path: "destroy/:id",
                                element: <AdminDestroyImagenesPage />,
                                action: <adminDestroyImagenAction />
                            }
                        ]
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
    }*/
])

/*
Nota[0.3]: Última sección de este maravilloso archivo. Recapitulemos:
    - Ya importamos los archivos necesarios. Entre ellos las rutas y componentes.
    - Ya creamos un navegador de rutas, por el cual definimos las rutas y las rutas hijas. Lo cual, si lo vemos de manera más fácil, sería un mapa de rutas que le facilitamos a react-router para que implemente esas rutas en la página.
Ahora toca el tercer paso, renderizar. Este concepto "renderizar" no es tan complejo. Quiero que lo veas como "mostrar elementos visuales en la pantalla" así no te complicas tanto.

Para renderizar, utilizaremos la librería "ReactDOM". Como dato curioso "DOM" significa "Document Object Model", básicamente, DOM está relacionado con la estructura visual de la pantalla, el DOM es donde se renderiza la página, y si abres tu navegador y entras a una página web, verás que el DOM es practicamente lo que ves. Esa página que está debajo de la barra de navegación y de marcadores de tu navegador.

Quitando el relleno, con el método `createRoot` creamos la raíz donde se va a renderizar todos los componentes que creamos con ayuda de React. Si te fijas, el argumento que le pasamos es "document.getElementById('root')". Estamos obteniendo un div con el id root desde el archivo index.html que se encuentra en la carpeta principal del proyecto. Por lo cual, todo se renderizará en un html. Increíble!
*/

ReactDOM.createRoot(document.getElementById('root')).render( // Con el método render, renderizamos!
    <React.StrictMode> {/*Ignora React.StrictMode, no hace falta que sepas lo que es, y de igual manera, no cambia en nada que esté o no en este caso.*/}
        {/*<AuthProvider>*/ /* Ignoralo. Está deshabilitado. */}
            <RouterProvider router={router} /> {/* Nota[0.3.1]: RouterProvider es un elemento que react-router nos proporciona para proveer a toda nuestra página las rutas que creamos. Este componente se va a encargar de controlar la URL de la página y renderizar la ruta que coincida con el path de la URL. Nota que tiene un atributo "router", en el cual le pasamos el router que definimos anteriormente. */}
        {/*</AuthProvider>*/}
    </React.StrictMode>
);

/*
Nota[0.4]: Ya hemos finalizado con este archivo. Ahora te explicaré la estructura de carpetas de este proyecto y te daré una breve descripción de cada uno. Cada archivo, o la mayoría, tendrá notas con las cuales podrás orientarte.

Estructura del proyecto:
    [1] "pages". Esta carpeta contiene los componentes de las rutas. Aquí se encuentra todo lo relacionado con lo que ves en la página web. Te recomiendo arrancar por aquí. Ve a la cinta de búsqueda de visual studio code, en el panel izquierdo y busca Nota[1.0] y tendrás acceso a la primera nota, y así podrás hacer con el resto.
    [2] "context". Deshabilitado. Esta carpeta contiene el archivo que utilizamos para proveer de un contexto a todos los componentes. Esto es un poco más técnico, sirve para comprender mejor el funcionamiento interno de la página.
    [3] "components". Esta carpeta contiene todos los componentes utilizados en los componentes de las páginas. Básicamente, lo que no encuentres en los componentes de las rutas, buscalo en esta carpeta. Por ejemplo, la barra de navegación, no encontrarás todo su código en el componente "/pages/RootPage", allí solo encontrarás algo como esto: "<Navbarr />". Para acceder a su código completo deberás ir a "/components/navbar/navbar.jsx"
    [4] "assets". Archivos, imagenes y JSONs estáticos. Aquí encontrarás los recursos necesarios para la página web.
    [5] "config". Deshabilitado. Esto está relacionado con el backend. Pero está obsoleto debido a que no llegamos a implementar el backend. Dato: Si quieres ojear un poco el backend, en GitHub se encuentra el repositorio.
*/