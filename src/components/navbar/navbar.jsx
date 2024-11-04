import { useState } from 'react'
import './navbar-estilo.css'
import { Link } from 'react-router-dom'
import imagenNav from "@/assets/logoesc.svg"
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";

export function Navbarr() {
    const [collapsed, setCollapsed] = useState(false);

    const handleClick = () => {
        setCollapsed(!collapsed)
    }

    return <navbar>
        <div className="navbar-pc">
            <div className="contenedor-imagen">
                <Link className='navbar-a' to="/"><div className="contImg">
                    <img src={imagenNav} alt="logo escuela" />
                </div></Link>
            </div>
            
            <div className="contenedor-navbar">
                <ul className="navbar-pc-ul">
                    <Link className='navbar-a' to="/"><li className="navbar-pc-li">Inicio</li></Link>
                    <Link className='navbar-a' to="/especialidades"><li className="navbar-pc-li">Especialidades</li></Link>
                    <Link className='navbar-a' to="/galeria"><li className="navbar-pc-li">Galeria</li></Link>
                    <Link className='navbar-a' to="/contacto"><li className="navbar-pc-li">Contacto</li></Link>
                    <Link className='navbar-a' to="/inscripciones"><li className="navbar-pc-li">Inscripciones</li></Link>
                </ul>
            </div>

            <div className="contenedor-navbar-mb">
                <button className='navbar-mb-btn' onClick={handleClick}>{collapsed ? <FiX size={50} /> : <GiHamburgerMenu size={50} />}</button>
            </div>
        </div>

        <ul onClick={handleClick} className={`navbar-mb-ul ${collapsed ? "nv-active" : ""}`}>
            <Link className='navbar-a' to="/"><li className="navbar-mb-li">Inicio</li></Link>
            <Link className='navbar-a' to="/especialidades"><li className="navbar-mb-li">Especialidades</li></Link>
            <Link className='navbar-a' to="/galeria"><li className="navbar-mb-li">Galeria</li></Link>
            <Link className='navbar-a' to="/contacto"><li className="navbar-mb-li">contacto</li></Link>
            <Link className='navbar-a' to="/inscripciones"><li className="navbar-mb-li">Inscripciones</li></Link>
        </ul>
    </navbar>
}
