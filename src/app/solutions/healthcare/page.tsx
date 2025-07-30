import Link from "next/link";

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

      {/* Pharmacy Management Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Pharmacy Management Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive pharmacy management systems for retail pharmacies, hospital pharmacies, and pharmaceutical chains.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Desktop Solutions</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Pharmacy Management Software</h4>
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
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Cloud-Based Solutions</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Cloud Pharmacy Platform</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Web-based pharmacy management</li>
                    <li>• Real-time inventory synchronization</li>
                    <li>• Multi-branch pharmacy networks</li>
                    <li>• Mobile app for pharmacists</li>
                    <li>• Automated prescription refills</li>
                    <li>• Integration with healthcare systems</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">E-Prescription System</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Digital prescription processing</li>
                    <li>• Electronic health record integration</li>
                    <li>• Prescription tracking and alerts</li>
                    <li>• Automated refill reminders</li>
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
                  <h4 className="font-semibold text-indigo-700 mb-2">Cloud-Based HIS</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Web-based hospital management</li>
                    <li>• Multi-location hospital networks</li>
                    <li>• Real-time data synchronization</li>
                    <li>• Mobile apps for staff</li>
                    <li>• Telemedicine integration</li>
                    <li>• Advanced analytics and reporting</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Patient Portal</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Online appointment booking</li>
                    <li>• Medical record access</li>
                    <li>• Prescription refill requests</li>
                    <li>• Secure messaging with providers</li>
                    <li>• Payment and billing management</li>
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
                <h4 className="font-semibold text-blue-700 mb-2">Cloud Cardiology Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Remote cardiac monitoring</li>
                  <li>• Telecardiology consultations</li>
                  <li>• Cloud-based ECG storage</li>
                  <li>• Mobile cardiac data access</li>
                  <li>• Integration with cardiac devices</li>
                  <li>• Real-time cardiac alerts</li>
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
                <h4 className="font-semibold text-green-700 mb-2">Cloud Dental Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Web-based dental practice management</li>
                  <li>• Online appointment booking</li>
                  <li>• Patient portal for dental records</li>
                  <li>• Multi-location dental practice</li>
                  <li>• Mobile dental imaging access</li>
                  <li>• Automated appointment reminders</li>
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
                <h4 className="font-semibold text-blue-700 mb-2">Cloud Ophthalmology Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Remote eye consultation platform</li>
                  <li>• Cloud-based image storage</li>
                  <li>• Teleophthalmology services</li>
                  <li>• Mobile eye examination tools</li>
                  <li>• Integration with ophthalmic devices</li>
                  <li>• Automated vision screening</li>
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
                <h4 className="font-semibold text-blue-700 mb-2">Cloud Orthopedic Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Remote orthopedic consultations</li>
                  <li>• Cloud-based imaging storage</li>
                  <li>• Tele-rehabilitation services</li>
                  <li>• Mobile orthopedic assessment</li>
                  <li>• Integration with wearable devices</li>
                  <li>• Automated follow-up scheduling</li>
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
                <h4 className="font-semibold text-blue-700 mb-2">Cloud Pediatric Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Tele-pediatrics consultations</li>
                  <li>• Parent portal for child records</li>
                  <li>• Vaccination reminder system</li>
                  <li>• Growth chart tracking</li>
                  <li>• Mobile pediatric assessments</li>
                  <li>• Integration with school health records</li>
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
                <h4 className="font-semibold text-blue-700 mb-2">Cloud Gastroenterology Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Remote GI consultations</li>
                  <li>• Cloud-based endoscopy images</li>
                  <li>• Tele-gastroenterology services</li>
                  <li>• Mobile GI assessment tools</li>
                  <li>• Integration with GI devices</li>
                  <li>• Automated follow-up scheduling</li>
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
                <h4 className="font-semibold text-blue-700 mb-2">Cloud Gynecology Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Tele-gynecology consultations</li>
                  <li>• Cloud-based ultrasound storage</li>
                  <li>• Remote women&apos;s health monitoring</li>
                  <li>• Mobile gynecological assessments</li>
                  <li>• Integration with fertility devices</li>
                  <li>• Automated appointment reminders</li>
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
                <h4 className="font-semibold text-blue-700 mb-2">Cloud Neurology Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Tele-neurology consultations</li>
                  <li>• Cloud-based neurological imaging</li>
                  <li>• Remote neurological monitoring</li>
                  <li>• Mobile neurological assessments</li>
                  <li>• Integration with neuro devices</li>
                  <li>• Automated seizure detection</li>
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
                <h4 className="font-semibold text-blue-700 mb-2">Cloud Diagnostics Platform</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Cloud-based diagnostic imaging</li>
                  <li>• Remote diagnostic consultations</li>
                  <li>• Mobile diagnostic reporting</li>
                  <li>• Multi-center diagnostic networks</li>
                  <li>• Integration with diagnostic devices</li>
                  <li>• Automated result notifications</li>
                </ul>
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

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Practice?</h2>
            <p className="text-xl mb-6">Get a customized healthcare solution that fits your specific needs and compliance requirements.</p>
            <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 