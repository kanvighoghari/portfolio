import { useEffect } from 'react'
import { motion } from "framer-motion"
import Projects from "../components/Projects"

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-sora text-4xl md:text-6xl font-bold text-white mb-6">
            All <span className="text-[#38BDF8] glow-text-cyan">Projects</span>
          </h1>
          <p className="text-gray-400 font-inter max-w-2xl mx-auto text-lg">
            Explore my complete portfolio of web applications, AI integrations, and real-time systems.
          </p>
        </motion.div>
      </div>
      
      <Projects showAll={true} />
    </main>
  )
}
