import React from 'react';
import { DiReact, DiPython, DiUnitySmall } from "react-icons/di";
import { SiTypescript, SiMariadb, SiDigitalocean, SiGithubactions } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaAws } from "react-icons/fa"; 

export const projects = [
  {
    id: 1,
    title: "Sistema POS B2B Farmacéutico",
    description: "Plataforma Fullstack para la gestión de inventario remoto y ventas. Incluye un bot de WhatsApp para consultas con IA, alertas de caducidad y respaldos automatizados usando la API de Google Drive. Desplegado en un servidor Linux optimizado de recursos limitados.",
    icon: <DiReact size={40} className="text-cyan-400" />,
    tech: [
      { name: "React", icon: <DiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "MariaDB", icon: <SiMariadb /> },
      { name: "CI/CD Actions", icon: <SiGithubactions /> },
      { name: "DigitalOcean", icon: <SiDigitalocean /> }
    ],
    hasGallery: true,
    notice: "Nota de confidencialidad: Por respeto a los datos del cliente, las capturas mostradas corresponden a un entorno de pruebas (Staging) limpio, preparado para despliegue y sin información real de medicamentos o pacientes.",
    images: [
      "/images/projects/APIFarmacia/pos-1.png",
      "/images/projects/APIFarmacia/pos-2.png",
      "/images/projects/APIFarmacia/pos-3.png",
      "/images/projects/APIFarmacia/pos-4.png",
      "/images/projects/APIFarmacia/pos-5.png",
      "/images/projects/APIFarmacia/pos-6.png",
      "/images/projects/APIFarmacia/pos-7.png",
      "/images/projects/APIFarmacia/pos-DB.png",
      "/images/projects/APIFarmacia/pos-droplet.png",
      "/images/projects/APIFarmacia/pos-droplet1.png",
    ],
    github: [
      { text: "Backend (Autor)", url: "https://github.com/FerHG0/API-FMR" },
      { text: "Frontend (Colaborador)", url: "https://github.com/Scaramoucheemo/FRONT-FMR" }
    ]
  },
  {
    id: 2,
    title: "AWS DeepRacer - IA Autónoma",
    description: "Modelo de Inteligencia Artificial entrenado mediante aprendizaje por refuerzo (Reinforcement Learning) para conducción autónoma en pistas virtuales y físicas. Logro del 3er lugar en competencia oficial. Desarrollo íntegro en entorno Cloud.",
    icon: <DiPython size={40} className="text-yellow-400" />,
    tech: [
      { name: "Python", icon: <DiPython /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Machine Learning", icon: null }
    ],
    link: "#",
    hasGallery: false, // No hay galería para este
    github: [] // Vacío porque no hay código fuente público
  },
  {
    id: 3,
    title: "Survival Horror (Wendigo)",
    description: "Videojuego 3D en mundo semi-abierto con mecánicas de sigilo, gestión de estamina e inventario. Implementación de una IA enemiga perseguidora y mecánicas dinámicas de 'Jumpscares' condicionadas al estado de las herramientas del jugador (POO).",
    icon: <DiUnitySmall size={40} className="text-gray-300" />,
    tech: [
      { name: "Unity", icon: <DiUnitySmall /> },
      { name: "C#", icon: <TbBrandCSharp /> }, 
      { name: "POO", icon: null }
    ],
    link: "#",
    hasGallery: true,
    images: [
      "/images/projects/EcoDeLosBosques/eco.jpeg",
      "/images/projects/EcoDeLosBosques/eco2.jpeg",
      "/images/projects/EcoDeLosBosques/eco3.jpeg",
      "/images/projects/EcoDeLosBosques/eco4.jpeg",
      "/images/projects/EcoDeLosBosques/eco5.jpeg",
      "/images/projects/EcoDeLosBosques/eco6.jpeg",
      "/images/projects/EcoDeLosBosques/eco7.jpeg",
      "/images/projects/EcoDeLosBosques/eco8.jpeg",
      "/images/projects/EcoDeLosBosques/eco9.jpeg",
      "/images/projects/EcoDeLosBosques/eco10.jpeg"

    ],
    github: [
      { text: "Código Fuente", url: "URL_DE_TU_JUEGO" }
    ]
  }
];