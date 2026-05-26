import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md pt-12 pb-8 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="font-sora font-bold text-2xl text-white">
            K<span className="text-[#8B5CF6]">NV</span>.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-inter text-gray-400">
            <Link to="/#hero" className="hover:text-white transition-colors">Home</Link>
            <Link to="/#about" className="hover:text-white transition-colors">About</Link>
            <Link to="/#skills" className="hover:text-white transition-colors">Skills</Link>
            <Link to="/#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="text-center border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-inter">
            &copy; 2026 Kanvi Ghoghari. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm font-inter flex items-center gap-1">
            Built with <span className="text-rose-500 animate-pulse">❤</span> and code.
          </p>
        </div>
      </div>
    </footer>
  )
}
