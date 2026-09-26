import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import ServiceBookingModal from "../components/ServiceBookingModal";
import { 
  Target, 
  BarChart3, 
  Zap, 
  DollarSign, 
  Filter, 
  ArrowRight, 
  TrendingUp,
  PhoneCall
} from "lucide-react";
import { FaGoogle, FaMeta } from "react-icons/fa6";

function PerformanceHeroMockup() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
      caption: "5.2x Average ROAS Across Google & Meta Ads"
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      caption: "Real-Time PPC Analytics & Lead Funnel Dashboard"
    },
    {
      url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop",
      caption: "High-Conversion Landing Page & Pixel Tracking"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full max-w-md relative group text-left font-sans select-none">
      <div className="absolute -inset-2 bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-500 rounded-3xl blur-2xl opacity-35 group-hover:opacity-55 transition duration-700 pointer-events-none" />

      <div className="relative bg-white/95 backdrop-blur-md border border-slate-200 rounded-3xl p-4 shadow-2xl overflow-hidden hover:border-orange-400/60 transition-all duration-500">
        <div className="flex items-center justify-between mb-3 bg-slate-900 p-2.5 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-xl border border-slate-700 text-[11px] text-slate-200 font-mono">
            <Target className="w-3.5 h-3.5 text-orange-400" />
            <span className="font-semibold text-slate-200">Live ROI Engine</span>
          </div>
          <span className="text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Scaled
          </span>
        </div>

        <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200 mb-3 group/slide">
          <img
            src={images[currentSlide].url}
            alt={images[currentSlide].caption}
            className="w-full h-full object-cover transition-transform duration-700 group-hover/slide:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <span className="text-[9px] font-bold uppercase tracking-widest bg-orange-600 px-2 py-0.5 rounded-md">
              Performance Metrics
            </span>
            <p className="text-xs font-bold text-white mt-1 drop-shadow-md">
              {images[currentSlide].caption}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
          <div className="bg-orange-50 border border-orange-200 p-2 rounded-xl">
            <div className="text-[10px] text-orange-800 font-bold">Total Leads</div>
            <div className="text-sm font-black text-orange-600 mt-0.5">14,500+</div>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 p-2 rounded-xl">
            <div className="text-[10px] text-emerald-800 font-bold">Avg ROAS</div>
            <div className="text-sm font-black text-emerald-600 mt-0.5">5.2x 🚀</div>
          </div>
          <div className="bg-sky-50 border border-sky-200 p-2 rounded-xl">
            <div className="text-[10px] text-sky-800 font-bold">Conv. Rate</div>
            <div className="text-sm font-black text-sky-600 mt-0.5">8.4%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PerformanceMarketingAhmedabad() {
  const [bookingModal, setBookingModal] = useState({ isOpen: false, service: null });

  useEffect(() => {
    document.title = "Performance Marketing Ahmedabad - Meta Ads, Google Ads & ROI Campaigns";
    window.scrollTo(0, 0);
  }, []);

  const handleOpenBooking = () => {
    setBookingModal({
      isOpen: true,
      service: {
        title: "Performance Marketing Services",
        description: "Google Ads, Meta Ads, and PPC lead generation campaigns optimized for high ROI."
      }
    });
  };

  const performanceFeatures = [
    {
      title: "Google Search & Shopping Ads",
      desc: "Capture ready-to-buy intent search traffic in Ahmedabad with highly targeted Google PPC campaigns.",
      icon: <FaGoogle className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Meta Ads (Facebook & Instagram)",
      desc: "Drive targeted lead generation, dynamic retargeting, and visual sales campaigns across Instagram & Meta.",
      icon: <FaMeta className="w-6 h-6 text-orange-500" />
    },
    {
      title: "High-Converting Landing Pages",
      desc: "Fast-loading landing pages optimized for maximum conversion rates and seamless user action.",
      icon: <Zap className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Conversion Tracking & Analytics",
      desc: "End-to-end Meta Pixel, Google Tag Manager, and server-side API tracking for 100% data accuracy.",
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Cost-Per-Lead Optimization",
      desc: "Continuous A/B testing of ad copy, audience demographics, and creatives to minimize CPL.",
      icon: <DollarSign className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Retargeting & Funnel Scaling",
      desc: "Re-engage site visitors and warm leads to convert missed opportunities into paying customers.",
      icon: <Filter className="w-6 h-6 text-orange-500" />
    }
  ];

  const faqItems = [
    {
      question: "What is Performance Marketing?",
      answer: "Performance marketing focuses on measurable results like qualified leads, sales, and ROI. You pay for ad spend that yields trackable business growth."
    },
    {
      question: "Which platforms do you manage for performance ads?",
      answer: "We manage Google Search Ads, Google Display Network, YouTube Video Ads, Instagram Reels Ads, Facebook Lead Forms, and LinkedIn PPC campaigns."
    },
    {
      question: "How fast can we expect results from paid campaigns?",
      answer: "Unlike SEO which takes organic build-up time, performance ads deliver immediate traffic and qualified leads within 24-48 hours of launch."
    },
    {
      question: "How can we contact YugAntar Technologies in Ahmedabad?",
      answer: "We operate out of Ahmedabad, Gujarat and provide digital marketing and IT services nationwide. You can call or WhatsApp our consultation desk directly at +91 9054372690."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-orange-50/80 via-slate-50 to-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-orange-600 font-mono text-xs font-semibold tracking-wider uppercase bg-orange-100 px-3.5 py-1.5 rounded-md border border-orange-200 inline-flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              HIGH-ROI PAID ADS & LEAD GEN
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Performance Marketing Services in <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">Ahmedabad</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Scale your business with high-converting Google Ads, Meta Paid Campaigns, custom landing pages, and automated lead tracking managed by YugAntar Technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={handleOpenBooking}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white px-7 py-3.5 rounded-xl font-bold transition duration-300 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-1 cursor-pointer"
              >
                Get Free Campaign Audit
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+919054372690"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-orange-400 bg-white text-slate-800 px-6 py-3.5 rounded-xl font-semibold transition duration-300 shadow-xs"
              >
                <PhoneCall className="w-4 h-4 text-orange-600" />
                Call: +91 9054372690
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <PerformanceHeroMockup />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 space-y-3">
          <span className="text-orange-600 font-mono text-xs font-semibold tracking-wider uppercase bg-orange-100 px-3.5 py-1.5 rounded-md border border-orange-200 inline-block">
            CAMPAIGN EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Data-Driven Performance Strategy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {performanceFeatures.map((feat, idx) => (
            <div key={idx} className="site-card bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center mb-6">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <FAQSection items={faqItems} schemaId="performance-faq-schema" />

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
