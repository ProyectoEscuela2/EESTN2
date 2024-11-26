// General
import { Link } from 'react-router-dom'
// Iconos
import { FaImages } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
// Estilos
import "../style.css"

export default function AdminIndexImagenesPage() {
    return <section>
        <div className="contenedorSeccion">
            <div className="contenedorBotonesSec">
                <Link to="/admin/imagenes/agregar">
                    <div className="BotonSec">
                        <FaImages size={70}/>
                        <p>Agregar</p>
                    </div>
                </Link>

                <Link to="/admin/imagenes/modificar">
                    <div className="BotonSec">
                        <FaEdit size={70}/>
                        <p>Modificar</p>
                    </div>
                </Link>
            </div>
        </div>
    </section>
}