import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service, onBook }) {
  const getServiceSlug = (title) => {
    if (title.includes("Website")) return "/website-development-ahmedabad";
    if (title.includes("SEO")) return "/seo-services-ahmedabad";
    if (title.includes("Social Media") || title.includes("SMM")) return "/social-media-marketing-ahmedabad";
    return "/services";
  };

  return (
    <div className="group relative bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
      {/* Top Curved Wavy Banner (Softs Solution Service reference style) */}
      <div className="relative h-36 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.25),transparent_60%)]" />
        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-sky-500/10 rounded-full blur-xl" />

        {/* Wavy Bottom SVG */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-10 text-white fill-current"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,138.7C672,139,768,181,864,197.3C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        {/* Hexagonal Tech Badge Container (Centered on Curve) */}
        <div className="relative z-10 -mb-6 w-16 h-16 bg-slate-950 border-2 border-sky-400/50 rounded-2xl flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(56,189,248,0.3)] group-hover:scale-110 group-hover:border-sky-400 transition-all duration-300">
          {service.icon}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 pt-8 flex flex-col flex-grow">
        <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors text-center">
          {service.title}
        </h3>

        <p className="text-xs text-slate-600 mb-4 text-center leading-relaxed min-h-[36px]">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2.5 mb-6 flex-grow">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
              <span className="w-4 h-4 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                ✓
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 space-y-2.5 mt-auto">
          <button
            onClick={() => onBook && onBook(service)}
            className="w-full py-3 bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 hover:from-blue-700 hover:to-sky-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Book Consultation / Inquiry
          </button>

          <Link
            to={getServiceSlug(service.title)}
            className="w-full py-2.5 border border-slate-200 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-50 transition flex items-center justify-center gap-1.5"
          >
            View Service Showcase →
          </Link>
        </div>
      </div>
    </div>
  );
}

