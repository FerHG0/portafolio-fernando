import React, { useState, useRef } from 'react';
import { projects } from '../data/projectsData';
import { FiExternalLink, FiGithub, FiImage } from "react-icons/fi";
import Modal from './Modal';

// --- SUB-COMPONENTE: Tarjeta 3D Individual ---
const ProjectCard = ({ project, index, openGallery }) => {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  // Matemática del efecto Tilt (Exactamente como te gustaba)
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / 20) * -1; 
    const rotateY = (x - centerX) / 20;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'none',
      zIndex: 10
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.5s ease-out',
      zIndex: 1
    });
  };

  return (
    <div 
      ref={cardRef}
      data-aos="fade-up" 
      data-aos-delay={index * 150}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-600 group flex flex-col will-change-transform shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden"
    >
      {/* Reflejo de luz falso (Brillo que aparece en hover) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full" style={{ transition: 'all 1s ease' }}></div>

      {/* Icono Principal */}
      <div className="bg-gray-950 w-16 h-16 rounded-xl border border-gray-800 flex items-center justify-center mb-6 shadow-lg group-hover:border-blue-500/50 transition-colors relative z-10">
        {project.icon}
      </div>

      <h3 className="font-display text-2xl font-bold mb-3 relative z-10">{project.title}</h3>
      
      <p className="text-gray-400 mb-6 flex-1 leading-relaxed text-sm md:text-base relative z-10">
        {project.description}
      </p>

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-2 mb-8 relative z-10">
        {project.tech.map((t, i) => (
          <span key={i} className="flex items-center gap-1.5 bg-gray-950 border border-gray-800 text-gray-300 text-xs px-3 py-1.5 rounded-md font-mono">
            {t.icon} {t.name}
          </span>
        ))}
      </div>

      {/* Enlaces y Botones */}
      <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-gray-800 relative z-10">
        
        <div className="flex flex-wrap items-center gap-4">
          {/* BOTÓN ITCH.IO (Prioridad para el juego) */}
          {project.itchio && (
            <a 
              href={project.itchio} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm transition-colors"
            >
              <FiExternalLink size={18} /> Jugar en Itch.io
            </a>
          )}

          {/* BOTÓN GALERÍA */}
          {project.hasGallery && (
            <button 
              onClick={() => openGallery(project)}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              <FiImage size={18} /> Ver Capturas
            </button>
          )}
        </div>

        {/* LISTADO DE REPOSITORIOS GITHUB */}
        {project.github && project.github.length > 0 && (
          <div className="flex flex-col gap-2 mt-2">
            {project.github.map((repo, i) => (
              <a 
                key={i} 
                href={repo.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-400 hover:text-white font-semibold text-sm transition-colors w-fit"
              >
                <FiGithub size={18} /> {repo.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openGallery = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="proyectos" className="bg-gray-950 text-white py-24 px-8 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto relative z-20">
        
        <div className="mb-16" data-aos="fade-up">
          <p className="text-blue-500 font-mono tracking-widest text-sm mb-2">{"//"} MI TRABAJO</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              openGallery={openGallery} 
            />
          ))}
        </div>

        {/* Modal con renderizado condicional optimizado */}
        {isModalOpen && (
          <Modal 
            onClose={() => setIsModalOpen(false)} 
            images={selectedProject?.images} 
            title={selectedProject?.title}
            notice={selectedProject?.notice} 
          />
        )}
      </div>
    </section>
  );
};

export default Projects;