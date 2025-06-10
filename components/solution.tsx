import { Briefcase, ScanLine, Truck, FileText, Activity, Zap, Box, Cpu } from "lucide-react"

export default function Solution() {
  return (
    <section id="solution" className="py-32 font-sans bg-gradient-to-b from-cyan-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-4">Our Innovative Solution</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-10 rounded-full"></div>

        <p className="text-lg text-center text-blue-800 max-w-2xl mx-auto mb-12">
          Bridging the gap from <span className="font-semibold text-blue-600">prescription to cure</span> with our
          powerful <span className="font-semibold text-cyan-600">B2B2C Model</span>.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
          <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg shadow-sm">Hospitals (B2B)</span>
          <span className="text-2xl text-blue-400 md:hidden">&darr;</span>
          <span className="text-2xl text-blue-400 hidden md:inline">&rarr;</span>
          <span className="bg-cyan-600 text-white px-6 py-2 rounded-full text-lg shadow-sm">Patients (B2C)</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Virtual Pharmacy Kiosks */}
          <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white p-8 rounded-3xl shadow-md border border-blue-200 hover:shadow-blue-200 transition duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-blue-200">
                <Briefcase className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 ml-4">Virtual Pharmacy Kiosks</h3>
            </div>

            <p className="text-blue-800 mb-4">
              Perfect for hospitals without existing pharmacies or expanding access points.
            </p>

            <h4 className="font-semibold text-blue-900 mb-3">How it works:</h4>
            <ul className="space-y-3 text-blue-700 list-none pl-0">
              <li className="flex items-start gap-2">
                <ScanLine className="w-5 h-5 text-blue-600 mt-1" />
                <span>
                  Patients scan prescriptions at kiosks using <strong>AI OCR & NLP</strong> for handwritten accuracy.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Truck className="w-5 h-5 text-blue-600 mt-1" />
                <span>Orders are auto-assigned to the nearest partner pharmacy or dark store.</span>
              </li>
              <li className="flex items-start gap-2">
                <Truck className="w-5 h-5 text-blue-600 mt-1" />
                <span>Medicines delivered within 10 minutes to hospital beds or lobbies.</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <span>Digital bills, usage instructions, refill alerts, and post-purchase support are provided.</span>
              </li>
            </ul>
          </div>

          {/* Smart Pharmacy Integration */}
          <div className="bg-gradient-to-br from-cyan-100 via-cyan-50 to-white p-8 rounded-3xl shadow-md border border-cyan-200 hover:shadow-cyan-200 transition duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-cyan-200">
                <Activity className="h-6 w-6 text-cyan-700" />
              </div>
              <h3 className="text-2xl font-semibold text-cyan-900 ml-4">Smart Pharmacy Integration</h3>
            </div>

            <p className="text-cyan-800 mb-4">Ideal for hospitals with pharmacies that are ready for a digital leap.</p>

            <h4 className="font-semibold text-cyan-900 mb-3">How it works:</h4>
            <ul className="space-y-3 text-cyan-700 list-disc list-inside">
              <li className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-600" />
                Hospital-owned, MediKloud-managed pharmacies.
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-600" />
                Live dashboards for hospital admins with performance metrics.
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-600" />
                Auto-ordering via integration with HMS and insurance providers.
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-600" />
                Fast-dispensing counters to eliminate queues and delays.
              </li>
              <li className="flex items-center gap-2">
                <Box className="w-5 h-5 text-cyan-600" />
                Real-time inventory with predictive AI-powered restocking.
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-600" />
                Includes all benefits of virtual pharmacy kiosks.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
