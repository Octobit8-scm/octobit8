"use client";

import ContactForm from "../components/ContactForm";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen py-0">
      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">About <span className="text-blue-500">Octobit8</span></h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">Octobit8 is a forward-thinking IT consulting and services company dedicated to empowering businesses through technology. With a team of passionate experts, we deliver innovative solutions that drive digital transformation and business growth across diverse industries worldwide.</p>
      </section>

      {/* Mission, Vision, Values */}
      <section className="container mx-auto py-8 px-4 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Our Mission</h2>
          <p className="text-gray-600">To enable organizations to achieve their full potential by leveraging cutting-edge technology, expert consulting, and tailored IT solutions that drive innovation and sustainable growth.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Our Vision</h2>
          <p className="text-gray-600">To be a global leader in IT consulting and digital innovation, recognized for our commitment to excellence, integrity, and client success in the digital age.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-left">
            <li>Innovation & Creativity</li>
            <li>Client-Centric Approach</li>
            <li>Integrity & Transparency</li>
            <li>Collaboration & Teamwork</li>
            <li>Continuous Learning</li>
            <li>Excellence in Delivery</li>
          </ul>
        </div>
      </section>

      {/* Company Story */}
      <section className="container mx-auto py-12 px-4 flex justify-center">
        <div className="bg-blue-100 rounded-2xl shadow-lg p-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">Founded by technology enthusiasts with a shared vision of transforming businesses through innovative IT solutions, Octobit8 has grown from a small startup to a trusted partner for businesses worldwide. Our journey is defined by our relentless pursuit of excellence and our passion for solving complex business challenges with cutting-edge technology.</p>
          <p className="text-gray-700 text-lg leading-relaxed">From our humble beginnings in 2021, we have consistently delivered value to our clients through our expertise in DevOps, cloud computing, AI/ML, mobile development, and custom software solutions. Today, we serve clients across multiple continents, helping them navigate the complexities of digital transformation and achieve their strategic objectives.</p>
        </div>
      </section>

      {/* What We Do */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-3">DevOps & Cloud Solutions</h3>
            <p className="text-gray-600">We specialize in implementing CI/CD pipelines, infrastructure as code, containerization, and cloud migration strategies that streamline development processes and improve operational efficiency.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Custom Software Development</h3>
            <p className="text-gray-600">Our development teams create tailored software solutions that address specific business needs, from web applications to enterprise systems and mobile apps.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-3">AI & Data Analytics</h3>
            <p className="text-gray-600">We help businesses harness the power of artificial intelligence and data analytics to gain insights, automate processes, and make data-driven decisions.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-3">IT Staffing & Consulting</h3>
            <p className="text-gray-600">We provide expert IT professionals and strategic consulting services to help organizations build high-performing technology teams and implement best practices.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Digital Transformation</h3>
            <p className="text-gray-600">We guide organizations through complete digital transformation journeys, modernizing legacy systems and implementing new technologies for competitive advantage.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Industry Solutions</h3>
            <p className="text-gray-600">We deliver specialized solutions for healthcare, fintech, e-commerce, logistics, hospitality, and other industries, understanding their unique challenges and compliance requirements.</p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Approach</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Client-Centric Methodology</h3>
            <p className="text-gray-700 mb-4">We believe in building long-term partnerships with our clients. Our approach begins with understanding your unique business challenges, goals, and constraints.</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Comprehensive discovery and analysis</li>
              <li>Tailored solution design</li>
              <li>Agile development methodology</li>
              <li>Continuous collaboration and feedback</li>
              <li>Ongoing support and optimization</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Technology Excellence</h3>
            <p className="text-gray-700 mb-4">We stay at the forefront of technology trends and best practices, ensuring our solutions are built with the most appropriate and cutting-edge technologies.</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Modern tech stack and frameworks</li>
              <li>Cloud-native architecture</li>
              <li>Security-first development</li>
              <li>Scalable and maintainable code</li>
              <li>Performance optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Journey</h2>
        <ol className="relative border-l-4 border-blue-200 max-w-3xl mx-auto">
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full mt-1.5 -left-2 border border-white"></div>
            <time className="mb-1 text-xs font-normal leading-none text-blue-700">2021</time>
            <h3 className="text-lg font-semibold text-gray-900">Octobit8 Founded</h3>
            <p className="text-base font-normal text-gray-600">A group of passionate technologists start Octobit8 with a vision to transform IT consulting and deliver innovative solutions.</p>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full mt-1.5 -left-2 border border-white"></div>
            <time className="mb-1 text-xs font-normal leading-none text-blue-700">2019</time>
            <h3 className="text-lg font-semibold text-gray-900">Global Expansion</h3>
            <p className="text-base font-normal text-gray-600">Octobit8 expands globally, delivering solutions for clients in Europe, North America, and Asia-Pacific regions.</p>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full mt-1.5 -left-2 border border-white"></div>
            <time className="mb-1 text-xs font-normal leading-none text-blue-700">2021</time>
            <h3 className="text-lg font-semibold text-gray-900">Cloud & DevOps Focus</h3>
            <p className="text-base font-normal text-gray-600">We establish our DevOps and cloud computing practice, becoming a leader in digital transformation services.</p>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full mt-1.5 -left-2 border border-white"></div>
            <time className="mb-1 text-xs font-normal leading-none text-blue-700">2022</time>
            <h3 className="text-lg font-semibold text-gray-900">100th Project Milestone</h3>
            <p className="text-base font-normal text-gray-600">A major milestone as Octobit8 completes its 100th successful project for clients across diverse industries worldwide.</p>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full mt-1.5 -left-2 border border-white"></div>
            <time className="mb-1 text-xs font-normal leading-none text-blue-700">2023</time>
            <h3 className="text-lg font-semibold text-gray-900">AI & Analytics Expansion</h3>
            <p className="text-base font-normal text-gray-600">We launch our AI and data analytics practice, helping clients leverage machine learning and business intelligence.</p>
          </li>
          <li className="ml-6">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full mt-1.5 -left-2 border border-white"></div>
            <time className="mb-1 text-xs font-normal leading-none text-blue-700">2024</time>
            <h3 className="text-lg font-semibold text-gray-900">Industry Recognition</h3>
            <p className="text-base font-normal text-gray-600">Octobit8 receives industry awards for innovation in AI, cloud computing, and digital transformation, solidifying our position as a technology leader.</p>
          </li>
        </ol>
      </section>

      {/* Our Impact */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">150+</h3>
            <p className="text-gray-600">Projects Delivered</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">25+</h3>
            <p className="text-gray-600">Countries Served</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">98%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
            <p className="text-gray-600">Expert Team Members</p>
          </div>
        </div>
      </section>

      {/* Corporate Social Responsibility */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Corporate Social Responsibility</h2>
        <div className="bg-white rounded-xl shadow p-8 max-w-4xl mx-auto">
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">At Octobit8, we believe in giving back to the community and making a positive impact on society. Our CSR initiatives reflect our commitment to sustainable development and social responsibility.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Education & Skills Development</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Supporting STEM education for underprivileged youth</li>
                <li>Organizing tech workshops and hackathons for students</li>
                <li>Mentoring programs for aspiring developers</li>
                <li>Scholarship programs for technology education</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Diversity & Inclusion</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Promoting diversity and inclusion in the tech industry</li>
                <li>Supporting women in technology initiatives</li>
                <li>Creating inclusive workplace policies</li>
                <li>Community outreach programs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Environmental Responsibility</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Reducing our environmental footprint through green IT practices</li>
                <li>Implementing energy-efficient cloud solutions</li>
                <li>Paperless office initiatives</li>
                <li>Carbon footprint reduction programs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Community Engagement</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Volunteering in local community projects</li>
                <li>Supporting local charities and NGOs</li>
                <li>Pro bono technology consulting</li>
                <li>Disaster relief technology support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join the hundreds of organizations that trust Octobit8 to drive their digital transformation journey.
            </p>
          </div>
          <ContactForm 
            title="Get Started with Octobit8"
            subtitle="Tell us about your business and transformation goals."
            defaultPosition="General Inquiry"
            emailSubject="Business Transformation Inquiry"
            placeholder="Describe your business, current challenges, and transformation goals..."
          />
        </div>
      </section>
    </main>
  );
} 