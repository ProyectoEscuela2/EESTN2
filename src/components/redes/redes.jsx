import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";
import { FaPhone } from "react-icons/fa";
import ClipboardJS from "clipboard";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./redes.css"
import { FaClipboardCheck } from "react-icons/fa";

export default function Redes(){

    const [isHover, setHover] = useState(false)
    const [notification, setNotification] = useState("");
    const phoneRef = useRef(null);
    const emailRef = useRef(null);

    useEffect(() => {
        const phoneClipboard = new ClipboardJS(phoneRef.current);
        phoneClipboard.on('success', (e) => {
            showNotification(`${e.text} fue copiado en el portapapeles!`);
        });
        phoneClipboard.on('error', () => {
            showNotification("Error al copiar, intente de nuevo");
        });

        const emailClipboard = new ClipboardJS(emailRef.current);
        emailClipboard.on('success', (e) => {
            showNotification(`${e.text} fue copiado en el portapapeles!`);
        });
        emailClipboard.on('error', () => {
            showNotification("Error al copiar, intente de nuevo");
        });

        return () => {
            phoneClipboard.destroy();
            emailClipboard.destroy();
        };
    }, [phoneRef,emailRef]);


    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => {
            setNotification("");
        }, 3000);
    };

    return<>

    <div className="redes-cont">
        <ul className="redes-ul">
        <a className="redes-a" href="https://www.facebook.com/profile.php?id=100009423868443" target="_blank" rel="noreferrer noopener"><li className="redes-li facebook"><FaFacebook size={20} /></li></a>
        <a className="redes-a" href="" target="_blank" rel="noreferrer noopener"><li className="redes-li instagram"><FaInstagram size={20} /></li></a>
        <a className="redes-a" href="" target="_blank" rel="noreferrer noopener"><li className="redes-li Whatsapp"><FaWhatsapp size={20} /></li></a>
            <li onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}  className="redes-li-tco">
                <div className="redes-li redes-mas"><BsThreeDots size={20} /></div>
                <div className={`redes-cont-oculto ${isHover ? "redes-display" : "redes-false"}`}>
                    <span className="redes-li"  id="art-1" ref={phoneRef} data-clipboard-text="336 499-9999" title="336 499-9999"><FaPhone size={20}/></span>
                    <span className="redes-li" id="art-2" ref={emailRef} data-clipboard-text="tecnica2sannicolas@abc.gob.ar" title="tecnica2sannicolas@abc.gob.ar"><SiGmail size={20}/></span>
                    <a href="https://www.linkedin.com/school/eestn2/about/" target="_blank" rel="noreferrer noopener"><span className="redes-li" id="art-3"><FaLinkedin size={20}/></span></a>
                    <a href="https://github.com/GrupoDAD" target="_blank" rel="noreferrer noopener"><span className="redes-li" id="art-4"><FaGithub size={20}/></span></a>
                </div>
            </li>
        </ul>
    </div>

    {notification && (
        <div className="notification">
            <FaClipboardCheck size={22} color="#25D366"/> <span className="notification-text">{notification}</span>
        </div>
    )}

    </>

}