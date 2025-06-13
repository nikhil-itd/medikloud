"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  AlertTriangle,
  Truck,
  FileWarning,
  HeartPulse,
  RotateCcw,
  Users,
  Hospital,
  ClipboardList,
  Boxes,
  ChevronRight,
  Eye,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const stakeholderData = [
  {
    id: "patients",
    title: "Patients",
    subtitle: "Healthcare Experience Challenges",
    icon: <Users className="w-8 h-8" />,
    color: "from-rose-500 to-pink-600",
    bgColor: "from-rose-50 to-pink-50",
    accentColor: "rose",
    challenges: [
      {
        icon: <AlertTriangle className="w-5 h-5" />,
        title: "Long Queues & Unclear Pricing",
        description: "Waiting times and pricing transparency issues",
        severity: "high",
      },
      {
        icon: <Truck className="w-5 h-5" />,
        title: "Medicine Availability",
        description: "Running between pharmacies to find medicines",
        severity: "high",
      },
      {
        icon: <FileWarning className="w-5 h-5" />,
        title: "Treatment Delays",
        description: "Delays due to medicine unavailability",
        severity: "critical",
      },
      {
        icon: <HeartPulse className="w-5 h-5" />,
        title: "Infection Exposure",
        description: "Risk of exposure to infections in crowded spaces",
        severity: "medium",
      },
      {
        icon: <RotateCcw className="w-5 h-5" />,
        title: "No Refill System",
        description: "Lack of convenient delivery for refills",
        severity: "medium",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Limited Support",
        description: "No post-purchase guidance on dosage and side effects",
        severity: "high",
      },
    ],
  },
  {
    id: "hospitals",
    title: "Hospitals & Pharmacies",
    subtitle: "Operational & System Challenges",
    icon: <Hospital className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-50 to-cyan-50",
    accentColor: "blue",
    challenges: [
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Insurance Integration",
        description: "No integrations with insurance providers",
        severity: "high",
      },
      {
        icon: <Boxes className="w-5 h-5" />,
        title: "Inventory Management",
        description: "Improper inventory tracking and control",
        severity: "critical",
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Revenue Leakage",
        description: "Losses due to pilferage, expiry, under billing",
        severity: "critical",
      },
      {
        icon: <Eye className="w-5 h-5" />,
        title: "Real-time Visibility",
        description: "No real-time visibility on sales and inventory",
        severity: "high",
      },
      {
        icon: <FileWarning className="w-5 h-5" />,
        title: "Compliance Issues",
        description: "Compliance and audit challenges",
        severity: "high",
      },
      {
        icon: <Zap className="w-5 h-5" />,
        title: "Manual Operations",
        description: "Labor-intensive manual processes",
        severity: "medium",
      },
    ],
  },
  {
    id: "administrators",
    title: "Healthcare Administrators",
    subtitle: "Management & Compliance Challenges",
    icon: <ClipboardList className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-600",
    bgColor: "from-purple-50 to-indigo-50",
    accentColor: "purple",
    challenges: [
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Operational Efficiency",
        description: "Difficulty tracking operational performance",
        severity: "high",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Regulatory Compliance",
        description: "Complex compliance requirements",
        severity: "critical",
      },
      {
        icon: <FileWarning className="w-5 h-5" />,
        title: "Budget Management",
        description: "Cost control and budget allocation issues",
        severity: "high",
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Resource Allocation",
        description: "Staff scheduling and resource management",
        severity: "medium",
      },
      {
        icon: <Eye className="w-5 h-5" />,
        title: "Performance Metrics",
        description: "Gaps in reporting and analytics",
        severity: "high",
      },
      {
        icon: <Zap className="w-5 h-5" />,
        title: "Technology Integration",
        description: "Challenges with system integration",
        severity: "medium",
      },
    ],
  },
  {
    id: "suppliers",
    title: "Pharmaceutical Suppliers",
    subtitle: "Supply Chain & Distribution Challenges",
    icon: <Boxes className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
    accentColor: "emerald",
    challenges: [
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Demand Forecasting",
        description: "Unpredictable demand patterns",
        severity: "high",
      },
      {
        icon: <Truck className="w-5 h-5" />,
        title: "Supply Chain Logistics",
        description: "Complex distribution networks",
        severity: "high",
      },
      {
        icon: <Boxes className="w-5 h-5" />,
        title: "Multi-location Inventory",
        description: "Managing stock across locations",
        severity: "medium",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Regulatory Compliance",
        description: "Cross-regional compliance requirements",
        severity: "critical",
      },
      {
        icon: <FileWarning className="w-5 h-5" />,
        title: "Price Volatility",
        description: "Margin pressures and price fluctuations",
        severity: "high",
      },
      {
        icon: <Eye className="w-5 h-5" />,
        title: "Quality Control",
        description: "Batch tracking and quality assurance",
        severity: "critical",
      },
    ],
  },
]

const severityConfig = {
  critical: { color: "bg-red-100 text-red-800 border-red-200", label: "Critical" },
  high: { color: "bg-orange-100 text-orange-800 border-orange-200", label: "High" },
  medium: { color: "bg-yellow-100 text-yellow-800 border-yellow-200", label: "Medium" },
}

export default function EnhancedProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const [selectedStakeholder, setSelectedStakeholder] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const headerY = useTransform(scrollYProgress, [0, 0.2], [100, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #06b6d4 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div style={{ y: headerY, opacity: headerOpacity }} className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            Healthcare Challenges
          </div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
            The Problems We Solve
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Every stakeholder in the healthcare ecosystem faces unique challenges that impact patient care, operational
            efficiency, and business sustainability. Here's how we address them.
          </p>
        </motion.div>

        {/* Interactive Stakeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {stakeholderData.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // viewport={{ once: true }}
              className="group"
            >
              <Card
                className={`relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-gradient-to-br ${stakeholder.bgColor}`}
                onMouseEnter={() => setActiveCard(stakeholder.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setSelectedStakeholder(selectedStakeholder === stakeholder.id ? null : stakeholder.id)}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stakeholder.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Top Accent Bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${stakeholder.color}`} />

                <CardContent className="p-8 relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${stakeholder.color} text-white shadow-lg`}>
                        {stakeholder.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{stakeholder.title}</h3>
                        <p className="text-slate-600 text-sm">{stakeholder.subtitle}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="">
                      {stakeholder.challenges.length}_Issues
                    </Badge>
                  </div>

                  {/* Challenge Preview Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {stakeholder.challenges.slice(0, 4).map((challenge, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50  transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${stakeholder.color} text-white`}>
                            {challenge.icon}
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-xs ${severityConfig[challenge.severity as keyof typeof severityConfig].color}`}
                          >
                            {severityConfig[challenge.severity as keyof typeof severityConfig].label}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-slate-900 text-sm mb-1">{challenge.title}</h4>
                        <p className="text-xs text-slate-600 line-clamp-2">{challenge.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* View More Button */}
                  <Button
                    variant="outline"
                    className="w-full hover:bg-slate-900 hover:text-white transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedStakeholder(selectedStakeholder === stakeholder.id ? null : stakeholder.id)
                    }}
                  >
                    {selectedStakeholder === stakeholder.id ? "Show Less" : "View All Challenges"}
                    <ChevronRight
                      className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                        selectedStakeholder === stakeholder.id ? "rotate-90" : ""
                      }`}
                    />
                  </Button>
                </CardContent>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-br ${stakeholder.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Detailed View Modal */}
        <AnimatePresence>
          {selectedStakeholder && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedStakeholder(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const stakeholder = stakeholderData.find((s) => s.id === selectedStakeholder)!
                  return (
                    <>
                      {/* Modal Header */}
                      <div className={`bg-gradient-to-r ${stakeholder.color} text-white p-6`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 rounded-xl">{stakeholder.icon}</div>
                            <div>
                              <h3 className="text-2xl font-bold">{stakeholder.title}</h3>
                              <p className="text-white/80">{stakeholder.subtitle}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/20"
                            onClick={() => setSelectedStakeholder(null)}
                          >
                            ×
                          </Button>
                        </div>
                      </div>

                      {/* Modal Content */}
                      <div className="p-6 overflow-y-auto max-h-[60vh]">
                        <div className="grid gap-4">
                          {stakeholder.challenges.map((challenge, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                              className="bg-slate-50 rounded-xl p-4 border border-slate-200  transition-colors duration-200"
                            >
                              <div className="flex items-start gap-4">
                                <div
                                  className={`p-3 rounded-xl bg-gradient-to-br ${stakeholder.color} text-white flex-shrink-0`}
                                >
                                  {challenge.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <h4 className="font-semibold text-slate-900">{challenge.title}</h4>
                                    <Badge
                                      variant="outline"
                                      className={
                                        severityConfig[challenge.severity as keyof typeof severityConfig].color
                                      }
                                    >
                                      {severityConfig[challenge.severity as keyof typeof severityConfig].label}
                                    </Badge>
                                  </div>
                                  <p className="text-slate-600">{challenge.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          // viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Healthcare?</h3>
            <p className="text-blue-100 mb-6">
              Our comprehensive solution addresses these challenges across all stakeholder groups, creating a seamless
              healthcare ecosystem.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/80 transition-colors duration-300">
              Discover Our Solution
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
