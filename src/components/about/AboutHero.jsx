import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function AboutHero({ hero, onOpenConsultation }) {
  if (!hero) return null;

  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-sky-50/70 via-slate-50 to-white border-b border-slate-200/60">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 right-1/4 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Typography & CTAs */}
        <motion.div 
          className="lg:col-span-7 space-y-6 text-left"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {hero.eyebrow && (
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              {hero.eyebrow}
            </span>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-slate-900 tracking-tight">
            {hero.title ? (
              <>
                Empowering People. <br />
                <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Building Businesses.
                </span> <br />
                Creating Digital Futures.
              </>
            ) : (
              hero.title
            )}
          </h1>

          {hero.description && (
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {hero.description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            {hero.primaryButton && (
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-bold transition duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-1 cursor-pointer"
              >
                {hero.primaryButton}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {hero.secondaryButton && hero.secondaryLink && (
              <Link
                to={hero.secondaryLink}
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-sky-400 bg-white hover:bg-sky-50/50 text-slate-800 px-6 py-3.5 rounded-xl font-semibold transition duration-300 shadow-xs hover:-translate-y-0.5"
              >
                {hero.secondaryButton}
              </Link>
            )}
          </div>
        </motion.div>

        {/* Right Column: Hero Media */}
        <motion.div 
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-lg group">
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-35 transition duration-500" />
            <div className="relative bg-white border border-slate-200/90 rounded-3xl p-3 shadow-2xl overflow-hidden">
              <img
                src={hero.image}
                alt={hero.imageAlt || "Yugantar Technologies"}
                className="w-full h-[360px] sm:h-[400px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-slate-200/80 p-4 rounded-xl shadow-lg">
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600">
                  Yugantar Technologies
                </p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  Training & IT Solution Center • Ahmedabad
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
