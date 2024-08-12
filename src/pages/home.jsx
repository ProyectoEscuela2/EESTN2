import '../styles/App.css'
import { Seccion } from "../components/seccion/seccion";
import { BiSolidBriefcase, BiSolidStar } from "react-icons/bi";
import { BiSolidBrain } from "react-icons/bi";
import { BiSolidGraduation } from "react-icons/bi";

import {CarruselTriple} from "../components/carruseles/carrusel";


import '../components/iconList/lista'

export default function Home(){

    return<>

        <div className="contInicio">
            <div className="gradient"></div>
                <div className= "textInicio">
                    <p className="animation1">¡Bienvenido!</p>
                    <h1 className="animation1">EEST Nº 2</h1>
                    <p className="animation2">Gral. Ing. Manuel N. Savio, San Nicolas</p>
                    <p className="animation3"><b>100</b> años de aprendizaje ininterrumpido</p>
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
                    <a href="/Galeria">
                        <img src="https://i.postimg.cc/d1rtVT8b/homeImg.webp" alt="..." />
                    </a>
                </div>
            </div>
        </div>

        <div className="contObjetivos">
            <div className="contenedor-sec-main">
                <h2 className="titulo-sec-main">Nuestros Objetivos</h2>
            <div className="text-sec-main">
                <div className="cont-list">
                    <ul className="list-ul">
                        <li className="list-li">
                            <div className="list-img-cont">
                                <BiSolidStar size="4rem" />
                            </div>
                            <div className="list-li-text">
                                Preparamos a nuestros estudiantes para ser líderes en sus campos técnicos.
                            </div>
                        </li>

                        <li className="list-li">
                            <div className="list-img-cont">
                                <BiSolidBriefcase size="4rem" />
                            </div>
                            <div className="list-li-text">
                            Con conexiones directas con empresas líderes, para brindar oportunidades de prácticas profesionalizantes a cada estudiante.
                            </div>
                        </li>

                        <li className="list-li">
                            <div className="list-img-cont">
                                <BiSolidBrain size="4rem" />
                            </div>
                            <div className="list-li-text">
                            Brindamos una educación práctica enfocada en la innovación y la colaboración, para así impulsar el éxito de cada estudiante.
                            </div>
                        </li>
                    </ul>
                </div>

            </div>  
                

            </div>
        </div>

        <div className="contEspecialidades">
        <div className="flex-aling-center">
                <h2>Nuestras Especialidades Técnicas</h2>

                <div className="wrapper ">
                    <div className="info">
                        <a href="#">Informática</a>
                    </div>
                    <div className="quimica">
                        <a href="#">Química</a>
                    </div>

                    <div className="mmo">
                        <a href="#">Construcciones</a>
                    </div>
                    <div className="electro">
                        <a href="#">Electromécanica</a>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="contCarrousel">
            <div className="flex-aling-center">
            </div>
        </div>

        
    </>
}