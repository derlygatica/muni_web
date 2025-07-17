import React, { useState } from "react";

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const irASeccion = (id) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });
      setMenuAbierto(false); // cerrar menú en móvil
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-800">Muni Sana</div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-blue-800 focus:outline-none"
            >
              ☰
            </button>
          </div>
          <ul className="hidden md:flex space-x-6 font-semibold text-gray-700">
            <li><button onClick={() => irASeccion("hero")} className="hover:text-blue-600">Inicio</button></li>
            <li><button onClick={() => irASeccion("servicios")} className="hover:text-blue-600">Servicios</button></li>
            <li><button onClick={() => irASeccion("proyectos")} className="hover:text-blue-600">Proyectos</button></li>
            <li><button onClick={() => irASeccion("institucional")} className="hover:text-blue-600">Institución</button></li>
            <li><button onClick={() => irASeccion("noticias")} className="hover:text-blue-600">Noticias</button></li>
            <li><button onClick={() => irASeccion("contacto")} className="hover:text-blue-600">Contacto</button></li>
          </ul>
        </div>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-2">
          {["hero", "servicios", "proyectos", "institucional", "noticias", "contacto"].map((id) => (
            <button
              key={id}
              onClick={() => irASeccion(id)}
              className="block w-full text-left text-gray-700 font-semibold hover:text-blue-600"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
