import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export default function TravelSolutionsPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Travel Solutions</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Transform Travel with <span className="text-blue-700">Digital Innovation</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Scalable, high-performance DevOps and cloud solutions designed for travel agencies, booking platforms, and tourism technology companies.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">Get Travel Assessment</Link>
        </div>
      </section>

      {/* Why Travel Needs Specialized Solutions */}
      <section className="max-w-4xl mx-auto mb-16 px-4 relative">
        <div className="bg-white rounded-2xl shadow-lg p-10 border-l-8 border-blue-500 flex flex-col items-center relative z-10">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-4 flex items-center gap-2"><Image src="/icons/travel.svg" alt="Travel" width={28} height={28} />Why Travel Needs Specialized Solutions</h2>
          <p className="text-lg text-gray-700 text-center">Travel platforms require high availability, real-time data processing, and seamless user experiences across global markets. Our solutions are optimized for booking systems and travel technology.</p>
        </div>
      </section>

      {/* DevOps Solutions for Travel */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-blue-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-blue-600 to-blue-400 p-8 md:p-10">
                <Image src="/icons/ci-cd.svg" alt="CI/CD" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Continuous Deployment</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Rapid Booking Updates</h3>
                <p className="text-gray-700 mb-4">Automated deployment pipelines for travel booking systems, ensuring new features and pricing updates reach customers instantly.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-green-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-green-600 to-green-400 p-8 md:p-10">
                <Image src="/icons/automation.svg" alt="Automation" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Peak Load Management</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Seasonal Scaling</h3>
                <p className="text-gray-700 mb-4">Automated scaling for travel platforms during peak booking seasons, holidays, and promotional periods.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-yellow-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-yellow-500 to-yellow-300 p-8 md:p-10">
                <Image src="/icons/monitoring.svg" alt="Monitoring" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Real-time Monitoring</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Booking Analytics</h3>
                <p className="text-gray-700 mb-4">Real-time monitoring of booking patterns, user behavior, and system performance to optimize travel experiences.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-pink-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-pink-600 to-pink-400 p-8 md:p-10">
                <Image src="/icons/security.svg" alt="Security" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Payment Security</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Secure Transactions</h3>
                <p className="text-gray-700 mb-4">Comprehensive security measures for payment processing, customer data protection, and PCI DSS compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Solutions for Travel */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-blue-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-blue-600 to-blue-400 p-8 md:p-10">
                <Image src="/icons/cloud.svg" alt="Cloud" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Global Booking Platform</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Worldwide Availability</h3>
                <p className="text-gray-700 mb-4">Multi-region cloud infrastructure ensuring fast, reliable booking experiences for travelers worldwide.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-green-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-green-600 to-green-400 p-8 md:p-10">
                <Image src="/icons/analytics.svg" alt="Analytics" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Travel Analytics</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Market Insights</h3>
                <p className="text-gray-700 mb-4">Advanced analytics for travel trends, customer preferences, and dynamic pricing optimization.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-yellow-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-yellow-500 to-yellow-300 p-8 md:p-10">
                <Image src="/icons/integration.svg" alt="Integration" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">API Integration</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Third-party Connectivity</h3>
                <p className="text-gray-700 mb-4">Seamless integration with airlines, hotels, car rental services, and travel APIs for comprehensive booking solutions.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-pink-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-pink-600 to-pink-400 p-8 md:p-10">
                <Image src="/icons/mobile.svg" alt="Mobile" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Mobile Optimization</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">On-the-Go Booking</h3>
                <p className="text-gray-700 mb-4">Optimized mobile experiences for travelers booking flights, hotels, and activities from anywhere in the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Travel Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI-Powered Travel Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Intelligent travel applications that leverage artificial intelligence to provide personalized experiences, smart recommendations, and automated travel planning.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Smart Travel Planning</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">AI Travel Assistant</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Personalized travel recommendations</li>
                    <li>• Smart itinerary planning</li>
                    <li>• Budget optimization suggestions</li>
                    <li>• Weather-based travel alerts</li>
                    <li>• Real-time travel updates</li>
                    <li>• Multi-language support</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Predictive Analytics</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Price prediction and alerts</li>
                    <li>• Demand forecasting</li>
                    <li>• Route optimization</li>
                    <li>• Travel pattern analysis</li>
                    <li>• Seasonal trend predictions</li>
                    <li>• Risk assessment for trips</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Intelligent Booking Systems</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">AI-Powered Search</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Natural language search queries</li>
                    <li>• Context-aware recommendations</li>
                    <li>• Multi-criteria optimization</li>
                    <li>• Smart filtering and sorting</li>
                    <li>• Voice-activated booking</li>
                    <li>• Image-based destination search</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Dynamic Pricing</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Real-time price optimization</li>
                    <li>• Competitor price monitoring</li>
                    <li>• Demand-based pricing</li>
                    <li>• Personalized pricing offers</li>
                    <li>• Revenue maximization</li>
                    <li>• Automated price updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Agency Management Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Travel Agency Management Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive management systems designed specifically for travel agencies to streamline operations, manage bookings, and enhance customer service.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Booking Management</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">Reservation System</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Flight booking management</li>
                    <li>• Hotel reservation tracking</li>
                    <li>• Car rental coordination</li>
                    <li>• Tour package bookings</li>
                    <li>• Group travel management</li>
                    <li>• Booking confirmation system</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Customer Management</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Customer profile management</li>
                    <li>• Travel history tracking</li>
                    <li>• Preference and loyalty programs</li>
                    <li>• Communication logs</li>
                    <li>• Customer feedback system</li>
                    <li>• Automated follow-ups</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Operations Management</h3>
              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-700 mb-2">Staff Management</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Agent performance tracking</li>
                    <li>• Commission calculation</li>
                    <li>• Workload distribution</li>
                    <li>• Training and certification</li>
                    <li>• Shift scheduling</li>
                    <li>• Performance analytics</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Financial Management</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Revenue tracking and reporting</li>
                    <li>• Commission management</li>
                    <li>• Expense tracking</li>
                    <li>• Profit margin analysis</li>
                    <li>• Tax calculation and reporting</li>
                    <li>• Financial forecasting</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Business Intelligence</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-2">Analytics & Reporting</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Sales performance analytics</li>
                    <li>• Market trend analysis</li>
                    <li>• Customer behavior insights</li>
                    <li>• Competitive analysis</li>
                    <li>• Automated reporting</li>
                    <li>• Real-time dashboards</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Marketing Tools</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Campaign management</li>
                    <li>• Email marketing automation</li>
                    <li>• Social media integration</li>
                    <li>• Lead generation tracking</li>
                    <li>• Promotional offer management</li>
                    <li>• ROI measurement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Solutions for Travel Industry */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI Agent Solutions for Travel Industry</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced AI agents and intelligent automation solutions designed to enhance travel experiences and streamline industry operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Virtual Travel Assistants</h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2">Conversational AI</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 24/7 customer support chatbots</li>
                    <li>• Natural language booking assistance</li>
                    <li>• Multi-language travel support</li>
                    <li>• Voice-activated travel queries</li>
                    <li>• Context-aware conversations</li>
                    <li>• Emotion recognition for better service</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Intelligent Recommendations</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Personalized travel suggestions</li>
                    <li>• AI-powered destination matching</li>
                    <li>• Smart itinerary optimization</li>
                    <li>• Budget-aware recommendations</li>
                    <li>• Seasonal travel insights</li>
                    <li>• Group travel coordination</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Automated Travel Operations</h3>
              <div className="space-y-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-700 mb-2">Process Automation</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated booking confirmations</li>
                    <li>• Smart document processing</li>
                    <li>• Travel insurance automation</li>
                    <li>• Visa and documentation assistance</li>
                    <li>• Automated travel alerts</li>
                    <li>• Smart itinerary generation</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Predictive Intelligence</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Flight delay predictions</li>
                    <li>• Weather impact analysis</li>
                    <li>• Travel risk assessment</li>
                    <li>• Demand forecasting</li>
                    <li>• Price trend predictions</li>
                    <li>• Capacity optimization</li>
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
              <li>Global scalability for worldwide travel</li>
              <li>High availability during peak seasons</li>
              <li>Real-time booking and pricing updates</li>
              <li>Secure payment processing</li>
              <li>Mobile-optimized experiences</li>
              <li>AI-powered personalization</li>
              <li>Automated travel assistance</li>
              <li>Intelligent business insights</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Use Cases</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 text-left">
              <li>Online travel agencies (OTAs)</li>
              <li>Flight booking platforms</li>
              <li>Hotel reservation systems</li>
              <li>Tour and activity booking</li>
              <li>Travel management platforms</li>
              <li>AI-powered travel assistants</li>
              <li>Travel agency management systems</li>
              <li>Intelligent booking engines</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Transform Your Travel Business?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join the digital transformation revolution in travel with our comprehensive AI-powered solutions.
            </p>
          </div>
          <ContactForm 
            title="Get Travel Solution Quote"
            subtitle="Tell us about your travel business and requirements."
            defaultPosition="Travel Solutions"
            emailSubject="Travel Solutions Inquiry"
            placeholder="Describe your travel business, current challenges, and specific requirements for our travel solutions..."
          />
        </div>
      </section>
    </div>
  );
} 