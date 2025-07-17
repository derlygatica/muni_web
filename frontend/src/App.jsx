import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Noticias from './components/Noticias';
import Actividades from './components/Actividades'; // lo crearemos después
import Contacto from './components/Contacto';       // lo crearemos después
import Salud from './components/Salud';
import Educacion from './components/Educacion';
import Reclamos from './components/Reclamos';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Noticias />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios/salud" element={<Salud />} />
          <Route path="/servicios/educacion" element={<Educacion />} />
          <Route path="/servicios/reclamos" element={<Reclamos />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
