import logo from "../assets/default.png"; // Ajusta si estás más profundo
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", id: "hero" },
    { name: "Servicios", id: "servicios" },
    { name: "Proyectos", id: "proyectos" },
    { name: "Institucional", id: "institucional" },
    { name: "Noticias", id: "noticias" },
    { name: "Contacto", id: "contacto" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="bg-white fixed top-0 w-full shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Título */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo Municipalidad"
            className="object-contain"
            style={{ width: "48px", height: "48px" }}
          />
          <span className="text-2xl font-bold text-blue-800">Muni Sana</span>
        </div>

        {/* Menú Escritorio */}
        <div className="hidden md:flex items-center space-x-10">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contacto")}
            className="ml-6 bg-green-500 text-white px-5 py-2 rounded-md font-medium hover:bg-green-600 transition"
          >
            Contáctanos
          </button>
        </div>

        {/* Botón Móvil */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl text-gray-700">
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left text-gray-700 font-medium hover:text-blue-600"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contacto")}
            className="block w-full bg-green-500 text-white py-2 rounded-md font-medium hover:bg-green-600 transition"
          >
            Contáctanos
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
