import { useLocation, useNavigate } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import logo from "../assets/images/ghops.png";

const socials = [
  {
    label: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&to=julianbecerra432@gmail.com",
    icon: Mail,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ghops_ing/",
    icon: Instagram,
  },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/");
  };

  return (
    <footer className="relative z-10 px-4 py-10">
      <div className="retro-shell retro-card-alt grid gap-8 p-5 sm:p-7 md:grid-cols-[1fr_auto] md:items-end">
        <button
          type="button"
          onClick={handleLogoClick}
          className="flex w-fit items-center gap-3 text-left"
        >
          <img
            src={logo}
            alt="Ghops"
            className="h-11 w-11 border-2 border-[var(--cream)] bg-[var(--yellow)] p-1"
          />
          <span>
            <span className="block font-champion text-4xl uppercase">
              ghops
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--yellow)]">
              web retro, codigo moderno
            </span>
          </span>
        </button>

        <ul className="flex flex-wrap gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-link flex items-center gap-2 px-3 py-2 text-sm font-black uppercase"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
