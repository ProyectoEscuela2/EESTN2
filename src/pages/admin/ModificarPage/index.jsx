// Componentes
import TablaAdmin from "@/components/TablaAdminComponent";
// Estilos
import "./style.css";

export default function AdminModificarPage(){
    return <section>
        <div className="contenedorEditar">
            <div className="editar">
                <div className="editarTitulo">
                    <h1>Editar archivos</h1>
                </div>

                <div className="editarContenedorTabla">
                    {/* TODO: Traer lista de archivos y renderizarlas con map */}
                    <TablaAdmin id={1} nombre="ExampleName" descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reiciendis quibusdam sapiente porro exercitationem recusandae. Numquam et eveniet in ducimus esse nostrum suscipit unde qui quaerat, vitae reprehenderit, ea harum?dwadwadawdawdawdawklda" fecha="01/01/2024" />
                </div>
            </div>
        </div>
    </section>
}
