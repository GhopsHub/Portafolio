import gsap from 'gsap';   // Motor
import { useGSAP } from '@gsap/react';    // Importacion necesario para react

// importaciones de animaciones
import { ScrollTrigger } from 'gsap/ScrollTrigger';



// Registro de las animaciones - componentes
gsap.registerPlugin(useGSAP, ScrollTrigger) 






export { gsap, ScrollTrigger, useGSAP };