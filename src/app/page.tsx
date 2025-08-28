"use client";




const processSteps = [
  {
    title: "Discovery",
    desc: "We listen to your needs and define the best strategy."
  },
  {
    title: "Plan",
    desc: "Our experts design a tailored solution and roadmap."
  },
  {
    title: "Execute",
    desc: "We build, automate, and deploy with full transparency."
  },
  {
    title: "Support",
    desc: "Ongoing optimization and support for your success."
  },
];

const benefits = [
  {
    title: "Speed",
    desc: "Accelerate delivery and time-to-market."
  },
  {
    title: "Security",
    desc: "Built-in security and compliance at every step."
  },
  {
    title: "Cost Savings",
    desc: "Optimize spend and maximize ROI."
  },
  {
    title: "Scalability",
    desc: "Scale apps and infra on demand."
  },
  {
    title: "24/7 Support",
    desc: "Proactive monitoring and expert help."
  },
];

const clients = [
  {
    name: "FinTechPro",
    desc: "Modernized banking platform with secure cloud migration."
  },
  {
    name: "EduCloud",
    desc: "Scaled EdTech platform to serve millions of students."
  },
  {
    name: "LogiTrack",
    desc: "Optimized logistics with real-time cloud analytics."
  },
];

const partners = [
  {
    name: "AWS"
  },
  {
    name: "GCP"
  },
  {
    name: "Azure"
  },
];





export default function Home() {


  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          {/* Left: Headline, subheading, benefits, CTA */}
          <div className="flex-1 flex flex-col items-center md:items-center gap-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-2 drop-shadow-xl text-center">
              Transform Your Business with <span className="text-blue-700">Innovative Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-2 text-center">
              Unlock innovation, agility, and growth with Octobit8. We deliver comprehensive solutions—AI development, DevOps & cloud, IT staffing, industry solutions, and career development.
            </p>

            <a href="#contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white px-12 py-4 rounded-full font-semibold shadow-2xl text-lg transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200 ring-offset-2 ring-offset-white glow-effect">Get Started</a>
          </div>
          {/* Right: Contact Form with glassmorphism effect */}
          <div className="flex-1 flex justify-center items-center relative mt-12 md:mt-0">
            <div className="absolute -inset-4 md:-inset-8 rounded-3xl bg-gradient-to-br from-blue-100/60 to-blue-300/30 blur-lg z-0" />
            <form className="relative bg-white/70 backdrop-blur-md border border-blue-100 rounded-3xl shadow-2xl p-12 w-full max-w-md flex flex-col gap-6 z-10">
              <h2 className="text-3xl font-extrabold text-blue-800 mb-6 text-center tracking-tight">Book a Consultation Call</h2>
              <div className="flex gap-4 flex-col sm:flex-row">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                  <input type="text" name="firstName" id="firstName" required className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                  <input type="text" name="lastName" id="lastName" required className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Work Email</label>
                <input type="email" name="email" id="email" required className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
              </div>
              <div>
                <label htmlFor="org" className="block text-sm font-semibold text-gray-700 mb-1">Organisation Name</label>
                <input type="text" name="org" id="org" required className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
              </div>
              <div>
                <label htmlFor="help" className="block text-sm font-semibold text-gray-700 mb-1">How can we help you?</label>
                <textarea name="help" id="help" rows={4} required className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"></textarea>
              </div>
              <button type="submit" className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold rounded-xl px-8 py-4 mt-2 shadow-xl hover:scale-105 transition w-full text-lg glow-effect">Book a Consultation Call</button>
            </form>
          </div>
        </div>
      </section>

             {/* Industry Solutions Section */}
       <section className="w-full py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
         <div className="container mx-auto">
           <div className="flex flex-col items-center mb-10">
             <div className="flex items-center gap-3 mb-2">
               <h2 className="text-3xl font-bold text-blue-800 text-center">Industry Solutions</h2>
             </div>
             <p className="text-lg text-gray-700 text-center max-w-2xl">Tailored digital solutions designed specifically for your industry needs and challenges.</p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105">
               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">Healthcare</h3>
               <p className="text-gray-700 text-center text-sm mb-4">Digital health solutions, telemedicine platforms, and patient management systems.</p>
               <a href="/solutions/healthcare" className="text-blue-600 font-semibold hover:text-blue-800 transition">Learn More →</a>
             </div>
             <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105">
               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5c1.747 0 3.332.477 4.5 1.253zm0 0C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C16.5 18.523 14.754 19 13.168 18.523L12 18.253z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-green-800 mb-3 text-center">EdTech</h3>
               <p className="text-gray-700 text-center text-sm mb-4">Learning management systems, virtual classrooms, and educational analytics platforms.</p>
               <a href="/solutions/edtech" className="text-green-600 font-semibold hover:text-green-800 transition">Learn More →</a>
             </div>
             <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105">
               <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-purple-800 mb-3 text-center">Logistics</h3>
               <p className="text-gray-700 text-center text-sm mb-4">Supply chain optimization, real-time tracking, and logistics management solutions.</p>
               <a href="/solutions/logistics" className="text-purple-600 font-semibold hover:text-purple-800 transition">Learn More →</a>
             </div>
             <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105">
               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-orange-800 mb-3 text-center">Retail</h3>
               <p className="text-gray-700 text-center text-sm mb-4">E-commerce platforms, inventory management, and customer experience solutions.</p>
               <a href="/solutions/retail" className="text-orange-600 font-semibold hover:text-orange-800 transition">Learn More →</a>
             </div>
           </div>
           <div className="text-center mt-8">
             <a href="/solutions" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold transition hover:scale-105">View All Solutions</a>
           </div>
         </div>
       </section>

       {/* AI Development Section */}
       <section className="w-full py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-100">
         <div className="container mx-auto">
           <div className="flex flex-col items-center mb-10">
             <div className="flex items-center gap-3 mb-2">
               <h2 className="text-3xl font-bold text-purple-800 text-center">AI Development</h2>
             </div>
             <p className="text-lg text-gray-700 text-center max-w-2xl">Transform your business with cutting-edge artificial intelligence and machine learning solutions.</p>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105">
               <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-purple-800 mb-3 text-center">Machine Learning</h3>
               <p className="text-gray-700 text-center text-sm mb-4">Custom ML models for predictive analytics, pattern recognition, and data insights.</p>
               <a href="/ai-development" className="text-purple-600 font-semibold hover:text-purple-800 transition">Learn More →</a>
             </div>
             <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105">
               <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-pink-800 mb-3 text-center">Natural Language Processing</h3>
               <p className="text-gray-700 text-center text-sm mb-4">Chatbots, sentiment analysis, and language understanding systems.</p>
               <a href="/ai-development" className="text-pink-600 font-semibold hover:text-pink-800 transition">Learn More →</a>
             </div>
             <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105">
               <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-indigo-800 mb-3 text-center">Intelligent Automation</h3>
               <p className="text-gray-700 text-center text-sm mb-4">RPA solutions, workflow automation, and smart process optimization.</p>
               <a href="/ai-development" className="text-indigo-600 font-semibold hover:text-indigo-800 transition">Learn More →</a>
             </div>
           </div>
           <div className="text-center mt-8">
             <a href="/ai-development" className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-400 text-white px-8 py-3 rounded-full font-semibold transition hover:scale-105">Explore AI Solutions</a>
           </div>
         </div>
       </section>

       {/* DevOps & Cloud Section */}
       <section className="w-full py-20 px-4 bg-gradient-to-br from-cyan-50 via-white to-blue-100">
         <div className="container mx-auto">
           <div className="flex flex-col items-center mb-10">
             <div className="flex items-center gap-3 mb-2">
               <h2 className="text-3xl font-bold text-cyan-800 text-center">DevOps & Cloud</h2>
             </div>
             <p className="text-lg text-gray-700 text-center max-w-2xl">Streamline your development workflow and accelerate deployment with modern DevOps practices.</p>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105">
               <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-cyan-800 mb-3 text-center">CI/CD Pipeline</h3>
               <p className="text-gray-700 text-center text-sm mb-4">Automated build, test, and deployment pipelines for faster delivery.</p>
               <a href="/devops-cloud" className="text-cyan-600 font-semibold hover:text-cyan-800 transition">Learn More →</a>
             </div>
             <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105">
               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">Cloud Migration</h3>
               <p className="text-gray-700 text-center text-sm mb-4">Seamless migration to AWS, Azure, or GCP with optimization strategies.</p>
               <a href="/devops-cloud" className="text-blue-600 font-semibold hover:text-blue-800 transition">Learn More →</a>
             </div>
             <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105">
               <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-teal-800 mb-3 text-center">Infrastructure as Code</h3>
               <p className="text-gray-700 text-center text-sm mb-4">Terraform, CloudFormation, and automated infrastructure management.</p>
               <a href="/devops-cloud" className="text-teal-600 font-semibold hover:text-teal-800 transition">Learn More →</a>
             </div>
           </div>
           <div className="text-center mt-8">
             <a href="/devops-cloud" className="inline-block bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-400 text-white px-8 py-3 rounded-full font-semibold transition hover:scale-105">Explore DevOps</a>
           </div>
         </div>
       </section>



      {/* How It Works / Process */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-blue-800 text-center">How It Works</h2>
            </div>
            <p className="text-lg text-gray-700 text-center max-w-2xl">Our proven 4-step process ensures successful digital transformation delivery.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0 md:space-x-12 relative">
            {/* Vertical timeline for desktop */}
            <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-1 bg-gradient-to-b from-blue-200 to-blue-100 z-0" style={{transform: 'translateX(-50%)'}} />
            {processSteps.map((step, idx) => (
              <div key={step.title} className="flex flex-col items-center md:w-56 mb-8 md:mb-0 bg-white rounded-2xl shadow-xl p-8 relative z-10 transition-transform hover:scale-105">
                <h4 className="font-bold text-blue-800 mb-1 text-lg text-center tracking-tight">{step.title}</h4>
                <p className="text-gray-700 text-center text-sm">{step.desc}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block w-12 h-1 bg-blue-200 my-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-blue-800 text-center">Business Benefits</h2>
            </div>
            <p className="text-lg text-gray-700 text-center max-w-2xl">Experience measurable improvements in efficiency, security, and growth.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-10 text-center">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105">
                <h4 className="font-bold text-blue-800 mb-1 tracking-tight">{b.title}</h4>
                <p className="text-gray-700 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-green-50 via-white to-emerald-100">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-green-800 text-center">Career Opportunities</h2>
            </div>
            <p className="text-lg text-gray-700 text-center max-w-2xl">Launch your career in technology with our comprehensive training and internship programs.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Training Programs</h3>
              <p className="text-gray-700 text-center mb-6">Master cutting-edge technologies with our industry-focused training programs designed for professionals and students.</p>
              <a href="/career/training-internship" className="inline-block bg-gradient-to-r from-green-600 via-green-500 to-emerald-400 text-white px-6 py-3 rounded-full font-semibold transition hover:scale-105">Explore Training</a>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Internship Programs</h3>
              <p className="text-gray-700 text-center mb-6">Gain hands-on experience working on real projects with our internship opportunities in AI, DevOps, and more.</p>
              <a href="/career/training-internship" className="inline-block bg-gradient-to-r from-green-600 via-green-500 to-emerald-400 text-white px-6 py-3 rounded-full font-semibold transition hover:scale-105">Apply Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories / Clients */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-blue-800 text-center">Success Stories</h2>
            </div>
            <p className="text-lg text-gray-700 text-center max-w-2xl">Real results from real clients across diverse industries.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {clients.map((c) => (
              <div key={c.name} className="rounded-2xl shadow-xl p-10 flex flex-col items-center transition-transform hover:scale-105">
                <h4 className="font-bold text-blue-800 mb-1 text-center text-lg tracking-tight">{c.name}</h4>
                <p className="text-gray-700 text-center text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Insights Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-100">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-indigo-800 text-center">Latest Insights & Trends</h2>
            </div>
            <p className="text-lg text-gray-700 text-center max-w-2xl">Stay ahead with expert perspectives on technology, AI, DevOps, and industry trends.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-3">AI & Machine Learning</h3>
              <p className="text-gray-700 text-sm mb-4">Explore the latest developments in artificial intelligence and how they&apos;re transforming industries.</p>
              <a href="/blog" className="text-indigo-600 font-semibold hover:text-indigo-800 transition">Read More →</a>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">DevOps & Cloud</h3>
              <p className="text-gray-700 text-sm mb-4">Learn about modern DevOps practices, cloud strategies, and infrastructure automation.</p>
              <a href="/blog" className="text-purple-600 font-semibold hover:text-purple-800 transition">Read More →</a>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Career Development</h3>
              <p className="text-gray-700 text-sm mb-4">Tips and insights for advancing your career in technology and staying competitive.</p>
              <a href="/blog" className="text-blue-600 font-semibold hover:text-blue-800 transition">Read More →</a>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/blog" className="inline-block bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-400 text-white px-8 py-3 rounded-full font-semibold transition hover:scale-105">Explore All Articles</a>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="w-full py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-blue-800 text-center">Our Cloud Partners</h2>
            </div>
            <p className="text-lg text-gray-700 text-center max-w-2xl">Certified experts across leading cloud platforms.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center transition-transform hover:scale-105">
                <h4 className="font-bold text-blue-800 text-center tracking-tight">{p.name}</h4>
              </div>
              ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="w-full py-16 px-4 bg-blue-700 text-center">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl font-bold text-white">Ready to Transform Your Business?</h2>
            </div>
            <p className="text-lg text-white mb-8">Contact our experts to start your journey with AI, DevOps, IT staffing, or career development today.</p>
            <a href="/contact" className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-semibold shadow hover:bg-blue-100 transition">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}
