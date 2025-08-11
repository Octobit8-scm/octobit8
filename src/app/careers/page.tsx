"use client";

import ContactForm from "../components/ContactForm";

export default function CareersPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
            <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Careers</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Careers at <span className="text-blue-700">Octobit8</span></h1>
            <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Join our team of passionate professionals and help shape the future of IT consulting and services. We are always looking for talented individuals to join us!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#devops-internship" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">View DevOps Program</a>
            <a href="#ai-internship" className="inline-block bg-gradient-to-r from-purple-600 via-purple-500 to-pink-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">View AI Program</a>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="w-full flex justify-center mb-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>

      {/* DevOps and Cloud Internship Program 2025 - Detailed Section */}
      <section id="devops-internship" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Octobit8 DevOps and Cloud Internship Program 2025</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">A comprehensive 6-month program designed to provide hands-on experience in modern DevOps practices and cloud technologies, preparing candidates for real-world challenges in software development and deployment.</p>
          </div>

          {/* Program Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Program Overview</h3>
            <p className="text-gray-700 mb-4">Octobit8, a leading IT outsourcing and custom software development company, is excited to announce its comprehensive DevOps and Cloud Internship Program 2025. This 6-month program is designed to provide hands-on experience in modern DevOps practices and cloud technologies, preparing candidates for real-world challenges in software development and deployment.</p>
            <p className="text-gray-700 mb-4">Interns will work on cutting-edge tools and methodologies, contributing to agile development cycles and cloud-native application deployment. Upon successful completion, participants will receive an Internship Experience Certificate and an opportunity to interview for a role with one of Octobit8&apos;s prestigious clients.</p>
          </div>

          {/* Program Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Program Objectives</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Equip interns with practical skills in DevOps tools, cloud infrastructure, and agile methodologies</li>
                <li>• Provide exposure to end-to-end application development, deployment, and monitoring</li>
                <li>• Foster collaboration, problem-solving, and critical thinking in a professional environment</li>
                <li>• Prepare candidates for careers in DevOps and cloud engineering through hands-on projects</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Program Details</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-purple-700">Duration</h4>
                  <p className="text-gray-700">6 Months</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">Commitment</h4>
                  <p className="text-gray-700">Full-time (40 hours/week)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">Work Mode</h4>
                  <p className="text-gray-700">Flexible remote and hybrid options available</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">Application Deadline</h4>
                  <p className="text-gray-700">Rolling applications accepted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Eligibility Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Education</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Enrolled in or recently graduated from Bachelor&apos;s, Master&apos;s, or Ph.D. program</li>
                  <li>• Computer Science, Engineering, Mathematics, or related fields</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Technical Skills</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Basic knowledge of programming (Python, Java, or similar)</li>
                  <li>• Linux fundamentals</li>
                  <li>• Familiarity with Git, Docker, or cloud platforms (AWS, Azure, or GCP) is a plus</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Soft Skills</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Strong problem-solving skills</li>
                  <li>• Eagerness to learn DevOps and cloud technologies</li>
                  <li>• Proficiency in English</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Work Environment</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Ability to work in a collaborative, agile environment</li>
                  <li>• Strong communication skills</li>
                  <li>• Team player mentality</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Program Structure */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-indigo-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Program Structure</h3>
            <p className="text-gray-700 mb-6">The internship is divided into four phases, each focusing on specific skills and tools to build a comprehensive DevOps and cloud engineering skill set.</p>
            
            <div className="space-y-6">
              {/* Phase 1 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-bold text-blue-700 mb-2">Phase 1: Foundation and Agile Practices (Weeks 1–4)</h4>
                <p className="text-gray-600 mb-3">Objective: Understand DevOps principles, agile methodologies, and foundational tools.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">Activities:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Introduction to DevOps and Cloud</li>
                      <li>• Agile Development with Jira</li>
                      <li>• Collaboration via Slack</li>
                      <li>• GitHub Setup and Version Control</li>
                      <li>• Hands-on Labs and Projects</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">Deliverables:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Configured GitHub repository</li>
                      <li>• Jira board with user stories</li>
                      <li>• Active Slack participation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-xl font-bold text-green-700 mb-2">Phase 2: DevOps Tools and CI/CD Pipelines (Weeks 5–12)</h4>
                <p className="text-gray-600 mb-3">Objective: Master CI/CD pipelines, build tools, and code quality practices.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">Activities:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• DevOps Design and Architecture</li>
                      <li>• Jenkins Setup and Management</li>
                      <li>• CI/CD Pipeline Development</li>
                      <li>• Security and Testing</li>
                      <li>• Artifact Management</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">Deliverables:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Dockerfile for Jenkins agent</li>
                      <li>• Jenkins pipeline script</li>
                      <li>• Code coverage and SAST reports</li>
                      <li>• Configured artifact repository</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-bold text-purple-700 mb-2">Phase 3: Cloud Infrastructure and IaC (Weeks 13–18)</h4>
                <p className="text-gray-600 mb-3">Objective: Provision and manage cloud infrastructure using Infrastructure as Code (IaC).</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-purple-600 mb-2">Activities:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Cloud Infrastructure Overview</li>
                      <li>• Terraform Setup and Configuration</li>
                      <li>• Terraform Configurations</li>
                      <li>• Hands-on Labs</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">Deliverables:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Terraform configuration</li>
                      <li>• Reusable Terraform modules</li>
                      <li>• Configured Terraform backend</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-xl font-bold text-orange-700 mb-2">Phase 4: Kubernetes, Helm, and Monitoring (Weeks 19–24)</h4>
                <p className="text-gray-600 mb-3">Objective: Deploy and monitor applications in a Kubernetes environment.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-orange-600 mb-2">Activities:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Containerization with Docker</li>
                      <li>• Kubernetes Deployment</li>
                      <li>• Helm Charts</li>
                      <li>• Monitoring and Log Analysis</li>
                      <li>• Hands-on Labs</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">Deliverables:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Dockerfile and container image</li>
                      <li>• Helm chart for deployment</li>
                      <li>• Monitoring dashboard</li>
                      <li>• Log analysis report</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools and Technologies */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-teal-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Tools and Technologies Covered</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Version Control & Agile</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Git, GitHub</li>
                  <li>• Jira, Slack</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">CI/CD & Quality</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Jenkins, Docker</li>
                  <li>• SonarQube, JaCoCo</li>
                  <li>• JFrog Artifactory</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Infrastructure & Deployment</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Terraform</li>
                  <li>• Kubernetes, Helm</li>
                  <li>• AWS, Azure, GCP</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Monitoring & Logging</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Prometheus, Grafana</li>
                  <li>• ELK Stack, Fluentd</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-pink-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Learning Outcomes</h3>
            <p className="text-gray-700 mb-4">By the end of the internship, participants will:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="text-gray-700 space-y-2">
                <li>• Understand and implement DevOps practices in an agile environment</li>
                <li>• Build and manage CI/CD pipelines using Jenkins and GitHub</li>
                <li>• Containerize applications and deploy them on Kubernetes using Helm</li>
                <li>• Provision and manage cloud infrastructure with Terraform</li>
              </ul>
              <ul className="text-gray-700 space-y-2">
                <li>• Configure monitoring and logging for application performance</li>
                <li>• Gain practical experience in a professional DevOps environment</li>
                <li>• Develop problem-solving and critical thinking skills</li>
                <li>• Build a portfolio of real-world projects</li>
              </ul>
            </div>
          </div>

          {/* Mentorship and Support */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-indigo-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Mentorship and Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Dedicated Mentors</h4>
                <p className="text-gray-700">Each intern will be assigned a senior DevOps engineer as a mentor.</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Weekly Check-ins</h4>
                <p className="text-gray-700">Regular feedback sessions to track progress and address challenges.</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Community Engagement</h4>
                <p className="text-gray-700">Access to Octobit8&apos;s internal Slack community for peer support and knowledge sharing.</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Workshops and Webinars</h4>
                <p className="text-gray-700">Monthly sessions on advanced topics like GitOps, chaos engineering, and AI-driven DevOps.</p>
              </div>
            </div>
          </div>

          {/* Certification and Career Opportunities */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Certification and Career Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-green-700 mb-2">Internship Experience Certificate</h4>
                <p className="text-gray-700 text-sm">Awarded upon successful completion of the program.</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-green-700 mb-2">Client Interview Opportunity</h4>
                <p className="text-gray-700 text-sm">Top performers will be recommended for interviews with Octobit8&apos;s clients.</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-green-700 mb-2">Portfolio Development</h4>
                <p className="text-gray-700 text-sm">Build a portfolio of real-world projects to showcase skills to future employers.</p>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Application Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Application Steps</h4>
                <ol className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <span>Submit Application via Octobit8&apos;s careers page with resume and cover letter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <span>Complete online assessment covering basic programming, Linux, and DevOps concepts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <span>Participate in technical interview with a DevOps engineer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    <span>Selected candidates receive offer letter and onboarding details</span>
                  </li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Program Timeline</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Application Deadline:</span>
                    <span className="text-blue-600 font-semibold">Rolling applications</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Program Start:</span>
                    <span className="text-green-600 font-semibold">Flexible start dates</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Program End:</span>
                    <span className="text-red-600 font-semibold">6 months from start date</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Join */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Why Join Octobit8&apos;s Internship Program?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700">Hands-on Experience</h4>
                    <p className="text-gray-700 text-sm">Work on real-world projects with cutting-edge tools and technologies.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700">Industry Exposure</h4>
                    <p className="text-gray-700 text-sm">Collaborate with experienced professionals and gain insights into client projects.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700">Career Growth</h4>
                    <p className="text-gray-700 text-sm">Build a strong foundation for a successful career in DevOps and cloud engineering.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700">Global Network</h4>
                    <p className="text-gray-700 text-sm">Join Octobit8&apos;s network of professionals and clients across industries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your DevOps Journey?</h3>
            <p className="text-blue-100 mb-6">For more details, visit our website or contact us directly.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@octobit8.com?subject=Application%20for%20DevOps%20and%20Cloud%20Internship%20Program%202025" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition text-lg">
                Apply Now
              </a>
              <a href="mailto:careers@octobit8.com?subject=Inquiry%20about%20DevOps%20Internship%20Program" className="inline-block bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition text-lg">
                Contact Us
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-4">Octobit8 is committed to fostering an inclusive and diverse workplace. We encourage applications from candidates of all backgrounds and experiences.</p>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="w-full flex justify-center my-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>

      {/* Generative AI Internship Program 2025 - Detailed Section */}
      <section id="ai-internship" className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">Octobit8 Generative AI Internship Program 2025</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">A comprehensive 6-month program designed to provide hands-on experience in generative AI technologies, machine learning, and AI agent development, preparing candidates for the future of AI-powered applications.</p>
          </div>

          {/* Program Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Program Overview</h3>
            <p className="text-gray-700 mb-4">Octobit8, a leading IT outsourcing and custom software development company, is excited to announce its comprehensive Generative AI Internship Program 2025. This 6-month program is designed to provide hands-on experience in cutting-edge AI technologies, machine learning models, and AI agent development, preparing candidates for real-world challenges in the rapidly evolving field of artificial intelligence.</p>
            <p className="text-gray-700 mb-4">Interns will work on state-of-the-art AI models, contribute to AI-powered applications, and develop intelligent agents for various industries. Upon successful completion, participants will receive an Internship Experience Certificate and an opportunity to interview for a role with one of Octobit8&apos;s prestigious clients.</p>
          </div>

          {/* Program Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Program Objectives</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Equip interns with practical skills in AI/ML, generative models, and AI agent development</li>
                <li>• Provide exposure to end-to-end AI application development and deployment</li>
                <li>• Foster innovation, problem-solving, and critical thinking in AI development</li>
                <li>• Prepare candidates for careers in AI engineering and machine learning</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Program Details</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-purple-700">Duration</h4>
                  <p className="text-gray-700">6 Months</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">Commitment</h4>
                  <p className="text-gray-700">Full-time (40 hours/week)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">Work Mode</h4>
                  <p className="text-gray-700">Flexible remote and hybrid options available</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">Application Deadline</h4>
                  <p className="text-gray-700">Rolling applications accepted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Eligibility Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Education</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Enrolled in or recently graduated from Bachelor&apos;s, Master&apos;s, or Ph.D. program</li>
                  <li>• Computer Science, AI/ML, Data Science, Mathematics, or related fields</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Technical Skills</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Strong programming skills (Python, JavaScript, or similar)</li>
                  <li>• Basic understanding of machine learning concepts</li>
                  <li>• Familiarity with AI frameworks (TensorFlow, PyTorch) is a plus</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Soft Skills</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Strong analytical and problem-solving skills</li>
                  <li>• Eagerness to learn AI and machine learning technologies</li>
                  <li>• Proficiency in English</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Work Environment</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Ability to work in a collaborative, agile environment</li>
                  <li>• Strong communication skills</li>
                  <li>• Creative thinking and innovation mindset</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Program Structure */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-indigo-500">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Program Structure</h3>
            <p className="text-gray-700 mb-6">The internship is divided into four phases, each focusing on specific AI skills and technologies to build a comprehensive generative AI and machine learning skill set.</p>
            
            <div className="space-y-6">
              {/* Phase 1 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-bold text-purple-700 mb-2">Phase 1: AI Fundamentals and Python (Weeks 1–4)</h4>
                <p className="text-gray-600 mb-3">Objective: Understand AI fundamentals, Python programming, and basic machine learning concepts.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-purple-600 mb-2">Activities:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Introduction to AI and Machine Learning</li>
                      <li>• Python Programming for AI</li>
                      <li>• Data Structures and Algorithms</li>
                      <li>• Basic Statistics and Mathematics</li>
                      <li>• Hands-on Labs and Projects</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">Deliverables:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Python AI projects portfolio</li>
                      <li>• Basic ML model implementations</li>
                      <li>• Data analysis projects</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-xl font-bold text-green-700 mb-2">Phase 2: Machine Learning and Deep Learning (Weeks 5–12)</h4>
                <p className="text-gray-600 mb-3">Objective: Master machine learning algorithms, deep learning frameworks, and model development.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">Activities:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Supervised and Unsupervised Learning</li>
                      <li>• Neural Networks and Deep Learning</li>
                      <li>• TensorFlow and PyTorch Frameworks</li>
                      <li>• Model Training and Evaluation</li>
                      <li>• Feature Engineering and Data Preprocessing</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">Deliverables:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Trained ML models</li>
                      <li>• Deep learning applications</li>
                      <li>• Model evaluation reports</li>
                      <li>• AI project documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-bold text-purple-700 mb-2">Phase 3: Generative AI and Large Language Models (Weeks 13–18)</h4>
                <p className="text-gray-600 mb-3">Objective: Work with generative AI models, LLMs, and natural language processing.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-purple-600 mb-2">Activities:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Large Language Models (GPT, BERT, etc.)</li>
                      <li>• Natural Language Processing</li>
                      <li>• Generative AI Applications</li>
                      <li>• Prompt Engineering</li>
                      <li>• AI Model Fine-tuning</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">Deliverables:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Custom LLM applications</li>
                      <li>• Generative AI projects</li>
                      <li>• NLP solutions</li>
                      <li>• AI model deployment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-xl font-bold text-orange-700 mb-2">Phase 4: AI Agents and Production Deployment (Weeks 19–24)</h4>
                <p className="text-gray-600 mb-3">Objective: Develop AI agents and deploy AI applications in production environments.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-orange-600 mb-2">Activities:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• AI Agent Development</li>
                      <li>• AI Application Deployment</li>
                      <li>• MLOps and Model Monitoring</li>
                      <li>• AI Ethics and Responsible AI</li>
                      <li>• Real-world AI Projects</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">Deliverables:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Functional AI agents</li>
                      <li>• Production-ready AI applications</li>
                      <li>• MLOps pipeline</li>
                      <li>• AI ethics documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools and Technologies */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-teal-500">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Tools and Technologies Covered</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Programming & Frameworks</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Python, JavaScript</li>
                  <li>• TensorFlow, PyTorch</li>
                  <li>• Scikit-learn, NumPy, Pandas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">AI & ML Tools</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Hugging Face, OpenAI API</li>
                  <li>• LangChain, AutoGPT</li>
                  <li>• Jupyter Notebooks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Deployment & Monitoring</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Docker, Kubernetes</li>
                  <li>• MLflow, Kubeflow</li>
                  <li>• AWS SageMaker, Azure ML</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">AI Agents & Automation</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Rasa, Botpress</li>
                  <li>• AutoML, AutoAI</li>
                  <li>• AI Agent Frameworks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-pink-500">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Learning Outcomes</h3>
            <p className="text-gray-700 mb-4">By the end of the internship, participants will:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="text-gray-700 space-y-2">
                <li>• Understand and implement AI/ML algorithms and models</li>
                <li>• Develop and deploy generative AI applications</li>
                <li>• Build and train large language models</li>
                <li>• Create intelligent AI agents for various use cases</li>
              </ul>
              <ul className="text-gray-700 space-y-2">
                <li>• Deploy AI applications in production environments</li>
                <li>• Gain practical experience in AI development</li>
                <li>• Understand AI ethics and responsible AI practices</li>
                <li>• Build a portfolio of AI projects</li>
              </ul>
            </div>
          </div>

          {/* Mentorship and Support */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-indigo-500">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Mentorship and Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Dedicated Mentors</h4>
                <p className="text-gray-700">Each intern will be assigned a senior AI engineer as a mentor.</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Weekly Check-ins</h4>
                <p className="text-gray-700">Regular feedback sessions to track progress and address challenges.</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Community Engagement</h4>
                <p className="text-gray-700">Access to Octobit8&apos;s internal AI community for peer support and knowledge sharing.</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Workshops and Webinars</h4>
                <p className="text-gray-700">Monthly sessions on advanced topics like AI ethics, MLOps, and emerging AI technologies.</p>
              </div>
            </div>
          </div>

          {/* Certification and Career Opportunities */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Certification and Career Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-green-700 mb-2">Internship Experience Certificate</h4>
                <p className="text-gray-700 text-sm">Awarded upon successful completion of the program.</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-green-700 mb-2">Client Interview Opportunity</h4>
                <p className="text-gray-700 text-sm">Top performers will be recommended for interviews with Octobit8&apos;s clients.</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-green-700 mb-2">Portfolio Development</h4>
                <p className="text-gray-700 text-sm">Build a portfolio of AI projects to showcase skills to future employers.</p>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Application Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Application Steps</h4>
                <ol className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <span>Submit Application via Octobit8&apos;s careers page with resume and cover letter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <span>Complete online assessment covering programming, AI/ML concepts, and problem-solving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <span>Participate in technical interview with an AI engineer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    <span>Selected candidates receive offer letter and onboarding details</span>
                  </li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Program Timeline</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Application Deadline:</span>
                    <span className="text-purple-600 font-semibold">Rolling applications</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Program Start:</span>
                    <span className="text-green-600 font-semibold">Flexible start dates</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Program End:</span>
                    <span className="text-red-600 font-semibold">6 months from start date</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Join */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Why Join Octobit8&apos;s AI Internship Program?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700">Cutting-edge AI Experience</h4>
                    <p className="text-gray-700 text-sm">Work with the latest AI technologies and generative models.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700">Industry Exposure</h4>
                    <p className="text-gray-700 text-sm">Collaborate with experienced AI professionals and gain insights into client projects.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700">Career Growth</h4>
                    <p className="text-gray-700 text-sm">Build a strong foundation for a successful career in AI and machine learning.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700">Innovation Network</h4>
                    <p className="text-gray-700 text-sm">Join Octobit8&apos;s network of AI professionals and clients across industries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Journey?</h3>
            <p className="text-purple-100 mb-6">For more details, visit our website or contact us directly.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@octobit8.com?subject=Application%20for%20Generative%20AI%20Internship%20Program%202025" className="inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition text-lg">
                Apply Now
              </a>
              <a href="mailto:careers@octobit8.com?subject=Inquiry%20about%20AI%20Internship%20Program" className="inline-block bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-purple-600 transition text-lg">
                Contact Us
              </a>
            </div>
            <p className="text-purple-200 text-sm mt-4">Octobit8 is committed to fostering an inclusive and diverse workplace. We encourage applications from candidates of all backgrounds and experiences.</p>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="w-full flex justify-center my-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Apply for Our Internship Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your journey in DevOps or AI? Fill out the application form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <ContactForm 
            title="Apply for Our Internship Programs"
            subtitle="Fill out the form below and we'll get back to you within 24 hours."
            defaultPosition="Internship Program Application"
            emailSubject="Career Application - Internship Programs"
            emailTo="careers@octobit8.com"
            showCompany={false}
            placeholder="Tell us about your background, experience, which program you're interested in (DevOps/Cloud or Generative AI), and why you're interested in this position..."
          />
        </div>
      </section>
    </div>
  );
} 