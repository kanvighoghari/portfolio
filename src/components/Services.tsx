import { motion } from "framer-motion"
import { MonitorSmartphone, Zap, Sparkles } from "lucide-react"

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Building scalable, responsive applications from the ground up using the MERN stack. Ensuring optimal performance and user experience.",
    icon: <MonitorSmartphone className="w-8 h-8 text-[#8B5CF6]" />,
    glowColor: "group-hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.6)]"
  },
  {
    title: "Real-Time Applications",
    description: "Implementing WebSocket protocols for live chat, notifications, and interactive user experiences that keep users engaged.",
    icon: <Zap className="w-8 h-8 text-[#38BDF8]" />,
    glowColor: "group-hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.6)]"
  },
  {
    title: "AI Integration",
    description: "Connecting modern web apps with AI models (like OpenAI) to automate complex tasks and build intelligent features.",
    icon: <Sparkles className="w-8 h-8 text-[#F472B6]" />,
    glowColor: "group-hover:shadow-[0_0_30px_-10px_rgba(244,114,182,0.6)]"
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 my-[10px] relative overflow-hidden">
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#8B5CF6] glow-text-purple">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`glass p-8 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 ${service.glowColor} flex flex-col h-full`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shrink-0">
                {service.icon}
              </div>
              <h3 className="text-xl font-sora font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 font-inter leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
