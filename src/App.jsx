import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewToVA from './components/NewToVA';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Team from './components/Team';
import Results from './components/Results';
import Process from './components/Process';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewToVA />
      <WhyUs />
      <About />
      <Team />
      {/* <Results /> */}
      <Process />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
