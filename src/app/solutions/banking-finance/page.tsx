import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export default function BankingFinanceSolutionsPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Banking & Finance Solutions</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Secure, Compliant <span className="text-blue-700">Financial Technology</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Regulatory-compliant DevOps and cloud solutions designed specifically for banking and financial institutions, ensuring security, compliance, and operational excellence.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">Get Financial Assessment</Link>
        </div>
      </section>
      {/* Why Banking & Finance Needs Specialized Solutions */}
      <section className="max-w-4xl mx-auto mb-16 px-4 relative">
        <div className="bg-white rounded-2xl shadow-lg p-10 border-l-8 border-blue-500 flex flex-col items-center relative z-10">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-4 flex items-center gap-2"><Image src="/icons/fintech.svg" alt="Banking & Finance" width={28} height={28} />Why Banking & Finance Needs Specialized Solutions</h2>
          <p className="text-lg text-gray-700 text-center">Financial institutions face unique challenges: strict regulatory requirements, sensitive financial data, real-time transaction processing, and zero-tolerance for downtime. Our solutions are built with these critical requirements in mind.</p>
        </div>
      </section>

      {/* AI-Powered Financial Management */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI-Powered Financial Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Intelligent financial management systems that leverage artificial intelligence to optimize operations, enhance security, and maximize financial performance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Smart Risk Management</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Credit Risk Assessment</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered credit scoring</li>
                    <li>• Real-time risk evaluation</li>
                    <li>• Predictive default modeling</li>
                    <li>• Portfolio risk analysis</li>
                    <li>• Dynamic risk adjustment</li>
                    <li>• Automated underwriting</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Fraud Detection</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Real-time fraud monitoring</li>
                    <li>• Behavioral pattern analysis</li>
                    <li>• Anomaly detection algorithms</li>
                    <li>• Transaction risk scoring</li>
                    <li>• Automated fraud alerts</li>
                    <li>• Machine learning models</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Financial Intelligence</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Investment Analytics</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Portfolio optimization algorithms</li>
                    <li>• Market trend analysis</li>
                    <li>• Asset allocation strategies</li>
                    <li>• Performance prediction models</li>
                    <li>• Risk-adjusted returns</li>
                    <li>• Automated rebalancing</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Regulatory Compliance</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated compliance monitoring</li>
                    <li>• Regulatory reporting automation</li>
                    <li>• Audit trail management</li>
                    <li>• KYC/AML automation</li>
                    <li>• Real-time compliance alerts</li>
                    <li>• Policy enforcement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Solutions for Banking & Finance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI Agent Solutions for Banking & Finance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced AI agents designed to automate financial operations, enhance customer service, and optimize banking processes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Virtual Financial Advisors</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">AI Financial Planning</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Personalized financial advice</li>
                    <li>• Investment recommendations</li>
                    <li>• Retirement planning assistance</li>
                    <li>• Budget optimization</li>
                    <li>• Goal-based planning</li>
                    <li>• Tax optimization strategies</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Customer Service AI</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 24/7 banking assistance</li>
                    <li>• Account balance inquiries</li>
                    <li>• Transaction history access</li>
                    <li>• Payment processing help</li>
                    <li>• Loan application assistance</li>
                    <li>• Multi-language support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Banking Operations AI</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-2">Loan Processing</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated loan applications</li>
                    <li>• Document verification</li>
                    <li>• Credit assessment automation</li>
                    <li>• Approval workflow optimization</li>
                    <li>• Loan servicing automation</li>
                    <li>• Payment processing</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Trading & Investment</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Algorithmic trading systems</li>
                    <li>• Market analysis automation</li>
                    <li>• Portfolio rebalancing</li>
                    <li>• Risk management automation</li>
                    <li>• Performance monitoring</li>
                    <li>• Automated reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Financial Analytics */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Advanced Financial Analytics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive analytics solutions that provide deep insights into financial performance, market trends, and customer behavior.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Customer Intelligence</h3>
              <div className="space-y-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-700 mb-2">Behavioral Analytics</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Customer spending patterns</li>
                    <li>• Banking behavior analysis</li>
                    <li>• Product usage tracking</li>
                    <li>• Customer lifetime value</li>
                    <li>• Churn prediction models</li>
                    <li>• Cross-selling opportunities</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Market Intelligence</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Market trend analysis</li>
                    <li>• Economic indicator tracking</li>
                    <li>• Competitive analysis</li>
                    <li>• Interest rate impact</li>
                    <li>• Currency fluctuation monitoring</li>
                    <li>• Regulatory impact assessment</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Predictive Intelligence</h3>
              <div className="space-y-4">
                <div className="bg-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-700 mb-2">Financial Forecasting</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Revenue prediction models</li>
                    <li>• Cash flow forecasting</li>
                    <li>• Profit margin analysis</li>
                    <li>• Capital requirement planning</li>
                    <li>• Investment return prediction</li>
                    <li>• Economic scenario modeling</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Risk Intelligence</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Credit risk prediction</li>
                    <li>• Market risk assessment</li>
                    <li>• Operational risk monitoring</li>
                    <li>• Liquidity risk analysis</li>
                    <li>• Stress testing automation</li>
                    <li>• Capital adequacy modeling</li>
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
              <li>Regulatory compliance (SOX, PCI DSS)</li>
              <li>Enhanced security and fraud protection</li>
              <li>24/7 availability and reliability</li>
              <li>Reduced operational costs</li>
              <li>Scalable infrastructure</li>
              <li>AI-powered risk management</li>
              <li>Automated compliance monitoring</li>
              <li>Predictive financial analytics</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Use Cases</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 text-left">
              <li>Digital banking platforms</li>
              <li>Payment processing systems</li>
              <li>Risk management solutions</li>
              <li>Compliance reporting tools</li>
              <li>Investment management platforms</li>
              <li>AI-powered financial advisors</li>
              <li>Automated trading systems</li>
              <li>Fraud detection platforms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Transform Your Financial Business?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join the digital transformation revolution in banking and finance with our comprehensive AI-powered solutions.
            </p>
          </div>
          <ContactForm 
            title="Get Banking & Finance Solution Quote"
            subtitle="Tell us about your financial services business and requirements."
            defaultPosition="Banking & Finance Solutions"
            emailSubject="Banking & Finance Solutions Inquiry"
            placeholder="Describe your financial services business, current challenges, and specific requirements for our banking and finance solutions..."
          />
        </div>
      </section>
    </div>
  );
} 