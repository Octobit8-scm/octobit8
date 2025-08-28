import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Development Services | Octobit8",
  description: "Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and intelligent automation.",
};

export default function AIDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Development
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8">
            Harness the power of artificial intelligence to drive innovation, automate processes, and unlock new business opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and create competitive advantages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Machine Learning */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Develop intelligent systems that learn from data and improve performance over time.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Predictive analytics models</li>
                <li>• Recommendation systems</li>
                <li>• Pattern recognition</li>
                <li>• Anomaly detection</li>
              </ul>
            </div>

            {/* Natural Language Processing */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Language Processing</h3>
              <p className="text-gray-600 mb-4">
                Enable machines to understand, interpret, and generate human language naturally.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Chatbots & virtual assistants</li>
                <li>• Sentiment analysis</li>
                <li>• Text classification</li>
                <li>• Language translation</li>
              </ul>
            </div>

            {/* Computer Vision */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Computer Vision</h3>
              <p className="text-gray-600 mb-4">
                Build systems that can see, analyze, and understand visual information from images and videos.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Image recognition</li>
                <li>• Object detection</li>
                <li>• Facial recognition</li>
                <li>• Quality inspection</li>
              </ul>
            </div>

            {/* Deep Learning */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deep Learning</h3>
              <p className="text-gray-600 mb-4">
                Leverage neural networks to solve complex problems and achieve human-like performance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Neural network architecture</li>
                <li>• Convolutional networks</li>
                <li>• Recurrent networks</li>
                <li>• Transfer learning</li>
              </ul>
            </div>

            {/* AI Automation */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Automation</h3>
              <p className="text-gray-600 mb-4">
                Automate complex business processes using intelligent AI systems and workflows.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Process automation</li>
                <li>• Decision support systems</li>
                <li>• Intelligent workflows</li>
                <li>• Cognitive automation</li>
              </ul>
            </div>

            {/* AI Consulting */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Strategy & Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategic guidance to help you identify and implement the right AI solutions for your business.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AI readiness assessment</li>
                <li>• Strategy development</li>
                <li>• Implementation planning</li>
                <li>• ROI analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies and frameworks to build robust, scalable AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Python</h3>
              <p className="text-sm text-gray-600">TensorFlow, PyTorch, Scikit-learn</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Cloud AI</h3>
              <p className="text-sm text-gray-600">AWS SageMaker, Azure ML, GCP AI</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Big Data</h3>
              <p className="text-sm text-gray-600">Spark, Hadoop, Kafka</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">MLOps</h3>
              <p className="text-sm text-gray-600">MLflow, Kubeflow, Airflow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Use Cases Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI is transforming various sectors and creating new business opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Healthcare</h3>
              <p className="text-gray-600 mb-4">Medical image analysis, drug discovery, patient care optimization</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Finance</h3>
              <p className="text-gray-600 mb-4">Fraud detection, risk assessment, algorithmic trading</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Retail</h3>
              <p className="text-gray-600 mb-4">Personalized recommendations, inventory optimization</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Manufacturing</h3>
              <p className="text-gray-600 mb-4">Predictive maintenance, quality control, supply chain optimization</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Transportation</h3>
              <p className="text-gray-600 mb-4">Autonomous vehicles, route optimization, traffic prediction</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-600 mb-4">Personalized learning, content generation, student assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Octobit8 for AI Development?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver AI solutions that drive real value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">50+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Projects Delivered</h3>
              <p className="text-purple-200">Successfully completed AI projects across various industries</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">95%</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Client Satisfaction</h3>
              <p className="text-purple-200">Consistently high satisfaction rates from our AI clients</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">PhD</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-purple-200">PhD-level AI researchers and experienced engineers</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Support Available</h3>
              <p className="text-purple-200">Round-the-clock support for your AI systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let&apos;s discuss how our AI development services can help you achieve your business goals and stay ahead of the competition.
            </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download AI Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
