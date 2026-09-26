import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function AboutCTA({ cta, onOpenConsultation }) {
  if (!cta) return null;

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto w-full">
      <motion.div
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-8 sm:p-14 text-center border border-slate-800 shadow-2xl"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {cta.title}
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {cta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-3">
            {cta.primaryButton && (
              <button
                type="button"
                onClick={onOpenConsultation}
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                {cta.primaryButton}
              </button>
            )}

            {cta.secondaryButton && cta.secondaryLink && (
              <Link
                to={cta.secondaryLink}
                className="border border-slate-700 hover:border-slate-500 bg-slate-900/80 hover:bg-slate-900 text-white font-semibold px-8 py-3.5 rounded-xl transition duration-300 inline-flex items-center justify-center gap-2"
              >
                {cta.secondaryButton}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
