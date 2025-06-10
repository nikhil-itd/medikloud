import { FileText, Truck, Smartphone } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 hero-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Seamless Operations, Better Care
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-12"></div>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Our technology ensures a smooth, efficient, and patient-centric pharmacy experience from prescription to
          medication in hand.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="icon-placeholder mx-auto bg-primary/10">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mt-4 mb-2">AI-Powered Prescription Reading</h3>
            <p className="text-gray-600">Accurate digitalization of handwritten and printed prescriptions.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="icon-placeholder mx-auto bg-secondary/10">
              <Truck className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mt-4 mb-2">Rapid Fulfillment & Delivery</h3>
            <p className="text-gray-600">Automated order processing and swift delivery within hospital premises.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="icon-placeholder mx-auto bg-accent/10">
              <Smartphone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-accent mt-4 mb-2">Comprehensive Digital Support</h3>
            <p className="text-gray-600">
              Digital bills, medication alerts, refill management, and post-purchase assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
