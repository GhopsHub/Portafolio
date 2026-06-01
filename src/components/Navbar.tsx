import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FolderKanban, Home, Menu, Send, UserRound, X } from "lucide-react";
import logo from "../assets/images/logo/ghops.png";

const navItems = [
  { to: "/", label: "Inicio", icon: Home },
  { to: "/projects/", label: "Proyectos", icon: FolderKanban },
  { to: "/about/", label: "Sobre mi", icon: UserRound },
  { to: "/contact/", label: "Contacto", icon: Send },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 py-3">
      <nav className="retro-shell retro-card flex items-center justify-between gap-4 px-3 py-3 sm:px-4">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-11 w-11 place-items-center border-2 border-[var(--line)] bg-[var(--yellow)] shadow-[3px_3px_0_var(--ink)]">
            <img src={logo} alt="Ghops" className="h-7 w-7 object-contain" />
          </span>
          <span className="leading-none">
            <span className="block font-champion text-3xl uppercase">
              ghops
            </span>
            <span className="hidden text-xs font-bold uppercase tracking-[0.18em] sm:block">
              portfolio
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-2 lg:flex">
          {navItems.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `retro-link flex items-center gap-2 px-4 py-2 text-sm font-black uppercase tracking-wide ${
                    isActive ? "retro-link-active" : ""
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="retro-link grid h-11 w-11 place-items-center lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <ul className="retro-shell retro-card-alt mt-3 grid gap-2 p-3 lg:hidden">
          {navItems.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between border-2 border-[var(--cream)] px-4 py-3 font-black uppercase tracking-wide ${
                    isActive
                      ? "bg-[var(--yellow)] text-[var(--ink)]"
                      : "bg-transparent"
                  }`
                }
              >
                <span>{label}</span>
                <Icon className="h-5 w-5" />
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
