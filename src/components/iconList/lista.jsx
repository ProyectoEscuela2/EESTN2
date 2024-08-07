import { useState } from "react"
import { BiSolidFactory } from "react-icons/bi";


export default function Lista({ children }){

    const [firstThree, setThree] = useState()



    return<>

        <div className="cont-list">
            <ul className="list-ul">
                {children.map( (pract, index) =>(

                    <li className="list-li" key={index}><div className="list-img-cont">{pract.img ? <img src={pract.img} alt="logo" className="list-img"/> : <BiSolidFactory /> }</div><div className="list-li-text">{pract.nombre}<br />{pract.ubicacion}</div></li>

                ))}
            </ul>

        </div>
    </>

}