// PORTADAS
import PortadaSakuraRent from "../assets/images/Projects/SakuraRent/portada/sakura4.png";
import PortadaStamPurr from "../assets/images/Projects/StamPurr/portada/stampurr.webp";

// IMAGENES SAKURARENT
import sakurarent from "../assets/images/Projects/SakuraRent/sakura.png";
import sakurarent1 from "../assets/images/Projects/SakuraRent/sakura1.png";
import sakurarent2 from "../assets/images/Projects/SakuraRent/sakura2.png";
import sakurarent3 from "../assets/images/Projects/SakuraRent/sakura3.png";

// IMAGENES STAMPURR
// import stampurr from "../assets/images/Projects/StamPurr/stampurr1.webp";

// TECHNOLOGIES
import css from "../assets/images/Technologies/css.svg";
import laravel from "../assets/images/Technologies/laravel.svg";
import mysql from "../assets/images/Technologies/mysql.svg";
import react from "../assets/images/Technologies/react_wordmark_dark.svg";
import tailwind from "../assets/images/Technologies/tailwindcss-wordmark-dark.svg";
import typescript from "../assets/images/Technologies/typescript.svg";

export type WorkItem = {
  name: string;
  type: string;
  technologies: string;
  year: string;
  slug: string;
  cover?: string;
  sections?: {
    type?: string;
    title?: string;workdata
    description?: string;
    images?: string[];
    url?: string;
  }[];
};

export const workData: WorkItem[] = [
  //? SAKURARENT
  {
    name: "SakuraRent",
    type: "Web",
    technologies: "Laravel ~ React",
    year: "2025",
    slug: "sakurarent",
    cover: PortadaSakuraRent,
    sections: [
      {
        type: "description",
        title: "¿Qué es SakuraRent?",
        description:
          "SakurRent es un prototipo de una plataforma de alquiler de vehículos, creada principalmente como un proyecto de aprendizaje para explorar el desarrollo web utilizando Laravel y React. La plataforma está diseñada para usuarios y administradores, cada uno con funcionalidades especificas. Los usuarios pueden registrarse, iniciar sesión, buscar vehículos disponibles, realizar reservas y gestionar sus alquileres. Por otro lado, los administradores tienen la capacidad de gestionar el inventario de vehículos, revisar reservas y mantener la plataforma actualizada. Aunque es un prototipo, SakuraRent busca ofrecer una experiencia intuitiva y funcional, sirviendo como una base sólida para futuros desarrollos en el ámbito del desarrollo web y la gestión de proyectos.",
        images: [sakurarent, sakurarent1, sakurarent2, sakurarent3],
      },
      {
        type: "technologies",
        title: "Tecnologías",
        description: "",
        images: [css, laravel, mysql, tailwind, typescript],
      },
      {
        type: "history",
        title: "De dónde nació SakuraRent",
        description:
          "SakuraRent fue creada en 2025 como respuesta a la necesidad de desarrollar un proyecto práctico que me permitiera aplicar y consolidar mis conocimientos en Laravel y React. El objetivo principal era construir una plataforma de alquiler de vehículos que ofreciera una experiencia de usuario fluida y eficiente, tanto para los clientes como para los administradores. A través de este proyecto, busqué explorar las mejores prácticas en el desarrollo web, la gestión de bases de datos y la implementación de interfaces intuitivas, con la intención de sentar las bases para futuros proyectos más complejos en el ámbito del desarrollo web y la gestión de proyectos.",
        images: [],
      },
    ],
  },

  //? STAMPURR
  {
    name: "StamPurr",
    type: "Web",
    technologies: "React ~ TypeScript",
    year: "2025",
    slug: "stampurr",
    cover: PortadaStamPurr,
    sections: [
      {
        type: "description",
        title: "¿Qué es StamPurr?",
        description:
          "Plataforma de productos personalizados diseñados para reflejar tu estilo. Descubre tazas, camisetas y más, creados con arte, calidad y autenticidad.",
        url: "https://ghopshub.github.io/StamPurr/",
        images: [],
      },
      {
        type: "technologies",
        title: "Tecnologías",
        description: "",
        images: [react, tailwind],
      },
      {
        type: "history",
        title: "De dónde nació StamPurr",
        description:
          "StamPurr es una pagina que buca crear productos personalizados, como tazas, camisetas, etc. Se desarrolló en 2025 con el objetivo de crear una marca que refleje la pasion por el arte y la personalización. Con un enfoque en la calidad y la atención al detalle, StamPurr busca ofrecer a sus clientes productos únicos que cuenten una historia.",
        images: [],
      },
    ],
  },
];
