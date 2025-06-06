"use client";
import { ArrowRight, Play, Zap, Users, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import ContactForm from "./contact-form";
import { useState } from "react";
import { Dialog } from "@radix-ui/react-dialog";

export default function KioskBox() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  return (
    <div
      className="pt-32 pb-20 relative overflow-hidden section-fade-in kisko-bg"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Medi<span className="text-secondary">Kloud</span>
            </h1>

            <div className="relative mb-6" style={{ height: "60px" }}>
              <TypingAnimation
                duration={100}
                className="absolute top-0 left-0 w-full text-2xl md:text-3xl font-semibold text-gray-800"
              >
                Revolutionizing Hospital Pharmacies with Smart AI
              </TypingAnimation>
            </div>

            <p className="text-lg md:text-xl mb-8 text-gray-900  leading-relaxed">
              Smart and Virtual Pharmacy setups at hospitals to help patients
              easily get their prescribed medicines without hassles – no delays,
              confusion, or long waits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="flex items-center justify-center gap-3 bg-primary text-white font-semibold px-6 py-3 rounded-xl text-lg border-2 border-primary hover:bg-white hover:text-primary transition duration-300 ease-in-out hover:scale-105 shadow-md">
                <ShoppingCart className="w-6 h-6" />
                Order Medicines
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                <span className="text-gray-800 font-semibold">10 Min Delivery</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-500" />
                <span className="text-gray-800 font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/medikloud-kiosk.png"
                alt="MediKloud Digital Pharmacy Interface"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
