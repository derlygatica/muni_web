import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-blue-800 text-white pt-28 pb-32 overflow-hidden">
      <div className="absolute inset-0 opacity-25 bg-[url('/src/assets/default.png')] bg-cover bg-center" />
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h1 className="text-5xl font-bold mb-4 drop-shadow">
          Bienvenidos a Muni Sana
        </h1>
        <p className="text-xl mb-6">
          Construyendo comunidad con transparencia, fe y acción.
        </p>
        <a
          href="#servicios"
          className="inline-block bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-full font-semibold"
        >
          Ver servicios
        </a>
      </div>
    </section>
  );
};

export default Hero;
