import React from "react";
import { Compass, Palette, Code2, ShieldCheck, Rocket } from "lucide-react";

export default function HomeProcessSection() {
  const steps = [
    {
      num: "01",
      icon: <Compass className="w-6 h-6 text-sky-600" />,
      bg: "bg-sky-50 border-sky-100",
      title: "Discovery & Strategy",
      desc: "We analyze your business goals, target audience, technical specifications, and timeline to build an actionable blueprint."
    },
    {
      num: "02",
      icon: <Palette className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50 border-purple-100",
      title: "UI/UX & Architecture",
      desc: "Our designers craft interactive Figma wireframes and clickable prototypes focused on user conversion and brand identity."
    },
    {
      num: "03",
      icon: <Code2 className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50 border-emerald-100",
      title: "Agile Development",
      desc: "Clean, modular code built in 2-week agile sprints with bi-weekly client demos, clear milestones, and complete progress transparency."
    },
    {
      num: "04",
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50 border-amber-100",
      title: "Quality & Security QA",
      desc: "Rigorous cross-browser, mobile responsiveness, speed optimization, and security audits ensuring zero bugs."
    },
    {
      num: "05",
      icon: <Rocket className="w-6 h-6 text-rose-600" />,
      bg: "bg-rose-50 border-rose-100",
      title: "Launch & Growth Support",
      desc: "Seamless cloud deployment, DNS setup, SEO indexation, and dedicated 24/7 technical maintenance & SLA support."
    }
  ];

  return (
    <section className="py-18 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sky-600 font-bold text-xs uppercase tracking-widest mb-2">
            Structured Execution
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Deliver <span className="text-sky-600">Successful Projects</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            A battle-tested 5-phase delivery framework that guarantees on-time delivery, crystal-clear communication, and outstanding software quality.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white hover:bg-white border border-slate-200 hover:border-sky-300 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-105 transition-transform ${step.bg}`}>
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-sky-600 transition-colors font-mono">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Stage {idx + 1} of 5</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
