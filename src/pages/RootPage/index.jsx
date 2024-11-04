// Generales
import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
// Componentes
import { Navbarr } from '@/components/navbar/navbar.jsx'
import { Footer } from '@/components/footer/footer.jsx'
import Redes from '@/components/redes/redes.jsx';

// Contexto
export const espContexto = createContext(0);

// RootPage Componente
function RootPage() {
    const [espActiveContx, setEspActiveContx] = useState(0)

    const handleEsp = (idEsp) => {
        setEspActiveContx(idEsp)
    }

    return <espContexto.Provider value={{ espActiveContx, handleEsp }}>
        <Navbarr />
        <Redes />
        <Outlet />
        <Footer />
    </espContexto.Provider>
}

export default RootPage
