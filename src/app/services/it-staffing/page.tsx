import Image from "next/image";
import Link from "next/link";

export default function ITStaffingPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">IT Staffing Services</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Connect Top-Tier IT Talent with <span className="text-blue-700">Business Success</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Welcome to our premier IT Staffing Services, where we connect top-tier IT talent with businesses to drive innovation and success. Our comprehensive staffing solutions are designed to meet your unique needs, ensuring seamless integration of skilled professionals into your projects.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">Request Talent</Link>
        </div>
      </section>

      {/* Why Choose Our IT Staffing Services */}
      <section className="max-w-4xl mx-auto mb-16 px-4 relative">
        <div className="bg-white rounded-2xl shadow-lg p-10 border-l-8 border-blue-500 flex flex-col items-center relative z-10">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-6 flex items-center gap-2"><Image src="/icons/star.svg" alt="Star" width={28} height={28} />Why Choose Our IT Staffing Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Access to Top Talent</h3>
                  <p className="text-gray-700 text-sm">We maintain a robust network of vetted IT professionals, including software developers, cybersecurity experts, data analysts, cloud architects, and more.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Customized Solutions</h3>
                  <p className="text-gray-700 text-sm">Whether you need temporary, permanent, or contract-to-hire staff, we tailor our services to align with your business goals.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Speed and Efficiency</h3>
                  <p className="text-gray-700 text-sm">Our streamlined recruitment process ensures quick placement of candidates, minimizing downtime.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Industry Expertise</h3>
                  <p className="text-gray-700 text-sm">With deep knowledge of the IT sector, we understand the technical and cultural fit required for your organization.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Cost-Effective</h3>
                  <p className="text-gray-700 text-sm">Optimize your budget with flexible staffing models that reduce overhead costs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Service Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Service Offerings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive staffing solutions tailored to your business needs and project requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Temporary Staffing</h3>
              <p className="text-gray-700 text-sm mb-4">Hire IT professionals for short-term projects, seasonal demands, or to cover employee absences.</p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-blue-700 text-sm font-semibold">Ideal for businesses needing immediate, specialized skills without long-term commitments.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Permanent Staffing</h3>
              <p className="text-gray-700 text-sm mb-4">Find full-time IT professionals who align with your company&apos;s vision and culture.</p>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-green-700 text-sm font-semibold">We handle end-to-end recruitment, from sourcing to onboarding.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-yellow-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Contract-to-Hire</h3>
              <p className="text-gray-700 text-sm mb-4">Test the fit of a candidate through a contract period before transitioning them to a permanent role.</p>
              <div className="bg-yellow-50 rounded-lg p-3">
                <p className="text-yellow-700 text-sm font-semibold">This model offers flexibility and reduces hiring risks.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Managed IT Teams</h3>
              <p className="text-gray-700 text-sm mb-4">Outsource entire IT teams for specific projects or ongoing operations.</p>
              <div className="bg-purple-50 rounded-lg p-3">
                <p className="text-purple-700 text-sm font-semibold">Our managed teams work under your direction while we handle HR, payroll, and compliance.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-pink-600 font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Specialized IT Roles</h3>
              <p className="text-gray-700 text-sm mb-4">We provide experts in niche areas, including:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Software Development (Full-Stack, Frontend, Backend)</li>
                <li>• Cloud Computing (AWS, Azure, Google Cloud)</li>
                <li>• Cybersecurity (Penetration Testing, Compliance)</li>
                <li>• Data Science and AI/ML</li>
                <li>• DevOps and Infrastructure Management</li>
                <li>• IT Project Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Model of Working with Clients */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Model of Working with Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We follow a client-centric, collaborative approach to ensure your staffing needs are met efficiently and effectively.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">1. Needs Assessment</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Discovery Call</h4>
                    <p>Detailed consultation to understand your project requirements, technical needs, team dynamics, and company culture.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Skill Mapping</h4>
                    <p>Identify specific skills, certifications, and experience levels required for the role(s).</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">2. Talent Sourcing</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-600">Candidate Pool Access</h4>
                    <p>Leverage our extensive database of pre-screened IT professionals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-600">Active Recruitment</h4>
                    <p>Use targeted outreach, job boards, and industry networks to attract top talent.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-600">Diversity & Inclusion</h4>
                    <p>Prioritize diverse candidate pools to bring varied perspectives to your team.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">3. Screening & Selection</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-yellow-600">Technical Screening</h4>
                    <p>Rigorous technical assessments, coding tests, system design evaluations, and tool proficiency checks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-yellow-600">Behavioral Interviews</h4>
                    <p>Assess soft skills, cultural fit, and alignment with your company values.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-yellow-600">Client Review</h4>
                    <p>Receive shortlist of top candidates with detailed profiles, resumes, and interview notes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">4. Placement & Onboarding</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Seamless Integration</h4>
                    <p>Coordinate with your team to ensure smooth onboarding, including access to tools, systems, and training.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Trial Period Support</h4>
                    <p>For contract-to-hire roles, monitor performance and provide feedback to ensure successful transition.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">5. Ongoing Support</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-pink-600">Performance Monitoring</h4>
                    <p>Regular check-ins with clients and candidates to ensure satisfaction and address concerns.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-pink-600">Replacement Guarantee</h4>
                    <p>If a candidate isn&apos;t the right fit, we provide a replacement at no additional cost within a specified period.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-pink-600">Upskilling Support</h4>
                    <p>Access to training programs to keep your IT staff updated on the latest technologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Recruitment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Recruitment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our structured process ensures high-quality hires with minimal disruption to your operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Requirement Gathering</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Collaborate with your team to define job descriptions, technical requirements, and timelines</li>
                <li>• Establish key performance indicators (KPIs) for the role</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Candidate Sourcing</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Utilize AI-driven tools to match candidates with your requirements</li>
                <li>• Tap into our network of passive and active candidates</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Screening & Evaluation</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Conduct technical assessments using platforms like HackerRank or Codility</li>
                <li>• Perform background checks, reference verifications, and certification validations</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Interview Coordination</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Arrange interviews between your team and shortlisted candidates</li>
                <li>• Provide feedback and facilitate negotiations on salary, benefits, and contracts</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Onboarding & Integration</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Assist with onboarding logistics, including documentation and orientation</li>
                <li>• Ensure candidates are equipped to contribute from day one</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Post-Placement Support</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Regular follow-ups to ensure candidate performance and client satisfaction</li>
                <li>• Offer training and development resources as needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our IT staffing services have empowered businesses across industries. Here are some real-world scenarios.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">1. Scaling Development Teams for a Tech Startup</h3>
              <div className="space-y-4 text-gray-700 text-sm">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Challenge:</h4>
                  <p>A fast-growing startup needed 10 full-stack developers to meet a tight product launch deadline.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Solution:</h4>
                  <p>We sourced and placed 10 developers proficient in React and Node.js within two weeks. Our managed team model allowed the startup to focus on product development while we handled HR and compliance.</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-700 mb-2">Outcome:</h4>
                  <p>The product launched on schedule, and 80% of the contract developers were transitioned to permanent roles.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">2. Cybersecurity Expertise for a Financial Institution</h3>
              <div className="space-y-4 text-gray-700 text-sm">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Challenge:</h4>
                  <p>A bank required certified cybersecurity professionals to strengthen its compliance with GDPR and PCI-DSS regulations.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Solution:</h4>
                  <p>We provided three CISSP-certified experts for a six-month contract, with expertise in penetration testing and risk assessment.</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-700 mb-2">Outcome:</h4>
                  <p>The bank passed its compliance audit with zero findings, and the contract staff trained the internal team on best practices.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">3. Cloud Migration for a Retail Company</h3>
              <div className="space-y-4 text-gray-700 text-sm">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Challenge:</h4>
                  <p>A retailer needed AWS-certified architects to migrate its e-commerce platform to the cloud.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Solution:</h4>
                  <p>We placed two AWS Solutions Architects and a DevOps engineer to design and execute the migration.</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-700 mb-2">Outcome:</h4>
                  <p>The migration was completed 20% faster than projected, with zero downtime, enabling the retailer to scale operations during peak seasons.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">4. Data Science for a Healthcare Provider</h3>
              <div className="space-y-4 text-gray-700 text-sm">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Challenge:</h4>
                  <p>A healthcare organization needed data scientists to analyze patient data for predictive analytics.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Solution:</h4>
                  <p>We staffed a team of three data scientists skilled in Python, TensorFlow, and SQL, working remotely under a managed team model.</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-700 mb-2">Outcome:</h4>
                  <p>The team developed a predictive model that improved patient outcomes by 15%, leading to a long-term partnership.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Partnering with Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Benefits of Partnering with Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive advantages that drive your business success through strategic IT staffing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Reduced Time-to-Hire</h3>
              <p className="text-gray-700 text-sm">Fill roles 30-50% faster than traditional recruitment methods with our streamlined process.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Cost Savings</h3>
              <p className="text-gray-700 text-sm">Eliminate the need for in-house recruitment teams and reduce onboarding costs significantly.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Scalability</h3>
              <p className="text-gray-700 text-sm">Easily scale your team up or down based on project demands with flexible staffing models.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Risk Mitigation</h3>
              <p className="text-gray-700 text-sm">Our replacement guarantee and performance monitoring minimize hiring risks and ensure quality.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Access to Innovation</h3>
              <p className="text-gray-700 text-sm">Stay ahead with professionals trained in cutting-edge technologies like AI, blockchain, and quantum computing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Today */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Get Started Today</h2>
          <p className="text-xl mb-8">Ready to build your dream IT team? Contact us for a free consultation.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm">staffing@itstaffsolutions.com</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm">(800) 555-1234</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Website</h3>
              <p className="text-sm">www.itstaffsolutions.com/contact</p>
            </div>
          </div>
          <p className="text-lg mb-6">Our team will work with you to understand your needs and deliver tailored staffing solutions that drive success.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg">
            Start Building Your Team
          </Link>
        </div>
      </section>
    </div>
  );
} 