"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle, Star, Users, Zap, MapPin, Briefcase, Award, Crown, Phone, Sparkles, Target, Heart, Globe, MessageSquare } from "lucide-react"
import Image from "next/image"
import { teamMembers } from "@/data/team-members"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

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

      <Header />

      {/* Enhanced Hero Section */}
      <section id="home" className="pt-16 md:pt-20 relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
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
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-gray-900 leading-tight whitespace-nowrap"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Team Samriddhi</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-4"
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-2">
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                  <p className="text-lg md:text-xl font-semibold text-gray-800">
                    Proud participants of the <span className="text-blue-600">ABLE Program</span> by JCI India
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
                className="text-lg text-gray-600 mb-4 max-w-xl"
              >
                Led by Coach <strong className="text-purple-600">Harishkumar C</strong> (LIC of India) and Team Leader <strong className="text-purple-600">Vikas BC</strong>, 
                we are 14 professionals from diverse industries, united in our mission to 
                excel, grow, and make a meaningful impact in our communities and businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="#team"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 30px -10px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 flex items-center justify-center cursor-pointer shadow-lg transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Meet Our Team 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.a>
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About ABLE Program
                </motion.a>
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
                  src="/images/logo/samriddhi-logo.png"
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
      <section id="about-samriddhi" className="py-8 md:py-12 bg-white relative overflow-hidden">
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


      {/* Enhanced Team Members Section */}
      <section id="team" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
              Led by Coach Harishkumar C and Team Leader Vikas BC - 14 professionals united by the ABLE program
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
                className="relative group h-full"
              >
                <div className={`absolute inset-0 rounded-3xl ${
                  member.role === 'coach' 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-400' 
                    : member.role === 'team-leader' 
                    ? 'bg-gradient-to-br from-blue-400 to-purple-400'
                    : 'bg-gradient-to-br from-gray-300 to-gray-400'
                } opacity-0 group-hover:opacity-10 transition-all duration-300 blur-xl`} />
                
                <div className="relative bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200 h-full flex flex-col">
                  {/* Role Badge */}
                  {member.role === 'coach' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-4 py-2 rounded-full flex items-center shadow-lg font-semibold"
                    >
                      <Crown className="h-4 w-4 mr-1" />
                      COACH
                    </motion.div>
                  )}
                  {member.role === 'team-leader' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-4 py-2 rounded-full flex items-center shadow-lg font-semibold"
                    >
                      <Users className="h-4 w-4 mr-1" />
                      LEADER
                    </motion.div>
                  )}
                  
                  <div className="text-center mb-4 flex-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden relative ${
                        member.role === 'coach' 
                          ? 'ring-4 ring-yellow-400/30 ring-offset-4' 
                          : member.role === 'team-leader' 
                          ? 'ring-4 ring-blue-400/30 ring-offset-4'
                          : 'ring-2 ring-gray-200 ring-offset-2'
                      } shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <div className={`w-full h-full rounded-2xl flex items-center justify-center ${
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
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {member.title}
                    </p>
                    <p className="text-sm text-gray-600 font-medium mb-3">{member.company}</p>
                    
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-3">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {member.location}
                    </div>
                    
                    {member.mobile && (
                      <motion.a
                        href={`tel:${member.mobile.replace(/\s/g, '')}`}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center justify-center text-sm bg-green-50 text-green-700 hover:bg-green-100 px-4 py-2 rounded-full font-medium transition-colors duration-200"
                      >
                        <Phone className="h-4 w-4 mr-2" />
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
      <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Together We Rise, Together We Shine
            </h2>
            <p className="text-2xl text-yellow-300 font-semibold mb-4">
              "समृद्धि की ओर एक साथ" - Towards Prosperity Together
            </p>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              14 passionate professionals, 1 unified vision. Through ABLE, we're not just building businesses - 
              we're creating legacies, fostering innovation, and empowering communities. 
              Join Team Samriddhi on our journey to excellence!
            </p>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#team"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 flex items-center justify-center shadow-xl cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Award className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Meet The Champions
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
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