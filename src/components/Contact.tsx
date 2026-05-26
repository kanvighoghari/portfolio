import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Send } from "lucide-react"
import { Button } from "./ui/button"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    const text = `Hello! My name is ${formData.name}.%0A%0A${formData.message}%0A%0AYou can reach me at: ${formData.email}`;
    window.open(`https://wa.me/918469452187?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 my-[10px] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#38BDF8] glow-text-cyan">Touch</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-4 md:gap-6 lg:gap-8"
          >
            <div className="glass p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 group hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 transition-transform flex-shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-xs md:text-sm text-gray-400 font-inter mb-1">Location</p>
                <h4 className="text-base md:text-lg font-sora font-semibold text-white break-words">Surat, Gujarat, India</h4>
              </div>
            </div>

            <div className="glass p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 group hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] group-hover:scale-110 transition-transform flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-xs md:text-sm text-gray-400 font-inter mb-1">Email</p>
                <a href="mailto:kanvighoghari@gmail.com" className="text-base md:text-lg font-sora font-semibold text-white hover:text-[#38BDF8] transition-colors break-all">kanvighoghari@gmail.com</a>
              </div>
            </div>

            <div className="glass p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 group hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F472B6]/20 flex items-center justify-center text-[#F472B6] group-hover:scale-110 transition-transform flex-shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-xs md:text-sm text-gray-400 font-inter mb-1">Phone</p>
                <a href="tel:+918469452187" className="text-base md:text-lg font-sora font-semibold text-white hover:text-[#F472B6] transition-colors">+91 8469452187</a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 mt-2 md:mt-4">
              <a href="https://github.com/kanvighoghari" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kanvi-ghoghari-27ab19317/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/50 transition-all">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/kanvi_0019/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#F472B6]/20 hover:border-[#F472B6]/50 transition-all">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-4 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-sora font-bold text-white mb-4 md:mb-6">Send a Message</h3>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSendMessage}>
              <div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder:text-gray-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder:text-gray-500 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                />
              </div>
              <div>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder:text-gray-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all resize-none"
                ></textarea>
              </div>
              <Button type="submit" variant="glowPurple" className="w-full h-10 md:h-12 text-sm md:text-base rounded-lg group">
                Send Message <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
