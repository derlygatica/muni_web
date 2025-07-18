// src/components/Layout.jsx
import Navbar from './Navbar';
import Footer from './Footer';
import BottomNav from './BottomNav';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 md:px-12 py-6">{children}</main>
      <Footer />
      <BottomNav />
    </>
  );
}
