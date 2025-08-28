import Image from "next/image";
import Link from "next/link";


export default function LogisticsSolutionsPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Logistics Solutions</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Optimize Supply Chain with <span className="text-blue-700">Smart Technology</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Advanced DevOps and cloud solutions designed for logistics companies, supply chain management, and transportation technology to streamline operations.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">Get Logistics Assessment</Link>
        </div>
      </section>

      {/* Why Logistics Needs Specialized Solutions */}
      <section className="max-w-4xl mx-auto mb-16 px-4 relative">
        <div className="bg-white rounded-2xl shadow-lg p-10 border-l-8 border-blue-500 flex flex-col items-center relative z-10">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-4 flex items-center gap-2"><Image src="/icons/logistics.svg" alt="Logistics" width={28} height={28} />Why Logistics Needs Specialized Solutions</h2>
          <p className="text-lg text-gray-700 text-center">Logistics platforms require real-time tracking, complex route optimization, and seamless integration with IoT devices. Our solutions are optimized for supply chain efficiency and operational excellence.</p>
        </div>
      </section>

      {/* DevOps Solutions for Logistics */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-blue-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-blue-600 to-blue-400 p-8 md:p-10">
                <Image src="/icons/ci-cd.svg" alt="CI/CD" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Fleet Management Updates</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Automated Fleet Deployment</h3>
                <p className="text-gray-700 mb-4">Automated deployment pipelines for fleet management systems, ensuring real-time updates reach drivers and vehicles instantly.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-green-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-green-600 to-green-400 p-8 md:p-10">
                <Image src="/icons/automation.svg" alt="Automation" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Real-time Tracking</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">CI/CD for Tracking</h3>
                <p className="text-gray-700 mb-4">Continuous integration and deployment for real-time tracking systems, ensuring seamless updates to tracking algorithms and features.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-yellow-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-yellow-500 to-yellow-300 p-8 md:p-10">
                <Image src="/icons/container.svg" alt="Container" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Microservices for Logistics</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Containerized Solutions</h3>
                <p className="text-gray-700 mb-4">Containerized microservices architecture for logistics applications, enabling scalable and maintainable supply chain systems.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-pink-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-pink-600 to-pink-400 p-8 md:p-10">
                <Image src="/icons/monitoring.svg" alt="Monitoring" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Supply Chain Monitoring</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Operational Visibility</h3>
                <p className="text-gray-700 mb-4">Comprehensive monitoring of supply chain operations, delivery performance, and system health for optimal logistics management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Solutions for Logistics */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-blue-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-blue-600 to-blue-400 p-8 md:p-10">
                <Image src="/icons/iot.svg" alt="IoT" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">IoT Data Processing</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Cloud IoT Integration</h3>
                <p className="text-gray-700 mb-4">Scalable cloud infrastructure for processing IoT data from sensors, GPS devices, and smart logistics equipment.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-green-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-green-600 to-green-400 p-8 md:p-10">
                <Image src="/icons/ai.svg" alt="AI" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Route Optimization</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">AI-Powered Routing</h3>
                <p className="text-gray-700 mb-4">Cloud AI services for route optimization, traffic analysis, and dynamic delivery scheduling to maximize efficiency.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-yellow-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-yellow-500 to-yellow-300 p-8 md:p-10">
                <Image src="/icons/cloud.svg" alt="Cloud" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Scalable Order Management</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Cloud-Based Operations</h3>
                <p className="text-gray-700 mb-4">Scalable order management systems in the cloud for handling high-volume logistics operations and peak demand periods.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-pink-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-pink-600 to-pink-400 p-8 md:p-10">
                <Image src="/icons/analytics.svg" alt="Analytics" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Logistics Analytics</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Performance Insights</h3>
                <p className="text-gray-700 mb-4">Advanced analytics for delivery performance, cost optimization, and supply chain efficiency improvements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Fleet Management */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI-Powered Fleet Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Intelligent fleet management systems that leverage artificial intelligence to optimize vehicle operations, reduce costs, and enhance driver safety.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Intelligent Vehicle Operations</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Predictive Maintenance</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered engine health monitoring</li>
                    <li>• Predictive maintenance scheduling</li>
                    <li>• Real-time vehicle diagnostics</li>
                    <li>• Automated service alerts</li>
                    <li>• Fuel efficiency optimization</li>
                    <li>• Tire wear prediction</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Driver Safety & Performance</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Driver behavior analysis</li>
                    <li>• Fatigue detection systems</li>
                    <li>• Real-time safety alerts</li>
                    <li>• Performance scoring algorithms</li>
                    <li>• Training recommendation systems</li>
                    <li>• Risk assessment automation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Smart Fleet Optimization</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Route Intelligence</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered route optimization</li>
                    <li>• Real-time traffic analysis</li>
                    <li>• Dynamic route adjustments</li>
                    <li>• Weather impact prediction</li>
                    <li>• Fuel-efficient routing</li>
                    <li>• Multi-stop optimization</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Fleet Analytics</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Vehicle utilization optimization</li>
                    <li>• Cost analysis and forecasting</li>
                    <li>• Performance benchmarking</li>
                    <li>• Capacity planning algorithms</li>
                    <li>• ROI optimization</li>
                    <li>• Asset lifecycle management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Solutions for Logistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI Agent Solutions for Logistics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced AI agents designed to automate logistics operations, enhance decision-making, and optimize supply chain processes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Intelligent Supply Chain Agents</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">Demand Forecasting</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered demand prediction</li>
                    <li>• Seasonal trend analysis</li>
                    <li>• Market demand forecasting</li>
                    <li>• Inventory optimization</li>
                    <li>• Supply chain risk assessment</li>
                    <li>• Automated reorder triggers</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Warehouse Automation</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Intelligent inventory management</li>
                    <li>• Automated picking optimization</li>
                    <li>• Smart storage allocation</li>
                    <li>• Quality control automation</li>
                    <li>• Space utilization optimization</li>
                    <li>• Automated sorting systems</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Operational AI Agents</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-2">Customer Service AI</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated order processing</li>
                    <li>• Real-time delivery updates</li>
                    <li>• Intelligent customer support</li>
                    <li>• Proactive issue resolution</li>
                    <li>• Multi-language support</li>
                    <li>• Personalized notifications</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Decision Support</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Real-time operational insights</li>
                    <li>• Automated decision making</li>
                    <li>• Performance optimization</li>
                    <li>• Cost reduction strategies</li>
                    <li>• Resource allocation optimization</li>
                    <li>• Risk mitigation automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tracking Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Advanced Tracking Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive tracking solutions that provide real-time visibility, intelligent monitoring, and predictive analytics for logistics operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Real-Time Asset Tracking</h3>
              <div className="space-y-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-700 mb-2">GPS & IoT Integration</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Real-time GPS tracking</li>
                    <li>• IoT sensor integration</li>
                    <li>• Temperature monitoring</li>
                    <li>• Humidity and condition tracking</li>
                    <li>• Shock and vibration detection</li>
                    <li>• Battery life optimization</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Smart Notifications</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated status updates</li>
                    <li>• Geofencing alerts</li>
                    <li>• Delivery confirmation</li>
                    <li>• Exception handling</li>
                    <li>• ETA predictions</li>
                    <li>• Route deviation alerts</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Intelligent Monitoring & Analytics</h3>
              <div className="space-y-4">
                <div className="bg-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-700 mb-2">Performance Analytics</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Delivery performance metrics</li>
                    <li>• Route efficiency analysis</li>
                    <li>• Driver productivity tracking</li>
                    <li>• Fuel consumption monitoring</li>
                    <li>• Maintenance cost analysis</li>
                    <li>• Customer satisfaction metrics</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Predictive Intelligence</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Delivery time prediction</li>
                    <li>• Traffic pattern analysis</li>
                    <li>• Weather impact forecasting</li>
                    <li>• Demand prediction</li>
                    <li>• Capacity planning</li>
                    <li>• Risk assessment</li>
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
              <li>Real-time tracking and visibility</li>
              <li>Optimized route planning</li>
              <li>Reduced operational costs</li>
              <li>Improved delivery efficiency</li>
              <li>Scalable infrastructure</li>
              <li>AI-powered optimization</li>
              <li>Predictive maintenance</li>
              <li>Enhanced driver safety</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Use Cases</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 text-left">
              <li>Fleet management systems</li>
              <li>Last-mile delivery platforms</li>
              <li>Warehouse management systems</li>
              <li>Supply chain tracking</li>
              <li>Logistics analytics platforms</li>
              <li>AI-powered fleet optimization</li>
              <li>Intelligent tracking applications</li>
              <li>Automated supply chain agents</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Transform Your Logistics Operations?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join the digital transformation revolution in logistics with our comprehensive AI-powered solutions.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Ready to Get Started?</h3>
            <p className="text-gray-700 text-center mb-6">Contact us to discuss your logistics digital transformation needs.</p>
            <div className="text-center">
              <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-800 transition">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 