// src/components/Noticias.jsx
import './Noticias.css';

export default function Noticias({ noticias }) {
  return (
    <div className="noticias-container">
      <h1 className="titulo-principal">Noticias Muni Sana</h1>
      <div className="noticias-grid">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="card">
            <img
              src={noticia.imagen || 'components/default.png'}
              alt={noticia.titulo}
              className="imagen-noticia"
            />
            <h3>{noticia.titulo}</h3>
            <p>{noticia.descripcion}</p>
            <span className="fecha">{noticia.fecha}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
