import Image from "next/image";
import Link from "next/link";


export default function RetailSolutionsPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Retail Solutions</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Transform Retail with <span className="text-blue-700">Digital Innovation</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Advanced DevOps and cloud solutions designed for retail chains, e-commerce platforms, and omnichannel retail technology to drive sales and customer satisfaction.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">Get Retail Assessment</Link>
        </div>
      </section>

      {/* Why Retail Needs Specialized Solutions */}
      <section className="max-w-4xl mx-auto mb-16 px-4 relative">
        <div className="bg-white rounded-2xl shadow-lg p-10 border-l-8 border-blue-500 flex flex-col items-center relative z-10">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-4 flex items-center gap-2"><Image src="/icons/retail.svg" alt="Retail" width={28} height={28} />Why Retail Needs Specialized Solutions</h2>
          <p className="text-lg text-gray-700 text-center">Retail platforms require high availability during peak shopping periods, seamless omnichannel experiences, and real-time inventory management. Our solutions are optimized for retail operations and customer engagement.</p>
        </div>
      </section>



      {/* AI-Powered Retail Management */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI-Powered Retail Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Intelligent retail management systems that leverage artificial intelligence to optimize operations, enhance customer experiences, and maximize sales performance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Smart Inventory Management</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Predictive Inventory</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered demand forecasting</li>
                    <li>• Automated reorder optimization</li>
                    <li>• Seasonal trend analysis</li>
                    <li>• Stock level prediction</li>
                    <li>• Supplier performance tracking</li>
                    <li>• Waste reduction algorithms</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Omnichannel Sync</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Real-time inventory synchronization</li>
                    <li>• Cross-channel availability</li>
                    <li>• Automated stock allocation</li>
                    <li>• Store-to-online integration</li>
                    <li>• Dynamic pricing optimization</li>
                    <li>• Location-based inventory</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Customer Experience Enhancement</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Personalized Shopping</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered product recommendations</li>
                    <li>• Customer behavior analysis</li>
                    <li>• Personalized marketing campaigns</li>
                    <li>• Smart search optimization</li>
                    <li>• Cross-selling algorithms</li>
                    <li>• Customer lifetime value prediction</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Smart Customer Service</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered chatbots</li>
                    <li>• Automated order processing</li>
                    <li>• Real-time customer support</li>
                    <li>• Proactive issue resolution</li>
                    <li>• Multi-language support</li>
                    <li>• Voice-activated shopping</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Solutions for Retail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI Agent Solutions for Retail</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced AI agents designed to automate retail operations, enhance customer service, and optimize sales processes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Virtual Shopping Assistants</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">AI Shopping Guides</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Intelligent product discovery</li>
                    <li>• Size and fit recommendations</li>
                    <li>• Style matching algorithms</li>
                    <li>• Virtual try-on experiences</li>
                    <li>• Personalized styling advice</li>
                    <li>• Trend analysis and suggestions</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Customer Support AI</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 24/7 automated support</li>
                    <li>• Order status tracking</li>
                    <li>• Return and exchange assistance</li>
                    <li>• Product information queries</li>
                    <li>• Payment processing help</li>
                    <li>• Loyalty program management</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Retail Operations AI</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-2">Sales Optimization</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Dynamic pricing strategies</li>
                    <li>• Promotional campaign optimization</li>
                    <li>• Sales forecasting and planning</li>
                    <li>• Customer segmentation</li>
                    <li>• Revenue maximization</li>
                    <li>• Competitive analysis</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Store Operations</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Staff scheduling optimization</li>
                    <li>• Store layout optimization</li>
                    <li>• Performance monitoring</li>
                    <li>• Quality control automation</li>
                    <li>• Loss prevention systems</li>
                    <li>• Energy consumption optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Analytics & Insights */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Advanced Analytics & Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive analytics solutions that provide deep insights into customer behavior, sales performance, and market trends.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Customer Intelligence</h3>
              <div className="space-y-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-700 mb-2">Behavioral Analytics</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Customer journey mapping</li>
                    <li>• Purchase pattern analysis</li>
                    <li>• Browsing behavior tracking</li>
                    <li>• Customer satisfaction metrics</li>
                    <li>• Churn prediction models</li>
                    <li>• Lifetime value calculation</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Market Intelligence</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Competitor price monitoring</li>
                    <li>• Market trend analysis</li>
                    <li>• Product performance tracking</li>
                    <li>• Seasonal demand patterns</li>
                    <li>• Geographic sales analysis</li>
                    <li>• Category performance insights</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Business Intelligence</h3>
              <div className="space-y-4">
                <div className="bg-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-700 mb-2">Performance Analytics</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Sales performance metrics</li>
                    <li>• Revenue trend analysis</li>
                    <li>• Profit margin optimization</li>
                    <li>• Store performance comparison</li>
                    <li>• Employee productivity tracking</li>
                    <li>• Operational efficiency metrics</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Predictive Intelligence</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Sales forecasting models</li>
                    <li>• Demand prediction algorithms</li>
                    <li>• Inventory optimization</li>
                    <li>• Cash flow forecasting</li>
                    <li>• Risk assessment</li>
                    <li>• Growth opportunity identification</li>
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
              <li>High availability during peak periods</li>
              <li>Seamless omnichannel experiences</li>
              <li>Real-time inventory management</li>
              <li>Enhanced customer engagement</li>
              <li>Scalable e-commerce infrastructure</li>
              <li>AI-powered personalization</li>
              <li>Predictive inventory management</li>
              <li>Automated customer service</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Use Cases</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 text-left">
              <li>E-commerce platforms</li>
              <li>Point-of-sale systems</li>
              <li>Inventory management systems</li>
              <li>Retail analytics platforms</li>
              <li>Omnichannel retail solutions</li>
              <li>AI-powered shopping assistants</li>
              <li>Predictive retail analytics</li>
              <li>Virtual shopping experiences</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Transform Your Retail Business?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join the digital transformation revolution in retail with our comprehensive AI-powered solutions.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Ready to Get Started?</h3>
            <p className="text-gray-700 text-center mb-6">Contact us to discuss your retail digital transformation needs.</p>
            <div className="text-center">
              <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 