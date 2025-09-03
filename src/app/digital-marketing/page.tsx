"use client";

export default function DigitalMarketing() {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility in search results with our comprehensive SEO strategies.",
      features: [
        "Keyword research and optimization",
        "On-page and technical SEO",
        "Local SEO optimization",
        "SEO audits and reporting",
        "Content optimization"
      ],
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience across all social platforms.",
      features: [
        "Platform-specific strategies",
        "Content creation and curation",
        "Community management",
        "Paid social advertising",
        "Performance analytics"
      ],
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      )
    },
    {
      title: "Content Marketing",
      description: "Create valuable, engaging content that attracts and converts your target audience.",
      features: [
        "Blog and article writing",
        "Video content creation",
        "Infographics and visual content",
        "Email marketing campaigns",
        "Content strategy development"
      ],
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Drive targeted traffic and generate leads with strategic paid advertising campaigns.",
      features: [
        "Google Ads management",
        "Social media advertising",
        "Remarketing campaigns",
        "A/B testing and optimization",
        "ROI tracking and reporting"
      ],
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "Analytics & Reporting",
      description: "Track performance, measure ROI, and make data-driven decisions for your marketing campaigns.",
      features: [
        "Google Analytics setup",
        "Conversion tracking",
        "Custom reporting dashboards",
        "Performance insights",
        "ROI measurement"
      ],
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Email Marketing",
      description: "Build lasting relationships with your customers through strategic email campaigns.",
      features: [
        "Email list building",
        "Automated drip campaigns",
        "Personalized content",
        "A/B testing",
        "Performance optimization"
      ],
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: "Increased Visibility",
      description: "Improve your brand's online presence and reach more potential customers."
    },
    {
      title: "Higher Conversion Rates",
      description: "Convert more visitors into customers with targeted marketing strategies."
    },
    {
      title: "Better ROI",
      description: "Maximize your marketing budget with data-driven campaigns and optimization."
    },
    {
      title: "Brand Authority",
      description: "Build trust and establish your brand as an industry leader."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-green-100 via-white to-blue-100 py-28 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Digital Marketing <span className="text-green-600">Services</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Drive growth, increase brand awareness, and generate qualified leads with our comprehensive digital marketing solutions. 
            From SEO to social media, we help businesses thrive in the digital landscape.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-green-600 via-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Marketing Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business goals and target audience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Digital Marketing Services?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of working with a team that understands your business and delivers measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Marketing Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures your digital marketing campaigns deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We analyze your current digital presence, competitors, and target audience to develop a comprehensive strategy."
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Based on our analysis, we create a customized digital marketing plan aligned with your business objectives."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Our team executes your digital marketing campaigns with precision and attention to detail."
              },
              {
                step: "04",
                title: "Optimization",
                description: "We continuously monitor performance and optimize campaigns to maximize your ROI and achieve better results."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our digital marketing services can help you achieve your business goals and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
            >
              Get Free Consultation
            </a>
            <a 
              href="/solutions" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition"
            >
              View All Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
