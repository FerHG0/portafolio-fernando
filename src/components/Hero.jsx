import React, { useState, useEffect } from 'react'; // Importamos hooks necesarios
import { DiPython, DiLinux, DiReact, DiJavascript1, DiGit, DiAws, DiNodejsSmall } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

const Hero = () => {
  // LÓGICA DE LA CEREZA: EFECTO DE ESCRITURA (Typing Effect)
  const commandToType = "./fetch_stack.sh";
  const [typedCommand, setTypedCommand] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const [showStack, setShowStack] = useState(false);

  useEffect(() => {
    // 1. Simular tecleo del comando inicial
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < commandToType.length) {
        setTypedCommand((prev) => prev + commandToType.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        // 2. Una vez tecleado, esperar un poco y mostrar "Cargando..."
        setTimeout(() => setShowStatus(true), 500);
        // 3. Esperar más y mostrar todo el stack de golpe
        setTimeout(() => setShowStack(true), 1500);
      }
    }, 100); // Velocidad de tecleo (100ms por letra)

    // Limpieza al desmontar el componente
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen flex items-center overflow-hidden px-8 lg:px-20 font-sans">
      
      {/* Elementos decorativos de fondo (Glow) */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Columna de Texto */}
        <div data-aos="fade-right">
          <p className="text-blue-400 font-mono mb-3 tracking-widest text-sm">{">"} ¡Hola, Mundo! Soy</p>
          <h1 className="font-display text-6xl md:text-8xl font-extrabold mb-4 tracking-tighter text-white">
            Fernando Herrera
          </h1>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-text-gradient mb-6 pb-2 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            Software Developer
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg font-normal">
            Transformo lógica compleja en soluciones reales. Especializado en TypeScript, Python y despliegues automatizados. 
            De optimizar infraestructura B2B a competir con Inteligencia Artificial.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="#proyectos" className="btn-premium text-white font-mono text-sm tracking-wider py-3.5 px-8 rounded-xl transition-all hover:-translate-y-1">
              Ver Proyectos
            </a>
            <a href="#sobre-mi" className="btn-premium text-white font-mono text-sm tracking-wider py-3.5 px-8 rounded-xl transition-all hover:-translate-y-1">
              Sobre Mí
            </a>
          </div>
        </div>

        {/* Columna Visual (Terminal Dinámica + Partículas) */}
        <div className="hidden md:flex justify-center items-center" data-aos="fade-left" data-aos-delay="300">
          <div className="relative w-full h-[550px] flex items-center justify-center">
            
            {/* Partículas de Iconos (Sin cambios) */}
            <div className="absolute top-5 left-0 lg:left-5 text-yellow-400 opacity-40 animate-float-1"><DiPython size={80} /></div>
            <div className="absolute top-0 right-5 lg:right-10 text-blue-500 opacity-40 animate-float-2"><SiTypescript size={75} /></div>
            <div className="absolute top-1/2 -right-10 lg:-right-16 text-cyan-400 opacity-40 animate-float-1"><DiReact size={80} className="animate-spin-slow" style={{animationDuration: '10s'}} /></div>
            <div className="absolute bottom-5 right-0 lg:right-5 text-white opacity-40 animate-float-2"><DiLinux size={75} /></div>
            <div className="absolute -bottom-5 left-1/2 text-orange-400 opacity-40 animate-float-1"><DiAws size={80} /></div>
            <div className="absolute bottom-10 left-[-20px] lg:left-[-10px] text-red-500 opacity-40 animate-float-2"><DiGit size={70} /></div>
            <div className="absolute top-1/2 -left-12 lg:-left-20 text-green-500 opacity-40 animate-float-1"><DiNodejsSmall size={80} /></div>
            <div className="absolute top-[-20px] left-1/2 text-yellow-300 opacity-30 animate-float-2"><DiJavascript1 size={75} /></div>

            {/* CONTENEDOR DE LA TERMINAL RESPONSIVO */}
            <div className="relative w-[320px] h-[320px] lg:w-[550px] lg:h-[370px] z-10 transition-all duration-300">
              <div className="w-full h-full rounded-3xl bg-gray-900 border border-gray-800 shadow-2xl flex flex-col overflow-hidden transform transition-transform hover:scale-105 duration-500 hover:border-gray-700">
                
                <div className="bg-gray-800/50 px-5 py-3 flex items-center gap-2 border-b border-gray-800">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs text-gray-400 font-mono tracking-wider">guest@fernando: ~</span>
                </div>
                
                {/* CUERPO DE LA TERMINAL CON LÓGICA DINÁMICA */}
                <div className="p-6 flex-1 relative bg-gradient-to-br from-gray-900 to-black font-mono overflow-y-auto">
                  <pre className="text-green-400 text-sm lg:text-[15px] leading-relaxed">
                    <code>
                      {/* Línea 1: Comando tecleándose dinámicamente */}
                      <span className="text-blue-400 font-bold">➜</span> <span className="text-gray-300">~</span> {typedCommand}
                      {/* Cursor parpadeante si no ha empezado a cargar */}
                      {!showStatus && <span className="animate-pulse">_</span>}
                      <br/>
                      
                      {/* Línea 2: Estado de carga (Aparece tras teclear) */}
                      {showStatus && (
                        <>
                          <span className="text-gray-500 italic">▶ Cargando perfil de Fernando...</span>
                          <br/>
                        </>
                      )}

                      {/* Stack completo (Aparece al final) */}
                      {showStack && (
                        <div data-aos="fade-in" data-aos-duration="300">
                          <span className="text-purple-400 font-bold">OS:</span>      <span className="text-gray-300">GNU/Linux (Manjaro/Hyprland)</span><br/>
                          <span className="text-purple-400 font-bold">Back:</span>    <span className="text-gray-300">TypeScript, Node.js, Python, C#</span><br/>
                          <span className="text-purple-400 font-bold">Front:</span>   <span className="text-gray-300">React, Vite, Tailwind, HTML/CSS</span><br/>
                          <span className="text-purple-400 font-bold">Data:</span>    <span className="text-gray-300">MariaDB, MongoDB, DBeaver</span><br/>
                          <span className="text-purple-400 font-bold">DevOps:</span>  <span className="text-gray-300">DigitalOcean, GitHub Actions CI/CD</span><br/>
                          <span className="text-purple-400 font-bold">Extra:</span>   <span className="text-gray-300">AWS DeepRacer (IA), Unity3D, SCRUM</span><br/>
                          <span className="text-blue-400 font-bold">➜</span> <span className="text-gray-300">~</span> <span className="animate-pulse">_</span>
                        </div>
                      )}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;