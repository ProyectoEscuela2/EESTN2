import { useState } from "react"
import { BiSolidFactory } from "react-icons/bi";
import { EMP_DATA } from "../../assets/static/especialidades/empresas";
import './lsita.css'

export default function ListaPasantias({ children }){

    const [max, setMax] = useState(4)
    const [back, setBack] = useState(children.length)
    const [isActive, setActive] = useState(false)

    const handleClick = () =>{

        setMax(back)
        setBack(max)
        setActive(!isActive)

    }



    return<>

        <div className="cont-list">
            <ul className="list-ul">
                {children.map( (pract, index) =>(
                    <>

                    <li className="list-li" key={index}><div className="list-img-cont">{EMP_DATA[pract.id].logo ? <img src={EMP_DATA[pract.id].logo} alt="logo" className="list-img"/> : <BiSolidFactory size="4rem" /> }</div><div className="list-li-text">{EMP_DATA[pract.id].nombre}<br /><span>{EMP_DATA[pract.id].ubicacion}</span></div></li>
                
                    </>
                ))}
            </ul>
        </div>
    </>

}