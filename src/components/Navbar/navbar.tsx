import { useState } from 'react';
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white p-4">
      <div className="flex justify-between items-center">
        {/* <Link to="/" className="text-lg font-bold">MiSitio</Link> */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </Link>

        <button
          title='button-navbar'
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
        <Menu />  
        </button>
        <ul className="hidden md:flex gap-4">
          <Link to="/contact">Contact</Link>
        </ul>
      </div>

      {isOpen && (
        <ul className="mt-2 md:hidden flex flex-col gap-2">
          <Link to="/contact">Contact</Link>
        </ul>
      )}
    </nav>
  );
}
