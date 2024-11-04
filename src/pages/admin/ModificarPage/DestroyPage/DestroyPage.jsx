// General
import { redirect } from "react-router-dom";

// Destroy no es una página, sino un action. Para más información de las actions visita el sitio oficial de react-router
export async function action({ params }) {
    console.log("Destruido")
    // Función para eliminar un registro.
    // Volver a la página "Modificar"
    return redirect("/admin/modificar");
}
