import React from "react";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Briefcase } from "lucide-react";

export default function CTASection({ onQuickEnroll }) {
  const stats = [
    { label: "Students Trained", value: "1200+", color: "hover:border-indigo-400 hover:shadow-[0_15px_30px_rgba(99,102,241,0.06)] hover:from-indigo-50/20", accent: "bg-indigo-500" },
    { label: "Live Projects", value: "75+", color: "hover:border-emerald-400 hover:shadow-[0_15px_30px_rgba(16,185,129,0.06)] hover:from-emerald-50/20", accent: "bg-emerald-500" },
    { label: "Job Placements", value: "500+", color: "hover:border-amber-400 hover:shadow-[0_15px_30px_rgba(245,158,11,0.06)] hover:from-amber-50/20", accent: "bg-amber-500" },
  ];

  return (
    <section className="relative py-28 bg-slate-50 overflow-hidden text-slate-900 border-t border-b border-slate-200/50">
      {/* Background visual detail */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.04),transparent_40%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          Practical IT training built for Ahmedabad professionals.
        </h2>
 
        {/* Dynamic Subheading */}
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Learn proven web development, Python, and design skills with live projects, focused mentorship, and career-ready support.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={onQuickEnroll} 
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 px-7 py-3.5 rounded-xl font-bold text-white shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Enroll Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <Link 
            to="/contact" 
            className="px-7 py-3.5 border border-slate-200 text-slate-700 hover:text-slate-900 font-semibold rounded-xl bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="group premium-card-hover-light flex flex-col items-center gap-2 rounded-2xl p-6 text-center bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/90"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl w-0 group-hover:w-full transition-all duration-500 ${stat.accent}`} />
              
              <span className="text-3xl md:text-4xl font-extrabold text-slate-900 pt-1">{stat.value}</span>
              <span className="text-sm md:text-base text-slate-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center text-slate-700">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-50 border border-indigo-100/50 p-2.5 rounded-xl text-indigo-600">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-sm md:text-base font-semibold">Job Assistance</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-emerald-50 border border-emerald-100/50 p-2.5 rounded-xl text-emerald-600">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-sm md:text-base font-semibold">Live Projects</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-amber-50 border border-amber-100/50 p-2.5 rounded-xl text-amber-600">
              <Briefcase className="w-6 h-6" />
            </div>
            <span className="text-sm md:text-base font-semibold">Expert Mentors</span>
          </div>
        </div>

      </div>
    </section>
  );
}