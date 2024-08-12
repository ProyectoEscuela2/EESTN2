import {useState} from 'react'
import './navbar-estilo.css'
import { Link } from 'react-router-dom'





export function Navbarr() {
  const [collapsed, setCollapsed] = useState(false);


  return (<>
    <div className="navbar-mobile">
     
    </div>

    <div className="navbar-pc">
        <ul className="navbar-pc-ul">
            <Link className='navbar-a' to="/"><li className="navbar-pc-li">Inicio</li></Link>
            <Link className='navbar-a' to="/Especialidades"><li className="navbar-pc-li">Especialidades</li></Link>
            <Link className='navbar-a' to="/Galeria"><li className="navbar-pc-li">Galeria</li></Link>
            <Link className='navbar-a' to="/Contacto"><li className="navbar-pc-li">Contacto</li></Link>
        </ul>
    </div>


    </>
  );
}
