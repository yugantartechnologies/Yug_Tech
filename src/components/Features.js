import React from "react";
import {
  BookOpen,
  Award,
  Code2,
  Briefcase,
  Rocket,
  Lightbulb,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Industry-Standard Engineering",
      desc: "Production-grade coding standards, clean Git workflows, automated testing, and scalable cloud architecture.",
      icon: <Code2 className="w-6 h-6 text-sky-600" />,
      bg: "bg-sky-50 border-sky-100",
    },
    {
      title: "Senior Technical Mentorship",
      desc: "Direct guidance from seasoned software architects and digital marketers with 8+ years of industry experience.",
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50 border-emerald-100",
    },
    {
      title: "Live Production Systems",
      desc: "Gain real-world experience by building and deploying live client applications with real databases and payments.",
      icon: <BookOpen className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50 border-amber-100",
    },
    {
      title: "Dedicated Career & Hiring Network",
      desc: "Resume optimization, technical mock interviews, and direct interviews with our partner IT companies in Ahmedabad.",
      icon: <Briefcase className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50 border-purple-100",
    },
    {
      title: "Structured IT Internship Incubator",
      desc: "Hands-on team collaboration in a corporate office environment at Sanskrit Galleria, Gurukul Road, Memnagar.",
      icon: <Rocket className="w-6 h-6 text-rose-600" />,
      bg: "bg-rose-50 border-rose-100",
    },
    {
      title: "Transparent & Agile Execution",
      desc: "No black-box delivery: clear sprint milestones, weekly progress reports, and reliable communication on all engagements.",
      icon: <Lightbulb className="w-6 h-6 text-yellow-600" />,
      bg: "bg-yellow-50 border-yellow-100",
    },
  ];

  return (
    <section
      id="features"
      className="py-18 sm:py-24 bg-white text-slate-900 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Corporate Philosophy & Strengths</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Why Businesses & Talent Choose <span className="text-sky-600">Yugantar Technologies</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            We bridge the gap between ambitious corporate digital objectives and modern software execution — fostering innovation, career acceleration, and measurable business growth.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-sky-300 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform ${f.bg}`}>
                  {f.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2.5">
                  {f.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Core Value 0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
