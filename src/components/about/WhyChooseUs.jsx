import React from "react";
import { motion } from "framer-motion";
import { RenderIcon } from "./IconHelper";

export default function WhyChooseUs({ whyChooseUs }) {
  if (!whyChooseUs || !whyChooseUs.benefits) return null;

  return (
    <section className="py-24 px-6 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 space-y-3">
          {whyChooseUs.eyebrow && (
            <span className="text-sky-600 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-50 px-3.5 py-1.5 rounded-md border border-sky-100 inline-block">
              {whyChooseUs.eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {whyChooseUs.title || "Why Partner with Yugantar Technologies"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="group relative bg-slate-50/80 border border-slate-200/90 p-7 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-300 hover:bg-white hover:-translate-y-1.5 transition-all duration-300 space-y-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className="p-3.5 bg-white border border-slate-200 rounded-2xl w-fit text-sky-600 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-all duration-300 shadow-xs">
                <RenderIcon name={benefit.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg group-hover:text-sky-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
