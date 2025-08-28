import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps & Cloud Services | Octobit8",
  description: "Accelerate your software delivery with our comprehensive DevOps and cloud solutions including CI/CD, infrastructure automation, and cloud migration.",
};

export default function DevOpsCloudPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            DevOps & Cloud
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Streamline your development workflow, automate deployments, and scale your infrastructure with modern DevOps practices and cloud technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our DevOps & Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end DevOps solutions designed to accelerate development, improve quality, and reduce operational overhead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CI/CD Pipeline */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CI/CD Pipeline</h3>
              <p className="text-gray-600 mb-4">
                Automate your software delivery process from code commit to production deployment.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Automated testing & quality gates</li>
                <li>• Multi-environment deployments</li>
                <li>• Rollback capabilities</li>
                <li>• Deployment monitoring</li>
              </ul>
            </div>

            {/* Infrastructure as Code */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Infrastructure as Code</h3>
              <p className="text-gray-600 mb-4">
                Manage your infrastructure using code and version control for consistency and reproducibility.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Terraform & CloudFormation</li>
                <li>• Ansible & Chef automation</li>
                <li>• Environment provisioning</li>
                <li>• Configuration management</li>
              </ul>
            </div>

            {/* Cloud Migration */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly migrate your applications and infrastructure to the cloud with minimal disruption.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Lift & shift strategies</li>
                <li>• Application modernization</li>
                <li>• Data migration</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            {/* Monitoring & Observability */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Monitoring & Observability</h3>
              <p className="text-gray-600 mb-4">
                Gain complete visibility into your applications and infrastructure performance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Application performance monitoring</li>
                <li>• Infrastructure monitoring</li>
                <li>• Log aggregation & analysis</li>
                <li>• Alerting & incident response</li>
              </ul>
            </div>

            {/* Container Orchestration */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Container Orchestration</h3>
              <p className="text-gray-600 mb-4">
                Manage and scale your containerized applications with Kubernetes and Docker.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Kubernetes deployment</li>
                <li>• Docker containerization</li>
                <li>• Service mesh implementation</li>
                <li>• Auto-scaling & load balancing</li>
              </ul>
            </div>

            {/* Security & Compliance */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Implement security best practices and ensure compliance across your DevOps pipeline.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Security scanning & testing</li>
                <li>• Compliance automation</li>
                <li>• Access control & IAM</li>
                <li>• Vulnerability management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Platforms We Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with all major cloud providers to give you flexibility and choice in your cloud strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm0-5H1v2h3v-2zm5 5h2v3h-2v-3zm0-5h2v3h-2v-3zm5 5h2v3h-2v-3zm0-5h2v3h-2v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AWS</h3>
              <p className="text-gray-600 mb-4">Amazon Web Services</p>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>• EC2, Lambda, S3</li>
                <li>• ECS, EKS, RDS</li>
                <li>• CloudFormation</li>
                <li>• CloudWatch</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Azure</h3>
              <p className="text-gray-600 mb-4">Microsoft Azure</p>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>• Virtual Machines</li>
                <li>• App Service, Functions</li>
                <li>• AKS, Container Registry</li>
                <li>• Monitor, Log Analytics</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">GCP</h3>
              <p className="text-gray-600 mb-4">Google Cloud Platform</p>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>• Compute Engine</li>
                <li>• Cloud Functions</li>
                <li>• GKE, Cloud Run</li>
                <li>• Stackdriver</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DevOps Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading tools and technologies to build robust, scalable DevOps solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">CI/CD</h3>
              <p className="text-sm text-gray-600">Jenkins, GitLab CI, GitHub Actions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Containers</h3>
              <p className="text-sm text-gray-600">Docker, Kubernetes, Helm</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-sm text-gray-600">Prometheus, Grafana, ELK Stack</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Automation</h3>
              <p className="text-sm text-gray-600">Ansible, Terraform, Chef</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of DevOps & Cloud
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your development and operations with modern DevOps practices and cloud technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">10x</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Faster Deployment</h3>
              <p className="text-blue-200">Deploy code changes in minutes, not days</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">99.9%</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Higher Availability</h3>
              <p className="text-blue-200">Achieve enterprise-grade reliability</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">50%</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cost Reduction</h3>
              <p className="text-blue-200">Optimize infrastructure costs</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Continuous Operations</h3>
              <p className="text-blue-200">Zero-downtime deployments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let's discuss how our DevOps and cloud services can accelerate your development, improve quality, and reduce operational costs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download DevOps Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
