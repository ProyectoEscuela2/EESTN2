import './styles/App.css'
import { Navbarr } from './components/navbar/navbar.jsx'
import { Footer } from './components/footer/footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home  from './pages/home.jsx'
import  Especialidades  from './pages/especialidades.jsx'
import Redes from './components/redes/redes.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbarr />
        <Redes />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Especialidades' element={<Especialidades />}/>
          </Routes>
        <Footer />
      </Router>

      
    
    
    </>

  )
}

export default App
