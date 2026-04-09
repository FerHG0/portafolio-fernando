import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* El halo de luz que sigue al cursor */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.08), transparent 80%)`
        }}
      />
      {/* Un pequeño punto físico que reemplaza (o acompaña) al cursor */}
      <div 
        className="pointer-events-none fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full z-[9999] mix-blend-screen transition-transform duration-75 ease-out shadow-[0_0_10px_rgba(37,99,235,0.8)] hidden md:block"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`
        }}
      />
    </>
  );
};

export default Cursor;