import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Staffing Services | Octobit8",
  description: "Find the perfect IT talent for your organization with our comprehensive staffing solutions including permanent, contract, and project-based hiring.",
};

export default function ITStaffingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            IT Staffing Solutions
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8">
            Connect with top-tier IT professionals and build high-performing teams that drive your business forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Hire Talent
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Find Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Staffing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive staffing solutions tailored to meet your organization&apos;s unique talent requirements and project needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Permanent Hiring */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Permanent Hiring</h3>
              <p className="text-gray-600 mb-4">
                Build long-term relationships with skilled professionals who become integral parts of your team.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Full-time positions</li>
                <li>• Comprehensive screening</li>
                <li>• Cultural fit assessment</li>
                <li>• Long-term retention support</li>
              </ul>
            </div>

            {/* Contract Staffing */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contract Staffing</h3>
              <p className="text-gray-600 mb-4">
                Flexible staffing solutions for project-based work, seasonal demands, and specialized skill requirements.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Project-based contracts</li>
                <li>• Flexible duration</li>
                <li>• Specialized expertise</li>
                <li>• Cost-effective solutions</li>
              </ul>
            </div>

            {/* Executive Search */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Executive Search</h3>
              <p className="text-gray-600 mb-4">
                Find senior-level executives and leadership talent to drive your organization&apos;s strategic initiatives.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• C-level positions</li>
                <li>• Leadership roles</li>
                <li>• Strategic expertise</li>
                <li>• Industry knowledge</li>
              </ul>
            </div>

            {/* Offshore Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Offshore Development</h3>
              <p className="text-gray-600 mb-4">
                Access global talent pools and cost-effective development teams for your software projects.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Global talent access</li>
                <li>• Cost optimization</li>
                <li>• 24/7 development</li>
                <li>• Quality assurance</li>
              </ul>
            </div>

            {/* Technical Assessment */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Assessment</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive evaluation of technical skills, problem-solving abilities, and cultural fit.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Skill evaluation</li>
                <li>• Coding challenges</li>
                <li>• Behavioral interviews</li>
                <li>• Reference checks</li>
              </ul>
            </div>

            {/* Managed Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Managed Services</h3>
              <p className="text-gray-600 mb-4">
                Complete team management including recruitment, onboarding, performance monitoring, and retention.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• End-to-end management</li>
                <li>• Performance tracking</li>
                <li>• Team development</li>
                <li>• Risk mitigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access to professionals skilled in the latest technologies and frameworks across all major domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
              <p className="text-sm text-gray-600">React, Angular, Vue.js, Next.js</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
              <p className="text-sm text-gray-600">Node.js, Python, Java, .NET</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Mobile</h3>
              <p className="text-sm text-gray-600">React Native, Flutter, iOS, Android</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">DevOps</h3>
              <p className="text-sm text-gray-600">AWS, Azure, Docker, Kubernetes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Data Science</h3>
              <p className="text-sm text-gray-600">Python, R, ML, AI, Big Data</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Cybersecurity</h3>
              <p className="text-sm text-gray-600">Penetration Testing, SOC, Compliance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Cloud</h3>
              <p className="text-sm text-gray-600">AWS, Azure, GCP, Multi-cloud</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Blockchain</h3>
              <p className="text-sm text-gray-600">Ethereum, Hyperledger, Smart Contracts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined process designed to find the perfect match for your organization quickly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Requirement Analysis</h3>
              <p className="text-gray-600">Understanding your specific needs, culture, and technical requirements</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Talent Sourcing</h3>
              <p className="text-gray-600">Leveraging our extensive network and databases to find qualified candidates</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Screening & Assessment</h3>
              <p className="text-gray-600">Technical evaluation, skill assessment, and cultural fit analysis</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Placement & Support</h3>
              <p className="text-gray-600">Successful onboarding and ongoing support for optimal performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Success Metrics
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Proven track record of successful placements and satisfied clients across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-200">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-purple-200">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">48hrs</div>
              <div className="text-purple-200">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-purple-200">Active Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let&apos;s discuss your staffing needs and find the perfect talent to drive your organization&apos;s success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
