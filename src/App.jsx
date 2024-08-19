import './styles/App.css'
import { Navbarr } from './components/navbar/navbar.jsx'
import { Footer } from './components/footer/footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './pages/home.jsx'
import Especialidades  from './pages/especialidades.jsx'
import Redes from './components/redes/redes.jsx';
import Contacto from './pages/contacto.jsx';
import Galeria from './pages/galeria';
import { createContext, useState } from 'react';
export const espContexto = createContext(0);
import Inscribirse from './pages/inscribirse.jsx';
import Miembros from './pages/miembros.jsx';

function App() {

  const [espActiveContx, setEspActiveContx] = useState(0)

  const handleEsp = (idEsp) =>{

    setEspActiveContx(idEsp)

  }

  return (
    <>

    <espContexto.Provider value={{espActiveContx, handleEsp}}>
      <Router>
        <Navbarr />
        <Redes />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/especialidades' element={<Especialidades />}/>
            <Route path='/contacto' element={<Contacto />}/>
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/inscribirse" element={<Inscribirse />} />
            <Route path="/miembros" element={<Miembros />} />
          </Routes>
        <Footer />
      </Router>
      </espContexto.Provider>
      
    
    
    </>

  )
}

export default App
