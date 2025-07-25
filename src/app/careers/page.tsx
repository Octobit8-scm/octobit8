"use client";

import Image from "next/image";

export default function CareersPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-20 md:py-28 overflow-hidden shadow-xl rounded-b-3xl mb-16">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute left-0 top-0 w-1/2 h-40 md:h-64 animate-float-slow" viewBox="0 0 400 160"><ellipse cx="200" cy="80" rx="200" ry="60" fill="#60a5fa" fillOpacity="0.18" /></svg>
          <svg className="absolute right-0 top-10 w-1/3 h-32 animate-float" viewBox="0 0 300 128"><ellipse cx="150" cy="64" rx="150" ry="40" fill="#fbbf24" fillOpacity="0.10" /></svg>
          <svg className="absolute left-1/4 bottom-0 w-1/2 h-24 animate-float-reverse" viewBox="0 0 400 96"><ellipse cx="200" cy="48" rx="200" ry="30" fill="#fff" fillOpacity="0.08" /></svg>
        </div>
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <div className="mb-6 flex flex-col items-center">
            <span className="inline-block bg-white/20 text-blue-100 font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 border border-blue-200 animate-pulse">Careers</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">Careers at <span className="text-yellow-300">Octobit8</span></h1>
            <p className="text-lg md:text-xl font-medium text-blue-100 mb-6 max-w-2xl">Join our team of passionate professionals and help shape the future of IT consulting and services. We are always looking for talented individuals to join us!</p>
          </div>
          <a href="#openings" className="inline-block bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition text-lg glow-effect animate-bounce">View Openings</a>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-24 md:h-32 opacity-30" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </section>
      {/* SECTION DIVIDER */}
      <div className="w-full flex justify-center mb-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>
      {/* Job Grid */}
      <section id="openings" className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Image src="/icons/team.svg" alt="Team" width={40} height={40} />
            <h2 className="text-3xl font-bold text-blue-800 text-center">Open Positions</h2>
          </div>
          <p className="text-lg text-gray-700 text-center max-w-2xl">We’re always looking for talented people. If you don’t see a role that fits, send us your resume!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {/* DevOps Engineer */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition group">
            <Image src="/icons/devops.svg" alt="DevOps Engineer" width={56} height={56} className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-semibold text-blue-700 mb-2">DevOps Engineer</span>
            <span className="text-gray-500 mb-2 text-center">Design, automate, and optimize CI/CD pipelines and cloud infrastructure.</span>
            <span className="text-green-600 font-semibold mb-4">Accepting Applications</span>
            <a href="/careers/devops-engineer" className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition">View Details</a>
          </div>
          {/* Cloud Architect */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition group">
            <Image src="/icons/cloud.svg" alt="Cloud Architect" width={56} height={56} className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-semibold text-blue-700 mb-2">Cloud Architect</span>
            <span className="text-gray-500 mb-2 text-center">Lead the design and implementation of scalable, secure cloud solutions.</span>
            <span className="text-green-600 font-semibold mb-4">Accepting Applications</span>
            <a href="/careers/cloud-architect" className="inline-block bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-indigo-800 transition">View Details</a>
          </div>
          {/* Site Reliability Engineer (SRE) */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition group">
            <Image src="/icons/monitoring.svg" alt="Site Reliability Engineer" width={56} height={56} className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-semibold text-blue-700 mb-2">Site Reliability Engineer (SRE)</span>
            <span className="text-gray-500 mb-2 text-center">Ensure reliability, scalability, and performance of cloud-native systems.</span>
            <span className="text-green-600 font-semibold mb-4">Accepting Applications</span>
            <a href="/careers/sre" className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-700 transition">View Details</a>
          </div>
          {/* Cloud Security Engineer */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition group">
            <Image src="/icons/cloud-security.svg" alt="Cloud Security Engineer" width={56} height={56} className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-semibold text-blue-700 mb-2">Cloud Security Engineer</span>
            <span className="text-gray-500 mb-2 text-center">Implement and monitor security controls for cloud environments.</span>
            <span className="text-green-600 font-semibold mb-4">Accepting Applications</span>
            <a href="/careers/cloud-security-engineer" className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-red-700 transition">View Details</a>
          </div>
          {/* Platform Engineer */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition group">
            <Image src="/icons/container.svg" alt="Platform Engineer" width={56} height={56} className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-semibold text-blue-700 mb-2">Platform Engineer</span>
            <span className="text-gray-500 mb-2 text-center">Build and maintain internal developer platforms and automation tools.</span>
            <span className="text-green-600 font-semibold mb-4">Accepting Applications</span>
            <a href="/careers/platform-engineer" className="inline-block bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-cyan-700 transition">View Details</a>
          </div>
          {/* Cloud Consultant */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition group">
            <Image src="/icons/consultant.svg" alt="Cloud Consultant" width={56} height={56} className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-semibold text-blue-700 mb-2">Cloud Consultant</span>
            <span className="text-gray-500 mb-2 text-center">Advise clients on cloud strategy, migration, and optimization.</span>
            <span className="text-green-600 font-semibold mb-4">Accepting Applications</span>
            <a href="/careers/cloud-consultant" className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-yellow-600 transition">View Details</a>
          </div>
        </div>
      </section>
      {/* SECTION DIVIDER */}
      <div className="w-full flex justify-center my-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>
      {/* Internships Section */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Image src="/icons/internship.svg" alt="Internship" width={40} height={40} />
            <h2 className="text-3xl font-bold text-blue-800 text-center">Internships</h2>
          </div>
          <p className="text-lg text-gray-700 text-center max-w-2xl">Kickstart your career with hands-on experience in DevOps, Cloud, and Software Engineering. Our internships offer mentorship, real projects, and a pathway to full-time roles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {/* DevOps Intern */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition group">
            <Image src="/icons/devops.svg" alt="DevOps Intern" width={56} height={56} className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-semibold text-blue-700 mb-2">DevOps Intern</span>
            <span className="text-gray-500 mb-2 text-center">Learn CI/CD, automation, and cloud tools by working with our DevOps team.</span>
            <span className="text-green-600 font-semibold mb-4">Accepting Applications</span>
            <a href="mailto:careers@octobit8.com?subject=Application%20for%20DevOps%20Internship" className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition">Apply Now</a>
          </div>
          {/* Cloud Intern */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition group">
            <Image src="/icons/cloud.svg" alt="Cloud Intern" width={56} height={56} className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-semibold text-blue-700 mb-2">Cloud Intern</span>
            <span className="text-gray-500 mb-2 text-center">Gain experience in cloud platforms, infrastructure, and automation projects.</span>
            <span className="text-green-600 font-semibold mb-4">Accepting Applications</span>
            <a href="mailto:careers@octobit8.com?subject=Application%20for%20Cloud%20Internship" className="inline-block bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-indigo-800 transition">Apply Now</a>
          </div>
          {/* Frontend Intern */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition group">
            <Image src="/icons/frontend.svg" alt="Frontend Intern" width={56} height={56} className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-semibold text-blue-700 mb-2">Frontend Intern</span>
            <span className="text-gray-500 mb-2 text-center">Work on modern web apps using React, Next.js, and Tailwind CSS.</span>
            <span className="text-green-600 font-semibold mb-4">Accepting Applications</span>
            <a href="mailto:careers@octobit8.com?subject=Application%20for%20Frontend%20Internship" className="inline-block bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-cyan-700 transition">Apply Now</a>
          </div>
          {/* Backend Intern */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition group">
            <Image src="/icons/backend.svg" alt="Backend Intern" width={56} height={56} className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-semibold text-blue-700 mb-2">Backend Intern</span>
            <span className="text-gray-500 mb-2 text-center">Build APIs, work with databases, and automate backend processes.</span>
            <span className="text-green-600 font-semibold mb-4">Accepting Applications</span>
            <a href="mailto:careers@octobit8.com?subject=Application%20for%20Backend%20Internship" className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-yellow-600 transition">Apply Now</a>
          </div>
        </div>
      </section>
      {/* SECTION DIVIDER */}
      <div className="w-full flex justify-center my-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>
      {/* Call to Action */}
      <section className="py-16 px-4 flex justify-center items-center">
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white rounded-2xl shadow-xl p-10 max-w-xl w-full flex flex-col items-center">
          <Image src="/icons/team.svg" alt="Contact" width={64} height={64} className="w-16 h-16 mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-center">Didn’t find your role?</h2>
          <p className="text-blue-100 mb-6 text-center">We’re always interested in meeting talented people. Send us your resume and we’ll reach out if there’s a fit.</p>
          <a href="mailto:careers@octobit8.com" className="inline-block bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition text-lg glow-effect">Send Your Resume</a>
        </div>
      </section>
    </div>
  );
} 