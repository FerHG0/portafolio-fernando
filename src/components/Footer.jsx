import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 text-gray-400 py-16 px-8 lg:px-20 font-sans flex flex-col items-center text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-blue-500 font-mono tracking-widest text-sm mb-4">{"//"} SIGUIENTE PASO</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">¿Trabajamos juntos?</h2>
        
        <p className="text-lg mb-10 leading-relaxed">
          Actualmente estoy abierto a nuevas oportunidades laborales. Ya sea que tengas una vacante, una pregunta o simplemente quieras conectar, mi bandeja de entrada siempre está abierta.
        </p>
        
        <div className="flex justify-center gap-8 mb-12">
          <a 
            href="https://github.com/FerHG0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-4 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            <FiGithub size={28} />
          </a>
          <a 
            href="https://www.linkedin.com/in/fernando-herrera-95b446331" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-4 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            <FiLinkedin size={28} />
          </a>
          <a 
            href="mailto:HeGaFernando2001@outlook.com" 
            className="p-4 bg-gray-900 rounded-2xl border border-gray-800 hover:border-purple-500 hover:text-purple-400 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            <FiMail size={28} />
          </a>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>
        
        <p className="text-sm font-mono text-gray-600">
          Diseñado y desarrollado por Carlos Fernando Herrera García.
        </p>
      </div>
    </footer>
  );
};

export default Footer;