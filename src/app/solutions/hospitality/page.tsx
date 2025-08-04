import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export default function HospitalitySolutionsPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Hospitality Solutions</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Elevate Hospitality with <span className="text-blue-700">Digital Excellence</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Comprehensive DevOps and cloud solutions designed for hotels, resorts, and hospitality management systems to deliver exceptional guest experiences.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">Get Hospitality Assessment</Link>
        </div>
      </section>

      {/* Why Hospitality Needs Specialized Solutions */}
      <section className="max-w-4xl mx-auto mb-16 px-4 relative">
        <div className="bg-white rounded-2xl shadow-lg p-10 border-l-8 border-blue-500 flex flex-col items-center relative z-10">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-4 flex items-center gap-2"><Image src="/icons/hospitality.svg" alt="Hospitality" width={28} height={28} />Why Hospitality Needs Specialized Solutions</h2>
          <p className="text-lg text-gray-700 text-center">Hospitality platforms require 24/7 availability, seamless guest experiences, and integrated property management. Our solutions are optimized for hotel operations and guest satisfaction.</p>
        </div>
      </section>

      {/* DevOps Solutions for Hospitality */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-blue-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-blue-600 to-blue-400 p-8 md:p-10">
                <Image src="/icons/ci-cd.svg" alt="CI/CD" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">24/7 Availability</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Continuous Operations</h3>
                <p className="text-gray-700 mb-4">Zero-downtime deployment pipelines ensuring hotel systems remain operational around the clock for guest services.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-green-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-green-600 to-green-400 p-8 md:p-10">
                <Image src="/icons/automation.svg" alt="Automation" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Guest Service Automation</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Streamlined Operations</h3>
                <p className="text-gray-700 mb-4">Automated check-in/check-out processes, room service requests, and guest communication systems.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-yellow-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-yellow-500 to-yellow-300 p-8 md:p-10">
                <Image src="/icons/monitoring.svg" alt="Monitoring" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Property Monitoring</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Real-time Insights</h3>
                <p className="text-gray-700 mb-4">Comprehensive monitoring of hotel operations, guest satisfaction, and system performance for optimal service delivery.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-pink-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-pink-600 to-pink-400 p-8 md:p-10">
                <Image src="/icons/security.svg" alt="Security" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Guest Data Protection</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Privacy & Security</h3>
                <p className="text-gray-700 mb-4">Comprehensive security measures for guest information, payment processing, and GDPR compliance in hospitality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Solutions for Hospitality */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-blue-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-blue-600 to-blue-400 p-8 md:p-10">
                <Image src="/icons/cloud.svg" alt="Cloud" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Property Management</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Cloud-Based PMS</h3>
                <p className="text-gray-700 mb-4">Scalable property management systems in the cloud for reservations, room management, and guest services.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-green-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-green-600 to-green-400 p-8 md:p-10">
                <Image src="/icons/analytics.svg" alt="Analytics" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Hospitality Analytics</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Guest Insights</h3>
                <p className="text-gray-700 mb-4">Advanced analytics for occupancy rates, guest preferences, revenue optimization, and operational efficiency.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-yellow-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-yellow-500 to-yellow-300 p-8 md:p-10">
                <Image src="/icons/integration.svg" alt="Integration" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Multi-Platform Integration</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Seamless Connectivity</h3>
                <p className="text-gray-700 mb-4">Integration with booking platforms, payment gateways, and third-party hospitality services for comprehensive operations.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-pink-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-pink-600 to-pink-400 p-8 md:p-10">
                <Image src="/icons/mobile.svg" alt="Mobile" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Mobile Guest Services</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Digital Guest Experience</h3>
                <p className="text-gray-700 mb-4">Mobile-optimized guest portals for check-in, room service, concierge services, and personalized experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Enabled Hotel Management Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI-Enabled Hotel Management Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Intelligent hotel management systems that leverage artificial intelligence to optimize operations, enhance guest experiences, and maximize revenue.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Smart Property Management</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">AI-Powered PMS</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Intelligent room allocation and optimization</li>
                    <li>• Predictive maintenance scheduling</li>
                    <li>• Automated inventory management</li>
                    <li>• Smart energy consumption monitoring</li>
                    <li>• Real-time occupancy analytics</li>
                    <li>• Automated housekeeping coordination</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Revenue Optimization</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Dynamic pricing algorithms</li>
                    <li>• Demand forecasting and prediction</li>
                    <li>• Competitor rate monitoring</li>
                    <li>• Personalized pricing strategies</li>
                    <li>• Revenue maximization analytics</li>
                    <li>• Automated rate adjustments</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Guest Experience Enhancement</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Personalized Services</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered guest preference learning</li>
                    <li>• Personalized room recommendations</li>
                    <li>• Smart amenity suggestions</li>
                    <li>• Automated guest communication</li>
                    <li>• Intelligent concierge services</li>
                    <li>• Predictive guest needs analysis</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Operational Intelligence</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Staff workload optimization</li>
                    <li>• Service quality monitoring</li>
                    <li>• Guest satisfaction prediction</li>
                    <li>• Automated issue resolution</li>
                    <li>• Performance analytics</li>
                    <li>• Quality assurance automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Enabled Restaurant Management Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI-Enabled Restaurant Management Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Intelligent restaurant management systems that optimize operations, enhance customer experiences, and streamline food service operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Smart Kitchen Operations</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">Kitchen Intelligence</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered inventory management</li>
                    <li>• Predictive ingredient ordering</li>
                    <li>• Smart recipe optimization</li>
                    <li>• Automated food cost analysis</li>
                    <li>• Waste reduction algorithms</li>
                    <li>• Quality control automation</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Order Management</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Intelligent order routing</li>
                    <li>• Real-time kitchen coordination</li>
                    <li>• Automated order prioritization</li>
                    <li>• Smart table management</li>
                    <li>• Wait time prediction</li>
                    <li>• Capacity optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Customer Experience & Analytics</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-2">Customer Intelligence</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered customer preference learning</li>
                    <li>• Personalized menu recommendations</li>
                    <li>• Smart loyalty program management</li>
                    <li>• Automated customer feedback analysis</li>
                    <li>• Sentiment analysis for reviews</li>
                    <li>• Predictive customer behavior</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Business Analytics</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Sales performance prediction</li>
                    <li>• Menu optimization analytics</li>
                    <li>• Revenue trend analysis</li>
                    <li>• Staff performance monitoring</li>
                    <li>• Operational efficiency metrics</li>
                    <li>• Competitive analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Solutions for Hotels */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI Agent Solutions for Hotels</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced AI agents designed to enhance hotel operations, improve guest services, and automate hospitality processes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Virtual Hotel Concierge</h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2">Guest Service AI</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 24/7 virtual concierge services</li>
                    <li>• Natural language guest queries</li>
                    <li>• Multi-language support</li>
                    <li>• Automated room service ordering</li>
                    <li>• Smart amenity requests</li>
                    <li>• Context-aware guest assistance</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Intelligent Guest Support</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated check-in/check-out</li>
                    <li>• Smart room key management</li>
                    <li>• Voice-activated room controls</li>
                    <li>• Automated billing assistance</li>
                    <li>• Guest preference learning</li>
                    <li>• Proactive service recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Operational AI Agents</h3>
              <div className="space-y-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-700 mb-2">Staff Assistance</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated task assignment</li>
                    <li>• Smart scheduling optimization</li>
                    <li>• Performance monitoring</li>
                    <li>• Training recommendation systems</li>
                    <li>• Quality assurance automation</li>
                    <li>• Incident response coordination</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Predictive Operations</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Occupancy prediction</li>
                    <li>• Maintenance scheduling</li>
                    <li>• Energy consumption optimization</li>
                    <li>• Supply chain automation</li>
                    <li>• Revenue forecasting</li>
                    <li>• Risk assessment and alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Solutions for Restaurants */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI Agent Solutions for Restaurants</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Intelligent AI agents designed to streamline restaurant operations, enhance customer service, and optimize food service management.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Virtual Restaurant Assistant</h3>
              <div className="space-y-4">
                <div className="bg-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-700 mb-2">Customer Service AI</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated order taking</li>
                    <li>• Menu recommendation engine</li>
                    <li>• Dietary restriction handling</li>
                    <li>• Multi-language order support</li>
                    <li>• Voice-activated ordering</li>
                    <li>• Smart upselling suggestions</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Table Management</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Intelligent table allocation</li>
                    <li>• Wait time prediction</li>
                    <li>• Reservation optimization</li>
                    <li>• Capacity planning</li>
                    <li>• Guest flow management</li>
                    <li>• Automated seating arrangements</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Kitchen & Operations AI</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-700 mb-2">Kitchen Intelligence</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated inventory tracking</li>
                    <li>• Smart ingredient ordering</li>
                    <li>• Recipe optimization</li>
                    <li>• Food safety monitoring</li>
                    <li>• Quality control automation</li>
                    <li>• Waste reduction algorithms</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Business Intelligence</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Sales trend analysis</li>
                    <li>• Menu performance optimization</li>
                    <li>• Staff productivity monitoring</li>
                    <li>• Cost analysis automation</li>
                    <li>• Revenue prediction</li>
                    <li>• Competitive pricing analysis</li>
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
              <li>24/7 system availability</li>
              <li>Enhanced guest satisfaction</li>
              <li>Operational efficiency</li>
              <li>Revenue optimization</li>
              <li>Scalable infrastructure</li>
              <li>AI-powered personalization</li>
              <li>Automated service delivery</li>
              <li>Predictive business insights</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Use Cases</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 text-left">
              <li>Hotel property management systems</li>
              <li>Resort booking platforms</li>
              <li>Guest service applications</li>
              <li>Revenue management systems</li>
              <li>Hospitality analytics platforms</li>
              <li>AI-powered hotel concierge</li>
              <li>Restaurant management systems</li>
              <li>Kitchen automation solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Transform Your Hospitality Business?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join the digital transformation revolution in hospitality with our comprehensive AI-powered solutions.
            </p>
          </div>
          <ContactForm 
            title="Get Hospitality Solution Quote"
            subtitle="Tell us about your hospitality business and requirements."
            defaultPosition="Hospitality Solutions"
            emailSubject="Hospitality Solutions Inquiry"
            placeholder="Describe your hospitality business, current challenges, and specific requirements for our hospitality solutions..."
          />
        </div>
      </section>
    </div>
  );
} 