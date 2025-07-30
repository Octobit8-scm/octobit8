export default function TermsPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Terms of Service</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Terms of <span className="text-blue-700">Service</span></h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-2xl">Please read these terms carefully before using our services.</p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Terms of Service</h2>
            <p className="text-gray-700 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">1. Acceptance of Terms</h3>
                <p className="text-gray-700 mb-4">By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">2. Services</h3>
                <p className="text-gray-700 mb-4">Octobit8 provides DevOps, cloud computing, software development, and IT staffing services. We reserve the right to modify or discontinue any service at any time.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">3. Payment Terms</h3>
                <p className="text-gray-700 mb-4">Payment terms will be specified in individual service agreements. All payments are due as agreed upon in writing.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">4. Intellectual Property</h3>
                <p className="text-gray-700 mb-4">All content, trademarks, and intellectual property on this website are owned by Octobit8 unless otherwise stated.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">5. Limitation of Liability</h3>
                <p className="text-gray-700 mb-4">Octobit8 shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">6. Termination</h3>
                <p className="text-gray-700 mb-4">We may terminate or suspend your access to our services immediately, without prior notice, for any reason whatsoever.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">7. Governing Law</h3>
                <p className="text-gray-700 mb-4">These terms shall be governed by and construed in accordance with the laws of India.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">8. Contact Information</h3>
                <p className="text-gray-700 mb-4">If you have any questions about these terms, please contact us at:</p>
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