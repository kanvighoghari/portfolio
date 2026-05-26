import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ArrowRight, X } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

type Project = typeof projects[0];

const projects = [
  {
    title: "AI Interview Platform",
    description: "A voice-based mock interview system using OpenAI API and Razorpay for credits. Simulates real-world interview scenarios.",
    overview: "GenAI-powered interview preparation platform that helps users practice realistic HR and technical interviews with AI-driven feedback and resume analysis.",
    features: [
      "AI Resume Analyzer for instant resume insights",
      "HR & Technical interview practice modes",
      "Real-time mic on/off interview interaction",
      "AI evaluation based on confidence, communication, and correctness",
      "Downloadable PDF performance reports",
      "Google authentication and Razorpay payment integration"
    ],
    techStack: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Redux, Firebase, Razorpay, OpenAI GPT-4o Mini",
    tags: ["React", "Node.js","AI Integration", "OpenAI API", "Razorpay","Firebase"],
    imageGradient: "from-purple-500/20 to-indigo-500/20",
    borderGlow: "group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)]",
    githubUrl: "https://github.com/kanvighoghari/Interview",
    liveUrl: "https://interview-frontend-1gcr.onrender.com/"
  },
  {
    title: "Streamify",
    description: "A real-time chat application featuring WebSocket protocol, image sharing, and live status indicators for seamless communication.",
    overview: "A full-stack real-time chat application that enables seamless private and group communication with live online/offline status tracking and interactive messaging features.",
    features: [
      "Real-time private and group chat using Socket.IO",
      "User authentication with signup, login, logout, and profile update functionality",
      "Online/offline user status with instant message delivery",
      "Sound effects with on/off toggle for notifications",
      "Email notifications and rate limiting for better security and user experience"
    ],
    techStack: "React.js, Node.js, Express.js, MongoDB, Socket.IO, REST API",
    tags: ["React","Node.js" , "Express","WebSocket", "MongoDB"],
    imageGradient: "from-cyan-500/20 to-blue-500/20",
    borderGlow: "group-hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.5)]",
    githubUrl: "https://github.com/kanvighoghari/streamify",
    liveUrl: "https://streamify-swsl.onrender.com/"
  },
  {
    title: "Novelix",
    description: "A full-stack blog management application for book reviews with secure JWT authentication and rich text editing capabilities.",
    overview: "A full-stack book blogging platform designed with a clean UI and smooth CRUD functionality, allowing users to create, manage, and explore book-related blogs easily.",
    features: [
      "Create, edit, update, delete, and like book blogs",
      "User authentication with signup, login, and logout functionality",
      "Search books by name and view blog details with summaries",
      "Responsive and user-friendly interface for seamless blog management"
    ],
    techStack: "React.js, Node.js, Express.js, MongoDB, REST API",
    tags: ["React","Node.js" , "Express","JWT", "Tailwind CSS"],
    imageGradient: "from-pink-500/20 to-rose-500/20",
    borderGlow: "group-hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.5)]",
    githubUrl: "https://github.com/kanvighoghari/book-blog",
    liveUrl: "https://book-blog-frontend-72wi.onrender.com/"
  },
  {
    title: "CodeHelper",
    description: "AI-powered web app that helps users understand code in a simple way, explains complex logic, and solves coding errors. Built with Gemini-3-Flash-Preview integration.",
    overview: "A GenAI-powered coding assistant that helps users understand, debug, and improve their code by providing instant AI-generated explanations and error fixes using the Gemini model.",
    features: [
      "Paste or type code and get simple AI-generated explanations",
      "Detects and helps solve errors across multiple programming languages",
      "Supports code understanding for various language syntaxes",
      "Clean and interactive interface for quick debugging and learning"
    ],
    techStack: "React.js, Node.js, Express.js, MongoDB, Gemini AI Integration",
    tags: ["React", "Node.js", "Gemini AI", "AI Integration"],
    imageGradient: "from-emerald-500/20 to-teal-500/20",
    borderGlow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)]",
    githubUrl: "https://github.com/kanvighoghari/codehelper",
    liveUrl: "https://codehelper-frontend-nq1g.onrender.com"
  },
  {
    title: "AgencyAI",
    description: "A modern and responsive company frontend website built with React.js, focused on clean UI/UX and smooth user experience.",
    overview: "A modern AI agency marketing website built with a clean UI, responsive design, and smooth interactive animations for an engaging user experience.",
    features: [
      "Modern and fully responsive landing page design",
      "Smooth animations and mouse interaction effects using Framer Motion",
      "Optimized performance with clean and minimal UI/UX",
      "Interactive sections to showcase agency services and branding"
    ],
    techStack: "React.js, Tailwind CSS, Framer Motion",
    tags: ["React.js", "UI/UX", "Responsive Design"],
    imageGradient: "from-amber-500/20 to-orange-500/20",
    borderGlow: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.5)]",
    githubUrl: "https://github.com/kanvighoghari/AgencyAI",
    liveUrl: "https://agency-ai-seven-pi.vercel.app/"
  }
]

export default function Projects({ showAll = false }: { showAll?: boolean }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal when pressing Esc
  if (selectedProject) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <section id="projects" className="py-16 my-[10px] relative overflow-hidden">
      <div className="container mx-auto px-6">
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-sora text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-[#38BDF8] glow-text-cyan">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8] mx-auto rounded-full" />
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => setSelectedProject(project)}
              className={`glass overflow-hidden group transition-all duration-500 ${project.borderGlow} flex flex-col h-full cursor-pointer hover:-translate-y-2`}
            >
              <div className={`h-48 bg-gradient-to-br ${project.imageGradient} relative flex items-center justify-center p-6 shrink-0`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <h3 className="text-3xl font-sora font-bold text-white/80 z-10 text-center tracking-wider group-hover:scale-105 transition-transform">{project.title}</h3>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-sora font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 font-inter mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded-full border border-[#38BDF8]/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button variant="outline" className="w-full glass bg-white/5 border-white/10 hover:bg-white/10 hover:text-white pointer-events-none">
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {!showAll && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <Button variant="ghost" className="text-gray-400 hover:text-white group" asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className={`w-full max-w-3xl max-h-[90vh] overflow-y-auto glass border border-white/10 rounded-2xl flex flex-col shadow-2xl relative ${selectedProject.borderGlow.replace('group-hover:', '')}`}
              >
                {/* Modal Header */}
                <div className={`p-8 pb-6 bg-gradient-to-br ${selectedProject.imageGradient} relative`}>
                  <div className="absolute inset-0 bg-black/40" />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-20 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-sora font-bold text-white mb-4">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="text-xs sm:text-sm font-mono text-white/90 bg-white/20 px-3 py-1 rounded-full border border-white/30 backdrop-blur-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8 flex-grow overflow-y-auto space-y-8 bg-[#0F172A]/90">
                  <section>
                    <h3 className="text-xl font-sora font-semibold text-[#38BDF8] mb-3 flex items-center gap-2">
                      Overview
                    </h3>
                    <p className="text-gray-300 font-inter leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-sora font-semibold text-[#8B5CF6] mb-3">
                      Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 font-inter leading-relaxed">
                          <span className="text-[#8B5CF6] mt-1.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-sora font-semibold text-[#38BDF8] mb-3">
                      Tech Stack
                    </h3>
                    <p className="text-gray-300 font-inter leading-relaxed">
                      {selectedProject.techStack}
                    </p>
                  </section>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-white/10 bg-[#0F172A] flex flex-col sm:flex-row gap-4 mt-auto">
                  <Button variant="outline" className="flex-1 glass bg-white/5 border-white/10 hover:bg-white/10 hover:text-white" asChild>
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="w-4 h-4 mr-2" /> View Source Code
                    </a>
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] hover:from-[#7C3AED] hover:to-[#5B21B6] border-0" asChild>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Preview <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
