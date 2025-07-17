import React from "react";

const Institucional = () => {
  return (
    <section id="institucional" className="py-16 bg-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-800">Nuestra Identidad</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Historia</h3>
            <p className="text-sm text-gray-600">
              Nuestra comuna fue fundada con el propósito de servir a su gente. A través de los años hemos forjado una identidad basada en el trabajo, la fe y la unidad.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Misión</h3>
            <p className="text-sm text-gray-600">
              Servir a la comunidad con compromiso, transparencia y eficiencia, promoviendo el desarrollo integral de cada habitante.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Visión</h3>
            <p className="text-sm text-gray-600">
              Ser una municipalidad modelo en gestión, innovación y cercanía con la ciudadanía, comprometida con el bienestar de todos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institucional;
