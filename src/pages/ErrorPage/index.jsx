/*
Nota[1.6]: Bienvenido. En esta sección aprenderás un poco sobre el manejo de errores con react router.
*/

// Necesitaremos importar el hook de react router llamado useRouterError para poder manejar el error
import { useRouteError, Link } from "react-router-dom";
import './style.css';

// Creamos y exportamos el componente ErrorPage
export default function ErrorPage({path}) {
    // Con useRouterError obtenemos el objeto que contiene el error que ha ocurrido y lo almacenamos en una constante llamada error
    const error = useRouteError();
    // También lo mostramos por consola para más detalles
    console.log(error)

    // Y retornamos una pequeña vista al usuario para que tenga cierto entendimiento de lo que ha ocurrido y porque no anda la página.
    return <div className="ErrorPage">
        <h2>¡Oops!</h2>
        <p>Ha ocurrido un error inesperado.</p>
        {/* Con error.statusText le damos una pequeña descripción (en inglés) de cual es el error que ocurrió */}
        <i>{error.statusText}</i>
        {/* Cuando lo llamamos le indicamos a que path debe ir, así podremos utilizarlo en cualquier ruta. */}
        <Link to={path}>Volver a inicio</Link>
    </div>
}

// Y eso es todo por aquí. Te recomiendo ir a la Nota[3.1] para continuar
