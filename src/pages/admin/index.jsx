// Outlet
import { Outlet } from "react-router-dom"
// Componentes
import NavbarAdmin from "@/components/NavbarAdminComponent"
// Estilos
import "./style.css"

export default function AdminPage() {
    return <div className="cuerpo">
        <NavbarAdmin />
        <Outlet />
    </div>
}
