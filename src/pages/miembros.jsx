import "../styles/miembros.css"
import { MIEMBROS_DATA } from "../assets/static/miembros/miemb"
import { FaGithub } from "react-icons/fa";

export default function Miembros(){


    const año2024 = MIEMBROS_DATA.filter((MIEMBROS_DATA) => MIEMBROS_DATA.año == "2024")

    console.log(año2024)

    return<>
    <div className="gitHub">
    <h3>¡Visitá nuestro GitHub!</h3>
    <a href="https://github.com/GrupoDAD"><FaGithub className='contacto-redes-icon github-contacto'/></a>
    </div>
    
    <h2>Miembros del Grupo</h2>

    <div className="contenedor-miembros">
        

        <div className="miembros-2024">
            <h3>Año 2024</h3>
            <ul>
            {año2024.map((data)=>(

                <a href={data.github}><li key={data.id} className="li-miembros">{data.nombre}</li></a>
                
            ))}
            </ul>
        </div>
    </div>
    </>
}