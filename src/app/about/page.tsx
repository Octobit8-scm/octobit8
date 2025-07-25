"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen py-0">
      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">About <span className="text-blue-500">Octobit8</span></h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">Octobit8 is a forward-thinking IT consulting and services company dedicated to empowering businesses through technology. With a team of passionate experts, we deliver innovative solutions that drive digital transformation and business growth.</p>
      </section>
      {/* Mission, Vision, Values */}
      <section className="container mx-auto py-8 px-4 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Our Mission</h2>
          <p className="text-gray-600">To enable organizations to achieve their full potential by leveraging cutting-edge technology, expert consulting, and tailored IT solutions.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Our Vision</h2>
          <p className="text-gray-600">To be a global leader in IT consulting and digital innovation, recognized for our commitment to excellence, integrity, and client success.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-left">
            <li>Innovation & Creativity</li>
            <li>Client-Centric Approach</li>
            <li>Integrity & Transparency</li>
            <li>Collaboration & Teamwork</li>
            <li>Continuous Learning</li>
          </ul>
        </div>
      </section>
      {/* Company Story */}
      <section className="container mx-auto py-12 px-4 flex justify-center">
        <div className="bg-blue-100 rounded-2xl shadow-lg p-8 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Story</h2>
          <p className="text-gray-700">Founded by technology enthusiasts, Octobit8 has grown from a small startup to a trusted partner for businesses worldwide. Our journey is defined by our relentless pursuit of excellence and our passion for solving complex business challenges with technology.</p>
        </div>
      </section>
      {/* Leadership Team */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Image src="/icons/user.svg" alt="CEO" width={80} height={80} className="w-20 h-20 rounded-full mb-4 bg-blue-100 object-cover" />
            <h3 className="text-xl font-bold mb-1">Aarav Mehta</h3>
            <span className="text-blue-700 font-semibold mb-2">Chief Executive Officer</span>
            <p className="text-gray-600 text-center">Aarav brings 20+ years of experience in IT strategy and business leadership, driving Octobit8&apos;s vision and growth.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Image src="/icons/user.svg" alt="CTO" width={80} height={80} className="w-20 h-20 rounded-full mb-4 bg-blue-100 object-cover" />
            <h3 className="text-xl font-bold mb-1">Priya Sharma</h3>
            <span className="text-blue-700 font-semibold mb-2">Chief Technology Officer</span>
            <p className="text-gray-600 text-center">Priya leads our technology teams, ensuring we deliver innovative, scalable, and secure solutions for every client.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Image src="/icons/user.svg" alt="COO" width={80} height={80} className="w-20 h-20 rounded-full mb-4 bg-blue-100 object-cover" />
            <h3 className="text-xl font-bold mb-1">Rahul Verma</h3>
            <span className="text-blue-700 font-semibold mb-2">Chief Operating Officer</span>
            <p className="text-gray-600 text-center">Rahul oversees operations and client delivery, ensuring excellence and efficiency across all projects.</p>
          </div>
        </div>
      </section>
      {/* Milestones Timeline */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Milestones</h2>
        <ol className="relative border-l-4 border-blue-200 max-w-2xl mx-auto">
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full mt-1.5 -left-2 border border-white"></div>
            <time className="mb-1 text-xs font-normal leading-none text-blue-700">2017</time>
            <h3 className="text-lg font-semibold text-gray-900">Octobit8 Founded</h3>
            <p className="text-base font-normal text-gray-600">A group of passionate technologists start Octobit8 with a vision to transform IT consulting.</p>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full mt-1.5 -left-2 border border-white"></div>
            <time className="mb-1 text-xs font-normal leading-none text-blue-700">2019</time>
            <h3 className="text-lg font-semibold text-gray-900">First International Client</h3>
            <p className="text-base font-normal text-gray-600">Octobit8 expands globally, delivering solutions for clients in Europe and North America.</p>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full mt-1.5 -left-2 border border-white"></div>
            <time className="mb-1 text-xs font-normal leading-none text-blue-700">2022</time>
            <h3 className="text-lg font-semibold text-gray-900">100th Project Delivered</h3>
            <p className="text-base font-normal text-gray-600">A major milestone as Octobit8 completes its 100th successful project for clients worldwide.</p>
          </li>
          <li className="ml-6">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full mt-1.5 -left-2 border border-white"></div>
            <time className="mb-1 text-xs font-normal leading-none text-blue-700">2024</time>
            <h3 className="text-lg font-semibold text-gray-900">Recognized for Innovation</h3>
            <p className="text-base font-normal text-gray-600">Octobit8 receives industry awards for innovation in AI, cloud, and digital transformation.</p>
          </li>
        </ol>
      </section>
      {/* Corporate Social Responsibility */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Corporate Social Responsibility</h2>
        <div className="bg-white rounded-xl shadow p-8 max-w-3xl mx-auto text-center">
          <p className="text-gray-700 mb-4">At Octobit8, we believe in giving back to the community and making a positive impact. Our CSR initiatives include:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-left inline-block text-base">
            <li>Supporting STEM education for underprivileged youth</li>
            <li>Promoting diversity and inclusion in the tech industry</li>
            <li>Organizing tech workshops and hackathons for students</li>
            <li>Reducing our environmental footprint through green IT practices</li>
          </ul>
        </div>
      </section>
    </main>
  );
} 