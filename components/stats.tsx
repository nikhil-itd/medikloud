"use client";

import { TrendingUp, Clock, Users, Hospital } from "lucide-react";
import Marquee from "react-fast-marquee";

const stats = [
  {
    icon: Hospital,
    number: "50+",
    label: "Partner Hospitals",
    description: "Across major cities",
    color: "text-red-600",
    bg: "from-red-200 via-red-50 to-white",
  },
  {
    icon: Users,
    number: "10K+",
    label: "Patients Served",
    description: "Monthly active users",
    color: "text-green-600",
    bg: "from-green-200 via-green-50 to-white",
  },
  {
    icon: Clock,
    number: "10 Min",
    label: "Fast Delivery",
    description: "From order to delivery",
    color: "text-yellow-600",
    bg: "from-yellow-200 via-yellow-50 to-white",
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Satisfaction Rate",
    description: "Patient feedback score",
    color: "text-purple-600",
    bg: "from-purple-100 via-purple-50 to-white",
  },
];

export default function StatsMarquee() {
  return (
    <section className="py-14 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Left and Right Gradient Overlays */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-20" />

        {/* Marquee Component */}
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="flex gap-6 "
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.bg} w-64 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] p-6 text-center transform transition-transform duration-300 hover:scale-105 mx-4`}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 bg-opacity-20 ${stat.color} bg-current`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-extrabold text-gray-800 mb-1">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
