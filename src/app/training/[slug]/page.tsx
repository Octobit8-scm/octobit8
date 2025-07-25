"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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
    link: "/contact",
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
    link: "/contact",
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
    link: "/contact",
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
    link: "/contact",
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
    link: "/contact",
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
    link: "/contact",
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
    link: "/contact",
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
    link: "/contact",
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
    link: "/contact",
    icon: "/icons/gcp.svg"
  }
];

export default function TrainingDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const training = trainings.find((t) => t.slug === slug);

  if (!training) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Training Not Found</h1>
        <p className="text-gray-700 mb-6">Sorry, we couldn&apos;t find the training program you&apos;re looking for.</p>
        <Link href="/training" className="inline-block bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow hover:bg-blue-800 transition">Back to Training</Link>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen py-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-20 md:py-28 overflow-hidden shadow-xl rounded-b-3xl mb-16">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <Image src={training.icon} alt={training.title} width={80} height={80} className="w-20 h-20 mb-6 drop-shadow-lg" />
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">{training.title}</h1>
          <p className="text-lg md:text-xl font-medium text-blue-100 mb-6 max-w-2xl">{training.description}</p>
        </div>
      </section>
      {/* Details Section */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Program Highlights</h2>
          <ul className="list-disc list-inside text-gray-700 text-left mb-6">
            {training.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row gap-8 w-full mb-6">
            <div className="flex-1 text-center md:text-left">
              <div className="text-sm text-gray-500 mb-2"><span className="font-semibold">Audience:</span> {training.audience}</div>
            </div>
            <div className="flex-1 text-center md:text-right">
              <div className="text-sm text-gray-500 mb-2"><span className="font-semibold">Duration:</span> {training.duration}</div>
            </div>
          </div>
          <Link href={training.link} className="inline-block bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition text-lg glow-effect">{training.cta}</Link>
        </div>
        {/* What You'll Learn */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow p-8 mb-8">
          <h3 className="text-xl font-bold text-blue-700 mb-2">What You&apos;ll Learn</h3>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>End-to-end understanding of {training.title}</li>
            <li>Hands-on experience with real-world projects</li>
            <li>Best practices for automation, security, and scalability</li>
            <li>How to integrate with popular cloud platforms and tools</li>
            <li>Preparation for industry certifications</li>
          </ul>
        </div>
        {/* Tools & Platforms Covered */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Tools & Platforms Covered</h3>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Jenkins, GitLab CI, GitHub Actions, Azure DevOps, AWS DevOps, GCP DevOps</li>
            <li>Docker, Kubernetes, Terraform, Ansible</li>
            <li>AWS, Azure, GCP core services</li>
            <li>Monitoring & security tools</li>
          </ul>
        </div>
        {/* Who Should Attend */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow p-8 mb-8">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Who Should Attend</h3>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Developers and DevOps engineers</li>
            <li>Cloud architects and sysadmins</li>
            <li>IT professionals seeking upskilling</li>
            <li>Teams adopting DevOps/cloud practices</li>
          </ul>
        </div>
        {/* Certification & Assessment */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Certification & Assessment</h3>
          <p className="text-gray-700">Participants will receive a certificate of completion and guidance for relevant industry certifications. Assessment includes project work and a final quiz.</p>
        </div>
        {/* FAQ */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow p-8">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Frequently Asked Questions</h3>
          <div className="mb-4">
            <h4 className="font-semibold text-blue-700">Is prior experience required?</h4>
            <p className="text-gray-700">Basic IT or programming knowledge is helpful, but the course is designed to be accessible for motivated learners.</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-blue-700">Are the trainings hands-on?</h4>
            <p className="text-gray-700">Yes, all programs include practical labs and real-world projects.</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700">Can I get support during the course?</h4>
            <p className="text-gray-700">Absolutely! Our instructors and support team are available to help you throughout your learning journey.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 