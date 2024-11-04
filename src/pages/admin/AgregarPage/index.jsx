// Generales
import { useEffect, useState } from "react";
// Estilos
import "./style.css";

export default function AdminAgregarPage(){
    const [fecha, setFecha] = useState()

    useEffect(() => {
        setFecha(Date)
    },[]);

    return <section>
        <div className="contenedorAnadir">
            <div className="anadir">
                <div className="anadirTitulo">
                    <h1>Añadir archivo</h1>
                </div>
                
                <div className="anadirInputs">
                    {/* TODO: Action -> Agregar Archivo */}
                    <form action="" method="post">
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
                        <label htmlFor="anadirInput3">Subir archivo</label>
                        <br />
                        <input type="file" name="" id="anadirInput3" accept="application/pdf"/>
                        <br />

                        <button type="submit">Subir</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}
