import PortadaGhopStore from "../assets/images/Projects/GhopStore/FrontPage/port-ghopstore.jpg"
import PortadaSakuraRent from "../assets/images/Projects/SakuraRent/FrontPage/port-sakurarent.jpg"
import PortadaStamPurr from "../assets/images/Projects/StamPurr/FrontPage/port-stampurr.webp"

export type WorkItem = {
  name: string
  type: string
  tecnologies: string
  year: string
  slug: string
  cover?: string
  sections?: {
    title?: string
    description?: string
    images?: string[]
  }[]
}

export const workData: WorkItem[] = [
  {
    name: 'GhopStore',
    type: 'Web',
    tecnologies: 'Bagisto',
    year: '2024',
    slug: 'ghopstore',
    cover: PortadaGhopStore,
    sections: [
      {
        title: 'Que es GhopStore?',
        description: 'Tienda ecommerce basada en Bagisto. Se desarrolló el sistema de productos, carrito y pagos.',
        images: [
        ],
      }
    ]
  },
  {
    name: 'SakuraRent',
    type: 'Web/Movil',
    tecnologies: 'Laravel ~ React',
    year: '2025',
    slug: 'sakurarent',
    cover: PortadaSakuraRent,
        sections: [
      {
        title: 'Que es SakuraRent?',
        description: 'Pagina de renta de carros',
          }
        ]
  },
  {
    name: 'StamPurr',
    type: 'Web',
    tecnologies: 'React ~ TypeScript',
    year: '2025',
    slug: 'stampurr',
    cover: PortadaStamPurr,
    sections: [
      {
        title: 'Que es StamPurr?',
        description: 'Pagina de productos personalizados',
      }
    ]
  }
]

