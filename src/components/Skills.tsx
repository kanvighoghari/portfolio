import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "HTML", "CSS", "Java", "C"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Frontend",
    skills: ["React.js", "Redux", "Zustand", "Tailwind CSS"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "WebSocket", "REST APIs", "JWT"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Firebase"],
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Render"],
    color: "from-indigo-500 to-purple-500"
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 my-[10px] relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute right-0 top-1/2 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora text-4xl md:text-5xl font-bold text-white mb-4">
            Software <span className="text-[#8B5CF6] glow-text-purple">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 hover:bg-white/10 transition-colors duration-300 flex flex-col h-full"
            >
              <h3 className="font-sora text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} shadow-lg`} />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 flex-grow items-start content-start">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-inter text-sm hover:text-white hover:border-white/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
