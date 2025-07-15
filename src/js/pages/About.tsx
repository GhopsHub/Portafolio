import characterabout from "../../assets/images/Characters/characterabout.png"



export default function About() {
	return (
		<div>

			{/* CONTENIDO */}

			<img
				src={characterabout}
				alt="Mi foto"
				className="relative z-10 w-[130px] sm:w-[150px] md:w-[500px] h-auto"
			/>
		</div>
	)
}
