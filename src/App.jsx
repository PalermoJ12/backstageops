import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Process />
      <About />
      <Testimonial />
      <Footer />
    </>
  );
}
