import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-bold text-sky-900">Muni Sana</h2>
      <ul className="flex gap-6 text-sm font-medium">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/noticias">Noticias</Link></li>
        <li><Link to="/actividades">Actividades</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
