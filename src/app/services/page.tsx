import Link from "next/link";

const services = [
  { title: "Website Development", slug: "website-development", description: "Modern, responsive websites for your business." },
  { title: "Data Analytics", slug: "data-analytics", description: "Unlock insights from your data with advanced analytics." },
  { title: "AI Development", slug: "ai-development", description: "Custom AI solutions to automate and innovate." },
  { title: "IT Staffing", slug: "it-staffing", description: "Flexible IT staffing solutions for your projects." },
  { title: "Mobile App Development", slug: "mobile-app-development", description: "iOS and Android apps tailored to your needs." },
  { title: "Custom Software Development", slug: "custom-software-development", description: "Bespoke software for unique business challenges." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-800">Our Services</h1>
        <p className="text-lg text-gray-700">Explore our full range of IT and digital services designed to accelerate your business growth.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`}
            className="block bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition group border-l-8 border-blue-500 hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-blue-700 mb-2 group-hover:text-blue-900">{service.title}</h2>
            <p className="text-gray-600 mb-2">{service.description}</p>
            <span className="text-blue-500 font-semibold group-hover:underline">Learn More →</span>
          </Link>
        ))}
      </div>
    </div>
  );
} 