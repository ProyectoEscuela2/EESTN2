// General
import { redirect, Link, Form } from "react-router-dom";
// Personalizados
import { API_URL } from "@/config/config";
// Estilos
import "./style.css";

export async function action({ params }) {
    const { id } = params;
    // Función para eliminar un registro.
    await fetch(`${API_URL}/archivos/${id}`, {
        method: "DELETE"
    });

    // Volver a la página "Modificar"
    return redirect("/admin/archivos/modificar");
}

export default function DestroyPage() {
    return <section className="DestroySection"> 
        <div className="alerta">
            <header>
                <h4>¿Estás seguro de que quieres eliminar el archivo?</h4>
            </header>
            <section>
                <p>Una vez que borres el archivo no podrás recuperarlo. ¿Deseas continuar?</p>
                <div className="contenedor-botones">
                    <Link to="/admin/archivos/modificar" className="btn btn-danger">Cancelar</Link>
                    <Form method="delete">
                        <button className="btn btn-dark">Borrar</button>
                    </Form>
                </div>
            </section>
        </div>
    </section>
}
