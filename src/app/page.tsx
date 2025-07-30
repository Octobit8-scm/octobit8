"use client";

import Image from "next/image";


const solutions = [
  {
    icon: <Image src="/icons/ai.svg" alt="AI & Automation" width={40} height={40} className="w-10 h-10 mb-3" />,
    title: "AI & Automation",
    desc: "Automate processes, gain insights, and drive innovation with AI, ML, and RPA.",
    href: "/services/ai-development"
  },
  {
    icon: <Image src="/icons/cloud-migration.svg" alt="Cloud Modernization" width={40} height={40} className="w-10 h-10 mb-3" />,
    title: "Cloud Modernization",
    desc: "Migrate, optimize, and scale on secure, agile cloud platforms.",
    href: "/services/cloud"
  },
  {
    icon: <Image src="/icons/analytics.svg" alt="Data & Analytics" width={40} height={40} className="w-10 h-10 mb-3" />,
    title: "Data & Analytics",
    desc: "Unlock business value with advanced analytics, BI, and data engineering.",
    href: "/services/data-analytics"
  },
  {
    icon: <Image src="/icons/frontend.svg" alt="Web & Mobile" width={40} height={40} className="w-10 h-10 mb-3" />,
    title: "Web & Mobile Apps",
    desc: "Deliver seamless digital experiences across web and mobile platforms.",
    href: "/services/website-development"
  },
  {
    icon: <Image src="/icons/dev.svg" alt="Custom Software" width={40} height={40} className="w-10 h-10 mb-3" />,
    title: "Custom Software",
    desc: "Build tailored solutions for unique business needs and workflows.",
    href: "/services/custom-software-development"
  },
  {
    icon: <Image src="/icons/recruit.svg" alt="IT Staffing & Consulting" width={40} height={40} className="w-10 h-10 mb-3" />,
    title: "IT Staffing & Consulting",
    desc: "Access top talent and expert guidance for your transformation journey.",
    href: "/services/it-staffing"
  },
];

const processSteps = [
  {
    // Icon: discovery.svg
    icon: (
      <Image src="/icons/discovery.svg" alt="Discovery Icon" width={32} height={32} className="w-8 h-8 mb-2" />
    ),
    title: "Discovery",
    desc: "We listen to your needs and define the best strategy."
  },
  {
    // Icon: plan.svg
    icon: (
      <Image src="/icons/plan.svg" alt="Plan Icon" width={32} height={32} className="w-8 h-8 mb-2" />
    ),
    title: "Plan",
    desc: "Our experts design a tailored solution and roadmap."
  },
  {
    // Icon: execute.svg
    icon: (
      <Image src="/icons/execute.svg" alt="Execute Icon" width={32} height={32} className="w-8 h-8 mb-2" />
    ),
    title: "Execute",
    desc: "We build, automate, and deploy with full transparency."
  },
  {
    // Icon: support.svg
    icon: (
      <Image src="/icons/support.svg" alt="Support Icon" width={32} height={32} className="w-8 h-8 mb-2" />
    ),
    title: "Support",
    desc: "Ongoing optimization and support for your success."
  },
];

const benefits = [
  {
    // Icon: speed.svg
    icon: (
      <Image src="/icons/speed.svg" alt="Speed Icon" width={32} height={32} className="w-8 h-8 mb-2" />
    ),
    title: "Speed",
    desc: "Accelerate delivery and time-to-market."
  },
  {
    // Icon: security.svg
    icon: (
      <Image src="/icons/security.svg" alt="Security Icon" width={32} height={32} className="w-8 h-8 mb-2" />
    ),
    title: "Security",
    desc: "Built-in security and compliance at every step."
  },
  {
    // Icon: cost-savings.svg
    icon: (
      <Image src="/icons/cost-savings.svg" alt="Cost Savings Icon" width={32} height={32} className="w-8 h-8 mb-2" />
    ),
    title: "Cost Savings",
    desc: "Optimize spend and maximize ROI."
  },
  {
    // Icon: scalability.svg
    icon: (
      <Image src="/icons/scalability.svg" alt="Scalability Icon" width={32} height={32} className="w-8 h-8 mb-2" />
    ),
    title: "Scalability",
    desc: "Scale apps and infra on demand."
  },
  {
    // Icon: support-247.svg
    icon: (
      <Image src="/icons/support-247.svg" alt="24/7 Support Icon" width={32} height={32} className="w-8 h-8 mb-2" />
    ),
    title: "24/7 Support",
    desc: "Proactive monitoring and expert help."
  },
];

const clients = [
  {
    name: "FinTechPro",
    desc: "Modernized banking platform with secure cloud migration.",
    // Icon: fintechpro.svg
    icon: (
      <Image src="/icons/fintechpro.svg" alt="FinTechPro Icon" width={40} height={40} className="w-10 h-10 mb-3" />
    )
  },
  {
    name: "EduCloud",
    desc: "Scaled EdTech platform to serve millions of students.",
    // Icon: educloud.svg
    icon: (
      <Image src="/icons/educloud.svg" alt="EduCloud Icon" width={40} height={40} className="w-10 h-10 mb-3" />
    )
  },
  {
    name: "LogiTrack",
    desc: "Optimized logistics with real-time cloud analytics.",
    // Icon: logitrack.svg
    icon: (
      <Image src="/icons/logitrack.svg" alt="LogiTrack Icon" width={40} height={40} className="w-10 h-10 mb-3" />
    )
  },
];

const partners = [
  {
    name: "AWS",
    // Icon: aws.svg
    icon: (
      <Image src="/icons/aws.svg" alt="AWS Icon" width={32} height={32} className="w-8 h-8 mb-2" />
    )
  },
  {
    name: "GCP",
    // Icon: gcp.svg
    icon: (
      <Image src="/icons/gcp.svg" alt="GCP Icon" width={32} height={32} className="w-8 h-8 mb-2" />
    )
  },
  {
    name: "Azure",
    // Icon: azure.svg
    icon: (
      <Image src="/icons/azure.svg" alt="Azure Icon" width={32} height={32} className="w-8 h-8 mb-2" />
    )
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
              Accelerate Your <span className="text-blue-700">Digital Transformation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-2 text-center">
              Unlock innovation, agility, and growth with Octobit8. We deliver end-to-end digital transformation—cloud, AI, analytics, web, mobile, automation, and more.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center gap-3 text-gray-800 text-base"><Image src="/icons/speed.svg" alt="Speed" width={24} height={24} /> Rapid Digital Innovation</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><Image src="/icons/ai.svg" alt="AI" width={24} height={24} /> AI & Data-Driven Decisions</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><Image src="/icons/cloud-migration.svg" alt="Cloud" width={24} height={24} /> Cloud & Modern Platforms</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><Image src="/icons/mobile.svg" alt="Mobile" width={24} height={24} /> Seamless User Experiences</li>
            </ul>
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

      {/* Solutions Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/icons/solutions.svg" alt="Solutions" width={40} height={40} />
              <h2 className="text-3xl font-bold text-blue-800 text-center">Digital Transformation Solutions</h2>
            </div>
            <p className="text-lg text-gray-700 text-center max-w-2xl">Comprehensive digital transformation services to accelerate your business growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {solutions.map((sol) => (
              <div key={sol.title} className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center transition-transform hover:scale-105">
                <div className="mb-3 transition-transform hover:scale-110">
                  <span className="glow-effect block">{sol.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2 text-center tracking-tight font-sans font-semibold text-lg">{sol.title}</h3>
                <p className="text-gray-700 text-center mb-4">{sol.desc}</p>
                <a href={sol.href} className="mt-2 inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full font-semibold transition hover:scale-105">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works / Process */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/icons/process.svg" alt="Process" width={40} height={40} />
              <h2 className="text-3xl font-bold text-blue-800 text-center">How It Works</h2>
            </div>
            <p className="text-lg text-gray-700 text-center max-w-2xl">Our proven 4-step process ensures successful digital transformation delivery.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0 md:space-x-12 relative">
            {/* Vertical timeline for desktop */}
            <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-1 bg-gradient-to-b from-blue-200 to-blue-100 z-0" style={{transform: 'translateX(-50%)'}} />
            {processSteps.map((step, idx) => (
              <div key={step.title} className="flex flex-col items-center md:w-56 mb-8 md:mb-0 bg-white rounded-2xl shadow-xl p-8 relative z-10 transition-transform hover:scale-105">
                <div className="mb-2 glow-effect">{step.icon}</div>
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
              <Image src="/icons/benefits.svg" alt="Benefits" width={40} height={40} />
              <h2 className="text-3xl font-bold text-blue-800 text-center">Business Benefits</h2>
            </div>
            <p className="text-lg text-gray-700 text-center max-w-2xl">Experience measurable improvements in efficiency, security, and growth.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-10 text-center">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105">
                <div className="mb-2 glow-effect transition-transform hover:scale-110">{b.icon}</div>
                <h4 className="font-bold text-blue-800 mb-1 tracking-tight">{b.title}</h4>
                <p className="text-gray-700 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories / Clients */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/icons/success.svg" alt="Success" width={40} height={40} />
              <h2 className="text-3xl font-bold text-blue-800 text-center">Success Stories</h2>
            </div>
            <p className="text-lg text-gray-700 text-center max-w-2xl">Real results from real clients across diverse industries.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {clients.map((c) => (
              <div key={c.name} className="rounded-2xl shadow-xl p-10 flex flex-col items-center transition-transform hover:scale-105">
                <div className="mb-3 drop-shadow-xl">{c.icon}</div>
                <h4 className="font-bold text-blue-800 mb-1 text-center text-lg tracking-tight">{c.name}</h4>
                <p className="text-gray-700 text-center text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="w-full py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/icons/partners.svg" alt="Partners" width={40} height={40} />
              <h2 className="text-3xl font-bold text-blue-800 text-center">Our Cloud Partners</h2>
            </div>
            <p className="text-lg text-gray-700 text-center max-w-2xl">Certified experts across leading cloud platforms.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((p) => (
              <div key={p.name} className="bg-white rounded-xl shadow p-4 flex flex-col items-center min-w-[100px] min-h-[80px] transition-transform hover:scale-105">
                <Image src={p.icon.props.src} alt={p.name} width={32} height={32} className="w-8 h-8 mb-2 grayscale hover:grayscale-0 transition duration-300" />
                <span className="text-blue-700 font-bold text-sm mt-1">{p.name}</span>
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
              <Image src="/icons/cta.svg" alt="Get Started" width={48} height={48} className="w-12 h-12" />
              <h2 className="text-3xl font-bold text-white">Ready for Digital Transformation?</h2>
            </div>
            <p className="text-lg text-white mb-8">Contact our experts to start your digital transformation journey today.</p>
            <a href="/contact" className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-semibold shadow hover:bg-blue-100 transition">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}
