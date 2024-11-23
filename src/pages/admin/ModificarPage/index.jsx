// General
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
// Estilos
import "./style.css";
import { FaFileSignature } from "react-icons/fa";
import { RiImageEditFill } from "react-icons/ri";


//Lo que hice es que dentro de modifiar haya un menu donde elijas si modificar archivos o imagenes, porque sino el navbar me iba a quedar feo

//Ahora tendrias admin/modificar/archivos y admin/modificar/imagenes


// Esto creo que habria que pasarlo a admin/modificar/archivos, pero el que sabes aca sos vos
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

    return<section>
    <div className="contenedorSeccion">
        <div className="contenedorBotonesSec">
            
                <div className="BotonSec">
                    <RiImageEditFill size={70} />
                    <p>Imagenes</p>
                </div>

                <div className="BotonSec">
                    <FaFileSignature size={70} />
                    <p>Archivos</p>
                </div>
        </div>
    </div>
    </section>
}
