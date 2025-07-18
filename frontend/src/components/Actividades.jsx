// src/components/Actividades.jsx
import './Actividades.css';

export default function Actividades({ actividades }) {
  return (
    <div className="actividades-container">
      <h1 className="titulo-principal">Actividades Muni Sana</h1>
      <div className="actividades-grid">
        {actividades.map((actividad) => (
          <div key={actividad.id} className="card card-alegre">
            <img
              src={actividad.imagen || 'components/default.png'}
              alt={actividad.titulo}
              className="imagen-actividad"
            />
            <h3>{actividad.titulo}</h3>
            <p>{actividad.descripcion}</p>
            <span className="fecha">{actividad.fecha}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
