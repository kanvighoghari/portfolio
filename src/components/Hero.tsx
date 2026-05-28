import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full-Stack Developer & IT Undergraduate"
  
  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)
    
    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen my-[10px] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#38BDF8]/20 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h1 className="font-sora text-5xl md:text-7xl font-bold tracking-tight text-white glow-text-purple leading-tight">
            Kanvi Ghoghari
          </h1>
          
          <div className="h-8 md:h-10">
            <h2 className="font-inter text-xl md:text-2xl text-gray-300 font-medium">
              {text}<span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="text-gray-400 font-inter max-w-lg leading-relaxed text-lg">
          Full-stack developer crafting AI-powered web applications with MERN, real-time technologies, and modern user experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <Button variant="glowPurple" size="lg" className="rounded-full px-8" asChild>
              <Link to="/projects">Explore Projects</Link>
            </Button>
            <Button variant="glowCyanOutline" size="lg" className="rounded-full px-8 bg-transparent">
               <a
                  href="/KanviGhoghari_resume.pdf"
                  download="KanviGhoghari_resume.pdf"
                >
                  Download Resume
                </a>
            </Button>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              rotate: [-1, 1, -1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut" 
            }}
            className="relative z-10 glass p-4"
          >
            <img 
              src="/hero.png" 
              alt="Kanvi coding with cat" 
              className="w-full max-w-md rounded-xl shadow-2xl object-cover aspect-square"
            />
          </motion.div>
          
          {/* Decorative elements behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/20 to-[#38BDF8]/20 rounded-full blur-[80px] -z-10" />
        </motion.div>
      </div>
    </section>
  )
}
