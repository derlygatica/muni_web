import React from 'react';

const Contacto = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-sky-900 mb-4">Contacto Institucional</h2>
      <p className="text-gray-700 mb-4">
        Puedes comunicarte con nosotros a través del siguiente formulario.
      </p>

      <form className="grid gap-4 max-w-md">
        <input type="text" placeholder="Nombre completo" className="p-2 border rounded" />
        <input type="email" placeholder="Correo electrónico" className="p-2 border rounded" />
        <textarea placeholder="Mensaje" className="p-2 border rounded" rows="4"></textarea>
        <button type="submit" className="bg-sky-900 text-white py-2 rounded hover:bg-sky-800">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
