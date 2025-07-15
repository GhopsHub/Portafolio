import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../../../assets/images/ghops.png';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative px-7 py-2 shadow-md z-50 bg-dark">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-9 w-auto" />
        </Link>

        {/* Menú escritorio */}
        <ul className="hidden sm:flex gap-8 text-xl uppercase font-champion">
          <li><Link to="/proyects">Proyects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Botón del menú móvil */}
        <button
          title="button-navbar"
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Menú para móvil */}
      {isOpen && (
        <ul className="absolute left-0 right-0 bg-dark sm:hidden flex flex-col items-center gap-5 uppercase font-champion text-xl py-5 mt-1 rounded-b-lg shadow-lg">
          <li><Link to="/proyects" onClick={() => setIsOpen(false)}>Proyects</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
