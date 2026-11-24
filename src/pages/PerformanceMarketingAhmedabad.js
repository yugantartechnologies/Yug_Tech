import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import ServiceBookingModal from "../components/ServiceBookingModal";
import { 
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md relative group text-left font-sans select-none">
      <div className="absolute -inset-2 bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-500 rounded-3xl blur-2xl opacity-35 group-hover:opacity-55 transition duration-700 pointer-events-none" />

      <div className="relative bg-slate-950/95 border border-slate-800 rounded-3xl p-4 shadow-2xl overflow-hidden backdrop-blur-xl hover:border-orange-500/40 transition-all duration-500">
        
        {/* Sleek Browser Top Bar */}
        <div className="flex items-center justify-between mb-3 px-1 py-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="bg-slate-900 border border-slate-800 px-3 py-0.5 rounded-lg text-[11px] text-slate-300 font-mono">
            analytics.google.com/ads
          </div>
          <div className="w-3" />
        </div>

        {/* Dashboard Display Screen */}
        <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/80 rounded-2xl p-4 text-white">
          {currentSlide === 0 ? (
            <div className="space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase">Multi-Platform ROAS</div>
                  <div className="text-xl font-extrabold text-orange-400 mt-0.5">5.2x Average Return</div>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md font-bold border border-emerald-500/20">
                  ▲ +44% ROI
                </span>
              </div>

              <div className="h-16 flex items-end gap-1.5 pt-2">
                {[40, 52, 60, 68, 75, 82, 90, 96].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end h-full">
                    <div
                      className="w-full bg-gradient-to-t from-orange-600 to-amber-400 rounded-t-sm"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-slate-800">
                <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Total Inbound Leads</span>
                  <span className="text-sm font-extrabold text-white">14,500+</span>
                </div>
                <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Average Conv. Rate</span>
                  <span className="text-sm font-extrabold text-emerald-400">8.4%</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase">Live Funnel Tracking</div>
                  <div className="text-xl font-extrabold text-white mt-0.5">High Intent Clicks</div>
                </div>
                <span className="text-[10px] text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-md font-bold border border-sky-500/20">
                  Google & Meta
                </span>
              </div>

              <div className="space-y-1.5 text-xs py-1">
                <div className="flex justify-between items-center bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                  <span className="text-slate-300">PPC Search Campaigns</span>
                  <span className="font-mono font-bold text-orange-400">₹32.40 CPL</span>
                </div>
                <div className="flex justify-between items-center bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                  <span className="text-slate-300">Social Retargeting Ads</span>
                  <span className="font-mono font-bold text-emerald-400">6.4x ROAS</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[10px] text-slate-400">
                <span>Direct Lead CRM Integration</span>
                <span className="text-emerald-400 font-semibold font-mono">100% Tracking</span>
              </div>
            </div>
          )}
        </div>

        {/* Minimal Dots */}
        <div className="flex justify-center gap-1.5 mt-3">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "bg-orange-400 w-5" : "bg-slate-700 w-1.5"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
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
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-orange-400 bg-white text-slate-800 px-5 py-3.5 rounded-xl font-semibold transition duration-300 shadow-xs text-xs sm:text-sm"
              >
                <PhoneCall className="w-4 h-4 text-orange-600" />
                <span>Call: +91 9054372690</span>
              </a>

              <a
                href="tel:+917859982605"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-orange-400 bg-white text-slate-800 px-5 py-3.5 rounded-xl font-semibold transition duration-300 shadow-xs text-xs sm:text-sm"
              >
                <PhoneCall className="w-4 h-4 text-orange-600" />
                <span>+91 7859982605</span>
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
            <div key={idx} className="site-card bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center mb-6">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setBookingModal({ isOpen: true, service: { title: `Performance - ${feat.title}`, icon: "🎯" } })}
                  className="inline-flex items-center justify-between w-full text-xs text-orange-700 font-bold hover:text-orange-900 bg-orange-50 hover:bg-orange-100 px-4 py-2.5 rounded-xl border border-orange-200/80 transition-all cursor-pointer"
                >
                  <span>Inquire Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
                </button>
              </div>
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
