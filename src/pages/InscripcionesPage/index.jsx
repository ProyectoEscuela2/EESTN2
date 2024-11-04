// Archivos Estáticos
import { INSCRIPCION_HNOS } from "@/assets/static/inscripciones/insc"
// Estilos
import "./style.css"

export default function InscripcionesPage(){
    return <section className="inscribirse">
        <h2>Inscripciones</h2>

        <h3>Inscripción para hermanos de alumnos</h3>
        <p>Desde el 16 de septiembre al 27 de septiembre del corriente año se llevará a cabo la preinscripción a 1er año 2025 para los alumnos que tengan hermanos cursando en la Escuela. En los siguientes horarios: 
            <ul>
                <li>Turno mañana de 8:30hs a 10:30hs. </li>
                <li>Turno tarde: de 14hs a 16:30hs.</li>
            </ul>

            <br />
            
            El día de Inscripción se acordará con Gabinete, una entrevista.
            
            <br /><br />
            
            Los Requisitos a presentar en formato papel son los siguientes:
            <ul>
                <li>Planilla de inscripción con datos completos y actualizados. Al menos dos números de teléfono fijos.</li>
                <li>Fotocopia DNI</li>
                <li>Fotocopia Partida de Nacimiento</li>
                <li>Fotocopia Vacunas Obligatorias</li>
                <li>Constancia de alumno regular (6to año)</li>
                <li>Constancia de 6to año aprobado (antes del 20 de diciembre 2024)</li>
                <li>Acta Compromiso del Establecimiento (x2)</li>
                <li>Anexos Vestimenta (x2) - Ficha de datos</li>
                <li>Autorización salida - Acta uso de imagen</li>
                <li>Folio (tamaño oficio) - Carpeta con nepaco</li>
                <li>Acuerdo INST. DE CONVIVENCIA</li>
                <li>Cuadernillos de Práct. del lenguaje, Matemáticas e Inglés.</li>
                <li>Cooperadora $40.000 en efectivo o transferencia.
                    <br />Alias: cooperadoratec2 (Enviar comprobante al teléfono <strong>3364676886</strong>)
                </li>
            </ul>
        </p>

        <div className="inscribirse-requisitos">

            {INSCRIPCION_HNOS.map((data) => (
                <div key={data.id} className="inscribirse-contenedor">
                    <h4>{data.title}</h4>
                    <a href={data.urlDescarga} download={data.name}><button>{data.text}</button></a>
                </div>

            ))}
        </div>

        <h3>El resto de las inscripciones abrirá pronto.</h3>
    </section>
}