import React from "react";

const servicios = [
  {
    icon: "💳",
    titulo: "Pagos Online",
    descripcion: "Realiza pagos de patentes, licencias y permisos desde casa.",
    link: "#",
  },
  {
    icon: "📄",
    titulo: "Trámites Municipales",
    descripcion: "Accede a solicitudes, certificados y documentos en línea.",
    link: "#",
  },
  {
    icon: "🌄",
    titulo: "Turismo",
    descripcion: "Descubre los atractivos turísticos de nuestra comuna.",
    link: "#",
  },
  {
    icon: "📊",
    titulo: "Transparencia",
    descripcion: "Consulta información pública y solicitudes ciudadanas.",
    link: "#",
  },
];

const Servicios = () => {
  return (
    <section id="servicios" className="py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
          Servicios Municipales
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {servicios.map((servicio, idx) => (
            <a
              key={idx}
              href={servicio.link}
              className="bg-gray-50 hover:bg-blue-50 p-6 text-center rounded-xl shadow-md transition duration-300"
            >
              <div className="text-5xl mb-4">{servicio.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {servicio.titulo}
              </h3>
              <p className="text-sm text-gray-600">{servicio.descripcion}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
