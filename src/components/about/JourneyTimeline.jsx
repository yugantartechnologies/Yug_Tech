import React from "react";
import { motion } from "framer-motion";
import { Milestone } from "lucide-react";

export default function JourneyTimeline({ journey }) {
  if (!journey || !journey.length) return null;

  return (
    <section className="py-24 px-6 bg-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-sky-600 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-100/80 px-3.5 py-1.5 rounded-md border border-sky-200 inline-block">
            OUR JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Yugantar Technologies Evolved
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            From humble beginnings in Ahmedabad to a full-scale IT solutions & training platform.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-sky-200 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-sky-600 shadow-md group-hover:scale-125 group-hover:border-indigo-600 transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
              </div>

              {/* Year/Phase Label on Desktop */}
              <div className="sm:absolute sm:-left-36 sm:top-1 text-xs font-mono font-bold text-sky-700 bg-sky-100/90 border border-sky-200 px-3 py-1 rounded-md w-fit mb-2 sm:mb-0 shadow-2xs">
                {item.year}
              </div>

              {/* Timeline Card */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm shadow-slate-200/50 hover:shadow-xl hover:border-sky-300 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Milestone className="w-5 h-5 text-sky-600" />
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
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
