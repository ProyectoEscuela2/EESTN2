// General
import { useLoaderData, Form, redirect } from "react-router-dom";
// Personalizados
import { API_URL } from "@/config/config";

export async function loader({ params }) {
    const { id } = params;
    const res = await fetch(`${API_URL}/imagenes/${id}`);
    const { data } = await res.json();

    return data[0] || null;
}

export async function action({ request, params }) {
    const { id } = params;
    const formData = await request.formData();
    
    // Función para modificar la imagen
    await fetch(`${API_URL}/imagenes/${id}`, {
        method: "PUT",
        body: formData
    });

    return redirect("/admin/imagenes/modificar");
}

export default function AdminEditarPage() {
    const imagen = useLoaderData();
    console.log(imagen);

    return <section>
        <div className="contenedorAnadir">
            <div className="anadir">
                <div className="anadirTitulo">
                    <h1>Editar Imagen</h1>
                </div>
                
                <div className="anadirInputs">
                    <Form method="put">
                        {/* Los inputs se van a rellenar con los datos de la imagen */}
                        <label htmlFor="anadirInput0">Ingresar Nombre</label>
                        <br />
                        <input
                            type="text"
                            name="nombre"
                            id="anadirInput0"
                            defaultValue={imagen.nombre}
                        />
                        <br />
                        <label htmlFor="anadirInput1">Ingresar descripcion</label>
                        <br />
                        <textarea
                            placeholder="max. 50 caracteres"
                            maxLength="50"
                            rows="5"
                            cols="40"
                            name="alt"
                            id="anadirInput1"
                            defaultValue={imagen.descripcion}
                        ></textarea>
                        <br />
                        <label htmlFor="anaidrInput2">Categoría de la imagen:</label>
                        <br />
                        <select
                            id="anaidrInput2"
                            style={{
                                marginBottom: "15px",
                                fontSize: "1.6em",
                                padding: "0 5px"
                            }}
                            name="categoria_id"
                            defaultValue={imagen.activo}
                        >
                            <option value={1}>Instalaciones</option>
                            <option value={2}>Informática</option>
                            <option value={3}>Electromecánica</option>
                            <option value={4}>Química</option>
                            <option value={5}>Construcciones</option>
                            <option value={6}>Eventos</option>
                        </select>
                        <br />

                        <button type="submit">Confirmar cambios</button>
                    </Form>
                </div>
            </div>
        </div>
    </section>
}
