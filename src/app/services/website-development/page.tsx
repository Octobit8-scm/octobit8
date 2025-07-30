import Image from "next/image";
import Link from "next/link";

export default function WebsiteDevelopmentPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Professional Website Development</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Transform Your Vision Into a <span className="text-blue-700">Powerful Digital Presence</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Whether you&apos;re a startup, small business, or enterprise, we craft tailored websites that drive engagement, conversions, and growth.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">Start Your Project</Link>
        </div>
      </section>

      {/* Why Choose Our Website Development Services */}
      <section className="max-w-4xl mx-auto mb-16 px-4 relative">
        <div className="bg-white rounded-2xl shadow-lg p-10 border-l-8 border-blue-500 flex flex-col items-center relative z-10">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-6 flex items-center gap-2"><Image src="/icons/star.svg" alt="Star" width={28} height={28} />Why Choose Our Website Development Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Custom Solutions</h3>
                  <p className="text-gray-700 text-sm">We build websites tailored to your brand, goals, and audience, ensuring a unique and impactful online presence.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Cutting-Edge Technology</h3>
                  <p className="text-gray-700 text-sm">Leveraging modern frameworks and tools like React, Node.js, WordPress, and more to deliver fast, secure, and scalable websites.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Responsive Design</h3>
                  <p className="text-gray-700 text-sm">Every website is optimized for seamless performance across desktops, tablets, and mobile devices.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">SEO Optimization</h3>
                  <p className="text-gray-700 text-sm">Built-in best practices to boost your site&apos;s visibility on search engines, driving organic traffic.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-blue-700">Ongoing Support</h3>
                  <p className="text-gray-700 text-sm">From launch to maintenance, we provide continuous support to keep your website performing at its best.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Model of Working with Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Model of Working with Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We follow a collaborative and transparent approach to ensure your project is a success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Discovery Phase</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Initial Consultation</li>
                <li>• Requirement Analysis</li>
                <li>• Competitor Analysis</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Proposal & Agreement</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Detailed Proposal</li>
                <li>• Transparent Pricing</li>
                <li>• Contract Signing</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-yellow-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Project Execution</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Dedicated Team</li>
                <li>• Regular Updates</li>
                <li>• Client Feedback</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Post-Launch Support</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Training</li>
                <li>• Maintenance Plans</li>
                <li>• Analytics Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our streamlined process ensures efficiency, quality, and timely delivery.</p>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Planning & Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Define Project Goals</h4>
                  <p className="text-gray-700 text-sm">Define project goals, user personas, and key performance indicators (KPIs).</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Create Sitemap & Wireframes</h4>
                  <p className="text-gray-700 text-sm">Create a sitemap and wireframes to outline the website&apos;s structure and layout.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Visual Mockups</h4>
                  <p className="text-gray-700 text-sm">Develop visually appealing mockups using tools like Figma or Adobe XD.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Brand Integration</h4>
                  <p className="text-gray-700 text-sm">Incorporate your brand&apos;s colors, typography, and imagery.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Design Iteration</h4>
                  <p className="text-gray-700 text-sm">Iterate based on your feedback to finalize the design.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Frontend Development</h4>
                    <p className="text-gray-700 text-sm">Build responsive, interactive interfaces using HTML, CSS, JavaScript, and frameworks like React or Vue.js.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Backend Development</h4>
                    <p className="text-gray-700 text-sm">Create robust server-side functionality with Node.js, Python, or PHP, and integrate databases like MySQL or MongoDB.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">CMS Integration</h4>
                    <p className="text-gray-700 text-sm">For content-heavy sites, we offer platforms like WordPress, Drupal, or custom solutions.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">API Integration</h4>
                    <p className="text-gray-700 text-sm">Connect third-party services like payment gateways, CRMs, or social media platforms.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Testing & Quality Assurance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Comprehensive Testing</h4>
                  <p className="text-gray-700 text-sm">Conduct rigorous testing for functionality, performance, security, and cross-browser compatibility.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Quality Tools</h4>
                  <p className="text-gray-700 text-sm">Use tools like Selenium, BrowserStack, or manual testing to ensure a flawless user experience.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Launch & Optimization</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Secure Deployment</h4>
                  <p className="text-gray-700 text-sm">Deploy the website on a secure hosting platform (e.g., AWS, Google Cloud, or shared hosting).</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Performance Optimization</h4>
                  <p className="text-gray-700 text-sm">Optimize for speed using techniques like image compression, lazy loading, and CDN integration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our website development services cater to a wide range of industries and needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Small Businesses</h3>
              <p className="text-gray-700 text-sm mb-4">A local bakery needs a website to showcase products, accept online orders, and display customer reviews.</p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Solution:</h4>
                <p className="text-gray-700 text-sm">A WordPress-based site with WooCommerce integration, a custom theme, and SEO optimization to attract local customers.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">E-Commerce</h3>
              <p className="text-gray-700 text-sm mb-4">An online clothing store requires a scalable platform with secure payments and inventory management.</p>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Solution:</h4>
                <p className="text-gray-700 text-sm">A custom-built site using Shopify or a React/Node.js stack with Stripe integration and real-time inventory updates.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Corporate Websites</h3>
              <p className="text-gray-700 text-sm mb-4">A consulting firm needs a professional site to highlight services, case studies, and team expertise.</p>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-700 mb-2">Solution:</h4>
                <p className="text-gray-700 text-sm">A sleek, responsive site built with Next.js, featuring a blog, contact forms, and CRM integration.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Nonprofits & Communities</h3>
              <p className="text-gray-700 text-sm mb-4">A nonprofit wants a donation platform and event calendar to engage supporters.</p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-2">Solution:</h4>
                <p className="text-gray-700 text-sm">A Drupal-based site with donation gateways, event management plugins, and social media integration.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Portfolios & Personal Brands</h3>
              <p className="text-gray-700 text-sm mb-4">A freelance photographer needs a portfolio to showcase work and attract clients.</p>
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-semibold text-pink-700 mb-2">Solution:</h4>
                <p className="text-gray-700 text-sm">A minimalist site using Gatsby.js with a gallery, contact form, and Instagram feed integration.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">SaaS & Tech Startups</h3>
              <p className="text-gray-700 text-sm mb-4">A startup needs a landing page for a new app with user authentication and API documentation.</p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-700 mb-2">Solution:</h4>
                <p className="text-gray-700 text-sm">A custom-built site with React, Firebase for authentication, and Swagger for API documentation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Cutting-edge technologies for modern, scalable web solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Frontend</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>HTML5, CSS3, JavaScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>React, Vue.js, Angular</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Backend</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Node.js, Python (Django/Flask)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>PHP (Laravel), Ruby on Rails</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">CMS</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span>WordPress, Drupal, Joomla</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span>Shopify</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Databases</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>MySQL, PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>MongoDB, Firebase</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">DevOps</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>AWS, Google Cloud</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>Docker, Git, CI/CD pipelines</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">SEO & Analytics</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>Yoast SEO, Google Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>Hotjar, SEMrush</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Pricing & Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transparent pricing with clear deliverables and timelines.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Basic Websites</h3>
              <p className="text-3xl font-bold text-gray-900 mb-2">$2,000–$5,000</p>
              <p className="text-gray-600 mb-6">4–6 weeks</p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Single-page or small sites</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Basic functionality</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Responsive design</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Business Websites</h3>
              <p className="text-3xl font-bold text-gray-900 mb-2">$5,000–$15,000</p>
              <p className="text-gray-600 mb-6">6–12 weeks</p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Custom designs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>CMS integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Advanced integrations</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">E-Commerce & Complex Sites</h3>
              <p className="text-3xl font-bold text-gray-900 mb-2">$15,000+</p>
              <p className="text-gray-600 mb-6">12–20 weeks</p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Advanced features</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Payment gateways</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Scalability & APIs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 italic">Note: Exact pricing and timelines depend on project complexity. Contact us for a free quote!</p>
          </div>
        </div>
      </section>

      {/* Get Started Today */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Get Started Today</h2>
          <p className="text-xl mb-8">Ready to elevate your online presence? Contact us to schedule a free consultation. Let&apos;s discuss your vision and turn it into a reality with a website that stands out.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Email</h3>
              <p>contact@octobit8.com</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Phone</h3>
              <p>+91-9923706784</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Form</h3>
              <p>Fill out our online inquiry form</p>
            </div>
          </div>
          <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
} 