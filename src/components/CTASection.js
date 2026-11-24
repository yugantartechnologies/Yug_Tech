import React, { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Calendar } from "lucide-react";
import FreeConsultationModal from "./FreeConsultationModal";

export default function CTASection({ onQuickEnroll }) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <section className="relative py-18 sm:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start Your Digital Journey Today</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 sm:mb-6 text-white">
          Scale Your Business or Launch Your Career With <span className="text-sky-400">Yugantar Technologies</span>
        </h2>
 
        {/* Subheading */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
          From custom software architecture and high-converting websites to intensive career-ready IT training in Ahmedabad, our engineering teams are ready to deliver excellence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none mx-auto">
          <a
            href="#consultation-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-600 px-7 py-3.5 rounded-xl font-bold text-white shadow-xl shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-xs sm:text-sm"
          >
            <span>Request Free Project Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button 
            type="button"
            onClick={() => setIsConsultationOpen(true)}
            className="w-full sm:w-auto px-7 py-3.5 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-xs sm:text-sm flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-sky-400" />
            <span>Schedule 1-on-1 Call</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap gap-6 sm:gap-10 justify-center items-center text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ISO Certified Processes</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>150+ Successful Deployments</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Memnagar, Gurukul Road, Ahmedabad</span>
          </div>
        </div>

      </div>

      <FreeConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService="General IT Consultation"
      />
    </section>
  );
}
