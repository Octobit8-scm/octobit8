"use client";

import Link from "next/link";

export default function JobOpeningsPage() {
  const jobOpenings = [
    {
      title: "Senior AI Developer",
      department: "AI Development",
      location: "Remote / Varanasi",
      type: "Full-time",
      experience: "3-5 years",
      description: "Join our AI team to develop cutting-edge machine learning models and AI solutions for enterprise clients.",
      requirements: [
        "Strong Python programming skills",
        "Experience with TensorFlow, PyTorch, or similar frameworks",
        "Knowledge of ML algorithms and deep learning",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Excellent problem-solving abilities"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "DevOps & Cloud",
      location: "Remote / Varanasi",
      type: "Full-time",
      experience: "2-4 years",
      description: "Help us build and maintain robust cloud infrastructure and CI/CD pipelines for our clients.",
      requirements: [
        "Experience with AWS, Azure, or GCP",
        "Knowledge of Docker, Kubernetes, and Terraform",
        "Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
        "Linux system administration skills",
        "Understanding of networking and security"
      ]
    },
    {
      title: "IT Staffing Specialist",
      department: "IT Staffing",
      location: "Remote / Varanasi",
      type: "Full-time",
      experience: "1-3 years",
      description: "Help us connect top IT talent with leading organizations through our staffing services.",
      requirements: [
        "Experience in IT recruitment or HR",
        "Understanding of technology roles and skills",
        "Excellent communication and networking skills",
        "Experience with ATS and recruitment tools",
        "Strong organizational abilities"
      ]
    },
    {
      title: "Frontend Developer",
      department: "Development",
      location: "Remote / Varanasi",
      type: "Full-time",
      experience: "2-4 years",
      description: "Create beautiful and responsive user interfaces for our web applications and client projects.",
      requirements: [
        "Strong React.js or Vue.js skills",
        "Experience with TypeScript and modern CSS",
        "Knowledge of responsive design principles",
        "Experience with state management (Redux, Vuex)",
        "Understanding of web performance optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Be part of a dynamic team that's transforming businesses through innovative technology solutions
          </p>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore exciting opportunities to grow your career with Octobit8
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                        </svg>
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{job.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Work With Octobit8?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a company that values innovation, growth, and work-life balance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation First</h3>
              <p className="text-gray-600">Work with cutting-edge technologies and be part of groundbreaking projects</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">Continuous learning, mentorship, and career advancement opportunities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Flexible Work</h3>
              <p className="text-gray-600">Remote work options, flexible hours, and work-life balance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:careers@octobit8.com" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Send Resume
            </a>
            <Link href="/career/training-internship" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Explore Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
