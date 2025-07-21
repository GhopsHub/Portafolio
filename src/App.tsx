import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./js/components/UI/navbar"
import Footer from "./js/components/UI/footer"
import Home from "./js/pages/Home"
import Projects from "./js/pages/Projects"
import About from "./js/pages/About"
import Contact from "./js/pages/Contact"
import ScrollToTop from "./js/components/functions/ScrollToTop"
import ProjectDetail from "./js/pages/Details/ProjectDetail"
import SkillDetail from "./js/pages/Details/SkillsDetails"

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
