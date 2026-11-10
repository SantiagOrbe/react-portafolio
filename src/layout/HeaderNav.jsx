import { Link, NavLink } from "react-router";

export default function HeaderNav() {
  return (
    <header className="site-header">
      <Link className="brand" to="/inicio" aria-label="Santiago Orbe, inicio">
        <span className="brand-mark" aria-hidden="true">S</span>
        <span className="brand-name">Santiago Orbe</span>
      </Link>
      <nav className="site-nav" aria-label="Navegación principal">
        <ul>
          <li><NavLink to="/inicio" end>Inicio</NavLink></li>
          <li><NavLink to="/portafolio">Proyectos</NavLink></li>
          <li><NavLink to="/servicios">Servicios</NavLink></li>
          <li><NavLink to="/curriculum">Perfil</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
