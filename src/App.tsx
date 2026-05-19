import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ScrollToTop from "./components/ScrollToTop"
import ProjectDetail from "./pages/ProjectDetail"
import SkillDetail from "./pages/SkillDetail"

function App() {
  return (
    <BrowserRouter basename="/Portafolio/">
      <ScrollToTop />
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
         <Route path="/skill/:slug" element={<SkillDetail />} />
          <Route path="/about/" element={<About />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App
