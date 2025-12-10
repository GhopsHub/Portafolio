// PORTADAS
import PortadaSakuraRent from "../assets/images/Projects/SakuraRent/portada/sakura4.png";
import PortadaStamPurr from "../assets/images/Projects/StamPurr/portada/stampurr.webp";

// IMAGENES SAKURARENT
import sakurarent from "../assets/images/Projects/SakuraRent/sakura.png";
import sakurarent1 from "../assets/images/Projects/SakuraRent/sakura1.png";
import sakurarent2 from "../assets/images/Projects/SakuraRent/sakura2.png";
import sakurarent3 from "../assets/images/Projects/SakuraRent/sakura3.png";

// IMAGENES STAMPURR
import stampurr from "../assets/images/Projects/StamPurr/stampurr1.webp";

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
    title?: string;
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
          "Plataforma digital para alquilar vehículos de forma rápida, segura y eficiente. Disponible en versión web y móvil, conecta a propietarios y usuarios en una experiencia fluida centrada en la sostenibilidad y la movilidad inteligente.",
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
          "SakuraRent fue creada en 2025 como respuesta a la necesidad de una forma más accesible, rápida y responsable de alquilar vehículos. Pensada para conectar dueños de autos con personas que necesitan movilidad temporal, la plataforma apuesta por una experiencia sencilla y moderna. Con un enfoque en la sostenibilidad, SakuraRent promueve el uso compartido de recursos, reduciendo el impacto ambiental y optimizando la disponibilidad de vehículos.",
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
        images: [stampurr],
      },
    ],
  },
];
