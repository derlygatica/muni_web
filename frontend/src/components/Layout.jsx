import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: '#f9f9f9', padding: '1.5rem 0', textAlign: 'center' }}>
        <h1 style={{ margin: 0, color: '#2b2b2b' }}>Muni Web Muni Sana</h1>
        <p style={{ marginTop: '0.5rem', color: '#6b6b6b' }}>Plataforma institucional de noticias y servicios para la comunidad</p>
      </header>

      <main style={{ flex: 1, padding: '2rem', backgroundColor: '#f3f4f6' }}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
