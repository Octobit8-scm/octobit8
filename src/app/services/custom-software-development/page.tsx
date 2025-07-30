import Image from "next/image";
import Link from "next/link";

export default function CustomSoftwareDevelopmentPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Custom Software Development Services</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Transform Your Ideas Into <span className="text-blue-700">Robust Software Solutions</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Welcome to our premier custom software development services, where we transform your ideas into robust, scalable, and innovative software solutions tailored to your unique business needs. With a team of experienced developers, designers, and strategists, we deliver high-quality software that drives efficiency, enhances user experiences, and accelerates your business growth.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">Discuss Your Project</Link>
        </div>
      </section>

      {/* Why Choose Our Custom Software Development Services */}
      <section className="max-w-4xl mx-auto mb-16 px-4 relative">
        <div className="bg-white rounded-2xl shadow-lg p-10 border-l-8 border-blue-500 flex flex-col items-center relative z-10">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-6 flex items-center gap-2"><Image src="/icons/star.svg" alt="Star" width={28} height={28} />Why Choose Our Custom Software Development Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Tailored Solutions</h3>
                  <p className="text-gray-700 text-sm">We craft software designed specifically for your business goals, ensuring seamless integration with your existing systems and workflows.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Experienced Team</h3>
                  <p className="text-gray-700 text-sm">Our developers are proficient in modern technologies, including Python, JavaScript, Java, C#, React, Angular, and cloud platforms.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Agile Methodology</h3>
                  <p className="text-gray-700 text-sm">We follow an agile development process to ensure flexibility, transparency, and rapid delivery of functional software.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">End-to-End Services</h3>
                  <p className="text-gray-700 text-sm">From ideation and design to development, testing, deployment, and ongoing support, we provide comprehensive services.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Client-Centric Approach</h3>
                  <p className="text-gray-700 text-sm">Your vision is our priority. We collaborate closely with you to ensure the final product aligns perfectly with your expectations.</p>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We believe in fostering strong, collaborative relationships with our clients to deliver exceptional software solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Discovery & Consultation</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• In-depth consultations</li>
                <li>• Requirements gathering</li>
                <li>• System analysis</li>
                <li>• Feasibility study</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Planning & Strategy</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Technical requirements</li>
                <li>• Architecture design</li>
                <li>• Project timeline</li>
                <li>• Resource allocation</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-yellow-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Design & Prototyping</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Wireframes & mockups</li>
                <li>• Interactive prototypes</li>
                <li>• UX/UI design</li>
                <li>• Brand integration</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Development</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Agile sprints</li>
                <li>• Clean code practices</li>
                <li>• API integration</li>
                <li>• Third-party systems</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-pink-600 font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Testing & QA</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Unit & integration testing</li>
                <li>• Performance testing</li>
                <li>• Security testing</li>
                <li>• Bug resolution</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-bold text-xl">6</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Deployment & Integration</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Production deployment</li>
                <li>• System integration</li>
                <li>• User training</li>
                <li>• Documentation</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-red-600 font-bold text-xl">7</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Maintenance & Support</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Performance monitoring</li>
                <li>• Regular updates</li>
                <li>• Feature enhancements</li>
                <li>• SLA support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our development process is rooted in Agile principles, ensuring flexibility, collaboration, and continuous improvement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Sprint Planning</h3>
              <p className="text-gray-700 text-sm">Define goals and deliverables for each sprint (typically 2-4 weeks) with clear objectives and success metrics.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Development Sprints</h3>
              <p className="text-gray-700 text-sm">Build and test features incrementally, with regular client feedback and iterative improvements.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Daily Standups</h3>
              <p className="text-gray-700 text-sm">Conduct short meetings to track progress, address blockers, and align priorities across the team.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Sprint Reviews</h3>
              <p className="text-gray-700 text-sm">Demonstrate completed features to clients and gather feedback for continuous improvement.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Retrospectives</h3>
              <p className="text-gray-700 text-sm">Reflect on each sprint to improve processes and team performance for better outcomes.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">CI/CD Pipeline</h3>
              <p className="text-gray-700 text-sm">Automate testing and deployment to ensure rapid and reliable releases with minimal downtime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases for Custom Software Development */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Use Cases for Custom Software Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our custom software development services cater to a wide range of industries and business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Business Process Automation</h3>
              <p className="text-gray-700 text-sm mb-4">Challenge: Manual processes are time-consuming and prone to errors.</p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Solution:</h4>
                <p className="text-gray-700 text-sm">Develop custom tools to automate repetitive tasks, such as inventory management, invoicing, or customer support workflows.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">CRM Systems</h3>
              <p className="text-gray-700 text-sm mb-4">Challenge: Off-the-shelf CRMs don&apos;t align with unique business workflows.</p>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Solution:</h4>
                <p className="text-gray-700 text-sm">Build a tailored CRM to manage leads, track customer interactions, and generate insights.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">E-Commerce Platforms</h3>
              <p className="text-gray-700 text-sm mb-4">Challenge: Generic e-commerce platforms lack specific features or integrations.</p>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-700 mb-2">Solution:</h4>
                <p className="text-gray-700 text-sm">Create a custom e-commerce solution with unique features like personalized product recommendations and payment gateway integrations.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">ERP Systems</h3>
              <p className="text-gray-700 text-sm mb-4">Challenge: Large organizations need integrated systems to manage complex operations.</p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-2">Solution:</h4>
                <p className="text-gray-700 text-sm">Develop a custom ERP to unify finance, HR, supply chain, and operations management.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Mobile & Web Applications</h3>
              <p className="text-gray-700 text-sm mb-4">Challenge: Businesses need engaging, user-friendly apps to connect with customers.</p>
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-semibold text-pink-700 mb-2">Solution:</h4>
                <p className="text-gray-700 text-sm">Build responsive web and mobile applications with intuitive interfaces and seamless performance.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Data Analytics & Reporting</h3>
              <p className="text-gray-700 text-sm mb-4">Challenge: Businesses struggle to extract actionable insights from data.</p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-700 mb-2">Solution:</h4>
                <p className="text-gray-700 text-sm">Create custom dashboards and analytics tools to visualize data and support decision-making.</p>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We leverage cutting-edge technologies to deliver high-performance, scalable, and secure software solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Frontend</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>React, Angular, Vue.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>HTML5, CSS3</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Backend</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Node.js, Python (Django, Flask)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Java (Spring), .NET</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Ruby on Rails</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Databases</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span>MySQL, PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span>MongoDB, Redis</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Cloud Platforms</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>AWS, Azure</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Google Cloud</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Mobile</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>React Native, Flutter</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>Swift (iOS), Kotlin (Android)</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">DevOps & Others</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>Docker, Kubernetes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>Jenkins, Git, CI/CD</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>GraphQL, REST APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Benefits of Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Custom software solutions that deliver measurable value and competitive advantages.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Scalability</h3>
              <p className="text-gray-700 text-sm">Our solutions grow with your business, handling increased users and data seamlessly.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Security</h3>
              <p className="text-gray-700 text-sm">We implement robust security measures, including encryption, secure APIs, and compliance with standards.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Cost-Effectiveness</h3>
              <p className="text-gray-700 text-sm">Custom software eliminates the need for expensive, recurring licenses and ensures long-term ROI.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Flexibility</h3>
              <p className="text-gray-700 text-sm">Tailored solutions adapt to your unique workflows, unlike off-the-shelf software.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Competitive Advantage</h3>
              <p className="text-gray-700 text-sm">Stand out in your industry with innovative, bespoke solutions that differentiate your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Today */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Get Started Today</h2>
          <p className="text-xl mb-8">Ready to transform your business with custom software? Here&apos;s how to begin:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-sm">Reach out via our website, email, or phone to schedule a consultation.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Share Your Vision</h3>
              <p className="text-sm">Tell us about your business goals, challenges, and ideas.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Receive a Proposal</h3>
              <p className="text-sm">We&apos;ll provide a detailed proposal outlining the scope, timeline, and cost.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Kick Off Development</h3>
              <p className="text-sm">Once approved, we&apos;ll start building your solution with regular updates.</p>
            </div>
          </div>
          <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
} 