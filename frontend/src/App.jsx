import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Noticias from './components/Noticias';
import Actividades from './components/Actividades';
import Contacto from './components/Contacto';
import Hero from './components/Hero';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  );
}
