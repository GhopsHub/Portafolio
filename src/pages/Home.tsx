import { Link } from "react-router-dom"
import { TextRotate } from "../components/TextRotate/text-rotate"
 import { LayoutGroup, motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <h1>Inicio</h1>
      <Link to="/contact">Ir a Contacto</Link>



<LayoutGroup>     <motion.div
        className="text-2xl sm:text-3xl md:text-5xl flex items-center font-overusedGrotesk font-light"
        layout>
        <motion.span className="pt-1 sm:pt-1.5 md:pt-2" layout transition={{ type: "spring", damping: 30, stiffness: 400 }}>
            Un Programador{" "}
        </motion.span>
        <TextRotate
            texts={[
                "Creativo",
                "Constante🥇",
                "Apasionado",
                "Curioso",
                "Disciplinado 💪",
                "Resolutivo",
                "Adaptable",
            ]}
            mainClassName="ml-2 text-white px-3 bg-purple-600 overflow-hidden py-1.5 justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
        />
    </motion.div>
</LayoutGroup>





    </div>
  )
}
