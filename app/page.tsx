"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  ArrowRight,
  Calendar,
  Eye,
  Download,
  Send,
  Star,
  ExternalLink,
  Code,
  Globe,
  Smartphone,
  Monitor,
  Database,
  Palette,
  Menu,
  X,
  GraduationCap,
  BookOpen,
  Code2,
  Trophy,
  Sparkles,
  CheckCircle,
} from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    // Fetch GitHub repositories
    const fetchRepos = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://api.github.com/users/nithinx02/repos?sort=updated&per_page=12")
        const data = await response.json()
        setRepos(data)
      } catch (error) {
        console.error("Error fetching repos:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  // All button functions defined inside component
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const downloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1your-actual-resume-file-id"
    window.open(resumeUrl, "_blank", "noopener,noreferrer")
  }

  const openEmail = () => {
    const subject = encodeURIComponent("Project Inquiry")
    const body = encodeURIComponent("Hi Nithin,\n\nI'd like to discuss a project with you.\n\nBest regards")
    window.location.href = `mailto:nithinx002@gmail.com?subject=${subject}&body=${body}`
  }

  const scheduleCall = () => {
    window.open("https://calendly.com/nithinx002/30min", "_blank", "noopener,noreferrer")
  }

  const openGitHub = () => {
    window.open("https://github.com/nithinx02", "_blank", "noopener,noreferrer")
  }

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/nithin-devigner/", "_blank", "noopener,noreferrer")
  }

  const viewAllProjects = () => {
    window.open("https://github.com/nithinx02?tab=repositories", "_blank", "noopener,noreferrer")
  }

  const openRepository = (url: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const openLiveDemo = (url: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const getProjectIcon = (repoName: string, language: string) => {
    const name = repoName.toLowerCase()
    if (name.includes("mobile") || name.includes("app") || name.includes("react-native")) return Smartphone
    if (name.includes("dashboard") || name.includes("admin") || name.includes("panel")) return Monitor
    if (name.includes("api") || name.includes("backend") || name.includes("server")) return Database
    if (name.includes("design") || name.includes("ui") || name.includes("theme")) return Palette
    if (language === "JavaScript" || language === "TypeScript") return Code
    return Globe
  }

  const getLanguageColor = (language: string) => {
    const colors = {
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-500",
      Python: "bg-green-500",
      Java: "bg-red-500",
      "C++": "bg-purple-500",
      HTML: "bg-orange-500",
      CSS: "bg-blue-400",
      React: "bg-cyan-500",
      "Next.js": "bg-slate-800",
      Vue: "bg-green-400",
      Angular: "bg-red-600",
    }
    return colors[language] || "bg-slate-500"
  }

  // Social links array with modern theme colors
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      action: openGitHub,
      glowColor: "hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]",
      hoverBg: "hover:bg-slate-800",
      hoverText: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      action: openLinkedIn,
      glowColor: "hover:shadow-[0_0_15px_rgba(0,119,181,0.6)]",
      hoverBg: "hover:bg-[#0077B5]/20",
      hoverText: "hover:text-[#0077B5]",
    },
    {
      name: "Email",
      icon: Mail,
      action: openEmail,
      glowColor: "hover:shadow-[0_0_15px_rgba(234,67,53,0.6)]",
      hoverBg: "hover:bg-[#EA4335]/20",
      hoverText: "hover:text-[#EA4335]",
    },
  ]

  // Updated achievements to match the provided image exactly
  const achievements = [
    { icon: GraduationCap, value: "10+", label: "Projects", color: "from-cyan-500 to-blue-600" },
    { icon: BookOpen, value: "5+", label: "Courses", color: "from-purple-500 to-pink-600" },
    { icon: Code2, value: "3+", label: "Languages", color: "from-emerald-500 to-teal-600" },
    { icon: Trophy, value: "2", label: "Hackathons", color: "from-amber-500 to-orange-600" },
  ]

  // Animation variants for smoother, quicker animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-all duration-300">
      {/* Modern Background Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-grid-pattern"></div>

      {/* Animated background dots */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-emerald-500 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Responsive Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="container-responsive py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm sm:text-lg">N</span>
              </div>
              <div className="hidden xs:block sm:block">
                <h1 className="font-semibold text-sm sm:text-lg text-slate-100">Nithin</h1>
                <p className="text-xs text-slate-400 hidden sm:block">UI/UX Designer & React Developer</p>
              </div>
            </motion.div>

            <div className="flex items-center gap-2 sm:gap-4">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 text-sm font-medium">
                <button
                  onClick={() => scrollToSection("work")}
                  className="text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer px-3 py-2 rounded-lg hover:bg-slate-900/50"
                >
                  Work
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer px-3 py-2 rounded-lg hover:bg-slate-900/50"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer px-3 py-2 rounded-lg hover:bg-slate-900/50"
                >
                  Contact
                </button>
              </nav>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-slate-900/50 transition-colors touch-friendly"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-slate-900/50 transition-colors touch-friendly"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              className="md:hidden mt-4 pb-4 border-t border-slate-800"
            >
              <div className="flex flex-col space-y-1 pt-4">
                <button onClick={() => scrollToSection("work")} className="mobile-menu-item">
                  Work
                </button>
                <button onClick={() => scrollToSection("about")} className="mobile-menu-item">
                  About
                </button>
                <button onClick={() => scrollToSection("contact")} className="mobile-menu-item">
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section - Fully Responsive */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-responsive relative z-10">
        <div className="container-responsive">
          <div className="hero-responsive">
            {/* Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
            >
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {/* Available Status */}
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-4 bg-emerald-900/40 border-2 border-emerald-500/50 text-emerald-400 rounded-lg sm:rounded-xl text-xs sm:text-sm lg:text-base font-medium shadow-lg shadow-emerald-900/20"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  <span className="font-bold">Available for new projects</span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="heading-responsive font-bold leading-tight">
                  <span className="block text-slate-100">Creating</span>
                  <span className="block text-slate-400">meaningful</span>
                  <span className="block gradient-text-primary">experiences</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="body-responsive text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
                >
                  I'm a UI/UX designer and React developer passionate about crafting beautiful, user-centered digital
                  products that solve real problems.
                </motion.p>
              </div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={() => scrollToSection("work")}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-xl sm:rounded-2xl font-medium hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 relative z-10 text-sm sm:text-base whitespace-nowrap"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  View my work
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  onClick={downloadResume}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 border-2 border-slate-700 bg-slate-900/50 text-slate-100 rounded-xl sm:rounded-2xl font-medium hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300 relative z-10 text-sm sm:text-base whitespace-nowrap"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Resume
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4 sm:pt-6 lg:pt-8 border-t border-slate-800"
              >
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100">10+</div>
                  <div className="text-xs sm:text-sm text-slate-400">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100">5+</div>
                  <div className="text-xs sm:text-sm text-slate-400">Courses</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100">3+</div>
                  <div className="text-xs sm:text-sm text-slate-400">Languages</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } }}
              className="relative order-1 lg:order-2"
              style={{ y }}
            >
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                <div className="aspect-square rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-2 sm:p-3 shadow-2xl border border-slate-700 overflow-hidden">
                  <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative">
                    <Image src="/images/profile.png" alt="Nithin's Profile" fill className="object-cover" priority />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work - Fully Responsive */}
      <section id="work" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerChildren}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-slate-100">
              Featured Work
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Latest projects from my GitHub repository showcasing my development skills
            </motion.p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 animate-pulse"
                >
                  <div className="h-5 sm:h-6 bg-slate-700 rounded mb-3 sm:mb-4"></div>
                  <div className="h-3 sm:h-4 bg-slate-700 rounded mb-2"></div>
                  <div className="h-3 sm:h-4 bg-slate-700 rounded mb-3 sm:mb-4"></div>
                  <div className="h-8 sm:h-10 bg-slate-700 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {repos.slice(0, 6).map((repo, index) => {
                const IconComponent = getProjectIcon(repo.name, repo.language)
                return (
                  <motion.div
                    key={repo.id}
                    initial="hidden"
                    whileInView="visible"
                    variants={scaleIn}
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 relative z-10"
                  >
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                        <div className="p-1.5 sm:p-2 bg-slate-800 rounded-lg flex-shrink-0">
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-slate-100 text-sm sm:text-base lg:text-lg group-hover:text-cyan-400 transition-colors truncate">
                            {repo.name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                          </h3>
                          <div className="flex items-center gap-1 sm:gap-2 mt-1 flex-wrap">
                            {repo.language && (
                              <div className="flex items-center gap-1">
                                <div
                                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${getLanguageColor(repo.language)}`}
                                ></div>
                                <span className="text-xs text-slate-400">{repo.language}</span>
                              </div>
                            )}
                            <span className="text-xs bg-slate-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-slate-400">
                              {repo.private ? "Private" : "Public"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm line-clamp-3">
                      {repo.description || "A modern web application built with cutting-edge technologies."}
                    </p>

                    {/* Project Stats */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{repo.watchers_count}</span>
                        </div>
                        {repo.forks_count > 0 && (
                          <div className="flex items-center gap-1">
                            <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{repo.forks_count}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-2 sm:gap-3">
                      <motion.button
                        onClick={() => openRepository(repo.html_url)}
                        className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-slate-800 hover:bg-slate-700 hover:border hover:border-slate-600 text-slate-100 rounded-lg sm:rounded-xl font-medium transition-all duration-300 relative z-10 hover:shadow-lg hover:shadow-slate-700/50 text-xs sm:text-sm whitespace-nowrap"
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        Code
                      </motion.button>
                      {repo.homepage && (
                        <motion.button
                          onClick={() => openLiveDemo(repo.homepage)}
                          className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-medium transition-all duration-300 relative z-10 text-xs sm:text-sm whitespace-nowrap"
                          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                          whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          Live
                        </motion.button>
                      )}
                    </div>

                    {/* Updated Date */}
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-700">
                      <p className="text-xs text-slate-500">Updated {new Date(repo.updated_at).toLocaleDateString()}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}

          {/* View All Projects Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <motion.button
              onClick={viewAllProjects}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 border-2 border-slate-700 bg-slate-900/50 text-slate-100 rounded-xl sm:rounded-2xl font-medium hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300 relative z-10 text-sm sm:text-base whitespace-nowrap"
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section - Fully Responsive */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerChildren}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-slate-100">
                  About me
                </motion.h2>
                <motion.div
                  variants={fadeInUp}
                  className="space-y-3 sm:space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed text-justify"
                >
                  <p>
                    I'm a passionate UI/UX designer and React developer with over 3 years of experience creating digital
                    products that users love. My approach combines user-centered design principles with modern
                    development practices to deliver exceptional experiences.
                  </p>
                  <p>
                    When I'm not designing or coding, you'll find me exploring new design trends, contributing to open
                    source projects, or sharing knowledge with the design community. I believe in continuous learning
                    and staying updated with the latest technologies.
                  </p>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-100 text-sm sm:text-base">Design</h4>
                  <div className="space-y-1 text-xs sm:text-sm text-slate-400">
                    <div>User Research</div>
                    <div>UI/UX Design</div>
                    <div>Prototyping</div>
                    <div>Design Systems</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-100 text-sm sm:text-base">Development</h4>
                  <div className="space-y-1 text-xs sm:text-sm text-slate-400">
                    <div>React & Next.js</div>
                    <div>TypeScript</div>
                    <div>Tailwind CSS</div>
                    <div>Framer Motion</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerChildren}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    variants={scaleIn}
                    className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm hover:border-slate-600/70 hover:bg-gradient-to-br hover:from-slate-800/60 hover:to-slate-700/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className={`p-1.5 sm:p-2 bg-gradient-to-br ${achievement.color} rounded-lg`}>
                        <achievement.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                      </div>
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 text-slate-100">
                      {achievement.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6"
              >
                <h4 className="font-semibold mb-3 text-slate-100 text-sm sm:text-base">Currently</h4>
                <div className="space-y-2 text-xs sm:text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span>Available for freelance projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                    <span>Learning Three.js and WebGL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span>Building a design system</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - Fully Responsive */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900/30 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerChildren}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-slate-100">
                Let's work together
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
                ideas to life.
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                onClick={openEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-xl sm:rounded-2xl font-medium hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 relative z-10 text-sm sm:text-base whitespace-nowrap"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                Get in touch
              </motion.button>

              <motion.button
                onClick={scheduleCall}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 border-2 border-slate-700 bg-slate-900/50 text-slate-100 rounded-xl sm:rounded-2xl font-medium hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300 relative z-10 text-sm sm:text-base whitespace-nowrap"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Schedule a call
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 lg:pt-8"
            >
              {socialLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={link.action}
                  className={`p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm rounded-xl text-slate-400 ${link.hoverText} ${link.hoverBg} ${link.glowColor} transition-all duration-300 relative z-10 touch-friendly`}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                >
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
