import React from "react";
import { motion } from "framer-motion";
import { RenderIcon } from "./IconHelper";

export default function MissionVision({ mission, vision }) {
  if (!mission && !vision) return null;

  return (
    <section className="py-24 px-6 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 space-y-3">
          <span className="text-sky-600 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-50 px-3.5 py-1.5 rounded-md border border-sky-100 inline-block">
            GUIDING PRINCIPLES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Purpose & Future Blueprint
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Mission Card */}
          {mission && (
            <motion.div
              className="group relative bg-gradient-to-br from-white to-sky-50/40 border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-sky-500/15 hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-100 border border-sky-200 text-sky-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white group-hover:shadow-md">
                <RenderIcon name={mission.icon || "Target"} className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-slate-900 group-hover:text-sky-600 transition-colors">
                {mission.title || "Our Mission"}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
                {mission.description}
              </p>
            </motion.div>
          )}

          {/* Vision Card */}
          {vision && (
            <motion.div
              className="group relative bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 border border-slate-800 rounded-3xl p-8 sm:p-10 text-white shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/40 hover:-translate-y-1.5 transition-all duration-400 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_45%)] rounded-3xl" />
              
              <div className="relative z-10 mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-950 border border-indigo-700/50 text-indigo-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-md">
                <RenderIcon name={vision.icon || "Rocket"} className="w-8 h-8" />
              </div>
              <h3 className="relative z-10 text-2xl font-extrabold mb-4 text-white">
                {vision.title || "Our Vision"}
              </h3>
              <p className="relative z-10 text-slate-300 leading-relaxed text-base sm:text-lg font-normal">
                {vision.description}
              </p>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
