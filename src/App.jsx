import './styles/App.css'
import { Navbarr } from './components/navbar/navbar.jsx'
import { Footer } from './components/footer/footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home  from './pages/home.jsx'
import  Especialidades  from './pages/especialidades.jsx'

function App() {
  return (
    <>
      <Router>
        <Navbarr />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/especialidades' element={<Especialidades />}/>
          </Routes>
        <Footer />
      </Router>

      
    
    
    </>

  )
}

export default App
