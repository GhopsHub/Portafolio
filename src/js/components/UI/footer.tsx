import { Link } from "react-router-dom";
import logo from '../../../assets/images/ghops.png';

export default function Footer() {
	return (
		<footer className="bg-dark text-white shadow-[0_-4px_10px_rgba(255,255,255,0.1)] z-10">
			<div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6">

				{/* Logo */}
				<div>
					<Link to="/" className="flex items-center gap-2">
						<img src={logo} alt="Logo" className="h-9 w-auto" />
						<h2 className="uppercase font-champion text-3xl">ghops</h2>
					</Link>

					<hr className="border-t border-g mt-4" />
				</div>

				{/* Lista de redes */}
				<ul className="flex flex-col gap-2 text-sm">
					<li><a href="#">GitHub</a></li>
					<li><a href="#">Discord</a></li>
					<li><a href="#">Gmail</a></li>
					<li><a href="#">Instagram</a></li>
					<li><a href="#">TikTok</a></li>
					<li><a href="#">LinkedIn</a></li>
				</ul>

			</div>
		</footer>
	);
}
