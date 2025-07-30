

export default function PrivacyPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Privacy Policy</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Privacy <span className="text-blue-700">Policy</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Privacy Policy</h2>
            <p className="text-gray-700 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">1. Information We Collect</h3>
                <p className="text-gray-700 mb-4">We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Contact us through our website forms</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request a quote or consultation</li>
                  <li>Apply for employment opportunities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">2. How We Use Your Information</h3>
                <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you marketing materials (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">3. Information Sharing</h3>
                <p className="text-gray-700 mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">4. Data Security</h3>
                <p className="text-gray-700 mb-4">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">5. Your Rights</h3>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">6. Contact Us</h3>
                <p className="text-gray-700 mb-4">If you have any questions about this privacy policy, please contact us at:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Email:</strong> contact@octobit8.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +91-9923706784</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 