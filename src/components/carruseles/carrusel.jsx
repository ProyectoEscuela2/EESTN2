"use client"
import React,{useState,useEffect} from "react"
import "./carrusel.css"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function CarruselTriple({tamañoGrupos, imagenesList}){

    const [imagenes, setImagenes] = useState(imagenesList)//el estado de todas las imagenes
    const [grupos, setGrupos] = useState()
    const [display,setDisplay] = useState(0)
    const [prev, setPrev] = useState()

    useEffect(() => {
        setImagenes(imagenesList);//se cambia el estado cada vez que cambian las imagenes que le pasas
    }, [imagenesList]);

    useEffect(()=>{

        const groups = []
        
        for (let i = 0; i < imagenes.length; i += Number(tamañoGrupos)) {
            groups.push(imagenes.slice(i, i + Number(tamañoGrupos)));//aca se separa las imagenes en grupos del tamaño que se le indique antes
          }
          setGrupos(groups)

    },[imagenes])


    const handleForward = () =>{

        if(grupos.length -1 > display){
            setDisplay(display + 1)//estas dos funciones son para controlar que grupo se muestra
            setPrev(display)
        }


    }

    const handleBack = () =>{

        if(display > 0){
            setDisplay(display - 1)
            setPrev(display)
        }

    }

    return<>



        <div className="cont-carT">
            {grupos ? 
            
            grupos.map((grp, index) =>(

                <>
                    <div key={index} className={`grupos ${display == index ? "display" : ""} ${prev == index ? "prev" : ""} `}>

                        {grp.map((img, index) =>(

                            <>

                                <div key={index} className="carT-cont-img">
                                    <img src={img.url} alt={img.alt} className="carT-img" />
                                </div>
                            
                            </>

                        ))}

                    </div>
                </>

            ))
        
        
            :
            ""
            }

        </div>

        <div className="conT-controls">
            <div className="carT-button" onClick={handleBack}>
                <IoIosArrowBack  size="5vw"/>
            </div>
            <div className="carT-button" onClick={handleForward} >
                <IoIosArrowForward  size="5vw"/>
            </div>
        </div>
    </>

}



export { CarruselTriple }