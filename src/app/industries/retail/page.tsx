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

      {/* DevOps Solutions for Retail */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-blue-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-blue-600 to-blue-400 p-8 md:p-10">
                <Image src="/icons/ci-cd.svg" alt="CI/CD" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Continuous Deployment</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Rapid E-commerce Updates</h3>
                <p className="text-gray-700 mb-4">Automated deployment pipelines for e-commerce platforms, ensuring new products, pricing, and features reach customers instantly.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-green-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-green-600 to-green-400 p-8 md:p-10">
                <Image src="/icons/automation.svg" alt="Automation" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">POS System Automation</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Automated Testing</h3>
                <p className="text-gray-700 mb-4">Automated testing for point-of-sale systems, ensuring reliability during high-traffic shopping events and peak sales periods.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-yellow-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-yellow-500 to-yellow-300 p-8 md:p-10">
                <Image src="/icons/monitoring.svg" alt="Monitoring" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Sales Event Monitoring</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Performance Tracking</h3>
                <p className="text-gray-700 mb-4">Comprehensive monitoring and alerting for retail systems during sales events, ensuring optimal performance and customer experience.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-pink-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-pink-600 to-pink-400 p-8 md:p-10">
                <Image src="/icons/security.svg" alt="Security" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Payment Security</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Secure Transactions</h3>
                <p className="text-gray-700 mb-4">Comprehensive security measures for payment processing, customer data protection, and PCI DSS compliance in retail.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Solutions for Retail */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-blue-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-blue-600 to-blue-400 p-8 md:p-10">
                <Image src="/icons/cloud.svg" alt="Cloud" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Cloud-Native E-commerce</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Scalable Platforms</h3>
                <p className="text-gray-700 mb-4">Cloud-native e-commerce platforms designed for high scalability, handling traffic spikes during sales events and seasonal peaks.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-green-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-green-600 to-green-400 p-8 md:p-10">
                <Image src="/icons/ai.svg" alt="AI" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Personalized Shopping</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">AI-Powered Retail</h3>
                <p className="text-gray-700 mb-4">Cloud AI services for personalized shopping experiences, recommendation engines, and customer behavior analysis.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-yellow-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-yellow-500 to-yellow-300 p-8 md:p-10">
                <Image src="/icons/inventory.svg" alt="Inventory" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Inventory Management</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Cloud-Based Inventory</h3>
                <p className="text-gray-700 mb-4">Real-time inventory management in the cloud for accurate stock tracking, automated reordering, and omnichannel inventory sync.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-pink-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-pink-600 to-pink-400 p-8 md:p-10">
                <Image src="/icons/analytics.svg" alt="Analytics" width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Retail Analytics</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Sales Insights</h3>
                <p className="text-gray-700 mb-4">Advanced analytics for sales performance, customer behavior, inventory optimization, and revenue forecasting.</p>
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
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 