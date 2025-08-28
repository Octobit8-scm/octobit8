import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import ClarityAnalytics from "./components/ClarityAnalytics";
import { analyticsConfig } from "./config/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Octobit8 - DevOps, Cloud & AI Solutions",
  description: "Leading IT outsourcing and custom software development company specializing in DevOps, cloud solutions, AI development, and digital transformation services.",
  keywords: "DevOps, Cloud Solutions, AI Development, Custom Software, IT Outsourcing, Digital Transformation",
  authors: [{ name: "Octobit8" }],
  creator: "Octobit8",
  publisher: "Octobit8",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://octobit8.azurestaticapps.net",
    title: "Octobit8 - DevOps, Cloud & AI Solutions",
    description: "Leading IT outsourcing and custom software development company specializing in DevOps, cloud solutions, AI development, and digital transformation services.",
    siteName: "Octobit8",
  },
  twitter: {
    card: "summary_large_image",
    title: "Octobit8 - DevOps, Cloud & AI Solutions",
    description: "Leading IT outsourcing and custom software development company specializing in DevOps, cloud solutions, AI development, and digital transformation services.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems = [
    { href: "/solutions", label: "Solutions" },
    { href: "/ai-development", label: "AI Development" },
    { href: "/devops-cloud", label: "DevOps & Cloud" },
    { href: "/it-staffing", label: "IT Staffing" },
    {
      label: "Career",
      dropdown: [
        { href: "/career/training-internship", label: "Training & Internship" },
        { href: "/career/job-openings", label: "Job Openings" },
        { href: "/career/career-growth", label: "Career Growth" },
      ],
    },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {analyticsConfig.clarity.enabled && (
          <ClarityAnalytics projectId={analyticsConfig.clarity.projectId} />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen flex flex-col`}
      >
        {/* Header with Navigation */}
        <header className="bg-gray-900 shadow sticky top-0 z-50">
          <nav className="container mx-auto flex items-center justify-between py-3 px-4 border-b border-gray-800 min-h-[72px]">
            {/* Logo and Title */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image 
                src="/logo.svg" 
                alt="octobit8 logo" 
                width={48}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
            {/* Desktop Menu - centralized */}
            <ul className="hidden md:flex gap-6 text-gray-100 font-medium flex-1 justify-center items-center">
              {menuItems.map((item) => {
                const isActive = typeof window !== 'undefined' && window.location.pathname === (item.href || (item.dropdown && item.dropdown[0]?.href));
                if (item.dropdown) {
                  return (
                    <li key={item.label} className="relative group">
                      <button
                        className={`px-4 py-2 transition focus:outline-none flex items-center gap-1 ${isActive ? 'text-blue-400' : ''}`}
                        type="button"
                      >
                        {item.label}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      <ul className="absolute left-0 mt-3 w-48 bg-gray-900 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity z-50 border border-gray-700">
                        {item.dropdown.map((sub) => {
                          const isSubActive = typeof window !== 'undefined' && window.location.pathname === sub.href;
                          return (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className={`block px-4 py-2 rounded transition ${isSubActive ? 'text-blue-400' : ''}`}
                              >{sub.label}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                } else if (item.href) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`px-4 py-2 transition focus:outline-none ${isActive ? 'text-blue-400' : ''}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center ml-auto">
              <input id="menu-toggle" type="checkbox" className="hidden peer" />
              <label htmlFor="menu-toggle" className="cursor-pointer flex flex-col gap-1.5 p-2">
                <span className="block w-6 h-0.5 bg-gray-100 rounded"></span>
                <span className="block w-6 h-0.5 bg-gray-100 rounded"></span>
                <span className="block w-6 h-0.5 bg-gray-100 rounded"></span>
              </label>
              <div className="absolute top-20 left-0 w-full bg-gray-900 shadow-lg z-50 hidden peer-checked:block animate-fade-in">
                <ul className="flex flex-col gap-2 py-4 px-6 text-gray-100 font-medium">
                  {menuItems.map((item) => {
                    const isActive = typeof window !== 'undefined' && window.location.pathname === (item.href || (item.dropdown && item.dropdown[0]?.href));
                    return item.dropdown ? (
                      <li key={item.label} className="flex flex-col">
                        <span className="font-semibold px-4 py-2">{item.label}</span>
                        <ul className="pl-4">
                          {item.dropdown.map((sub) => {
                            const isSubActive = typeof window !== 'undefined' && window.location.pathname === sub.href;
                            return (
                              <li key={sub.href}>
                                <Link
                                  href={sub.href}
                                  className={`block px-4 py-2 rounded transition ${isSubActive ? 'text-blue-400' : ''}`}
                                >{sub.label}</Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    ) : (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block px-4 py-2 rounded-full transition ${isActive ? 'text-blue-400' : ''}`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* Main Content */}
        <main className="flex-1 w-full">
        {children}
        </main>
        {/* Footer */}
        <footer className="bg-gray-900 text-gray-100 mt-12 py-12 px-4">
          <div className="container mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-12 border-b border-gray-800 pb-8">
            <div className="flex flex-col items-center md:items-start md:w-1/4 gap-4">
              <div className="flex items-center gap-2">
                <Image 
                  src="/logo.svg" 
                  alt="octobit8 logo" 
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>

              {/* Core Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">Core Services</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/ai-development" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    AI Development
                  </Link></li>
                  <li><Link href="/devops-cloud" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    DevOps & Cloud
                  </Link></li>
                  <li><Link href="/it-staffing" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    IT Staffing
                  </Link></li>
                  <li><Link href="/solutions" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Industry Solutions
                  </Link></li>
                </ul>
              </div>

              {/* Career & Resources */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">Career & Resources</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/career/training-internship" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Training & Internship
                  </Link></li>
                  <li><Link href="/career/job-openings" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Job Openings
                  </Link></li>
                  <li><Link href="/career/career-growth" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Career Growth
                  </Link></li>
                  <li><Link href="/blog" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Blog & Insights
                  </Link></li>
                </ul>
              </div>

              {/* Company & Legal */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">Company & Legal</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About Us</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
                  <li><Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Terms of Service</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-t border-gray-700 pt-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:contact@octobit8.com" className="text-gray-300 hover:text-blue-400 transition-colors">contact@octobit8.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a href="tel:+919923706784" className="text-gray-300 hover:text-blue-400 transition-colors">+91-9923706784</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Office</h4>
                    <span className="text-gray-300 text-sm">Varanasi, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="text-center lg:text-left">
                  <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Octobit8</span>. All rights reserved. | Founded in 2021
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>ISO 27001 Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>150+ Projects Delivered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>98% Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
