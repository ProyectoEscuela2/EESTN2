import { useRouteError, Link } from "react-router-dom";
import './style.css';

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error)

    return <div className="ErrorPage">
        <h2>¡Oops!</h2>
        <p>Ha ocurrido un error inesperado.</p>
        <i>{error.statusText}</i>
        <Link to="/admin">Volver a inicio</Link>
    </div>
}