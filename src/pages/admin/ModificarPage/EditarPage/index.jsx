import { useLoaderData } from "react-router";

export async function loader({ params }) {
    const { id } = params;

    // Obtener datos del archivo desde la db

    return id;
}

export default function AdminEditarPage() {
    const id = useLoaderData();
    console.log(id);

    return <section>
        <div className="contenedorAnadir">
            <div className="anadir">
                <div className="anadirTitulo">
                    <h1>Añadir archivo</h1>
                </div>
                
                <div className="anadirInputs">
                    {/* TODO: Action -> Modificar archivo */}
                    <form action="" method="post">
                        {/* Los inputs se van a rellenar con los datos del archivo */}
                        <label htmlFor="anadirInput0">Ingresar Nombre</label>
                        <br />
                        <input type="text" name="" id="anadirInput0" />
                        <br />
                        <label htmlFor="anadirInput1">Ingresar descripcion</label>
                        <br />
                        <textarea placeholder="max. 250 caracteres" maxLength="250" rows="5" cols="40" name="" id="anadirInput1"></textarea>
                        <br />
                        <label htmlFor="anaidrInput2">Estado del archivo:</label>
                        <br />
                        <select id="anaidrInput2" style={{marginBottom: "15px", fontSize: "1.6em", padding: "0 5px"}}>
                            <option value="1">Activo</option>
                            <option value="0">Inactivo</option>
                        </select>
                        <br />

                        <button type="submit">Confirmar cambios</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}