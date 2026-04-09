import React, { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight, FiInfo } from "react-icons/fi";

const Modal = ({ onClose, images, title, notice }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right'); // Nueva lógica de dirección

  const hasImages = images && images.length > 0;

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all">
      {/* Contenedor principal con animación de entrada (animate-modal-zoom) */}
      <div className="relative bg-gray-950 w-full max-w-5xl h-[85vh] md:h-[90vh] rounded-3xl border border-gray-800 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden animate-modal-zoom">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/50 relative z-20 shrink-0">
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-display">
            {title} <span className="text-blue-500 font-mono text-sm ml-2">{"//"} Galería</span>
          </h3>
          <button 
            onClick={onClose}
            className="p-2 bg-gray-800 hover:bg-red-500/20 rounded-full text-gray-400 hover:text-red-400 transition-colors group border border-gray-700"
          >
            <FiX size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Nota informativa */}
        {notice && (
          <div className="bg-blue-900/20 border-b border-blue-900/50 p-4 px-6 flex items-start md:items-center gap-3 shrink-0">
            <FiInfo className="text-blue-400 mt-1 md:mt-0 shrink-0" size={20} />
            <p className="text-blue-200 text-sm md:text-base leading-relaxed">
              {notice}
            </p>
          </div>
        )}

        {/* Cuerpo del Carrusel */}
        <div className="flex-1 relative flex items-center justify-center bg-black overflow-hidden group">
          {hasImages ? (
            <>
              {/* Contenedor de Imagen con Animación de Slide */}
              <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
                <img 
                  key={currentIndex} // CRITICO: Forzamos el reinicio de la animación
                  src={images[currentIndex]} 
                  alt={`Captura ${currentIndex + 1}`} 
                  className={`max-w-full max-h-full object-contain rounded-xl shadow-2xl ${
                    direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'
                  }`}
                  onError={(e) => { e.target.src = "https://via.placeholder.com/1280x720/1f2937/3b82f6?text=Captura+en+proceso"; }}
                />
              </div>

              {/* Controles de navegación */}
              {images.length > 1 && (
                <>
                  <button onClick={prevSlide} className="absolute left-4 p-3 bg-black/50 hover:bg-blue-600 text-white rounded-full backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300">
                    <FiChevronLeft size={28} />
                  </button>
                  <button onClick={nextSlide} className="absolute right-4 p-3 bg-black/50 hover:bg-blue-600 text-white rounded-full backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300">
                    <FiChevronRight size={28} />
                  </button>
                </>
              )}

              {/* Indicadores */}
              {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-gray-800">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 'right' : 'left');
                        setCurrentIndex(index);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-blue-500 w-8 shadow-[0_0_10px_rgba(59,130,246,0.8)]" : "bg-gray-600 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="text-gray-500 font-mono">No hay capturas disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;