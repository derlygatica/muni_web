// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Muni Sana</div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">☰</label>
        <ul className="menu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/noticias">Noticias</Link></li>
          <li><Link to="/actividades">Actividades</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li className="dropdown">
            <span>Servicios ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/salud">Salud</Link></li>
              <li><Link to="/educacion">Educación</Link></li>
              <li><Link to="/reclamos">Reclamos</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Menú inferior móvil */}
      <nav className="mobile-nav">
        <Link to="/">🏠</Link>
        <Link to="/noticias">📰</Link>
        <Link to="/actividades">🎉</Link>
        <Link to="/contacto">📞</Link>
      </nav>
    </header>
  );
}
