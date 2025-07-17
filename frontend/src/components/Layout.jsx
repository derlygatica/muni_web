import Navbar from './Navbar';
import Hero from './Hero';
import Servicios from './Servicios';
import Proyectos from './Proyectos';
import Institucional from './Institucional';
import Noticias from './Noticias';
import Contacto from './Contacto';
import Footer from './Footer';


export default function Layout() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Proyectos />
      <Institucional />
      <Noticias />
      <Contacto />
      <Footer />
    </>
  );
}
