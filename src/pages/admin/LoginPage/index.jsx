// General
import { useRef } from "react";
// Variables
import { AUTH_PASSWORD } from "@/config/config";
// Authentication
import { useAuth } from "@/context/AuthContext"
import { Navigate, useNavigate } from "react-router-dom"
// Estilos
import "./style.css"

export default function AdminLoginPage() {
    // Función para cambiar el estado del contexto AuthProvider
    const { isAuthenticated, login } = useAuth();
    console.log(isAuthenticated)
    // Referencia usada para obtener el valor el handleLogin()
    const elementRef = useRef();
    // Navigate se usa para redireccionar al usuario
    const navigate = useNavigate();

    // Login
    const handleLogin = (event) => {
        event.preventDefault();
        const user_passwd = elementRef.current.value
        
        if (AUTH_PASSWORD === user_passwd) {
            login();
            navigate("/admin");
        }
        else {
            alert("La contraseña ingresada es incorrecta");
        }
    }

    return !isAuthenticated ? <div className="contenedorLogin">
        <div className="logIn">
            {/* Título */}
            <div className="loginTitulo">
                <h1>Ingresar</h1>
            </div>

            {/* Formulario */}
            <div className="loginInputs">
                <form method="post">
                    <label htmlFor="login0">Ingresar clave</label> 
                    <br />
                    <input type="text" name="passwd" id="login0" ref={elementRef} />
                    <br />
                    <button type="submit" onClick={handleLogin}>Entrar</button>
                </form>
            </div>
        </div>
    </div> : <Navigate to="/admin" />
}
