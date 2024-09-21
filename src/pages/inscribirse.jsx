import { INSCRIPCION_HNOS } from "../assets/static/inscripciones/insc"
import "../styles/inscribirse.css"
export default function Inscribirse(){


    console.log()
    //Para agregar archivos hay que modificar el archivo en static/inscripciones/insc.js
    return<>
    

    <section className="inscribirse">
    <h2>Inscripciones</h2>

    <h3>Inscripción para hermanos de alumnos</h3>
    <div className="inscribirse-requisitos">
   
        {INSCRIPCION_HNOS.map((data) => (
            <div key={data.id} className="inscribirse-contenedor">
                <h4>{data.title}</h4>
                <a href={data.urlDescarga}><button>{data.text}</button></a>
            </div>

        ))}
    </div>

    <h3>El restos de las inscripciones abrira pronto.</h3>


    </section>
    </>

}