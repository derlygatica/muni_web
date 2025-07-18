// src/components/Hero.jsx
import './Hero.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Bienvenidos a Muni Sana</h1>
        <p>Una municipalidad cercana, transparente y al servicio de su gente.</p>
        <Link to="/noticias" className="hero-btn">Ver Noticias</Link>
      </div>
    </section>
  );
}
