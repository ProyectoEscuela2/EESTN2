import { useState } from 'react'
import './seccion.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export function Seccion({titulo,children, textoBoton, urlBoton}){




    return<>
    
    <div className="contenedor-esp-main">
        <div className="titulo-esp-main">
            <div className="flex-aling-center">
                <h1>{titulo}</h1>
                {textoBoton ? <a href={urlBoton}><button>{textoBoton}</button></a> : ""}
             </div>
        </div>
        <div className="text-esp-main">
            {children}
        </div>
    </div>

    
    </>

}

export function SeccionInversa({titulo,children, textoBoton, urlBoton, verMas}){


    const [isActive2, setActive2] = useState(false)

    const handleMore = () =>{

        setActive2(!isActive2)

    }


    return<>
    
    <div className="contenedor-esp-main">
        <div className={`text-esp-main ${isActive2 ? "active2" : ""}`}>
            {children}
            {isActive2 ? <button className='ver-menos' onClick={verMas ? handleMore : ""}><FaArrowLeft size={40}/></button>  : "" }
        </div>
        <div className={`titulo-esp-main ${isActive2 ? "active2" : ""}`}>
            <div className="flex-aling-center">
                <h1>{titulo}</h1>
                {textoBoton ? <a href={urlBoton}><button onClick={verMas ? handleMore : ""}>{textoBoton}{verMas ? <FaArrowRight /> : "" }</button></a> : ""}
             </div>
        </div>
    </div>
    
    
    </>


}
