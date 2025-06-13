"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("")

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-16">
         {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">MediKloud</h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Reimagining hospital pharmacies for the digital era with smart and virtual pharmacy solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

        
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#mission" className="text-blue-200 hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#solution" className="text-blue-200 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-blue-200 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Virtual Pharmacy Kiosks
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Smart Pharmacy Integration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Analytics Dashboard
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                <span className="text-blue-200">medikloud.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                <span className="text-blue-200">+91 9876543210</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                <span className="text-blue-200">
                  address .....................
                  <br />
                  
                </span>
              </div>
            </div>
          </div>
        </div>  */}

        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 mb-4 md:mb-0">
              &copy; {currentYear} MediKloud. All rights reserved. Reimagining Hospital Pharmacies.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
