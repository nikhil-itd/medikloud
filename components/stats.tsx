"use client"

import { TrendingUp, Clock, Users, Hospital } from "lucide-react"
import Marquee from "react-fast-marquee"

const stats = [
  {
    icon: Hospital,
    number: "50+",
    label: "Partner Hospitals",
    description: "Across major cities",
    color: "text-blue-600",
    bg: "from-blue-100 via-blue-50 to-white",
    iconBg: "bg-blue-100",
  },
  {
    icon: Users,
    number: "10K+",
    label: "Patients Served",
    description: "Monthly active users",
    color: "text-cyan-600",
    bg: "from-cyan-100 via-cyan-50 to-white",
    iconBg: "bg-cyan-100",
  },
  {
    icon: Clock,
    number: "10 Min",
    label: "Fast Delivery",
    description: "From order to delivery",
    color: "text-blue-700",
    bg: "from-blue-50 via-white to-blue-50",
    iconBg: "bg-blue-50",
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Satisfaction Rate",
    description: "Patient feedback score",
    color: "text-cyan-700",
    bg: "from-cyan-50 via-white to-cyan-50",
    iconBg: "bg-cyan-50",
  },
]

export default function StatsMarquee() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-cyan-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming healthcare delivery with innovative digital solutions
          </p>
        </div>

        {/* Left and Right Gradient Overlays */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-blue-50 to-transparent z-20" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-cyan-50 to-transparent z-20" />

        {/* Marquee Component */}
        <Marquee gradient={false} speed={40} pauseOnHover={true} className="flex gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.bg} w-80 rounded-3xl shadow-lg hover:shadow-xl p-8 text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 mx-6 border border-white/50 backdrop-blur-sm`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${stat.iconBg} shadow-md`}
                >
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-extrabold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{stat.description}</div>
              </div>
            )
          })}
        </Marquee>
      </div>
    </section>
  )
}
