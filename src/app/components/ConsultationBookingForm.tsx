"use client";

import { useState } from "react";

interface ConsultationBookingFormProps {
  title?: string;
  subtitle?: string;
  emailTo?: string;
}

interface BookingData {
  name: string;
  email: string;
  phone: string;
  company: string;
  consultationType: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  projectDescription: string;
  urgency: string;
}

export default function ConsultationBookingForm({
  title = "Book Your Consultation",
  subtitle = "Schedule a consultation call with our experts",
  emailTo = "contact@octobit8.com"
}: ConsultationBookingFormProps) {
  const [bookingData, setBookingData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    consultationType: "discovery",
    preferredDate: "",
    preferredTime: "",
    timezone: "IST",
    projectDescription: "",
    urgency: "medium"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create the email body
      const consultationTypes = {
        discovery: "Free Discovery Call (30 minutes)",
        technical: "Technical Consultation (60 minutes)",
        strategy: "Strategy Session (90 minutes)"
      };

      const urgencyLevels = {
        low: "Low - Planning phase",
        medium: "Medium - Ready to start soon",
        high: "High - Immediate attention needed"
      };

      const emailBody = `
Name: ${bookingData.name}
Email: ${bookingData.email}
Phone: ${bookingData.phone}
Company: ${bookingData.company}

Consultation Type: ${consultationTypes[bookingData.consultationType as keyof typeof consultationTypes]}
Preferred Date: ${bookingData.preferredDate}
Preferred Time: ${bookingData.preferredTime}
Timezone: ${bookingData.timezone}
Urgency: ${urgencyLevels[bookingData.urgency as keyof typeof urgencyLevels]}

Project Description:
${bookingData.projectDescription}

---
This consultation booking was submitted from the website.
      `;

      // Create mailto link
      const mailtoLink = `mailto:${emailTo}?subject=Consultation%20Booking%20Request&body=${encodeURIComponent(emailBody)}`;

      // Open default email client
      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setBookingData({
        name: "",
        email: "",
        phone: "",
        company: "",
        consultationType: "discovery",
        preferredDate: "",
        preferredTime: "",
        timezone: "IST",
        projectDescription: "",
        urgency: "medium"
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-blue-700 mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={bookingData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={bookingData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={bookingData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={bookingData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your company name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-2">
              Consultation Type *
            </label>
            <select
              id="consultationType"
              name="consultationType"
              value={bookingData.consultationType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
              <option value="discovery">Free Discovery Call (30 min)</option>
              <option value="technical">Technical Consultation (60 min)</option>
              <option value="strategy">Strategy Session (90 min)</option>
            </select>
          </div>

          <div>
            <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
              Project Urgency *
            </label>
            <select
              id="urgency"
              name="urgency"
              value={bookingData.urgency}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
              <option value="low">Low - Planning phase</option>
              <option value="medium">Medium - Ready to start soon</option>
              <option value="high">High - Immediate attention needed</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={bookingData.preferredDate}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Time *
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={bookingData.preferredTime}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
              <option value="">Select time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
            </select>
          </div>

          <div>
            <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-2">
              Timezone *
            </label>
            <select
              id="timezone"
              name="timezone"
              value={bookingData.timezone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
              <option value="IST">IST (India)</option>
              <option value="EST">EST (Eastern US)</option>
              <option value="PST">PST (Pacific US)</option>
              <option value="GMT">GMT (UK)</option>
              <option value="CET">CET (Central Europe)</option>
              <option value="JST">JST (Japan)</option>
              <option value="AEST">AEST (Australia)</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
            Project Description *
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={bookingData.projectDescription}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
            placeholder="Briefly describe your project, challenges, and what you hope to achieve from this consultation..."
          />
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 text-sm">
              ✓ Thank you! Your consultation booking request has been submitted. We&apos;ll review your information and get back to you within 24 hours to confirm your appointment.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 text-sm">
              ✗ There was an error submitting your booking request. Please try again or contact us directly.
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Book Consultation"}
          </button>
          
          <a
            href={`mailto:${emailTo}?subject=Consultation%20Booking%20Request`}
            className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 text-center"
          >
            Email Directly
          </a>
        </div>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy and consent to being contacted regarding your consultation booking.
        </p>
      </form>
    </div>
  );
} 