import React from "react";

const Institucional = () => {
  return (
    <section id="institucional" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Nuestra Identidad Institucional
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-green-700">📜 Historia</h3>
            <p className="text-gray-600 text-justify">
              La comuna de Muni Sana fue fundada en el año 1890 con el propósito de organizar y dar vida a una comunidad unida, productiva y con fuerte arraigo en sus tradiciones. Desde sus inicios, ha trabajado por el bienestar de sus habitantes y el desarrollo sostenible del territorio.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-green-700">🎯 Misión</h3>
            <p className="text-gray-600 text-justify">
              Servir a la comunidad de forma transparente, eficiente y participativa, promoviendo el desarrollo local, la equidad social y la calidad de vida de nuestros vecinos.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-green-700">👁 Visión</h3>
            <p className="text-gray-600 text-justify">
              Ser una comuna modelo en gestión pública, innovación y bienestar ciudadano, reconocida por su compromiso con la gente, el medioambiente y la cultura local.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <img
            src="/src/assets/default.png"
            alt="Municipalidad"
            className="w-full md:w-2/3 mx-auto rounded-lg shadow-lg"
          />
          <p className="mt-4 text-sm text-gray-500">Sede municipal actual - Imagen referencial</p>
        </div>
      </div>
    </section>
  );
};

export default Institucional;
