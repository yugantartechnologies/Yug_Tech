import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HowWeWork({ process }) {
  if (!process || !process.length) return null;

  return (
    <section className="py-24 px-6 bg-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 space-y-3">
          <span className="text-sky-600 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-100/80 px-3.5 py-1.5 rounded-md border border-sky-200 inline-block">
            HOW WE WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our 5-Step Execution & Delivery Model
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Structured workflow ensuring transparency, speed, and production quality at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {process.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-white border border-slate-200/90 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-mono text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-lg">
                    {item.step}
                  </span>
                  {index < process.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-slate-300 group-hover:text-sky-500 transition-colors" />
                  )}
                </div>
                
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
