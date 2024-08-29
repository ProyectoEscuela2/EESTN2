import { INSCRIPCION_DATA } from "../assets/static/inscripciones/insc"
import "../styles/inscribirse.css"
export default function Inscribirse(){


    //Para agregar archivos hay que modificar el archivo en static/inscripciones/insc.js
    return<>
    

    <section className="inscribirse">
    <h2>Inscripciones</h2>
    <h3>Las inscripciones están cerradas por ahora, ¡volvé en otro momento!</h3>

    {/* <h3>Requisitos</h3>
    <div className="inscribirse-requisitos">
        {INSCRIPCION_DATA.map((data) => (

            <div key={data.id} className="inscribirse-contenedor">
                <h4>{data.title}</h4>
                <a href={data.urlDescarga}><button>{data.text}</button></a>
            </div>

        ))}
    </div> */}
    </section>
    </>

}