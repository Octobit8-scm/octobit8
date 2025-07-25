/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

const blogs = [
  { title: "Scaling GKE with Custom Metrics", slug: "scaling-gke-custom-metrics", date: "May 31, 2025", excerpt: "Autoscaling GKE using Cloud Monitoring & Pub/Sub Queue Depth.", icon: "/icons/blog-1.svg" },
  { title: "Cloud Spend: What You’re Leaving on the Table", slug: "cloud-spend-leaving-on-table", date: "May 13, 2025", excerpt: "Unlock cashback, extended terms, and 24/7 support with our Managed Cloud offering.", icon: "/icons/blog-2.svg" },
  { title: "AI Isn’t Coming. It’s Already Here", slug: "ai-isnt-coming-already-here", date: "June 3, 2025", excerpt: "Join the Google Cloud GenAI Masterclass and walk away with real AI use cases.", icon: "/icons/blog-3.svg" },
];

export function generateStaticParams() {
  return [
    { slug: "scaling-gke-custom-metrics" },
    { slug: "cloud-spend-leaving-on-table" },
    { slug: "ai-isnt-coming-already-here" }
  ];
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Blog Not Found</h1>
        <p className="text-gray-700 mb-6">Sorry, we couldn&apos;t find the blog post you&apos;re looking for.</p>
        <Link href="/blogs" className="inline-block bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow hover:bg-blue-800 transition">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen py-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-20 md:py-28 overflow-hidden shadow-xl rounded-b-3xl mb-16">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <Image src={blog.icon} alt={blog.title} width={80} height={80} className="w-20 h-20 mb-6 drop-shadow-lg" />
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">{blog.title}</h1>
          <span className="text-xs text-blue-100 font-semibold mb-2">{blog.date}</span>
          <p className="text-lg md:text-xl font-medium text-blue-100 mb-6 max-w-2xl">{blog.excerpt}</p>
        </div>
      </section>
      {/* Blog Content Section */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Full Blog Content</h2>
          {blog.slug === "scaling-gke-custom-metrics" && (
            <>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Scaling GKE with Custom Metrics</h3>
              <p className="text-gray-700 mb-4">Google Kubernetes Engine (GKE) supports autoscaling based on custom metrics, allowing you to scale your workloads beyond CPU and memory. In this guide, we&apos;ll walk through how to autoscale GKE deployments using Cloud Monitoring, Pub/Sub, and custom metrics.</p>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Step 1: Expose Custom Metrics</h4>
              <p className="text-gray-700 mb-2">Instrument your application to export custom metrics (e.g., queue depth, request latency) to Cloud Monitoring using OpenTelemetry or Prometheus exporters.</p>
              <pre className="bg-blue-50 rounded p-4 text-xs overflow-x-auto mb-4">apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: External
    external:
      metric:
        name: pubsub.googleapis.com|subscription|num_undelivered_messages
        selector:
          matchLabels:
            resource.labels.subscription_id: my-subscription
      target:
        type: Value
        value: "1000"
</pre>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Step 2: Create a Pub/Sub Subscription</h4>
              <p className="text-gray-700 mb-2">Set up a Pub/Sub subscription to collect queue depth or other relevant metrics. These metrics will be used to trigger scaling events.</p>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Step 3: Configure HPA with Custom Metrics</h4>
              <p className="text-gray-700 mb-2">Use the Kubernetes HorizontalPodAutoscaler with the External metric type to scale based on your custom metric.</p>
              <p className="text-gray-700 mb-2">Ensure your metric is available in Cloud Monitoring and accessible by GKE.</p>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Tips & Best Practices</h4>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Test your metric pipeline to ensure timely updates.</li>
                <li>Set reasonable min/max replica counts to avoid over-scaling.</li>
                <li>Monitor scaling events in Cloud Monitoring for troubleshooting.</li>
              </ul>
              <p className="text-gray-700">With custom metrics, you can autoscale GKE workloads based on business KPIs, queue depth, or any metric that matters to your application.</p>
            </>
          )}
          {blog.slug === "cloud-spend-leaving-on-table" && (
            <>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Cloud Spend: What You’re Leaving on the Table</h3>
              <p className="text-gray-700 mb-4">Cloud cost optimization is more than just shutting down unused VMs. Many organizations miss out on cashback, extended payment terms, and managed support that can save thousands each year.</p>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Unlock Cashback & Credits</h4>
              <p className="text-gray-700 mb-2">Work with a managed cloud provider to access cashback programs and promotional credits from AWS, Azure, or GCP. These can offset a significant portion of your monthly bill.</p>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Negotiate Extended Terms</h4>
              <p className="text-gray-700 mb-2">Don&apos;t settle for default payment terms. Ask your provider about extended terms, reserved instances, or committed use discounts for predictable workloads.</p>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Leverage Managed Support</h4>
              <p className="text-gray-700 mb-2">24/7 managed support can help you resolve incidents faster, optimize resources, and avoid costly downtime. Look for providers that include proactive monitoring and cost reviews.</p>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Actionable Tips</h4>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Review your cloud bill monthly for unused resources.</li>
                <li>Use cost explorer tools to identify savings opportunities.</li>
                <li>Consolidate accounts for volume discounts.</li>
                <li>Automate shutdown of non-production environments.</li>
              </ul>
              <p className="text-gray-700">Partnering with a managed cloud provider can unlock hidden savings and ensure you&apos;re getting the most value from your cloud investment.</p>
            </>
          )}
          {blog.slug === "ai-isnt-coming-already-here" && (
            <>
              <h3 className="text-xl font-bold text-blue-700 mb-2">AI Isn&apos;t Coming. It&apos;s Already Here</h3>
              <p className="text-gray-700 mb-4">Generative AI (GenAI) is transforming industries, from content creation to customer support. Here&apos;s what you need to know about the GenAI revolution and how to get started.</p>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">What is GenAI?</h4>
              <p className="text-gray-700 mb-2">GenAI refers to AI models that can generate text, images, code, and more. Tools like Google Cloud GenAI, OpenAI GPT, and others are making it easy to build intelligent applications.</p>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Real-World Use Cases</h4>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Automated content generation for marketing and blogs</li>
                <li>AI-powered chatbots for customer support</li>
                <li>Code generation and software development acceleration</li>
                <li>Personalized recommendations and search</li>
              </ul>
              <h4 className="font-semibold text-blue-700 mt-4 mb-2">Join the Google Cloud GenAI Masterclass</h4>
              <p className="text-gray-700 mb-2">Our upcoming masterclass will walk you through building GenAI solutions on Google Cloud, with hands-on labs and real-world examples. You&apos;ll leave with practical skills and a roadmap for AI adoption.</p>
              <p className="text-gray-700">AI isn&apos;t the future—it&apos;s the present. Start your GenAI journey today and unlock new possibilities for your business.</p>
            </>
          )}
          <Link href="/blogs" className="inline-block bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow hover:bg-blue-800 transition mt-8">Back to Blogs</Link>
        </div>
      </section>
    </div>
  );
} 