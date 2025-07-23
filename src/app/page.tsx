"use client"

import { ArrowRight, CheckCircle, Star, Users, Zap, MapPin, Briefcase, Award, Crown, Phone } from "lucide-react"
import Image from "next/image"
import { teamMembers } from "@/data/team-members"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/logo/jci-logo.png"
                alt="JCI India"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <div className="text-xl font-bold text-gray-900 leading-tight">Team Samriddhi</div>
                <span className="text-xs text-blue-600 font-medium">ABLE Program - JCI India</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About ABLE</a>
              <a href="#team" className="text-gray-600 hover:text-gray-900">Our Team</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/logo/jci-logo.png"
                alt="JCI India"
                width={120}
                height={120}
                className="h-20 w-auto"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Team <span className="text-blue-600">Samriddhi</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
              Proud participants of the <strong>ABLE Program</strong> by JCI India
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Led by Coach <strong>Harish Kumar C</strong> (LIC of India) and Team Leader <strong>Vikas BC</strong>, 
              we are 14 professionals from diverse industries, united in our mission to 
              excel, grow, and make a meaningful impact in our communities and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 flex items-center justify-center">
                Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-blue-50">
                About ABLE Program
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABLE Program Values Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our ABLE Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The core principles that drive Team Samriddhi in the ABLE program
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-700 font-medium">Striving for the highest standards in everything we do, from business practices to personal growth</p>
            </div>
            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Leadership</h3>
              <p className="text-gray-700 font-medium">Developing leadership skills to inspire positive change in our communities and industries</p>
            </div>
            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-700 font-medium">Building trust through honest, ethical, and transparent business practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* About ABLE Program Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About ABLE Program
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                ABLE is a prestigious leadership development program conducted by JCI India, 
                designed to nurture business leaders and entrepreneurs. Team Samriddhi represents 
                13 exceptional professionals from diverse industries across India.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0" />
                  <span className="text-lg font-semibold text-gray-900">14 Diverse Professionals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0" />
                  <span className="text-lg font-semibold text-gray-900">Multiple Industries & Locations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0" />
                  <span className="text-lg font-semibold text-gray-900">Leadership Development Focus</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0" />
                  <span className="text-lg font-semibold text-gray-900">Community Impact Initiatives</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To excel in our respective fields while contributing positively to society, 
                fostering innovation, and building meaningful professional relationships.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800 font-semibold">JCI India ABLE Program</p>
                <p className="text-sm text-blue-600">Advancing Business Leadership Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Team Samriddhi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Led by Coach Harish Kumar C and Team Leader Vikas BC - 14 professionals united by the ABLE program
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={member.id} className={`rounded-lg p-6 hover:shadow-lg transition-shadow relative ${
                member.role === 'coach' 
                  ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300' 
                  : member.role === 'team-leader' 
                  ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300'
                  : 'bg-gray-50'
              }`}>
                {/* Role Badge */}
                {member.role === 'coach' && (
                  <div className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <Crown className="h-3 w-3 mr-1" />
                    COACH
                  </div>
                )}
                {member.role === 'team-leader' && (
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    LEADER
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden ${
                    member.role === 'coach' 
                      ? 'ring-4 ring-yellow-400' 
                      : member.role === 'team-leader' 
                      ? 'ring-4 ring-blue-400'
                      : 'ring-2 ring-gray-300'
                  }`}>
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full rounded-full flex items-center justify-center ${
                      member.photo ? 'hidden' : 'flex'
                    } ${
                      member.role === 'coach' 
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                        : member.role === 'team-leader' 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                        : 'bg-blue-600'
                    }`}>
                      <span className="text-white font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-blue-600 mb-1">{member.title}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.company}</p>
                  <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {member.location}
                  </div>
                  {member.mobile && (
                    <div className="flex items-center justify-center text-sm text-green-600">
                      <Phone className="h-4 w-4 mr-1" />
                      {member.mobile}
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  {member.motto && (
                    <p className="text-sm italic text-gray-600 mb-3">
                      "{member.motto}"
                    </p>
                  )}
                  <div className="flex flex-wrap justify-center gap-1">
                    {member.specialization?.slice(0, 2).map((spec, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Connect with Team Samriddhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Part of the ABLE Program by JCI India. Ready to collaborate, learn, and grow together?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-gray-100 flex items-center justify-center">
              <Users className="mr-2 h-5 w-5" />
              Connect with Us
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-blue-600 flex items-center justify-center">
              <Award className="mr-2 h-5 w-5" />
              About ABLE Program
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Team Samriddhi</h3>
              <p className="text-gray-300 max-w-md mb-4">
                Part of the ABLE Program by JCI India - Building leaders, fostering excellence, 
                and creating positive impact in communities across India.
              </p>
              <div className="bg-gray-800 p-3 rounded-lg inline-block">
                <p className="text-sm text-blue-400 font-semibold">JCI India ABLE Program</p>
                <p className="text-xs text-gray-300">Advancing Business Leadership Excellence</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white">About ABLE</a></li>
                <li><a href="#team" className="text-gray-300 hover:text-white">Our Team</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white">Connect</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Team Stats</h4>
              <ul className="space-y-2 text-gray-300">
                <li>14 Team Members</li>
                <li>1 Coach + 13 Members</li>
                <li>Multiple Industries</li>
                <li>Pan-India Presence</li>
                <li>JCI India ABLE Program</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Team Samriddhi - ABLE Program by JCI India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
