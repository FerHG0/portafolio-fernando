import React, { useState, useEffect } from 'react';
import { FiX, FiChevronLeft, FiChevronRight, FiInfo } from "react-icons/fi";

const Modal = ({ onClose, images, title, notice }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isClosing, setIsClosing] = useState(false);

  const hasImages = images && images.length > 0;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300);
  };

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-none transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Overlay para cerrar al hacer clic fuera */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* FIX 1: Añadimos 'flex flex-col' al contenedor principal. 
          Esto permite que los hijos (Header, Nota, Imagen) se distribuyan correctamente.
      */}
      <div className={`relative w-full max-w-6xl h-[85vh] md:h-[90vh] rounded-3xl overflow-hidden border border-gray-800 bg-black shadow-2xl z-10 flex flex-col transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        
        {/* Header - Altura fija */}
        <div className="flex items-center justify-between p-6 bg-gray-900/50 backdrop-blur-md border-b border-gray-800 shrink-0">
          <h3 className="text-xl font-bold font-display">
            {title} <span className="text-blue-500 text-sm font-mono ml-2">{"//"} Galería</span>
          </h3>
          <button onClick={handleClose} className="p-2 text-gray-400 hover:text-red-400 transition-colors">
            <FiX size={26} />
          </button>
        </div>

        {/* Nota informativa - Altura fija */}
        {notice && (
          <div className="bg-blue-950/30 border-b border-blue-900/50 p-4 px-6 flex items-center gap-3 shrink-0">
            <FiInfo className="text-blue-400 shrink-0" size={20} />
            <p className="text-sm text-blue-200 leading-relaxed font-sans">{notice}</p>
          </div>
        )}

        {/* FIX 2: Contenedor de Imagen con 'flex-1'. 
            Esto hace que tome TODO el espacio restante del modal.
        */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden group">
          {hasImages && (
            <>
              {/* FIX 3: Cambiamos 'object-cover' por 'object-contain'.
                  Para sistemas POS y software, es mejor que se vea la ventana completa sin recortes.
              */}
              <img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Captura ${currentIndex + 1}`}
                className={`w-full h-full object-contain p-4 md:p-8 transition-all duration-500 ${
                  direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'
                }`}
              />

              {/* Botones de navegación con mejor visibilidad */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevSlide} 
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-black/60 hover:bg-blue-600/80 text-white rounded-full backdrop-blur-md border border-gray-700 transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                  >
                    <FiChevronLeft size={32} />
                  </button>

                  <button 
                    onClick={nextSlide} 
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-black/60 hover:bg-blue-600/80 text-white rounded-full backdrop-blur-md border border-gray-700 transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                  >
                    <FiChevronRight size={32} />
                  </button>
                </>
              )}

              {/* Indicadores estilizados */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 px-4 py-2 bg-black/40 backdrop-blur-xl rounded-full border border-gray-800">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentIndex ? 'right' : 'left');
                      setCurrentIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'w-8 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'w-2 bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;