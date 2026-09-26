import React from "react";
import { motion } from "framer-motion";
import { RenderIcon } from "./IconHelper";

export default function WhatWeDo({ services }) {
  if (!services || !services.length) return null;

  return (
    <section className="py-24 px-6 bg-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-sky-600 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-100/80 px-3.5 py-1.5 rounded-md border border-sky-200 inline-block">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive IT Solutions & Training Capabilities
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We empower businesses to scale digitally and help learners build production-level software skillsets.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id || index}
              className="group relative bg-white border border-slate-200/90 p-8 rounded-3xl flex flex-col justify-between shadow-md shadow-slate-200/50 hover:shadow-2xl hover:shadow-sky-500/15 hover:border-sky-400/60 hover:-translate-y-2 transition-all duration-400 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* Top ambient glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl group-hover:bg-sky-200/60 transition-all duration-500 -mr-10 -mt-10 pointer-events-none" />

              <div className="space-y-5 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-500/30 transition-all duration-400">
                  <RenderIcon name={service.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
