import './seccion.css'

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

export function SeccionInversa({titulo,children, textoBoton, urlBoton}){


    return<>
    
    <div className="contenedor-esp-main">
        <div className="text-esp-main">
            {children}
        </div>
        <div className="titulo-esp-main">
            <div className="flex-aling-center">
                <h1>{titulo}</h1>
                {textoBoton ? <a href={urlBoton}><button>{textoBoton}</button></a> : ""}
             </div>
        </div>
    </div>
    
    
    </>


}
