"use client";

import Image from "next/image";

const trainings = [
  {
    title: "DevOps with Jenkins CI",
    slug: "jenkins-ci",
    description: "Master CI/CD pipelines and automation using Jenkins, the industry-standard DevOps tool.",
    highlights: [
      "Jenkins installation & configuration",
      "Pipeline as code (Jenkinsfile)",
      "Automated build, test, deploy",
      "Integrating with Git & Docker"
    ],
    audience: "Developers, DevOps engineers, sysadmins",
    duration: "2 weeks (part-time)",
    cta: "Enroll Now",
    link: "/training/jenkins-ci",
    icon: "/icons/jenkins.svg"
  },
  {
    title: "DevOps with GitLab CI",
    slug: "gitlab-ci",
    description: "Build robust CI/CD pipelines and automation using GitLab CI for modern DevOps workflows.",
    highlights: [
      "GitLab CI/CD fundamentals",
      "Pipeline configuration (gitlab-ci.yml)",
      "Automated testing & deployment",
      "Integrating with Docker & Kubernetes"
    ],
    audience: "Developers, DevOps engineers, teams using GitLab",
    duration: "2 weeks (part-time)",
    cta: "Enroll Now",
    link: "/training/gitlab-ci",
    icon: "/icons/gitlab.svg"
  },
  {
    title: "DevOps with GitHub Actions",
    slug: "github-actions",
    description: "Automate your software workflows with GitHub Actions for CI/CD, testing, and deployment.",
    highlights: [
      "GitHub Actions basics & workflow syntax",
      "Automated build, test, deploy",
      "Marketplace actions & secrets management",
      "Integrating with cloud providers"
    ],
    audience: "Developers, open source contributors, teams using GitHub",
    duration: "2 weeks (part-time)",
    cta: "Enroll Now",
    link: "/training/github-actions",
    icon: "/icons/github.svg"
  },
  {
    title: "DevOps with Azure DevOps",
    slug: "azure-devops",
    description: "Implement CI/CD, infrastructure automation, and monitoring using Azure DevOps tools.",
    highlights: [
      "Azure Pipelines for CI/CD",
      "Infrastructure as Code with ARM & Bicep",
      "Release management & approvals",
      "Integrating with Azure cloud services"
    ],
    audience: "IT professionals, Azure users, DevOps engineers",
    duration: "2 weeks (part-time)",
    cta: "Enroll Now",
    link: "/training/azure-devops",
    icon: "/icons/azure.svg"
  },
  {
    title: "DevOps with GCP DevOps",
    slug: "gcp-devops",
    description: "Learn Google Cloud DevOps tools for CI/CD, automation, and cloud-native deployments.",
    highlights: [
      "Cloud Build & Cloud Deploy",
      "Automated testing & artifact management",
      "Kubernetes Engine (GKE) integration",
      "Monitoring with Google Operations Suite"
    ],
    audience: "GCP users, DevOps engineers, cloud architects",
    duration: "2 weeks (part-time)",
    cta: "Enroll Now",
    link: "/training/gcp-devops",
    icon: "/icons/gcp.svg"
  },
  {
    title: "DevOps with AWS DevOps",
    slug: "aws-devops",
    description: "Master AWS DevOps tools for CI/CD, automation, and scalable cloud deployments.",
    highlights: [
      "AWS CodePipeline, CodeBuild, CodeDeploy",
      "Infrastructure as Code with CloudFormation",
      "Serverless CI/CD with Lambda",
      "Monitoring with CloudWatch"
    ],
    audience: "AWS users, DevOps engineers, cloud architects",
    duration: "2 weeks (part-time)",
    cta: "Enroll Now",
    link: "/training/aws-devops",
    icon: "/icons/aws.svg"
  },
  {
    title: "AWS Master Course",
    slug: "aws-master",
    description: "Comprehensive AWS training covering architecture, security, DevOps, and cost optimization.",
    highlights: [
      "AWS core services & architecture",
      "Security & IAM best practices",
      "DevOps & automation on AWS",
      "Cost management & optimization"
    ],
    audience: "IT professionals, architects, AWS learners",
    duration: "4 weeks (part-time)",
    cta: "Enroll Now",
    link: "/training/aws-master",
    icon: "/icons/aws.svg"
  },
  {
    title: "Azure Master Course",
    slug: "azure-master",
    description: "End-to-end Azure training: cloud architecture, security, DevOps, and automation.",
    highlights: [
      "Azure core services & architecture",
      "Security & compliance in Azure",
      "DevOps & automation with Azure DevOps",
      "Cost management & optimization"
    ],
    audience: "IT professionals, architects, Azure learners",
    duration: "4 weeks (part-time)",
    cta: "Enroll Now",
    link: "/training/azure-master",
    icon: "/icons/azure.svg"
  },
  {
    title: "GCP Master Course",
    slug: "gcp-master",
    description: "Master Google Cloud Platform: architecture, security, DevOps, and cost optimization.",
    highlights: [
      "GCP core services & architecture",
      "Security & IAM in GCP",
      "DevOps & automation with Cloud Build",
      "Cost management & optimization"
    ],
    audience: "IT professionals, architects, GCP learners",
    duration: "4 weeks (part-time)",
    cta: "Enroll Now",
    link: "/training/gcp-master",
    icon: "/icons/gcp.svg"
  }
];

export default function TrainingPage() {
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
            <span className="inline-block bg-white/20 text-blue-100 font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 border border-blue-200 animate-pulse">Training</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">DevOps & Cloud <span className="text-yellow-300">Training</span></h1>
            <p className="text-lg md:text-xl font-medium text-blue-100 mb-6 max-w-2xl">Advance your career or upskill your team with hands-on training in DevOps and Cloud technologies, led by industry experts.</p>
          </div>
          <a href="#contact" className="inline-block bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition text-lg glow-effect animate-bounce">Book a Training Consultation</a>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-24 md:h-32 opacity-30" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </section>
      {/* SECTION DIVIDER */}
      <div className="w-full flex justify-center mb-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>
      {/* Training Offerings */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Image src="/icons/training.svg" alt="Training" width={40} height={40} />
            <h2 className="text-3xl font-bold text-blue-800 text-center">Our Training Programs</h2>
          </div>
          <p className="text-lg text-gray-700 text-center max-w-2xl">Hands-on, project-based training for DevOps and Cloud, designed for real-world impact.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {trainings.map((training, idx) => (
            <div key={training.title} className={`relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 ${idx % 2 === 0 ? 'border-blue-500' : 'border-green-500'} overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl`}>
              <div className={`flex flex-col items-center justify-center min-w-[120px] ${idx % 2 === 0 ? 'bg-gradient-to-b from-blue-600 to-blue-400' : 'bg-gradient-to-b from-green-600 to-green-400'} p-8 md:p-10`}>
                <Image src={training.icon} alt={training.title} width={64} height={64} className="w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold text-lg tracking-wide">{training.title}</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">{training.title}</h3>
                <p className="text-gray-700 mb-4">{training.description}</p>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Highlights:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  {training.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mb-2 text-sm text-gray-500"><span className="font-semibold">Audience:</span> {training.audience}</div>
                <div className="mb-4 text-sm text-gray-500"><span className="font-semibold">Duration:</span> {training.duration}</div>
                <a href={training.link} className={`inline-block ${idx % 2 === 0 ? 'bg-blue-700 hover:bg-blue-800' : 'bg-green-600 hover:bg-green-700'} text-white px-6 py-2 rounded-full font-semibold shadow transition`}>{training.cta}</a>
              </div>
              <div className={`absolute left-0 top-0 h-full w-2 ${idx % 2 === 0 ? 'bg-gradient-to-b from-blue-500 to-blue-300' : 'bg-gradient-to-b from-green-500 to-green-300'}`} />
            </div>
          ))}
        </div>
      </section>
      {/* SECTION DIVIDER */}
      <div className="w-full flex justify-center my-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 flex justify-center items-center">
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white rounded-2xl shadow-xl p-10 max-w-xl w-full flex flex-col items-center">
          <Image src="/icons/training.svg" alt="Contact" width={64} height={64} className="w-16 h-16 mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-center">Have questions or need a custom training plan?</h2>
          <p className="text-blue-100 mb-6 text-center">Contact us to discuss your team&apos;s needs or to request a private workshop.</p>
          <a href="/contact" className="inline-block bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition text-lg glow-effect">Contact Us</a>
        </div>
      </section>
    </div>
  );
} 