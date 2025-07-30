import Image from "next/image";
import Link from "next/link";

export default function DevOpsServicesPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-32 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-2 rounded-full text-sm tracking-widest mb-6 animate-pulse shadow-lg">Octobit8</span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg text-gray-900">
            Your Partner in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">DevOps & Cloud Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-700 mb-8 max-w-3xl leading-relaxed">
            We empower businesses to achieve seamless, secure, and scalable software delivery through cutting-edge DevOps practices and comprehensive cloud solutions.
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-lg glow-effect animate-bounce">
            Get DevOps Assessment
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="max-w-5xl mx-auto mb-20 px-4 relative">
        <div className="bg-white rounded-3xl shadow-2xl p-12 border-l-8 border-blue-500 flex flex-col items-center relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/icons/devops.svg" alt="DevOps" width={32} height={32} className="w-8 h-8" />
            <h2 className="text-4xl font-bold text-blue-800">Welcome to Octobit8</h2>
          </div>
          <p className="text-xl text-gray-700 text-center leading-relaxed max-w-4xl">
            At Octobit8, we empower businesses to achieve seamless, secure, and scalable software delivery through cutting-edge DevOps practices and comprehensive cloud solutions. Our tailored services cater to industries like financial services, healthcare, e-commerce, and travel, ensuring compliance, reliability, and rapid innovation. Partner with us to transform your development lifecycle and cloud infrastructure to stay ahead in a competitive digital landscape.
          </p>
        </div>
      </section>

      {/* Our DevOps Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our DevOps & Cloud Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive solutions designed to accelerate your development lifecycle, enhance operational efficiency, and optimize cloud infrastructure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group flex flex-col items-stretch bg-white rounded-3xl shadow-xl border-l-8 border-blue-500 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[140px] bg-gradient-to-b from-blue-600 to-blue-400 p-10">
                <Image src="/icons/ci-cd.svg" alt="CI/CD" width={72} height={72} className="w-18 h-18 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-xl tracking-wide">CI/CD Pipeline Automation</span>
              </div>
              <div className="flex-1 p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Streamlined Delivery</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Streamline your software delivery with robust CI/CD pipelines. We leverage industry-leading tools like Jenkins, GitLab CI, GitHub Actions, Spinnaker, and TeamCity to automate build, test, and deployment workflows. Our pipelines reduce deployment times, enhance reliability, and support parallel execution for faster feature delivery.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-3xl shadow-xl border-l-8 border-green-500 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[140px] bg-gradient-to-b from-green-600 to-green-400 p-10">
                <Image src="/icons/automation.svg" alt="Automation" width={72} height={72} className="w-18 h-18 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-xl tracking-wide">Infrastructure as Code (IaC)</span>
              </div>
              <div className="flex-1 p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Precision Management</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Provision and manage infrastructure with precision using Terraform and CloudFormation. Our IaC solutions ensure consistent, compliant, and scalable environments across AWS, Azure, and GCP, embedding security and cost-efficiency into your infrastructure.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-3xl shadow-xl border-l-8 border-yellow-500 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[140px] bg-gradient-to-b from-yellow-500 to-yellow-300 p-10">
                <Image src="/icons/container.svg" alt="Container" width={72} height={72} className="w-18 h-18 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-xl tracking-wide">Containerization & Orchestration</span>
              </div>
              <div className="flex-1 p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Effortless Scaling</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Deploy and scale applications effortlessly with Docker, Kubernetes, and Helm. Our solutions enable zero-downtime deployments, environment isolation, and simplified management of microservices, ensuring high availability during peak demand.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-3xl shadow-xl border-l-8 border-pink-500 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[140px] bg-gradient-to-b from-pink-600 to-pink-400 p-10">
                <Image src="/icons/security.svg" alt="Security" width={72} height={72} className="w-18 h-18 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-xl tracking-wide">Code Quality & Security</span>
              </div>
              <div className="flex-1 p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">High Standards Protection</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Maintain high code standards and protect against vulnerabilities with SonarQube, Bandit, Trivy, and KICS. We integrate security scans and compliance checks into your pipelines, safeguarding sensitive data and meeting regulatory requirements like PCI DSS, HIPAA, and GDPR.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-3xl shadow-xl border-l-8 border-purple-500 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[140px] bg-gradient-to-b from-purple-600 to-purple-400 p-10">
                <Image src="/icons/monitoring.svg" alt="Monitoring" width={72} height={72} className="w-18 h-18 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-xl tracking-wide">Monitoring & Observability</span>
              </div>
              <div className="flex-1 p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Real-time Insights</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Gain real-time insights into your applications and infrastructure with Prometheus, Grafana, ELK Stack, and Datadog. Our observability solutions provide centralized log analysis, custom dashboards, and proactive alerts to ensure 99.9% uptime and rapid issue resolution.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-3xl shadow-xl border-l-8 border-indigo-500 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[140px] bg-gradient-to-b from-indigo-600 to-indigo-400 p-10">
                <Image src="/icons/support.svg" alt="Support" width={72} height={72} className="w-18 h-18 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-xl tracking-wide">Incident Management</span>
              </div>
              <div className="flex-1 p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Proactive Response</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Stay ahead of issues with PagerDuty, Opsgenie, and Slack. Our incident management solutions deliver real-time alerts and automated escalations, minimizing downtime and ensuring quick resolution of critical issues.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-3xl shadow-xl border-l-8 border-red-500 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[140px] bg-gradient-to-b from-red-600 to-red-400 p-10">
                <Image src="/icons/security.svg" alt="Security" width={72} height={72} className="w-18 h-18 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-xl tracking-wide">Artifact & Secrets Management</span>
              </div>
              <div className="flex-1 p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Secure Management</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Securely manage build artifacts and sensitive data with JFrog Artifactory, Keeper, and GitLab. Our solutions provide version control, traceability, and encryption, ensuring secure and auditable DevOps workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Octobit8 */}
      <section className="py-24 bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Why Choose Octobit8?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Proven expertise and industry-leading solutions that drive real business value</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Image src="/icons/star.svg" alt="Expertise" width={32} height={32} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Industry Expertise</h3>
              <p className="text-gray-700 leading-relaxed">Proven success in finance, healthcare, e-commerce, and travel with deep domain knowledge and best practices.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Image src="/icons/security.svg" alt="Compliance" width={32} height={32} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Compliance-Driven</h3>
              <p className="text-gray-700 leading-relaxed">Adhere to standards like PCI DSS, HIPAA, GDPR, and SOC 2 with automated compliance monitoring and reporting.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Image src="/icons/scalability.svg" alt="Scalability" width={32} height={32} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Scalability</h3>
              <p className="text-gray-700 leading-relaxed">Handle high transaction volumes and peak loads with ease through cloud-native architectures and auto-scaling.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Image src="/icons/security.svg" alt="Security" width={32} height={32} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Security First</h3>
              <p className="text-gray-700 leading-relaxed">Embed vulnerability scans and encryption to protect your data with comprehensive security controls.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Image src="/icons/cost-savings.svg" alt="Cost Efficiency" width={32} height={32} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Cost Efficiency</h3>
              <p className="text-gray-700 leading-relaxed">Optimize resources and reduce operational costs through automation and intelligent resource management.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Image src="/icons/analytics.svg" alt="Transparency" width={32} height={32} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Transparency</h3>
              <p className="text-gray-700 leading-relaxed">Provide audit-ready workflows with version control and real-time reporting for complete visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real-world implementations showcasing our expertise across diverse industries</p>
          </div>
          <div className="space-y-12">
            {/* Use Case 1 */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-700">Streamline Financial Services with a Secure Jenkins CI/CD Pipeline</h3>
              </div>
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Empowering Financial Institutions with Robust DevOps</h4>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">In the fast-evolving financial services industry, delivering secure, compliant, and reliable applications is critical. Whether you&apos;re a bank, fintech startup, or payment processor, your microservices-based applications—such as user authentication, payment processing, and transaction notifications—require a CI/CD pipeline that ensures rapid deployment, stringent security, and regulatory compliance.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-blue-700 mb-3 text-lg">Key Features:</h5>
                   <ul className="list-disc list-inside text-gray-700 space-y-2">
                     <li>Parallel Builds for Speed</li>
                     <li>Secure Containerization</li>
                     <li>Infrastructure as Code</li>
                     <li>Blue-Green Deployments</li>
                     <li>Comprehensive Testing</li>
                     <li>Security and Compliance</li>
                   </ul>
                 </div>
                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-green-700 mb-3 text-lg">Success Story:</h5>
                   <p className="text-gray-700 leading-relaxed">A leading fintech startup used this pipeline to deploy their payment processing platform, reducing deployment time by 40% and achieving zero downtime during peak transaction periods. By integrating SonarQube, they identified and resolved 95% of potential security vulnerabilities before production, ensuring PCI DSS compliance.</p>
                 </div>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-700">Secure Healthcare Data Analytics with a Jenkins CI/CD Pipeline</h3>
              </div>
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Empowering Healthcare with Compliant Automation</h4>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">In the healthcare industry, delivering secure, compliant, and reliable data analytics platforms is paramount. Whether you&apos;re a hospital, health tech innovator, or insurance provider, your platform—handling patient data processing, predictive analytics, and reporting—requires a CI/CD pipeline that ensures data security, regulatory compliance, and high performance.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-blue-700 mb-3 text-lg">Key Features:</h5>
                   <ul className="list-disc list-inside text-gray-700 space-y-2">
                     <li>Parallel Data Processing</li>
                     <li>Secure Containerization</li>
                     <li>Infrastructure as Code</li>
                     <li>Canary Deployments</li>
                     <li>Comprehensive Validation</li>
                     <li>Security and Compliance</li>
                   </ul>
                 </div>
                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-green-700 mb-3 text-lg">Success Story:</h5>
                   <p className="text-gray-700 leading-relaxed">A leading health tech company used this pipeline to deploy their predictive analytics platform for patient risk scoring. They reduced model deployment time by 50% and achieved 100% compliance with HIPAA audits by integrating automated security scans and encrypted infrastructure provisioning.</p>
                 </div>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-700">GitLab CI Pipelines for CloudFormation-Based Migration</h3>
              </div>
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Multi-Account AWS Infrastructure Management</h4>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">An organization hosts all AWS resources in a single AWS account, leading to challenges in resource isolation, security, cost tracking, and scalability. To address these issues, the organization plans to migrate resources to environment-specific AWS accounts (e.g., development, staging, production).</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-blue-700 mb-3 text-lg">Pipeline Stages:</h5>
                   <ul className="list-disc list-inside text-gray-700 space-y-2">
                     <li>Lint: Validate CloudFormation templates</li>
                     <li>Plan: Generate change sets</li>
                     <li>Test: Deploy to temporary environment</li>
                     <li>Deploy: Apply to target accounts</li>
                     <li>Cleanup: Remove temporary resources</li>
                   </ul>
                 </div>
                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-green-700 mb-3 text-lg">Benefits:</h5>
                   <ul className="list-disc list-inside text-gray-700 space-y-2">
                     <li>Automated migration process</li>
                     <li>Secure credential management</li>
                     <li>Rollback mechanisms</li>
                     <li>Environment isolation</li>
                     <li>Cost optimization</li>
                   </ul>
                 </div>
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-700">Streamlined Multi-Cloud Infrastructure Deployment with Terraform Modules</h3>
              </div>
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Enterprise IaC Solution</h4>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">A leading DevOps solution provider specializing in Infrastructure as Code (IaC) for enterprise clients needed to develop reusable, secure, and validated Terraform modules to enable IaC developers to provision infrastructure across AWS, Azure, and GCP clouds efficiently.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-blue-700 mb-3 text-lg">Key Components:</h5>
                   <ul className="list-disc list-inside text-gray-700 space-y-2">
                     <li>Terraform Module Development</li>
                     <li>Configuration Validation</li>
                     <li>KICS Scanning for Security</li>
                     <li>GitLab State Management</li>
                     <li>CI/CD Integration</li>
                   </ul>
                 </div>
                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-green-700 mb-3 text-lg">Outcomes:</h5>
                   <ul className="list-disc list-inside text-gray-700 space-y-2">
                     <li>60% reduction in provisioning time</li>
                     <li>95% of security issues remediated</li>
                     <li>Seamless team collaboration</li>
                     <li>Multi-cloud consistency</li>
                     <li>Compliance adherence</li>
                   </ul>
                 </div>
              </div>
            </div>

            {/* Use Case 5 */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-700">Migrating CI/CD Pipeline from Bitbucket to GitHub Actions</h3>
              </div>
              <h4 className="text-xl font-semibold text-blue-600 mb-4">DevOps Solution Provider Enhancement</h4>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">A DevOps solution provider seeks to enhance its software delivery process by migrating its CI/CD pipeline from Bitbucket Pipelines to GitHub Actions. This migration aims to leverage GitHub Actions&apos; robust ecosystem, seamless integration with GitHub repositories, and advanced automation capabilities.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-blue-700 mb-3 text-lg">Benefits:</h5>
                   <ul className="list-disc list-inside text-gray-700 space-y-2">
                     <li>Seamless GitHub Integration</li>
                     <li>Extensive Marketplace</li>
                     <li>Cost-Effective Scalability</li>
                     <li>Simplified Configuration</li>
                     <li>Enhanced Security</li>
                   </ul>
                 </div>
                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-green-700 mb-3 text-lg">Implementation:</h5>
                   <ul className="list-disc list-inside text-gray-700 space-y-2">
                     <li>Pre-Migration Analysis</li>
                     <li>Repository Migration</li>
                     <li>Pipeline Configuration</li>
                     <li>Testing and Validation</li>
                     <li>Training and Documentation</li>
                   </ul>
                 </div>
              </div>
            </div>

            {/* Use Case 6 */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">6</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-700">Streamlining CI/CD Pipelines for a Travel Company&apos;s Delivery Platform</h3>
              </div>
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Leading Travel Company Solution</h4>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">A leading travel company with a robust digital delivery platform required a scalable, secure, and efficient CI/CD pipeline to support its diverse portfolio of applications, including booking systems, customer portals, and internal tools.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-blue-700 mb-3 text-lg">Tools Used:</h5>
                   <ul className="list-disc list-inside text-gray-700 space-y-2">
                     <li>Jenkins & TeamCity</li>
                     <li>Spinnaker</li>
                     <li>JFrog Artifactory</li>
                     <li>SonarQube</li>
                     <li>Datadog & Opsgenie</li>
                   </ul>
                 </div>
                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-green-700 mb-3 text-lg">Results:</h5>
                   <ul className="list-disc list-inside text-gray-700 space-y-2">
                     <li>60% reduction in deployment cycles</li>
                     <li>40% decrease in code vulnerabilities</li>
                     <li>25% improvement in code quality</li>
                     <li>99.9% application uptime</li>
                     <li>Enhanced security</li>
                   </ul>
                 </div>
              </div>
            </div>

            {/* Use Case 7 */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">7</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-700">Managing Multiple Applications on Kubernetes with Helm</h3>
              </div>
              <h4 className="text-xl font-semibold text-blue-600 mb-4">SaaS Company Kubernetes Management</h4>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">A fast-growing SaaS company, TechTrend Innovations, operates a suite of microservices-based applications serving thousands of users globally. Their infrastructure relies on Kubernetes to manage containerized workloads across multiple environments.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-blue-700 mb-3 text-lg">Implementation:</h5>
                   <ul className="list-disc list-inside text-gray-700 space-y-2">
                     <li>Helm Chart Development</li>
                     <li>Centralized Chart Repository</li>
                     <li>CI/CD Integration</li>
                     <li>Environment Management</li>
                     <li>Monitoring and Observability</li>
                   </ul>
                 </div>
                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-green-700 mb-3 text-lg">Results:</h5>
                   <ul className="list-disc list-inside text-gray-700 space-y-2">
                     <li>60% faster deployments</li>
                     <li>Eliminated configuration drift</li>
                     <li>50% reduced operational overhead</li>
                     <li>99.9% uptime achieved</li>
                     <li>Better team collaboration</li>
                   </ul>
                 </div>
              </div>
            </div>

            {/* Use Case 8 */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">8</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-700">Implementing Comprehensive Monitoring and Observability for Enterprise Applications</h3>
              </div>
              <h4 className="text-xl font-semibold text-blue-600 mb-4">E-commerce Monitoring Solution</h4>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">A leading e-commerce company with a complex ecosystem of microservices-based applications needed a robust monitoring and observability solution to ensure high availability, performance, and rapid issue resolution.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-blue-700 mb-3 text-lg">Solution Components:</h5>
                   <ul className="list-disc list-inside text-gray-700 space-y-2">
                     <li>ELK Stack for Log Analysis</li>
                     <li>Prometheus & Grafana</li>
                     <li>Alertmanager & PagerDuty</li>
                     <li>Kubernetes-native Monitoring</li>
                     <li>Multi-cloud Visibility</li>
                   </ul>
                 </div>
                 <div className="bg-white rounded-2xl p-6 shadow-lg">
                   <h5 className="font-bold text-green-700 mb-3 text-lg">Results:</h5>
                   <ul className="list-disc list-inside text-gray-700 space-y-2">
                     <li>40% faster incident response</li>
                     <li>80% of outages prevented</li>
                     <li>200% log volume increase handled</li>
                     <li>15% cloud cost savings</li>
                     <li>99.9% uptime maintained</li>
                   </ul>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Cloud Infrastructure Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transform your business with comprehensive cloud solutions across all major platforms</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group flex flex-col items-stretch bg-white rounded-3xl shadow-xl border-l-8 border-blue-500 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[140px] bg-gradient-to-b from-blue-600 to-blue-400 p-10">
                <Image src="/icons/cloud-migration.svg" alt="Migration" width={72} height={72} className="w-18 h-18 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-xl tracking-wide">Cloud Migration</span>
              </div>
              <div className="flex-1 p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Seamless Migration</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Migrate your applications and data to the cloud with minimal downtime and maximum efficiency using proven migration strategies and automated tools.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-3xl shadow-xl border-l-8 border-green-500 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[140px] bg-gradient-to-b from-green-600 to-green-400 p-10">
                <Image src="/icons/aws.svg" alt="AWS" width={72} height={72} className="w-18 h-18 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-xl tracking-wide">AWS Solutions</span>
              </div>
              <div className="flex-1 p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Amazon Web Services</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Leverage AWS cloud services for scalable, secure, and cost-effective infrastructure solutions with enterprise-grade reliability.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-3xl shadow-xl border-l-8 border-yellow-500 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[140px] bg-gradient-to-b from-yellow-500 to-yellow-300 p-10">
                <Image src="/icons/azure.svg" alt="Azure" width={72} height={72} className="w-18 h-18 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-xl tracking-wide">Azure Solutions</span>
              </div>
              <div className="flex-1 p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Microsoft Azure</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Build, deploy, and manage applications using Microsoft Azure&apos;s comprehensive cloud platform with integrated DevOps tools.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-3xl shadow-xl border-l-8 border-pink-500 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[140px] bg-gradient-to-b from-pink-600 to-pink-400 p-10">
                <Image src="/icons/gcp.svg" alt="GCP" width={72} height={72} className="w-18 h-18 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-xl tracking-wide">Google Cloud</span>
              </div>
              <div className="flex-1 p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Google Cloud Platform</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Harness the power of Google Cloud for AI, machine learning, and scalable infrastructure solutions with advanced analytics.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-3xl shadow-xl border-l-8 border-purple-500 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[140px] bg-gradient-to-b from-purple-600 to-purple-400 p-10">
                <Image src="/icons/security.svg" alt="Security" width={72} height={72} className="w-18 h-18 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-xl tracking-wide">Cloud Security</span>
              </div>
              <div className="flex-1 p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Security & Compliance</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Implement robust security measures and ensure compliance with industry standards in your cloud environment with advanced threat protection.</p>
              </div>
            </div>
            <div className="relative group flex flex-col items-stretch bg-white rounded-3xl shadow-xl border-l-8 border-indigo-500 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[140px] bg-gradient-to-b from-indigo-600 to-indigo-400 p-10">
                <Image src="/icons/cost-savings.svg" alt="Cost" width={72} height={72} className="w-18 h-18 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-xl tracking-wide">Cost Optimization</span>
              </div>
              <div className="flex-1 p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Cloud Cost Management</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Optimize your cloud spending with cost analysis, resource optimization, and budget management strategies to maximize ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-12 border-l-8 border-blue-500">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-700">Ready to transform your DevOps workflow? Contact our experts to customize solutions for your business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                         <div className="bg-white rounded-2xl p-8 shadow-lg">
               <h3 className="text-2xl font-bold text-blue-700 mb-3">Email</h3>
               <p className="text-lg text-gray-700">info@devsyncsolutions.com</p>
             </div>
             <div className="bg-white rounded-2xl p-8 shadow-lg">
               <h3 className="text-2xl font-bold text-green-700 mb-3">Phone</h3>
               <p className="text-lg text-gray-700">+1 (800) 123-4567</p>
             </div>
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">Follow us on LinkedIn and Twitter for the latest DevOps insights and updates.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Partner with Octobit8</h2>
          <p className="text-xl mb-8 leading-relaxed">Unlock the full potential of your development pipeline and cloud infrastructure. Explore our resources for setup guides, best practices, and case studies, or contact us today to start your DevOps & Cloud journey.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-lg">
            Start Your DevOps & Cloud Journey
          </Link>
        </div>
      </section>
    </div>
  );
} 