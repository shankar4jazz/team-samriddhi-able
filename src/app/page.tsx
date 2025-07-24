"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle, Star, Users, Zap, MapPin, Briefcase, Award, Crown, Phone, Sparkles, Target, Heart, Globe, Menu, X } from "lucide-react"
import Image from "next/image"
import { teamMembers } from "@/data/team-members"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
        />
      </div>

      {/* Enhanced Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <Image
                src={`/images/logo/samriddhi-logo.png?v=${Date.now()}`}
                alt="Team Samriddhi"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team Samriddhi</div>
                <span className="text-xs text-gray-600 font-medium">ABLE Program - JCI India</span>
              </div>
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              {["Home", "About Samriddhi", "ABLE Program", "Our Team", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow"
              >
                Get Started
              </motion.button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg"
            >
              <div className="px-4 py-4 space-y-2">
                {["Home", "About Samriddhi", "ABLE Program", "Our Team", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-2 mt-2 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Enhanced Hero Section */}
      <section id="home" className="pt-16 relative min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60" />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(156, 163, 175, 0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content (appears second on mobile, first on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
              >
                <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">Team</span>{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Samriddhi</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6"
              >
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                  <p className="text-xl md:text-2xl text-gray-700">
                    Proud participants of the <strong className="text-blue-600">ABLE Program</strong> by JCI India
                  </p>
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-lg text-gray-600">
                  <strong className="text-purple-600">A</strong>cademy for <strong className="text-purple-600">B</strong>usiness <strong className="text-purple-600">L</strong>eadership <strong className="text-purple-600">E</strong>xcellence for Professionals
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-gray-600 mb-8 max-w-xl"
              >
                Led by Coach <strong className="text-purple-600">Harish Kumar C</strong> (LIC of India) and Team Leader <strong className="text-purple-600">Vikas BC</strong>, 
                we are 14 professionals from diverse industries, united in our mission to 
                excel, grow, and make a meaningful impact in our communities and businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg hover:from-blue-700 hover:to-purple-700 flex items-center justify-center"
                >
                  Meet Our Team 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg hover:bg-purple-50 transition-colors"
                >
                  About ABLE Program
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Logo (appears first on mobile, second on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center order-1 lg:order-2"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20 scale-110" />
                <Image
                  src={`/images/logo/samriddhi-logo.png?v=${Date.now()}`}
                  alt="Team Samriddhi"
                  width={400}
                  height={400}
                  className="w-full max-w-xs md:max-w-md h-auto relative z-10"
                  priority
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-10"
              >
                <div className="w-16 h-16 border-4 border-purple-300 rounded-full border-dashed" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-10 left-10"
              >
                <div className="w-12 h-12 border-4 border-blue-300 rounded-full border-dashed" />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 left-0 text-3xl"
              >
                🚀
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 right-0 text-3xl"
              >
                💡
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 right-0 text-3xl"
              >
                🌟
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced What is Samriddhi Section */}
      <section id="about-samriddhi" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-yellow-50 opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What is Samriddhi?
            </h2>
            <div className="max-w-4xl mx-auto">
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 mb-8"
              >
                <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">समृद्धि (Samriddhi)</span> is a Sanskrit word meaning 
                <span className="font-semibold text-gray-800"> "Prosperity, Growth, and Abundance"</span>
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8 mb-8 shadow-xl"
              >
                <p className="text-lg text-gray-700 mb-6">
                  Team Samriddhi embodies this philosophy - we are 14 diverse professionals united by our commitment to 
                  collective growth, mutual prosperity, and creating abundance not just for ourselves, but for our 
                  communities and the businesses we serve.
                </p>
                
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
                >
                  {[
                    { sanskrit: "सम् (Sam)", meaning: "Together, United", icon: "🤝" },
                    { sanskrit: "ऋद्धि (Riddhi)", meaning: "Growth, Success", icon: "📈" },
                    { sanskrit: "समृद्धि (Samriddhi)", meaning: "Complete Prosperity", icon: "🌟" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
                    >
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <h3 className="text-xl font-bold text-orange-600 mb-2">{item.sanskrit}</h3>
                      <p className="text-gray-700">{item.meaning}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="text-left max-w-3xl mx-auto"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Team Philosophy</h3>
                <motion.ul
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {[
                    { icon: Star, color: "text-yellow-500", title: "Collective Excellence", desc: "Each member brings unique expertise from different industries, creating a powerful synergy" },
                    { icon: Zap, color: "text-orange-500", title: "Mutual Growth", desc: "We believe in lifting each other up, sharing knowledge, and growing together" },
                    { icon: Heart, color: "text-red-500", title: "Community Impact", desc: "Our prosperity extends beyond individual success to positive community transformation" },
                    { icon: Globe, color: "text-blue-500", title: "ABLE Integration", desc: "Through JCI's ABLE program, we're advancing business leadership excellence across India" }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                      className="flex items-start group"
                    >
                      <item.icon className={`h-6 w-6 ${item.color} mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} />
                      <div>
                        <span className="font-semibold text-gray-900">{item.title}:</span>
                        <span className="text-gray-700"> {item.desc}</span>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced ABLE Values Section */}
      <section id="values" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our ABLE Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The core principles that drive Team Samriddhi in the ABLE program
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Award, title: "Excellence", desc: "Striving for the highest standards in everything we do", color: "from-blue-500 to-blue-600", delay: 0 },
              { icon: Users, title: "Leadership", desc: "Developing skills to inspire positive change", color: "from-purple-500 to-purple-600", delay: 0.2 },
              { icon: CheckCircle, title: "Integrity", desc: "Building trust through ethical practices", color: "from-green-500 to-green-600", delay: 0.4 }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform`} />
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block"
                  >
                    <value.icon className="h-14 w-14 text-gray-800 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced About ABLE Program Section */}
      <section id="able-program" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/team-collaboration.jpg"
            alt="Business team collaboration"
            fill
            className="object-cover opacity-5"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                About ABLE Program
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Academy for Business Leadership Excellence
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                JCI ABLE is a comprehensive training program offered by Junior Chamber International (JCI) India, 
                specifically designed for young professionals and entrepreneurs. This prestigious initiative aims to 
                enhance leadership skills, business acumen, and overall professional development.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Team Samriddhi represents 14 exceptional professionals from diverse industries across India, 
                united in their journey to become transformative leaders in their respective fields.
              </p>
              <motion.ul
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  "Business Strategy & Leadership Development",
                  "Communication Skills & Personal Branding",
                  "Networking & Professional Growth",
                  "Community Impact & Social Responsibility"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center group"
                  >
                    <div className="relative">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0" />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        className="absolute inset-0 h-6 w-6 bg-green-400 rounded-full opacity-30"
                      />
                    </div>
                    <span className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-20" />
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full">
                  PROGRAM BENEFITS
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why ABLE?</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm">Enhanced leadership capabilities and business strategy skills</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm">Strong professional network across industries</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm">Improved communication and personal branding</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm">Greater confidence in navigating the business world</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-blue-800 font-semibold">JCI India ABLE (P)</p>
                    <Target className="h-5 w-5 text-purple-600" />
                  </div>
                  <p className="text-xs text-gray-600">Academy for Business Leadership Excellence for Professionals</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Members Section */}
      <section id="our-team" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <motion.div
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Team Samriddhi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Led by Coach Harish Kumar C and Team Leader Vikas BC - 14 professionals united by the ABLE program
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 rounded-2xl ${
                  member.role === 'coach' 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-400' 
                    : member.role === 'team-leader' 
                    ? 'bg-gradient-to-br from-blue-400 to-purple-400'
                    : 'bg-gradient-to-br from-gray-400 to-gray-600'
                } opacity-10 group-hover:opacity-20 transition-opacity`} />
                
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all">
                  {/* Role Badge */}
                  {member.role === 'coach' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full flex items-center shadow-lg"
                    >
                      <Crown className="h-3 w-3 mr-1" />
                      COACH
                    </motion.div>
                  )}
                  {member.role === 'team-leader' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full flex items-center shadow-lg"
                    >
                      <Users className="h-3 w-3 mr-1" />
                      LEADER
                    </motion.div>
                  )}
                  
                  <div className="text-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden relative ${
                        member.role === 'coach' 
                          ? 'ring-4 ring-yellow-400 ring-offset-2' 
                          : member.role === 'team-leader' 
                          ? 'ring-4 ring-blue-400 ring-offset-2'
                          : 'ring-2 ring-gray-300'
                      }`}
                    >
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <div className={`w-full h-full rounded-full flex items-center justify-center ${
                          member.role === 'coach' 
                            ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                            : member.role === 'team-leader' 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                            : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                        }`}>
                          <span className="text-white font-bold text-2xl">
                            {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                      )}
                    </motion.div>
                    
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium mb-1">
                      {member.title}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">{member.company}</p>
                    
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {member.location}
                    </div>
                    
                    {member.mobile && (
                      <motion.a
                        href={`tel:${member.mobile.replace(/\s/g, '')}`}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-center text-sm text-green-600 hover:text-green-700"
                      >
                        <Phone className="h-4 w-4 mr-1" />
                        {member.mobile}
                      </motion.a>
                    )}
                  </div>
                  
                  <div className="text-center">
                    {member.motto && (
                      <p className="text-sm italic text-gray-600 mb-3 line-clamp-2">
                        "{member.motto}"
                      </p>
                    )}
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.specialization?.slice(0, 2).map((spec, idx) => (
                        <span key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 text-xs px-2 py-1 rounded-full border border-blue-200">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-black opacity-10" />
        
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Connect with Team Samriddhi
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Part of the ABLE Program by JCI India. Ready to collaborate, learn, and grow together?
            </p>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg hover:bg-gray-100 flex items-center justify-center shadow-xl"
              >
                <Users className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Connect with Us
              </motion.button>
              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white text-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-blue-600 flex items-center justify-center transition-all"
              >
                <Award className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                About ABLE Program
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Team Samriddhi
              </h3>
              <p className="text-gray-300 max-w-md mb-4">
                Part of the ABLE Program by JCI India - Building leaders, fostering excellence, 
                and creating positive impact in communities across India.
              </p>
              <div className="bg-gray-800 p-4 rounded-xl inline-block hover:bg-gray-700 transition-colors">
                <p className="text-sm text-blue-400 font-semibold">JCI India ABLE Program</p>
                <p className="text-xs text-gray-300">Advancing Business Leadership Excellence</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "About Samriddhi", href: "#about-samriddhi" },
                  { name: "ABLE Program", href: "#able-program" },
                  { name: "Our Team", href: "#our-team" },
                  { name: "Connect", href: "#contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Team Stats</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-2xl font-bold text-blue-400 mr-2">14</span> Team Members
                </li>
                <li className="flex items-center">
                  <span className="text-2xl font-bold text-purple-400 mr-2">1</span> Coach + 13 Members
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-green-400 mr-2" />
                  Pan-India Presence
                </li>
                <li className="flex items-center">
                  <Award className="h-5 w-5 text-yellow-400 mr-2" />
                  JCI India ABLE Program
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300"
          >
            <p>&copy; 2024 Team Samriddhi - ABLE Program by JCI India. All rights reserved.</p>
            <p className="text-sm mt-3 text-gray-400">
              Designed and Developed by{" "}
              <a 
                href="https://eagleminds.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Eagleminds Technologies Private Limited
              </a>
            </p>
            <p className="text-xs mt-1 text-gray-500">
              <a 
                href="https://eagleminds.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                www.eagleminds.net
              </a>
            </p>
          </motion.div>
        </div>
      </footer>
      
      {/* Add custom styles for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}