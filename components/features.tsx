"use client"

import {
  Smartphone,
  Shield,
  Clock,
  CreditCard,
  Bell,
  BarChart3,
  Truck,
  HeadphonesIcon,
  QrCode,
  Database,
  Stethoscope,
  CheckCircle,
} from "lucide-react"

import { motion } from "framer-motion"

const features = [
  {
    icon: QrCode,
    title: "QR Code Scanning",
    description: "Instant prescription scanning with AI-powered OCR technology",
    color: "from-purple-300 to-purple-500",
  },
  {
    icon: Clock,
    title: "10-Minute Delivery",
    description: "Ultra-fast medicine delivery within hospital premises",
    color: "from-rose-300 to-rose-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Integration",
    description: "Complete pharmacy management through mobile application",
    color: "from-indigo-300 to-indigo-500",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Medication reminders and refill alerts",
    color: "from-orange-300 to-orange-500",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer and technical support",
    color: "from-teal-300 to-teal-500",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Post-discharge medication delivery to patient homes",
    color: "from-red-300 to-red-500",
  },
  {
    icon: Database,
    title: "Inventory Management",
    description: "AI-powered stock management and predictive ordering",
    color: "from-cyan-300 to-cyan-500",
  },
  {
    icon: Stethoscope,
    title: "Clinical Integration",
    description: "Seamless integration with hospital management systems",
    color: "from-pink-300 to-pink-500",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      type: "spring",
    },
  }),
}

export default function Features() {
  return (
    <section className="py-20 hero-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Comprehensive Features</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need for a modern, efficient, and patient-friendly pharmacy experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
