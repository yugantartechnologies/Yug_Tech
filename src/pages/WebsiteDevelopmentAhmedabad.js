import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import { 
  Globe, 
  Code2, 
  ShoppingBag, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  Cpu, 
  Laptop, 
  Smartphone,
  LayoutTemplate
} from "lucide-react";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaSass, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaPhp, 
  FaLaravel, 
  FaWordpress, 
  FaShopify,
  FaServer,
  FaJs
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiExpress, 
  SiDjango, 
  SiMongodb, 
  SiMysql, 
  SiPostgresql, 
  SiFirebase 
} from "react-icons/si";

export default function WebsiteDevelopmentAhmedabad() {
  const [activeTab, setActiveTab] = useState(0);

  const offerings = [
    {
      title: "Landing Pages & Single-Page Apps (SPAs)",
      description: "High-converting, high-performance landing pages optimized for advertising campaigns and lead acquisition in Ahmedabad.",
      icon: <LayoutTemplate className="w-8 h-8 text-sky-500" />,
      features: ["Conversion-focused layout", "A/B testing compatibility", "Lead capture forms", "Analytics integration"]
    },
    {
      title: "Custom Corporate Websites",
      description: "Elegant, multi-page business websites designed to showcase your corporate identity, services, and build trust with clients.",
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      features: ["Custom typography & design", "About, Services, Team structure", "Interactive Maps & Careers", "SEO optimized architecture"]
    },
    {
      title: "E-Commerce Portals & Online Stores",
      description: "Robust, secure, and scalable online storefronts equipped with seamless cart management, checkout flows, and payment pathways.",
      icon: <ShoppingBag className="w-8 h-8 text-orange-500" />,
      features: ["Unlimited product catalogs", "Secure payment gateway integration", "Order & inventory tracking", "Client account dashboards"]
    },
    {
      title: "Custom Web Applications & Portals",
      description: "Complex cloud-based web applications, internal CRM/ERP software, and customized portals designed for your internal workflows.",
      icon: <Code2 className="w-8 h-8 text-emerald-500" />,
      features: ["Role-based access controls", "Robust databases (MongoDB/MySQL)", "Third-party API integrations", "Data export & reporting charts"]
    },
    {
      title: "CMS Website Development",
      description: "Manage your website content effortlessly with custom WordPress, Shopify, or Headless CMS setups.",
      icon: <Laptop className="w-8 h-8 text-amber-500" />,
      features: ["No-code content management", "Custom theme creation", "Plugin/App integration", "Training & documentation support"]
    },
    {
      title: "Speed Tuning & Redesign Services",
      description: "Migrate your legacy website to modern framework architectures while upgrading pages for lightning-fast speeds and SEO metrics.",
      icon: <Zap className="w-8 h-8 text-rose-500" />,
      features: ["Page speed optimization (Core Web Vitals)", "Framework modernizations", "Responsive design layout fix", "Security audits & HTTPS configuration"]
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Planning",
      number: "01",
      detail: "We coordinate on your design layout, analyze competitor landscapes in Ahmedabad, prepare comprehensive wireframes, and choose the ideal technology architecture for scalability."
    },
    {
      title: "UI/UX Figma Design",
      number: "02",
      detail: "Our creative designers build interactive Figma mockups, establishing typography systems, colors, responsive guidelines, and interactive micro-animations."
    },
    {
      title: "Frontend & Backend Coding",
      number: "03",
      detail: "Our engineers write semantic HTML, styled components, secure API integrations, and robust database queries matching production-ready specifications."
    },
    {
      title: "Quality Assurance & Testing",
      number: "04",
      detail: "We test code compatibility across browsers, check speed metrics on Google PageSpeed, test checkout flows, search forms, and confirm security certificates are active."
    },
    {
      title: "Launch & Support",
      number: "05",
      detail: "We deploy the website onto live servers, direct domain paths, index the pages on Google Search Console, and set up continuous monitoring scripts."
    }
  ];

  const techStack = {
    Frontend: [
      { name: "HTML5", icon: <FaHtml5 className="w-5 h-5 text-orange-500" />, hoverColor: "hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/35" },
      { name: "CSS3 / Sass", icon: <div className="flex gap-1"><FaCss3Alt className="text-blue-500 w-5 h-5" /><FaSass className="text-pink-500 w-5 h-5" /></div>, hoverColor: "hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/35" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-cyan-400" />, hoverColor: "hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-400/35" },
      { name: "JavaScript", icon: <FaJs className="w-5 h-5 text-yellow-400" />, hoverColor: "hover:bg-yellow-500/10 hover:text-yellow-300 hover:border-yellow-400/35" },
      { name: "React.js", icon: <FaReact className="w-5 h-5 text-sky-400 animate-spin-slow" />, hoverColor: "hover:bg-sky-500/10 hover:text-sky-300 hover:border-sky-400/35" },
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-white" />, hoverColor: "hover:bg-white/10 hover:text-white hover:border-white/35" }
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs className="w-5 h-5 text-green-500" />, hoverColor: "hover:bg-green-500/10 hover:text-green-400 hover:border-green-500/35" },
      { name: "Express.js", icon: <SiExpress className="w-5 h-5 text-slate-300" />, hoverColor: "hover:bg-slate-500/10 hover:text-slate-200 hover:border-slate-400/35" },
      { name: "Python", icon: <FaPython className="w-5 h-5 text-yellow-500" />, hoverColor: "hover:bg-yellow-500/10 hover:text-yellow-400 hover:border-yellow-500/35" },
      { name: "Django", icon: <SiDjango className="w-5 h-5 text-emerald-600" />, hoverColor: "hover:bg-emerald-600/10 hover:text-emerald-400 hover:border-emerald-600/35" },
      { name: "PHP / Laravel", icon: <div className="flex gap-1"><FaPhp className="text-indigo-400 w-5 h-5" /><FaLaravel className="text-red-500 w-5 h-5" /></div>, hoverColor: "hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/35" }
    ],
    Databases: [
      { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-emerald-500" />, hoverColor: "hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/35" },
      { name: "MySQL", icon: <SiMysql className="w-5 h-5 text-blue-400" />, hoverColor: "hover:bg-blue-400/10 hover:text-blue-300 hover:border-blue-400/35" },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5 text-sky-600" />, hoverColor: "hover:bg-sky-600/10 hover:text-sky-400 hover:border-sky-600/35" },
      { name: "Firebase", icon: <SiFirebase className="w-5 h-5 text-amber-500" />, hoverColor: "hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/35" }
    ],
    Platforms: [
      { name: "WordPress", icon: <FaWordpress className="w-5 h-5 text-blue-500" />, hoverColor: "hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/35" },
      { name: "Shopify", icon: <FaShopify className="w-5 h-5 text-emerald-500" />, hoverColor: "hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/35" },
      { name: "Headless CMS", icon: <FaServer className="w-5 h-5 text-indigo-400" />, hoverColor: "hover:bg-indigo-500/10 hover:text-indigo-300 hover:border-indigo-400/35" }
    ]
  };

  const faqItems = [
    {
      question: "How long does it take to develop a standard business website?",
      answer: "A custom high-converting landing page takes 4 to 7 days, multi-page business websites typically take 2 to 3 weeks, and advanced custom web applications or e-commerce portals can take 4 to 8 weeks depending on custom features and database scopes."
    },
    {
      question: "Will my website display correctly on tablets and mobile screens?",
      answer: "Yes, 100%. All website platforms developed by Yugantar Technologies are built with mobile-first CSS grids. We test responsiveness across various viewport widths, ensuring excellent usability on smartphones, tablets, and wide monitors."
    },
    {
      question: "Which technologies do you recommend for custom development?",
      answer: "We strongly recommend the MERN stack (MongoDB, Express, React, Node.js) or Next.js for high-speed dynamic applications because of their secure architecture, quick rendering, and SEO performance. For content-focused platforms, WordPress or Headless CMS integrations are suggested."
    },
    {
      question: "Do you offer post-launch support and database maintenance?",
      answer: "Yes, we provide flexible support packages covering monthly backups, security patches, content amendments, database optimizations, speed checks, and technical server migrations."
    },
    {
      question: "Is search engine optimization (SEO) included in your code?",
      answer: "Yes. We implement technical on-page SEO. This includes semantic HTML layouts, meta tag headers, robot files, sitemap generation, structured schema markup, and image optimization to ensure search indexers read your site quickly."
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              IT Services Ahmedabad
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight">
              Professional <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Website Development
              </span> <br />
              in Ahmedabad
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              We design, build, and optimize fast, SEO-friendly, and custom-styled web applications. Grow your online presence with conversion-focused corporate websites, custom CMS themes, and powerful e-commerce portals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3.5 rounded-xl font-bold transition duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:7859982605"
                className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 hover:bg-slate-900/50 text-white px-6 py-3.5 rounded-xl font-semibold transition duration-300"
              >
                Call Support: 7859982605
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            {/* Visual web mockup code container */}
            <div className="w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-2xl relative group overflow-hidden">
              <div className="absolute -inset-px bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-700 rounded-2xl" />
              <div className="flex items-center gap-2 mb-4 border-b border-slate-850 pb-3">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-500 ml-2 font-mono">web_development.js</span>
              </div>
              <div className="font-mono text-xs text-sky-300/95 space-y-2 leading-relaxed">
                <p><span className="text-pink-500">import</span> React <span className="text-pink-500">from</span> <span className="text-emerald-400">'react'</span>;</p>
                <p><span className="text-pink-500">const</span> YuganterWebDev = () =&gt; &#123;</p>
                <p className="pl-4 text-slate-400">{"// Custom High-Performance Solutions"}</p>
                <p className="pl-4"><span className="text-pink-500">return</span> (</p>
                <p className="pl-8 text-sky-400">&lt;<span className="text-blue-400">Website</span></p>
                <p className="pl-12 text-slate-350">speed=<span className="text-amber-300">"100ms"</span></p>
                <p className="pl-12 text-slate-350">seo=<span className="text-amber-300">"FullyOptimized"</span></p>
                <p className="pl-12 text-slate-350">responsive=<span className="text-amber-300">&#123;true&#125;</span></p>
                <p className="pl-12 text-slate-350">ux=<span className="text-amber-300">"PremiumDesign"</span></p>
                <p className="pl-8 text-sky-400">/&gt;</p>
                <p className="pl-4">);</p>
                <p>&#125;;</p>
                <p><span className="text-pink-500">export default</span> YuganterWebDev;</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-850 flex items-center justify-between text-xs text-slate-500">
                <span>React.js + Tailwind CSS</span>
                <span className="text-sky-500 animate-pulse">● Production Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid ("What We Offer") */}
      <section className="py-24 px-6 bg-slate-900/30 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-sky-400 font-mono text-sm tracking-wider uppercase">Our Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Website Solutions Built for Modern Business
            </h2>
            <p className="text-slate-450 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              We cover all scopes of website and application engineering, ensuring high performance, responsive layout, and absolute security standards.
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
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {o.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {o.description}
                  </p>
                  
                  <ul className="space-y-2 pt-2 text-xs text-slate-350">
                    {o.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-850">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-xs text-sky-400 font-bold hover:text-sky-300 group-hover:gap-2 transition-all"
                  >
                    Inquire For Details
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
            <span className="text-sky-400 font-mono text-sm tracking-wider uppercase">Our Method</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Website Development Process
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              We translate conceptual parameters into high-performing websites following standard pipeline steps.
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
                      ? "bg-slate-900 border-sky-500/40 text-white shadow-xl shadow-sky-500/5"
                      : "bg-slate-900/30 border-slate-850 hover:bg-slate-900/50 hover:border-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-bold font-mono px-2.5 py-1 rounded bg-slate-950 border ${
                      activeTab === i ? "border-sky-500/30 text-sky-400" : "border-slate-800 text-slate-500"
                    }`}>
                      {step.number}
                    </span>
                    <span className="font-bold text-sm sm:text-base">{step.title}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    activeTab === i ? "text-sky-400 translate-x-1" : "text-slate-600 group-hover:translate-x-0.5"
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
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">Step Details</span>
                <h3 className="text-2xl font-bold text-white">{processSteps[activeTab].title}</h3>
                <p className="text-slate-350 text-base leading-relaxed">
                  {processSteps[activeTab].detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 px-6 bg-slate-900/20 border-t border-b border-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-12 tracking-tight">
            Our Technology Stack
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, items], i) => (
              <div 
                key={i} 
                className="group premium-card-hover bg-slate-900/60 border border-slate-850 p-6 rounded-2xl space-y-5 transition-all duration-300"
              >
                <h3 className="font-bold text-white border-b border-slate-800 pb-2.5 text-sm uppercase tracking-wider font-mono flex justify-between items-center">
                  <span>{category}</span>
                  <span className="text-[10px] text-sky-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-sky-500/10 px-2 py-0.5 rounded-md">
                    Tech Suite
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-850 text-slate-300 font-medium text-xs transition-all duration-300 hover:scale-105 cursor-pointer ${item.hoverColor}`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
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
              Why Partner with Yugantar Technologies
            </h2>
            <p className="text-slate-450 text-sm sm:text-base max-w-xl mx-auto">
              We design web platforms focusing on speed metrics, organic indexing, and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "SEO-Friendly Structures", desc: "Correct header hierarchy and structured metadata help search bots catalog pages quickly.", icon: <Cpu className="w-6 h-6 text-sky-400" /> },
              { title: "Responsive Layouts", desc: "Webpages adapt cleanly to wide desktop monitors, tablet layouts, and smartphone screens.", icon: <Smartphone className="w-6 h-6 text-indigo-400" /> },
              { title: "Optimized Performance", desc: "We audit core web vitals, bundle Javascript modules, and compress media parameters for loading speed.", icon: <Zap className="w-6 h-6 text-rose-400" /> },
              { title: "Reliability & Security", desc: "We implement standard SSL path mappings, input cleaning validations, and secure database structures.", icon: <Shield className="w-6 h-6 text-emerald-400" /> }
            ].map((benefit, i) => (
              <div key={i} className="p-6 bg-slate-900/40 border border-slate-850 rounded-xl space-y-4">
                <div className="p-3 bg-slate-950 rounded-xl w-fit border border-slate-800">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-white text-base">{benefit.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQSection items={faqItems} schemaId="web-development-faq-schema" themeColor="blue" />

      {/* Bottom CTA Block */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 sm:p-16 text-center border border-slate-850 shadow-2xl">
          <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-blue-500/5 blur-3xl" />
          
          <div className="max-w-xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Launch Your New Web Platform?
            </h2>
            <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
              Contact our web development consultants in Ahmedabad. Let's build a fast, responsive, and secure website that drives conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                to="/contact"
                className="bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold px-7 py-3 rounded-xl transition duration-300 shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20"
              >
                Request Free Consultation
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
