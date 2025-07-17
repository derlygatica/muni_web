import { useEffect, useState } from 'react';
import './Noticias.css';

function Actividades() {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    fetch('https://muni-web.onrender.com/actividades')
      .then(response => response.json())
      .then(data => setActividades(data));
  }, []);

  return (
    <section className="noticias">
      <h2 className="noticias-titulo" style={{ color: '#d97706' }}>Próximas Actividades</h2>
      <div className="noticias-lista">
        {actividades.map((actividad) => (
          <article key={actividad.id} className="noticia-card">
            <img src="components/default.png" alt="Actividad" className="noticia-imagen" />
            <div className="noticia-contenido">
              <h3 className="noticia-titulo">{actividad.titulo}</h3>
              <p className="noticia-descripcion">{actividad.descripcion}</p>
              <p className="noticia-fecha">{actividad.fecha}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Actividades;
