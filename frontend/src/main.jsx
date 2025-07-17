import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import './output.css'; // o './index.css' si es tu entrada base de Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

