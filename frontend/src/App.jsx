import './App.css';
import Noticias from './components/Noticias';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Muni Web Muni Sana</h1>
      <p>Plataforma institucional de noticias y servicios para la comunidad</p>

      <Noticias />
      <Footer />
    </div>
  );
}

export default App;