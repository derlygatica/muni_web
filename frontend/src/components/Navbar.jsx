// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      {/* Menú escritorio */}
      {!isMobile && (
        <nav className="navbar">
          <h2 className="logo">Muni Sana</h2>
          <ul className="nav-links">
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
      )}

      {/* Menú móvil */}
      {isMobile && (
        <>
          <nav className="mobile-menu">
            <button className="mobile-toggle" onClick={toggleMenu}>☰</button>
            {menuOpen && (
              <ul className="mobile-links">
                <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
                <li><Link to="/noticias" onClick={toggleMenu}>Noticias</Link></li>
                <li><Link to="/actividades" onClick={toggleMenu}>Actividades</Link></li>
                <li><Link to="/contacto" onClick={toggleMenu}>Contacto</Link></li>
                <li className="dropdown">
                  <span>Servicios ▾</span>
                  <ul className="dropdown-menu">
                    <li><Link to="/salud" onClick={toggleMenu}>Salud</Link></li>
                    <li><Link to="/educacion" onClick={toggleMenu}>Educación</Link></li>
                    <li><Link to="/reclamos" onClick={toggleMenu}>Reclamos</Link></li>
                  </ul>
                </li>
              </ul>
            )}
          </nav>
          <footer className="mobile-footer">
            <p>Muni Sana</p>
          </footer>
        </>
      )}
    </header>
  );
}
