// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <h1 className="logo"><Link to="/">Muni Sana</Link></h1>

        {/* Desktop menu */}
        {!isMobile && (
          <nav className="menu-desktop">
            <Link to="/">Inicio</Link>
            <Link to="/noticias">Noticias</Link>
            <Link to="/actividades">Actividades</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        )}

        {/* Mobile toggle button */}
        {isMobile && (
          <button className="mobile-toggle" onClick={toggleMenu}>
            ☰
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <nav className="menu-mobile">
          <Link to="/" onClick={toggleMenu}>Inicio</Link>
          <Link to="/noticias" onClick={toggleMenu}>Noticias</Link>
          <Link to="/actividades" onClick={toggleMenu}>Actividades</Link>
          <Link to="/contacto" onClick={toggleMenu}>Contacto</Link>
        </nav>
      )}
    </header>
  );
}
