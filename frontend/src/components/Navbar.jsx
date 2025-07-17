import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Menú superior */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 px-4 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-sky-900">Muni Sana</h2>
          <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>

        <ul className={`md:flex md:items-center gap-6 text-sm font-medium ${menuOpen ? 'block mt-4' : 'hidden md:block'}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/noticias" onClick={() => setMenuOpen(false)}>Noticias</Link></li>
          <li><Link to="/actividades" onClick={() => setMenuOpen(false)}>Actividades</Link></li>
          <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
          <li className="relative group">
            <span className="cursor-pointer">Servicios ▾</span>
            <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded p-2 w-40 z-50">
              <li><Link to="/salud">Salud</Link></li>
              <li><Link to="/educacion">Educación</Link></li>
              <li><Link to="/reclamos">Reclamos</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Menú inferior móvil */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-inner flex justify-around py-2 z-40 border-t text-xl">
        <Link to="/">🏠</Link>
        <Link to="/noticias">📰</Link>
        <Link to="/actividades">🎉</Link>
        <Link to="/contacto">📞</Link>
      </div>
    </>
  );
}
