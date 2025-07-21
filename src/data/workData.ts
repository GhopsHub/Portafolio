// PORTADAS
import PortadaGhopStore from "../assets/images/Projects/GhopStore/FrontPage/port-ghopstore.jpg"
import PortadaSakuraRent from "../assets/images/Projects/SakuraRent/FrontPage/port-sakurarent.jpg"
import PortadaStamPurr from "../assets/images/Projects/StamPurr/FrontPage/port-stampurr.webp"

// IMAGENES GHOPSTORE
import ghopstore1 from "../assets/images/Projects/GhopStore/System/system.png"
import ghopstore2 from "../assets/images/Technologies/laravel.svg"
import ghopstore3 from "../assets/images/Technologies/github_dark.svg"
import ghopstore4 from "../assets/images/Technologies/mysql.svg"
import ghopstore5 from "../assets/images/Projects/GhopStore/History/add (4).jpg"
import ghopstore6 from "../assets/images/Projects/GhopStore/History/add (10).jpeg"

// IMAGENES SAKURARENT
import sakurarent1 from "../assets/images/Projects/SakuraRent/System/system.png"
import sakurarent2 from "../assets/images/Technologies/github_dark.svg"
import sakurarent3 from "../assets/images/Technologies/laravel.svg"
import sakurarent4 from "../assets/images/Technologies/mysql.svg"
import sakurarent5 from "../assets/images/Technologies/postman.svg"
import sakurarent6 from "../assets/images/Technologies/react_wordmark_dark.svg"
import sakurarent7 from "../assets/images/Technologies/threejs-dark.svg"
import sakurarent8 from "../assets/images/Technologies/typescript.svg"

// IMAGENES STAMPURR
import stampurr from "../assets/images/Projects/StamPurr/History/stampurr (1).jpg"
import stampurr1 from "../assets/images/Projects/StamPurr/History/stampurr (4).jpg"
import stampurr2 from "../assets/images/Technologies/react_wordmark_dark.svg"
import stampurr3 from "../assets/images/Technologies/github_dark.svg"
import stampurr4 from "../assets/images/Technologies/typescript.svg"



export type WorkItem = {
  name: string
  type: string
  technologies: string
  year: string
  slug: string
  cover?: string
  sections?: {
    type?: string
    title?: string
    description?: string
    images?: string[]
  }[]
}

export const workData: WorkItem[] = [

  //? GHOPSTORE
  {
    name: 'GhopStore',
    type: 'Web',
    technologies: 'Bagisto',
    year: '2024',
    slug: 'ghopstore',
    cover: PortadaGhopStore,
    sections: [
      {
        type: 'description',
        title: '¿Qué es GhopStore?',
        description: 'GhopStore es una tienda en línea desarrollada a partir del código abierto de Bagisto. Se personalizó por completo la interfaz para alinearla con la identidad de la marca, modificando tanto el diseño como la experiencia de usuario. Se integraron funcionalidades como el inicio de sesión con Google, la configuración de moneda e idioma personalizados, y se adaptó el catálogo para incluir productos exclusivos de la marca. Además, se optimizó el panel administrativo, se ajustaron reglas de impuestos y envíos, y se mejoró la gestión de inventario para un control más eficiente.',
        images: [ghopstore1],
      },
      {
        type: 'technologies',
        title: 'Tecnologías',
        description: '',
        images: [ghopstore2, ghopstore3, ghopstore4],
      },
      {
        type: 'history',
        title: '¿De dónde nació GhopStore?',
        description: 'GhopStore nació en 2024 como una solución pensada para pequeñas tiendas que buscaban digitalizar sus procesos de venta y llegar a más clientes. Surgió al identificar la falta de herramientas simples, accesibles y efectivas para emprendedores locales. Desde entonces, el proyecto ha evolucionado, ofreciendo una plataforma intuitiva que permite gestionar productos, pedidos y clientes sin complicaciones técnicas.',
        images: [ghopstore6, ghopstore5],
      },
    ],
  },


  //? SAKURARENT
{
  name: 'SakuraRent',
  type: 'Web/Móvil',
  technologies: 'Laravel ~ React',
  year: '2025',
  slug: 'sakurarent',
  cover: PortadaSakuraRent,
  sections: [
    {
      type: 'description',
      title: '¿Qué es SakuraRent?',
      description: 'Plataforma digital para alquilar vehículos de forma rápida, segura y eficiente. Disponible en versión web y móvil, conecta a propietarios y usuarios en una experiencia fluida centrada en la sostenibilidad y la movilidad inteligente.',
      images: [sakurarent1],
    },
    {
      type: 'technologies',
      title: 'Tecnologías',
      description: '',
      images: [sakurarent2, sakurarent3, sakurarent4, sakurarent5, sakurarent6, sakurarent7, sakurarent8],
    },
    {
      type: 'history',
      title: 'Historia',
      description: 'SakuraRent fue creada en 2025 como respuesta a la necesidad de una forma más accesible, rápida y responsable de alquilar vehículos. Pensada para conectar dueños de autos con personas que necesitan movilidad temporal, la plataforma apuesta por una experiencia sencilla y moderna. Con un enfoque en la sostenibilidad, SakuraRent promueve el uso compartido de recursos, reduciendo el impacto ambiental y optimizando la disponibilidad de vehículos.',
      images: [],
    },
  ]
},


  //? STAMPURR
  {
    name: 'StamPurr',
    type: 'Web',
    technologies: 'React ~ TypeScript',
    year: '2025',
    slug: 'stampurr',
    cover: PortadaStamPurr,
    sections: [
      {
        type: 'description',
        title: '¿Qué es StamPurr?',
        description: 'Plataforma de productos personalizados diseñados para reflejar tu estilo. Descubre tazas, camisetas y más, creados con arte, calidad y autenticidad.',
        images: [],
      },
      {
        type: 'technologies',
                title: 'Tecnologías',
        description: '',
        images: [stampurr2, stampurr3, stampurr4],
      },
      {
        type: 'history',
        title: 'Historia',
        description: 'StamPurr es una pagina que buca crear productos personalizados, como tazas, camisetas, etc. Se desarrolló en 2025 con el objetivo de crear una marca que refleje la pasion por el arte y la personalización. Con un enfoque en la calidad y la atención al detalle, StamPurr busca ofrecer a sus clientes productos únicos que cuenten una historia.',
        images: [stampurr, stampurr1],
      },
    ]
  }
]

