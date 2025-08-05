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
    icon: [
      { url: "/favicon.png", sizes: "any", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems = [
    { href: "/about", label: "About" },
    {
      label: "Services",
      dropdown: [
        { href: "/services/website-development", label: "Website Development" },
        { href: "/services/it-staffing", label: "IT Staffing" },
        { href: "/services/mobile-app-development", label: "Mobile App Development" },
        { href: "/services/custom-software-development", label: "Custom Software Development" },
        { href: "/services/devops", label: "DevOps & Cloud" },
        { href: "/services/data-analytics", label: "Data Analytics" },
        { href: "/services/ai-development", label: "AI Agent Development" },
      ],
    },
    {
      label: "Solutions",
      dropdown: [
        { href: "/solutions/healthcare", label: "Healthcare" },
        { href: "/solutions/edtech", label: "EdTech" },
        { href: "/solutions/travel", label: "Travel" },
        { href: "/solutions/hospitality", label: "Hospitality" },
        { href: "/solutions/logistics", label: "Logistics" },
        { href: "/solutions/retail", label: "Retail" },
        { href: "/solutions/real-estate", label: "Real Estate" },
        { href: "/solutions/banking-finance", label: "Banking & Finance" },
      ],
    },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en">
      <head>
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
              <p className="text-sm text-gray-300 text-center md:text-left max-w-xs">Empowering businesses through innovative DevOps, cloud solutions, and digital transformation services since 2021.</p>
              <div className="flex gap-3 mt-2">
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 text-xl transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.62 2.01 3.62 4.62v4.69z"/></svg></a>
                <a href="#" aria-label="Twitter" className="hover:text-blue-400 text-xl transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 002.16-2.72c-.95.56-2.01.97-3.13 1.19a4.92 4.92 0 00-8.39 4.48c-4.09-.2-7.72-2.17-10.15-5.15a4.93 4.93 0 001.52 6.57c-.8-.02-1.56-.25-2.22-.62v.06a4.93 4.93 0 003.95 4.83c-.39.11-.8.17-1.22.17-.3 0-.59-.03-.87-.08a4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 21.54a13.94 13.94 0 007.56 2.22c9.05 0 14-7.5 14-14v-.64c.96-.7 1.8-1.56 2.46-2.54z"/></svg></a>
                <a href="#" aria-label="GitHub" className="hover:text-blue-400 text-xl transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-w-[140px]">
              <h3 className="font-semibold mb-2 text-white">Company</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="/about" className="hover:underline transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:underline transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:underline transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:underline transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:underline transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 min-w-[160px]">
              <h3 className="font-semibold mb-2 text-white">Services</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="/services/website-development" className="hover:underline transition-colors">Website Development</Link></li>
                <li><Link href="/services/mobile-app-development" className="hover:underline transition-colors">Mobile App Development</Link></li>
                <li><Link href="/services/custom-software-development" className="hover:underline transition-colors">Custom Software</Link></li>
                <li><Link href="/services/devops" className="hover:underline transition-colors">DevOps & Cloud</Link></li>
                <li><Link href="/services/data-analytics" className="hover:underline transition-colors">Data Analytics</Link></li>
                <li><Link href="/services/ai-development" className="hover:underline transition-colors">AI Agent Development</Link></li>
                <li><Link href="/services/it-staffing" className="hover:underline transition-colors">IT Staffing</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 min-w-[180px]">
              <h3 className="font-semibold mb-2 text-white">Solutions</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="/solutions/healthcare" className="hover:underline transition-colors">Healthcare</Link></li>
                <li><Link href="/solutions/edtech" className="hover:underline transition-colors">EdTech</Link></li>
                <li><Link href="/solutions/travel" className="hover:underline transition-colors">Travel</Link></li>
                <li><Link href="/solutions/hospitality" className="hover:underline transition-colors">Hospitality</Link></li>
                <li><Link href="/solutions/logistics" className="hover:underline transition-colors">Logistics</Link></li>
                <li><Link href="/solutions/retail" className="hover:underline transition-colors">Retail</Link></li>
                <li><Link href="/solutions/real-estate" className="hover:underline transition-colors">Real Estate</Link></li>
                <li><Link href="/solutions/banking-finance" className="hover:underline transition-colors">Banking & Finance</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 min-w-[200px]">
              <h3 className="font-semibold mb-2 text-white">Contact Info</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">📧</span>
                  <a href="mailto:contact@octobit8.com" className="hover:underline transition-colors">contact@octobit8.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">📞</span>
                  <a href="tel:+919923706784" className="hover:underline transition-colors">+91-9923706784</a>
                </li>
                <li className="flex items-start gap-2 mt-2">
                  <span className="text-blue-400">🏢</span>
                  <div>
                    <span className="font-semibold">Registered Office:</span><br/>
                    <span className="text-gray-300">185 BARA LAL CHRAIST NAGAR, Varanasi, Uttar Pradesh, India, 221007</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 mt-2">
                  <span className="text-blue-400">🏢</span>
                  <div>
                    <span className="font-semibold">Noida Virtual Office:</span><br/>
                    <span className="text-gray-300">7th Floor, Plot A/8A, Knowledge Boulevard, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto mt-8 flex flex-col md:flex-row items-center justify-between gap-4 pt-4 text-xs text-gray-400">
            <div>&copy; {new Date().getFullYear()} Octobit8. All rights reserved. | Founded in 2021</div>
            <div className="flex gap-4">
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>150+ Projects Delivered</span>
              <span>•</span>
              <span>98% Client Satisfaction</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
