// Estilos
import "./style.css"

export default function AdminLoginPage() {
    return <div className="contenedorLogin">
        <div className="logIn">
            {/* Título */}
            <div className="loginTitulo">
                <h1>Ingresar</h1>
            </div>

            {/* Formulario */}
            <div className="loginInputs">
                {/* TODO: Action -> Validar Login */}
                <form action="" method="post">
                    <label htmlFor="login0">Ingresar clave</label> 
                    <br />
                    <input type="text" name="" id="login0" />
                    <br />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    </div>
}
