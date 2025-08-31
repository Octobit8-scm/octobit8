"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        // Reset form on success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: '',
          additionalInfo: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Get in Touch with <span className="text-blue-700">Octobit8</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Ready to transform your business with cutting-edge DevOps and Cloud solutions? Let&apos;s discuss your project and explore how we can help you achieve your goals.</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Reach out to us through any of these channels. We&apos;re here to help you succeed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Email</h3>
              <p className="text-gray-700 mb-4">Send us a message and we&apos;ll get back to you within 24 hours.</p>
              <a href="mailto:contact@octobit8.com" className="text-blue-600 hover:text-blue-800 font-semibold">
                contact@octobit8.com
              </a>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Phone</h3>
              <p className="text-gray-700 mb-4">Call us directly for immediate assistance.</p>
              <a href="tel:+919923706784" className="text-blue-600 hover:text-blue-800 font-semibold">
                +91-9923706784
              </a>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Office Locations</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <div>
                  <h4 className="font-semibold text-purple-700">Registered Office:</h4>
                  <p>185 BARA LAL CHRAIST NAGAR, Varanasi, Uttar Pradesh, India, 221007</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">Noida Virtual Office:</h4>
                  <p>7th Floor, Plot A/8A, Knowledge Boulevard, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Consultation Call */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Book a Consultation Call</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Schedule a free consultation call with our experts to discuss your project requirements and explore how we can help you achieve your goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Free Discovery Call */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Free Discovery Call</h3>
              <p className="text-gray-700 mb-4">30-minute call to understand your requirements and discuss potential solutions.</p>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li>• Project requirements discussion</li>
                <li>• Technology recommendations</li>
                <li>• Timeline and budget overview</li>
                <li>• Next steps planning</li>
              </ul>
              <a href="mailto:contact@octobit8.com?subject=Book%20Free%20Discovery%20Call&body=Hi,%20I%20would%20like%20to%20schedule%20a%20free%20discovery%20call%20to%20discuss%20my%20project%20requirements." className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition text-sm">
                Book Free Call
              </a>
            </div>

            {/* Technical Consultation */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Technical Consultation</h3>
              <p className="text-gray-700 mb-4">60-minute deep-dive technical discussion with our senior engineers.</p>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li>• Architecture review</li>
                <li>• Technology stack analysis</li>
                <li>• Performance optimization</li>
                <li>• Security assessment</li>
              </ul>
              <a href="mailto:contact@octobit8.com?subject=Book%20Technical%20Consultation&body=Hi,%20I%20would%20like%20to%20schedule%20a%20technical%20consultation%20to%20discuss%20my%20project%20architecture%20and%20technology%20requirements." className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition text-sm">
                Book Technical Call
              </a>
            </div>

            {/* Strategy Session */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Strategy Session</h3>
              <p className="text-gray-700 mb-4">90-minute comprehensive business and technology strategy session.</p>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li>• Business transformation roadmap</li>
                <li>• Digital strategy planning</li>
                <li>• ROI analysis and projections</li>
                <li>• Implementation timeline</li>
              </ul>
              <a href="mailto:contact@octobit8.com?subject=Book%20Strategy%20Session&body=Hi,%20I%20would%20like%20to%20schedule%20a%20strategy%20session%20to%20discuss%20my%20business%20transformation%20and%20digital%20strategy." className="inline-block bg-purple-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition text-sm">
                Book Strategy Call
              </a>
            </div>
          </div>

          {/* Consultation Benefits */}
          <div className="mt-16 bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Book a Consultation?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">Save Time</h4>
                <p className="text-blue-100 text-sm">Get expert insights quickly without lengthy research</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">Expert Guidance</h4>
                <p className="text-blue-100 text-sm">Learn from experienced professionals</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">Risk Mitigation</h4>
                <p className="text-blue-100 text-sm">Avoid costly mistakes with proper planning</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">Custom Solutions</h4>
                <p className="text-blue-100 text-sm">Get tailored recommendations for your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Schedule Your Consultation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Fill out the form below to book your consultation call. We&apos;ll get back to you within 24 hours to confirm your appointment.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Book Your Consultation Call</h3>
            <p className="text-gray-700 text-center mb-6">Schedule a consultation with our experts to discuss your project requirements.</p>
            <div className="text-center">
              <a href="mailto:contact@octobit8.com" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg">Email Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Tell us about your project and we&apos;ll get back to you with a customized solution.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Get Started with Octobit8</h3>
            <p className="text-gray-700 text-center mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
            
                         <form onSubmit={handleSubmit} className="space-y-6">
               {/* Personal Information */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                     First Name <span className="text-red-500">*</span>
                   </label>
                                       <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your first name"
                      suppressHydrationWarning={true}
                    />
                 </div>
                 <div>
                   <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                     Last Name <span className="text-red-500">*</span>
                   </label>
                                       <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your last name"
                      suppressHydrationWarning={true}
                    />
                 </div>
               </div>

                             {/* Contact Information */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                     Email Address <span className="text-red-500">*</span>
                   </label>
                                       <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email address"
                      suppressHydrationWarning={true}
                    />
                 </div>
                 <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                     Phone Number
                   </label>
                                       <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                      suppressHydrationWarning={true}
                    />
                 </div>
               </div>

                             {/* Company Information */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                     Company Name
                   </label>
                                       <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your company name"
                      suppressHydrationWarning={true}
                    />
                 </div>
                 <div>
                   <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                     Website
                   </label>
                                       <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://your-website.com"
                      suppressHydrationWarning={true}
                    />
                 </div>
               </div>

                             {/* Project Type */}
               <div>
                 <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                   Project Type <span className="text-red-500">*</span>
                 </label>
                                   <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    suppressHydrationWarning={true}
                  >
                   <option value="">Select a project type</option>
                   <option value="ai-development">AI Development</option>
                   <option value="devops-cloud">DevOps & Cloud Solutions</option>
                   <option value="it-staffing">IT Staffing</option>
                   <option value="custom-software">Custom Software Development</option>
                   <option value="consultation">Consultation</option>
                   <option value="other">Other</option>
                 </select>
               </div>

                             {/* Budget Range */}
               <div>
                 <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                   Budget Range
                 </label>
                                   <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    suppressHydrationWarning={true}
                  >
                   <option value="">Select budget range</option>
                   <option value="under-10k">Under $10,000</option>
                   <option value="10k-25k">$10,000 - $25,000</option>
                   <option value="25k-50k">$25,000 - $50,000</option>
                   <option value="50k-100k">$50,000 - $100,000</option>
                   <option value="over-100k">Over $100,000</option>
                   <option value="discuss">Let's discuss</option>
                 </select>
               </div>

               {/* Timeline */}
               <div>
                 <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                   Project Timeline
                 </label>
                                   <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    suppressHydrationWarning={true}
                  >
                   <option value="">Select timeline</option>
                   <option value="asap">ASAP</option>
                   <option value="1-3-months">1-3 months</option>
                   <option value="3-6-months">3-6 months</option>
                   <option value="6-12-months">6-12 months</option>
                   <option value="over-12-months">Over 12 months</option>
                   <option value="flexible">Flexible</option>
                 </select>
               </div>

                             {/* Project Description */}
               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                   Project Description <span className="text-red-500">*</span>
                 </label>
                                   <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project requirements, goals, and any specific challenges you're facing..."
                    suppressHydrationWarning={true}
                  ></textarea>
               </div>

               {/* Additional Information */}
               <div>
                 <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                   Additional Information
                 </label>
                                   <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Any other details, questions, or specific requirements..."
                    suppressHydrationWarning={true}
                  ></textarea>
               </div>

                             {/* Status Messages */}
               {submitStatus.type && (
                 <div className={`text-center p-4 rounded-lg ${
                   submitStatus.type === 'success' 
                     ? 'bg-green-100 text-green-800 border border-green-200' 
                     : 'bg-red-100 text-red-800 border border-red-200'
                 }`}>
                   {submitStatus.message}
                 </div>
               )}

               {/* Submit Button */}
               <div className="text-center pt-4">
                                   <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 text-lg min-w-[200px] ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:scale-105'
                    }`}
                    suppressHydrationWarning={true}
                  >
                   {isSubmitting ? (
                     <div className="flex items-center justify-center gap-2">
                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                       Sending...
                     </div>
                   ) : (
                     'Send Message'
                   )}
                 </button>
               </div>

               {/* Form Note */}
               <div className="text-center text-sm text-gray-500 mt-4">
                 <p>By submitting this form, you agree to our <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a> and <a href="/terms" className="text-blue-600 hover:text-blue-800 underline">Terms of Service</a>.</p>
               </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Why Choose Octobit8?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We&apos;re committed to delivering exceptional results and building long-term partnerships.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Expert Team</h3>
              <p className="text-gray-700 text-sm">Our certified professionals bring years of experience in DevOps, cloud technologies, and software development.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Fast Delivery</h3>
              <p className="text-gray-700 text-sm">We deliver projects on time with agile methodologies and continuous integration practices.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Cost Effective</h3>
              <p className="text-gray-700 text-sm">Competitive pricing with transparent costs and no hidden fees for your peace of mind.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">24/7 Support</h3>
              <p className="text-gray-700 text-sm">Round-the-clock support and maintenance to ensure your systems run smoothly.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Innovation</h3>
              <p className="text-gray-700 text-sm">Stay ahead with cutting-edge technologies and best practices in the industry.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Partnership</h3>
              <p className="text-gray-700 text-sm">We build long-term relationships based on trust, transparency, and mutual success.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 