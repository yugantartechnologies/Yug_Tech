import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Building2, ArrowRight, Check } from "lucide-react";

export default function GrowthSection({ students, businesses }) {
  if (!students && !businesses) return null;

  return (
    <section className="py-24 px-6 bg-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 space-y-3">
          <span className="text-sky-600 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-100/80 px-3.5 py-1.5 rounded-md border border-sky-200 inline-block">
            DUAL IMPACT PIPELINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored Pathways for Talent & Enterprises
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Card 1: Students */}
          {students && (
            <motion.div
              className="group relative bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-md shadow-slate-200/50 hover:shadow-2xl hover:shadow-sky-500/15 hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold uppercase text-sky-700 bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
                    {students.eyebrow}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {students.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {students.description}
                </p>

                {/* Flow Pills */}
                {students.flow && (
                  <div className="pt-2">
                    <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Career Roadmap:
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {students.flow.map((step, i) => (
                        <React.Fragment key={i}>
                          <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-sky-600" />
                            {step}
                          </span>
                          {i < students.flow.length - 1 && (
                            <span className="text-slate-300 text-xs font-bold">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-8 mt-8 border-t border-slate-100">
                <Link
                  to={students.buttonLink || "/courses"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white px-6 py-3.5 rounded-xl font-bold transition duration-300 shadow-md shadow-sky-500/20 hover:shadow-lg hover:-translate-y-0.5 text-sm"
                >
                  {students.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}

          {/* Card 2: Businesses */}
          {businesses && (
            <motion.div
              className="group relative bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-md shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold uppercase text-indigo-700 bg-indigo-50 px-3 py-1 rounded-md border border-indigo-100">
                    {businesses.eyebrow}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {businesses.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {businesses.description}
                </p>

                {/* Flow Pills */}
                {businesses.flow && (
                  <div className="pt-2">
                    <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Digital Growth Blueprint:
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {businesses.flow.map((step, i) => (
                        <React.Fragment key={i}>
                          <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-indigo-600" />
                            {step}
                          </span>
                          {i < businesses.flow.length - 1 && (
                            <span className="text-slate-300 text-xs font-bold">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-8 mt-8 border-t border-slate-100">
                <Link
                  to={businesses.buttonLink || "/services"}
                  className="w-full inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-indigo-500 bg-slate-900 hover:bg-indigo-950 text-white px-6 py-3.5 rounded-xl font-bold transition duration-300 shadow-md hover:-translate-y-0.5 text-sm"
                >
                  {businesses.buttonText}
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
