// General
import { Link } from 'react-router-dom'
// Iconos
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
// Estilos
import "./style.css"

export default function AdminIndexPage() {
    return <section>
        <div className="contenedorSeccion">
            <div className="contenedorBotonesSec">
                <Link to="/admin/agregar">
                    <div className="BotonSec">
                        <FaPlus size={70}/>
                        <p>Agregar</p>
                    </div>
                </Link>

                <Link to="/admin/modificar">
                    <div className="BotonSec">
                        <FaEdit size={70}/>
                        <p>Modificar</p>
                    </div>
                </Link>
            </div>
        </div>
    </section>
}