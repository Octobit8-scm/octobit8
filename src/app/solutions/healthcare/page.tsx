import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export default function HealthcareSolutionsPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-28 px-4 overflow-hidden">
        {/* Layered animated cloud SVGs */}
        <svg className="absolute left-[-10%] top-[-8%] w-[500px] h-[220px] opacity-30 z-0 animate-float-slow" viewBox="0 0 500 220" fill="none"><ellipse cx="250" cy="110" rx="250" ry="90" fill="url(#cloudGradient1)" /><defs><linearGradient id="cloudGradient1" x1="0" y1="0" x2="500" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
        <svg className="absolute right-[-12%] top-[10%] w-[320px] h-[120px] opacity-20 z-0 animate-float" viewBox="0 0 320 120" fill="none"><ellipse cx="160" cy="60" rx="160" ry="50" fill="url(#cloudGradient2)" /><defs><linearGradient id="cloudGradient2" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#bae6fd"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
        <svg className="absolute left-[10%] bottom-[-8%] w-[300px] h-[100px] opacity-20 z-0 animate-float-reverse" viewBox="0 0 300 100" fill="none"><ellipse cx="150" cy="50" rx="150" ry="40" fill="url(#cloudGradient3)" /><defs><linearGradient id="cloudGradient3" x1="0" y1="0" x2="300" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f9ff"/><stop offset="1" stopColor="#a5b4fc"/></linearGradient></defs></svg>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <span className="inline-block bg-blue-600 text-white font-semibold px-4 py-1 rounded-full text-sm tracking-widest mb-4 animate-pulse">Healthcare Solutions</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-gray-900">Comprehensive <span className="text-blue-700">Healthcare Technology</span> Solutions</h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-3xl">HIPAA-compliant desktop and cloud-based solutions for healthcare organizations, pharmacies, hospitals, and medical specialties. Secure, scalable, and designed for modern healthcare delivery.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg glow-effect animate-bounce">Get Healthcare Assessment</Link>
        </div>
      </section>

      {/* Why Healthcare Needs Specialized Solutions */}
      <section className="max-w-4xl mx-auto mb-16 px-4 relative">
        <div className="bg-white rounded-2xl shadow-lg p-10 border-l-8 border-blue-500 flex flex-col items-center relative z-10">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-4">Why Healthcare Needs Specialized Solutions</h2>
          <p className="text-lg text-gray-700 text-center">Healthcare organizations face unique challenges: strict compliance requirements (HIPAA, HITECH), sensitive patient data, critical uptime needs, and complex workflows. Our solutions are built with these requirements in mind, offering both desktop and cloud-based options to meet diverse healthcare needs.</p>
        </div>
      </section>

      {/* Desktop Applications for Pharmacy Management */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Desktop Applications for Pharmacy Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive desktop-based pharmacy management systems for retail pharmacies, hospital pharmacies, and pharmaceutical chains.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Desktop Pharmacy Software</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Pharmacy Management System</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Inventory management and stock control</li>
                    <li>• Prescription processing and dispensing</li>
                    <li>• Patient medication history tracking</li>
                    <li>• Drug interaction checking</li>
                    <li>• Billing and insurance processing</li>
                    <li>• Regulatory compliance reporting</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Point of Sale (POS) System</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Cash register and payment processing</li>
                    <li>• Customer loyalty programs</li>
                    <li>• Sales analytics and reporting</li>
                    <li>• Multi-location management</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Advanced Desktop Features</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Pharmacy Analytics & Reporting</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Sales and revenue analytics</li>
                    <li>• Inventory turnover reports</li>
                    <li>• Prescription trend analysis</li>
                    <li>• Customer behavior insights</li>
                    <li>• Regulatory compliance reports</li>
                    <li>• Financial performance tracking</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Pharmacy Automation Integration</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated dispensing systems</li>
                    <li>• Barcode scanning integration</li>
                    <li>• Label printing automation</li>
                    <li>• Drug storage monitoring</li>
                    <li>• Temperature control systems</li>
                    <li>• Security and access control</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud-Based Pharmacy Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Cloud-Based Pharmacy Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Modern cloud-based pharmacy management platforms for enhanced accessibility and collaboration.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Cloud Pharmacy Platform</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Advanced Web-Based Pharmacy Management</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered prescription analysis and drug interaction checking</li>
                    <li>• Real-time inventory synchronization across multiple locations</li>
                    <li>• Multi-branch pharmacy network management</li>
                    <li>• Mobile app for pharmacists with offline capabilities</li>
                    <li>• Automated prescription refills with smart reminders</li>
                    <li>• Integration with healthcare systems and EHR</li>
                    <li>• Predictive analytics for inventory management</li>
                    <li>• Automated drug safety monitoring and alerts</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Advanced E-Prescription System</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered digital prescription processing and validation</li>
                    <li>• Electronic health record integration with real-time updates</li>
                    <li>• Advanced prescription tracking with smart alerts</li>
                    <li>• Automated refill reminders with patient engagement</li>
                    <li>• Drug interaction checking with AI analysis</li>
                    <li>• Prescription fraud detection and prevention</li>
                    <li>• Integration with controlled substance monitoring systems</li>
                    <li>• Automated prescription analytics and reporting</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Advanced Cloud Features</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Pharmacy Network Management</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Multi-location pharmacy chains</li>
                    <li>• Centralized inventory control</li>
                    <li>• Cross-location prescription transfers</li>
                    <li>• Unified customer database</li>
                    <li>• Centralized reporting and analytics</li>
                    <li>• Standardized workflows</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Mobile Pharmacy Solutions</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Mobile prescription processing</li>
                    <li>• Inventory management on-the-go</li>
                    <li>• Customer service mobile apps</li>
                    <li>• Real-time notifications</li>
                    <li>• Offline capability with sync</li>
                    <li>• GPS-based pharmacy locator</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Speciality Hospital Management */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Multi-Speciality Hospital Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive hospital information systems for multi-speciality hospitals and healthcare networks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Desktop Hospital Systems</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">Hospital Information System (HIS)</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Patient registration and management</li>
                    <li>• Appointment scheduling system</li>
                    <li>• Billing and insurance management</li>
                    <li>• Laboratory information system</li>
                    <li>• Radiology information system</li>
                    <li>• Pharmacy management integration</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Electronic Medical Records (EMR)</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Patient medical history</li>
                    <li>• Clinical documentation</li>
                    <li>• Treatment plans and progress notes</li>
                    <li>• Medication management</li>
                    <li>• Allergy and drug interaction alerts</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Cloud Hospital Platform</h3>
              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-700 mb-2">Advanced Cloud-Based HIS</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered hospital management and workflow optimization</li>
                    <li>• Multi-location hospital network with centralized control</li>
                    <li>• Real-time data synchronization across all departments</li>
                    <li>• Mobile apps for staff with offline capabilities</li>
                    <li>• Advanced telemedicine integration with AI assistance</li>
                    <li>• Predictive analytics for patient outcomes and resource management</li>
                    <li>• Automated clinical decision support systems</li>
                    <li>• Integration with IoT medical devices and wearables</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Advanced Patient Portal</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered online appointment booking with smart scheduling</li>
                    <li>• Comprehensive medical record access with educational content</li>
                    <li>• Automated prescription refill requests with smart reminders</li>
                    <li>• Secure messaging with providers and care team</li>
                    <li>• Advanced payment and billing management with analytics</li>
                    <li>• Integration with wearable health devices</li>
                    <li>• Personalized health recommendations and alerts</li>
                    <li>• Telemedicine consultation scheduling and video calls</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Specialties Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Specialty-Specific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Tailored solutions for different medical specialties with specialized workflows and requirements.</p>
          </div>
          
          {/* Cardiology Solutions */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Cardiology Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-red-700 mb-2">Desktop Cardiology Software</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• ECG interpretation and analysis</li>
                  <li>• Echocardiography reporting</li>
                  <li>• Cardiac catheterization data</li>
                  <li>• Stress test management</li>
                  <li>• Patient cardiac history tracking</li>
                  <li>• Cardiology-specific billing codes</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Advanced Cloud Cardiology Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• AI-powered ECG analysis and interpretation</li>
                  <li>• Real-time cardiac monitoring with IoT devices</li>
                  <li>• Predictive analytics for cardiac risk assessment</li>
                  <li>• Cloud-based cardiac imaging (Echo, MRI, CT)</li>
                  <li>• Automated cardiac report generation</li>
                  <li>• Integration with wearable cardiac monitors</li>
                  <li>• Telecardiology with video consultations</li>
                  <li>• Cardiac data analytics and trend analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dental Solutions */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Dental Practice Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Desktop Dental Software</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Patient dental records management</li>
                  <li>• Treatment planning and scheduling</li>
                  <li>• Dental imaging and X-ray storage</li>
                  <li>• Insurance claims processing</li>
                  <li>• Dental charting and notes</li>
                  <li>• Appointment and recall management</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Advanced Cloud Dental Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• AI-powered dental image analysis and diagnosis</li>
                  <li>• 3D dental scanning and modeling</li>
                  <li>• Cloud-based dental imaging (X-rays, CBCT, intraoral)</li>
                  <li>• Automated treatment planning with AI</li>
                  <li>• Real-time collaboration between dental specialists</li>
                  <li>• Integration with dental lab systems</li>
                  <li>• Tele-dentistry with virtual consultations</li>
                  <li>• Predictive analytics for dental health trends</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ophthalmology Solutions */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Eye Clinic Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-700 mb-2">Desktop Ophthalmology Software</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Visual acuity testing and recording</li>
                  <li>• Fundus photography management</li>
                  <li>• OCT scan data storage</li>
                  <li>• Glaucoma screening tools</li>
                  <li>• Cataract surgery planning</li>
                  <li>• Eye examination templates</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Advanced Cloud Ophthalmology Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• AI-powered retinal image analysis and diagnosis</li>
                  <li>• Cloud-based OCT and fundus imaging</li>
                  <li>• Automated diabetic retinopathy screening</li>
                  <li>• Real-time glaucoma progression monitoring</li>
                  <li>• Teleophthalmology with AI-assisted diagnosis</li>
                  <li>• Integration with retinal cameras and OCT devices</li>
                  <li>• Predictive analytics for eye disease progression</li>
                  <li>• Automated vision field analysis and reporting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Orthopedic Solutions */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Orthopedic Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Desktop Orthopedic Software</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Orthopedic patient assessment</li>
                  <li>• Surgical planning and scheduling</li>
                  <li>• Physical therapy tracking</li>
                  <li>• X-ray and MRI image management</li>
                  <li>• Post-operative care monitoring</li>
                  <li>• Orthopedic-specific billing</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Advanced Cloud Orthopedic Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• AI-powered orthopedic image analysis (X-rays, MRI, CT)</li>
                  <li>• 3D surgical planning and modeling</li>
                  <li>• Cloud-based orthopedic imaging and PACS</li>
                  <li>• Real-time motion analysis and gait assessment</li>
                  <li>• Tele-rehabilitation with IoT motion sensors</li>
                  <li>• Integration with robotic surgical systems</li>
                  <li>• Predictive analytics for surgical outcomes</li>
                  <li>• Automated orthopedic report generation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pediatrics Solutions */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Pediatrics Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-semibold text-pink-700 mb-2">Desktop Pediatric Software</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Growth and development tracking</li>
                  <li>• Vaccination schedule management</li>
                  <li>• Pediatric assessment tools</li>
                  <li>• Parent communication logs</li>
                  <li>• Child-specific medication dosing</li>
                  <li>• Pediatric billing and insurance</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Advanced Cloud Pediatric Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• AI-powered pediatric growth and development tracking</li>
                  <li>• Automated vaccination scheduling and reminders</li>
                  <li>• Cloud-based pediatric imaging and records</li>
                  <li>• Tele-pediatrics with video consultations</li>
                  <li>• Integration with wearable health monitors for children</li>
                  <li>• Predictive analytics for developmental milestones</li>
                  <li>• Parent engagement portal with educational content</li>
                  <li>• Automated pediatric health risk assessment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gastroenterology Solutions */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Gastroenterology Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-700 mb-2">Desktop Gastroenterology Software</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Endoscopy procedure management</li>
                  <li>• Colonoscopy scheduling and tracking</li>
                  <li>• GI pathology reporting</li>
                  <li>• Dietary consultation tracking</li>
                  <li>• Liver function monitoring</li>
                  <li>• Gastroenterology-specific billing</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Advanced Cloud Gastroenterology Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• AI-powered endoscopy image analysis and diagnosis</li>
                  <li>• Cloud-based endoscopy video storage and analysis</li>
                  <li>• Automated polyp detection and classification</li>
                  <li>• Real-time GI procedure monitoring</li>
                  <li>• Tele-gastroenterology with AI-assisted diagnosis</li>
                  <li>• Integration with capsule endoscopy systems</li>
                  <li>• Predictive analytics for GI disease progression</li>
                  <li>• Automated GI report generation with AI insights</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gynecology Solutions */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Gynecology Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-2">Desktop Gynecology Software</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Women&apos;s health records management</li>
                  <li>• Obstetric care tracking</li>
                  <li>• Gynecological procedure scheduling</li>
                  <li>• Fertility treatment monitoring</li>
                  <li>• Ultrasound image management</li>
                  <li>• Gynecology-specific billing</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Advanced Cloud Gynecology Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• AI-powered ultrasound image analysis and diagnosis</li>
                  <li>• Cloud-based gynecological imaging and PACS</li>
                  <li>• Automated fetal development tracking</li>
                  <li>• Real-time pregnancy monitoring with IoT devices</li>
                  <li>• Tele-gynecology with AI-assisted diagnosis</li>
                  <li>• Integration with fertility tracking devices</li>
                  <li>• Predictive analytics for pregnancy outcomes</li>
                  <li>• Automated gynecological report generation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Neurology Solutions */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Neurology Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-700 mb-2">Desktop Neurology Software</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Neurological assessment tools</li>
                  <li>• EEG and EMG data management</li>
                  <li>• Brain imaging analysis</li>
                  <li>• Neurological procedure tracking</li>
                  <li>• Cognitive function testing</li>
                  <li>• Neurology-specific billing</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Advanced Cloud Neurology Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• AI-powered neurological image analysis (MRI, CT, PET)</li>
                  <li>• Cloud-based neurological imaging and PACS</li>
                  <li>• Real-time EEG monitoring and analysis</li>
                  <li>• Automated seizure detection and prediction</li>
                  <li>• Tele-neurology with AI-assisted diagnosis</li>
                  <li>• Integration with deep brain stimulation devices</li>
                  <li>• Predictive analytics for neurological disorders</li>
                  <li>• Automated neurological report generation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Diagnostics Center Solutions */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-teal-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Diagnostics Center Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-teal-50 rounded-lg p-4">
                <h4 className="font-semibold text-teal-700 mb-2">Desktop Diagnostics Software</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Laboratory information management</li>
                  <li>• Radiology information system</li>
                  <li>• Pathology reporting system</li>
                  <li>• Medical imaging storage</li>
                  <li>• Quality control tracking</li>
                  <li>• Diagnostics billing management</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Advanced Cloud Diagnostics Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• AI-powered diagnostic image analysis and interpretation</li>
                  <li>• Cloud-based diagnostic imaging and PACS</li>
                  <li>• Automated pathology slide analysis</li>
                  <li>• Real-time laboratory result processing</li>
                  <li>• Multi-center diagnostic network integration</li>
                  <li>• Integration with diagnostic devices and analyzers</li>
                  <li>• Predictive analytics for diagnostic accuracy</li>
                  <li>• Automated diagnostic report generation with AI insights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Solutions for Healthcare */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">AI Agent Solutions for Healthcare</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Intelligent AI agents designed to enhance healthcare delivery, improve patient outcomes, and streamline medical operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">AI-Powered Healthcare Management</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Intelligent Patient Care Agents</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered patient triage and symptom assessment</li>
                    <li>• Automated appointment scheduling with smart optimization</li>
                    <li>• Intelligent medication reminders and adherence tracking</li>
                    <li>• Real-time patient monitoring and alert systems</li>
                    <li>• Automated medical record analysis and insights</li>
                    <li>• Predictive analytics for patient risk assessment</li>
                    <li>• AI-driven treatment recommendation systems</li>
                    <li>• Automated follow-up care coordination</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Clinical Decision Support Agents</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered diagnostic assistance and validation</li>
                    <li>• Automated medical image analysis and interpretation</li>
                    <li>• Intelligent drug interaction checking and alerts</li>
                    <li>• Real-time clinical guideline recommendations</li>
                    <li>• Automated medical coding and billing assistance</li>
                    <li>• Predictive analytics for disease progression</li>
                    <li>• AI-driven treatment protocol optimization</li>
                    <li>• Automated clinical documentation assistance</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">AI Agent Solutions for Healthcare</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Administrative AI Agents</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Automated insurance verification and claims processing</li>
                    <li>• Intelligent resource allocation and scheduling</li>
                    <li>• AI-powered inventory management and procurement</li>
                    <li>• Automated compliance monitoring and reporting</li>
                    <li>• Real-time financial analytics and forecasting</li>
                    <li>• Intelligent vendor management and procurement</li>
                    <li>• Automated quality assurance and audit preparation</li>
                    <li>• AI-driven performance optimization</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Advanced Analytics & Insights</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• AI-powered population health analytics</li>
                    <li>• Predictive modeling for disease outbreaks</li>
                    <li>• Real-time healthcare quality metrics</li>
                    <li>• Automated performance benchmarking</li>
                    <li>• Intelligent cost optimization analysis</li>
                    <li>• AI-driven patient satisfaction insights</li>
                    <li>• Automated regulatory compliance tracking</li>
                    <li>• Predictive maintenance for medical equipment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Compliance */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Key Benefits & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our healthcare solutions ensure compliance, security, and efficiency for all healthcare organizations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Compliance & Security</h3>
              <ul className="text-gray-700 text-sm space-y-2 text-left">
                <li>• HIPAA and HITECH compliance</li>
                <li>• End-to-end encryption</li>
                <li>• Audit trail and logging</li>
                <li>• Access control and authentication</li>
                <li>• Data backup and recovery</li>
                <li>• Regular security updates</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Operational Efficiency</h3>
              <ul className="text-gray-700 text-sm space-y-2 text-left">
                <li>• Streamlined workflows</li>
                <li>• Automated processes</li>
                <li>• Reduced administrative burden</li>
                <li>• Improved patient care</li>
                <li>• Better resource utilization</li>
                <li>• Cost optimization</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Scalability & Integration</h3>
              <ul className="text-gray-700 text-sm space-y-2 text-left">
                <li>• Multi-location support</li>
                <li>• Third-party system integration</li>
                <li>• Mobile and web access</li>
                <li>• Cloud and on-premise options</li>
                <li>• Customizable workflows</li>
                <li>• Future-ready architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Transform Your Healthcare Practice?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get a customized healthcare solution that fits your specific needs and compliance requirements.
            </p>
          </div>
          <ContactForm 
            title="Get Healthcare Solution Quote"
            subtitle="Tell us about your healthcare organization and requirements."
            defaultPosition="Healthcare Solutions"
            emailSubject="Healthcare Solutions Inquiry"
            placeholder="Describe your healthcare organization, current challenges, and specific requirements for our healthcare solutions..."
          />
        </div>
      </section>
    </div>
  );
} 