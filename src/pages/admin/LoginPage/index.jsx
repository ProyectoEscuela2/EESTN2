// General
import { useRef } from "react";
// Authentication
import { useAuth } from "@/context/AuthContext"
import { Navigate, useNavigate } from "react-router-dom"
// Estilos
import "./style.css"
import { API_URL } from "@/config/config";

export default function AdminLoginPage() {
    // Función para cambiar el estado del contexto AuthProvider
    const { isAuthenticated, login } = useAuth();
    console.log(isAuthenticated)
    // Referencia usada para obtener el valor el handleLogin()
    const elementRef = useRef();
    // Navigate se usa para redireccionar al usuario
    const navigate = useNavigate();

    // Login
    const handleLogin = async (event) => {
        event.preventDefault();
        const user_passwd = elementRef.current.value
        
        // Validación de la contraseña
        async function fetchValidate() {
            const res = await fetch(`${API_URL}/login`, {
                method: "POST",
                mode: "cors", // Permite Cross Origins
                body: JSON.stringify({
                    "password": `${user_passwd}` 
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              });
            
            const data = await res.json();
            // console.log(data)
            return data.success || data.detail; // Devuelve true o "Contraseña incorrecta" junto con un 401 unauthorized
        }

        const es_valida = await fetchValidate();
        // console.log(es_valida)
        
        if (es_valida == true) {
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
