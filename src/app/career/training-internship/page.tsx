import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training & Internship Programs | Octobit8",
  description: "Accelerate your career with our comprehensive training programs and internship opportunities in cutting-edge technologies and industry best practices.",
};

export default function TrainingInternshipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Training & Internship
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
            Launch your career in technology with hands-on training and real-world internship experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Programs
            </button>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Training & Internship Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to bridge the gap between academic knowledge and industry requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development Training */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Master modern web technologies and build responsive, scalable applications.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• HTML5, CSS3, JavaScript</li>
                <li>• React, Next.js, Node.js</li>
                <li>• Database design & APIs</li>
                <li>• DevOps & deployment</li>
              </ul>
              <div className="mt-6">
                <span className="text-green-600 font-semibold">Duration: 12 weeks</span>
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Dive into the world of artificial intelligence and machine learning algorithms.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Python programming</li>
                <li>• TensorFlow & PyTorch</li>
                <li>• Neural networks & deep learning</li>
                <li>• Real-world AI projects</li>
              </ul>
              <div className="mt-6">
                <span className="text-green-600 font-semibold">Duration: 16 weeks</span>
              </div>
            </div>

            {/* DevOps & Cloud */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">DevOps & Cloud</h3>
              <p className="text-gray-600 mb-4">
                Learn modern DevOps practices and cloud infrastructure management.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Docker & Kubernetes</li>
                <li>• AWS, Azure, GCP</li>
                <li>• CI/CD pipelines</li>
                <li>• Infrastructure as Code</li>
              </ul>
              <div className="mt-6">
                <span className="text-green-600 font-semibold">Duration: 14 weeks</span>
              </div>
            </div>

            {/* Data Science */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Science</h3>
              <p className="text-gray-600 mb-4">
                Master data analysis, visualization, and statistical modeling techniques.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Python & R programming</li>
                <li>• SQL & database management</li>
                <li>• Data visualization tools</li>
                <li>• Statistical analysis</li>
              </ul>
              <div className="mt-6">
                <span className="text-green-600 font-semibold">Duration: 18 weeks</span>
              </div>
            </div>

            {/* Mobile App Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile App Development</h3>
              <p className="text-gray-600 mb-4">
                Build native and cross-platform mobile applications for iOS and Android.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• React Native & Flutter</li>
                <li>• iOS & Android development</li>
                <li>• App store deployment</li>
                <li>• Mobile UI/UX design</li>
              </ul>
              <div className="mt-6">
                <span className="text-green-600 font-semibold">Duration: 16 weeks</span>
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Learn to protect systems, networks, and data from cyber threats.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Network security</li>
                <li>• Ethical hacking</li>
                <li>• Security tools & frameworks</li>
                <li>• Incident response</li>
              </ul>
              <div className="mt-6">
                <span className="text-green-600 font-semibold">Duration: 20 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Opportunities */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Internship Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gain real-world experience working on live projects with our experienced team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Summer Internships</h3>
              <p className="text-gray-600 mb-6">
                Intensive 8-12 week programs during summer break with hands-on project experience.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Real client projects</li>
                <li>• Mentorship from experts</li>
                <li>• Networking opportunities</li>
                <li>• Potential full-time offers</li>
              </ul>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Part-time Internships</h3>
              <p className="text-gray-600 mb-6">
                Flexible part-time opportunities for students who want to work while studying.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Flexible hours (10-20/week)</li>
                <li>• Remote work options</li>
                <li>• Skill development</li>
                <li>• Industry exposure</li>
              </ul>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Training Programs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide industry-focused training that prepares you for real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Experts</h3>
              <p className="text-gray-600">Learn from professionals with years of industry experience</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hands-on Projects</h3>
              <p className="text-gray-600">Work on real projects that build your portfolio</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Support</h3>
              <p className="text-gray-600">Resume building, interview prep, and job placement assistance</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certification</h3>
              <p className="text-gray-600">Earn industry-recognized certificates upon completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Hear from our alumni who have successfully launched their careers in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-800 p-6 rounded-xl">
              <p className="text-green-100 mb-4">
                "The AI training program at Octobit8 gave me the skills and confidence to land a role as a Machine Learning Engineer at a top tech company."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">SP</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Patel</h4>
                  <p className="text-green-200 text-sm">ML Engineer, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="bg-green-800 p-6 rounded-xl">
              <p className="text-green-100 mb-4">
                "Through the DevOps internship, I gained hands-on experience with cloud technologies and secured a full-time position as a DevOps Engineer."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">RJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Rajesh Kumar</h4>
                  <p className="text-green-200 text-sm">DevOps Engineer, CloudTech</p>
                </div>
              </div>
            </div>

            <div className="bg-green-800 p-6 rounded-xl">
              <p className="text-green-100 mb-4">
                "The web development training helped me transition from a non-tech background to a successful Frontend Developer role."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">AM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Aisha Malik</h4>
                  <p className="text-green-200 text-sm">Frontend Developer, WebSolutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Tech Career?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join our training programs or apply for internships to gain the skills and experience you need to succeed in the technology industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Apply for Training
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Internships
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
