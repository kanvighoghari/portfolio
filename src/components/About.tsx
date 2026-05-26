import { motion } from "framer-motion"
import { GraduationCap, Target, Code2 } from "lucide-react"

import catImage from "../assets/cat.png"

export default function About() {
  return (
    <section id="about" className="py-16 my-[10px] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#38BDF8] glow-text-cyan">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto items-center">
          {/* Left Side: Cat Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center items-center"
          >
            <img src={catImage} alt="Cat" className="w-full max-w-sm lg:max-w-md drop-shadow-[0_0_30px_rgba(139,92,246,0.4)] object-contain" />
          </motion.div>

          {/* Right Side: Text Sections */}
          <div className="lg:col-span-8 flex flex-col gap-12 justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-sora font-semibold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6]">The Narrative</span>
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed text-lg">
                I am a B.Tech Information Technology student at Sarvajanik College of Engineering & Technology with a current CGPA of 9.36. 
                My journey is fueled by a blend of technical precision and creative expression—when I'm not building full-stack applications with MongoDB, Express, React, and Node.js, you'll find me on stage performing theatre or anchoring college events.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-sora font-semibold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-[#38BDF8]" />
                <span className="text-[#38BDF8]">The Goal</span>
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed text-lg">
                I am currently seeking a full-stack internship where I can apply my skills to real-world projects and transition into a full-time developer role. I thrive in environments that challenge me to solve complex problems while building intuitive, scalable applications.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Section-wise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-24"
        >
          <h3 className="text-3xl font-sora font-bold text-center text-white mb-10 flex items-center justify-center gap-3">
            <Code2 className="w-8 h-8 text-[#F472B6]" />
            <span>Tech <span className="text-[#F472B6]">Stack</span></span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JavaScript", "TypeScript", "Redux", "Firebase", "Socket.IO"].map(tech => (
              <span key={tech} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-base hover:text-[#F472B6] hover:border-[#F472B6]/50 hover:bg-white/10 transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
