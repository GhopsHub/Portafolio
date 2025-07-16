import { cn } from "@/lib/utils";
import {
	Database,
	Hammer,
	AppWindow,
	Brush,
	Plus,
	Play,
} from "lucide-react";

export function ListSkills() {
	const features = [
		{
			title: "Frontend",
			description: "Desarrollo de interfaces modernas, responsivas y accesibles con React, Vue y Tailwind.",
			icon: <AppWindow />,
			href: "#",
		},
		{
			title: "Backend",
			description: "Construcción de APIs seguras y eficientes con Laravel y bases de datos como MySQL.",
			icon: <Database />,
			href: "#",
		},
		{
			title: "Testing",
			description: "Automatización de pruebas con PEST y Postman para asegurar calidad y estabilidad.",
			icon: <Hammer />,
			href: "#",
		},
		{
			title: "Diseño UI/UX",
			description: "Transformo ideas en interfaces intuitivas y agradables, enfocadas en la experiencia del usuario.",
			icon: <Brush />,
			href: "#",
		},
		{
			title: "Contenido digital",
			description: "Tengo experiencia creando videos para internet, combinando creatividad y comunicación visual.",
			icon: <Play />,
			href: "#",
		},
		{
			title: "Otros",
			description: "Sé de programación, pero también tengo conocimientos básicos en otros programas y habilidades generales en diferentes áreas.",
			icon: <Plus />,
			href: "#",
		},
	];
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 justify-items-center mb-20 mt-32">

			{features.map((feature, index) => (
				<Feature key={feature.title} {...feature} index={index} />
			))}
		</div>
	);
}

const Feature = ({
	title,
	description,
	icon,
	index,
	href,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	index: number;
	href: string;
}) => {
	return (
		<a href={href} className="block">
			<div
				className={cn(
					"flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 cursor-pointer",
					(index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
					index < 4 && "lg:border-b dark:border-neutral-800"
				)}
			>
				{index < 4 ? (
					<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
				) : (
					<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
				)}
				<div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
					{icon}
				</div>
				<div className="text-lg font-bold mb-2 relative z-10 px-10">
					<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-white transition-all duration-200 origin-center" />
					<span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
						{title}
					</span>
				</div>
				<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
					{description}
				</p>
			</div>
		</a>
	);
};
