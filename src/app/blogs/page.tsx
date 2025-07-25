"use client";

import Image from "next/image";

const blogs = [
  { title: "Scaling GKE with Custom Metrics", slug: "scaling-gke-custom-metrics", date: "May 31, 2025", excerpt: "Autoscaling GKE using Cloud Monitoring & Pub/Sub Queue Depth." },
  { title: "Cloud Spend: What You’re Leaving on the Table", slug: "cloud-spend-leaving-on-table", date: "May 13, 2025", excerpt: "Unlock cashback, extended terms, and 24/7 support with our Managed Cloud offering." },
  { title: "AI Isn’t Coming. It’s Already Here", slug: "ai-isnt-coming-already-here", date: "June 3, 2025", excerpt: "Join the Google Cloud GenAI Masterclass and walk away with real AI use cases." },
];

export default function BlogsPage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen py-0">
      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Blogs</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">Explore our latest insights, news, and articles on DevOps, Cloud, and technology innovation.</p>
      </section>
      {/* Blog Cards */}
      <section className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Latest Blogs</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((b, i) => (
            <div key={b.title} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start transition-transform hover:scale-105">
              <div className="mb-3 glow-effect transition-transform hover:scale-110">
                <Image src={`/icons/blog-${i+1}.svg`} alt={`Blog ${i+1} Icon`} width={40} height={40} />
              </div>
              <span className="text-xs text-blue-700 font-semibold mb-2">{b.date}</span>
              <h3 className="text-lg font-bold text-blue-800 mb-2 tracking-tight">{b.title}</h3>
              <p className="text-gray-700 mb-4">{b.excerpt}</p>
              <a href={`/blogs/${b.slug}`} className="mt-auto text-blue-700 font-semibold hover:underline">Read More →</a>
            </div>
          ))}
        </div>
      </section>
      {/* Call to Action */}
      <section className="container mx-auto py-12 px-4 text-center">
        <a href="/contact" className="inline-block bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow hover:bg-blue-800 transition">Subscribe for Updates</a>
      </section>
    </main>
  );
} 