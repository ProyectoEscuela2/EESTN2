// General
import { Link } from 'react-router-dom'
// Iconos
import { FaFilePdf } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
// Estilos
import "./style.css"

export default function AdminIndexPage() {
    return <section>
        <div className="contenedorSeccion">
            <div className="contenedorBotonesSec">
                <Link to="/admin/archivos">
                    <div className="BotonSec">
                        <FaFilePdf size={70}/>
                        <p>Archivos</p>
                    </div>
                </Link>

                {/* TODO: Modificar url por /admin/imagenes/ */}
                <Link to="/admin/archivos/modificar">
                    <div className="BotonSec">
                        <FaImages size={70}/>
                        <p>Imagenes</p>
                    </div>
                </Link>
            </div>
        </div>
    </section>
}