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
import { Seccion, SeccionInversa } from "../components/seccion/seccion";
import Lista from "../components/iconList/lista";

const data = [INFO_DATA,ELECTRO_DATA,QUI_DATA,MMO_DATA ]

export default function Especialidades(){

    
    const [isActive, setActive] = useState(0)
    const [dataActive, setData] = useState(data[0])

    const changeActive = (id) => {

        setActive(id)
        setData(data[id])

    }
    return <>
    
        <section>
            <nav className="esp-nav">
                <div className="esp-contenedor-nav">
                    <ul className="esp-ul-nav">
                        <li onClick={() => changeActive(0)} id="a0" className={`esp-li-nav ${isActive == 0 ? "active" : ""}`}><span> <FaMicrochip className="esp-nav-icon" size={25}/> {isActive == 0 ? "Informatica" : ""}</span></li>
                        <li onClick={() => changeActive(1)} id="1" className={`esp-li-nav ${isActive == 1 ? "active" : ""}`}><span> <BsTools className="esp-nav-icon" size={25}/> {isActive == 1 ? "Electromecanica" : ""}</span></li>
                        <li onClick={() => changeActive(2)} id="2" className={`esp-li-nav ${isActive == 2 ? "active" : ""}`}><span> <FaFlask className="esp-nav-icon" size={25}/> {isActive == 2 ? "Quimica" : ""}</span></li>
                        <li onClick={() => changeActive(3)} id="3" className={`esp-li-nav ${isActive == 3 ? "active" : ""}`}><span> <FaBuilding className="esp-nav-icon" size={25}/> {isActive == 3 ? "Construcciones" : ""}</span></li>
                    </ul>
                </div>
            </nav>

            <article>

                <div className="video-esp-main">
                    <iframe className="video-esp" src={dataActive.videoURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                
                <Seccion titulo={dataActive.titulo} urlBoton={dataActive.diseñoCurricularSRC} textoBoton="Descargar diseño curricular"><p>{dataActive.acercaDeEspecialidad}</p></Seccion>

                <SeccionInversa verMas="true" textoBoton="Ver mas" titulo="Pasantías"><Lista>{dataActive.practicasInfo}</Lista></SeccionInversa>


            </article>
        </section>

    </>
}