import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 mx-auto z-50 transition-all duration-300 ${scrolled ? 'w-[95%] md:w-[80%] bg-white/5 backdrop-blur-md rounded-2xl py-4 px-6 md:px-8 mt-4' : 'w-full py-6 px-6 md:px-8 bg-transparent'}`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="font-sora font-bold text-2xl text-white glow-text-cyan z-50 relative">
            K<span className="text-[#8B5CF6]">NV</span>.
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-inter font-medium">
            <Link to="/#hero" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/#about" className="text-gray-300 hover:text-white transition-colors">About Me</Link>
            <Link to="/#skills" className="text-gray-300 hover:text-white transition-colors">Skills</Link>
            <Link to="/#projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
            <Link to="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>
          
          <Link to="/#contact" className="px-5 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors font-medium text-sm hidden md:block">
            Let's Connect
          </Link>

          <button 
            className="md:hidden text-white hover:text-gray-300 transition-colors z-50 relative"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center min-h-screen border-t border-white/10"
          >
            <div className="flex flex-col gap-8 text-center text-xl font-inter font-medium p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl w-[85%] max-w-sm">
              <Link to="/#hero" onClick={toggleMobileMenu} className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/#about" onClick={toggleMobileMenu} className="text-gray-300 hover:text-white transition-colors">About Me</Link>
              <Link to="/#skills" onClick={toggleMobileMenu} className="text-gray-300 hover:text-white transition-colors">Skills</Link>
              <Link to="/#projects" onClick={toggleMobileMenu} className="text-gray-300 hover:text-white transition-colors">Projects</Link>
              <Link to="/#contact" onClick={toggleMobileMenu} className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              <Link to="/#contact" onClick={toggleMobileMenu} className="mt-4 px-8 py-3 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors">
                Let's Connect
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
