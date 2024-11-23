// Iconos
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// Estilos
import "./style.css"
import { Link } from "react-router-dom";

export default function TablaAdmin({id, nombre, descripcion, fecha_creacion}) {
    // TODO: Estas funciones van a ser reemplazadas por actions probablemente.
    const funcionEditar = () =>{
        //futuro codigo...
    }

    const funcionEliminar = () =>{
        //futuro codigo...
    }

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
                    <Link to={`/admin/modificar/editar/${id}`}>
                    <FaEdit size={35} />
                    </Link>
                </div>
                <div className="tablaBoton">
                    <Link to={`/admin/modificar/destroy/${id}`}>
                        <MdDelete size={35} />
                    </Link>
                </div>    
            </div>
        </div>
    </div>
}
