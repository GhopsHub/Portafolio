import { Link } from "react-router-dom";
import logo from '../../../assets/images/ghops.png';
import { UnderLine } from "../Animations/UnderLine/underLine";

export default function Footer() {
	return (
		<footer className="text-white shadow-[0_-4px_10px_rgba(255,255,255,0.1)] z-10">
			<div className="w-full max-w-6xl mx-auto px-4 sm:px-10 md:px-20 py-6 flex flex-col gap-6 mb-10">

				{/* Logo */}
				<div>
					<Link to="/" className="flex items-center gap-2">
						<img src={logo} alt="Logo" className="h-9 w-auto" />
						<h2 className="uppercase font-champion text-3xl">ghops</h2>
					</Link>

					<hr className="border-t border-g mt-4" />
				</div>

				<div>
					<h2 className="font-champion uppercase clr-lg text-xl">socials</h2>
				</div>

				<ul className="flex gap-7 text-sm">

					{/* GMAIL */}
					<UnderLine>
						<a href="https://mail.google.com/mail/?view=cm&to=julianbecerra432@gmail.com"
							target="_blank"
							rel="noopener noreferrer">Gmail</a>
					</UnderLine>

					{/* INSTAGRAM  */}
					<UnderLine>
						<li><a href="https://www.instagram.com/ghops_ing/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
					</UnderLine>

					{/* TikTok */}
					<UnderLine>
						<li><a href="https://www.tiktok.com/@ghops_ongs" target="_blank" rel="noopener noreferrer">TikTok</a></li>
					</UnderLine>
				</ul>
			</div>
		</footer>
	);
}
