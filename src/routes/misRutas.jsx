import { Navigate } from 'react-router'
import {
  BrowserRouter,
  Contacto,
  Curriculum,
  Footer,
  HeaderNav,
  Inicio,
  Portafolio,
  Route,
  Routes,
  Servicios,
} from './routes'
import Proyecto from '../components/Proyecto'

export default function MisRutas() {
  return (
    <BrowserRouter>

      <HeaderNav />
      
      <main className="content">
      <Routes>
        <Route path="/" element={<Navigate replace to="/inicio" />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyecto/:id" element={<Proyecto />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  )
}
