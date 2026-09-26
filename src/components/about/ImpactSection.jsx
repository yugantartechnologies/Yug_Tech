import React from "react";
import { motion } from "framer-motion";

export default function ImpactSection({ stats }) {
  if (!stats || !stats.length) return null;

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14">
          <span className="text-sky-600 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-50 px-3.5 py-1.5 rounded-md border border-sky-100 inline-block mb-3">
            OUR IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key Performance Metrics & Track Record
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="group relative text-center bg-slate-50/80 border border-slate-200/90 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 rounded-full w-0 group-hover:w-1/2 transition-all duration-500 bg-gradient-to-r from-sky-500 to-indigo-500" />
              <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                {s.number}
              </h3>
              <p className="text-slate-900 font-bold text-base">{s.label}</p>
              {s.sublabel && (
                <p className="text-slate-500 text-xs mt-1 font-medium">{s.sublabel}</p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
