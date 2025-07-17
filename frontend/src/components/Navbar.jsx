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

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="bg-white px-6 py-4 fixed top-0 w-full shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Reemplaza por tu logo */}
          <img src="/src/assets/default.png" alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-blue-800">Muni Sana</span>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => handleScroll(l.id)}
                className="hover:text-blue-600 transition"
              >
                {l.name}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleScroll("contacto")}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Contáctanos
            </button>
          </li>
        </ul>

        {/* Hamburguesa móvil */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-700">
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu móvil desplegable */}
      {open && (
        <div className="md:hidden bg-white shadow-md mt-2 px-6 py-4 space-y-4">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleScroll(l.id)}
              className="block w-full text-left text-gray-700 font-medium hover:text-blue-600"
            >
              {l.name}
            </button>
          ))}
          <button
            onClick={() => handleScroll("contacto")}
            className="block w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Contáctanos
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
