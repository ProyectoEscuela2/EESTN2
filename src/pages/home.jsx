import '../styles/App.css'
import { Seccion } from "../components/seccion/seccion";
import {CarruselTriple} from "../components/carruseles/carrusel";
import '../components/iconList/lista'
import { Lista } from '../components/iconList/lista';
import { HOME_DATA } from '../assets/static/home/home';
import { useEffect, useState, useContext } from 'react';
import { IMAGENES } from "../assets/static/Galerias/imagenes";
import { Link } from 'react-router-dom';
import { espContexto } from '../App';

export default function Home(){

    const fecha = new Date()
    const year = fecha.getFullYear()
    const nacEscuela = 1924
    const [escuela, setEscuela] = useState(year - nacEscuela)
    const [viewport, setViewport] = useState(window.innerWidth)
    const {espActiveContx, handleEsp} = useContext(espContexto)


    return<>

        <div className="contInicio">
            <div className="gradient"></div>
                <div className= "textInicio">
                    <p className="animation2">¡Bienvenido!</p>
                    <h1 className="animation2">Escuela de Educación Secundaria Técnica 2</h1>
                    <p className="animation2">Gral. Ing. Manuel N. Savio, San Nicolás</p>
                    <h2 className="animation3"> ¡Celebrando los {escuela} años de nuestra institución!</h2>
            </div>     
        </div>

        <div className="contNosotros">
                <h2>¿Quiénes Somos?</h2>
            <div className="wrapper">
                <div className="contTexto">
                    <p>Fundada en 1924, la Escuela de Educación Secundaria Técnica N°2 Gral. Ing. Manuel Nicolás Savio de San Nicolás es una institución educativa en pleno proceso de transformación. La continua adaptación de su oferta educativa a las necesidades de la formación integral de sus alumnos, la propone como protagonista y referente dentro del ámbito educativo. <br />
                    Desde siempre vinculada con la sociedad, en los últimos años este vínculo se ha fortalecido a través de distintos programas. Vinculaciones con entidades privadas como Ternium, ACA o entidades públicas como la Municipalidad de San Nicolás le permite evolucionar al ritmo de las necesidades de toda la comunidad. <br />
                    En la actualidad cuenta con la mayor oferta en tecnicaturas de la zona pudiendo optar por Electromecánica, Informática, Maestro Mayor de Obras o Química.
                    <br /> <br />
                    Situada estratégicamente en el centro neurálgico de la ciudad, con un amplio Taller, laboratorios de Informática, laboratorios de química de última generación, ha sido elegida por las distintas generaciones de nicoleños como la escuela técnica por excelencia.
                    </p>
                </div>
                <div className="contImg">
                    <Link to="/galeria">
                        <img src="\imagenes\imagenes\instalaciones\instalaciones3.webp" alt="imagenHome" />
                    </Link>
                </div>
            </div>
        </div>

        <div className="contObjetivos">
            <div className="contenedor-sec-main">
            <Seccion titulo="Nuestros objetivos">
                    <Lista data={HOME_DATA}/>
            </Seccion>

            </div>
        </div>

        <h2>Nuestras Especialidades Técnicas</h2>
        <div className="contEspecialidades">
                <div className="wrapper ">
                    
                    <Link to="/especialidades" className="info textoBlanco"><div onMouseEnter={() => handleEsp(0)} >
                        Informática
                    </div></Link>

                    <Link to="/especialidades" className="quimica textoBlanco"><div onMouseEnter={() => handleEsp(2)} >
                        Química
                    </div></Link>

                    <Link to="/especialidades" className="mmo textoBlanco"><div onMouseEnter={() => handleEsp(3)} >
                        Construcciones
                    </div></Link>

                    <Link to="/especialidades" className="electro textoBlanco"><div onMouseEnter={() => handleEsp(1)} >
                        Electromecánica
                    </div></Link>

                </div>
            </div>


        <h2>Galeria</h2>
        <div className="alinear">
        <div className="contCarrousel">
            <CarruselTriple tamañoGrupos={viewport > 900 ? "3" : "1"} imagenesList={IMAGENES} />
        </div>
        </div>
        
    </>
}