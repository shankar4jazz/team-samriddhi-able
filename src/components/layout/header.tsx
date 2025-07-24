"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/#home" },
    { name: "About Samriddhi", href: "/#about-samriddhi" },
    { name: "ABLE Program", href: "/able-program" },
    { name: "Our Team", href: "/#team" },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo/samriddhi-logo.png"
              alt="Team Samriddhi"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Team Samriddhi
              </Link>
              <span className="text-xs text-gray-600 font-medium">ABLE Program - JCI India</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all cursor-pointer"
                onClick={(e) => {
                  if (item.href.startsWith('/#') && window.location.pathname === '/') {
                    e.preventDefault()
                    const targetId = item.href.replace('/#', '')
                    const element = document.getElementById(targetId)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center ml-8">
            <a
              href="/#team"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl cursor-pointer"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault()
                  document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Champions
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 text-base font-medium cursor-pointer rounded-lg transition-colors"
                  onClick={(e) => {
                    if (item.href.startsWith('/#') && window.location.pathname === '/') {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      const targetId = item.href.replace('/#', '')
                      const element = document.getElementById(targetId)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    } else {
                      setIsMenuOpen(false)
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="/#team"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center w-full shadow-lg"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })
                    } else {
                      setIsMenuOpen(false)
                    }
                  }}
                >
                  Champions
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}