import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ProjectsPage from "./pages/ProjectsPage"

function App() {
  return (
    <div className="min-h-screen relative selection:bg-[#8B5CF6]/30 selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
