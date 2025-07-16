import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Barra de navegación */}
      <Navbar />

      {/* Encabezado institucional */}
      <header className="bg-white shadow-sm py-6 text-center">
        <h1 className="text-3xl font-bold text-sky-900">Muni Web Muni Sana</h1>
        <p className="text-gray-600 mt-1">
          Plataforma institucional de noticias y servicios para la comunidad
        </p>
      </header>

      {/* Contenido dinámico */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Layout;
