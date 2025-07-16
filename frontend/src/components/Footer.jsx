import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p><strong>Muni Sana</strong> — Plataforma digital municipal</p>
        <p>📍 Calle Ejemplo 123, Sana, Región del Bío-Bío</p>
        <p>📞 +56 9 7222 3676 &nbsp; ✉️ contacto@munisana.cl</p>
        <div className="footer-social">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;