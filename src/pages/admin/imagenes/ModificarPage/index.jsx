// Generales
import { useLoaderData } from "react-router";
import { useState } from "react";
// Personalizados
import Galeria from "@/components/GaleriaAdminComponent";
import { API_URL } from '@/config/config';
// Estilos
import "./styles.css";

export async function loader() {
    const res = await fetch(`${API_URL}/imagenes`, {
        method: "GET"
    });
    const { data } = await res.json();
    return data || [];
}

// MUY IMPORTANTE ACORDARSE DE BORRAR LA CARPETA /borrarLuego DE /public/imagenes ANTES DE SUBIR LA PAGINA AL SERVIDOR

export default function AdminModificarImagenesPage(){
    const data = useLoaderData()
    console.log(data)
    //Esto controla los estilos de los filtros
    const [isActive, changeIsActive] = useState(1)

    const cambiarActivo = (id) => changeIsActive(id)

    return <section>
        <div className="contenedorEditar">
            <div className="editar">
                <div className="editarTitulo">
                    <h1>Editar imagenes</h1>
                </div>

                <div className="editarContenedorTabla">
                    <div className="filtro">
                        <ul className="ul-filtro">
                            <li className={isActive == 0 ? 'li-filtro activo' : 'li-filtro' } onClick={() => cambiarActivo(1)} >Todas</li>
                            <li className={isActive == 1 ? 'li-filtro activo' : 'li-filtro' } onClick={() => cambiarActivo(2)} >Instalaciones</li>
                            <li className={isActive == 2 ? 'li-filtro activo' : 'li-filtro' } onClick={() => cambiarActivo(3)} >Informática</li>
                            <li className={isActive == 3 ? 'li-filtro activo' : 'li-filtro' } onClick={() => cambiarActivo(4)} >Electromecánica</li>
                            <li className={isActive == 4 ? 'li-filtro activo' : 'li-filtro' } onClick={() => cambiarActivo(4)} >Química</li>
                            <li className={isActive == 5 ? 'li-filtro activo' : 'li-filtro' } onClick={() => cambiarActivo(4)} >Construcciones</li>
                            <li className={isActive == 6 ? 'li-filtro activo' : 'li-filtro' } onClick={() => cambiarActivo(4)} >Eventos</li>
                        </ul>
                    </div>

                    <div className="galeria-admin">
                        {data.length > 0 ? data.map(imagen => (
                            <Galeria
                                key={imagen.id}
                                id={imagen.id}
                                alt={imagen.alt}
                                fecha={imagen.fecha}
                                src={imagen.src}
                            />
                        )) : <span>Aun no se han cargado archivos</span>}
                    </div>
                </div>
            </div>
        </div>
    </section>
}
