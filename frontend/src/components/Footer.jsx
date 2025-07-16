import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p><strong>Muni Sana</strong> - Plataforma municipal digital</p>
        <p>📍 Dirección: Calle Ejemplo 123, Sana, Región del Bío-Bío</p>
        <p>📞 Teléfono: +56 9 7222 3676 | ✉️ Email: contacto@munisana.cl</p>
        <div className="footer-redes">
          <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
