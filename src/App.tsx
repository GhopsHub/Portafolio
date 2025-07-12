import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/navbar"
import Home from "./pages/Home"
import Proyects from "./pages/Proyects"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter basename="/Portafolio">
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
