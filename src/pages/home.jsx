import '../styles/App.css'
import { Seccion } from "../components/seccion/seccion";
import {CarruselTriple} from "../components/carruseles/carrusel";
import '../components/iconList/lista'
import { Lista } from '../components/iconList/lista';
import { HOME_DATA } from '../assets/static/home/home';
import { useEffect, useState } from 'react';
import { IMAGENES } from "../assets/static/Galerias/imagenes";
import { Link } from 'react-router-dom';

export default function Home(){

    const fecha = new Date()
    const year = fecha.getFullYear()
    const nacEscuela = 1924
    const [escuela, setEscuela] = useState(year - nacEscuela)

    return<>

        <div className="contInicio">
            <div className="gradient"></div>
                <div className= "textInicio">
                    <p className="animation2">¡Bienvenido!</p>
                    <h1 className="animation2">EEST Nº 2</h1>
                    <p className="animation2">Gral. Ing. Manuel N. Savio, San Nicolás</p>
                    <h2 className="animation3"> ¡Celebrando los {escuela} años de nuestra institución!</h2>
            </div>     
        </div>

        <div className="contNosotros">
            <div className="flex-aling-center">
                <h2>¿Quiénes Somos?</h2>
            </div>

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
                        <img src="https://i.postimg.cc/d1rtVT8b/homeImg.webp" alt="..." />
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

        <div className="contEspecialidades">
        <div className="flex-aling-center">
                <h2>Nuestras Especialidades Técnicas</h2>

                <Link to="/especialidades">
                <div className="wrapper ">
                    
                    <div className="info textoBlanco">
                        Informática
                    </div>

                    <div className="quimica textoBlanco">
                        Química
                    </div>

                    <div className="mmo textoBlanco">
                        Construcciones
                    </div>

                    <div className="electro textoBlanco">
                        Electromecánica
                    </div>

                </div>
                </Link>
            </div>
        </div>
        
        <h2>Galeria</h2>

        <div className="alinear">
        <div className="contCarrousel">
            <CarruselTriple tamañoGrupos="3" imagenesList={IMAGENES} />
        </div>
        </div>
        
    </>
}