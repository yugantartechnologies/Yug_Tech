import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import ServiceBookingModal from "../components/ServiceBookingModal";
import { 
  Globe, 
  Code2, 
  ShoppingBag, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  Smartphone,
  LayoutTemplate,
  Laptop
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

function WebDevHeroMockup() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      caption: "Full-Stack Web Portal"
    },
    {
      url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
      caption: "Corporate Business Website"
    },
    {
      url: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
      caption: "E-Commerce Storefront"
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      caption: "SaaS & Admin Dashboard"
    },
    {
      url: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop",
      caption: "Progressive Web App (PWA)"
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
      <div className="absolute -inset-3 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />

      {/* Floating Top Badge */}
      <div className="absolute -top-4 -right-2 z-30 bg-emerald-500 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
        <span>100/100 Core Web Vitals</span>
      </div>

      {/* Floating Bottom Badge */}
      <div className="absolute -bottom-4 -left-2 z-30 bg-slate-900/90 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xl border border-slate-700 backdrop-blur-md flex items-center gap-2">
        <span className="text-amber-400">⚡ 85ms</span>
        <span className="text-slate-300">Instant Server Loading</span>
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
            <span className="text-emerald-400">🔒</span>
            <span className="font-bold">https://yugantar.tech/web-dev</span>
          </div>
          <span className="text-[11px] font-bold text-sky-400 bg-sky-950 px-2.5 py-0.5 rounded-full border border-sky-800">
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
          <div className="absolute bottom-4 left-4 z-10 bg-slate-950/90 border border-sky-400/30 text-white px-3.5 py-1.5 rounded-xl backdrop-blur-md text-xs font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
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
          <span className="text-[11px] text-slate-400 font-mono">Live Web Showcase</span>
          <div className="flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "bg-sky-400 w-5" : "bg-slate-800 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WebsiteDevelopmentAhmedabad() {
  const [activeTab, setActiveTab] = useState(0);

  const offerings = [
    {
      title: "Landing Pages & Single-Page Apps (SPAs)",
      description: "High-converting, high-performance landing pages optimized for advertising campaigns and lead acquisition in Ahmedabad.",
      icon: <LayoutTemplate className="w-7 h-7" />,
      features: ["Conversion-focused layout", "A/B testing compatibility", "Lead capture forms", "Analytics integration"]
    },
    {
      title: "Custom Corporate Websites",
      description: "Elegant, multi-page business websites designed to showcase your corporate identity, services, and build trust with clients.",
      icon: <Globe className="w-7 h-7" />,
      features: ["Custom typography & design", "About, Services, Team structure", "Interactive Maps & Careers", "SEO optimized architecture"]
    },
    {
      title: "E-Commerce Portals & Online Stores",
      description: "Robust, secure, and scalable online storefronts equipped with seamless cart management, checkout flows, and payment pathways.",
      icon: <ShoppingBag className="w-7 h-7" />,
      features: ["Unlimited product catalogs", "Secure payment gateway integration", "Order & inventory tracking", "Client account dashboards"]
    },
    {
      title: "Custom Web Applications & Portals",
      description: "Complex cloud-based web applications, internal CRM/ERP software, and customized portals designed for your internal workflows.",
      icon: <Code2 className="w-7 h-7" />,
      features: ["Role-based access controls", "Robust databases (MongoDB/MySQL)", "Third-party API integrations", "Data export & reporting charts"]
    },
    {
      title: "CMS Website Development",
      description: "Manage your website content effortlessly with custom WordPress, Shopify, or Headless CMS setups.",
      icon: <Laptop className="w-7 h-7" />,
      features: ["No-code content management", "Custom theme creation", "Plugin/App integration", "Training & documentation support"]
    },
    {
      title: "Speed Tuning & Redesign Services",
      description: "Migrate your legacy website to modern framework architectures while upgrading pages for lightning-fast speeds and SEO metrics.",
      icon: <Zap className="w-7 h-7" />,
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
      { name: "HTML5", icon: <FaHtml5 className="w-5 h-5 text-orange-500" /> },
      { name: "CSS3 / Sass", icon: <div className="flex gap-1"><FaCss3Alt className="text-blue-500 w-5 h-5" /><FaSass className="text-pink-500 w-5 h-5" /></div> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-cyan-500" /> },
      { name: "JavaScript", icon: <FaJs className="w-5 h-5 text-amber-500" /> },
      { name: "React.js", icon: <FaReact className="w-5 h-5 text-sky-500 animate-spin-slow" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-slate-800" /> }
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs className="w-5 h-5 text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="w-5 h-5 text-slate-700" /> },
      { name: "Python", icon: <FaPython className="w-5 h-5 text-amber-500" /> },
      { name: "Django", icon: <SiDjango className="w-5 h-5 text-emerald-700" /> },
      { name: "PHP / Laravel", icon: <div className="flex gap-1"><FaPhp className="text-indigo-500 w-5 h-5" /><FaLaravel className="text-red-500 w-5 h-5" /></div> }
    ],
    Databases: [
      { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-emerald-600" /> },
      { name: "MySQL", icon: <SiMysql className="w-5 h-5 text-blue-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5 text-sky-700" /> },
      { name: "Firebase", icon: <SiFirebase className="w-5 h-5 text-amber-500" /> }
    ],
    Platforms: [
      { name: "WordPress", icon: <FaWordpress className="w-5 h-5 text-blue-600" /> },
      { name: "Shopify", icon: <FaShopify className="w-5 h-5 text-emerald-600" /> },
      { name: "Headless CMS", icon: <FaServer className="w-5 h-5 text-indigo-600" /> }
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

  const [bookingModal, setBookingModal] = useState({ isOpen: false, service: null });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-sky-50/70 via-slate-50 to-white border-b border-slate-200/60">
        {/* Glow visuals */}
        <div className="absolute top-10 left-1/4 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute bottom-5 right-1/4 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              IT Services Ahmedabad
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 tracking-tight">
              Professional <br />
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Website Development
              </span> <br />
              in Ahmedabad
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              We design, build, and optimize fast, SEO-friendly, and custom-styled web applications. Grow your online presence with conversion-focused corporate websites, custom CMS themes, and powerful e-commerce portals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setBookingModal({ isOpen: true, service: { title: "Website Development", icon: "🌐" } })}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-bold transition duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-1 cursor-pointer"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:9054372690"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-sky-400 bg-white hover:bg-sky-50/50 text-slate-800 px-6 py-3.5 rounded-xl font-semibold transition duration-300 shadow-sm hover:-translate-y-0.5"
              >
                Call: 9054372690
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <WebDevHeroMockup />
          </div>
        </div>
      </section>

      {/* Services Grid ("What We Offer") */}
      <section className="py-24 px-6 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-sky-600 font-mono text-sm tracking-wider uppercase font-semibold">Our Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Website Solutions Built for Modern Business
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              We cover all scopes of website and application engineering, ensuring high performance, responsive layout, and absolute security standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((o, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-slate-200/90 p-8 rounded-3xl flex flex-col justify-between shadow-md shadow-slate-200/50 hover:shadow-2xl hover:shadow-sky-500/15 hover:border-sky-400/60 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Hover Gradient Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl group-hover:bg-sky-200/60 transition-all duration-500 -mr-10 -mt-10 pointer-events-none" />

                <div className="space-y-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-500/30 transition-all duration-500">
                    {o.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {o.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {o.description}
                  </p>
                  
                  <ul className="space-y-2.5 pt-2 text-xs font-medium text-slate-600">
                    {o.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-sky-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 relative z-10">
                  <button
                    type="button"
                    onClick={() => setBookingModal({ isOpen: true, service: { title: `Website - ${o.title}`, icon: "🌐" } })}
                    className="inline-flex items-center justify-between w-full text-xs text-sky-700 font-bold hover:text-sky-900 bg-sky-50 hover:bg-sky-100 px-4 py-2.5 rounded-xl border border-sky-200/80 transition-all cursor-pointer"
                  >
                    <span>Inquire For Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-1 transition-transform" />
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
            <span className="text-sky-600 font-mono text-sm tracking-wider uppercase font-semibold">Our Method</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Website Development Process
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
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
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    activeTab === i
                      ? "bg-white border-2 border-sky-500 text-slate-900 shadow-xl shadow-sky-500/10 scale-[1.02]"
                      : "bg-white/80 border border-slate-200/90 hover:bg-white hover:border-slate-300 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-bold font-mono px-3 py-1 rounded-lg border ${
                      activeTab === i 
                        ? "border-sky-300 bg-sky-50 text-sky-700" 
                        : "border-slate-200 bg-slate-100 text-slate-500"
                    }`}>
                      {step.number}
                    </span>
                    <span className="font-bold text-sm sm:text-base">{step.title}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    activeTab === i ? "text-sky-600 translate-x-1" : "text-slate-400 group-hover:translate-x-0.5"
                  }`} />
                </button>
              ))}
            </div>

            {/* Right detail card */}
            <div className="lg:col-span-7 bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 p-8 sm:p-10 rounded-3xl relative overflow-hidden min-h-[260px] flex flex-col justify-center border-l-4 border-l-sky-500">
              <div className="absolute top-[-30px] right-[-30px] text-[130px] font-extrabold font-mono text-slate-100 select-none pointer-events-none">
                {processSteps[activeTab].number}
              </div>
              <div className="space-y-4 relative z-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 font-mono bg-sky-50 px-3 py-1 rounded-md border border-sky-100 inline-block w-fit">
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

      {/* Tech Stack Grid */}
      <section className="py-20 px-6 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-12 tracking-tight">
            Our Technology Stack
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, items], i) => (
              <div 
                key={i} 
                className="group bg-slate-50/80 border border-slate-200/90 p-7 rounded-3xl space-y-5 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-300 hover:bg-white hover:-translate-y-1.5 transition-all duration-300"
              >
                <h3 className="font-bold text-slate-900 border-b border-slate-200 pb-3 text-xs uppercase tracking-wider font-mono flex justify-between items-center">
                  <span>{category}</span>
                  <span className="text-[10px] text-sky-600 font-semibold bg-sky-100/80 px-2 py-0.5 rounded-md border border-sky-200">
                    Tech Suite
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 text-slate-700 font-medium text-xs shadow-xs transition-all duration-300 hover:scale-105 hover:bg-sky-50 hover:border-sky-300 hover:text-sky-700 cursor-pointer"
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
      <section className="py-24 px-6 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Partner with Yugantar Technologies
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              We design web platforms focusing on speed metrics, organic indexing, and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "SEO-Friendly Structures", desc: "Correct header hierarchy and structured metadata help search bots catalog pages quickly.", icon: <Code2 className="w-6 h-6 text-sky-600" /> },
              { title: "Responsive Layouts", desc: "Webpages adapt cleanly to wide desktop monitors, tablet layouts, and smartphone screens.", icon: <Smartphone className="w-6 h-6 text-indigo-600" /> },
              { title: "Optimized Performance", desc: "We audit core web vitals, bundle Javascript modules, and compress media parameters for loading speed.", icon: <Zap className="w-6 h-6 text-rose-500" /> },
              { title: "Reliability & Security", desc: "We implement standard SSL path mappings, input cleaning validations, and secure database structures.", icon: <Shield className="w-6 h-6 text-emerald-600" /> }
            ].map((benefit, i) => (
              <div 
                key={i} 
                className="group bg-white border border-slate-200/90 p-7 rounded-3xl shadow-md shadow-slate-200/40 hover:shadow-2xl hover:shadow-sky-500/15 hover:border-sky-300 hover:-translate-y-2 transition-all duration-400 space-y-4"
              >
                <div className="p-3.5 bg-sky-50 rounded-2xl w-fit border border-sky-100 text-sky-600 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
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
      <FAQSection items={faqItems} schemaId="web-development-faq-schema" themeColor="blue" isLight={true} />

      {/* Bottom CTA Block */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-8 sm:p-14 text-center border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-sky-500/10 blur-3xl" />
          
          <div className="max-w-xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Launch Your New Web Platform?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Contact our web development consultants in Ahmedabad. Let's build a fast, responsive, and secure website that drives conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <button
                onClick={() => setBookingModal({ isOpen: true, service: { title: "Website Development", icon: "🌐" } })}
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 cursor-pointer"
              >
                Request Free Consultation
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
