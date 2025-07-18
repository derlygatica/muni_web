// src/components/Footer.jsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Muni Sana</h3>
          <p>Comprometidos con la comunidad y el bienestar de todos.</p>
        </div>
        <div className="footer-links">
          <a href="#politicas">Política de Privacidad</a>
          <a href="#terminos">Términos y Condiciones</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Muni Sana. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
