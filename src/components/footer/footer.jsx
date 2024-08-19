import "./footer.css"
// import imagenFooter from "../../assets/logo_escuela.png"
import imagenFooter from "../../assets/logoesc.svg"
import { Link } from "react-router-dom"

export function Footer(){

    return(

        <>
         <footer>
                <div className="footer_contenedor">
                    <div className="footer_main_img">
                        <img src={imagenFooter} alt="Logo escuela" />
                    </div>
                    <div className="footer_main_p">
                        <p>
                        Escuela de Educacion Secundaria Tecnica Nº 2 
                        <br />
                        “Gral. Ing. Manuel N. Savio”
                        <br />
                        Grupo de desarrollo y ampliacion digital
                        <br />
                        San Nicolas de los Arroyos
                        </p>
                    </div>
                </div>
                <div className="footer_bott">
                    <h6>2024 | Grupo de desarrollo y ampliacion digital | Desarrollo independiente</h6>
                    <Link to="/miembros"><p>Miembros del grupo</p></Link>
                </div>
         </footer>
        </>
    )

}