import React, { useEffect, useState } from 'react';
import './Noticias.css';
import defaultImage from './default.png';

function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch('https://muni-web-api.onrender.com/noticias')
      .then(response => response.json())
      .then(data => setNoticias(data))
      .catch(error => {
        console.error("Error al obtener noticias:", error);
        setNoticias([]); // fallback vacío si falla
      });
  }, []);

  return (
    <section className="noticias">
      <h2>Últimas Noticias</h2>
      <div className="tarjetas">
        {noticias.length === 0 ? (
          <p>No hay noticias disponibles.</p>
        ) : (
          noticias.map((noticia) => (
            <div key={noticia.id} className="tarjeta">
              <img
                src={noticia.imagen || defaultImage}
                alt={noticia.titulo}
              />
              <h3>{noticia.titulo}</h3>
              <p>{noticia.descripcion}</p>
              <span className="fecha">{noticia.fecha}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Noticias;
