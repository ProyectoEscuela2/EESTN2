// Iconos
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// Estilos
import "./style.css"
import { Link } from "react-router-dom";

export default function TablaAdmin({id, nombre, descripcion, fecha_creacion}) {
    return <div className="contenedorTabla">
        {/* Header */}
        <div className="tablaTitulo">
            <h1>{nombre}</h1>
        </div>

        {/* Body */}
        <div className="tablaCuerpo">
            <div className="tablaDesc">
                {descripcion || <b>Aun no hay una descripción. ¡Modifica el archivo para agregar una!</b>}
            </div>

            <div className="tablaFecha">
                {fecha_creacion}
            </div>

            {/* Botones de opciones */}
            <div className="tablaAside">
                <div className="tablaBoton">
                    <Link to={`/admin/archivos/modificar/editar/${id}`}>
                    <FaEdit size={35} />
                    </Link>
                </div>
                <div className="tablaBoton">
                    <Link to={`/admin/archivos/modificar/destroy/${id}`}>
                        <MdDelete size={35} />
                    </Link>
                </div>    
            </div>
        </div>
    </div>
}
