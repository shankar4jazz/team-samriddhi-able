"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Target, Award, Star, CheckCircle, Globe, Heart, Lightbulb, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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

export default function AbleProgramPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                ABLE Program
              </span>
            </motion.h1>
            
            <motion.div
              variants={fadeInUp}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-8 py-4 rounded-full mb-4">
                <Award className="h-6 w-6 text-blue-600" />
                <p className="text-xl md:text-2xl font-bold text-gray-800">
                  <span className="text-blue-600">A</span>cademy for{" "}
                  <span className="text-purple-600">B</span>usiness{" "}
                  <span className="text-pink-600">L</span>eadership{" "}
                  <span className="text-orange-600">E</span>xcellence
                </p>
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-lg text-gray-600 font-medium">
                A flagship initiative by JCI India
              </p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Empowering young professionals across India to become exceptional business leaders 
              through comprehensive training, mentorship, and practical application of leadership principles.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/#team"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 flex items-center justify-center cursor-pointer shadow-lg transition-all duration-300"
              >
                Meet Team Samriddhi
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                href="/"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
              >
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is ABLE Program */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              What is the ABLE Program?
            </motion.h2>
            
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-12"
            >
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                The ABLE Program is JCI India's premier leadership development initiative designed to 
                cultivate the next generation of business leaders. Through a comprehensive curriculum 
                combining theoretical knowledge with practical application, participants develop essential 
                skills for success in today's dynamic business environment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { letter: "A", word: "Academy", desc: "Structured learning environment", color: "blue" },
                  { letter: "B", word: "Business", desc: "Real-world application", color: "purple" },
                  { letter: "L", word: "Leadership", desc: "Essential skills development", color: "pink" },
                  { letter: "E", word: "Excellence", desc: "Pursuit of the highest standards", color: "orange" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white font-bold text-2xl">{item.letter}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.word}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-16"
            >
              Program Features
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Strategic Thinking",
                  description: "Develop critical thinking and strategic planning skills essential for business success.",
                  color: "blue"
                },
                {
                  icon: Users,
                  title: "Team Leadership",
                  description: "Learn to lead diverse teams and foster collaborative work environments.",
                  color: "purple"
                },
                {
                  icon: TrendingUp,
                  title: "Business Growth",
                  description: "Master techniques for driving business growth and operational excellence.",
                  color: "green"
                },
                {
                  icon: Globe,
                  title: "Global Perspective",
                  description: "Gain insights into international business practices and global market trends.",
                  color: "orange"
                },
                {
                  icon: Lightbulb,
                  title: "Innovation & Creativity",
                  description: "Foster innovative thinking and creative problem-solving approaches.",
                  color: "yellow"
                },
                {
                  icon: Heart,
                  title: "Ethical Leadership",
                  description: "Build strong ethical foundations for responsible business leadership.",
                  color: "red"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 rounded-2xl flex items-center justify-center mb-6`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Samriddhi in ABLE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-16"
            >
              Team Samriddhi in ABLE
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInUp}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20" />
                <Image
                  src="/images/logo/samriddhi-logo.png"
                  alt="Team Samriddhi"
                  width={400}
                  height={400}
                  className="w-full max-w-md mx-auto relative z-10"
                />
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Journey in Excellence
                </h3>
                
                <div className="space-y-4">
                  {[
                    { text: "14 dedicated professionals from diverse industries", icon: Users },
                    { text: "Led by experienced Coach Harishkumar C from LIC of India", icon: Award },
                    { text: "Guided by dynamic Team Leader Vikas BC", icon: Star },
                    { text: "Committed to mutual growth and community impact", icon: Heart },
                    { text: "Embodying the spirit of समृद्धि (Samriddhi) - Prosperity for All", icon: Globe }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-lg text-gray-700">{item.text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={fadeInUp}
                  className="mt-8"
                >
                  <Link
                    href="/#team"
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Meet Our Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Join the Excellence Journey
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Be part of JCI India's ABLE Program and transform your leadership potential into 
              extraordinary business success, just like Team Samriddhi.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/#team"
                className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <Users className="mr-2 h-5 w-5" />
                Meet Team Samriddhi
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}