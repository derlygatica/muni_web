import React from "react";
import { Link } from "react-router-dom";

const noticias = [
  {
    id: "1",
    titulo: "Fiesta Costumbrista 2025",
    resumen: "Se realizará con música y cultura...",
    imagen: "/src/assets/default.png",
  },
  {
    id: "2",
    titulo: "Operativo Médico Rural",
    resumen: "Atención médica gratuita en sectores rurales.",
    imagen: "/src/assets/default.png",
  },
];

const Noticias = () => {
  return (
    <section id="noticias" className="py-16 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Noticias Municipales
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {noticias.map((n) => (
            <div key={n.id} className="bg-white rounded-lg shadow">
              <img
                src={n.imagen}
                alt={n.titulo}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {n.titulo}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{n.resumen}</p>
                <Link
                  to={`/noticia/${n.id}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Noticias;
