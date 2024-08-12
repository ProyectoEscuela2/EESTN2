import { useState } from 'react'
import './seccion.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export function Seccion({titulo, children, boton, urlBoton, invertida, className}){
    return <div className={"contenedor-sec-main" + (className ? ` ${className}` : "")}>
        <div className={"titulo-sec-main" + (invertida ? " invertida" : "")}>
            <div className="flex-aling-center">
                <h2>{titulo}</h2>
                {boton && boton}
             </div>
        </div>

        <div className="text-sec-main">
            {children}
        </div>
    </div>
}

export function BotonSeccion({ textoBoton, urlBoton }) {
    return <a href={urlBoton} target="_blank" rel="noreferrer noopener">
        <button>{textoBoton}</button>
    </a>
}

export function BotonVerMas({ onClick, isVerMas }) {
    return <button onClick={onClick}>
        {!isVerMas ? "Ver más" : "Ver menos"}
    </button>
}
