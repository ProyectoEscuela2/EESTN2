// General
import { useLoaderData } from "react-router-dom";
// Componentes
import TablaAdmin from "@/components/TablaAdminComponent";
// Estilos
import "./style.css";

export async function loader() {
    const res = await fetch("http://localhost:8000/archivos", {
        method: "GET"
    });
    const { data } = await res.json();

    return data;
}

export default function AdminModificarPage(){
    const data = useLoaderData()
    console.log(data)

    return <section>
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
