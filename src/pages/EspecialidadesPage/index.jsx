/*
Nota[1.5]: Este archivo, creo que es uno de los más complejos del proyecto. Aquí veremos cómo trabaja el context creado previamente (ver Nota[1.1]), un uso más profundo de estados de React (ver Nota[1.2]), useEffect o efectos de React, renderizado de listas de React y un poco sobre la sintaxis de jsx

Para iniciar hablaremos de qué es JSX. Si te fijas en la extensión de este archivo, al igual que muchos otros, tiene la extensión ".jsx".

Obligatorio, si quieres seguir, ver: https://es.react.dev/learn/writing-markup-with-jsx

"JSX es una extensión de sintaxis para JavaScript que permite escribir marcado similar a HTML dentro de una archivo JavaScript. Aunque hay otras formas de escribir componentes, la mayoría de los desarrolladores de React prefieren la concisión de JSX, y la mayoría de las bases de código lo usan."

"La Web se ha construido sobre HTML, CSS, y JavaScript. Durante muchos años, los desarrolladores web mantuvieron el contenido en HTML, el diseño en CSS, y la lógica en JavaScript, ¡a menudo en archivos separados!. El contenido se marcó dentro del HTML mientras que la lógica de la pagina vivía por separado en JavaScript"

"Pero, a medida que la Web se volvió más interactiva, la lógica determinó cada vez más el contenido. ¡JavaScript estaba a cargo del HTML! Esto es la razón por la que en React, la lógica de renderizado y el marcado viven juntos en el mismo lugar: componentes."
*/

// Generales
import { useEffect, useState, useContext } from 'react';
// Iconos
import { FaMicrochip } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { FaFlask } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
// Archivos estáticos (Te recomiendo que veas estos archivos antes de continuar, así comprenderás como están estructuradas sus propiedades. Ver Nota[4.1])
import { MMO_DATA } from "@/assets/static/especialidades/construcciones";
import { QUI_DATA } from "@/assets/static/especialidades/quimica";
import { INFO_DATA } from "@/assets/static/especialidades/informatica";
import { ELECTRO_DATA } from "@/assets/static/especialidades/electromecanica";
import { IMAGENES } from "@/assets/static/Galerias/imagenes";
// Componentes
import { Seccion, BotonSeccion } from "@/components/seccion/seccion";
import { ListaPasantias } from "@/components/iconList/lista";
import { CarruselTriple } from "@/components/carruseles/carrusel";
// Contexto (Importamos el contexto. Si te fijas, en el lugar donde vayamos a usarlo, necesitamos importar el contexto para que funcione. Y muy importante también importar useContext, como el nombre lo dice, para usar el contexto)
import { espContexto } from '../RootPage';
// Estilos
import "./style.css"

// Centralizamos los datos de las especialidades en un array (data)
const data = [
    INFO_DATA,
    ELECTRO_DATA,
    QUI_DATA,
    MMO_DATA
];

export default function EspecialidadesPage(){
    // Contexto (useContext obtiene los valores del contexto "espContexto". A los valores los destructuramos y guardamos en variables.)
    const {espActiveContx, handleEsp} = useContext(espContexto)
    // Estados
    // "isActive" y "dataActive" son los estados más importantes de este archivo. "isActive" se utiliza para la navegación y "dataActive" para obtener la información de la especialidad activa y mostrarla en pantalla
    const [isActive, setActive] = useState(espActiveContx) // La especialidad activa por defecto es determinada por el contexto.
    const [dataActive, setData] = useState(data[0])//Aca se selecciona cuales son los datos activos por defecto
    const [galeriaLista, setGaleria] = useState()
    const [viewport, setViewport] = useState(window.innerWidth)

    // devuelve el viewport al inicio de la pantalla
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    // Función que se ejecuta cada vez que el usuario hace click en un li de la navegación de especialidades. Cambia la especialidad que está activa, por medio de un id.
    const changeActive = (id) => {
        setActive(id) // Cambia el id de la especialidad activa. Reemplaza el valor que tenía por defecto
        setData(data[id])//aca se cambia cuales son los datos activos, es decir, lo que se tiene que mostrar
    }

    /*
    Nota[1.5.1]: El useEffect merece una nota propia. Te recomiendo ver la documentación de React con respecto a esto, pero aun así haré mi mejor esfuerzo para que entiendas su funcionamiento.

    useEffect tiene dos argumentos (función, dependencias). La función es lo que va a hacer cuando se ejecute y dependencia es una variable que debe cambiar para que el useEffect se ejecute.

    Podemos tener dos posibles variables de useEffect:

        useEffect(function(){}, []) // Corchetes vacíos: se ejecuta una sola vez al principio. Esta manera se utiliza cuando solicitamos información por medio de una petición fetch y necesitamos almacenar datos en el estado.

        useEffect(function(){}, [variable1, variable2]) // Corchetes con variables: la función del useEffect se ejecuta cada vez que cambie alguna variable, esto es útil si tenemos un estado que sabemos que va a cambiar a lo largo del tiempo y los datos deben ser actualizados.
    
    En este caso, el useEffect filtra las imagenes por especialidad, y cada vez que cambia la especialidad activa, las imagenes se filtran y se guarda en el estado galeriaLista.

    Por lo tanto, su funcionamiento está sujeto a sistemas externos. Se ejecuta siempre y cuando algo externo al useEffect sea modificado, para que el useEffect haga cambios necesarios.

    No creo haberme explicado bien, pero el useEffect es complicado. La única manera de entenderlo desde mi punto de vista es en la práctica.
    */
    useEffect(()=>{
        setGaleria(IMAGENES.filter(({especialidad}) => especialidad === dataActive.titulo))//aca se actualizan las imagenes segun cuales datos esten activos
    },[dataActive])
    
    return <section>
        <nav className="esp-nav">
            <div className="esp-contenedor-nav">
                <ul className="esp-ul-nav">
                    <li
                        /* onClick es un estado. Funcionan igual que los estados de html, solo que los estados de React se nombran con camelCase ej: estoEsCamelCaseCadaPalabraAExcepciónDeLaPrimeraComienzaConMayúscula */
                        onClick={() => changeActive(0)} // Ejecuta la función changeActive con el id correspondiente a la especialidad activa
                        id="0"
                        /*
                        Esto de aquí es renderizado condicional y backticks.
                        Por si no te diste cuenta, JSX nos permite que los valores de los atributos sean definidos entre llaves{}, para que podamos insertar lógica de JavaScript. Podemos insertar strings, números y valores boleanos, aunque no tiene tanto sentido, y además podemos insertar backticks (`) los cuales nos permiten insertar lógica JavaScript dentro de una cadena de texto, para eso debemos usar ${aquí adentro va el código javascript}. Y dentro de esto tenemos un operador terneario de JS, que básicamente es un if pero con operadores. Esta es la estructura del operador terneario:

                            condicion ? (operadodr ternario) ejecuta esto : ("else") ejecuta esto

                        Si o si, donde haya un operador terneario, debe estar el "else" (:).
                        */
                        className={`esp-li-nav ${isActive == 0 ? "esp-active" : ""}`}
                    >
                        <div>
                            <FaMicrochip className="esp-nav-icon" size={25}/>
                            <span className="esp-nav-text">
                                {/* Y aquí aplicamos renderizado condicional, pero en este caso dentro de un componente. Por lo cual, si isActive es igual a 0, mostrará Informática, en caso contrario mostrará una cada vacía "" */}
                                {isActive == 0 ? "Informatica" : ""}
                            </span>
                        </div>
                    </li>
                    <li
                        onClick={() => changeActive(1)}
                        id="1"
                        className={`esp-li-nav ${isActive == 1 ? "esp-active" : ""}`}
                    >
                        <div>
                            <BsTools className="esp-nav-icon" size={25}/>
                            <span className="esp-nav-text">
                                {isActive == 1 ? "Electromecanica" : ""}
                            </span>
                        </div>
                    </li>
                    <li
                        onClick={() => changeActive(2)}
                        id="2"
                        className={`esp-li-nav ${isActive == 2 ? "esp-active" : ""}`}
                    >
                        <div>
                            <FaFlask className="esp-nav-icon" size={25}/>
                            <span className="esp-nav-text">
                                {isActive == 2 ? "Quimica" : ""}
                            </span>
                        </div>
                    </li>
                    <li
                        onClick={() => changeActive(3)}
                        id="3"
                        className={`esp-li-nav ${isActive == 3 ? "esp-active" : ""}`}
                    >
                        <div>
                            <FaBuilding className="esp-nav-icon" size={25}/>
                            <span className="esp-nav-text">
                                {isActive == 3 ? "Construcciones" : ""}
                            </span>
                        </div>
                    </li>
                </ul>{// El nav de especialidades, la funcion changeActive cambia los estados isActive y dataActive,
                }
            </div>
        </nav>

        <article>
            <div className="video-esp-main">
                {/* Aquí, en caso de que no haya una URL para el video de la especialidad, renderiza un span que dice que no hay un video disponible */}
                {
                    dataActive.videoURL.length > 0 ? <iframe className="video-esp" src={dataActive.videoURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    : <span style={{color: "#444"}}>No hay un video disponible para esta especialidad.</span>
                }
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
                {/* También podemos renderizar componentes de manera condicional con el operador terneario */}
                {galeriaLista ? <CarruselTriple tamañoGrupos={viewport > 900 ? "3" : "1"} imagenesList={galeriaLista}/> : ""}
            </div>
            </div>

            <Seccion invertida titulo="Pasantías">
                <ListaPasantias >
                    {dataActive.practicasInfo}
                </ListaPasantias >
            </Seccion>
        </article>
    </section>
}

// Esto es todo por aquí. Busca la Nota[1.6] para continuar
