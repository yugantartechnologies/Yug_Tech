import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function TestimonialsSection({ testimonials }) {
  if (!testimonials || !testimonials.length) return null;

  return (
    <section className="py-24 px-6 bg-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-sky-600 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-100/80 px-3.5 py-1.5 rounded-md border border-sky-200 inline-block">
            TESTIMONIALS & REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Clients & Learners Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-sky-500 opacity-60" />
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-4">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover border border-sky-200" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-sky-100 border border-sky-200 text-sky-700 font-bold flex items-center justify-center text-sm">
                    {item.name ? item.name.charAt(0) : "U"}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
