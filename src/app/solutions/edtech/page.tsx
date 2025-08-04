import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export default function EdTechSolutionsPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">EdTech Solutions</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Transform Education with <span className="text-blue-700">Modern Technology</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Comprehensive EdTech solutions including ERP systems, AI-powered learning platforms, voice agents, and management applications for educational institutions worldwide.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">Get EdTech Assessment</Link>
            <Link href="#solutions" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg border-2 border-blue-600">Explore Solutions</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Institutions Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">1M+</div>
              <div className="text-sm text-gray-600">Students Reached</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why EdTech Needs Specialized Solutions */}
      <section className="max-w-4xl mx-auto mb-16 px-4 relative">
        <div className="bg-white rounded-2xl shadow-lg p-10 border-l-8 border-blue-500 flex flex-col items-center relative z-10">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-4">Why EdTech Needs Specialized Solutions</h2>
          <p className="text-lg text-gray-700 text-center mb-6">Educational technology platforms require high availability, global scalability, and seamless user experiences. Our solutions are optimized for learning environments and student engagement.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-2">🎓</div>
              <h3 className="font-semibold text-blue-700 mb-2">Student-Centric Design</h3>
              <p className="text-sm text-gray-600">Solutions designed with students in mind, ensuring accessibility, engagement, and learning outcomes.</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-semibold text-green-700 mb-2">Compliance & Security</h3>
              <p className="text-sm text-gray-600">FERPA, COPPA, and GDPR compliance with enterprise-grade security for educational data protection.</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold text-purple-700 mb-2">Analytics & Insights</h3>
              <p className="text-sm text-gray-600">Advanced analytics for student performance, engagement tracking, and institutional decision-making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Comprehensive EdTech Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From ERP systems to AI-powered learning platforms, we provide end-to-end solutions for modern educational institutions.</p>
          </div>
        </div>
      </section>

      {/* ERP Solutions for Educational Institutions */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">ERP Solutions for Educational Institutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive enterprise resource planning systems designed specifically for educational institutions to streamline operations and improve efficiency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Academic ERP</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Student Information System</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Student registration and enrollment management</li>
                    <li>• Academic record tracking and transcripts</li>
                    <li>• Course registration and scheduling</li>
                    <li>• Grade management and reporting</li>
                    <li>• Attendance tracking and monitoring</li>
                    <li>• Student portal and self-service</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Faculty Management</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Faculty recruitment and onboarding</li>
                    <li>• Workload management and scheduling</li>
                    <li>• Performance evaluation and appraisal</li>
                    <li>• Research project tracking</li>
                    <li>• Publication and achievement management</li>
                    <li>• Professional development tracking</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Administrative ERP</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Financial Management</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Fee collection and management</li>
                    <li>• Budget planning and allocation</li>
                    <li>• Payroll and salary management</li>
                    <li>• Procurement and inventory control</li>
                    <li>• Financial reporting and analytics</li>
                    <li>• Grant and funding management</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Infrastructure Management</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Facility and asset management</li>
                    <li>• Maintenance scheduling and tracking</li>
                    <li>• Space allocation and utilization</li>
                    <li>• Security and access control</li>
                    <li>• Energy consumption monitoring</li>
                    <li>• Emergency response coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School, College and Institute Management Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">School, College and Institute Management Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Specialized management applications tailored for different types of educational institutions with unique requirements and workflows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">School Management</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">K-12 School System</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Student admission and enrollment</li>
                    <li>• Class and section management</li>
                    <li>• Parent-teacher communication</li>
                    <li>• Homework and assignment tracking</li>
                    <li>• School bus and transportation</li>
                    <li>• Library and resource management</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">School Administration</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Staff and teacher management</li>
                    <li>• Timetable and schedule creation</li>
                    <li>• Examination and assessment</li>
                    <li>• Fee collection and billing</li>
                    <li>• School events and activities</li>
                    <li>• Health and medical records</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">College Management</h3>
              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-700 mb-2">Higher Education System</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Course and curriculum management</li>
                    <li>• Department and faculty organization</li>
                    <li>• Research project coordination</li>
                    <li>• Internship and placement tracking</li>
                    <li>• Alumni relationship management</li>
                    <li>• Academic calendar management</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">College Administration</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Student life cycle management</li>
                    <li>• Hostel and accommodation</li>
                    <li>• Sports and extracurricular activities</li>
                    <li>• Career counseling and guidance</li>
                    <li>• Industry collaboration tracking</li>
                    <li>• Quality assurance and accreditation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Institute Management</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-2">Specialized Training</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Skill development programs</li>
                    <li>• Certification and credentialing</li>
                    <li>• Industry partnership management</li>
                    <li>• Job placement assistance</li>
                    <li>• Training material management</li>
                    <li>• Performance assessment tools</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Institute Operations</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Batch and cohort management</li>
                    <li>• Trainer and mentor allocation</li>
                    <li>• Equipment and lab management</li>
                    <li>• Progress tracking and reporting</li>
                    <li>• Student support services</li>
                    <li>• Quality monitoring and feedback</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Enabled Learning Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI-Enabled Learning Platforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Intelligent learning platforms that leverage artificial intelligence to provide personalized, adaptive, and engaging educational experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Personalized Learning</h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2">Adaptive Learning Systems</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered content recommendation</li>
                    <li>• Personalized learning paths</li>
                    <li>• Dynamic difficulty adjustment</li>
                    <li>• Learning style adaptation</li>
                    <li>• Progress-based content delivery</li>
                    <li>• Individual learning analytics</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Intelligent Assessment</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-generated adaptive quizzes</li>
                    <li>• Automated essay evaluation</li>
                    <li>• Real-time performance analysis</li>
                    <li>• Predictive learning outcomes</li>
                    <li>• Competency-based assessment</li>
                    <li>• Automated feedback generation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Smart Learning Tools</h3>
              <div className="space-y-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-700 mb-2">AI-Powered Features</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Natural language processing for Q&A</li>
                    <li>• Automated content generation</li>
                    <li>• Smart study scheduling</li>
                    <li>• Intelligent tutoring systems</li>
                    <li>• Automated plagiarism detection</li>
                    <li>• Learning pattern recognition</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Collaborative Learning</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-facilitated group formation</li>
                    <li>• Smart peer matching</li>
                    <li>• Automated discussion moderation</li>
                    <li>• Collaborative project management</li>
                    <li>• Real-time collaboration tools</li>
                    <li>• Team performance analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Agents and AI Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Voice Agents and AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced AI-powered voice agents and intelligent solutions designed to enhance educational experiences and streamline administrative processes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Voice-Activated Learning</h3>
              <div className="space-y-4">
                <div className="bg-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-700 mb-2">Educational Voice Agents</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Voice-activated study assistants</li>
                    <li>• Speech-to-text for note-taking</li>
                    <li>• Voice-based language learning</li>
                    <li>• Audio content summarization</li>
                    <li>• Voice-controlled learning apps</li>
                    <li>• Accessibility features for visually impaired</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Conversational AI</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered chatbots for student support</li>
                    <li>• Natural language course navigation</li>
                    <li>• Voice-based administrative queries</li>
                    <li>• Multilingual voice support</li>
                    <li>• Emotion recognition in learning</li>
                    <li>• Personalized voice interactions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Advanced AI Solutions</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-700 mb-2">Intelligent Automation</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated administrative workflows</li>
                    <li>• Smart document processing</li>
                    <li>• AI-powered content curation</li>
                    <li>• Automated grading systems</li>
                    <li>• Intelligent scheduling optimization</li>
                    <li>• Predictive maintenance for systems</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Analytics and Insights</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Learning behavior analytics</li>
                    <li>• Predictive student performance</li>
                    <li>• Engagement pattern analysis</li>
                    <li>• Automated report generation</li>
                    <li>• Real-time learning insights</li>
                    <li>• AI-driven recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack & Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Technology Stack & Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Modern technology stack designed for scalability, security, and seamless integration with existing educational systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <Image src="/icons/cloud.svg" alt="Cloud" width={24} height={24} />
                Cloud Infrastructure
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  AWS/Azure/GCP cloud platforms
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Kubernetes container orchestration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Serverless computing (Lambda/Functions)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Global CDN for content delivery
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Auto-scaling and load balancing
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <Image src="/icons/automation.svg" alt="Automation" width={24} height={24} />
                AI & Machine Learning
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  TensorFlow and PyTorch frameworks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Natural Language Processing (NLP)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Computer Vision for content analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Recommendation engines
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Predictive analytics models
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                <Image src="/icons/security.svg" alt="Security" width={24} height={24} />
                Security & Compliance
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  FERPA and COPPA compliance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  End-to-end encryption
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Multi-factor authentication
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Data privacy and GDPR compliance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Regular security audits
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Case Studies */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Success Stories & Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real-world implementations and success stories from educational institutions that have transformed their learning environments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">U</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-700">University of Innovation</h3>
                  <p className="text-gray-600 text-sm">Higher Education Institution</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Implemented a comprehensive AI-powered learning platform serving 50,000+ students across 200+ courses, resulting in 40% improvement in student engagement and 25% increase in course completion rates.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">AI Learning Platform</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Student Analytics</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Personalized Learning</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-700">Smart School District</h3>
                  <p className="text-gray-600 text-sm">K-12 School District</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Deployed an integrated ERP system across 25 schools serving 15,000 students, streamlining administrative processes and improving parent-teacher communication by 60%.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">School ERP</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Parent Portal</span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">Student Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our proven methodology ensures successful deployment and adoption of EdTech solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Discovery & Planning</h3>
              <p className="text-gray-600 text-sm">Comprehensive assessment of current systems, requirements gathering, and strategic planning for implementation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Design & Development</h3>
              <p className="text-gray-600 text-sm">Custom development of EdTech solutions with iterative design and stakeholder feedback integration.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">Testing & Deployment</h3>
              <p className="text-gray-600 text-sm">Rigorous testing, pilot programs, and phased deployment to ensure smooth transition and adoption.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-orange-700 mb-2">Support & Optimization</h3>
              <p className="text-gray-600 text-sm">Ongoing support, training, and continuous optimization based on usage analytics and feedback.</p>
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
              <li>Global scalability for worldwide education</li>
              <li>Cost-optimized infrastructure</li>
              <li>Enhanced student engagement</li>
              <li>FERPA compliance and data security</li>
              <li>Real-time learning analytics</li>
              <li>AI-powered personalized learning</li>
              <li>Voice-enabled accessibility</li>
              <li>Automated administrative processes</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Use Cases</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 text-left">
              <li>Learning management systems (LMS)</li>
              <li>Online course platforms</li>
              <li>Virtual classroom applications</li>
              <li>Educational video streaming</li>
              <li>Student assessment platforms</li>
              <li>School and college ERP systems</li>
              <li>AI-powered tutoring platforms</li>
              <li>Voice-enabled learning assistants</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Transform Your Educational Institution?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join the digital transformation revolution in education with our comprehensive EdTech solutions.
            </p>
          </div>
          <ContactForm 
            title="Get EdTech Solution Quote"
            subtitle="Tell us about your educational institution and requirements."
            defaultPosition="EdTech Solutions"
            emailSubject="EdTech Solutions Inquiry"
            placeholder="Describe your educational institution, current challenges, and specific requirements for our EdTech solutions..."
          />
        </div>
      </section>
    </div>
  );
} 