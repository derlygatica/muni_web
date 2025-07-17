export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-700">Muni Web</span>
        <div className="space-x-6 text-gray-700 hidden md:flex">
          <a href="#inicio" className="hover:text-blue-600">Inicio</a>
          <a href="#noticias" className="hover:text-blue-600">Noticias</a>
          <a href="#contacto" className="hover:text-blue-600">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
