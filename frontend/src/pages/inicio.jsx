// src/pages/Inicio.jsx
import React from "react";
import "./Inicio.css"; // si necesitas estilos personalizados

export default function Inicio() {
  return (
    <div className="inicio-container">
      <h1 className="titulo-principal">Bienvenidos a Muni Sana</h1>
      <p className="descripcion">
        Esta es la plataforma digital de nuestra comuna. Aquí podrás encontrar noticias, actividades, servicios y mucho más.
      </p>

      <div className="destacados">
        <div className="card">
          <h3>Noticias</h3>
          <p>Revisa las últimas novedades y anuncios municipales.</p>
        </div>
        <div className="card">
          <h3>Actividades</h3>
          <p>Descubre eventos culturales, deportivos y comunitarios.</p>
        </div>
        <div className="card">
          <h3>Servicios</h3>
          <p>Conoce los servicios que Muni Sana tiene para ti.</p>
        </div>
      </div>
    </div>
  );
}
