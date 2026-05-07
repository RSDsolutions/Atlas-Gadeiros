import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import AsesoriaEstrategica from './pages/AsesoriaEstrategica'
import BusquedaEjecutiva from './pages/BusquedaEjecutiva'
import Contacto from './pages/Contacto'

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/asesoria-estrategica" element={<AsesoriaEstrategica />} />
            <Route path="/busqueda-ejecutiva" element={<BusquedaEjecutiva />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
