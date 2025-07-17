// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar-container">
      <div className="navbar">
        <h2 className="logo">Muni Sana</h2>
        <nav className="desktop-menu">
          <Link to="/">Inicio</Link>
          <Link to="/noticias">Noticias</Link>
          <Link to="/actividades">Actividades</Link>
          <Link to="/contacto">Contacto</Link>
          <div className="dropdown">
            <span>Servicios ▾</span>
            <div className="dropdown-menu">
              <Link to="/salud">Salud</Link>
              <Link to="/educacion">Educación</Link>
              <Link to="/reclamos">Reclamos</Link>
            </div>
          </div>
        </nav>

        <button className="mobile-toggle" onClick={toggleMenu}>☰</button>
      </div>

      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Inicio</Link>
        <Link to="/noticias" onClick={toggleMenu}>Noticias</Link>
        <Link to="/actividades" onClick={toggleMenu}>Actividades</Link>
        <Link to="/contacto" onClick={toggleMenu}>Contacto</Link>
        <div className="mobile-submenu">
          <span>Servicios ▾</span>
          <div className="submenu-links">
            <Link to="/salud" onClick={toggleMenu}>Salud</Link>
            <Link to="/educacion" onClick={toggleMenu}>Educación</Link>
            <Link to="/reclamos" onClick={toggleMenu}>Reclamos</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
