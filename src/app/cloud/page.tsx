"use client";

const cloudSolutions = [
  {
    title: "AWS Infrastructure for Healthcare Data Platform",
    icon: "/icons/aws.svg",
    description: "Design and deploy HIPAA-compliant AWS infrastructure for secure, scalable healthcare data platforms."
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
  },
  {
    title: "Database Migration",
    icon: "/icons/database.svg",
    description: "Seamlessly migrate databases to the cloud or between platforms with zero downtime and data integrity."
  },
  {
    title: "Cloud-Native Applications",
    icon: "/icons/cloud-native.svg",
    description: "Build and run scalable, resilient applications using containers, microservices, and serverless architectures."
  },
  {
    title: "Cloud Monitoring & Optimization",
    icon: "/icons/monitoring.svg",
    description: "Gain real-time visibility and optimize performance with advanced cloud monitoring and analytics."
  }
];

export default function CloudPage() {
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
            <span className="inline-block bg-white/20 text-blue-100 font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 border border-blue-200 animate-pulse">Cloud Solutions</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">Empower Your Business with <span className="text-yellow-300">Cloud Excellence</span></h1>
            <p className="text-lg md:text-xl font-medium text-blue-100 mb-6 max-w-2xl">Unlock the full potential of the cloud with our end-to-end solutions for every stage of your journey.</p>
          </div>
          <a href="#contact" className="inline-block bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition text-lg glow-effect animate-bounce">Book a Consultation</a>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-24 md:h-32 opacity-30" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </section>
      {/* SECTION DIVIDER */}
      <div className="w-full flex justify-center mb-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>
      {/* Add Core Cloud Services section after the hero and before use cases */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-2">
              <img src="/icons/cloud.svg" alt="Cloud" className="w-10 h-10" />
              <h2 className="text-3xl font-bold text-blue-800 text-center">Core Cloud Services</h2>
            </div>
            <p className="text-lg text-gray-700 text-center max-w-2xl">Octobit8 delivers a full spectrum of cloud services to help you modernize, secure, and scale your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-2">
            {/* Service 1: Cloud Infrastructure & Migration */}
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-blue-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-blue-600 to-blue-400 p-8 md:p-10">
                <img src="/icons/aws-migration.svg" alt="Cloud Migration" className="w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold text-lg tracking-wide">Cloud Migration</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Cloud Infrastructure & Migration</h3>
                <p className="text-gray-700 mb-4">Seamlessly migrate workloads to AWS, Azure, or GCP. Modernize your infrastructure for agility, cost savings, and performance.</p>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Key Tools:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>AWS Migration Hub, Azure Migrate, Google Migrate</li>
                  <li>CloudEndure, Velostrata, native migration services</li>
                  <li>Terraform, CloudFormation for IaC</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Best Practices:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>Assessment and right-sizing before migration</li>
                  <li>Phased migration (lift-and-shift, replatform, refactor)</li>
                  <li>Automated testing and rollback plans</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Implementation Highlights:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>Zero-downtime cutovers</li>
                  <li>Hybrid and multi-cloud integration</li>
                  <li>Automated post-migration validation</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Advanced Features:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                  <li>Cloud cost optimization and tagging</li>
                  <li>Automated compliance checks</li>
                  <li>Disaster recovery and backup automation</li>
                </ul>
              </div>
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-500 to-blue-300" />
            </div>
            {/* Service 2: Cloud Security & Compliance */}
            <div className="relative group flex flex-col items-stretch bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-xl border-r-8 border-indigo-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-indigo-600 to-indigo-400 p-8 md:p-10">
                <img src="/icons/cloud-security.svg" alt="Cloud Security" className="w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold text-lg tracking-wide">Cloud Security</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Cloud Security & Compliance</h3>
                <p className="text-gray-700 mb-4">Protect your cloud workloads with advanced security controls, monitoring, and compliance automation.</p>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Key Tools:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>AWS Security Hub, Azure Security Center, GCP Security Command Center</li>
                  <li>Cloud-native firewalls, IAM, KMS, WAF</li>
                  <li>SIEM tools: Splunk, ELK, Cloud-native SIEM</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Best Practices:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>Zero-trust security model</li>
                  <li>Continuous compliance monitoring</li>
                  <li>Automated vulnerability scanning</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Implementation Highlights:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>Automated security policy enforcement</li>
                  <li>Real-time threat detection and alerting</li>
                  <li>Role-based access control (RBAC)</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Advanced Features:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                  <li>Policy as code for security (OPA, Sentinel)</li>
                  <li>Automated incident response</li>
                  <li>Compliance reporting (GDPR, HIPAA, PCI-DSS)</li>
                </ul>
              </div>
              <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-indigo-500 to-indigo-300" />
            </div>
            {/* Service 3: Cloud-Native Application Development */}
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-green-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-green-600 to-green-400 p-8 md:p-10">
                <img src="/icons/cloud-native.svg" alt="Cloud-Native Apps" className="w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold text-lg tracking-wide">Cloud-Native Apps</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Cloud-Native Application Development</h3>
                <p className="text-gray-700 mb-4">Build and run scalable, resilient applications using containers, microservices, and serverless architectures.</p>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Key Tools:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>Docker, Kubernetes, AWS ECS, Azure AKS, GKE</li>
                  <li>Serverless: AWS Lambda, Azure Functions, Google Cloud Functions</li>
                  <li>API Gateway, EventBridge, Pub/Sub</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Best Practices:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>Microservices and event-driven design</li>
                  <li>CI/CD for cloud-native apps</li>
                  <li>Observability and distributed tracing</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Implementation Highlights:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>Automated container builds and deployments</li>
                  <li>Service mesh for traffic management</li>
                  <li>Blue/green and canary deployments</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Advanced Features:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                  <li>Autoscaling and self-healing</li>
                  <li>API monetization and management</li>
                  <li>Edge computing and global delivery</li>
                </ul>
              </div>
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-green-500 to-green-300" />
            </div>
            {/* Service 4: Cloud Data & Analytics */}
            <div className="relative group flex flex-col items-stretch bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-xl border-r-8 border-cyan-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-cyan-600 to-cyan-400 p-8 md:p-10">
                <img src="/icons/data-lake.svg" alt="Cloud Data & Analytics" className="w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold text-lg tracking-wide">Cloud Data</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Cloud Data & Analytics</h3>
                <p className="text-gray-700 mb-4">Centralize, process, and analyze data at scale with cloud-native data lakes, warehouses, and analytics tools.</p>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Key Tools:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>AWS Lake Formation, Azure Data Lake, Google BigQuery</li>
                  <li>ETL: AWS Glue, Azure Data Factory, Dataflow</li>
                  <li>Visualization: QuickSight, Power BI, Data Studio</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Best Practices:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>Data governance and access control</li>
                  <li>Automated ETL and data quality checks</li>
                  <li>Real-time and batch analytics</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Implementation Highlights:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>Data lake and warehouse integration</li>
                  <li>Streaming analytics pipelines</li>
                  <li>Custom dashboards for business insights</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Advanced Features:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                  <li>ML-powered analytics and predictions</li>
                  <li>Data sharing and monetization</li>
                  <li>Automated compliance and retention</li>
                </ul>
              </div>
              <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-cyan-500 to-cyan-300" />
            </div>
            {/* Service 5: Cloud Monitoring & Optimization */}
            <div className="relative group flex flex-col items-stretch bg-white rounded-2xl shadow-xl border-l-8 border-pink-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-pink-600 to-pink-400 p-8 md:p-10">
                <img src="/icons/monitoring.svg" alt="Cloud Monitoring" className="w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold text-lg tracking-wide">Monitoring</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Cloud Monitoring & Optimization</h3>
                <p className="text-gray-700 mb-4">Gain real-time visibility, optimize performance, and ensure reliability with advanced cloud monitoring and analytics.</p>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Key Tools:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>CloudWatch, Azure Monitor, Google Operations Suite</li>
                  <li>Prometheus, Grafana, ELK Stack</li>
                  <li>Cost Explorer, CloudHealth for optimization</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Best Practices:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>Centralized logging and metrics</li>
                  <li>Automated alerting and incident response</li>
                  <li>Continuous cost and performance optimization</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Implementation Highlights:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>Custom dashboards and SLO/SLA tracking</li>
                  <li>Self-healing automation</li>
                  <li>Integration with ITSM tools</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Advanced Features:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                  <li>AI-driven anomaly detection</li>
                  <li>Predictive scaling and optimization</li>
                  <li>Automated compliance and reporting</li>
                </ul>
              </div>
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-pink-500 to-pink-300" />
            </div>
            {/* Service 6: Cloud AI & ML Services */}
            <div className="relative group flex flex-col items-stretch bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-xl border-r-8 border-purple-500 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-col items-center justify-center min-w-[120px] bg-gradient-to-b from-purple-600 to-purple-400 p-8 md:p-10">
                <img src="/icons/ai.svg" alt="Cloud AI & ML" className="w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold text-lg tracking-wide">Cloud AI/ML</span>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Cloud AI & ML Services</h3>
                <p className="text-gray-700 mb-4">Leverage cloud-native AI/ML platforms for intelligent automation, analytics, and personalized experiences.</p>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Key Tools:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>AWS SageMaker, Azure ML, Google Vertex AI</li>
                  <li>Pre-trained APIs: Vision, Speech, NLP</li>
                  <li>Custom model training and deployment</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Best Practices:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>Data privacy and governance</li>
                  <li>Continuous model monitoring and retraining</li>
                  <li>Integration with business workflows</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Implementation Highlights:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-2">
                  <li>End-to-end ML pipelines</li>
                  <li>Real-time inference and batch scoring</li>
                  <li>Automated model deployment</li>
                </ul>
                <h4 className="text-lg font-semibold text-blue-700 mt-4">Advanced Features:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                  <li>AutoML and hyperparameter tuning</li>
                  <li>Explainable AI and bias detection</li>
                  <li>ML Ops for lifecycle management</li>
                </ul>
              </div>
              <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-purple-500 to-purple-300" />
            </div>
          </div>
        </div>
      </section>
      {/* SECTION DIVIDER */}
      <div className="w-full flex justify-center mb-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>
      {/* Cloud Solutions Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <img src="/icons/cloud.svg" alt="Cloud" className="w-10 h-10" />
            <h2 className="text-3xl font-bold text-blue-800 text-center">Cloud Use Cases</h2>
          </div>
          <p className="text-lg text-gray-700 text-center max-w-2xl">Explore real-world cloud solutions delivered by Octobit8 for modern businesses.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8">
          {/* Use Case 1 */}
          <div className="bg-white rounded-2xl shadow-xl border-l-8 border-blue-400 p-8 flex flex-col hover:shadow-2xl transition group">
            <img src="/icons/notification.svg" alt="Centralized Alarm and Notification" className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-blue-700 mb-2">Architecture Design and Implementation of Centralized Alarm and Notification System</h3>
            <p className="text-gray-700 mb-2"><b>Use Case:</b> A website or application requires a centralized system to deliver real-time alerts (e.g., system health, user notifications) across multiple services and user interfaces.</p>
            <p className="text-gray-700 mb-2"><b>Solution:</b> Octobit8 designs a cloud-based centralized alarm and notification system for seamless communication.</p>
            <h4 className="text-blue-700 font-semibold mt-2 mb-1">Implementation:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              <li>Use AWS SNS/SQS or Azure Event Grid for message brokering and delivery.</li>
              <li>Deploy serverless functions (AWS Lambda, Azure Functions) to process and route alerts.</li>
              <li>Integrate with Amazon DynamoDB or Azure Cosmos DB to store notification logs and user preferences.</li>
            </ul>
            <h4 className="text-blue-700 font-semibold mt-2 mb-1">Benefits:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              <li>Ensures real-time delivery of critical alerts.</li>
              <li>Scales to handle high notification volumes.</li>
              <li>Provides reliable logging for audit and compliance.</li>
            </ul>
            <p className="text-blue-600 font-semibold mt-2">Octobit8 Expertise: Specializes in designing scalable, serverless architectures for real-time systems.</p>
          </div>
          {/* Use Case 2 */}
          <div className="bg-white rounded-2xl shadow-xl border-l-8 border-green-400 p-8 flex flex-col hover:shadow-2xl transition group">
            <img src="/icons/iot.svg" alt="EV Charging Station Management" className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-green-700 mb-2">Infrastructure Development for Electric Vehicle Charging Station Management Software</h3>
            <p className="text-gray-700 mb-2"><b>Use Case:</b> A platform managing EV charging stations needs robust infrastructure to monitor, control, and display real-time station data.</p>
            <p className="text-gray-700 mb-2"><b>Solution:</b> Octobit8 builds a cloud-based infrastructure to support EV charging station management.</p>
            <h4 className="text-green-700 font-semibold mt-2 mb-1">Implementation:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              <li>Deploy IoT-enabled infrastructure using AWS IoT Core or Azure IoT Hub.</li>
              <li>Use AWS ECS or Azure AKS to process IoT data and update website content.</li>
              <li>Integrate with a CMS or API to display station status and booking options.</li>
            </ul>
            <h4 className="text-green-700 font-semibold mt-2 mb-1">Benefits:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              <li>Provides real-time updates for users.</li>
              <li>Enhances scalability for a growing network.</li>
              <li>Ensures high availability for critical infrastructure.</li>
            </ul>
            <p className="text-green-600 font-semibold mt-2">Octobit8 Expertise: Offers IoT integration and scalable cloud infrastructure development.</p>
          </div>
          {/* Use Case 3 */}
          <div className="bg-white rounded-2xl shadow-xl border-l-8 border-purple-400 p-8 flex flex-col hover:shadow-2xl transition group">
            <img src="/icons/ai.svg" alt="AI-ML Email Responder" className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-purple-700 mb-2">Architecture Design and Implementation of AI-ML Based Intelligent Email Responder</h3>
            <p className="text-gray-700 mb-2"><b>Use Case:</b> A customer support website needs an AI-driven email responder to handle inquiries with personalized, context-aware replies.</p>
            <p className="text-gray-700 mb-2"><b>Solution:</b> Octobit8 develops an AI/ML-based intelligent email responder integrated with the website’s support system.</p>
            <h4 className="text-purple-700 font-semibold mt-2 mb-1">Implementation:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              <li>Train NLP models using AWS SageMaker, Azure ML, or Google Vertex AI.</li>
              <li>Deploy serverless functions to trigger responses or route queries.</li>
              <li>Integrate with backend to log interactions and display statuses.</li>
            </ul>
            <h4 className="text-purple-700 font-semibold mt-2 mb-1">Benefits:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              <li>Reduces response time for inquiries.</li>
              <li>Improves user experience with personalized replies.</li>
              <li>Scales to handle increasing email volumes.</li>
            </ul>
            <p className="text-purple-600 font-semibold mt-2">Octobit8 Expertise: Specializes in AI/ML model development and serverless integration for automation.</p>
          </div>
          {/* Use Case 4 */}
          <div className="bg-white rounded-2xl shadow-xl border-l-8 border-cyan-400 p-8 flex flex-col hover:shadow-2xl transition group">
            <img src="/icons/api.svg" alt="Multi-Region API Gateway" className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-cyan-700 mb-2">Multi-Region API Gateway with CloudFront</h3>
            <p className="text-gray-700 mb-2"><b>Use Case:</b> A global e-commerce website requires a low-latency, secure API to manage content and transactions across multiple regions.</p>
            <p className="text-gray-700 mb-2"><b>Solution:</b> Octobit8 implements a multi-region API gateway with Amazon CloudFront for optimized content delivery.</p>
            <h4 className="text-cyan-700 font-semibold mt-2 mb-1">Implementation:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              <li>Deploy AWS API Gateway or Azure API Management with multi-region configs.</li>
              <li>Integrate CloudFront as a CDN to cache API responses and content.</li>
              <li>Use AWS Route 53 or Azure Traffic Manager for latency-based routing.</li>
            </ul>
            <h4 className="text-cyan-700 font-semibold mt-2 mb-1">Benefits:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              <li>Reduces API and content delivery latency.</li>
              <li>Enhances security with DDoS protection and IAM policies.</li>
              <li>Scales to support high-traffic scenarios.</li>
            </ul>
            <p className="text-cyan-600 font-semibold mt-2">Octobit8 Expertise: Provides expertise in multi-region cloud architectures and CDN integration.</p>
          </div>
          {/* Use Case 5 */}
          <div className="bg-white rounded-2xl shadow-xl border-l-8 border-orange-400 p-8 flex flex-col hover:shadow-2xl transition group">
            <img src="/icons/data-lake.svg" alt="Transportation and Logistics Data Lake" className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-orange-700 mb-2">Transportation and Logistics Data Lake</h3>
            <p className="text-gray-700 mb-2"><b>Use Case:</b> A logistics company’s website needs to display insights from transportation data to customers and stakeholders.</p>
            <p className="text-gray-700 mb-2"><b>Solution:</b> Octobit8 builds a cloud-based data lake to centralize and analyze transportation data.</p>
            <h4 className="text-orange-700 font-semibold mt-2 mb-1">Implementation:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              <li>Create a data lake using AWS Lake Formation, Azure Data Lake Storage, or Google Cloud Storage.</li>
              <li>Use ETL pipelines (AWS Glue, Azure Data Factory) to process data and feed insights.</li>
              <li>Develop dashboards with Amazon QuickSight or Google Data Studio.</li>
            </ul>
            <h4 className="text-orange-700 font-semibold mt-2 mb-1">Benefits:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              <li>Enables data-driven content updates for customers.</li>
              <li>Supports advanced analytics for optimization.</li>
              <li>Scales to handle large volumes of logistics data.</li>
            </ul>
            <p className="text-orange-600 font-semibold mt-2">Octobit8 Expertise: Specializes in building scalable data lakes and analytics pipelines.</p>
          </div>
          {/* Use Case 6 */}
          <div className="bg-white rounded-2xl shadow-xl border-l-8 border-pink-400 p-8 flex flex-col hover:shadow-2xl transition group">
            <img src="/icons/analytics.svg" alt="Real-Time Player Casino Analytics" className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-pink-700 mb-2">Real-Time Player Casino Analytics</h3>
            <p className="text-gray-700 mb-2"><b>Use Case:</b> An online casino website requires real-time analytics to track player behavior and display personalized promotions.</p>
            <p className="text-gray-700 mb-2"><b>Solution:</b> Octobit8 develops a cloud-based real-time analytics system for player data.</p>
            <h4 className="text-pink-700 font-semibold mt-2 mb-1">Implementation:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              <li>Use streaming data services like AWS Kinesis, Azure Stream Analytics, or Google Dataflow.</li>
              <li>Deploy ML models to analyze behavior and trigger dynamic content updates.</li>
              <li>Integrate with CMS to display analytics-driven content securely.</li>
            </ul>
            <h4 className="text-pink-700 font-semibold mt-2 mb-1">Benefits:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              <li>Enhances user engagement with personalized offers.</li>
              <li>Provides actionable insights for operators.</li>
              <li>Ensures low-latency data processing for high-traffic platforms.</li>
            </ul>
            <p className="text-pink-600 font-semibold mt-2">Octobit8 Expertise: Offers real-time data processing and AI-driven analytics solutions.</p>
          </div>
          {/* Use Case 7 */}
          <div className="bg-white rounded-2xl shadow-xl border-l-8 border-yellow-400 p-8 flex flex-col hover:shadow-2xl transition group">
            <img src="/icons/pricing.svg" alt="Serverless Strategy Infrastructure for Dynamic Pricing" className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-yellow-700 mb-2">Serverless Strategy Infrastructure for Dynamic Pricing</h3>
            <p className="text-gray-700 mb-2"><b>Use Case:</b> An e-commerce website needs a dynamic pricing system to adjust product prices based on demand, competition, and user behavior.</p>
            <p className="text-gray-700 mb-2"><b>Solution:</b> Octobit8 implements a serverless infrastructure for real-time dynamic pricing.</p>
            <h4 className="text-yellow-700 font-semibold mt-2 mb-1">Implementation:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              <li>Use serverless computing (AWS Lambda, Azure Functions) to run pricing algorithms.</li>
              <li>Store pricing rules and data in Amazon DynamoDB or Azure Cosmos DB.</li>
              <li>Integrate with frontend to reflect updated prices instantly.</li>
            </ul>
            <h4 className="text-yellow-700 font-semibold mt-2 mb-1">Benefits:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              <li>Enables real-time price adjustments to maximize revenue.</li>
              <li>Reduces infrastructure costs with serverless architecture.</li>
              <li>Scales seamlessly during peak traffic.</li>
            </ul>
            <p className="text-yellow-600 font-semibold mt-2">Octobit8 Expertise: Specializes in serverless architectures and real-time data processing.</p>
          </div>
        </div>
      </section>
      {/* SECTION DIVIDER */}
      <div className="w-full flex justify-center my-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-2">
              <img src="/icons/handshake.svg" alt="Benefits" className="w-10 h-10" />
              <h2 className="text-3xl font-bold text-blue-800 text-center">Benefits of Our Cloud Solutions</h2>
            </div>
            <p className="text-lg text-gray-700 text-center max-w-2xl">Experience the advantages of cloud transformation with Octobit8 as your partner.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
              <img src="/icons/speed.svg" alt="Agility & Speed" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Agility & Speed</h3>
              <p className="text-gray-600 text-sm">Rapidly deploy, scale, and update applications to meet changing business needs.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
              <img src="/icons/cost.svg" alt="Cost Efficiency" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Cost Efficiency</h3>
              <p className="text-gray-600 text-sm">Optimize cloud spend with pay-as-you-go models and automated resource management.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
              <img src="/icons/security.svg" alt="Enterprise Security" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Enterprise Security</h3>
              <p className="text-gray-600 text-sm">Protect your data and workloads with advanced cloud-native security controls.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
              <img src="/icons/scale.svg" alt="Scalability" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Scalability</h3>
              <p className="text-gray-600 text-sm">Effortlessly scale resources up or down to match demand and growth.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
              <img src="/icons/innovation.svg" alt="Innovation" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Innovation</h3>
              <p className="text-gray-600 text-sm">Leverage the latest cloud technologies to drive business innovation and differentiation.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
              <img src="/icons/support.svg" alt="Expert Support" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Expert Support</h3>
              <p className="text-gray-600 text-sm">Access certified cloud experts for guidance, troubleshooting, and optimization.</p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION DIVIDER */}
      <div className="w-full flex justify-center my-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-2">
              <img src="/icons/trophy.svg" alt="Why Choose Octobit8" className="w-10 h-10" />
              <h2 className="text-3xl font-bold text-blue-800 text-center">Why Choose Octobit8 for Cloud</h2>
            </div>
            <p className="text-lg text-gray-700 text-center max-w-2xl">Our expertise, innovation, and commitment to your success make us the ideal cloud partner.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
              <img src="/icons/customize.svg" alt="Tailored Cloud Strategies" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Tailored Cloud Strategies</h3>
              <p className="text-gray-600 text-sm">Solutions designed for your unique business needs, industry, and growth goals.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
              <img src="/icons/expert.svg" alt="Certified Cloud Experts" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Certified Cloud Experts</h3>
              <p className="text-gray-600 text-sm">A team of AWS, Azure, and GCP certified professionals with deep technical know-how.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
              <img src="/icons/support.svg" alt="24/7 Support" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-blue-700 mb-1">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Always-on support to keep your cloud workloads running smoothly and securely.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
              <img src="/icons/proven.svg" alt="Proven Cloud Success" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Proven Cloud Success</h3>
              <p className="text-gray-600 text-sm">Hundreds of successful cloud projects delivered for clients worldwide.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
              <img src="/icons/innovation.svg" alt="Innovation Focused" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Innovation Focused</h3>
              <p className="text-gray-600 text-sm">We leverage the latest cloud technologies to drive efficiency and innovation.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group">
              <img src="/icons/partnership.svg" alt="Long-Term Partnership" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Long-Term Partnership</h3>
              <p className="text-gray-600 text-sm">We build lasting relationships, supporting your growth at every stage of your cloud journey.</p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION DIVIDER */}
      <div className="w-full flex justify-center my-12"><div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full animate-pulse"></div></div>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 flex justify-center items-center">
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white rounded-2xl shadow-xl p-10 max-w-xl w-full flex flex-col items-center">
          <img src="/icons/cloud-contact.svg" alt="Contact" className="w-16 h-16 mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-center">Ready to Modernize Your Cloud?</h2>
          <p className="text-blue-100 mb-6 text-center">Contact us to discuss your cloud needs or request a custom solution.</p>
          <a href="/contact" className="inline-block bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition text-lg glow-effect">Contact Us</a>
        </div>
      </section>
    </div>
  );
} 