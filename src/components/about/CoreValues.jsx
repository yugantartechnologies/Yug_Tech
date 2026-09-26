import React from "react";
import { motion } from "framer-motion";
import { RenderIcon } from "./IconHelper";

export default function CoreValues({ values }) {
  if (!values || !values.length) return null;

  return (
    <section className="py-24 px-6 bg-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 space-y-3">
          <span className="text-sky-600 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-100/80 px-3.5 py-1.5 rounded-md border border-sky-200 inline-block">
            OUR CORE VALUES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Principles That Drive Our Work
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            These foundational standards guide how we engineer software solutions and mentor learners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, index) => (
            <motion.div
              key={val.id || index}
              className="group relative bg-white border border-slate-200/90 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 space-y-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                <RenderIcon name={val.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 group-hover:text-sky-600 transition-colors">
                {val.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
