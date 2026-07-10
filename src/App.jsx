import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loop from './components/Loop';
import WhoWeServe from './components/WhoWeServe';
import Philosophy from './components/Philosophy';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './useReveal';
import './App.css';

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Loop />
        <WhoWeServe />
        <Philosophy />
        <Pricing />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
