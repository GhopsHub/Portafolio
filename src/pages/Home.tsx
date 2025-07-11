// import { TextRotate } from "../components/TextRotate/text-rotate"
// import { LayoutGroup, motion } from 'framer-motion'
import Navbar from "../components/Navbar/navbar"
// import me from "../assets/images/me.png"




export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-wrap text-center">
        <h1 className="text-5xl w-full font-champion clr-lg uppercase">
          julian becerra diaz
        </h1>
        <h1 className="text-5xl w-full font-champion clr-g uppercase">
          ghops
        </h1>


        {/* <img src={me} alt="Mi foto" /> */}
      </div>

      {/* <LayoutGroup>     <motion.div
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
      </LayoutGroup> */}





    </div>
  )
}