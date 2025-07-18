// src/components/BottomNav.jsx
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineArticle, MdEventNote } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import './BottomNav.css';

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { to: '/', icon: <AiFillHome />, label: 'Inicio' },
    { to: '/noticias', icon: <MdOutlineArticle />, label: 'Noticias' },
    { to: '/actividades', icon: <MdEventNote />, label: 'Actividades' },
    { to: '/contacto', icon: <FiPhone />, label: 'Contacto' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`nav-item ${location.pathname === item.to ? 'active' : ''}`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
