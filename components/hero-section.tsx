"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
}

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-darkgray">Revolutionizing Hospital Pharmacies</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Smart Pharmacy</span>
            <br />
            <span className="text-darkgray">Solutions</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-textlight mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your hospital pharmacy with AI-powered automation, 10-minute delivery, and seamless digital
            integration.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <button className="btn-primary text-lg px-8 py-4 focus-enhanced group">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="btn-outline text-lg px-8 py-4 focus-enhanced group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </motion.div>

          {/* Hero Image */}
          <motion.div variants={itemVariants} className="relative max-w-4xl mx-auto">
            <motion.div variants={floatingVariants} animate="animate" className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-enhanced">
                <Image
                  src="/medicloud-kiosk.png"
                  alt="MediKloud Smart Pharmacy Kiosk"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-lg"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-enhanced"
              animate={{
                y: [-5, 5, -5],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium text-darkgray">Online</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-enhanced"
              animate={{
                y: [5, -5, 5],
                rotate: [2, -2, 2],
              }}
              transition={{
                duration: 3.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">10m</span>
                </div>
                <span className="text-sm font-medium text-darkgray">Fast Delivery</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
