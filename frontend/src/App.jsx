// src/App.jsx
import React from 'react';
import AppRoutes from './routes';
import Layout from './components/Layout';
/* App.css - Estilos generales del contenedor App */
function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
