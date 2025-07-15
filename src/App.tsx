import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./js/components/UI/navbar"
import Footer from "./js/components/UI/footer"
import Home from "./js/pages/Home"
import Proyects from "./js/pages/Proyects"
import About from "./js/pages/About"
import Contact from "./js/pages/Contact"

function App() {
  return (
    <BrowserRouter basename="/Portafolio/">
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
