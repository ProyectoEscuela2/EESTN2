import { useEffect, useRef, useState } from "react";
import "./modal.css";

export function Modal() {
    const modalRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div className="bg mostrar" ref={modalRef}>
                    <div className="contenedor mostrar">
                        <div className="encabezado">
                            <h3></h3>
                        </div>

                        <div className="cerrar" onClick={handleClose}>
                            <svg
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-x"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </div>

                        <img src="../../../imagenes/invitacionExpo.webp" alt="Invitacion Expo" />
                    </div>
                </div>
            )}
        </>
    );
}

