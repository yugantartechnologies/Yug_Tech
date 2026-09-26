import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FAQSection from "./FAQSection";
import FreeConsultationModal from "./FreeConsultationModal";

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  highlights = [],
  faqItems = [],
}) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="pt-28 pb-16 px-6 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto">
          <p className="text-sky-600 font-bold text-xs tracking-wider uppercase mb-3">{subtitle}</p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">{title}</h1>
          <p className="text-slate-600 text-lg max-w-4xl leading-relaxed">{description}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 tracking-tight">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-white to-white border border-slate-200/80 rounded-xl p-5 hover:-translate-y-1 hover:border-sky-400/40 hover:from-sky-50/10 hover:shadow-[0_15px_30px_rgba(14,165,233,0.04)] transition-all duration-300"
            >
              <p className="text-slate-600 font-medium group-hover:text-slate-800 transition-colors leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-center shadow-2xl border border-slate-800 text-white">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_40%)] z-0" />
          
          <h3 className="relative z-10 text-2xl md:text-3xl font-extrabold mb-4 text-white tracking-tight">Need This Service in Ahmedabad?</h3>
          <p className="relative z-10 text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed">
            Talk to our expert team for a free consultation and get a custom quote tailored for your business growth.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => setIsConsultationOpen(true)}
              className="px-7 py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-bold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 hover:-translate-y-0.5 cursor-pointer"
            >
              Book Free Consultation
            </button>
            <a
              href="tel:+919054372690"
              className="px-7 py-3 border-2 border-slate-700 text-slate-200 hover:text-white rounded-xl font-bold hover:bg-slate-850 hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5"
            >
              Call +91 9054372690
            </a>
          </div>
        </div>
      </section>

      <FreeConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={title || "General Consultation"}
      />

      <FAQSection items={faqItems} schemaId={`faq-${title.toLowerCase().replace(/\s+/g, "-")}`} />
      <Footer />
    </div>
  );
}
