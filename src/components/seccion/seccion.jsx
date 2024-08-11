import { useState } from 'react'
import './seccion.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export function Seccion({titulo,children, textoBoton, urlBoton}){




    return<>
    
    <div className="contenedor-sec-main">
        <div className="titulo-sec-main">
            <div className="flex-aling-center">
                <h2>{titulo}</h2>
                {textoBoton ? <a href={urlBoton} target="_blank" rel="noreferrer noopener"><button>{textoBoton}</button></a> : ""}
             </div>
        </div>
        <div className="text-sec-main">
            {children}
        </div>
    </div>

    
    </>

}

export function SeccionInversa({titulo,children, textoBoton, urlBoton}){

    return<>
    
    <div className="contenedor-sec-main">
        <div className={`text-sec-main`}>
            {children}
        </div>
        <div className={`titulo-sec-main`}>
            <div className="flex-aling-center">
                <h2>{titulo}</h2>
                {textoBoton ? <a href={urlBoton} target="_blank" rel="noreferrer noopener"><button>{textoBoton}</button></a> : ""}
             </div>
        </div>
    </div>
    
    
    </>


}
