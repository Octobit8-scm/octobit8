import Link from "next/link";

export default function DigitalMarketingSolutionsPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Back Navigation */}
      <section className="pt-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/solutions" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Solutions
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-green-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-green-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Digital Marketing Solutions</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Grow Faster with <span className="text-green-700">Data-Driven Marketing</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-3xl">SEO, social media, content, PPC, and analytics—everything you need to increase visibility, traffic, and conversions.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-green-600 via-green-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">Get Marketing Assessment</Link>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Comprehensive Digital Marketing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Tailored strategies and execution across channels to meet your growth goals and budget.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Search Engine Optimization (SEO)</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Technical and on-page SEO</li>
                <li>• Keyword research and clustering</li>
                <li>• Site health fixes and Core Web Vitals</li>
                <li>• Content optimization & internal linking</li>
                <li>• Local SEO and Google Business Profile</li>
                <li>• SEO analytics and reporting</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Paid Media & PPC</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Google Ads and Microsoft Ads</li>
                <li>• Meta (Facebook/Instagram) campaigns</li>
                <li>• LinkedIn lead generation</li>
                <li>• Remarketing and lookalike audiences</li>
                <li>• A/B testing and landing page CRO</li>
                <li>• Budget optimization & ROI tracking</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Content & Social Media</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Editorial calendar and blog strategy</li>
                <li>• Short-form video and creatives</li>
                <li>• Social channel growth plans</li>
                <li>• Community management</li>
                <li>• Email marketing and automation</li>
                <li>• Brand storytelling and assets</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-emerald-500">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Analytics & Conversion</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• GA4 and Search Console setup</li>
                <li>• Event and conversion tracking</li>
                <li>• Funnel analysis and dashboards</li>
                <li>• CRO experiments (A/B, multivariate)</li>
                <li>• KPI reporting and insights</li>
                <li>• Attribution and LTV modeling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Engagement Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A focused, iterative approach that turns strategy into measurable growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Audit", desc: "Channel audit, analytics review, and opportunity mapping" },
              { step: 2, title: "Plan", desc: "Quarterly roadmap, KPIs, budgets, and creative plan" },
              { step: 3, title: "Launch", desc: "Channel setup, campaigns, content, and tracking" },
              { step: 4, title: "Optimize", desc: "Weekly experiments, CRO, and scaling what works" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Accelerate Your Growth?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Let&apos;s build a channel mix that drives predictable pipeline and revenue.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Consultation</Link>
            <Link href="/digital-marketing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors">Explore Marketing Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
