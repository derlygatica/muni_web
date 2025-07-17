export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-semibold text-lg mb-2">Municipalidad Muni Sana</h3>
          <p>Av. Principal 1234, Muni Ciudad</p>
          <p>Fono: +56 9 1234 5678</p>
          <p>Email: contacto@munisana.cl</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Enlaces</h3>
          <ul className="space-y-1">
            <li><a href="#servicios" className="hover:underline">Servicios</a></li>
            <li><a href="#proyectos" className="hover:underline">Proyectos</a></li>
            <li><a href="#institucional" className="hover:underline">Historia</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Redes Sociales</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Muni Sana — Todos los derechos reservados
      </div>
    </footer>
  );
}
