"use client";

import Link from "next/link";

export default function CareerGrowthPage() {
  const growthPaths = [
    {
      title: "Technical Track",
      description: "Advance your technical skills and become a subject matter expert",
      levels: [
        "Junior Developer → Mid-level Developer",
        "Mid-level Developer → Senior Developer",
        "Senior Developer → Tech Lead",
        "Tech Lead → Principal Engineer",
        "Principal Engineer → Technical Architect"
      ],
      skills: ["Advanced programming", "System design", "Architecture", "Mentorship", "Technical leadership"]
    },
    {
      title: "Management Track",
      description: "Develop leadership skills and manage teams and projects",
      levels: [
        "Individual Contributor → Team Lead",
        "Team Lead → Engineering Manager",
        "Engineering Manager → Senior Manager",
        "Senior Manager → Director",
        "Director → VP of Engineering"
      ],
      skills: ["Team leadership", "Project management", "Strategic planning", "Stakeholder management", "Business acumen"]
    },
    {
      title: "Specialist Track",
      description: "Deep dive into specific domains and become an industry expert",
      levels: [
        "Generalist → Domain Specialist",
        "Domain Specialist → Subject Matter Expert",
        "Subject Matter Expert → Industry Thought Leader",
        "Industry Thought Leader → Consultant",
        "Consultant → Partner/Principal"
      ],
      skills: ["Deep domain knowledge", "Research & innovation", "Industry networking", "Thought leadership", "Consulting"]
    }
  ];

  const developmentPrograms = [
    {
      title: "Leadership Development Program",
      description: "Comprehensive program to develop leadership skills for technical professionals",
      duration: "6 months",
      format: "Hybrid (Online + In-person workshops)",
      highlights: [
        "Executive coaching and mentoring",
        "Leadership assessment and feedback",
        "Strategic thinking workshops",
        "Team dynamics and conflict resolution",
        "Business strategy and financial acumen"
      ]
    },
    {
      title: "Technical Excellence Program",
      description: "Advanced technical training to become a subject matter expert",
      duration: "4 months",
      format: "Online + Hands-on projects",
      highlights: [
        "Advanced architecture patterns",
        "Performance optimization techniques",
        "Security best practices",
        "Cloud-native development",
        "AI/ML integration strategies"
      ]
    },
    {
      title: "Business Acumen Program",
      description: "Develop business understanding and strategic thinking",
      duration: "3 months",
      format: "Online + Case studies",
      highlights: [
        "Business model analysis",
        "Financial literacy for tech professionals",
        "Market analysis and competitive intelligence",
        "Product strategy and go-to-market",
        "Customer success and retention"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Growth & Development</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Chart your path to success with our comprehensive career development programs and growth opportunities
          </p>
        </div>
      </section>

      {/* Growth Paths */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Career Growth Paths</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the path that aligns with your career goals and aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {growthPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{path.title}</h3>
                <p className="text-gray-600 mb-6">{path.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Career Progression:</h4>
                  <ul className="space-y-2">
                    {path.levels.map((level, levelIndex) => (
                      <li key={levelIndex} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">{level}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Development Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured programs designed to accelerate your career growth
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {developmentPrograms.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600 mt-4 md:mt-0">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      {program.format}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Program Highlights:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {program.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 text-center">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Apply for Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship & Coaching */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Mentorship & Coaching</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get personalized guidance from industry experts and experienced professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">One-on-One Mentorship</h3>
              <p className="text-gray-600 mb-4">Connect with senior professionals in your field for personalized career guidance</p>
              <ul className="text-sm text-gray-700 space-y-1 text-left">
                <li>• Career path planning</li>
                <li>• Skill development guidance</li>
                <li>• Industry insights and trends</li>
                <li>• Networking opportunities</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Executive Coaching</h3>
              <p className="text-gray-600 mb-4">Professional coaching for leadership development and career advancement</p>
              <ul className="text-sm text-gray-700 space-y-1 text-left">
                <li>• Leadership skill development</li>
                <li>• Executive presence and communication</li>
                <li>• Strategic thinking and decision making</li>
                <li>• Work-life balance and stress management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from team members who have grown their careers with Octobit8
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">R</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Rahul Sharma</h4>
                  <p className="text-sm text-gray-600">Senior DevOps Engineer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Started as a junior developer and through Octobit8's mentorship program, I've grown into a senior role. The company's commitment to employee development is exceptional."
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">P</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Priya Patel</h4>
                  <p className="text-sm text-gray-600">AI Team Lead</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The technical excellence program helped me become a subject matter expert in AI. Now I'm leading a team and mentoring others."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Career?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your career goals with our comprehensive development programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/career/job-openings" className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View Openings
            </Link>
            <Link href="/career/training-internship" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors">
              Explore Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
