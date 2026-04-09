import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importante: los estilos de AOS
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Cursor from './components/Cursor';


function App() {
//Animaciones de AOS
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  }, []);


  return (
   <div className="w-full min-h-screen bg-gray-950 font-sans">
      <Cursor />
      <Hero />
      <Projects />
      <About />
      <Footer />

    </div>
  )
}

export default App
