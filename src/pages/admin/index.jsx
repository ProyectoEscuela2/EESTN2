// Outlet
import { Outlet, Navigate } from "react-router-dom"
// Componentes
import NavbarAdmin from "@/components/NavbarAdminComponent"
// Contexto
import { useAuth } from "@/context/AuthContext"
// Estilos
import "./style.css"

export default function AdminPage() {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <div className="cuerpo">
        <NavbarAdmin />
        <Outlet />
    </div> : <Navigate to="/login" />
}
