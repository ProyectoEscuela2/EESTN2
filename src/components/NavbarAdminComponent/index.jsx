// General
import { Link } from 'react-router-dom'
// Estilos
import "./style.css"

export default function NavbarAdmin() {
    return <nav className="NavbarAdmin">
        <aside>
            <div className="contenedorImagenAside">
                <h1>EEST Nº 2 Admin</h1>
                <img src="/imagenes/logos/logo_escuela.png" alt="imagen aside, logo de la escuela" />
            </div>
            
            <div className="contenedorBotonesAside">
                <ul>
                    <Link to="/admin"><li>Inicio</li></Link>
                    <Link to="/admin/agregar"><li>Agregar</li></Link>
                    <Link to="/admin/modificar"><li>Modificar</li></Link>
                    <Link to="/logout"><li>Cerrar Sesión</li></Link>
                </ul>
            </div>
        </aside>
    </nav>
}