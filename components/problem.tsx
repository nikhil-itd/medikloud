"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SmilePlus,
  Building2,
  Shield,
  Package,
  AlertTriangle,
  Truck,
  FileWarning,
  HeartPulse,
  RotateCcw,
} from "lucide-react";

const patientChallenges = [
  {
    icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
    text: "Long Queues & Unclear Pricing",
  },
  {
    icon: <Truck className="w-5 h-5 text-orange-500" />,
    text: "Running between pharmacies to find medicines",
  },
  {
    icon: <FileWarning className="w-5 h-5 text-rose-600" />,
    text: "Delays in treatment due to unavailability",
  },
  {
    icon: <HeartPulse className="w-5 h-5 text-pink-500" />,
    text: "Exposure to infections",
  },
  {
    icon: <RotateCcw className="w-5 h-5 text-purple-500" />,
    text: "No delivery system for refill",
  },
  {
    icon: <FileWarning className="w-5 h-5 text-amber-500" />,
    text: "Lack of Post Purchase Support (dosage, side effects)",
  },
  {
    icon: <FileWarning className="w-5 h-5 text-yellow-600" />,
    text: "No digital tracking of purchases or expiry",
  },
  {
    icon: <FileWarning className="w-5 h-5 text-red-400" />,
    text: "Perception of higher prices at hospital pharmacies",
  },
];

const hospitalChallenges = [
  "No Integrations with insurance providers",
  "Improper inventory management",
  "Leakage due to pilferage, expiry, under billing",
  "No real-time visibility on sales and inventory",
  "Compliance & Audit challenges",
  "No Analytics",
  "No integration with hospital billing system",
  "Manual, Labor-Intensive Operations",
];

const administratorChallenges = [
  "Difficulty in tracking operational efficiency",
  "Complex regulatory compliance requirements",
  "Budget management and cost control issues",
  "Staff scheduling and resource allocation",
  "Quality assurance and patient safety concerns",
  "Technology integration challenges",
  "Data security and privacy compliance",
  "Performance metrics and reporting gaps",
];

const supplierChallenges = [
  "Unpredictable demand forecasting",
  "Complex supply chain logistics",
  "Inventory management across multiple locations",
  "Regulatory compliance across regions",
  "Price volatility and margin pressures",
  "Quality control and batch tracking",
  "Distribution network optimization",
  "Customer relationship management",
];

export default function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const cardTransforms = [
    {
      y: useTransform(scrollYProgress, [0, 0.25, 1], [150, 0, -150]),
      scale: useTransform(scrollYProgress, [0, 0.25, 1], [0.9, 1, 0.95]),
      opacity: useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 1]),
    },
    {
      y: useTransform(scrollYProgress, [0, 0.25, 1], [200, 50, -100]),
      scale: useTransform(scrollYProgress, [0, 0.25, 1], [0.8, 1, 0.95]),
      opacity: useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 1]),
    },
    {
      y: useTransform(scrollYProgress, [0, 0.3, 1], [250, 100, -50]),
      scale: useTransform(scrollYProgress, [0, 0.3, 1], [0.7, 1, 0.95]),
      opacity: useTransform(scrollYProgress, [0, 0.25, 1], [1, 1, 1]),
    },
    {
      y: useTransform(scrollYProgress, [0, 0.35, 1], [300, 150, 0]),
      scale: useTransform(scrollYProgress, [0, 0.35, 1], [0.6, 1, 1]),
      opacity: useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 1]),
    },
  ];

  return (
    <section
      id="problem"
      className="py-32 font-sans bg-gradient-to-b from-gray-50 to-white "
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            The Challenge We Address
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded mx-auto mb-10"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Healthcare stakeholders across the ecosystem face unique challenges
            that impact patient care, operational efficiency, and business
            sustainability.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto min-h-[200vh]">
          {/* Patients */}
          <motion.div style={cardTransforms[0]} className="sticky top-16 z-10">
            <GradientCard
              title="For Patients"
              icon={<SmilePlus className="w-6 h-6 text-pink-600" />}
              items={patientChallenges}
              gradient="from-orange-300 via-yellow-100 to-amber-100"
            />
          </motion.div>

          {/* Hospitals */}
          <motion.div
            style={cardTransforms[1]}
            className="sticky top-20 z-20 mt-8"
          >
            <GradientCard
              title="For Hospitals & Pharmacies"
              icon={<Building2 className="w-6 h-6 text-indigo-600" />}
              items={hospitalChallenges}
              iconType="check"
              gradient="from-indigo-300 via-purple-200 to-violet-300"
            />
          </motion.div>

          {/* Administrators */}
          <motion.div
            style={cardTransforms[2]}
            className="sticky top-24 z-30 mt-8"
          >
            <GradientCard
              title="For Healthcare Administrators"
              icon={<Shield className="w-6 h-6 text-yellow-600" />}
              items={administratorChallenges}
              iconType="star"
              gradient="from-rose-200 via-purple-300 to-pink-200"
            />
          </motion.div>

          {/* Suppliers */}
          <motion.div
            style={cardTransforms[3]}
            className="sticky top-28 z-40 mt-8"
          >
            <GradientCard
              title="For Pharmaceutical Suppliers"
              icon={<Package className="w-6 h-6 text-sky-600" />}
              items={supplierChallenges}
              iconType="dot"
              gradient="from-cyan-200 via-cyan-100 to-yellow-100"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GradientCard({
  title,
  icon,
  items,
  iconType,
  gradient,
}: {
  title: string;
  icon: React.ReactNode;
  items: any[];
  iconType?: "check" | "star" | "dot";
  gradient: string;
}) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} p-8 lg:p-10 rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-[1.03] h-[500px] lg:h-[550px] w-full flex flex-col`}
    >
      <CardHeader title={title} icon={icon} />
      <CardList items={items} iconType={iconType} />
    </div>
  );
}

function CardHeader({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center mb-6">
      {icon}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 ml-4">
        {title}
      </h3>
    </div>
  );
}

function CardList({
  items,
  iconType,
}: {
  items: any[];
  iconType?: "check" | "star" | "dot";
}) {
  return (
    <div className="flex-1 overflow-y-auto">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 text-gray-700">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex items-start"
          >
            {typeof item === "string" ? (
              <>
                <span className="mr-3 mt-1 flex-shrink-0 text-lg text-gray-900">
                  {iconType === "check" ? "✔" : iconType === "star" ? "★" : "•"}
                </span>
                <span className="text-sm lg:text-base">{item}</span>
              </>
            ) : (
              <>
                <span className="mr-3 mt-1 flex-shrink-0">{item.icon}</span>
                <span className="text-sm lg:text-base">{item.text}</span>
              </>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
