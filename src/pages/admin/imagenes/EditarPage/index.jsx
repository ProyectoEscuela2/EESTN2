import "./styles.css";

import { useState } from "react";

import Galeria from "@/components/GaleriaAdminComponent";

//MUY IMPORTANTE ACORDARSE DE BORRAR LA CARPETA /borrarLuego DE /public/imagenes ANTES DE SUBIR LA PAGINA AL SERVIDOR

export default function AdminEditarImagenesPage(){
    
    //Esto controla los estilos de los filtros
    const [isActive, changeIsActive] = useState(1)


    function cambiarActivo(id){

        changeIsActive(id)


    }

    return<section>
        
    <div className="contenedorEditar">

    <div className="editar">
        <div className="editarTitulo">
            <h1>Editar imagenes</h1>
        </div>

        <div className="editarContenedorTabla">
            <div className="filtro">
                <ul className="ul-filtro">
                    <li className={isActive == 1 ? 'li-filtro activo' : 'li-filtro' } onClick={() => cambiarActivo(1)} >Todas</li>
                    <li className={isActive == 2 ? 'li-filtro activo' : 'li-filtro' } onClick={() => cambiarActivo(2)} >Categoria 1</li>
                    <li className={isActive == 3 ? 'li-filtro activo' : 'li-filtro' } onClick={() => cambiarActivo(3)} >Categoria 2</li>
                    <li className={isActive == 4 ? 'li-filtro activo' : 'li-filtro' } onClick={() => cambiarActivo(4)} >Categoria 3</li>

                </ul>
            </div>

            
            <div className="galeria-admin">

                    <Galeria src="\imagenes\borrarLuego\imagen1.jpg" alt="Descripcion generica"/>
                    <Galeria src="\imagenes\borrarLuego\imagen1.jpg" alt="Descripcion generica"/>
                    <Galeria src="\imagenes\borrarLuego\imagen1.jpg" alt="Descripcion generica"/>

            </div>
        </div>
    </div>
    

    </div>

    </section>

}