import React from "react";

const proyectos = [
  {
    titulo: "Mejoramiento Plaza Central",
    descripcion: "Renovación de áreas verdes, iluminación y mobiliario urbano.",
    imagen: "/src/assets/proyecto1.jpg",
  },
  {
    titulo: "Centro Comunitario de Salud",
    descripcion: "Construcción de centro de atención primaria para todos los vecinos.",
    imagen: "/src/assets/proyecto2.jpg",
  },
  {
    titulo: "Pavimentación Rural",
    descripcion: "Conectividad para sectores rurales de la comuna.",
    imagen: "/src/assets/proyecto3.jpg",
  },
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="py-16 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
          Proyectos en Desarrollo
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{proyecto.titulo}</h3>
                <p className="text-gray-600 text-sm">{proyecto.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
