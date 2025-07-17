import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Noticias from './components/Noticias';
import Actividades from './components/Actividades';
import Contacto from './components/Contacto';
import Layout from './components/Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Noticias />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="actividades" element={<Actividades />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
