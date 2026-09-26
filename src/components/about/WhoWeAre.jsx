import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhoWeAre({ company }) {
  if (!company) return null;

  return (
    <section className="py-24 px-6 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Image Card */}
        <motion.div 
          className="lg:col-span-6 flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full max-w-lg group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-400 to-blue-600 rounded-3xl blur-lg opacity-15 group-hover:opacity-30 transition duration-500" />
            <div className="relative bg-slate-50 border border-slate-200/90 rounded-3xl p-3 shadow-xl overflow-hidden">
              <img
                src={company.image}
                alt={company.imageAlt || "Who We Are - Yugantar Technologies"}
                className="w-full h-[380px] sm:h-[440px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute top-6 left-6 bg-slate-900/85 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Navrangpura, Ahmedabad Hub
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div 
          className="lg:col-span-6 space-y-6 text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {company.eyebrow && (
            <span className="text-sky-600 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-50 px-3.5 py-1.5 rounded-md border border-sky-100 inline-block">
              {company.eyebrow}
            </span>
          )}

          {company.title && (
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {company.title}
            </h2>
          )}

          <div className="space-y-4 text-slate-600 text-base leading-relaxed font-normal">
            {company.paragraphs && company.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          <div className="pt-2 grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
              <span className="text-sm font-semibold text-slate-800">Production-Ready Code</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
              <span className="text-sm font-semibold text-slate-800">Hands-on Mentorship</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
