// Generales
import { Form, redirect } from "react-router-dom";
// Personalizados
import { API_URL } from "@/config/config";
// Estilos
import "./style.css";

export async function action({ request }) {
    const formData = await request.formData();

    // Petición POST al servidor
    const res = await fetch(`${API_URL}/imagenes`, {
        method: "POST",
        mode: "cors",
        body: formData,
    });
    const data = await res.json(); // Se almacena por si en un futuro se desea hacer algo con esto

    // Retorna el archivo subido
    return redirect("/admin/imagenes/modificar");
}

export default function AdminAgregarPage(){
    return <section>
        <div className="contenedorAnadir">
            <div className="anadir">
                <div className="anadirTitulo">
                    <h1>Añadir archivo</h1>
                </div>
                
                <div className="anadirInputs">
                    {/* encType -> Permite enviar el formulario con archivos */}
                    <Form method="post" encType="multipart/form-data">
                        <label htmlFor="anadirInput0">Ingresar Nombre</label>
                        <br />
                        <input type="text" name="nombre" id="anadirInput0" required />
                        <br />
                        <label htmlFor="anadirInput1">Ingresar descripcion</label>
                        <br />
                        <textarea placeholder="max. 50 caracteres" maxLength="50" rows="5" cols="40" name="alt" id="anadirInput1"></textarea>
                        <br />
                        <label htmlFor="anaidrInput2">Categoría de la imagen:</label>
                        <br />
                        <select id="anaidrInput2" style={{marginBottom: "15px", fontSize: "1.6em", padding: "0 5px"}} name="categoria_id" required>
                            {/* TODO: Traer datos de categorias */}
                            <option value={1}>Instalaciones</option>
                            <option value={2}>Informática</option>
                            <option value={3}>Electromecánica</option>
                            <option value={4}>Química</option>
                            <option value={5}>Construcciones</option>
                            <option value={6}>Eventos</option>
                        </select>
                        <br />
                        <label htmlFor="anadirInput3">Subir imagen</label>
                        <br />
                        <input type="file" name="file" id="anadirInput3" accept="image/*" required />
                        <br />

                        <button type="submit">Subir</button>
                    </Form>
                </div>
            </div>
        </div>
    </section>
}
