import React from "react";
import { motion } from "framer-motion";

export default function PartnersSection({ partners }) {
  if (!partners || !partners.length) return null;

  return (
    <section className="py-20 px-6 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <div>
          <span className="text-sky-600 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-50 px-3.5 py-1.5 rounded-md border border-sky-100 inline-block mb-3">
            PARTNERS & CERTIFICATIONS
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Trusted Industry Collaborations
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center h-20 w-44 hover:shadow-md transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {partner.logo ? (
                <img src={partner.logo} alt={partner.name || "Partner"} className="max-h-12 max-w-full object-contain" />
              ) : (
                <span className="text-sm font-bold text-slate-700">{partner.name}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
