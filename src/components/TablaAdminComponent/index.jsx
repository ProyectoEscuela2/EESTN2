// Iconos
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// Estilos
import "./style.css"
import { Link } from "react-router-dom";

export default function TablaAdmin({id, nombre, descripcion, fecha, src}) {
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
                {descripcion}
            </div>

            <div className="tablaFecha">
                {fecha}
            </div>

            {/* Botones de opciones */}
            <div className="tablaAside">
                <div className="tablaBoton">
                    {/* <button onClick={funcionEditar}>
                        <FaEdit size={35} />
                    </button> */}
                    <Link to={`/admin/modificar/editar/${id}`}>
                        <FaEdit size={35} />
                    </Link>
                </div>
                <div className="tablaBoton">
                    {/* <button onClick={funcionEliminar}>
                        <MdDelete size={35} />
                    </button> */}
                    {/* TODO: NO anda. El action está mal hecho */}
                    <Link to={`/admin/modificar/destroy/${id}`}>
                        <MdDelete size={35} />
                    </Link>
                </div>    
            </div>
        </div>
    </div>
}
