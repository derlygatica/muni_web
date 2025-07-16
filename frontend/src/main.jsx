import Actividades from './components/Actividades';
import Contacto from './components/Contacto';

...

<Routes>
  <Route path="/" element={<App />} />
  <Route path="/noticias" element={<Noticias />} />
  <Route path="/actividades" element={<Actividades />} />
  <Route path="/contacto" element={<Contacto />} />
</Routes>
