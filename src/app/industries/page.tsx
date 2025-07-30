"use client";

import Image from "next/image";

const featuredSolutions = [
  {
    title: "AWS Infrastructure for Healthcare Data Platform",
    icon: "/icons/aws.svg",
    description: "Design and deploy HIPAA-compliant AWS infrastructure for secure, scalable healthcare data platforms."
  },
  {
    title: "Secured Web Application Infra Setup",
    icon: "/icons/security.svg",
    description: "Implement robust, secure infrastructure for web applications with automated security policies and monitoring."
  },
  {
    title: "Database Migration",
    icon: "/icons/database.svg",
    description: "Seamlessly migrate databases to the cloud or between platforms with zero downtime and data integrity."
  },
  {
    title: "Authentication Services",
    icon: "/icons/auth.svg",
    description: "Integrate secure authentication and authorization services (OAuth, SSO, IAM) for your applications."
  },
  {
    title: "Migration from Jenkins to GitLab CI",
    icon: "/icons/gitlab.svg",
    description: "Modernize your CI/CD by migrating from Jenkins to GitLab CI for improved automation and collaboration."
  },
  {
    title: "iOS Build and Test Pipeline",
    icon: "/icons/ios.svg",
    description: "Automate iOS app builds and testing with scalable, cloud-based pipelines for faster releases."
  },
  {
    title: "AWS Migration",
    icon: "/icons/aws-migration.svg",
    description: "Plan and execute seamless migration of workloads to AWS, ensuring performance and cost optimization."
  },
  {
    title: "Cloud Security",
    icon: "/icons/cloud-security.svg",
    description: "Implement advanced cloud security controls, monitoring, and compliance for your cloud environments."
  }
];

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
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">DevOps & Cloud Solutions</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">Unlock the power of modern IT with our specialized DevOps and Cloud solutions, tailored for your industry.</p>
      </section>
      {/* Featured Solutions */}
      <section className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Featured Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSolutions.map((sol) => (
            <div key={sol.title} className="bg-white rounded-xl shadow p-8 flex flex-col items-center hover:shadow-lg transition">
              <Image src={sol.icon} alt={sol.title} width={56} height={56} className="w-14 h-14 mb-4" />
              <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">{sol.title}</h3>
              <p className="text-gray-600 text-center">{sol.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Industry Solutions Cards */}
      <section className="container mx-auto py-8 px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry) => (
          <div key={industry.name} className="bg-white rounded-xl shadow p-8 flex flex-col items-center hover:shadow-lg transition">
            <Image src={industry.icon} alt={industry.name} width={64} height={64} className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold text-blue-700 mb-2">{industry.name}</h2>
            <div className="w-full mb-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-1">DevOps Solutions</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
                {industry.devops.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold text-blue-600 mb-1 mt-4">Cloud Solutions</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                {industry.cloud.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
      {/* Call to Action */}
      <section className="container mx-auto py-12 px-4 text-center">
        <a href="/contact" className="inline-block bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow hover:bg-blue-800 transition">Discuss Your Needs</a>
      </section>
    </main>
  );
} 