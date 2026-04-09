import React, { useState, useEffect } from 'react';
import { DiPython, DiLinux, DiReact, DiJavascript1, DiGit, DiAws, DiNodejsSmall } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

const Hero = () => {
  const commandToType = "./init_profile.sh";
  const [typedCommand, setTypedCommand] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const [showStack, setShowStack] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < commandToType.length) {
        setTypedCommand((prev) => prev + commandToType.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowStatus(true), 500);
        setTimeout(() => setShowStack(true), 1500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen flex items-center overflow-hidden px-8 lg:px-20 font-sans">
      
      {/* Glow background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* TEXTO */}
        <div>
          <p className="text-blue-400 font-mono mb-3 tracking-widest text-sm">
            {">"} Inicializando perfil...
          </p>

          <h1 className="font-display text-6xl md:text-8xl font-extrabold mb-4 tracking-tighter">
            Fernando Herrera
          </h1>

          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 pb-2">
            Backend & Fullstack Developer
          </h2>

          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
            Desarrollo <span className="text-gray-200 font-semibold">sistemas completos que resuelven problemas reales</span>.  
            Especializado en <span className="text-gray-200 font-semibold">TypeScript, Python y arquitectura backend</span>, 
            con experiencia en <span className="text-gray-200 font-semibold">CI/CD, Linux y despliegues en producción</span>.  
            He trabajado en soluciones como sistemas POS, automatización de procesos y aplicaciones con IA.
          </p>

          <div className="flex flex-wrap gap-5">
            <a href="#proyectos" className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-sm tracking-wider py-3.5 px-8 rounded-xl transition-all hover:-translate-y-1">
              Ver Sistemas
            </a>
            <a href="#sobre-mi" className="border border-blue-500 text-blue-400 hover:bg-blue-900 font-mono text-sm tracking-wider py-3.5 px-8 rounded-xl transition-all hover:-translate-y-1">
              Sobre Mí
            </a>
          </div>
        </div>

        {/* VISUAL */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-full h-[550px] flex items-center justify-center">
            
            {/* ICONOS */}
            <div className="absolute top-5 left-0 text-yellow-400 opacity-40 animate-float-1"><DiPython size={80} /></div>
            <div className="absolute top-0 right-5 text-blue-500 opacity-40 animate-float-2"><SiTypescript size={75} /></div>
            <div className="absolute top-1/2 -right-10 text-cyan-400 opacity-40 animate-float-1">
              <DiReact size={80} className="animate-spin-slow" style={{animationDuration: '10s'}} />
            </div>
            <div className="absolute bottom-5 right-0 text-white opacity-40 animate-float-2"><DiLinux size={75} /></div>
            <div className="absolute -bottom-5 left-1/2 text-orange-400 opacity-40 animate-float-1"><DiAws size={80} /></div>
            <div className="absolute bottom-10 left-[-20px] text-red-500 opacity-40 animate-float-2"><DiGit size={70} /></div>
            <div className="absolute top-1/2 -left-12 text-green-500 opacity-40 animate-float-1"><DiNodejsSmall size={80} /></div>
            <div className="absolute top-[-20px] left-1/2 text-yellow-300 opacity-30 animate-float-2"><DiJavascript1 size={75} /></div>

            {/* TERMINAL */}
            <div className="relative w-[320px] h-[320px] lg:w-[550px] lg:h-[370px] z-10">
              <div className="w-full h-full rounded-3xl bg-gray-900 border border-gray-800 shadow-2xl flex flex-col overflow-hidden hover:scale-105 transition-transform duration-500">
                
                <div className="bg-gray-800/50 px-5 py-3 flex items-center gap-2 border-b border-gray-800">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs text-gray-400 font-mono">fernando@dev:~</span>
                </div>

                <div className="p-6 flex-1 bg-black font-mono text-sm overflow-y-auto">
                  <pre>
                    <code>
                      <span className="text-blue-400">➜</span> ~ {typedCommand}
                      {!showStatus && <span className="animate-pulse">_</span>}
                      <br/>

                      {showStatus && (
                        <>
                          <span className="text-gray-500">▶ Cargando perfil profesional...</span>
                          <br/>
                        </>
                      )}

                      {showStack && (
                        <>
                          <span className="text-green-400">✔ Perfil cargado correctamente</span><br/><br/>
                          <span className="text-purple-400">Stack:</span> TypeScript, Node.js, Python<br/>
                          <span className="text-purple-400">Frontend:</span> React, Tailwind, Vite<br/>
                          <span className="text-purple-400">Infra:</span> Linux, Docker, CI/CD<br/>
                          <span className="text-purple-400">DB:</span> MongoDB, MariaDB<br/>
                          <span className="text-purple-400">Focus:</span> Sistemas reales & automatización<br/>
                          <br/>
                          <span className="text-blue-400">➜</span> ~ <span className="animate-pulse">_</span>
                        </>
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