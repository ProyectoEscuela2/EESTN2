// Generales
import { Link } from "react-router-dom";
// Iconos
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// Estilos
import './styles.css'

export default function Galeria({id, src, alt, fecha}){
    return <div className="contenedor-admin-galeria">
        <div className="admin-galeria-alt">
            {alt}
        </div>

        <img src={src} alt={alt} className="imagen-admin-galeria" />
        
        <div className="funcionesImagenes">
            <div className="admin-galeria-fecha">
                <span>{fecha || "09/12/2018"}</span>
            </div>
        
            <div className="admin-galeria-buttons">
                <div className="botonEditar">
                    <Link to={`/admin/imagenes/modificar/editar/${id}`}>
                        <FaEdit size={35} />
                    </Link>
                </div>
        
                <div className="botonEditar eliminar">
                    <Link to={`/admin/imagenes/modificar/destroy/${id}`}>
                        <MdDelete size={35}/>
                    </Link>
                </div>
            </div>
        </div>
    </div>   
}