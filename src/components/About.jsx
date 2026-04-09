import React, { useState, useEffect, useRef } from 'react';
import { FiAward, FiGlobe, FiTerminal, FiBookOpen, FiDownload } from "react-icons/fi";
import { DiLinux } from "react-icons/di";

// --- SUB-COMPONENTE 1: Título Hacker (Efecto Desencriptado) ---
const HackerText = ({ text }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
  const [displayText, setDisplayText] = useState(text.replace(/./g, '_'));
  const textRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Usamos IntersectionObserver para animar solo cuando el usuario haga scroll hasta aquí
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let iteration = 0;
        
        const interval = setInterval(() => {
          setDisplayText((prev) => 
            text.split("").map((letter, index) => {
              if (index < iteration) return text[index]; // Letra correcta
              return letters[Math.floor(Math.random() * letters.length)]; // Letra aleatoria
            }).join("")
          );
          
          if (iteration >= text.length) clearInterval(interval);
          iteration += 1 / 3; // Controla la velocidad del desencriptado
        }, 30);
      }
    });

    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, [text]);

  return <span ref={textRef} className="font-mono tracking-tight">{displayText}</span>;
};

// --- SUB-COMPONENTE 2: Tarjeta Magnética (Spotlight Border) ---
const SpotlightCard = ({ children }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    // Calculamos la posición exacta del ratón dentro de esta tarjeta
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      // El p-[1px] es el truco maestro: crea un "borde" de 1 pixel donde se verá la luz
      className="relative overflow-hidden rounded-2xl bg-gray-800 p-[1px] group transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Esta es la "Linterna" que sigue al cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.5), transparent 40%)`,
        }}
      />
      {/* Contenido real de la tarjeta (Tapa el centro de la linterna, dejando solo el borde brillante) */}
      <div className="relative h-full bg-gray-950 rounded-2xl p-6 flex flex-col z-10">
        {children}
      </div>
    </div>
  );
};
// --- FIN DE SUB-COMPONENTES ---


const About = () => {
  return (
    <section id="sobre-mi" className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24 px-8 lg:px-20 font-sans relative overflow-hidden">
      
      {/* Efecto de luz de fondo estático */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Columna Izquierda: Texto Sobre Mí */}
        <div data-aos="fade-right">
          <p className="text-blue-500 font-mono tracking-widest text-sm mb-2">{"//"} CONÓCEME</p>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-30"></div>
              <div className="relative w-full h-full rounded-full border-2 border-gray-700 overflow-hidden bg-gray-900 flex items-center justify-center shadow-2xl">
                <img 
                  src="/public/images/fotos/avatar2.jpeg" 
                  alt="Carlos Fernando Herrera García"
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                />
                <DiLinux size={50} className="text-gray-600 hidden" />
              </div>
            </div>
            
            {/* AQUÍ APLICAMOS EL EFECTO HACKER */}
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white min-h-[60px] flex items-center">
              <HackerText text="Más allá del código" />
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              Soy un desarrollador radicado en México, próximo a graduarme de la universidad y con una fuerte pasión por la arquitectura de software y la infraestructura. 
              Mi enfoque principal no es solo escribir líneas de código, sino <strong className="text-white">construir soluciones eficientes</strong> que resuelvan problemas reales de negocio.
            </p>
            <p>
              Me desenvuelvo de forma nativa en entornos Linux (Manjaro/Ubuntu) y disfruto automatizando procesos mediante scripts, macros y pipelines CI/CD. 
              Además, aunque utilizo herramientas modernas como React y Tailwind, poseo bases sólidas en el desarrollo web clásico (<strong className="text-gray-300">HTML5, CSS3 y JavaScript</strong>), lo que me permite estructurar interfaces accesibles y entender el DOM a profundidad.
            </p>
            <p>
              Actualmente estoy desarrollando el proyecto de tesis para mi titulación: un sistema integral para el sector farmacéutico, lo que me ha dado experiencia invaluable en el ciclo de vida completo del software.
            </p>
          </div>
        </div>

        {/* Columna Derecha: Certificaciones (AQUÍ USAMOS LAS SPOTLIGHT CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left">
          
          <SpotlightCard>
            <div className="w-12 h-12 bg-blue-900/30 text-blue-400 rounded-xl flex items-center justify-center mb-4">
              <FiGlobe size={24} />
            </div>
            <h3 className=" font-display text-xl font-bold mb-1 text-white">Inglés B1</h3>
            <p className="text-sm text-gray-500 font-mono">Nivel Intermedio</p>
            <p className="text-gray-400 text-sm mt-3">Lectura fluida de documentación técnica, resolución de problemas en foros y comunicación escrita efectiva en entornos remotos.</p>
          </SpotlightCard>

          <SpotlightCard>
            <div className="w-12 h-12 bg-purple-900/30 text-purple-400 rounded-xl flex items-center justify-center mb-4">
              <FiAward size={24} />
            </div>
            <h3 className="font-display text-xl font-bold mb-1 text-white">SCRUM Certified</h3>
            <p className="text-sm text-gray-500 font-mono">Metodologías Ágiles</p>
            <p className="text-gray-400 text-sm mt-3 mb-4 flex-1">Experiencia trabajando con sprints, historias de usuario y entregas continuas.</p>
            <a 
              href="/certificado-scrum.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors w-fit border border-purple-900/50 bg-purple-900/20 px-3 py-1.5 rounded-lg hover:bg-purple-900/40 relative z-20"
            >
              <FiDownload size={16} /> Ver Certificado
            </a>
          </SpotlightCard>

          <SpotlightCard>
            <div className="w-12 h-12 bg-green-900/30 text-green-400 rounded-xl flex items-center justify-center mb-4">
              <FiTerminal size={24} />
            </div>
            <h3 className=" font-display text-xl font-bold mb-1 text-white">Linux Native</h3>
            <p className="text-sm text-gray-500 font-mono">DevOps & SysAdmin</p>
            <p className="text-gray-400 text-sm mt-3">Manejo avanzado de terminal, SSH, gestión de permisos y despliegues en servidores basados en Debian/Arch.</p>
          </SpotlightCard>

          <SpotlightCard>
            <div className="w-12 h-12 bg-yellow-900/30 text-yellow-400 rounded-xl flex items-center justify-center mb-4">
              <FiBookOpen size={24} />
            </div>
            <h3 className="font-display text-xl font-bold mb-1 text-white">Ingeniería de Software</h3>
            <p className="text-sm text-gray-500 font-mono">En proceso de Titulación</p>
            <p className="text-gray-400 text-sm mt-3">Sólidas bases en algoritmos, estructuras de datos y patrones de diseño (POO/MVC).</p>
          </SpotlightCard>

        </div>

      </div>
    </section>
  );
};

export default About;