"use client";

import Link from "next/link";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Healthcare",
      description: "Digital health solutions, telemedicine platforms, and patient management systems.",
      icon: "🏥",
      color: "blue",
      href: "/solutions/healthcare"
    },
    {
      title: "EdTech",
      description: "Learning management systems, virtual classrooms, and educational analytics platforms.",
      icon: "📚",
      color: "green",
      href: "/solutions/edtech"
    },
    {
      title: "Logistics",
      description: "Supply chain optimization, real-time tracking, and logistics management solutions.",
      icon: "🚚",
      color: "purple",
      href: "/solutions/logistics"
    },
    {
      title: "Retail",
      description: "E-commerce platforms, inventory management, and customer experience solutions.",
      icon: "🛍️",
      color: "orange",
      href: "/solutions/retail"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    green: "bg-green-100 text-green-800 border-green-200",
    purple: "bg-purple-100 text-purple-800 border-purple-200",
    orange: "bg-orange-100 text-orange-800 border-orange-200"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry Solutions</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Tailored digital solutions designed specifically for your industry needs and challenges
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand that each industry has unique challenges. Our solutions are built with industry-specific requirements in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-6 border-2 ${colorClasses[solution.color as keyof typeof colorClasses]}`}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{solution.title}</h3>
                <p className="text-gray-700 text-center text-sm mb-6">{solution.description}</p>
                <Link 
                  href={solution.href} 
                  className={`text-${solution.color}-600 font-semibold hover:text-${solution.color}-800 transition`}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Industry-Specific Solutions?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Generic solutions don't address industry-specific challenges. We build solutions that understand your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Deep Industry Knowledge</h3>
              <p className="text-gray-600">Our team understands the unique challenges, regulations, and workflows of each industry.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customized Workflows</h3>
              <p className="text-gray-600">Solutions that adapt to your existing processes rather than forcing you to change.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Compliance Ready</h3>
              <p className="text-gray-600">Built-in compliance features for industry-specific regulations and standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can address your unique challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </Link>
            <Link href="/ai-development" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Explore AI Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
