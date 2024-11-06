// Generales
import { useEffect, useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";
// Estilos
import "./style.css";

export async function action({ request }) {
    const formData = await request.formData();

    // Petición POST al servidor
    const res = await fetch("http://localhost:8000/archivos", {
        method: "POST",
        mode: "cors",
        body: formData,
    });
    const data = await res.json();

    // Retorna el archivo subido
    return redirect("/admin/modificar");
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
                        <textarea placeholder="max. 250 caracteres" maxLength="250" rows="5" cols="40" name="descripcion" id="anadirInput1"></textarea>
                        <br />
                        <label htmlFor="anaidrInput2">Estado del archivo:</label>
                        <br />
                        <select id="anaidrInput2" style={{marginBottom: "15px", fontSize: "1.6em", padding: "0 5px"}} name="activo" required>
                            <option value={true}>Activo</option>
                            <option value={false}>Inactivo</option>
                        </select>
                        <br />
                        <label htmlFor="anadirInput3">Subir archivo</label>
                        <br />
                        <input type="file" name="file" id="anadirInput3" accept="application/pdf" required />
                        <br />

                        <button type="submit">Subir</button>
                    </Form>
                </div>
            </div>
        </div>
    </section>
}
