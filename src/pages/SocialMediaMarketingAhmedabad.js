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
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Send,
  MessageSquare
} from "lucide-react";

export default function SocialMediaMarketingAhmedabad() {
  const [activeTab, setActiveTab] = useState(0);

  const offerings = [
    {
      title: "Social Media Management (SMM)",
      description: "Manage accounts on Instagram, Facebook, and LinkedIn with continuous visual scheduling, matching your brand layout guidelines.",
      icon: <Users className="w-8 h-8 text-sky-500" />,
      features: ["Custom post planning", "Captions & hashtag audits", "Continuous content calendars", "Multi-profile synchronization"]
    },
    {
      title: "Creative Content Design & Copywriting",
      description: "Design premium corporate graphics, visual banners, and write brand copy that connects with your target audience.",
      icon: <PenTool className="w-8 h-8 text-blue-500" />,
      features: ["Custom graphic grids", "Corporate branding templates", "High-conversion caption writing", "Carousel post structures"]
    },
    {
      title: "Targeted Paid Ad Campaigns",
      description: "Create and optimize Meta Ads (Facebook & Instagram) and LinkedIn ads, targeting relevant demographics and search profiles.",
      icon: <Target className="w-8 h-8 text-sky-500" />,
      features: ["Demographic & location filters", "Lead capture forms setup", "Pixel tracking configuration", "Daily budget optimization"]
    },
    {
      title: "Vertical Reels & Video Marketing",
      description: "Script, storyboard, and edit viral short-form videos and vertical reels designed to capture organic reach.",
      icon: <Video className="w-8 h-8 text-blue-500" />,
      features: ["Reels & Shorts editing", "Scriptboarding & hooks research", "Trending audio selection", "Call-to-action prompts"]
    },
    {
      title: "Customer Engagement & Support",
      description: "Monitor message requests, respond to comments, and manage brand sentiment to convert fans into direct buyers.",
      icon: <MessageSquare className="w-8 h-8 text-sky-500" />,
      features: ["Comment reply scripts", "Direct message filters", "Review monitoring logs", "Customer feedback synchronization"]
    },
    {
      title: "Influencer Campaigns & Outreach",
      description: "Connect with local influencers in Ahmedabad to expand brand reach and run promotional events.",
      icon: <Sparkles className="w-8 h-8 text-blue-500" />,
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        {/* Glow visuals */}
        <div className="absolute top-10 left-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-5 right-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.05),transparent_45%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              SMM Services Ahmedabad
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight">
              Build Brand Buzz <br />
              With Strategic <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
                Social Marketing
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Grow followers, build brand authority, and acquire target sales leads. We handle content creation calendars, graphic banner design, video reels editing, and Meta/LinkedIn paid campaign management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-sky-600 hover:from-blue-600 hover:to-sky-700 text-white font-bold px-6 py-3.5 rounded-xl transition duration-300 shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
              >
                Get Social Audit Proposal
                <ArrowRight className="w-4 h-4 text-white" />
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
              <div className="absolute -inset-px bg-gradient-to-tr from-blue-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition duration-700 rounded-2xl" />
              <div className="flex items-center gap-2 mb-4 border-b border-slate-850 pb-3">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-500 ml-2 font-mono">social_manager.py</span>
              </div>
              <div className="font-mono text-xs text-sky-300/95 space-y-2 leading-relaxed">
                <p><span className="text-pink-500">class</span> <span className="text-blue-400">SocialCampaign</span>:</p>
                <p className="pl-4"><span className="text-pink-500">def</span> <span className="text-emerald-400">scale_accounts</span>(self):</p>
                <p className="pl-8 text-slate-400"># Ads & Organic Campaigns</p>
                <p className="pl-8">self.meta_ads = <span className="text-amber-300">"Lead_Generation_Leads"</span></p>
                <p className="pl-8">self.graphics = <span className="text-amber-300">"Branded_Visual_Posts"</span></p>
                <p className="pl-8">self.video_reels = <span className="text-amber-300">"Viral_Short_Reels"</span></p>
                <p className="pl-8">self.engagement = <span className="text-amber-300">"Message_Replies_100"</span></p>
                <p className="pl-8"><span className="text-pink-500">return</span> <span className="text-emerald-400">"High_Brand_Authority"</span></p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-850 flex items-center justify-between text-xs text-slate-500">
                <span>Facebook + Instagram</span>
                <span className="text-blue-500 animate-pulse">● Ads Operational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid ("What We Offer") */}
      <section className="py-24 px-6 bg-slate-900/30 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-blue-400 font-mono text-sm tracking-wider uppercase">Our Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Social Media Campaigns
            </h2>
            <p className="text-slate-450 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              We manage all dimensions of brand storytelling, graphic grids, and paid target advertising formats.
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
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {o.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {o.description}
                  </p>
                  
                  <ul className="space-y-2 pt-2 text-xs text-slate-350">
                    {o.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-850">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-xs text-blue-400 font-bold hover:text-blue-300 group-hover:gap-2 transition-all"
                  >
                    Request consultation
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
            <span className="text-blue-400 font-mono text-sm tracking-wider uppercase">Our Execution Flow</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Social Media Strategy Roadmap
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
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
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                    activeTab === i
                      ? "bg-slate-900 border-blue-500/40 text-white shadow-xl shadow-blue-500/5"
                      : "bg-slate-900/30 border-slate-850 hover:bg-slate-900/50 hover:border-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-bold font-mono px-2.5 py-1 rounded bg-slate-950 border ${
                      activeTab === i ? "border-blue-500/30 text-blue-400" : "border-slate-800 text-slate-500"
                    }`}>
                      {step.number}
                    </span>
                    <span className="font-bold text-sm sm:text-base">{step.title}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    activeTab === i ? "text-blue-400 translate-x-1" : "text-slate-600 group-hover:translate-x-0.5"
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
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">Stage Details</span>
                <h3 className="text-2xl font-bold text-white">{processSteps[activeTab].title}</h3>
                <p className="text-slate-350 text-base leading-relaxed">
                  {processSteps[activeTab].detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid / Platforms */}
      <section className="py-20 px-6 bg-slate-900/20 border-t border-b border-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-12 tracking-tight">
            Our Marketing & Design Platforms
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(toolsets).map(([category, items], i) => (
              <div key={i} className="group premium-card-hover bg-slate-900/60 border border-slate-850 p-6 rounded-2xl space-y-4">
                <h3 className="font-bold text-blue-450 border-b border-slate-800 pb-2 text-sm uppercase tracking-wider font-mono">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1.5 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-medium hover:border-blue-500/30 transition cursor-default"
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
              Why Partner with Yugantar for SMM
            </h2>
            <p className="text-slate-450 text-sm sm:text-base max-w-xl mx-auto">
              We design target social campaigns that increase visibility and conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Targeted Paid Lead Ads", desc: "We design conversion-optimized forms that capture active sales prospects on Meta and LinkedIn.", icon: <Send className="w-6 h-6 text-sky-400" /> },
              { title: "Brand Cohesive Aesthetics", desc: "Our graphic designers maintain consistent colors, layouts, and typography across all post grids.", icon: <PenTool className="w-6 h-6 text-blue-450" /> },
              { title: "Cost-Per-Lead Audits", desc: "We review CTR and CPL stats weekly to ensure maximum return on advertising budgets.", icon: <Megaphone className="w-6 h-6 text-sky-400" /> },
              { title: "Content Verification", desc: "We share draft calendar proposals so you can review copy and visual updates before launch.", icon: <Shield className="w-6 h-6 text-blue-500" /> }
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
      <FAQSection items={faqItems} schemaId="smm-services-faq-schema" themeColor="blue" />

      {/* Bottom CTA Block */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 sm:p-16 text-center border border-slate-850 shadow-2xl">
          <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-blue-500/5 blur-3xl" />
          
          <div className="max-w-xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Accelerate Your Social Channels?
            </h2>
            <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
              Connect with social media marketing strategists in Navrangpura, Ahmedabad. Let us deploy paid campaigns and creative content assets to build active leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                to="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-7 py-3 rounded-xl transition duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20"
              >
                Request Custom Campaign Plan
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
