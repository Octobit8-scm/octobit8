"use client";

import Image from "next/image";
import ContactForm from "../components/ContactForm";

const industries = [
  {
    name: "Finance",
    icon: "/icons/finance.svg",
    devops: [
      "Automated compliance pipelines",
      "Continuous security (DevSecOps)",
      "Disaster recovery automation"
    ],
    cloud: [
      "Secure cloud migration",
      "High-availability trading platforms",
      "Data analytics on cloud"
    ]
  },
  {
    name: "Healthcare",
    icon: "/icons/healthcare.svg",
    devops: [
      "HIPAA-compliant CI/CD",
      "Automated testing for EHR systems",
      "Infrastructure as Code for healthcare apps"
    ],
    cloud: [
      "Cloud-based patient data storage",
      "Telemedicine platform hosting",
      "Scalable health analytics"
    ]
  },
  {
    name: "EdTech",
    icon: "/icons/edtech.svg",
    devops: [
      "Rapid deployment for learning platforms",
      "Automated scaling for online classrooms",
      "Monitoring student engagement apps"
    ],
    cloud: [
      "Global content delivery",
      "Serverless learning management systems",
      "Cost-optimized video streaming"
    ]
  },
  {
    name: "Logistics",
    icon: "/icons/logistics.svg",
    devops: [
      "Automated fleet management updates",
      "Real-time tracking with CI/CD",
      "Containerized microservices for logistics"
    ],
    cloud: [
      "IoT data processing in the cloud",
      "Route optimization with cloud AI",
      "Scalable order management"
    ]
  },
  {
    name: "Retail",
    icon: "/icons/retail.svg",
    devops: [
      "Continuous deployment for e-commerce",
      "Automated testing for POS systems",
      "Monitoring and alerting for sales events"
    ],
    cloud: [
      "Cloud-native e-commerce platforms",
      "Personalized shopping with cloud AI",
      "Inventory management in the cloud"
    ]
  }
];

export default function SolutionsPage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen py-0">
      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Industry-Specific Solutions</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">Tailored technology solutions designed specifically for your industry&apos;s unique challenges and requirements.</p>
      </section>
      
      {/* Industry Solutions Grid */}
      <section className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Industry Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div key={industry.name} className="bg-white rounded-xl shadow p-8 flex flex-col items-center hover:shadow-lg transition">
              <Image src={industry.icon} alt={industry.name} width={64} height={64} className="w-16 h-16 mb-4" />
              <h2 className="text-2xl font-bold text-blue-700 mb-2">{industry.name}</h2>
              <div className="w-full mb-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-1">Key Solutions</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
                  {industry.devops.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold text-blue-600 mb-1 mt-4">Technology Focus</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {industry.cloud.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready for Your Industry Solution?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get a customized solution tailored specifically for your industry&apos;s unique challenges and requirements.
            </p>
          </div>
          <ContactForm 
            title="Get Industry Solution Quote"
            subtitle="Tell us about your industry and specific requirements."
            defaultPosition="Industry Solutions"
            emailSubject="Industry Solutions Inquiry"
            placeholder="Describe your industry, current challenges, and specific requirements for our industry solutions..."
          />
        </div>
      </section>
    </main>
  );
} 