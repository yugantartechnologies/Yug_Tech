import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import ServiceBookingModal from "../components/ServiceBookingModal";
import {
  Megaphone,
  Search,
  Globe,
  MapPin,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  PhoneCall,
  Layers
} from "lucide-react";

export default function DigitalMarketingAhmedabad() {
  const [bookingModal, setBookingModal] = useState({ isOpen: false, service: null });

  const corePillars = [
    {
      title: "Search Engine Optimization (SEO)",
      slug: "/seo-services-ahmedabad",
      description: "Improve organic visibility on Google for commercial and local searches without recurring ad costs.",
      icon: <Search className="w-6 h-6 text-orange-500" />,
      accentBg: "bg-orange-500/10",
      accentBorder: "hover:border-orange-400",
      features: [
        "Technical website audits & crawl fixes",
        "High-intent keyword research",
        "On-page content optimization",
        "Local SEO & Google Maps optimization"
      ]
    },
    {
      title: "Custom Website Development",
      slug: "/website-development-ahmedabad",
      description: "A fast, responsive, and trustworthy digital storefront engineered to convert visitors into qualified inquiries.",
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      accentBg: "bg-blue-500/10",
      accentBorder: "hover:border-blue-400",
      features: [
        "Mobile-first responsive design",
        "Fast loading times & clean code",
        "Conversion-focused landing pages",
        "Technical SEO foundations built-in"
      ]
    },
    {
      title: "Social Media Marketing (SMM)",
      slug: "/social-media-marketing-ahmedabad",
      description: "Build authentic brand awareness, community trust, and multi-channel engagement across Meta, Instagram, and LinkedIn.",
      icon: <Megaphone className="w-6 h-6 text-sky-500" />,
      accentBg: "bg-sky-500/10",
      accentBorder: "hover:border-sky-400",
      features: [
        "Content calendar & monthly planning",
        "High-quality graphic design & creatives",
        "Audience-focused brand messaging",
        "Multi-platform campaign analysis"
      ]
    },
    {
      title: "Google Business Profile & Local Growth",
      slug: "/google-business-profile-management-ahmedabad",
      description: "Dominate local map pack results in Ahmedabad and capture nearby customers actively seeking your services.",
      icon: <MapPin className="w-6 h-6 text-emerald-500" />,
      accentBg: "bg-emerald-500/10",
      accentBorder: "hover:border-emerald-400",
      features: [
        "Profile setup & complete audit",
        "Localized category & bio optimization",
        "Review management strategies",
        "Regular local posts & photo updates"
      ]
    }
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Discovery & Market Research",
      desc: "We analyze your business model, target market in Ahmedabad and beyond, key competitors, and historical website performance."
    },
    {
      step: "02",
      title: "Channel & Funnel Strategy",
      desc: "Rather than treating channels in silos, we architect an integrated pipeline where SEO, website design, and social media reinforce each other."
    },
    {
      step: "03",
      title: "Implementation & Execution",
      desc: "Our team implements technical website enhancements, on-page optimization, content production schedules, and localized profile signals."
    },
    {
      step: "04",
      title: "Performance Monitoring & Reporting",
      desc: "We monitor Search Console impressions, organic positions, and user inquiries, delivering transparent monthly insights without jargon."
    }
  ];

  const faqItems = [
    {
      question: "Why should my business invest in an integrated digital marketing strategy?",
      answer: "Digital channels work best in synergy. SEO drives high-intent organic visitors, your website provides the speed and credibility needed to convert them into inquiries, and social media builds the continuous brand proof and trust that shortens decision cycles."
    },
    {
      question: "How long does digital marketing take to produce measurable results?",
      answer: "Website improvements and local profile optimizations can drive enhanced engagement within weeks. Sustainable SEO rankings generally mature over 3 to 6 months of steady optimization. We establish realistic benchmarks from day one."
    },
    {
      question: "Does Yugantar Technologies handle both B2B and B2C digital marketing?",
      answer: "Yes. We tailor our strategy to your audience. For B2B businesses, we emphasize technical SEO, high-value service pages, and LinkedIn positioning. For consumer-facing businesses, we emphasize local SEO, Google Maps presence, and visual social campaigns."
    },
    {
      question: "How do we get started with your digital marketing services?",
      answer: "Reach out through our inquiry form or call +91 9054372690. We will schedule a direct consultation, review your current digital assets, and propose a transparent scope of work aligned with your commercial goals."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-sky-50/70 via-slate-50 to-white border-b border-slate-200/60">
        <div className="absolute top-10 left-1/4 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-5 right-1/4 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              Digital Marketing Solutions Ahmedabad
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 tracking-tight">
              Digital Marketing Services <br />
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-orange-500 bg-clip-text text-transparent">
                for Growing Businesses
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Explore digital marketing solutions from Yugantar Technologies, including SEO, website development, and social media marketing in Ahmedabad. We build unified digital strategies designed to attract target audiences, improve online visibility, and generate qualified commercial enquiries.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => setBookingModal({ isOpen: true, service: { title: "Digital Marketing Strategy", icon: "📈" } })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-sky-500 to-orange-500 text-white font-bold px-7 py-3.5 rounded-xl transition duration-300 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1 cursor-pointer"
              >
                Discuss Your Marketing Goals
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="tel:9054372690"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-sky-400 bg-white hover:bg-sky-50/50 text-slate-800 px-6 py-3.5 rounded-xl font-semibold transition duration-300 shadow-sm hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4 text-sky-600" />
                Call: +91 9054372690
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            {/* Visual Marketing Engine Mockup */}
            <div className="w-full max-w-md bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-sky-400" />
                  <span className="font-bold text-sm">Unified Marketing Engine</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Active Ecosystem
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">
                      SEO
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Organic Search Discovery</p>
                      <p className="text-[11px] text-slate-400">High-intent client searchers</p>
                    </div>
                  </div>
                  <span className="text-xs text-orange-400 font-bold">Inbound</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                      WEB
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Corporate Website Conversion</p>
                      <p className="text-[11px] text-slate-400">Fast, credible digital experience</p>
                    </div>
                  </div>
                  <span className="text-xs text-blue-400 font-bold">Conversion</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                      SMM
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Brand Social Authority</p>
                      <p className="text-[11px] text-slate-400">Active community engagement</p>
                    </div>
                  </div>
                  <span className="text-xs text-sky-400 font-bold">Retention</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-center">
                <p className="text-xs text-slate-400">
                  Data-backed strategies crafted in <span className="text-white font-semibold">Ahmedabad, Gujarat</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Pillars */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <span className="text-blue-600 font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Digital Marketing Pillars
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              We focus on the essential pillars that genuinely build commercial value, discoverability, and sales pipeline for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`group bg-white border border-slate-200/90 ${pillar.accentBorder} p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-2xl ${pillar.accentBg}`}>
                      {pillar.icon}
                    </div>
                    <Link
                      to={pillar.slug}
                      className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition"
                    >
                      <span>Explore Service Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2.5 text-xs font-medium text-slate-700">
                    {pillar.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={pillar.slug}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900"
                  >
                    View detailed specifications →
                  </Link>
                  <button
                    onClick={() => setBookingModal({ isOpen: true, service: { title: pillar.title, icon: "📊" } })}
                    className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-blue-600 transition"
                  >
                    Get Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50/80 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <span className="text-orange-600 font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold">
              Execution Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How We Work with Clients
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Our structured approach ensures complete alignment from initial audit through ongoing iteration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((m, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black font-mono text-orange-500/80 mb-3 block">
                    {m.step}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mb-2">{m.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQSection items={faqItems} schemaId="digital-marketing-faq-schema" themeColor="blue" isLight={true} />

      {/* Bottom CTA Block */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-14 text-center border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
          
          <div className="max-w-xl mx-auto space-y-6 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Accelerate Your Digital Growth?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Connect with Yugantar Technologies in Memnagar, Ahmedabad. Let us evaluate your current presence and map a strategy that produces tangible commercial enquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <button
                onClick={() => setBookingModal({ isOpen: true, service: { title: "Digital Marketing Overview", icon: "🚀" } })}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 cursor-pointer"
              >
                Book Strategy Consultation
              </button>
              <Link
                to="/contact"
                className="border border-slate-700 hover:border-slate-500 bg-slate-900/80 hover:bg-slate-900 text-white font-semibold px-8 py-3.5 rounded-xl transition duration-300 inline-flex items-center justify-center"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <ServiceBookingModal
        service={bookingModal.service}
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ isOpen: false, service: null })}
      />

      <Footer />
    </div>
  );
}

