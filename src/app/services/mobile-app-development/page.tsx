import Image from "next/image";
import Link from "next/link";

export default function MobileAppDevelopmentPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Mobile App Development Services</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Transform Your Ideas Into <span className="text-blue-700">Innovative Mobile Apps</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Welcome to Octobit8, where we transform your ideas into innovative, user-friendly, and high-performance mobile applications. Our expert team specializes in crafting custom mobile apps tailored to your business needs, ensuring seamless functionality across iOS, Android, and cross-platform environments.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">Start Your App Project</Link>
        </div>
      </section>

      {/* Why Choose Us for Mobile App Development */}
      <section className="max-w-4xl mx-auto mb-16 px-4 relative">
        <div className="bg-white rounded-2xl shadow-lg p-10 border-l-8 border-blue-500 flex flex-col items-center relative z-10">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-6 flex items-center gap-2"><Image src="/icons/star.svg" alt="Star" width={28} height={28} />Why Choose Us for Mobile App Development?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Expertise Across Platforms</h3>
                  <p className="text-gray-700 text-sm">We build native and cross-platform apps using cutting-edge technologies like Swift, Kotlin, Flutter, and React Native.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Tailored Solutions</h3>
                  <p className="text-gray-700 text-sm">Every app is customized to align with your business goals, target audience, and brand identity.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">End-to-End Services</h3>
                  <p className="text-gray-700 text-sm">From ideation and design to development, testing, and maintenance, we handle it all.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Proven Track Record</h3>
                  <p className="text-gray-700 text-sm">Our portfolio includes successful apps for startups, SMEs, and enterprises across diverse industries.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Agile Approach</h3>
                  <p className="text-gray-700 text-sm">We follow an iterative development process to ensure flexibility, transparency, and timely delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Model of Working with Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Model of Working with Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We believe in fostering strong, collaborative relationships with our clients. Our client-centric model ensures your vision is at the heart of every step.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Discovery & Consultation</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Detailed consultation</li>
                <li>• Market research</li>
                <li>• Competitor analysis</li>
                <li>• Clear project scope</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Proposal & Agreement</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Comprehensive proposal</li>
                <li>• Transparent pricing</li>
                <li>• Project timeline</li>
                <li>• Signed agreement</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-yellow-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Design & Prototyping</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Collaborative design</li>
                <li>• Wireframes & prototypes</li>
                <li>• Regular feedback sessions</li>
                <li>• User-friendly interface</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Development & Iteration</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Agile methodologies</li>
                <li>• Sprint development</li>
                <li>• Regular demos</li>
                <li>• Continuous feedback</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-pink-600 font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Testing & QA</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Rigorous testing</li>
                <li>• Performance optimization</li>
                <li>• Security testing</li>
                <li>• Bug resolution</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-bold text-xl">6</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Launch & Support</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• App store submission</li>
                <li>• Compliance guidelines</li>
                <li>• Maintenance & updates</li>
                <li>• Ongoing support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mobile App Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Mobile App Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our structured development process ensures efficiency, quality, and alignment with your goals.</p>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Ideation & Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Brainstorming Sessions</h4>
                  <p className="text-gray-700 text-sm">Brainstorming sessions to refine your app idea and define key features, user flows, and technical architecture.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Technical Architecture</h4>
                  <p className="text-gray-700 text-sm">Defining key features, user flows, and technical architecture to ensure scalability and performance.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">UI/UX Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Intuitive Design</h4>
                  <p className="text-gray-700 text-sm">Crafting intuitive and visually appealing designs that enhance user experience and engagement.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Wireframes & Prototypes</h4>
                  <p className="text-gray-700 text-sm">Creating wireframes, mockups, and prototypes for approval before development begins.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Backend Development</h4>
                  <p className="text-gray-700 text-sm">Robust functionality with APIs, databases, and server-side logic for seamless app performance.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Frontend Development</h4>
                  <p className="text-gray-700 text-sm">Seamless user experiences with responsive design and smooth interactions across all devices.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Third-Party Integration</h4>
                  <p className="text-gray-700 text-sm">Integration with payment gateways, analytics, push notifications, and other essential services.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Testing</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Functional Testing</h4>
                  <p className="text-gray-700 text-sm">Ensure all features work as intended across different devices and operating systems.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Performance Testing</h4>
                  <p className="text-gray-700 text-sm">Optimize for speed and scalability to handle growing user demands.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Security Testing</h4>
                  <p className="text-gray-700 text-sm">Protect user data and ensure compliance with security standards and regulations.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Deployment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">App Store Preparation</h4>
                  <p className="text-gray-700 text-sm">Preparing the app for app store submission with proper metadata and assets.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Compliance Guidelines</h4>
                  <p className="text-gray-700 text-sm">Ensuring compliance with platform guidelines for Google Play and Apple App Store.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Maintenance & Updates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Performance Monitoring</h4>
                  <p className="text-gray-700 text-sm">Monitoring app performance and user feedback to identify improvement opportunities.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Regular Updates</h4>
                  <p className="text-gray-700 text-sm">Regular updates to add features, fix bugs, or adapt to new OS versions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases: Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Use Cases: Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our mobile app development services cater to a wide range of industries, delivering solutions that drive engagement and growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">E-Commerce</h3>
              <p className="text-gray-700 text-sm mb-4">Apps with features like product catalogs, secure payment gateways, and personalized recommendations.</p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Example:</h4>
                <p className="text-gray-700 text-sm">A retail app with real-time inventory tracking and push notifications for promotions.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Healthcare</h3>
              <p className="text-gray-700 text-sm mb-4">Apps for telemedicine, appointment scheduling, and patient record management.</p>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Example:</h4>
                <p className="text-gray-700 text-sm">A HIPAA-compliant app for remote consultations and prescription management.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Education</h3>
              <p className="text-gray-700 text-sm mb-4">E-learning apps with interactive courses, quizzes, and progress tracking.</p>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-700 mb-2">Example:</h4>
                <p className="text-gray-700 text-sm">A language learning app with gamified lessons and AI-driven speech recognition.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Finance</h3>
              <p className="text-gray-700 text-sm mb-4">Secure apps for banking, investment tracking, or budgeting.</p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-2">Example:</h4>
                <p className="text-gray-700 text-sm">A fintech app with biometric authentication and real-time transaction alerts.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Travel & Tourism</h3>
              <p className="text-gray-700 text-sm mb-4">Apps for booking, itinerary planning, and location-based services.</p>
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-semibold text-pink-700 mb-2">Example:</h4>
                <p className="text-gray-700 text-sm">A travel app with offline maps, real-time flight updates, and local guides.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">On-Demand Services</h3>
              <p className="text-gray-700 text-sm mb-4">Apps for ride-hailing, food delivery, or home services.</p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-700 mb-2">Example:</h4>
                <p className="text-gray-700 text-sm">A delivery app with GPS tracking, driver management, and customer reviews.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Cutting-edge technologies for modern, scalable mobile applications.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Native Development</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">iOS</h4>
                  <div className="space-y-1 text-gray-700 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Swift, Objective-C</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Android</h4>
                  <div className="space-y-1 text-gray-700 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Kotlin, Java</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Cross-Platform Development</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span>Flutter</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span>React Native</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span>Xamarin</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Backend & Cloud</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Node.js, Python (Django/Flask)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Firebase, AWS</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Databases</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>MySQL, MongoDB</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Third-Party Integrations</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>Payment gateways (Stripe, PayPal)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>Analytics (Google Analytics, Mixpanel)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>Push notifications (OneSignal)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest in a Mobile App */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Why Invest in a Mobile App?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Mobile apps provide significant advantages for businesses looking to engage customers and drive growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Increased Customer Engagement</h3>
              <p className="text-gray-700 text-sm">Apps provide a direct channel to interact with your audience and build stronger relationships.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Brand Loyalty</h3>
              <p className="text-gray-700 text-sm">Personalized experiences foster stronger connections with users and increase brand loyalty.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Revenue Growth</h3>
              <p className="text-gray-700 text-sm">In-app purchases, subscriptions, or e-commerce features drive revenue and business growth.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Competitive Edge</h3>
              <p className="text-gray-700 text-sm">A well-designed app sets you apart in a crowded market and positions you as innovative.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Today */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Get Started Today</h2>
          <p className="text-xl mb-8">Ready to bring your app idea to life? Contact us for a free consultation and let&apos;s build something extraordinary together.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Email</h3>
              <p>contact@octobit8.com</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Phone</h3>
              <p>+91-9923706784</p>
            </div>
          </div>
          <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg">
            Start Your App Project
          </Link>
        </div>
      </section>
    </div>
  );
} 