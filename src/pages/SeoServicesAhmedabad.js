import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import ServiceBookingModal from "../components/ServiceBookingModal";
import { 
  Search, 
  Compass, 
  Link as LinkIcon, 
  MapPin, 
  LineChart, 
  Cpu, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  Smartphone,
  Activity
} from "lucide-react";
import { FaGoogle, FaStar } from "react-icons/fa";

function SeoHeroMockup() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1200&auto=format&fit=crop",
      caption: "Google Rank #1 SERP Analytics"
    },
    {
      url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
      caption: "+345.8% Organic Traffic Surge"
    },
    {
      url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
      caption: "Local GBP Google Maps #1 Pack"
    },
    {
      url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop",
      caption: "High-Intent Keyword Dominance"
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      caption: "DA 72+ Authority Backlinks Audit"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full max-w-xl relative group text-left font-sans select-none my-auto">
      {/* Ambient Glow */}
      <div className="absolute -inset-3 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-600 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />

      {/* Floating Top Badge */}
      <div className="absolute -top-4 -right-2 z-30 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-2">
        <FaStar className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
        <span>Google Position #1 Guaranteed</span>
      </div>

      {/* Floating Bottom Badge */}
      <div className="absolute -bottom-4 -left-2 z-30 bg-slate-900/90 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xl border border-slate-700 backdrop-blur-md flex items-center gap-2">
        <span className="text-emerald-400 font-extrabold">+345.8%</span>
        <span className="text-slate-300">Organic Traffic Surge</span>
      </div>

      {/* Main Glass Frame */}
      <div className="relative bg-slate-950 border border-slate-800 rounded-[2.25rem] p-5 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between mb-3 bg-slate-900 p-2.5 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <div className="bg-slate-800/90 px-4 py-1 rounded-xl text-xs text-slate-200 font-mono flex items-center gap-1.5">
            <FaGoogle className="text-orange-400 w-3 h-3" />
            <span className="font-bold">Google Rank Intelligence</span>
          </div>
          <span className="text-[11px] font-bold text-orange-400 bg-orange-950 px-2.5 py-0.5 rounded-full border border-orange-800">
            {currentSlide + 1} / {images.length}
          </span>
        </div>

        {/* Clean Image Carousel Box (No text clutter!) */}
        <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden border border-slate-800 group/slide">
          <img
            key={currentSlide}
            src={images[currentSlide].url}
            alt={images[currentSlide].caption}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          {/* Minimal Caption Chip */}
          <div className="absolute bottom-4 left-4 z-10 bg-slate-950/90 border border-orange-400/30 text-white px-3.5 py-1.5 rounded-xl backdrop-blur-md text-xs font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span>{images[currentSlide].caption}</span>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/70 border border-white/20 text-white flex items-center justify-center text-sm font-bold opacity-0 group-hover/slide:opacity-100 transition"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/70 border border-white/20 text-white flex items-center justify-center text-sm font-bold opacity-0 group-hover/slide:opacity-100 transition"
          >
            ›
          </button>
        </div>

        {/* Bottom Slide Dots Only */}
        <div className="flex items-center justify-between mt-3 px-1">
          <span className="text-[11px] text-slate-400 font-mono">Live SEO Showcase</span>
          <div className="flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "bg-orange-400 w-5" : "bg-slate-800 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SeoServicesAhmedabad() {
  const [activeTab, setActiveTab] = useState(0);

  const offerings = [
    {
      title: "Keyword Research & Content Strategy",
      description: "Map search terms with high purchase intent, analyze competitor rankings, and estimate search volumes to structure your roadmap.",
      icon: <Compass className="w-7 h-7" />,
      features: ["Search intent grouping", "Competitor gap audits", "Local term optimization", "Search volume analysis"]
    },
    {
      title: "Technical SEO Audits & Fixes",
      description: "Repair crawl errors, clean site redirection paths, configure sitemaps, and structure metadata tags so search engine crawlers index your domain correctly.",
      icon: <Cpu className="w-7 h-7" />,
      features: ["Sitemap & robots file mapping", "Crawl budget optimizations", "SSL & canonical setups", "Structured schema markup"]
    },
    {
      title: "On-Page Content Optimization",
      description: "Optimize title headings, page header layouts, semantic elements, image sizes, and internal linking grids for organic search performance.",
      icon: <Search className="w-7 h-7" />,
      features: ["Title & Meta description tags", "H1-H6 structural layouts", "Keyword density balance", "Image alt attribute adjustments"]
    },
    {
      title: "High-Quality Link Building",
      description: "Acquire authority backlinks from verified domains to boost your domain authority, ranking capability, and referral traffic metrics.",
      icon: <LinkIcon className="w-7 h-7" />,
      features: ["Niche guest post placement", "High-authority citations", "Broken link restorations", "Clean white-hat sourcing"]
    },
    {
      title: "Local SEO & Google Maps Marketing",
      description: "Optimize your Google Business Profile (GBP) listing, accumulate localized reviews, and dominate local map searches in the Ahmedabad region.",
      icon: <MapPin className="w-7 h-7" />,
      features: ["GBP optimization sheet", "Local citation synchronization", "Regional review management", "Surrounding area target map"]
    },
    {
      title: "SEO Analytics & Search Console Audits",
      description: "Configure Google Analytics GA4, monitor key search queries, audit conversion pathways, and receive weekly keyword rank logs.",
      icon: <LineChart className="w-7 h-7" />,
      features: ["GA4 custom event logs", "Search Console tracking", "Monthly performance report", "Keyword position audit"]
    }
  ];

  const processSteps = [
    {
      title: "Audit & Domain Research",
      number: "01",
      detail: "We audit your domain ranking health, check indexation issues, compile competitors' keyword logs, and review overall site speed parameters."
    },
    {
      title: "Technical Fix Execution",
      number: "02",
      detail: "Our technical experts resolve redirect chains, fix sitemap structures, resolve duplicate meta tags, and configure structured schema scripts."
    },
    {
      title: "On-Page Copy Optimizing",
      number: "03",
      detail: "We coordinate with writers to adjust page titles, heading structures, keyword density, internal links, and format content for readability."
    },
    {
      title: "Citation & Backlink Sourcing",
      number: "04",
      detail: "We establish citations in regional business sheets, request backlink shares on authority sites, and build high-quality context redirects."
    },
    {
      title: "Rank Monitoring & Iteration",
      number: "05",
      detail: "We check rank position shifts in Search Console, analyze monthly organic pageviews, and optimize metadata based on actual search updates."
    }
  ];

  const toolsSuite = {
    "Search Platforms": ["Google Search Console", "Google Analytics GA4", "Google Keyword Planner", "Google Business Profile"],
    "Analysis Tools": ["Ahrefs Suite", "SEMrush Platform", "Moz Pro Analytics", "Screaming Frog Crawler"],
    "On-Page Metrics": ["Google PageSpeed Insights", "Schema Validator Tool", "Structured Data Test", "Yoast / RankMath API"]
  };

  const faqItems = [
    {
      question: "How long does it take to see positive ranking results from SEO?",
      answer: "Usually, noticeable ranking shifts appear within 3 to 6 months. Low-competition local search keywords can show results faster (within 60 days), while highly competitive national search phrases require continuous optimization, link building, and content audits."
    },
    {
      question: "Do you guarantee #1 rankings on Google search pages?",
      answer: "No reputable agency guarantees a specific #1 rank due to constant search algorithm updates and competitive maneuvers. However, we guarantee standard white-hat optimization practices, increase in domain health score, and solid growth in relevant search impressions and leads."
    },
    {
      question: "What is the difference between On-Page and Off-Page SEO?",
      answer: "On-Page SEO involves changes made directly on your website (such as speed tuning, title metadata edits, heading optimizations, and content updates). Off-Page SEO focuses on building signals outside your site (like guest posting, maps citations, brand shares, and backlinks)."
    },
    {
      question: "Do you configure Google Business Profile (Maps) for local SEO?",
      answer: "Yes, absolutely. Local SEO is a core part of our packages. We claim and configure your GBP profile, align address details, synchronize localized citations, and optimize map tags to ensure you rank when customers search in Ahmedabad."
    },
    {
      question: "Is blog post creation and copywriting included in your SEO service?",
      answer: "Yes. Our packages feature content marketing plans. Our SEO copywriters research high-interest blog subjects, write structured search-friendly pages, and incorporate meta headers mapped to target search traffic."
    }
  ];

  const [bookingModal, setBookingModal] = useState({ isOpen: false, service: null });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-orange-50/70 via-amber-50/30 to-white border-b border-slate-200/60">
        {/* Glow visuals */}
        <div className="absolute top-10 left-1/4 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute bottom-5 right-1/4 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              SEO Services Ahmedabad
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 tracking-tight">
              Grow Organic Traffic <br />
              With Professional <br />
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                SEO Services
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Rank higher on Google, capture qualified search leads, and scale your brand visibility. We manage technical optimizations, sitemaps, on-page keywords, guest blog posts, and localized Google Maps GBP listings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setBookingModal({ isOpen: true, service: { title: "SEO Services", icon: "🔍" } })}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-7 py-3.5 rounded-xl transition duration-300 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-1 cursor-pointer"
              >
                Request Free SEO Audit
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <a
                href="tel:9054372690"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-orange-400 bg-white hover:bg-orange-50/50 text-slate-800 px-6 py-3.5 rounded-xl font-semibold transition duration-300 shadow-sm hover:-translate-y-0.5"
              >
                Call: 9054372690
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <SeoHeroMockup />
          </div>
        </div>
      </section>

      {/* Services Grid ("What We Offer") */}
      <section className="py-24 px-6 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-orange-600 font-mono text-sm tracking-wider uppercase font-semibold">Our Scope</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Data-Driven SEO Offerings
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              We manage your entire SEO pipeline to ensure rankings translate into inquiries and sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((o, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-slate-200/90 p-8 rounded-3xl flex flex-col justify-between shadow-md shadow-slate-200/50 hover:shadow-2xl hover:shadow-orange-500/15 hover:border-orange-400/60 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Hover Gradient Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/40 rounded-full blur-2xl group-hover:bg-orange-200/60 transition-all duration-500 -mr-10 -mt-10 pointer-events-none" />

                <div className="space-y-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-500">
                    {o.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {o.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {o.description}
                  </p>
                  
                  <ul className="space-y-2.5 pt-2 text-xs font-medium text-slate-600">
                    {o.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 relative z-10">
                  <button
                    type="button"
                    onClick={() => setBookingModal({ isOpen: true, service: { title: `SEO - ${o.title}`, icon: "🔍" } })}
                    className="inline-flex items-center justify-between w-full text-xs text-orange-700 font-bold hover:text-orange-900 bg-orange-50 hover:bg-orange-100 px-4 py-2.5 rounded-xl border border-orange-200/80 transition-all cursor-pointer"
                  >
                    <span>Request Audit Review</span>
                    <ArrowRight className="w-3.5 h-3.5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs / Process steps */}
      <section className="py-24 px-6 bg-slate-50/80 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-orange-600 font-mono text-sm tracking-wider uppercase font-semibold">Our Pipeline</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 5-Stage SEO Process
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              We follow a strict, data-supported optimization loop to scale organic positions month-over-month.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left selector */}
            <div className="lg:col-span-5 space-y-3">
              {processSteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    activeTab === i
                      ? "bg-white border-2 border-orange-500 text-slate-900 shadow-xl shadow-orange-500/10 scale-[1.02]"
                      : "bg-white/80 border border-slate-200/90 hover:bg-white hover:border-slate-300 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-bold font-mono px-3 py-1 rounded-lg border ${
                      activeTab === i 
                        ? "border-orange-300 bg-orange-50 text-orange-700" 
                        : "border-slate-200 bg-slate-100 text-slate-500"
                    }`}>
                      {step.number}
                    </span>
                    <span className="font-bold text-sm sm:text-base">{step.title}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    activeTab === i ? "text-orange-600 translate-x-1" : "text-slate-400 group-hover:translate-x-0.5"
                  }`} />
                </button>
              ))}
            </div>

            {/* Right detail card */}
            <div className="lg:col-span-7 bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 p-8 sm:p-10 rounded-3xl relative overflow-hidden min-h-[260px] flex flex-col justify-center border-l-4 border-l-orange-500">
              <div className="absolute top-[-30px] right-[-30px] text-[130px] font-extrabold font-mono text-slate-100 select-none pointer-events-none">
                {processSteps[activeTab].number}
              </div>
              <div className="space-y-4 relative z-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 font-mono bg-orange-50 px-3 py-1 rounded-md border border-orange-100 inline-block w-fit">
                  Stage Details
                </span>
                <h3 className="text-2xl font-bold text-slate-900">{processSteps[activeTab].title}</h3>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  {processSteps[activeTab].detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid / Tools */}
      <section className="py-20 px-6 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-12 tracking-tight">
            Our Optimization Tools Suite
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(toolsSuite).map(([category, items], i) => (
              <div 
                key={i} 
                className="group bg-slate-50/80 border border-slate-200/90 p-7 rounded-3xl space-y-4 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 hover:bg-white hover:-translate-y-1.5 transition-all duration-300"
              >
                <h3 className="font-bold text-orange-600 border-b border-slate-200 pb-3 text-xs uppercase tracking-wider font-mono">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs rounded-xl bg-white border border-slate-200/90 text-slate-700 font-medium shadow-xs transition-all duration-300 hover:scale-105 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits of Yugantar */}
      <section className="py-24 px-6 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Partner with Yugantar for SEO
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              We focus on building search prominence that drives organic phone inquiries and business leads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Ethical White-Hat Practice", desc: "No spam techniques or link manipulation. We align with Google guidelines for lasting index presence.", icon: <Shield className="w-6 h-6 text-orange-600" /> },
              { title: "Mobile & Core Vitals Audit", desc: "We coordinate with code specialists to ensure page rendering meets search standards.", icon: <Smartphone className="w-6 h-6 text-sky-600" /> },
              { title: "Transparent Position Logs", desc: "Access comprehensive rank updates, search impression histories, and referral logs monthly.", icon: <Activity className="w-6 h-6 text-sky-600" /> },
              { title: "Lead-Focused Keywords", desc: "We prioritize transactional phrases that connect directly with prospective inquiries.", icon: <Zap className="w-6 h-6 text-orange-600" /> }
            ].map((benefit, i) => (
              <div 
                key={i} 
                className="group bg-white border border-slate-200/90 p-7 rounded-3xl shadow-md shadow-slate-200/40 hover:shadow-2xl hover:shadow-orange-500/15 hover:border-orange-300 hover:-translate-y-2 transition-all duration-400 space-y-4"
              >
                <div className="p-3.5 bg-orange-50 rounded-2xl w-fit border border-orange-100 text-orange-600 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-base">{benefit.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQSection items={faqItems} schemaId="seo-services-faq-schema" themeColor="orange" isLight={true} />

      {/* Bottom CTA Block */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-orange-950 to-amber-950 rounded-3xl p-8 sm:p-14 text-center border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />
          
          <div className="max-w-xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Dominating Local Search Queries?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Connect with SEO professionals in Ahmedabad. Let us construct an optimization pipeline that channels rankings into active prospects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <button
                onClick={() => setBookingModal({ isOpen: true, service: { title: "SEO Services", icon: "🔍" } })}
                className="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 cursor-pointer"
              >
                Request Free Audit Proposal
              </button>
              <a
                href="tel:9054372690"
                className="border border-slate-700 hover:border-slate-500 bg-slate-900/80 hover:bg-slate-900 text-white font-semibold px-8 py-3.5 rounded-xl transition duration-300"
              >
                Call: 9054372690
              </a>
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
