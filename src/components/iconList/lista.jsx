// Generales
import { useState } from "react";
// Iconos
import { BiSolidFactory } from "react-icons/bi";
import { BiSolidBriefcase, BiSolidStar } from "react-icons/bi";
import { BiSolidBrain } from "react-icons/bi";
// import { BiSolidGraduation } from "react-icons/bi";
// Archivos Estáticos
import { EMP_DATA } from "@/assets/static/especialidades/empresas";
// Estilos
import './style.css';

export function ListaPasantias({ children }){

    const [max, setMax] = useState(4)
    const [back, setBack] = useState(children.length)
    const [isActive, setActive] = useState(false)

    /* ¿OBSOLETO?:
    const handleClick = () =>{
        setMax(back)
        setBack(max)
        setActive(!isActive)
    }
    */

    return <div className="cont-list">
        <ul className="list-ul">
            {children.map( (pract, index) =>(
                <li className="list-li" key={index} title={EMP_DATA[pract.id].title}>
                    <div className="list-img-cont">
                        {
                            EMP_DATA[pract.id].logo ? (
                                <img src={EMP_DATA[pract.id].logo} alt="logo" className="list-img"/>
                            )
                            : (
                                <BiSolidFactory size="4rem" />
                            )
                        }
                    </div>
                    
                    <div className="list-li-text">
                        {EMP_DATA[pract.id].nombre} <br />
                        <span>{EMP_DATA[pract.id].ubicacion}</span>
                    </div>
                </li>
            ))}
        </ul>
    </div>
}

export function Lista({data}){
    const [icons, setIcons] = useState([
        <BiSolidStar size="4rem" />,
        <BiSolidBriefcase size="4rem" />,
        <BiSolidBrain size="4rem" />
    ]);

    return <div className="cont-list">
        <ul className="list-ul">
            {data.map((dat, index) => (
                <li className="list-li" key={index}>
                    <div className="list-img-cont">
                        {icons[index]}
                    </div>
                    
                    <div className="list-li-text">
                        {dat.texto}
                    </div>
                </li>
            ))}
        </ul>
    </div>
}
