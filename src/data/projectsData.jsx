import React from 'react';
import { DiReact, DiPython, DiUnitySmall } from "react-icons/di";
import { SiTypescript, SiMariadb, SiDigitalocean, SiGithubactions } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaAws } from "react-icons/fa"; 

export const projects = [
  {
    id: 1,
    title: "Sistema POS B2B Farmacéutico",
    description: "Sistema completo para gestión de ventas e inventario en farmacias. Automatiza procesos críticos como control de caducidad, consultas vía WhatsApp y respaldos en la nube, reduciendo errores operativos y mejorando la eficiencia del negocio.",
    icon: <DiReact size={40} className="text-cyan-400" />,
    tech: [
      { name: "React", icon: <DiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "MariaDB", icon: <SiMariadb /> },
      { name: "CI/CD", icon: <SiGithubactions /> },
      { name: "DigitalOcean", icon: <SiDigitalocean /> }
    ],
    hasGallery: true,
    notice: "Capturas de entorno de pruebas sin datos reales.",
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
      { text: "Backend (Arquitectura)", url: "https://github.com/FerHG0/API-FMR" },
      { text: "Frontend (Colaboración)", url: "https://github.com/Scaramoucheemo/FRONT-FMR" }
    ]
  },
  {
    id: 2,
    title: "AWS DeepRacer - IA Autónoma",
    description: "Modelo de conducción autónoma entrenado con Reinforcement Learning en la nube. Logré el 3er lugar en competencia oficial optimizando recompensas y comportamiento del agente.",
    icon: <DiPython size={40} className="text-yellow-400" />,
    tech: [
      { name: "Python", icon: <DiPython /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "RL", icon: null }
    ],
    hasGallery: false,
    github: []
  },
{
    id: 3,
    title: "Eco de los bosques",
    itchio: "https://ferhg.itch.io/eco-de-los-bosques", // <--- NUEVO LINK
    description: "Videojuego 3D con IA enemiga dinámica y mecánicas de sigilo. Implementé lógica basada en estados y eventos para generar tensión, incluyendo sistema de stamina, inventario y jumpscares condicionados.",
    icon: <DiUnitySmall size={40} className="text-gray-300" />,
    tech: [
      { name: "Unity", icon: <DiUnitySmall /> },
      { name: "C#", icon: <TbBrandCSharp /> },
      { name: "POO", icon: null }
    ],
    hasGallery: true,
    notice: "Nota: Este es un build ejecutable para Windows. Se recomienda GPU dedicada.",
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
      "/images/projects/EcoDeLosBosques/eco10.jpeg",    ],
    github: [
      { text: "Repositorio del proyecto", url: "https://github.com/FerHG0/eco_de_los_bosques.git" }
    ]
  }
];