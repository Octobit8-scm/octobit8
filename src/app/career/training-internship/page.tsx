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





      {/* Web Development Internship Details */}
      <section id="web-development-internship" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Web Development Internship Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 6-month internship program designed to provide hands-on experience in modern web development technologies and real-world project delivery.
            </p>
          </div>

          {/* Program Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Program Overview</h3>
            <p className="text-gray-700 mb-4">
              Our Web Development Internship Program is designed to bridge the gap between theoretical knowledge and practical application. Interns will work on real client projects, 
              learn industry best practices, and develop a professional portfolio that showcases their skills to potential employers.
            </p>
            <p className="text-gray-700 mb-4">
              Throughout the program, interns will be mentored by senior developers, participate in code reviews, and contribute to agile development cycles. Upon successful completion, 
              participants will receive an Internship Experience Certificate and an opportunity to interview for full-time positions.
            </p>
          </div>

          {/* Program Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Program Details</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-700">Duration</h4>
                  <p className="text-gray-700">6 Months (Full-time)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Commitment</h4>
                  <p className="text-gray-700">40 hours/week</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Work Mode</h4>
                  <p className="text-gray-700">Online & Remote</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Training Fees</h4>
                  <p className="text-gray-700">₹50,000 INR</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">What You&apos;ll Learn</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Frontend Development (React, Next.js, TypeScript)</li>
                <li>• Backend Development (Node.js, Express, APIs)</li>
                <li>• Database Design (SQL, MongoDB, Redis)</li>
                <li>• DevOps & Deployment (Docker, AWS, CI/CD)</li>
                <li>• Version Control (Git, GitHub, GitLab)</li>
                <li>• Testing & Quality Assurance</li>
                <li>• Agile Development & Project Management</li>
              </ul>
            </div>
          </div>

          {/* Eligibility & Requirements */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Eligibility & Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Education</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Enrolled in or recently graduated from Computer Science, IT, or related fields</li>
                  <li>• Basic understanding of programming concepts</li>
                  <li>• Familiarity with HTML, CSS, and JavaScript is a plus</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Skills & Qualities</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Strong problem-solving abilities</li>
                  <li>• Eagerness to learn new technologies</li>
                  <li>• Good communication skills</li>
                  <li>• Ability to work in a team environment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Experience */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-cyan-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Real-World Project Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-blue-700 mb-2">E-commerce Platforms</h4>
                <p className="text-gray-600 text-sm">Build full-stack e-commerce solutions with payment integration</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-green-700 mb-2">Mobile-Responsive Apps</h4>
                <p className="text-gray-600 text-sm">Create responsive web applications that work on all devices</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-purple-700 mb-2">API Development</h4>
                <p className="text-gray-600 text-sm">Design and build RESTful APIs and microservices</p>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-indigo-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Application Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h4 className="font-semibold text-indigo-700 mb-2">Apply Online</h4>
                <p className="text-gray-600 text-sm">Submit your resume and cover letter</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h4 className="font-semibold text-indigo-700 mb-2">Technical Assessment</h4>
                <p className="text-gray-600 text-sm">Complete coding challenges and tests</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h4 className="font-semibold text-indigo-700 mb-2">Interview</h4>
                <p className="text-gray-600 text-sm">Technical and behavioral interview</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">4</span>
                </div>
                <h4 className="font-semibold text-indigo-700 mb-2">Onboarding</h4>
                <p className="text-gray-700 text-sm">Start your internship journey</p>
              </div>
            </div>
          </div>

          {/* CTA for Web Development Internship */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Web Development Journey?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join our comprehensive internship program and gain the skills, experience, and portfolio you need to launch your career in web development.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                  Apply Now
                </button>
                <a href="/brochures/web-development-internship.pdf" download className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Machine Learning Internship Details */}
      <section id="ai-ml-internship" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
              AI & Machine Learning Internship Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 6-month internship program designed to provide hands-on experience in artificial intelligence, machine learning, and deep learning technologies.
            </p>
          </div>

          {/* Program Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Program Overview</h3>
            <p className="text-gray-700 mb-4">
              Our AI & Machine Learning Internship Program is designed to immerse interns in the cutting-edge world of artificial intelligence. Interns will work on real AI projects, 
              develop machine learning models, and gain practical experience with industry-standard tools and frameworks.
            </p>
            <p className="text-gray-700 mb-4">
              Throughout the program, interns will be mentored by AI experts, participate in research projects, and contribute to innovative AI solutions. Upon successful completion, 
              participants will receive an Internship Experience Certificate and an opportunity to interview for full-time positions.
            </p>
          </div>

          {/* Program Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Program Details</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-700">Duration</h4>
                  <p className="text-gray-700">6 Months (Full-time)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Commitment</h4>
                  <p className="text-gray-700">40 hours/week</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Work Mode</h4>
                  <p className="text-gray-700">Online & Remote</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Training Fees</h4>
                  <p className="text-gray-700">₹85,000 INR</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">What You&apos;ll Learn</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Python Programming & Data Structures</li>
                <li>• Machine Learning Algorithms & Models</li>
                <li>• Deep Learning with TensorFlow & PyTorch</li>
                <li>• Computer Vision & NLP</li>
                <li>• Data Preprocessing & Feature Engineering</li>
                <li>• Model Deployment & MLOps</li>
                <li>• AI Ethics & Responsible AI</li>
              </ul>
            </div>
          </div>

          {/* Eligibility & Requirements */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Eligibility & Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Education</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Enrolled in or recently graduated from Computer Science, Mathematics, Statistics, or related fields</li>
                  <li>• Strong foundation in mathematics (Linear Algebra, Calculus, Statistics)</li>
                  <li>• Basic programming knowledge in Python</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Skills & Qualities</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Analytical and problem-solving mindset</li>
                  <li>• Passion for AI and machine learning</li>
                  <li>• Strong mathematical reasoning abilities</li>
                  <li>• Ability to work with large datasets</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Experience */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-cyan-500">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Real-World AI Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-purple-700 mb-2">Computer Vision</h4>
                <p className="text-gray-600 text-sm">Build image recognition and object detection systems</p>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-xl">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-pink-700 mb-2">Natural Language Processing</h4>
                <p className="text-gray-600 text-sm">Develop chatbots and text analysis systems</p>
              </div>
              <div className="text-center p-4 bg-indigo-50 rounded-xl">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-indigo-700 mb-2">Predictive Analytics</h4>
                <p className="text-gray-600 text-sm">Create forecasting and recommendation systems</p>
              </div>
            </div>
          </div>

          {/* CTA for AI & ML Internship */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-400 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore the Future of AI?</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Join our comprehensive AI & Machine Learning internship program and gain the skills, experience, and portfolio you need to launch your career in artificial intelligence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                  Apply Now
                </button>
                <a href="/brochures/ai-ml-internship.pdf" download className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps & Cloud Internship Details */}
      <section id="devops-cloud-internship" className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 mb-4">
              DevOps & Cloud Internship Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 6-month internship program designed to provide hands-on experience in modern DevOps practices, cloud infrastructure, and automation technologies.
            </p>
          </div>

          {/* Program Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-cyan-500">
            <h3 className="text-2xl font-bold text-cyan-700 mb-4">Program Overview</h3>
            <p className="text-gray-700 mb-4">
              Our DevOps & Cloud Internship Program is designed to prepare interns for the modern software development lifecycle. Interns will work on real infrastructure projects, 
              learn cloud-native technologies, and gain hands-on experience with automation and deployment pipelines.
            </p>
            <p className="text-gray-700 mb-4">
              Throughout the program, interns will be mentored by DevOps engineers, work with cloud platforms, and contribute to infrastructure automation projects. Upon successful completion, 
              participants will receive an Internship Experience Certificate and an opportunity to interview for full-time positions.
            </p>
          </div>

          {/* Program Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-cyan-700 mb-4">Program Details</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-700">Duration</h4>
                  <p className="text-gray-700">6 Months (Full-time)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Commitment</h4>
                  <p className="text-gray-700">40 hours/week</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Work Mode</h4>
                  <p className="text-gray-700">Online & Remote</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Training Fees</h4>
                  <p className="text-gray-700">₹75,000 INR</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-cyan-700 mb-4">What You&apos;ll Learn</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Containerization with Docker & Kubernetes</li>
                <li>• Cloud Platforms (AWS, Azure, GCP)</li>
                <li>• CI/CD Pipeline Development</li>
                <li>• Infrastructure as Code (Terraform, CloudFormation)</li>
                <li>• Monitoring & Logging Solutions</li>
                <li>• Security & Compliance Practices</li>
                <li>• Automation & Scripting</li>
              </ul>
            </div>
          </div>

          {/* Eligibility & Requirements */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-cyan-700 mb-4">Eligibility & Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Education</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Enrolled in or recently graduated from Computer Science, IT, or related fields</li>
                  <li>• Basic understanding of Linux systems</li>
                  <li>• Familiarity with programming concepts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Skills & Qualities</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Strong problem-solving abilities</li>
                  <li>• Interest in infrastructure and automation</li>
                  <li>• Good understanding of networking concepts</li>
                  <li>• Ability to work in a fast-paced environment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Experience */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-cyan-700 mb-4">Real-World DevOps Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-cyan-50 rounded-xl">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h4 className="font-semibold text-cyan-700 mb-2">Cloud Migration</h4>
                <p className="text-gray-600 text-sm">Migrate applications to cloud platforms</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-blue-700 mb-2">CI/CD Automation</h4>
                <p className="text-gray-600 text-sm">Build automated deployment pipelines</p>
              </div>
              <div className="text-center p-4 bg-teal-50 rounded-xl">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-teal-700 mb-2">Infrastructure as Code</h4>
                <p className="text-gray-600 text-sm">Automate infrastructure provisioning</p>
              </div>
            </div>
          </div>

          {/* CTA for DevOps & Cloud Internship */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-400 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Master DevOps & Cloud?</h3>
              <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
                Join our comprehensive DevOps & Cloud internship program and gain the skills, experience, and portfolio you need to launch your career in modern infrastructure management.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                  Apply Now
                </button>
                <a href="/brochures/devops-cloud-internship.pdf" download className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Science Internship Details */}
      <section id="data-science-internship" className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
              Data Science Internship Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 6-month internship program designed to provide hands-on experience in data analysis, statistical modeling, and business intelligence.
            </p>
          </div>

          {/* Program Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-orange-700 mb-4">Program Overview</h3>
            <p className="text-gray-700 mb-4">
              Our Data Science Internship Program is designed to immerse interns in the world of data-driven decision making. Interns will work with real datasets, 
              develop analytical models, and learn to extract meaningful insights that drive business value.
            </p>
            <p className="text-gray-700 mb-4">
              Throughout the program, interns will be mentored by data scientists, work on business intelligence projects, and gain practical experience with industry-standard tools. 
              Upon successful completion, participants will receive an Internship Experience Certificate and an opportunity to interview for full-time positions.
            </p>
          </div>

          {/* Program Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-orange-700 mb-4">Program Details</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-700">Duration</h4>
                  <p className="text-gray-700">6 Months (Full-time)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Commitment</h4>
                  <p className="text-gray-700">40 hours/week</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Work Mode</h4>
                  <p className="text-gray-700">Online & Remote</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Training Fees</h4>
                  <p className="text-gray-700">₹85,000 INR</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-orange-700 mb-4">What You&apos;ll Learn</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Python & R Programming for Data Analysis</li>
                <li>• SQL & Database Management Systems</li>
                <li>• Statistical Analysis & Hypothesis Testing</li>
                <li>• Data Visualization & Storytelling</li>
                <li>• Machine Learning Fundamentals</li>
                <li>• Big Data Technologies (Hadoop, Spark)</li>
                <li>• Business Intelligence & Reporting</li>
              </ul>
            </div>
          </div>

          {/* Eligibility & Requirements */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-orange-700 mb-4">Eligibility & Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Education</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Enrolled in or recently graduated from Statistics, Mathematics, Computer Science, or related fields</li>
                  <li>• Strong foundation in statistics and mathematics</li>
                  <li>• Basic programming knowledge</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Skills & Qualities</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Analytical and critical thinking</li>
                  <li>• Strong mathematical reasoning</li>
                  <li>• Attention to detail and accuracy</li>
                  <li>• Ability to communicate insights clearly</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Experience */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-amber-500">
            <h3 className="text-2xl font-bold text-orange-700 mb-4">Real-World Data Science Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-orange-700 mb-2">Business Analytics</h4>
                <p className="text-gray-600 text-sm">Analyze business performance and trends</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-xl">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-yellow-700 mb-2">Predictive Modeling</h4>
                <p className="text-gray-600 text-sm">Build forecasting and prediction models</p>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-xl">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-amber-700 mb-2">Data Visualization</h4>
                <p className="text-gray-600 text-sm">Create compelling data stories and dashboards</p>
              </div>
            </div>
          </div>

          {/* CTA for Data Science Internship */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-600 via-yellow-500 to-amber-400 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Unlock the Power of Data?</h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Join our comprehensive Data Science internship program and gain the skills, experience, and portfolio you need to launch your career in data analytics and business intelligence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                  Apply Now
                </button>
                <a href="/brochures/data-science-internship.pdf" download className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development Internship Details */}
      <section id="mobile-app-internship" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              Mobile App Development Internship Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 6-month internship program designed to provide hands-on experience in mobile application development for iOS and Android platforms.
            </p>
          </div>

          {/* Program Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-indigo-500">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Program Overview</h3>
            <p className="text-gray-700 mb-4">
              Our Mobile App Development Internship Program is designed to prepare interns for the fast-paced world of mobile development. Interns will work on real mobile applications, 
              learn cross-platform development, and gain experience with app store deployment and user experience design.
            </p>
            <p className="text-gray-700 mb-4">
              Throughout the program, interns will be mentored by mobile developers, work on client projects, and contribute to app development from concept to deployment. 
              Upon successful completion, participants will receive an Internship Experience Certificate and an opportunity to interview for full-time positions.
            </p>
          </div>

          {/* Program Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">Program Details</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-700">Duration</h4>
                  <p className="text-gray-700">6 Months (Full-time)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Commitment</h4>
                  <p className="text-gray-700">40 hours/week</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Work Mode</h4>
                  <p className="text-gray-700">Online & Remote</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Training Fees</h4>
                  <p className="text-gray-700">₹50,000 INR</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">What You&apos;ll Learn</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• React Native & Flutter Development</li>
                <li>• iOS Development with Swift</li>
                <li>• Android Development with Kotlin</li>
                <li>• Mobile UI/UX Design Principles</li>
                <li>• App Store Deployment & Publishing</li>
                <li>• Mobile Testing & Quality Assurance</li>
                <li>• Performance Optimization & Analytics</li>
              </ul>
            </div>
          </div>

          {/* Eligibility & Requirements */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Eligibility & Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Education</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Enrolled in or recently graduated from Computer Science, IT, or related fields</li>
                  <li>• Basic understanding of programming concepts</li>
                  <li>• Familiarity with JavaScript or similar languages</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Skills & Qualities</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Creative problem-solving abilities</li>
                  <li>• Interest in mobile technology</li>
                  <li>• Good understanding of user experience</li>
                  <li>• Ability to work in agile teams</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Experience */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-cyan-500">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Real-World Mobile Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-indigo-50 rounded-xl">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-indigo-700 mb-2">E-commerce Apps</h4>
                <p className="text-gray-600 text-sm">Build shopping and payment applications</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-purple-700 mb-2">Social Media Apps</h4>
                <p className="text-gray-600 text-sm">Create networking and communication platforms</p>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-xl">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-cyan-700 mb-2">Utility Apps</h4>
                <p className="text-gray-600 text-sm">Develop productivity and lifestyle applications</p>
              </div>
            </div>
          </div>

          {/* CTA for Mobile App Development Internship */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-400 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Build the Next Big App?</h3>
              <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                Join our comprehensive Mobile App Development internship program and gain the skills, experience, and portfolio you need to launch your career in mobile development.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                  Apply Now
                </button>
                <a href="/brochures/mobile-app-internship.pdf" download className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Internship Details */}
      <section id="cybersecurity-internship" className="py-20 bg-gradient-to-br from-red-50 via-white to-pink-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">
              Cybersecurity Internship Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 6-month internship program designed to provide hands-on experience in cybersecurity, ethical hacking, and information security practices.
            </p>
          </div>

          {/* Program Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-red-700 mb-4">Program Overview</h3>
            <p className="text-gray-700 mb-4">
              Our Cybersecurity Internship Program is designed to prepare interns for the critical field of information security. Interns will work on real security assessments, 
              learn penetration testing techniques, and gain practical experience with security tools and frameworks.
            </p>
            <p className="text-gray-700 mb-4">
              Throughout the program, interns will be mentored by cybersecurity experts, participate in security audits, and contribute to protecting digital assets. 
              Upon successful completion, participants will receive an Internship Experience Certificate and an opportunity to interview for full-time positions.
            </p>
          </div>

          {/* Program Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-red-700 mb-4">Program Details</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-700">Duration</h4>
                  <p className="text-gray-700">6 Months (Full-time)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Commitment</h4>
                  <p className="text-gray-700">40 hours/week</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Work Mode</h4>
                  <p className="text-gray-700">Online & Remote</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Training Fees</h4>
                  <p className="text-gray-700">₹75,000 INR</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-red-700 mb-4">What You&apos;ll Learn</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Network Security & Architecture</li>
                <li>• Ethical Hacking & Penetration Testing</li>
                <li>• Security Tools & Frameworks</li>
                <li>• Incident Response & Forensics</li>
                <li>• Security Compliance & Standards</li>
                <li>• Threat Intelligence & Analysis</li>
                <li>• Secure Coding Practices</li>
              </ul>
            </div>
          </div>

          {/* Eligibility & Requirements */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-red-700 mb-4">Eligibility & Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Education</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Enrolled in or recently graduated from Computer Science, IT, Cybersecurity, or related fields</li>
                  <li>• Basic understanding of networking concepts</li>
                  <li>• Familiarity with operating systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Skills & Qualities</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Strong analytical and problem-solving skills</li>
                  <li>• Ethical mindset and integrity</li>
                  <li>• Attention to detail and accuracy</li>
                  <li>• Ability to work under pressure</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Experience */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-cyan-500">
            <h3 className="text-2xl font-bold text-red-700 mb-4">Real-World Security Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-red-700 mb-2">Vulnerability Assessment</h4>
                <p className="text-gray-600 text-sm">Identify and analyze security weaknesses</p>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-xl">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-pink-700 mb-2">Security Auditing</h4>
                <p className="text-gray-600 text-sm">Conduct comprehensive security reviews</p>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-xl">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-cyan-700 mb-2">Incident Response</h4>
                <p className="text-gray-600 text-sm">Handle security breaches and incidents</p>
              </div>
            </div>
          </div>

          {/* CTA for Cybersecurity Internship */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 via-pink-500 to-cyan-400 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Protect the Digital World?</h3>
              <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                Join our comprehensive Cybersecurity internship program and gain the skills, experience, and portfolio you need to launch your career in information security.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                  Apply Now
                </button>
                <a href="/brochures/cybersecurity-internship.pdf" download className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </a>
              </div>
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
                &ldquo;The AI training program at Octobit8 gave me the skills and confidence to land a role as a Machine Learning Engineer at a top tech company.&rdquo;
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
                &ldquo;Through the DevOps internship, I gained hands-on experience with cloud technologies and secured a full-time position as a DevOps Engineer.&rdquo;
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
                &ldquo;The web development training helped me transition from a non-tech background to a successful Frontend Developer role.&rdquo;
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
