import React, { useEffect } from "react";
import {
  X,
  CheckCircle2,
  Clock,
  Layers,
  Zap,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  PhoneCall
} from "lucide-react";

export const SERVICE_DETAILS_DATA = {
  "Website Development": {
    subtitle: "Custom High-Performance Websites & Web Applications",
    overview:
      "We engineer fast, responsive, and SEO-friendly websites using modern frameworks like React, Next.js, Node.js, and WordPress designed to convert visitors into paying clients.",
    deliverables: [
      "Custom Modern UI/UX Responsive Design",
      "Fast Page Speed & Core Web Vitals Optimization",
      "Lead Capture Forms & CRM Integration",
      "SEO-Friendly HTML Structure & Meta Tags",
      "SSL Certificate & Domain Setup Guidance",
      "1-Year Complimentary Maintenance & Support"
    ],
    techStack: ["React.js", "Next.js", "TailwindCSS", "Node.js", "WordPress", "MongoDB", "AWS"],
    timeline: "7 - 14 Business Days",
    idealFor: "Startups, Local Businesses, E-Commerce Brands & Enterprises",
    detailPath: "/website-development-ahmedabad"
  },
  "SEO Services": {
    subtitle: "Rank #1 on Google & Drive Free Organic Traffic",
    overview:
      "Dominate local and national search results with technical SEO audits, keyword optimization, high-authority backlink building, and content strategies engineered for Ahmedabad and global markets.",
    deliverables: [
      "Complete On-Page & Technical SEO Audit",
      "Local Ahmedabad Map Pack Ranking Optimization",
      "High-Authority DA 50+ Backlink Building",
      "Keyword Research & Competitor Gap Analysis",
      "Google Search Console & Analytics GA4 Setup",
      "Monthly Ranking & Traffic Performance Reports"
    ],
    techStack: ["Ahrefs", "SEMrush", "Google Search Console", "Google Analytics 4", "Screaming Frog"],
    timeline: "Monthly Ongoing Campaign (Visible results in 30-90 days)",
    idealFor: "Service Providers, Local Businesses, B2B Companies & E-Commerce Stores",
    detailPath: "/seo-services-ahmedabad"
  },
  "Social Media Marketing (SMM)": {
    subtitle: "Build Brand Authority & Engage Millions on Social Media",
    overview:
      "Engage your target audience with high-converting Instagram reels, Facebook ads, LinkedIn corporate strategies, and interactive community management that turns followers into loyal customers.",
    deliverables: [
      "Monthly Creative Content Calendar & Strategy",
      "Custom Graphic Design & Reel Video Editing",
      "Meta Ads (FB & Insta) Campaign Setup",
      "Page Management & Active Community Engagement",
      "Targeted Audience Growth & Lead Generation",
      "Monthly Growth Tracking & ROI Analytics Reports"
    ],
    techStack: ["Instagram", "Facebook", "LinkedIn", "Meta Ads Manager", "Canva", "CapCut"],
    timeline: "Monthly Recurring Management",
    idealFor: "Fashion & Retail, Real Estate, Education, D2C Brands & Tech Startups",
    detailPath: "/social-media-marketing-ahmedabad"
  },
  "Performance Marketing": {
    subtitle: "High-ROI Paid Advertising & Instant Qualified Leads",
    overview:
      "Stop wasting budget on low-quality clicks. We build high-converting PPC funnels on Google Search, Meta Ads, and LinkedIn engineered to deliver verified leads at the lowest Cost Per Lead (CPL).",
    deliverables: [
      "Google Search, Display & Shopping PPC Ads",
      "Meta (FB/Insta) Conversion & Retargeting Ads",
      "High-Converting Landing Page Optimization",
      "Conversion Tracking Pixel & CAPI Setup",
      "A/B Split Testing of Creatives & Headlines",
      "Daily Budget Monitoring & CPL Reduction"
    ],
    techStack: ["Google Ads", "Meta Ads Manager", "LinkedIn Ads", "Google Tag Manager", "Hotjar"],
    timeline: "Setup in 3-5 Days + Daily Optimization",
    idealFor: "Real Estate, Education, Healthcare, B2B Lead Generation & E-Commerce",
    detailPath: "/performance-marketing-ahmedabad"
  },
  "Custom CRM & ERP Systems": {
    subtitle: "Automate Business Operations, Sales Pipelines & Team Workflows",
    overview:
      "Tailor-made Customer Relationship Management and Enterprise Resource Planning software designed to streamline lead assignment, sales tracking, inventory, invoicing, and staff hierarchy.",
    deliverables: [
      "Automated Lead Ingestion & Team Distribution",
      "Visual Drag-and-Drop Sales Pipeline Dashboard",
      "Automated WhatsApp & Email Customer Follow-ups",
      "Staff Attendance, Payroll & Access Control",
      "Inventory, Billing & Invoice Automation",
      "Real-Time Executive Analytics & Export Reports"
    ],
    techStack: ["React.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Docker", "TailwindCSS"],
    timeline: "14 - 30 Business Days",
    idealFor: "Manufacturing, Real Estate Agencies, Service Firms & Educational Institutions"
  },
  "E-Commerce Development": {
    subtitle: "High-Converting Online Stores with Payment Gateway Integration",
    overview:
      "Build a fast, secure, and scalable online storefront equipped with smooth shopping cart flows, automatic inventory tracking, coupon engines, and instant payment gateways.",
    deliverables: [
      "Custom Mobile-Optimized Store Front",
      "Razorpay, Cashfree & Stripe Gateway Integration",
      "Product Catalog & Inventory Management System",
      "Order Tracking & Automatic Email Notifications",
      "Coupon Code & Discount Engine Setup",
      "Abandoned Cart Recovery Automation"
    ],
    techStack: ["Shopify", "WooCommerce", "MERN Stack", "Next.js", "Stripe", "Razorpay"],
    timeline: "10 - 20 Business Days",
    idealFor: "D2C Brands, Retail Stores, Wholesalers & Digital Product Merchants"
  },
  "Mobile App Development": {
    subtitle: "Native & Cross-Platform iOS & Android Applications",
    overview:
      "Production-grade mobile applications built with Flutter or React Native that deliver smooth 60fps performance, offline capability, push notifications, and intuitive UI/UX.",
    deliverables: [
      "Android & iOS Apps from Single Codebase",
      "Custom UI/UX Wireframing & Interactive Prototype",
      "Firebase & Backend REST API Integration",
      "Push Notifications & In-App Messaging Engine",
      "Google Play Store & Apple App Store Deployment",
      "6 Months Free Technical Maintenance & Updates"
    ],
    techStack: ["Flutter", "React Native", "Dart", "Swift", "Kotlin", "Firebase", "REST APIs"],
    timeline: "20 - 45 Business Days",
    idealFor: "On-Demand Services, Delivery Apps, Healthcare, Social Platforms & FinTech"
  },
  "Game Development": {
    subtitle: "2D & 3D Interactive Web & Mobile Games",
    overview:
      "Engaging, high-performance 2D and 3D games for web browsers, Android, and iOS built with Unity and HTML5 engines, complete with multiplayer support and monetization systems.",
    deliverables: [
      "2D & 3D Game Level Design & Custom Art Assets",
      "Smooth Physics & Character Animation Engine",
      "In-App Purchases & Ad Monetization Integration",
      "Cross-Platform Deployment (Android, iOS, WebGL)",
      "Multiplayer Leaderboard & User Profile Backend",
      "Performance Optimization for Budget Devices"
    ],
    techStack: ["Unity 3D", "C#", "HTML5", "PhaserJS", "Three.js", "Blender", "Node.js Sockets"],
    timeline: "25 - 60 Business Days",
    idealFor: "Gaming Startups, Educational Gamification & Promotional Brand Games"
  },
  "Google Business Profile (GBP)": {
    subtitle: "Top Google Map Ranking & Local Search Lead Capture",
    overview:
      "Optimize your Google Map listing to appear at the very top when local customers search for your services in Ahmedabad, driving direct phone calls, map directions, and foot traffic.",
    deliverables: [
      "Google Business Profile Setup & Instant Verification",
      "Local Geo-Targeted Keyword & Bio Optimization",
      "Weekly High-Quality Business Posts & Photo Uploads",
      "Customer Review Management & AI Response Setup",
      "Competitor Map Audit & Spam Profile Clean-up",
      "Monthly Call Tracking & Map Impression Analytics"
    ],
    techStack: ["Google Maps API", "Geo-Tagging Tools", "Local Citation Builders", "GMB Inspector"],
    timeline: "Instant Setup + Monthly Ranking Optimization",
    idealFor: "Local Shops, Clinics & Doctors, Restaurants, Service Agencies & Real Estate",
    detailPath: "/google-business-profile-management-ahmedabad"
  },
  "Custom Software & API Integration": {
    subtitle: "Scalable Enterprise Software & Third-Party System Integration",
    overview:
      "Custom software engineering solutions, REST/GraphQL API development, legacy system modernization, and secure cloud microservices built for complex business requirements.",
    deliverables: [
      "Custom Backend RESTful & GraphQL API Architecture",
      "Secure Third-Party Integration (Payment, SMS, WhatsApp, CRM)",
      "Database Optimization & Migration (SQL/NoSQL)",
      "Automated Background Workers & Job Queues",
      "Microservices Architecture & Cloud Security Audit",
      "Detailed Technical API Documentation (Swagger / Postman)"
    ],
    techStack: ["Node.js", "Python", "Java Spring Boot", "PostgreSQL", "MongoDB", "Docker", "AWS"],
    timeline: "14 - 40 Business Days",
    idealFor: "Tech Enterprises, FinTech, Logistics & Custom SaaS Platforms"
  }
};

export default function ServiceDetailModal({ service, isOpen, onClose, onBookNow }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const title = service.title || "IT Service";
  const details = SERVICE_DETAILS_DATA[title] || {
    subtitle: service.description || "Professional Technology & Digital Solutions",
    overview: service.description || "Engineered for scaling modern business operations with high precision.",
    deliverables: service.features || [
      "High-Performance Architecture",
      "Mobile Responsive & Fast UI",
      "24/7 Ongoing Technical Support"
    ],
    techStack: ["React", "Node.js", "Cloud APIs", "SEO Best Practices"],
    timeline: "Custom Business Timeline",
    idealFor: "Growing Businesses & Enterprises",
    detailPath: service.detailPath
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-3 sm:p-5 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto border border-slate-200 text-slate-900 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 w-9 h-9 rounded-full flex items-center justify-center transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 pr-8">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/40 text-sky-400 flex items-center justify-center shrink-0">
              {service.icon || <ShieldCheck className="w-7 h-7" />}
            </div>
            <div>
              <span className="text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider bg-sky-950/80 px-3 py-1 rounded-md border border-sky-800/80 inline-block mb-2">
                PRODUCTION SERVICE DETAILS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                {title}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 font-medium">
                {details.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
          
          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-sky-600" />
              Service Overview
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal bg-slate-50 border border-slate-200/80 p-4 sm:p-5 rounded-2xl">
              {details.overview}
            </p>
          </div>

          {/* Key Deliverables & Features */}
          <div>
            <h3 className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              What You Get (Deliverables)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {details.deliverables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white border border-slate-200/90 p-3.5 rounded-xl shadow-2xs hover:border-sky-300 transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span className="text-slate-800 text-xs sm:text-sm font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Tools */}
          <div>
            <h3 className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-sky-600" />
              Technologies & Frameworks Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {details.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-sky-50 border border-sky-200 text-sky-800 rounded-xl text-xs font-semibold shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline & Target Audience Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-mono font-semibold uppercase mb-1">
                <Clock className="w-4 h-4 text-sky-600" />
                Estimated Delivery
              </div>
              <p className="text-slate-900 font-bold text-sm sm:text-base">
                {details.timeline}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-mono font-semibold uppercase mb-1">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                Best Suited For
              </div>
              <p className="text-slate-900 font-bold text-sm sm:text-base">
                {details.idealFor}
              </p>
            </div>
          </div>

        </div>

        {/* Footer Action Buttons */}
        <div className="bg-slate-50 border-t border-slate-200 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          
          {details.detailPath ? (
            <a
              href={details.detailPath}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 bg-white border border-sky-200 hover:border-sky-300 px-5 py-3 rounded-xl transition shadow-2xs"
            >
              Open Dedicated Page
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <a
              href="tel:+919054372690"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 px-5 py-3 rounded-xl transition shadow-2xs"
            >
              <PhoneCall className="w-4 h-4 text-sky-600" />
              Call: +91 9054372690
            </a>
          )}

          <button
            onClick={() => {
              onClose();
              if (onBookNow) onBookNow(service);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold px-7 py-3 rounded-xl shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition text-sm cursor-pointer"
          >
            Book This Service
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </div>
  );
}
