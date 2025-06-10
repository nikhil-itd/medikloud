"use client"
import ContactForm from "./contact-form"
import { useState } from "react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
export default function Contact() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  return (
    <section id="contact" className="py-20 bg-white text-gray-900 ">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Hospital Pharmacy?</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Partner with MediKloud to bring efficiency, safety, and patient satisfaction to the forefront of your
          pharmaceutical services.
        </p>

        <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
          <DialogTrigger className="text-xs sm:text-sm bg-cyan-500 hover:bg-cyan-600 ml-4 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-full transition-all duration-300">
            Partner with Us
          </DialogTrigger>
          <DialogTitle></DialogTitle>
          <DialogContent className="sm:max-w-[450px] p-0 bg-white border-0 shadow-2xl max-h-[90vh] overflow-hidden">
            <ContactForm onClose={() => setContactDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
