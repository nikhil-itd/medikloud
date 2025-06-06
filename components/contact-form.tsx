"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Building2, User, FileText } from "lucide-react"

interface ContactFormProps {
  onClose?: () => void
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    hospitalDetails: "",
    other: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted with data:", formData)

    // Reset form
    setFormData({
      name: "",
      address: "",
      hospitalDetails: "",
      other: "",
      email: "",
    })

    // Close the dialog
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border border-gray-200 shadow-xl bg-white overflow-hidden">
        <CardHeader className="space-y-2 pb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardTitle className="text-xl font-bold text-center">Get In Touch</CardTitle>
          <CardDescription className="text-center text-blue-100 text-xs">
            Send us a message and we'll respond soon.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 bg-white max-h-[80vh] overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-xs font-medium text-gray-700 flex items-center gap-1">
                <User className="w-3 h-3 text-blue-600" />
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="h-9 text-sm border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded bg-white text-gray-900"
                
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="email" className="text-xs font-medium text-gray-700 flex items-center gap-1">
                <Mail className="w-3 h-3 text-blue-600" />
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="h-9 text-sm border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded bg-white text-gray-900"
                
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="address" className="text-xs font-medium text-gray-700 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-600" />
                Address
              </Label>
              <Input
                id="address"
                name="address"
                placeholder="Your complete address"
                value={formData.address}
                onChange={handleChange}
                className="h-9 text-sm border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded bg-white text-gray-900"
                
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="hospitalDetails" className="text-xs font-medium text-gray-700 flex items-center gap-1">
                <Building2 className="w-3 h-3 text-blue-600" />
                Hospital Details
              </Label>
              <Input
                id="hospitalDetails"
                name="hospitalDetails"
                placeholder="Hospital name and information"
                value={formData.hospitalDetails}
                onChange={handleChange}
                className="h-9 text-sm border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded bg-white text-gray-900"
                
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="other" className="text-xs font-medium text-gray-700 flex items-center gap-1">
                <FileText className="w-3 h-3 text-blue-600" />
                Additional Information
              </Label>
              <Textarea
                id="other"
                name="other"
                placeholder="Any additional information..."
                value={formData.other}
                onChange={handleChange}
                className="min-h-[60px] text-sm border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded bg-white text-gray-900 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-9 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-sm rounded transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
