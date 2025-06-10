"use client"

import { Target, Heart, Lightbulb } from "lucide-react"
import Image from "next/image"
import { AnimatedList } from "@/components/magicui/animated-list"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { BoxReveal } from "@/components/magicui/box-reveal";

export default function Mission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section id="mission" className="py-20 hero-bg">
      <div className="container mx-auto px-6">
 <div className="mb-16">
  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">Our Mission</h2>
  <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full" />

  <BoxReveal boxColor="blue-300">
    <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-8xl mx-auto text-center">
      At <span className="text-primary font-semibold">MediKloud</span>, we aim to transform hospital pharmacies by deploying
      <span className="text-accent font-semibold"> Smart</span> and 
      <span className="text-secondary font-semibold"> Virtual Pharmacies</span>—delivering medications
      <span className="text-primary font-semibold"> quickly</span>, 
      <span className="text-secondary font-semibold"> safely</span>, and 
      <span className="text-accent font-semibold"> affordably</span>. 
      We believe in using <span className="text-primary font-semibold">technology</span> to simplify processes,
      eliminate errors, and put <span className="text-secondary font-semibold">patients first</span>.
    </p>
  </BoxReveal>
</div>


        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="/smartpharma.jpg"
              alt="Modern Hospital Pharmacy"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
          </div>

          <div className="space-y-8" ref={ref}>
            {isInView && (
<AnimatedList delay={200}>
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
      <Lightbulb className="w-6 h-6 text-accent" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation & Technology</h3>
      <p className="text-gray-600">
        Seamless integration with <span className="text-accent font-medium">hospital systems</span> and <span className="text-accent font-medium">insurance platforms</span> for a smooth digital experience.
      </p>
    </div>
  </div>

  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
      <Heart className="w-6 h-6 text-secondary" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Patient-Centric Care</h3>
      <p className="text-gray-600">
        Full support from prescription to recovery, including <span className="text-secondary font-medium">dosage reminders</span> and <span className="text-secondary font-medium">side effect tracking</span>.
      </p>
    </div>
  </div>

  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
      <Target className="w-6 h-6 text-primary" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Precision & Efficiency</h3>
      <p className="text-gray-600">
        AI-powered prescription reading with <span className="text-primary font-medium">100% accuracy</span>, eliminating human errors and minimizing wait times.
      </p>
    </div>
  </div>
</AnimatedList>

            )}
          </div>
        </div>
      </div>
    </section>
  )
}
