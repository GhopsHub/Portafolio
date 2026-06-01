// PORTADAS
import PortadaSakuraRent from "../assets/images/Projects/SakuraRent/portada/sakura4.png";
import PortadaGhopsongs from "../assets/images/Projects/Ghopsongs/portada/portada.webp";
import PortadaTerminalTunes from "../assets/images/Projects/TerminalTunes/portada/portada.webp";

// IMAGENES SAKURARENT
import sakurarent from "../assets/images/Projects/SakuraRent/sakura.png";
import sakurarent1 from "../assets/images/Projects/SakuraRent/sakura1.png";
import sakurarent2 from "../assets/images/Projects/SakuraRent/sakura2.png";
import sakurarent3 from "../assets/images/Projects/SakuraRent/sakura3.png";

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
    workdata;
    description?: string;
    images?: string[];
    icons?: string[];
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
          "SakuraRent es una plataforma prototipo de alquiler de vehículos desarrollada con Laravel y React. El proyecto incorpora autenticación, reservas, gestión de vehículos y panel administrativo, permitiendo explorar flujos completos de desarrollo full stack y organización de aplicaciones web modernas.",
        images: [sakurarent, sakurarent1, sakurarent2, sakurarent3],
      },
      {
        type: "technologies",
        title: "Tecnologías",
        description: "",
        icons: [
          "logos:css-3",
          "logos:laravel",
          "logos:mysql-icon",
          "logos:tailwindcss-icon",
          "logos:typescript-icon",
        ],
      },
      {
        type: "history",
        title: "De dónde nació SakuraRent",
        description:
          "SakuraRent fue desarrollado en 2025 como un proyecto práctico para aplicar y fortalecer conocimientos en Laravel y React. El objetivo principal fue construir una plataforma de alquiler de vehículos con una estructura funcional, interfaces intuitivas y gestión eficiente tanto para usuarios como administradores. El proyecto permitió explorar arquitectura web, manejo de bases de datos y organización de aplicaciones full stack.",
        images: [],
      },
    ],
  },

  //? Analizador spotify
  {
    name: "Analizador Spotify",
    type: "Web",
    technologies: "React ~ TypeScript",
    year: "2025",
    slug: "Analizador Spotify",
    cover: sakurarent,
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
        icons: ["logos:react", "logos:tailwindcss-icon"],
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

  //? Convertidor de imagenes
  {
    name: "Convertidor de imagenes",
    type: "Web",
    technologies: "React ~ TypeScript",
    year: "2025",
    slug: "Convertidor de imagenes",
    cover: sakurarent,
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
        icons: ["logos:react", "logos:tailwindcss-icon"],
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

  //? GhopSongs
  {
    name: "GhopSongs",
    type: "Web",
    technologies: "React ~ TypeScript",
    year: "2025",
    slug: "GhopSongs",
    cover: PortadaGhopsongs,
    sections: [
      {
        type: "description",
        title: "¿Qué es GhopSongs?",
        description:
          "GhopSongs es una plataforma web diseñada para ayudar a las personas a aprender inglés a través de la música. Su objetivo es ofrecer una forma más atractiva y natural de practicar el idioma, permitiendo a los usuarios comprender canciones mediante letras y traducciones presentadas de forma clara y accesible.",
        images: [PortadaGhopsongs],
      },
      {
        type: "technologies",
        title: "Tecnologías",
        description: "",
        icons: ["logos:python", "logos:flask", "logos:google"],
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

  //? Terminal Tunes
  {
    name: "Terminal Tunes",
    type: "Web",
    technologies: "React ~ TypeScript",
    year: "2025",
    slug: "Terminal Tunes",
    cover: PortadaTerminalTunes,
    sections: [
      {
        type: "description",
        title: "¿Qué es Terminal Tunes?",
        description:
          "Plataforma de productos personalizados diseñados para reflejar tu estilo. Descubre tazas, camisetas y más, creados con arte, calidad y autenticidad.",
        // url: "https://ghopshub.github.io/StamPurr/",
        images: [PortadaTerminalTunes],
      },
      {
        type: "technologies",
        title: "Tecnologías",
        description: "",
        icons: ["logos:react", "logos:tailwindcss-icon"],
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

  //? Ordenador de imagenes
  {
    name: "Ordenador de imagenes",
    type: "Web",
    technologies: "React ~ TypeScript",
    year: "2025",
    slug: "Ordenador de imagenes",
    cover: sakurarent,
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
        icons: ["logos:react", "logos:tailwindcss-icon"],
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

  //? Route Mapper
  {
    name: "Route Mapper",
    type: "Web",
    technologies: "React ~ TypeScript",
    year: "2025",
    slug: "Route Mapper",
    cover: sakurarent,
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
        icons: ["logos:react", "logos:tailwindcss-icon"],
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

  //? WordGhops
  {
    name: "WordGhops",
    type: "Web",
    technologies: "React ~ TypeScript",
    year: "2025",
    slug: "WordGhops",
    cover: sakurarent,
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
        icons: ["logos:react", "logos:tailwindcss-icon"],
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
