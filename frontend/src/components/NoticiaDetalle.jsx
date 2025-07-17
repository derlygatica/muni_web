import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const noticias = [
  {
    id: "1",
    titulo: "Fiesta Costumbrista 2025",
    contenido:
      "La Fiesta Costumbrista se celebrará el 5 y 6 de agosto con comidas típicas, artesanía local, música y bailes tradicionales...",
  },
  {
    id: "2",
    titulo: "Operativo de salud gratuito",
    contenido:
      "El municipio realizará un operativo médico en sectores rurales, ofreciendo exámenes, atención dental y charlas preventivas.",
  },
  {
    id: "3",
    titulo: "Concurso literario escolar",
    contenido:
      "Los estudiantes podrán participar hasta el 31 de julio enviando cuentos o poemas sobre identidad y cultura local.",
  },
];

const NoticiaDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const noticia = noticias.find((n) => n.id === id);

  if (!noticia) {
    return <div className="p-6 text-red-600 text-center">Noticia no encontrada.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Volver
      </button>
      <h1 className="text-3xl font-bold text-blue-800 mb-6">{noticia.titulo}</h1>
      <p className="text-gray-700 text-lg">{noticia.contenido}</p>
    </div>
  );
};

export default NoticiaDetalle;
