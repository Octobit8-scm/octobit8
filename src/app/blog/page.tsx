import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Octobit8 - Technology Insights & Industry Updates",
  description: "Stay updated with the latest technology trends, industry insights, and expert perspectives from our team of professionals.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Insights, trends, and expert perspectives on technology, digital transformation, and industry best practices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Latest Posts
            </button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular and insightful articles covering the latest in technology and business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Post 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-blue-600 font-semibold">Digital Transformation</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">5 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  The Future of AI in Enterprise: 2024 Trends and Predictions
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-600">Sarah Johnson</span>
                  </div>
                  <span className="text-sm text-gray-500">Dec 15, 2024</span>
                </div>
              </div>
            </div>

            {/* Featured Post 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-green-600 font-semibold">DevOps</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">7 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Implementing GitOps: A Complete Guide for Modern Teams
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to implement GitOps practices to streamline your deployment processes and improve team collaboration.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-600">Mike Chen</span>
                  </div>
                  <span className="text-sm text-gray-500">Dec 12, 2024</span>
                </div>
              </div>
            </div>

            {/* Featured Post 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-purple-600 font-semibold">Cloud Computing</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">6 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Multi-Cloud Strategy: Benefits, Challenges, and Best Practices
                </h3>
                <p className="text-gray-600 mb-4">
                  Understand the advantages and complexities of adopting a multi-cloud approach for your organization.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-600">Emily Rodriguez</span>
                  </div>
                  <span className="text-sm text-gray-500">Dec 10, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay current with our latest insights and analysis on emerging technologies and industry trends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Latest Post 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-orange-600 font-semibold">Cybersecurity</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500">4 min read</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Zero Trust Security: The New Standard for Enterprise Protection
              </h3>
              <p className="text-gray-600 mb-4">
                Discover why zero trust architecture is becoming the gold standard for enterprise cybersecurity.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-600">David Kim</span>
                </div>
                <span className="text-sm text-gray-500">Dec 18, 2024</span>
              </div>
            </div>

            {/* Latest Post 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-indigo-600 font-semibold">Data Analytics</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500">8 min read</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Building Real-Time Analytics Dashboards with Modern Tools
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to create powerful real-time analytics dashboards using the latest tools and technologies.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-600">Lisa Wang</span>
                </div>
                <span className="text-sm text-gray-500">Dec 16, 2024</span>
              </div>
            </div>

            {/* Latest Post 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-red-600 font-semibold">Mobile Development</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500">5 min read</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                React Native vs Flutter: Choosing the Right Cross-Platform Framework
              </h3>
              <p className="text-gray-600 mb-4">
                A comprehensive comparison of React Native and Flutter to help you choose the best framework for your project.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-600">Alex Thompson</span>
                </div>
                <span className="text-sm text-gray-500">Dec 14, 2024</span>
              </div>
            </div>

            {/* Latest Post 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-teal-600 font-semibold">Blockchain</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500">6 min read</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Smart Contracts in Enterprise: Use Cases and Implementation
              </h3>
              <p className="text-gray-600 mb-4">
                Explore how smart contracts are revolutionizing enterprise processes and business operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-600">Raj Patel</span>
                </div>
                <span className="text-sm text-gray-500">Dec 12, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find articles that match your interests and expertise areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-gray-600">25 articles</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">DevOps & Cloud</h3>
              <p className="text-sm text-gray-600">32 articles</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile Development</h3>
              <p className="text-sm text-gray-600">18 articles</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cybersecurity</h3>
              <p className="text-sm text-gray-600">21 articles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Get the latest technology insights, industry updates, and expert perspectives delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Story to Share?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We&apos;re always looking for industry experts and thought leaders to contribute valuable insights to our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Write for Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Editorial Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
