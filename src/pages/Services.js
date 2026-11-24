import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBookingModal from "../components/ServiceBookingModal";
import ServiceDetailModal from "../components/ServiceDetailModal";
import FreeConsultationModal from "../components/FreeConsultationModal";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import FAQSection from "../components/FAQSection";
import useFaqByCategory from "../hooks/useFaqByCategory";
import { FAQ_CATEGORIES } from "../constants/faqDefaults";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Search,
  Megaphone,
  Target,
  Users,
  ShoppingCart,
  Smartphone,
  Gamepad2,
  MapPin,
  Code2,
  Check,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const serviceShowcases = [
  {
    title: "Full-Stack Web & E-Commerce Development",
    shortLabel: "Web Dev",
    category: "Custom Web Solutions",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-400/30",
    description: "High-converting corporate portals, SaaS platforms, and lightning-fast storefronts.",
    image: "/it_services_clean_showcase.jpg",
    backupImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tech: "Next.js 15 • React 19 • Tailwind",
    highlightPill: "⚡ 99/100 PageSpeed"
  },
  {
    title: "iOS & Android Mobile Applications",
    shortLabel: "Mobile Apps",
    category: "Mobile App Engineering",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    description: "Fluid cross-platform mobile apps built with React Native & Flutter with offline sync.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
    backupImage: "/it_services_hero.jpg",
    tech: "Flutter • React Native • Firebase",
    highlightPill: "📱 60 FPS Native UI"
  },
  {
    title: "Google Rank #1 SEO & Search Dominance",
    shortLabel: "SEO Growth",
    category: "Search Engine Optimization",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-400/30",
    description: "Data-driven organic search audits, local Google Maps pack, and high-DA backlink strategies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    backupImage: "/it_services_illustration.jpg",
    tech: "Technical SEO • GSC • Analytics",
    highlightPill: "📈 +340% Inquiries"
  },
  {
    title: "Enterprise Custom CRM & ERP Systems",
    shortLabel: "Enterprise ERP",
    category: "Business Software & Cloud",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    description: "Tailored business management software, automated pipelines, and scalable cloud APIs.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    backupImage: "/workspace.png",
    tech: "Node.js • Python • PostgreSQL",
    highlightPill: "🔒 Enterprise Security"
  }
];

function ServicesHeroMockup() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % serviceShowcases.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = serviceShowcases[activeTab];

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveTab((prev) => (prev === 0 ? serviceShowcases.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveTab((prev) => (prev + 1) % serviceShowcases.length);
  };

  return (
    <div className="w-full max-w-xl relative group text-left font-sans select-none">
      {/* Subtle Glow Backlight */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500/20 via-blue-600/15 to-orange-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-700 pointer-events-none" />

      {/* Main Browser Glass Frame */}
      <div className="relative bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
        
        {/* Top Control Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3 bg-slate-900/95 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/90" />
            <span className="w-3 h-3 rounded-full bg-amber-500/90" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
          </div>
          <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg text-xs font-mono text-slate-300">
            <span className="text-sky-400 text-[10px]">🔒</span>
            <span>yugantartechnologies.com/services</span>
          </div>
          <div className="flex items-center gap-1 opacity-60">
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="w-2 h-2 rounded-full bg-slate-600" />
          </div>
        </div>

        {/* Real Visual Showcase Image Viewport - Clean Image, Zero Text Overlays */}
        <div className="relative h-72 sm:h-80 md:h-[350px] w-full overflow-hidden bg-slate-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={current.image}
                onError={(e) => {
                  if (current.backupImage && e.target.src !== current.backupImage) {
                    e.target.src = current.backupImage;
                  }
                }}
                alt="IT Service Showcase"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Left / Right Nav Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Service Image"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-white/10 text-white flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 hover:scale-110 shadow-lg backdrop-blur-sm z-20"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Service Image"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-white/10 text-white flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 hover:scale-110 shadow-lg backdrop-blur-sm z-20"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Bottom Interactive Service Tab Switcher */}
        <div className="grid grid-cols-4 gap-1 p-2 bg-slate-900/90 border-t border-slate-800">
          {serviceShowcases.map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`py-1.5 px-1 sm:px-2 rounded-lg text-[10.5px] sm:text-xs font-semibold transition-all duration-200 text-center truncate ${
                idx === activeTab
                  ? "bg-sky-600 text-white shadow-xs font-bold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}
            >
              {s.shortLabel}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function Services() {
  const [bookingModal, setBookingModal] = useState({ isOpen: false, service: null });
  const [detailModal, setDetailModal] = useState({ isOpen: false, service: null });
  const [freeConsultationOpen, setFreeConsultationOpen] = useState(false);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const faqItems = useFaqByCategory(FAQ_CATEGORIES.SERVICE);

  useEffect(() => {
    document.title = "IT Services Ahmedabad | Web, SEO, CRM & Mobile App Solutions - YugAntar Technologies";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Top IT services in Ahmedabad - Web Development, SEO, Social Media Marketing, Custom CRM Systems, E-Commerce, Mobile Apps & Software Solutions.'
      );
    }
  }, []);

  const handleBookService = (service) => setBookingModal({ isOpen: true, service });
  const handleCloseBookingModal = () => setBookingModal({ isOpen: false, service: null });

  const handleOpenDetailModal = (service) => setDetailModal({ isOpen: true, service });
  const handleCloseDetailModal = () => setDetailModal({ isOpen: false, service: null });

  const services = [
    {
      title: "Website Development",
      description: "Custom static, dynamic, landing page and e-commerce website development tailored for business growth.",
      icon: <Globe className="w-7 h-7" />,
      popular: true,
      features: [
        "High-conversion Landing Pages",
        "Dynamic & Static Web Apps",
        "Responsive Mobile & Desktop UI",
        "Fast Page Loading Speed",
        "Full Support & Maintenance"
      ],
      detailPath: "/website-development-ahmedabad"
    },
    {
      title: "SEO Services",
      description: "Complete search engine optimization to boost keyword rankings, organic traffic, and Google map visibility.",
      icon: <Search className="w-7 h-7" />,
      popular: true,
      features: [
        "Local Ahmedabad SEO Strategy",
        "Technical & On-Page SEO",
        "High-Authority Off-Page Backlinks",
        "Keyword Research & Competitor Analysis",
        "Monthly Ranking & Analytics Reports"
      ],
      detailPath: "/seo-services-ahmedabad"
    },
    {
      title: "Social Media Marketing (SMM)",
      description: "Strategic social media marketing, content creation, and paid advertising to expand brand authority.",
      icon: <Megaphone className="w-7 h-7" />,
      popular: true,
      features: [
        "Instagram & Facebook Campaign Strategy",
        "Reels & Visual Content Creation",
        "Meta Ads & Audience Targeting",
        "Community & Lead Management",
        "Growth Tracking & ROI Reports"
      ],
      detailPath: "/social-media-marketing-ahmedabad"
    },
    {
      title: "Performance Marketing",
      description: "Data-driven Google Ads, Meta Ads, and PPC conversion campaigns engineered to maximize ROI and high-quality leads.",
      icon: <Target className="w-7 h-7" />,
      popular: true,
      features: [
        "Google Search & Display PPC Ads",
        "Meta Ads & Retargeting Funnels",
        "High-Converting Landing Page Setup",
        "Conversion Tracking & Pixel Setup",
        "Cost-Per-Lead (CPL) Optimization"
      ],
      detailPath: "/performance-marketing-ahmedabad"
    },
    {
      title: "Custom CRM & ERP Systems",
      description: "Custom Customer Relationship Management & ERP software to automate lead tracking, sales, and operations.",
      icon: <Users className="w-7 h-7" />,
      popular: true,
      features: [
        "Lead Management & Pipeline Tracking",
        "Automated Follow-ups & Reminders",
        "Sales Analytics & Custom Dashboards",
        "Client Communication History",
        "Team Access Control & Security"
      ]
    },
    {
      title: "E-Commerce Development",
      description: "Secure, scalable online store development equipped with custom cart, payment gateways, and inventory management.",
      icon: <ShoppingCart className="w-7 h-7" />,
      popular: false,
      features: [
        "Custom Storefronts & Product Catalogs",
        "Razorpay & Stripe Payment Integration",
        "Order & Inventory Automation",
        "SEO-Optimized Product Pages",
        "Mobile-Friendly Shopping Cart"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for Android and iOS engineered with modern UI/UX.",
      icon: <Smartphone className="w-7 h-7" />,
      popular: false,
      features: [
        "Android & iOS Apps (React Native / Flutter)",
        "Intuitive User Experience & Clean UI",
        "Push Notifications & API Backend",
        "Play Store & App Store Deployment",
        "Regular Updates & Maintenance"
      ]
    },
    {
      title: "Game Development",
      description: "Interactive 2D/3D games for web and mobile platforms with engaging graphics and multiplayer support.",
      icon: <Gamepad2 className="w-7 h-7" />,
      popular: false,
      features: [
        "2D & 3D Mobile & Web Games",
        "Unity & HTML5 Engine Development",
        "Custom Character & Level Design",
        "In-App Purchases & Monetization",
        "Performance Optimization"
      ]
    },
    {
      title: "Google Business Profile (GBP)",
      description: "Google Map ranking optimization and local profile management to drive direct calls and local inquiries.",
      icon: <MapPin className="w-7 h-7" />,
      popular: false,
      features: [
        "Google Maps Profile Setup & Audit",
        "Local Keyword & Bio Optimization",
        "Customer Review Management Support",
        "Weekly Business Posts & Gallery Updates",
        "Local Call & Lead Tracking"
      ],
      detailPath: "/google-business-profile-management-ahmedabad"
    },
    {
      title: "Custom Software & API Integration",
      description: "Scalable REST/GraphQL API integration and custom software engineering for seamless enterprise operations.",
      icon: <Code2 className="w-7 h-7" />,
      popular: false,
      features: [
        "RESTful & GraphQL API Engineering",
        "Third-Party Service Integration",
        "Database Architecture & Cloud Security",
        "Automated System Workflows",
        "Technical API Documentation"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-sky-50/70 via-slate-50 to-white border-b border-slate-200/60">
        <div className="absolute top-10 left-1/4 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-5 right-1/4 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-sky-700 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-100/80 px-3.5 py-1.5 rounded-md border border-sky-200 inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              PROFESSIONAL IT SOLUTIONS
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Transform Your Business with Our <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-orange-500 bg-clip-text text-transparent">IT & Digital Services</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-lg max-w-2xl leading-relaxed font-normal">
              From web development and local SEO to custom CRM automation and mobile applications, Yugantar Technologies engineers high-impact digital solutions for companies in Ahmedabad.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-sky-500 to-orange-500 text-white px-7 py-3.5 rounded-xl font-bold transition duration-300 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+919054372690"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-sky-400 bg-white hover:bg-sky-50/50 text-slate-800 px-5 py-3.5 rounded-xl font-semibold transition duration-300 shadow-xs hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4 text-sky-600" />
                <span>Call: +91 9054372690</span>
              </a>

              <a
                href="tel:+917859982605"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-sky-400 bg-white hover:bg-sky-50/50 text-slate-800 px-5 py-3.5 rounded-xl font-semibold transition duration-300 shadow-xs hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4 text-sky-600" />
                <span>+91 7859982605</span>
              </a>
            </div>
          </div>

          {/* Right Image Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <ServicesHeroMockup />
          </div>

        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        
        <div className="text-center mb-16 space-y-3">
          <span className="text-sky-700 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-100/80 px-3.5 py-1.5 rounded-md border border-sky-200 inline-block">
            OUR COMPLETE OFFERINGS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore Production-Grade IT Services
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Comprehensive technology, marketing, and software engineering services designed to scale your business.
          </p>
        </div>

        {/* 3-Column Equal Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-200/90 rounded-[2.25rem] p-8 shadow-md shadow-slate-200/50 hover:shadow-2xl hover:shadow-sky-500/20 hover:border-sky-400/80 hover:-translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between overflow-hidden cursor-pointer"
              style={{
                transitionDelay: `${index * 60}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
              }}
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Shimmer Light Reflection Sweep */}
              <div className="absolute top-0 -left-[120%] w-[180%] h-full bg-gradient-to-r from-transparent via-sky-100/40 to-transparent skew-x-[-25deg] group-hover:left-[120%] transition-all duration-1000 ease-in-out pointer-events-none z-0" />

              <div className="relative z-10">
                {/* Popular Badge & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200/80 text-sky-600 flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-500/30">
                    {service.icon}
                  </div>

                  {service.popular && (
                    <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-full bg-sky-100 text-sky-800 border border-sky-200 shadow-xs">
                      Popular
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors tracking-tight mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed font-normal mb-6">
                  {service.description}
                </p>
                
                {/* Feature Bullet List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                      <span className="p-1 rounded-full bg-sky-50 text-sky-600 border border-sky-200 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-colors flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons - Rendered Uniformly on ALL Cards */}
              <div className="relative z-10 space-y-3 pt-5 border-t border-slate-100 mt-auto">
                <button
                  onClick={() => handleBookService(service)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-bold py-3 px-5 rounded-2xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-300 text-sm cursor-pointer"
                >
                  Book Service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleOpenDetailModal(service)}
                  className="w-full inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-sky-400 bg-slate-50 hover:bg-sky-50 text-slate-800 font-bold py-2.5 px-5 rounded-2xl transition-all duration-300 text-xs text-center cursor-pointer"
                >
                  View Service Details
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto w-full">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-[2.5rem] p-8 sm:p-14 text-center border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Accelerate Your Digital Growth?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Partner with Yugantar Technologies for custom web apps, SEO dominance, and automated CRM solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-3">
              <button
                type="button"
                onClick={() => setFreeConsultationOpen(true)}
                className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+919054372690"
                className="border border-slate-700 hover:border-sky-400 bg-slate-900/80 hover:bg-slate-800 text-white font-semibold px-6 py-3.5 rounded-xl transition duration-300 inline-flex items-center justify-center gap-2 text-sm"
              >
                <PhoneCall className="w-4 h-4 text-sky-400" />
                <span>Call: +91 9054372690</span>
              </a>
              <a
                href="tel:+917859982605"
                className="border border-slate-700 hover:border-sky-400 bg-slate-900/80 hover:bg-slate-800 text-white font-semibold px-6 py-3.5 rounded-xl transition duration-300 inline-flex items-center justify-center gap-2 text-sm"
              >
                <PhoneCall className="w-4 h-4 text-sky-400" />
                <span>+91 7859982605</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <ServiceBookingModal
        service={bookingModal.service}
        isOpen={bookingModal.isOpen}
        onClose={handleCloseBookingModal}
      />

      {/* Free Consultation Modal */}
      <FreeConsultationModal
        isOpen={freeConsultationOpen}
        onClose={() => setFreeConsultationOpen(false)}
        defaultService="General Consultation"
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={detailModal.service}
        isOpen={detailModal.isOpen}
        onClose={handleCloseDetailModal}
        onBookNow={(service) => handleBookService(service)}
      />

      {/* FAQ Accordion */}
      <FAQSection items={faqItems} schemaId="services-faq-schema" />

      <Footer />
    </div>
  );
}