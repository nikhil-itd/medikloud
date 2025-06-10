"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import ContactForm from "./contact-form"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState<string>("")
  const [contactDialogOpen, setContactDialogOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setActiveLink(href)
    setMobileMenuOpen(false)

    const targetElement = document.querySelector(href)
    if (targetElement) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={`fixed z-50 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 ease-in-out
       top-0 sm:top-2
       left-0 right-0 sm:left-4 sm:right-4
       bg-white/10 rounded-none sm:rounded-xl w-full sm:w-fit sm:ml-auto sm:mr-auto
       ${isScrolled ? "sm:lg:left-24 sm:lg:right-24" : "sm:left-6 sm:right-6"}
     `}
    >
      <div
        className={`flex items-center justify-between w-full transition-all duration-300 ${
          isScrolled ? "px-6 sm:px-8 py-3 sm:py-4" : "px-6 sm:px-8 py-4 sm:py-5"
        }`}
      >
        {/* Left - Logo */}
        <div className="relative flex items-center">
          <Link href="/" className="block ml-2 sm:ml-4">
            <Image
              src="/medikloud-logo.png"
              alt="MediKloud Logo"
              width={isScrolled ? 140 : 160}
              height={isScrolled ? 35 : 40}
              className="transition-all duration-300"
              priority
            />
          </Link>
        </div>

        {/* Center - Nav Links (Desktop only) */}
        <div
          className={`hidden lg:flex items-center transition-all ml-2 duration-300 ${
            isScrolled ? "space-x-4 text-sm" : "space-x-6 text-base"
          } font-medium text-white/90 whitespace-nowrap`}
        >
          {[
            ["#mission", "Our Mission"],
            ["#problem", "The Problem"],
            ["#solution", "Our Solution"],
            ["#how-it-works", "How It Works"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`transition duration-300 ${
                activeLink === href ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
              }`}
              onClick={(e) => handleNavLinkClick(e, href)}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right - Contact Button & Mobile Menu Toggle */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 ml-auto">
          <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
            <DialogTrigger className="text-xs sm:text-sm bg-cyan-500 hover:bg-cyan-600 ml-4 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-full transition-all duration-300">
              Contact Us
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px] p-0 bg-white border-0 shadow-2xl max-h-[90vh] overflow-hidden">
              <ContactForm onClose={() => setContactDialogOpen(false)} />
            </DialogContent>
          </Dialog>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center text-gray-700 hover:text-primary transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/10 backdrop-blur-md rounded-b-2xl
         ${mobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
       `}
      >
        <div className="px-4 py-2 space-y-1">
          {[
            ["#mission", "Our Mission"],
            ["#problem", "The Problem"],
            ["#solution", "Our Solution"],
            ["#how-it-works", "How It Works"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`block px-4 py-2 rounded-lg transition duration-200  text-sm ${
                activeLink === href ? "bg-primary text-white font-medium" : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={(e) => handleNavLinkClick(e, href)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
