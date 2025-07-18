// src/routes.jsx
import { Routes, Route } from 'react-router-dom';
import Noticias from './components/Noticias';
import Actividades from './components/Actividades';
import Contacto from './components/Contacto';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Noticias />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/actividades" element={<Actividades />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}
