import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import { 
  Megaphone, 
  PenTool, 
  Target, 
  Video, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Send,
  MessageSquare
} from "lucide-react";

import { 
  FaInstagram, 
  FaPlay 
} from "react-icons/fa";

function SmmHeroMockup() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
      caption: "1.4M+ Viral Reel Views & Instagram Ads"
    },
    {
      url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop",
      caption: "Social Media Content Calendar & Grids"
    },
    {
      url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
      caption: "Meta Paid Ads & 4.8x ROAS Dashboard"
    },
    {
      url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop",
      caption: "Target Inbound Lead Acquisition"
    },
    {
      url: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop",
      caption: "Influencer & Brand Perception Scaling"
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
      <div className="absolute -inset-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />

      {/* Floating Top Badge */}
      <div className="absolute -top-4 -right-2 z-30 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-2">
        <FaPlay className="w-3 h-3 text-white fill-white" />
        <span>1.4M+ Viral Reel Views</span>
      </div>

      {/* Floating Bottom Badge */}
      <div className="absolute -bottom-4 -left-2 z-30 bg-slate-900/90 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xl border border-slate-700 backdrop-blur-md flex items-center gap-2">
        <span className="text-emerald-400 font-extrabold">4.8x ROAS</span>
        <span className="text-slate-300">Meta Paid Campaigns</span>
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
            <FaInstagram className="text-pink-400 w-3 h-3" />
            <span className="font-bold">SMM Viral Engine</span>
          </div>
          <span className="text-[11px] font-bold text-pink-400 bg-pink-950 px-2.5 py-0.5 rounded-full border border-pink-800">
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
          <div className="absolute bottom-4 left-4 z-10 bg-slate-950/90 border border-pink-400/30 text-white px-3.5 py-1.5 rounded-xl backdrop-blur-md text-xs font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
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
          <span className="text-[11px] text-slate-400 font-mono">Live SMM Portfolio</span>
          <div className="flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "bg-pink-400 w-5" : "bg-slate-800 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SocialMediaMarketingAhmedabad() {
  const [activeTab, setActiveTab] = useState(0);

  const offerings = [
    {
      title: "Social Media Management (SMM)",
      description: "Manage accounts on Instagram, Facebook, and LinkedIn with continuous visual scheduling, matching your brand layout guidelines.",
      icon: <Users className="w-7 h-7" />,
      features: ["Custom post planning", "Captions & hashtag audits", "Continuous content calendars", "Multi-profile synchronization"]
    },
    {
      title: "Creative Content Design & Copywriting",
      description: "Design premium corporate graphics, visual banners, and write brand copy that connects with your target audience.",
      icon: <PenTool className="w-7 h-7" />,
      features: ["Custom graphic grids", "Corporate branding templates", "High-conversion caption writing", "Carousel post structures"]
    },
    {
      title: "Targeted Paid Ad Campaigns",
      description: "Create and optimize Meta Ads (Facebook & Instagram) and LinkedIn ads, targeting relevant demographics and search profiles.",
      icon: <Target className="w-7 h-7" />,
      features: ["Demographic & location filters", "Lead capture forms setup", "Pixel tracking configuration", "Daily budget optimization"]
    },
    {
      title: "Vertical Reels & Video Marketing",
      description: "Script, storyboard, and edit viral short-form videos and vertical reels designed to capture organic reach.",
      icon: <Video className="w-7 h-7" />,
      features: ["Reels & Shorts editing", "Scriptboarding & hooks research", "Trending audio selection", "Call-to-action prompts"]
    },
    {
      title: "Customer Engagement & Support",
      description: "Monitor message requests, respond to comments, and manage brand sentiment to convert fans into direct buyers.",
      icon: <MessageSquare className="w-7 h-7" />,
      features: ["Comment reply scripts", "Direct message filters", "Review monitoring logs", "Customer feedback synchronization"]
    },
    {
      title: "Influencer Campaigns & Outreach",
      description: "Connect with local influencers in Ahmedabad to expand brand reach and run promotional events.",
      icon: <Megaphone className="w-7 h-7" />,
      features: ["Influencer selection audits", "Outreach & negotiations", "Content approval grids", "Campaign tracking logs"]
    }
  ];

  const processSteps = [
    {
      title: "Competitor & Avatar Research",
      number: "01",
      detail: "We audit your social footprints, analyze competitive handles, and build a targeted buyer persona representing your prospects."
    },
    {
      title: "Style & Calendar Drafting",
      number: "02",
      detail: "We design a custom visual theme layout, map typography schemes, and draft a 30-day post calendar detailing copy and visual concepts."
    },
    {
      title: "Graphic & Video Editing",
      number: "03",
      detail: "Our creative designers build visual banners and compile short reels using professional transitions and sync audio tracks."
    },
    {
      title: "Ad Setup & Deploying",
      number: "04",
      detail: "We map target audience parameters in Ads Manager, configure tracking pixels, set up lead forms, and deploy daily ad budgets."
    },
    {
      title: "Weekly Review & Scale",
      number: "05",
      detail: "We monitor cost-per-lead (CPL) statistics, identify top-performing graphics, and optimize ad metrics to increase conversion rates."
    }
  ];

  const toolsets = {
    "Ad Dashboards": ["Meta Ads Manager", "LinkedIn Campaign Manager", "Google Ads Panel", "TikTok Ads Hub"],
    "Creative Tools": ["Canva Pro Platform", "Adobe Creative Cloud", "Figma Design Tool", "CapCut / Premiere Pro"],
    "Publish & Monitor": ["Buffer Scheduler", "Hootsuite Console", "Meta Business Suite", "Analytics Logs"]
  };

  const faqItems = [
    {
      question: "Which social media platforms are ideal for my business?",
      answer: "B2C operations (such as fashion, food, retail, and academy courses) generate higher engagement on Instagram and Facebook. B2B systems (like IT services, logistics, and manufacturing) benefit from LinkedIn updates, structured posts, and B2B paid campaigns."
    },
    {
      question: "How often will you publish posts on our profiles?",
      answer: "Usually, we publish 3 to 5 custom posts per week, featuring single images, carousels, and vertical reels. We customize posting frequencies based on your package structure and target reach goals."
    },
    {
      question: "What is the difference between organic updates and paid ads?",
      answer: "Organic updates build brand credibility, share corporate values, and engage your current audience. Paid ad campaigns bypass algorithmic delays, projecting your services directly to target demographics to capture active inquiries."
    },
    {
      question: "Do you create scripts and edit videos for Instagram Reels?",
      answer: "Yes, absolutely. We research viral hooks, write video scripts, select matching sounds, and edit reels to ensure maximum retention and engagement."
    },
    {
      question: "Do you provide monthly reports on ad performance and lead generation?",
      answer: "Yes. We track key performance indicators such as total impressions, click-through rates (CTR), cost-per-click (CPC), and cost-per-lead (CPL). These details are compiled into a simple PDF report every month."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-blue-50/70 via-sky-50/30 to-white border-b border-slate-200/60">
        {/* Glow visuals */}
        <div className="absolute top-10 left-1/4 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute bottom-5 right-1/4 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              SMM Services Ahmedabad
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 tracking-tight">
              Build Brand Buzz <br />
              With Strategic <br />
              <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                Social Marketing
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Grow followers, build brand authority, and acquire target sales leads. We handle content creation calendars, graphic banner design, video reels editing, and Meta/LinkedIn paid campaign management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white font-bold px-7 py-3.5 rounded-xl transition duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-1"
              >
                Get Social Audit Proposal
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <a
                href="tel:9054372690"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-blue-400 bg-white hover:bg-blue-50/50 text-slate-800 px-6 py-3.5 rounded-xl font-semibold transition duration-300 shadow-sm hover:-translate-y-0.5"
              >
                Call: 9054372690
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <SmmHeroMockup />
          </div>
        </div>
      </section>

      {/* Services Grid ("What We Offer") */}
      <section className="py-24 px-6 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-blue-600 font-mono text-sm tracking-wider uppercase font-semibold">Our Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Professional Social Media Campaigns
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              We manage all dimensions of brand storytelling, graphic grids, and paid target advertising formats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((o, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-slate-200/90 p-8 rounded-3xl flex flex-col justify-between shadow-md shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-400/60 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Hover Gradient Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl group-hover:bg-blue-200/60 transition-all duration-500 -mr-10 -mt-10 pointer-events-none" />

                <div className="space-y-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-sky-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-500">
                    {o.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {o.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {o.description}
                  </p>
                  
                  <ul className="space-y-2.5 pt-2 text-xs font-medium text-slate-600">
                    {o.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 relative z-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs text-blue-600 font-bold hover:text-blue-700 group-hover:translate-x-1.5 transition-all"
                  >
                    Request Consultation
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
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
            <span className="text-blue-600 font-mono text-sm tracking-wider uppercase font-semibold">Our Execution Flow</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Social Media Strategy Roadmap
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              We translate conceptual goals into active engagements following a structured calendar roadmap.
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
                      ? "bg-white border-2 border-blue-500 text-slate-900 shadow-xl shadow-blue-500/10 scale-[1.02]"
                      : "bg-white/80 border border-slate-200/90 hover:bg-white hover:border-slate-300 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-bold font-mono px-3 py-1 rounded-lg border ${
                      activeTab === i 
                        ? "border-blue-300 bg-blue-50 text-blue-700" 
                        : "border-slate-200 bg-slate-100 text-slate-500"
                    }`}>
                      {step.number}
                    </span>
                    <span className="font-bold text-sm sm:text-base">{step.title}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    activeTab === i ? "text-blue-600 translate-x-1" : "text-slate-400 group-hover:translate-x-0.5"
                  }`} />
                </button>
              ))}
            </div>

            {/* Right detail card */}
            <div className="lg:col-span-7 bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 p-8 sm:p-10 rounded-3xl relative overflow-hidden min-h-[260px] flex flex-col justify-center border-l-4 border-l-blue-500">
              <div className="absolute top-[-30px] right-[-30px] text-[130px] font-extrabold font-mono text-slate-100 select-none pointer-events-none">
                {processSteps[activeTab].number}
              </div>
              <div className="space-y-4 relative z-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-mono bg-blue-50 px-3 py-1 rounded-md border border-blue-100 inline-block w-fit">
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

      {/* Tech Stack Grid / Platforms */}
      <section className="py-20 px-6 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-12 tracking-tight">
            Our Marketing & Design Platforms
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(toolsets).map(([category, items], i) => (
              <div 
                key={i} 
                className="group bg-slate-50/80 border border-slate-200/90 p-7 rounded-3xl space-y-4 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 hover:bg-white hover:-translate-y-1.5 transition-all duration-300"
              >
                <h3 className="font-bold text-blue-600 border-b border-slate-200 pb-3 text-xs uppercase tracking-wider font-mono">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs rounded-xl bg-white border border-slate-200/90 text-slate-700 font-medium shadow-xs transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 cursor-default"
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
              Why Partner with Yugantar for SMM
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              We design target social campaigns that increase visibility and conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Targeted Paid Lead Ads", desc: "We design conversion-optimized forms that capture active sales prospects on Meta and LinkedIn.", icon: <Send className="w-6 h-6 text-sky-600" /> },
              { title: "Brand Cohesive Aesthetics", desc: "Our graphic designers maintain consistent colors, layouts, and typography across all post grids.", icon: <PenTool className="w-6 h-6 text-blue-600" /> },
              { title: "Cost-Per-Lead Audits", desc: "We review CTR and CPL stats weekly to ensure maximum return on advertising budgets.", icon: <Megaphone className="w-6 h-6 text-sky-600" /> },
              { title: "Content Verification", desc: "We share draft calendar proposals so you can review copy and visual updates before launch.", icon: <Shield className="w-6 h-6 text-blue-600" /> }
            ].map((benefit, i) => (
              <div 
                key={i} 
                className="group bg-white border border-slate-200/90 p-7 rounded-3xl shadow-md shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-300 hover:-translate-y-2 transition-all duration-400 space-y-4"
              >
                <div className="p-3.5 bg-blue-50 rounded-2xl w-fit border border-blue-100 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
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
      <FAQSection items={faqItems} schemaId="smm-services-faq-schema" themeColor="blue" isLight={true} />

      {/* Bottom CTA Block */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 rounded-3xl p-8 sm:p-14 text-center border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
          
          <div className="max-w-xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Accelerate Your Social Channels?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Connect with social media marketing strategists in Ahmedabad. Let us deploy paid campaigns and creative content assets to build active leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Request Custom Campaign Plan
              </Link>
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

      <Footer />
    </div>
  );
}
