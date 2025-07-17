import Actividades from './components/Actividades';

<Routes>
  <Route path="/" element={<Layout />} >
    <Route index element={<Noticias />} />
    <Route path="/noticias" element={<Noticias />} />
    <Route path="/actividades" element={<Actividades />} />
    <Route path="/contacto" element={<Contacto />} />
  </Route>
</Routes>
