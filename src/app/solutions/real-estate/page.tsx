import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export default function RealEstateSolutionsPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Real Estate Solutions</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Transform Real Estate with <span className="text-blue-700">Digital Innovation</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Comprehensive DevOps and cloud solutions designed for real estate agencies, property management companies, and proptech platforms to streamline operations and enhance client experiences.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">Get Real Estate Assessment</Link>
        </div>
      </section>

      {/* Why Real Estate Needs Specialized Solutions */}
      <section className="max-w-4xl mx-auto mb-16 px-4 relative">
        <div className="bg-white rounded-2xl shadow-lg p-10 border-l-8 border-blue-500 flex flex-col items-center relative z-10">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-4 flex items-center gap-2"><Image src="/icons/real-estate.svg" alt="Real Estate" width={28} height={28} />Why Real Estate Needs Specialized Solutions</h2>
          <p className="text-lg text-gray-700 text-center">Real estate platforms require secure data handling, seamless property management, and integrated client services. Our solutions are optimized for property transactions and client relationship management.</p>
        </div>
      </section>



      {/* AI-Powered Property Management */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI-Powered Property Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Intelligent property management systems that leverage artificial intelligence to optimize operations, enhance client experiences, and maximize property value.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Smart Property Analytics</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Market Intelligence</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered property valuation</li>
                    <li>• Market trend analysis</li>
                    <li>• Price prediction algorithms</li>
                    <li>• Neighborhood analysis</li>
                    <li>• Investment opportunity identification</li>
                    <li>• Risk assessment models</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Property Performance</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Rental yield optimization</li>
                    <li>• Occupancy rate prediction</li>
                    <li>• Maintenance cost forecasting</li>
                    <li>• Property appreciation tracking</li>
                    <li>• ROI calculation automation</li>
                    <li>• Portfolio performance analysis</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Client Experience Enhancement</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Personalized Services</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered property matching</li>
                    <li>• Personalized recommendations</li>
                    <li>• Client preference learning</li>
                    <li>• Smart search optimization</li>
                    <li>• Virtual property tours</li>
                    <li>• Automated client communication</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Transaction Automation</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated document processing</li>
                    <li>• Smart contract generation</li>
                    <li>• Payment processing automation</li>
                    <li>• Title search automation</li>
                    <li>• Escrow management</li>
                    <li>• Compliance checking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Solutions for Real Estate */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI Agent Solutions for Real Estate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced AI agents designed to automate real estate operations, enhance client services, and optimize property management processes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Virtual Real Estate Assistants</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">AI Property Guides</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Intelligent property search</li>
                    <li>• Neighborhood information</li>
                    <li>• School district analysis</li>
                    <li>• Transportation accessibility</li>
                    <li>• Local amenities mapping</li>
                    <li>• Investment potential assessment</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Client Support AI</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 24/7 property inquiries</li>
                    <li>• Viewing appointment scheduling</li>
                    <li>• Mortgage calculator assistance</li>
                    <li>• Property comparison tools</li>
                    <li>• Market update notifications</li>
                    <li>• Document assistance</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Real Estate Operations AI</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-2">Lead Management</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated lead scoring</li>
                    <li>• Lead qualification automation</li>
                    <li>• Follow-up scheduling</li>
                    <li>• Client nurturing campaigns</li>
                    <li>• Conversion prediction</li>
                    <li>• Pipeline optimization</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Property Management</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Maintenance scheduling</li>
                    <li>• Tenant screening automation</li>
                    <li>• Rent collection optimization</li>
                    <li>• Property inspection coordination</li>
                    <li>• Vendor management</li>
                    <li>• Energy efficiency monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Market Intelligence */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Advanced Market Intelligence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive market analysis solutions that provide deep insights into property trends, investment opportunities, and market dynamics.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Market Analytics</h3>
              <div className="space-y-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-700 mb-2">Trend Analysis</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Price trend forecasting</li>
                    <li>• Market cycle analysis</li>
                    <li>• Supply-demand dynamics</li>
                    <li>• Seasonal pattern recognition</li>
                    <li>• Economic impact assessment</li>
                    <li>• Regional market comparison</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Investment Intelligence</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• ROI prediction models</li>
                    <li>• Risk assessment algorithms</li>
                    <li>• Portfolio optimization</li>
                    <li>• Tax benefit analysis</li>
                    <li>• Financing optimization</li>
                    <li>• Exit strategy planning</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Predictive Intelligence</h3>
              <div className="space-y-4">
                <div className="bg-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-700 mb-2">Property Valuation</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated appraisal systems</li>
                    <li>• Comparative market analysis</li>
                    <li>• Value appreciation prediction</li>
                    <li>• Renovation impact assessment</li>
                    <li>• Market value tracking</li>
                    <li>• Investment potential scoring</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Market Forecasting</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Market bubble detection</li>
                    <li>• Growth area identification</li>
                    <li>• Gentrification prediction</li>
                    <li>• Infrastructure impact analysis</li>
                    <li>• Demographic trend analysis</li>
                    <li>• Policy impact assessment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Use Cases */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Key Benefits</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 text-left">
              <li>Streamlined property management</li>
              <li>Enhanced client experiences</li>
              <li>Secure transaction handling</li>
              <li>Market intelligence insights</li>
              <li>Scalable real estate platforms</li>
              <li>AI-powered property matching</li>
              <li>Predictive market analysis</li>
              <li>Automated transaction processing</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Use Cases</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 text-left">
              <li>Property management systems</li>
              <li>Real estate listing platforms</li>
              <li>Client relationship management</li>
              <li>Transaction management systems</li>
              <li>Real estate analytics platforms</li>
              <li>AI-powered property assistants</li>
              <li>Predictive market intelligence</li>
              <li>Virtual property tours</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Transform Your Real Estate Business?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join the digital transformation revolution in real estate with our comprehensive AI-powered solutions.
            </p>
          </div>
          <ContactForm 
            title="Get Real Estate Solution Quote"
            subtitle="Tell us about your real estate business and requirements."
            defaultPosition="Real Estate Solutions"
            emailSubject="Real Estate Solutions Inquiry"
            placeholder="Describe your real estate business, current challenges, and specific requirements for our real estate solutions..."
          />
        </div>
      </section>
    </div>
  );
} 