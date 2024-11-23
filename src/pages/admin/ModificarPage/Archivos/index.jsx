import TablaAdmin from '../../../../components/TablaAdminComponent/index'
import '../style.css'


export default function EditarArchivos(){

    return<section>
    <div className="contenedorEditar">
        <div className="editar">
            <div className="editarTitulo">
                <h1>Editar archivos</h1>
            </div>

            <div className="editarContenedorTabla">
                {data.map((archivo) => (
                    <TablaAdmin
                        key={archivo.id}
                        id={archivo.id}
                        nombre={archivo.nombre}
                        descripcion={archivo.descripcion}
                        fecha_creacion={archivo.fecha_creacion}
                    />
                ))}
            </div>
        </div>
    </div>
</section>

}