import defaultImage from '../assets/default.png';

export default function Noticias() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <img
          src={defaultImage}
          alt="Noticia"
          className="rounded mb-4 w-full h-40 object-cover"
        />
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Centro cultural Muni Sana</h3>
        <p className="text-gray-600 mb-2">Se inauguró un nuevo espacio para talleres comunitarios.</p>
        <span className="text-sm text-gray-400">15 julio 2025</span>
      </div>
    </div>
  );
}
