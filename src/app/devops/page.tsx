"use client";

const devopsSolutions = [
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
    title: "Cloud Security",
    icon: "/icons/cloud-security.svg",
    description: "Implement advanced cloud security controls, monitoring, and compliance for your cloud environments."
  }
];

export default function DevOpsPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Decorative SVG at top */}
      <svg className="absolute top-0 left-0 w-full h-32 md:h-48 opacity-20 pointer-events-none" viewBox="0 0 1440 320"><path fill="#3b82f6" fillOpacity="0.2" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      {/* Main content container */}
      <main className="relative z-10">
        {/* Hero Section: add gradient bg, accent bar, and decorative SVG */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-20 md:py-28 overflow-hidden shadow-xl rounded-b-3xl mb-16">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg className="absolute left-0 top-0 w-1/2 h-40 md:h-64 animate-float-slow" viewBox="0 0 400 160"><ellipse cx="200" cy="80" rx="200" ry="60" fill="#60a5fa" fillOpacity="0.18" /></svg>
            <svg className="absolute right-0 top-10 w-1/3 h-32 animate-float" viewBox="0 0 300 128"><ellipse cx="150" cy="64" rx="150" ry="40" fill="#fbbf24" fillOpacity="0.10" /></svg>
            <svg className="absolute left-1/4 bottom-0 w-1/2 h-24 animate-float-reverse" viewBox="0 0 400 96"><ellipse cx="200" cy="48" rx="200" ry="30" fill="#fff" fillOpacity="0.08" /></svg>
          </div>
          <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
            <div className="mb-6 flex flex-col items-center">
              <span className="inline-block bg-white/20 text-blue-100 font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 border border-blue-200 animate-pulse">DevOps Solutions</span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">Accelerate Your IT with <span className="text-yellow-300">DevOps Excellence</span></h1>
              <p className="text-lg md:text-xl font-medium text-blue-100 mb-6 max-w-2xl">Transform your IT operations with Octobit8’s cutting-edge DevOps solutions. Deliver software faster, smarter, and more securely through seamless automation, collaboration, and innovation.</p>
            </div>
            <a href="#consultation" className="inline-block bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition text-lg glow-effect animate-bounce">Book a Consultation</a>
          </div>
          <svg className="absolute bottom-0 left-0 w-full h-24 md:h-32 opacity-30" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </section>
        {/* SECTION DIVIDER: Animated gradient bar */}
        <div className="w-full flex justify-center mb-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>
        {/* Why Choose Octobit8 Section: card with accent bar */}
        <section className="max-w-4xl mx-auto mb-16 px-4 relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-0 opacity-20"><img src="/icons/octobit8.svg" alt="Octobit8 Logo" className="w-24 h-24" /></div>
          <div className="bg-white rounded-2xl shadow-lg p-10 border-l-8 border-blue-500 flex flex-col items-center relative z-10">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-4 flex items-center gap-2"><img src="/icons/star.svg" alt="Star" className="w-7 h-7 inline-block" />Why Choose Octobit8</h2>
            <p className="text-lg text-gray-700 text-center">At Octobit8, we provide end-to-end DevOps services to streamline your development and operations, ensuring scalability, reliability, and efficiency. Whether you're a startup or an enterprise, our tailored solutions help you stay ahead in the digital race.</p>
          </div>
        </section>
        {/* SECTION DIVIDER */}
        <div className="w-full flex justify-center mb-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>
        {/* Core DevOps Services: true two-column layout, left and right columns */}
        <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
            {/* Left column: odd-indexed services */}
            <div className="flex flex-col gap-12">
              {/* Service 1: Version Control & Collaboration */}
              <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-blue-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-blue-600 to-blue-400 p-8 md:p-10">
                  <img src="/icons/github.svg" alt="Version Control" className="w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold text-lg tracking-wide">Version Control</span>
                </div>
                <div className="flex-1 p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">Version Control & Collaboration</h3>
                  <p className="text-gray-700 mb-4">Leverage industry-standard tools to manage code, foster team collaboration, and maintain version control with ease.</p>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Key Tools:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>GitHub, GitLab, Bitbucket for distributed version control</li>
                    <li>Branching strategies (Git Flow, trunk-based development)</li>
                    <li>Pull/Merge requests with code review automation</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Best Practices:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Enforce code review and approval workflows</li>
                    <li>Automated checks for linting, tests, and security</li>
                    <li>Tagging and semantic versioning for releases</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Advanced Features:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                    <li>Protected branches and required status checks</li>
                    <li>Integration with CI/CD for automated build triggers</li>
                    <li>Audit trails and compliance reporting</li>
                  </ul>
                </div>
                <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-500 to-blue-300" />
              </div>
              {/* Service 3: IaC */}
              <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-green-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-green-600 to-green-400 p-8 md:p-10">
                  <img src="/icons/iac.svg" alt="IaC" className="w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold text-lg tracking-wide">IaC</span>
                </div>
                <div className="flex-1 p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">Infrastructure as Code (IaC)</h3>
                  <p className="text-gray-700 mb-4">Provision and manage infrastructure using code for consistency, repeatability, and scalability across environments.</p>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Key Tools:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Terraform, AWS CloudFormation, Azure Resource Manager, Pulumi</li>
                    <li>Ansible, Chef, Puppet for configuration management</li>
                    <li>Packer for image building</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Best Practices:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Modular and reusable code (modules, roles, playbooks)</li>
                    <li>Version control for all infrastructure code</li>
                    <li>Automated testing and validation (e.g., Terratest, InSpec)</li>
                    <li>Parameterization and secrets management</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Implementation Highlights:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Automated provisioning of cloud resources (VPCs, subnets, security groups)</li>
                    <li>Immutable infrastructure and idempotent deployments</li>
                    <li>Drift detection and remediation</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Advanced Features:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                    <li>Policy as code for security enforcement (OPA, Sentinel)</li>
                    <li>Self-service infrastructure portals</li>
                    <li>Automated cost optimization and tagging</li>
                  </ul>
                </div>
                <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-green-500 to-green-300" />
              </div>
              {/* Service 5: Monitoring & Logging */}
              <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-pink-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-pink-600 to-pink-400 p-8 md:p-10">
                  <img src="/icons/monitoring.svg" alt="Monitoring" className="w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold text-lg tracking-wide">Monitoring</span>
                </div>
                <div className="flex-1 p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">Monitoring & Logging</h3>
                  <p className="text-gray-700 mb-4">Gain real-time insights into system performance, availability, and security with comprehensive monitoring and logging solutions.</p>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Key Tools:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Prometheus, Grafana for metrics and visualization</li>
                    <li>ELK Stack (Elasticsearch, Logstash, Kibana), Loki for log aggregation</li>
                    <li>Alertmanager, PagerDuty for incident response</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Best Practices:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Centralized logging and metrics collection</li>
                    <li>Structured logging and trace correlation (OpenTelemetry)</li>
                    <li>Automated alerting with actionable thresholds</li>
                    <li>Dashboards for SLO/SLA tracking</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Implementation Highlights:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Blackbox and whitebox monitoring</li>
                    <li>Distributed tracing for microservices</li>
                    <li>Automated incident creation and escalation</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Advanced Features:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                    <li>Self-healing automation based on alerts</li>
                    <li>Machine learning for anomaly detection</li>
                    <li>Compliance and audit log retention policies</li>
                  </ul>
                </div>
                <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-pink-500 to-pink-300" />
              </div>
              {/* Service 7: Cloud & Serverless */}
              <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-yellow-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-yellow-500 to-yellow-300 p-8 md:p-10">
                  <img src="/icons/cloud.svg" alt="Cloud" className="w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold text-lg tracking-wide">Cloud</span>
                </div>
                <div className="flex-1 p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">Cloud & Serverless Solutions</h3>
                  <p className="text-gray-700 mb-4">Harness the power of leading cloud platforms and serverless architectures for scalable, cost-effective, and resilient applications.</p>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Key Tools:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>AWS, Azure, Google Cloud Platform (GCP)</li>
                    <li>AWS Lambda, Azure Functions, Google Cloud Functions for serverless</li>
                    <li>API Gateway, S3, DynamoDB, Cloud SQL, Cosmos DB</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Best Practices:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Multi-cloud and hybrid cloud strategies</li>
                    <li>Infrastructure automation and cost management</li>
                    <li>Stateless, event-driven application design</li>
                    <li>Monitoring and logging for cloud-native workloads</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Implementation Highlights:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Cloud migration and modernization projects</li>
                    <li>Serverless microservices and API backends</li>
                    <li>Disaster recovery and high availability architectures</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Advanced Features:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                    <li>Automated scaling and pay-per-use billing</li>
                    <li>Cloud-native security and identity management</li>
                    <li>Edge computing and global content delivery (CDN)</li>
                  </ul>
                </div>
                <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-yellow-400 to-yellow-200" />
              </div>
            </div>
            {/* Right column: even-indexed services */}
            <div className="flex flex-col gap-12">
              {/* Service 2: CI/CD */}
              <div className="relative group flex flex-col items-stretch bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-xl border-r-8 border-indigo-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-indigo-600 to-indigo-400 p-8 md:p-10">
                  <img src="/icons/ci-cd.svg" alt="CI/CD" className="w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold text-lg tracking-wide">CI/CD</span>
                </div>
                <div className="flex-1 p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">Continuous Integration & Deployment (CI/CD)</h3>
                  <p className="text-gray-700 mb-4">Automate your build, test, and deployment pipelines for faster, error-free releases and rapid feedback cycles.</p>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Key Tools:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Jenkins, GitLab CI/CD, GitHub Actions, CircleCI, Azure DevOps</li>
                    <li>Artifact repositories: Nexus, Artifactory, GitHub Packages</li>
                    <li>Docker for build/test environments</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Best Practices:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Automated unit, integration, and end-to-end testing</li>
                    <li>Pipeline as code (YAML/DSL)</li>
                    <li>Fail-fast and parallelized build stages</li>
                    <li>Immutable artifacts and versioned deployments</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Implementation Highlights:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Blue/green and canary deployments for zero-downtime releases</li>
                    <li>Rollback strategies and automated notifications</li>
                    <li>Environment promotion (dev → staging → prod)</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Advanced Features:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                    <li>Dynamic environment provisioning for feature branches</li>
                    <li>Security and compliance checks in the pipeline (SAST/DAST)</li>
                    <li>Integration with chatops and incident management tools</li>
                  </ul>
                </div>
                <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-indigo-500 to-indigo-300" />
              </div>
              {/* Service 4: Containerization & Orchestration */}
              <div className="relative group flex flex-col items-stretch bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-xl border-r-8 border-cyan-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-cyan-600 to-cyan-400 p-8 md:p-10">
                  <img src="/icons/container.svg" alt="Containerization" className="w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold text-lg tracking-wide">Containers</span>
                </div>
                <div className="flex-1 p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">Containerization & Orchestration</h3>
                  <p className="text-gray-700 mb-4">Deploy and manage applications in containers for portability, scalability, and resilience across environments.</p>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Key Tools:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Docker, Podman for containerization</li>
                    <li>Kubernetes, AWS ECS, Azure AKS, GKE for orchestration</li>
                    <li>Helm for package management</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Best Practices:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Multi-stage builds and minimal base images</li>
                    <li>Declarative configuration (YAML, Helm charts)</li>
                    <li>Resource requests/limits and autoscaling</li>
                    <li>Health checks and readiness/liveness probes</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Implementation Highlights:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Rolling updates and rollbacks</li>
                    <li>Service discovery and load balancing</li>
                    <li>Persistent storage and stateful workloads</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Advanced Features:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                    <li>Service mesh (Istio, Linkerd) for traffic management and security</li>
                    <li>Automated scaling (HPA, VPA, KEDA)</li>
                    <li>GitOps for declarative, versioned infrastructure and app delivery</li>
                  </ul>
                </div>
                <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-cyan-500 to-cyan-300" />
              </div>
              {/* Service 6: DevSecOps & Security */}
              <div className="relative group flex flex-col items-stretch bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-xl border-r-8 border-red-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-red-600 to-red-400 p-8 md:p-10">
                  <img src="/icons/devsecops.svg" alt="DevSecOps" className="w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold text-lg tracking-wide">DevSecOps</span>
                </div>
                <div className="flex-1 p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">DevSecOps & Security</h3>
                  <p className="text-gray-700 mb-4">Integrate security into every stage of your DevOps pipeline to protect code, data, and infrastructure from threats and vulnerabilities.</p>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Key Tools:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Snyk, SonarQube, Checkmarx for static code analysis</li>
                    <li>HashiCorp Vault, AWS Secrets Manager for secrets management</li>
                    <li>Trivy, Aqua, Prisma Cloud for container security</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Best Practices:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Shift-left security: early vulnerability detection</li>
                    <li>Automated dependency scanning and patching</li>
                    <li>Role-based access control (RBAC) and least privilege</li>
                    <li>Continuous compliance monitoring</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Implementation Highlights:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                    <li>Security gates in CI/CD pipelines</li>
                    <li>Automated secrets rotation and audit logging</li>
                    <li>Incident response playbooks and forensics</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-blue-700 mt-4">Advanced Features:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                    <li>Policy as code for security enforcement (OPA, Sentinel)</li>
                    <li>Runtime protection and intrusion detection</li>
                    <li>Automated compliance reporting (GDPR, PCI-DSS, HIPAA)</li>
                  </ul>
                </div>
                <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-red-500 to-red-300" />
              </div>
            </div>
          </div>
        </section>
        {/* SECTION DIVIDER */}
        <div className="w-full flex justify-center mb-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>
        {/* Real-World Use Cases */}
        <section className="bg-blue-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Real-World Use Cases</h2>
            {/* Use Case 1: E-Commerce Platform Scaling */}
            <div className="relative group flex flex-col md:flex-row items-stretch bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-xl mb-12 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-blue-600 to-blue-400 p-8 md:p-10">
                <img src="/icons/e-commerce.svg" alt="E-Commerce" className="w-20 h-20 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">E-Commerce</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-2">E-Commerce Platform Scaling for Seasonal Demand</h3>
                <div className="flex flex-col md:flex-row md:gap-8">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-blue-700 mt-4">Client Profile:</h4>
                    <p className="text-gray-700 mb-2">A mid-sized e-commerce company with 500,000 monthly users.</p>
                    <h4 className="text-lg font-semibold text-blue-700 mt-4">Challenge:</h4>
                    <p className="text-gray-700 mb-2">Frequent downtime during peak shopping seasons (e.g., Black Friday) due to unpredictable traffic spikes. Manual infrastructure scaling was time-consuming and costly.</p>
                    <h4 className="text-lg font-semibold text-blue-700 mt-4">Solution:</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                      <li>Implemented a Kubernetes cluster on AWS with auto-scaling policies to handle traffic surges.</li>
                      <li>Integrated Prometheus and Grafana for real-time monitoring and proactive resource allocation.</li>
                      <li>Set up a GitLab CI/CD pipeline for rapid deployment of new features.</li>
                      <li>Used Infrastructure as Code (Terraform) for consistent, repeatable environment provisioning.</li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-blue-700 mt-4">Tools Used:</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                      <li>Kubernetes, AWS EKS</li>
                      <li>Prometheus, Grafana</li>
                      <li>GitLab CI/CD</li>
                      <li>Terraform</li>
                    </ul>
                    <h4 className="text-lg font-semibold text-blue-700 mt-4">Outcomes:</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                      <li>Reduced infrastructure costs by 40% through dynamic scaling.</li>
                      <li>Achieved 99.9% uptime during peak seasons.</li>
                      <li>Deployment frequency improved from monthly to weekly.</li>
                      <li>25% increase in customer satisfaction due to improved site reliability.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-500 to-blue-300" />
            </div>
            {/* Use Case 2: FinTech Compliance and Security Automation */}
            <div className="relative group flex flex-col md:flex-row items-stretch bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-xl mb-12 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-purple-600 to-purple-400 p-8 md:p-10">
                <img src="/icons/fintech.svg" alt="FinTech" className="w-20 h-20 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">FinTech</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-purple-700 mb-2">FinTech Compliance and Security Automation</h3>
                <div className="flex flex-col md:flex-row md:gap-8">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-purple-700 mt-4">Client Profile:</h4>
                    <p className="text-gray-700 mb-2">A financial services startup processing $10M in annual transactions.</p>
                    <h4 className="text-lg font-semibold text-purple-700 mt-4">Challenge:</h4>
                    <p className="text-gray-700 mb-2">Needed to comply with GDPR and PCI-DSS regulations while maintaining a fast development pace. Manual security checks slowed down the release cycle.</p>
                    <h4 className="text-lg font-semibold text-purple-700 mt-4">Solution:</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                      <li>Integrated Snyk for automated vulnerability scanning in the CI/CD pipeline.</li>
                      <li>Used HashiCorp Vault for secure management of API keys and credentials.</li>
                      <li>Provisioned compliant infrastructure on Azure using Terraform.</li>
                      <li>Configured Jenkins pipelines to enforce security checks before deployments.</li>
                      <li>Automated audit trails for regulatory reporting.</li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-purple-700 mt-4">Tools Used:</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                      <li>Snyk</li>
                      <li>HashiCorp Vault</li>
                      <li>Terraform</li>
                      <li>Azure</li>
                      <li>Jenkins</li>
                    </ul>
                    <h4 className="text-lg font-semibold text-purple-700 mt-4">Outcomes:</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                      <li>Achieved GDPR and PCI-DSS compliance in under 3 months.</li>
                      <li>Reduced security review time by 70% through automation.</li>
                      <li>Eliminated critical vulnerabilities in open-source dependencies.</li>
                      <li>Enabled secure, bi-weekly releases without compromising compliance.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-purple-500 to-purple-300" />
            </div>
            {/* Use Case 3: Rapid SaaS Product Deployment */}
            <div className="relative group flex flex-col md:flex-row items-stretch bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-xl mb-12 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-green-600 to-green-400 p-8 md:p-10">
                <img src="/icons/saas.svg" alt="SaaS" className="w-20 h-20 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">SaaS</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-2">Rapid SaaS Product Deployment</h3>
                <div className="flex flex-col md:flex-row md:gap-8">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-green-700 mt-4">Client Profile:</h4>
                    <p className="text-gray-700 mb-2">A SaaS provider delivering project management software to 10,000 users.</p>
                    <h4 className="text-lg font-semibold text-green-700 mt-4">Challenge:</h4>
                    <p className="text-gray-700 mb-2">Wanted to release new features weekly to stay competitive but struggled with manual testing and inconsistent environments, leading to frequent bugs in production.</p>
                    <h4 className="text-lg font-semibold text-green-700 mt-4">Solution:</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                      <li>Implemented GitLab CI/CD with automated unit, integration, and end-to-end testing using Cypress and JUnit.</li>
                      <li>Used Terraform to create consistent development, staging, and production environments on GCP.</li>
                      <li>Set up ELK Stack for centralized logging and rapid debugging.</li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-green-700 mt-4">Tools Used:</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                      <li>GitLab CI/CD</li>
                      <li>Cypress, JUnit</li>
                      <li>Terraform</li>
                      <li>GCP</li>
                      <li>ELK Stack</li>
                    </ul>
                    <h4 className="text-lg font-semibold text-green-700 mt-4">Outcomes:</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                      <li>Reduced release cycle from 2 weeks to 2 days.</li>
                      <li>Achieved 100% test coverage, eliminating 90% of production bugs.</li>
                      <li>Improved developer productivity by 30% due to automation.</li>
                      <li>15% increase in user retention due to faster feature delivery.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-green-500 to-green-300" />
            </div>
            {/* Use Case 4: Legacy System Modernization */}
            <div className="relative group flex flex-col md:flex-row items-stretch bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-xl mb-12 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-yellow-600 to-yellow-400 p-8 md:p-10">
                <img src="/icons/legacy.svg" alt="Legacy" className="w-20 h-20 mb-4 drop-shadow-lg" />
                <span className="text-white font-bold text-lg tracking-wide">Legacy</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-yellow-700 mb-2">Legacy System Modernization for an IT Enterprise</h3>
                <div className="flex flex-col md:flex-row md:gap-8">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-yellow-700 mt-4">Client Profile:</h4>
                    <p className="text-gray-700 mb-2">A large IT company with 50+ legacy monolithic applications.</p>
                    <h4 className="text-lg font-semibold text-yellow-700 mt-4">Challenge:</h4>
                    <p className="text-gray-700 mb-2">Legacy systems caused slow deployments (once every 2 months), high maintenance costs, and frequent outages. Scaling was inefficient and onboarding new developers was slow.</p>
                    <h4 className="text-lg font-semibold text-yellow-700 mt-4">Solution:</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                      <li>Migrated monolithic applications to a microservices architecture using Docker and AWS ECS.</li>
                      <li>Used Ansible for configuration management and Jenkins for automated deployments.</li>
                      <li>Implemented Prometheus and Grafana for monitoring service health.</li>
                      <li>Used AWS CloudFormation for consistent infrastructure provisioning.</li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-yellow-700 mt-4">Tools Used:</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                      <li>Docker, AWS ECS</li>
                      <li>Ansible</li>
                      <li>Jenkins</li>
                      <li>Prometheus, Grafana</li>
                      <li>AWS CloudFormation</li>
                    </ul>
                    <h4 className="text-lg font-semibold text-yellow-700 mt-4">Outcomes:</h4>
                    <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                      <li>Increased deployment frequency by 5x (from bi-monthly to weekly).</li>
                      <li>Reduced server costs by 30% through containerization and optimized resource usage.</li>
                      <li>Improved system uptime to 99.95% with proactive monitoring.</li>
                      <li>Onboarded new developers 50% faster due to simplified architecture.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-yellow-500 to-yellow-300" />
            </div>
          </div>
        </section>
        {/* Benefits of Partnering with Octobit8: enhanced card grid */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-3 mb-2">
                <img src="/icons/handshake.svg" alt="Benefits" className="w-10 h-10" />
                <h2 className="text-3xl font-bold text-blue-800 text-center">Benefits of Partnering with Octobit8</h2>
              </div>
              <p className="text-lg text-gray-700 text-center max-w-2xl">Unlock the full potential of your IT operations with our tailored DevOps solutions. Here’s what you gain by working with us:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              {/* Benefit 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
                <img src="/icons/speed.svg" alt="Faster Time-to-Market" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-blue-700 mb-1">Faster Time-to-Market</h3>
                <p className="text-gray-600 text-sm">Deploy updates and features in record time with automated CI/CD pipelines and streamlined workflows.</p>
              </div>
              {/* Benefit 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
                <img src="/icons/team.svg" alt="Enhanced Collaboration" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-blue-700 mb-1">Enhanced Collaboration</h3>
                <p className="text-gray-600 text-sm">Break down silos between development and operations teams for smoother, more productive workflows.</p>
              </div>
              {/* Benefit 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
                <img src="/icons/cost.svg" alt="Cost Optimization" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-blue-700 mb-1">Cost Optimization</h3>
                <p className="text-gray-600 text-sm">Reduce infrastructure costs with scalable cloud and serverless solutions tailored to your needs.</p>
              </div>
              {/* Benefit 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
                <img src="/icons/reliability.svg" alt="Improved Reliability" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-blue-700 mb-1">Improved Reliability</h3>
                <p className="text-gray-600 text-sm">Ensure uptime and performance with robust monitoring, orchestration, and automated recovery tools.</p>
              </div>
              {/* Benefit 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
                <img src="/icons/security.svg" alt="Security First" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-blue-700 mb-1">Security First</h3>
                <p className="text-gray-600 text-sm">Embed security at every stage to protect your applications and data from threats and vulnerabilities.</p>
              </div>
              {/* Benefit 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
                <img src="/icons/customize.svg" alt="Tailored Solutions" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-blue-700 mb-1">Tailored Solutions</h3>
                <p className="text-gray-600 text-sm">Get DevOps strategies customized to your business goals, scale, and industry requirements.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Why Octobit8 Stands Out: enhanced feature grid */}
        <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-3 mb-2">
                <img src="/icons/trophy.svg" alt="Why Octobit8 Stands Out" className="w-10 h-10" />
                <h2 className="text-3xl font-bold text-blue-800 text-center">Why Octobit8 Stands Out</h2>
              </div>
              <p className="text-lg text-gray-700 text-center max-w-2xl">Experience the Octobit8 difference—our unique strengths set us apart as your trusted DevOps partner.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
                <img src="/icons/customize.svg" alt="Customized Solutions" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-blue-700 mb-1">Customized Solutions</h3>
                <p className="text-gray-600 text-sm">Tailored DevOps strategies to match your business goals, scale, and industry requirements.</p>
              </div>
              {/* Feature 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
                <img src="/icons/expert.svg" alt="Expert Team" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-blue-700 mb-1">Expert Team</h3>
                <p className="text-gray-600 text-sm">Certified professionals with deep expertise in DevOps tools, cloud, and best practices.</p>
              </div>
              {/* Feature 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
                <img src="/icons/support.svg" alt="24/7 Support" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-blue-700 mb-1">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Round-the-clock assistance to keep your operations running smoothly and securely.</p>
              </div>
              {/* Feature 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
                <img src="/icons/proven.svg" alt="Proven Success" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-blue-700 mb-1">Proven Success</h3>
                <p className="text-gray-600 text-sm">Trusted by 50+ IT companies to deliver 200+ successful projects worldwide.</p>
              </div>
              {/* Feature 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
                <img src="/icons/innovation.svg" alt="Innovation Driven" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-blue-700 mb-1">Innovation Driven</h3>
                <p className="text-gray-600 text-sm">We leverage the latest DevOps and cloud technologies to drive efficiency and innovation.</p>
              </div>
              {/* Feature 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
                <img src="/icons/partnership.svg" alt="Long-Term Partnership" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-blue-700 mb-1">Long-Term Partnership</h3>
                <p className="text-gray-600 text-sm">We build lasting relationships, supporting your growth at every stage of your digital journey.</p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="w-full py-16 px-4 bg-blue-700 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Get Started Today</h2>
            <p className="text-lg text-white mb-4">Ready to revolutionize your IT operations? Let Octobit8 design a DevOps roadmap that drives efficiency and innovation for your business.</p>
            <div className="mb-4 text-white">
              <div>Email: <a href="mailto:contact@octobit8.com" className="underline">contact@octobit8.com</a></div>
              <div>Phone: <a href="tel:+1800OCTOBIT" className="underline">+1-800-OCTOBIT</a></div>
            </div>
            <a href="/contact" className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-semibold shadow hover:bg-blue-100 transition">Book a Free Consultation</a>
          </div>
        </section>
        {/* Testimonials */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-8">Client Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-10 flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <img src="/icons/avatar1.svg" alt="Avatar" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-700 mb-2">"Octobit8 transformed our release cycle, cutting deployment time by 60%!"</p>
                  <span className="font-bold text-blue-700">– Jane Doe, CTO</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-10 flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <img src="/icons/avatar2.svg" alt="Avatar" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-700 mb-2">"Their expertise in Kubernetes and AWS helped us scale effortlessly."</p>
                  <span className="font-bold text-blue-700">– John Smith, Startup Founder</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer CTA */}
        <section className="w-full py-8 px-4 bg-blue-50 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Power your IT company with DevOps excellence.</h2>
          <p className="text-gray-700 mb-2">Let’s build the future together with Octobit8!</p>
        </section>
      </main>
    </div>
  );
} 