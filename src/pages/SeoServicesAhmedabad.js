import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
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

export default function SeoServicesAhmedabad() {
  const [activeTab, setActiveTab] = useState(0);

  const offerings = [
    {
      title: "Keyword Research & Content Strategy",
      description: "Map search terms with high purchase intent, analyze competitor rankings, and estimate search volumes to structure your roadmap.",
      icon: <Compass className="w-8 h-8 text-sky-500" />,
      features: ["Search intent grouping", "Competitor gap audits", "Local term optimization", "Search volume analysis"]
    },
    {
      title: "Technical SEO Audits & Fixes",
      description: "Repair crawl errors, clean site redirection paths, configure sitemaps, and structure metadata tags so search engine crawlers index your domain correctly.",
      icon: <Cpu className="w-8 h-8 text-sky-500" />,
      features: ["Sitemap & robots file mapping", "Crawl budget optimizations", "SSL & canonical setups", "Structured schema markup"]
    },
    {
      title: "On-Page Content Optimization",
      description: "Optimize title headings, page header layouts, semantic elements, image sizes, and internal linking grids for organic search performance.",
      icon: <Search className="w-8 h-8 text-orange-500" />,
      features: ["Title & Meta description tags", "H1-H6 structural layouts", "Keyword density balance", "Image alt attribute adjustments"]
    },
    {
      title: "High-Quality Link Building",
      description: "Acquire authority backlinks from verified domains to boost your domain authority, ranking capability, and referral traffic metrics.",
      icon: <LinkIcon className="w-8 h-8 text-orange-500" />,
      features: ["Niche guest post placement", "High-authority citations", "Broken link restorations", "Clean white-hat sourcing"]
    },
    {
      title: "Local SEO & Google Maps Marketing",
      description: "Optimize your Google Business Profile (GBP) listing, accumulate localized reviews, and dominate local map searches in the Ahmedabad region.",
      icon: <MapPin className="w-8 h-8 text-orange-500" />,
      features: ["GBP optimization sheet", "Local citation synchronization", "Regional review management", "Surrounding area target map"]
    },
    {
      title: "SEO Analytics & Search Console Audits",
      description: "Configure Google Analytics GA4, monitor key search queries, audit conversion pathways, and receive weekly keyword rank logs.",
      icon: <LineChart className="w-8 h-8 text-sky-500" />,
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        {/* Glow visuals */}
        <div className="absolute top-10 left-1/4 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-5 right-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.05),transparent_45%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              SEO Services Ahmedabad
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight">
              Grow Organic Traffic <br />
              With Professional <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                SEO Services
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Rank higher on Google, capture qualified search leads, and scale your brand visibility. We manage technical optimizations, sitemaps, on-page keywords, guest blog posts, and localized Google Maps GBP listings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition duration-300 shadow-lg shadow-orange-500/20 hover:-translate-y-0.5"
              >
                Request Free SEO Audit
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>
              <a
                href="tel:7859982605"
                className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 hover:bg-slate-900/50 text-white px-6 py-3.5 rounded-xl font-semibold transition duration-300"
              >
                Consult Consultant: 7859982605
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            {/* Visual web mockup code container */}
            <div className="w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-2xl relative group overflow-hidden">
              <div className="absolute -inset-px bg-gradient-to-tr from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition duration-700 rounded-2xl" />
              <div className="flex items-center gap-2 mb-4 border-b border-slate-850 pb-3">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-500 ml-2 font-mono">search_optimizer.py</span>
              </div>
              <div className="font-mono text-xs text-orange-300/95 space-y-2 leading-relaxed">
                <p><span className="text-pink-500">class</span> <span className="text-blue-400">SEOEngine</span>:</p>
                <p className="pl-4"><span className="text-pink-500">def</span> <span className="text-emerald-400">optimize_domain</span>(self):</p>
                <p className="pl-8 text-slate-400"># White-Hat SEO Operations</p>
                <p className="pl-8">self.keywords = <span className="text-amber-300">"High_Purchase_Intent"</span></p>
                <p className="pl-8">self.on_page = <span className="text-amber-300">"Semantic_HTML_Setup"</span></p>
                <p className="pl-8">self.backlinks = <span className="text-amber-300">"Authority_Referrals"</span></p>
                <p className="pl-8">self.page_speed = <span className="text-amber-300">"Core_Web_Vitals_100"</span></p>
                <p className="pl-8"><span className="text-pink-500">return</span> <span className="text-emerald-400">"Rank_Google_Page_1"</span></p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-850 flex items-center justify-between text-xs text-slate-500">
                <span>Google Console + GA4</span>
                <span className="text-orange-500 animate-pulse">● Audit Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid ("What We Offer") */}
      <section className="py-24 px-6 bg-slate-900/30 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-orange-400 font-mono text-sm tracking-wider uppercase">Our Scope</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Data-Driven SEO Offerings
            </h2>
            <p className="text-slate-450 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              We manage your entire SEO pipeline to ensure rankings translate into inquiries and sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((o, idx) => (
              <div
                key={idx}
                className="group premium-card-hover bg-slate-900/60 border border-slate-850 p-8 rounded-2xl flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="inline-flex p-3 rounded-xl bg-slate-950 border border-slate-800 transition-all duration-300 group-hover:scale-110">
                    {o.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {o.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {o.description}
                  </p>
                  
                  <ul className="space-y-2 pt-2 text-xs text-slate-350">
                    {o.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-850">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-xs text-orange-400 font-bold hover:text-orange-300 group-hover:gap-2 transition-all"
                  >
                    Request Audit Review
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs / Process steps */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-orange-400 font-mono text-sm tracking-wider uppercase">Our Pipeline</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our 5-Stage SEO Process
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
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
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                    activeTab === i
                      ? "bg-slate-900 border-orange-500/40 text-white shadow-xl shadow-orange-500/5"
                      : "bg-slate-900/30 border-slate-850 hover:bg-slate-900/50 hover:border-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-bold font-mono px-2.5 py-1 rounded bg-slate-950 border ${
                      activeTab === i ? "border-orange-500/30 text-orange-400" : "border-slate-800 text-slate-500"
                    }`}>
                      {step.number}
                    </span>
                    <span className="font-bold text-sm sm:text-base">{step.title}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    activeTab === i ? "text-orange-400 translate-x-1" : "text-slate-600 group-hover:translate-x-0.5"
                  }`} />
                </button>
              ))}
            </div>

            {/* Right detail card */}
            <div className="lg:col-span-7 bg-slate-900/50 border border-slate-850 p-8 rounded-2xl relative overflow-hidden min-h-[250px] flex flex-col justify-center">
              <div className="absolute top-[-30px] right-[-30px] text-[120px] font-extrabold font-mono text-slate-800/10 select-none">
                {processSteps[activeTab].number}
              </div>
              <div className="space-y-4 relative z-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 font-mono">Stage Details</span>
                <h3 className="text-2xl font-bold text-white">{processSteps[activeTab].title}</h3>
                <p className="text-slate-350 text-base leading-relaxed">
                  {processSteps[activeTab].detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid / Tools */}
      <section className="py-20 px-6 bg-slate-900/20 border-t border-b border-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-12 tracking-tight">
            Our Optimization Tools Suite
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(toolsSuite).map(([category, items], i) => (
              <div key={i} className="group premium-card-hover bg-slate-900/60 border border-slate-850 p-6 rounded-2xl space-y-4">
                <h3 className="font-bold text-orange-400 border-b border-slate-800 pb-2 text-sm uppercase tracking-wider font-mono">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1.5 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-medium hover:border-orange-500/30 transition cursor-default"
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
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Why Partner with Yugantar for SEO
            </h2>
            <p className="text-slate-450 text-sm sm:text-base max-w-xl mx-auto">
              We focus on building search prominence that drives organic phone inquiries and business leads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Ethical White-Hat Practice", desc: "No spam techniques or link manipulation. We align with Google guidelines for lasting index presence.", icon: <Shield className="w-6 h-6 text-orange-400" /> },
              { title: "Mobile & Core Vitals Audit", desc: "We coordinate with code specialists to ensure page rendering meets search standards.", icon: <Smartphone className="w-6 h-6 text-sky-400" /> },
              { title: "Transparent Position Logs", desc: "Access comprehensive rank updates, search impression histories, and referral logs monthly.", icon: <Activity className="w-6 h-6 text-sky-400" /> },
              { title: "Lead-Focused Keywords", desc: "We prioritize transactional phrases that connect directly with prospective inquiries.", icon: <Zap className="w-6 h-6 text-orange-400" /> }
            ].map((benefit, i) => (
              <div key={i} className="p-6 bg-slate-900/40 border border-slate-850 rounded-xl space-y-4">
                <div className="p-3 bg-slate-950 rounded-xl w-fit border border-slate-800">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-white text-base">{benefit.title}</h3>
                <p className="text-slate-450 text-xs sm:text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQSection items={faqItems} schemaId="seo-services-faq-schema" themeColor="orange" />

      {/* Bottom CTA Block */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-orange-950 rounded-3xl p-8 sm:p-16 text-center border border-slate-850 shadow-2xl">
          <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-orange-500/5 blur-3xl" />
          
          <div className="max-w-xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Dominating Local Search Queries?
            </h2>
            <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
              Connect with SEO professionals in Navrangpura, Vijay Cross Road. Let us construct an optimization pipeline that channels rankings into active prospects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold px-7 py-3 rounded-xl transition duration-300 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20"
              >
                Request Free Audit Proposal
              </Link>
              <a
                href="tel:7859982605"
                className="border border-slate-700 hover:border-slate-500 bg-slate-950 hover:bg-slate-900 text-white font-semibold px-7 py-3 rounded-xl transition duration-300"
              >
                Call: 7859982605
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
