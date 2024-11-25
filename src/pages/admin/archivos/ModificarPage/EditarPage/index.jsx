// General
import { useLoaderData, Form, redirect } from "react-router-dom";
// Personalizados
import { API_URL } from "@/config/config";

export async function loader({ params }) {
    const { id } = params;
    const res = await fetch(`${API_URL}/archivos/${id}`);
    const { data } = await res.json();

    return data[0] || null;
}

export async function action({ request, params }) {
    const { id } = params;
    const formData = await request.formData();
    
    // Función para modificar el archivo
    await fetch(`${API_URL}/archivos/${id}`, {
        method: "PUT",
        body: formData
    });

    return redirect("/admin/archivos/modificar");
}

export default function AdminEditarPage() {
    const archivo = useLoaderData();
    console.log(archivo);

    return <section>
        <div className="contenedorAnadir">
            <div className="anadir">
                <div className="anadirTitulo">
                    <h1>Editar archivo</h1>
                </div>
                
                <div className="anadirInputs">
                    <Form method="put">
                        {/* Los inputs se van a rellenar con los datos del archivo */}
                        <label htmlFor="anadirInput0">Ingresar Nombre</label>
                        <br />
                        <input
                            type="text"
                            name="nombre"
                            id="anadirInput0"
                            defaultValue={archivo.nombre}
                        />
                        <br />
                        <label htmlFor="anadirInput1">Ingresar descripcion</label>
                        <br />
                        <textarea
                            placeholder="max. 250 caracteres"
                            maxLength="250"
                            rows="5"
                            cols="40"
                            name="descripcion"
                            id="anadirInput1"
                            defaultValue={archivo.descripcion}
                        ></textarea>
                        <br />
                        <label htmlFor="anaidrInput2">Estado del archivo:</label>
                        <br />
                        <select
                            id="anaidrInput2"
                            style={{
                                marginBottom: "15px",
                                fontSize: "1.6em",
                                padding: "0 5px"
                            }}
                            name="activo"
                            defaultValue={archivo.activo}
                        >
                            <option value="1">Activo</option>
                            <option value="0">Inactivo</option>
                        </select>
                        <br />

                        <button type="submit">Confirmar cambios</button>
                    </Form>
                </div>
            </div>
        </div>
    </section>
}
