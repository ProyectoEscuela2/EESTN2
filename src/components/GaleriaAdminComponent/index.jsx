import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './styles.css'

export default function Galeria({src, alt}){
    return<>
    
        <div className="contenedor-admin-galeria">
            
            <div className="admin-galeria-alt">
                {alt}
            </div>
            <img src={src} alt={alt} className="imagen-admin-galeria" />
            <div className="funcionesImagenes">
                <div className="admin-galeria-fecha">
                    <span>09/12/2018</span>
                </div>
                <div className="admin-galeria-buttons">
                    <div className="botonEditar">
                        <FaEdit size={35} />
                    </div>
                    <div className="botonEditar eliminar">
                        <MdDelete size={35}/>
                    </div>
                </div>

            </div>
        </div>
    
    
    
    </>

}