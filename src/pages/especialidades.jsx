import { useEffect, useState } from "react"
import "../styles/especialidades.css"
import { FaMicrochip } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { FaFlask } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { MMO_DATA } from "../assets/static/especialidades/construcciones";
import { QUI_DATA } from "../assets/static/especialidades/quimica";
import { INFO_DATA } from "../assets/static/especialidades/informatica";
import { ELECTRO_DATA } from "../assets/static/especialidades/electromecanica";
import { Seccion, BotonSeccion } from "../components/seccion/seccion";
import Lista from "../components/iconList/lista";
import { CarruselTriple } from "../components/carruseles/carrusel";
import { IMAGENES } from "../assets/static/Galerias/imagenes";

const data = [INFO_DATA,ELECTRO_DATA,QUI_DATA,MMO_DATA ] // Aca se guardan los datos de todas las especialidades dentro de un array

export default function Especialidades(){

    
    const [isActive, setActive] = useState(0)
    const [dataActive, setData] = useState(data[0])//Aca se selecciona cuales son los datos activos por defecto
    const [galeriaLista, setGaleria] = useState()
    const [viewport, setViewport] = useState(window.innerWidth)


    const changeActive = (id) => {

        setActive(id)
        setData(data[id])//aca se cambia cuales son los datos activos, es decir, lo que se tiene que mostrar

    }

    useEffect(()=>{
        // GALERIAS[dataActive.titulo]
        setGaleria(IMAGENES.filter(({especialidad}) => especialidad === dataActive.titulo))//aca se actualizan las imagenes segun cuales datos esten activos

    },[dataActive])
    return <>

        <section>
            <nav className="esp-nav">
                <div className="esp-contenedor-nav">
                    <ul className="esp-ul-nav">
                        <li onClick={() => changeActive(0)} id="a0" className={`esp-li-nav ${isActive == 0 ? "esp-active" : ""}`}><div> <FaMicrochip className="esp-nav-icon" size={25}/> <span className="esp-nav-text">{isActive == 0 ? "Informatica" : ""}</span></div></li>
                        <li onClick={() => changeActive(1)} id="1" className={`esp-li-nav ${isActive == 1 ? "esp-active" : ""}`}><div> <BsTools className="esp-nav-icon" size={25}/> <span className="esp-nav-text">{isActive == 1 ? "Electromecanica" : ""}</span></div></li>
                        <li onClick={() => changeActive(2)} id="2" className={`esp-li-nav ${isActive == 2 ? "esp-active" : ""}`}><div> <FaFlask className="esp-nav-icon" size={25}/> <span className="esp-nav-text">{isActive == 2 ? "Quimica" : ""}</span></div></li>
                        <li onClick={() => changeActive(3)} id="3" className={`esp-li-nav ${isActive == 3 ? "esp-active" : ""}`}><div> <FaBuilding className="esp-nav-icon" size={25}/> <span className="esp-nav-text">{isActive == 3 ? "Construcciones" : ""}</span></div></li>
                    </ul>{// El nav de especialidades, la funcion changeActive cambia los estados isActive y dataActive,
                    }
                </div>
            </nav>

            <article>

                <div className="video-esp-main">
                    <iframe className="video-esp" src={dataActive.videoURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                
                <Seccion
                    titulo={dataActive.titulo}
                    boton={
                        <BotonSeccion
                            urlBoton={dataActive.diseñoCurricularSRC}
                            textoBoton="Descargar diseño curricular"
                        />
                    }
                >
                    <p>{dataActive.acercaDeEspecialidad}</p>
                </Seccion>
                
                <h2 className="carT-titl">Galeria de la especialidad</h2>
                <div className="align-center">
                <div className="contenedor-carrusel-esp">
                 {galeriaLista ? <CarruselTriple tamañoGrupos={viewport > 600 ? "3" : "2"} imagenesList={galeriaLista}/> : ""}
                </div>
                </div>

                <Seccion invertida titulo="Pasantías"><Lista>{dataActive.practicasInfo}</Lista></Seccion>


            </article>
        </section>

    </>
}