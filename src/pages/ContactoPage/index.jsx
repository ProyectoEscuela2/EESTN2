// Iconos
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// Componentes
import Map from '@/components/mapa/mapa';
// Estilos
import './style.css';

/* ¿OBSOLETO?:
const InformacionDeContacto = () => {
    return (
        <div className="informacion-de-contacto">
            <h2>Información de Contacto</h2>
            <ul>
                <li>
                    <span>Dirección:</span>
                    <p>Avenida Moreno 79, San Nicolás de los Arroyos</p>
                </li>
                <li>
                    <span>Teléfono:</span>
                    <a className='contacto-texto' href="tel:+543364110849" target="_blank" rel="noopener noreferrer">
                        +54 3364-110-849

                        <span className="telefono-estatico"><FaPhone /></span>
                    </a>
                </li>
                <li>
                    <span>Email:</span>
                    <a className='contacto-texto' href="mailto:gdadtecnica2@gmail.com" target="_blank" rel="noopener noreferrer">
                        gdadtecnica2@gmail.com
                        <span className="email-estatico"><SiGmail /></span>
                    </a>
                </li>
            </ul>
            <hr />
        </div>
    );
};
*/

export function FormMail(){
    return(
        <>
        <h1>Enviános un Correo</h1>
        <form id="#" className="#" method="post" role="form" action="./enviarCorreo.php">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" placeholder="" className="" name="nombre" id="nombre" required />
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" placeholder="" className="" name="email" id="email" required />
            <label htmlFor="asunto">Asunto</label>
            <input type="text" placeholder="" className="" name="asunto" id="asunto" required />
            <label htmlFor="mensaje">Mensaje</label>
            <textarea rows="6" placeholder="" className="" name="mensaje"id="mensaje" required></textarea>    
            <input type="submit" id="" className="btn" value="Enviar Correo" />
        </form> 


                    <a className='contacto-texto' href="mailto:gdadtecnica2@gmail.com" target="_blank" rel="noopener noreferrer">
                        gdadtecnica2@gmail.com
                        <span className="email-estatico"><SiGmail /></span>
                    </a>
        </>
    )
}






const ContactoPage = () => {
    function openMailClient() {
        window.location.href = 'mailto:tecnica2sannicolas@abc.gob.ar';
    }

    return <section className="contenedor-contacto">
        {/* Información de contacto */}
        <div className="informacion-de-contacto">
            {/* Texto contacto */}
            <div className="contenedor-texto-contacto">
                <h2>Información de Contacto</h2>
                <ul>
                    <li>
                        <span>Dirección:</span>
                        <p>Avenida Moreno 79, San Nicolás de los Arroyos</p>
                    </li>
                    <li className='alinear-contacto'>
                        <span>Telefonos:</span>
                        4423500
                        <span className="telefono-estatico"><FaPhone /></span>
                    </li>
                    <li>
                        <span></span>
                        4424431
                        <span className="telefono-estatico"><FaPhone /></span>
                    </li>
                    <li>
                        {/* <button className='contacto-mail-btn' onClick={openMailClient}>Envíanos un mail</button> */}
                        <FormMail />
                    </li>
                </ul>
            </div>

            {/* Mapa contacto */}
            <div className="contenedor-mapa-contacto">
                <Map className="mapa-contacto" />
            </div>
        </div>

        {/* Horarios de contacto */}
        <div className="contenedor-horarios-contacto">
            <h2>Horarios de Secretaría</h2>
            <ul className='ul-horarios-contacto'>
                <li className='li-horarios-contacto'>7:30hs - 12:00hs</li>
                <li className='li-horarios-contacto'>13:30hs - 17:55hs</li>
            </ul>
        </div>

        {/* Redes sociales de contacto */}
        <div className="contenedor-redes">
            <ul className='contacto-redes-ul'>
                <a href="https://www.facebook.com/profile.php?id=100009423868443"><li className='contacto-redes-li'><FaFacebook className='contacto-redes-icon facebook-contacto' /></li></a>
                {/* <a href=""><li className='contacto-redes-li'><FaInstagram className='contacto-redes-icon instagram-contacto'/></li></a> */}
                {/* <a href=""><li className='contacto-redes-li'><FaWhatsapp className='contacto-redes-icon whatsapp-contacto'/></li></a> */}
                <a href="https://www.linkedin.com/school/eestn2/about/"><li className='contacto-redes-li'><FaLinkedin className='contacto-redes-icon linkedin-contacto' /></li></a>
            </ul>
        </div>
    </section>

    
};

export default ContactoPage;





