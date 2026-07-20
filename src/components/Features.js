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
      title: "Industry-Oriented Courses",
      desc: "Master MERN Stack, Python, AI & more with hands-on projects.",
      icon: <BookOpen className="w-7 h-7" />,
      iconBg: "bg-indigo-50 border-indigo-100 text-indigo-600",
      hoverStyle: "hover:border-indigo-400 hover:from-indigo-50/20 hover:to-white hover:shadow-[0_20px_40px_rgba(99,102,241,0.06)]",
      accentLine: "bg-indigo-500"
    },
    {
      title: "Expert Trainers",
      desc: "Learn from industry veterans with real-world experience.",
      icon: <Award className="w-7 h-7" />,
      iconBg: "bg-emerald-50 border-emerald-100 text-emerald-600",
      hoverStyle: "hover:border-emerald-400 hover:from-emerald-50/20 hover:to-white hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)]",
      accentLine: "bg-emerald-500"
    },
    {
      title: "Live Project Training",
      desc: "Work on real-world projects to gain professional confidence.",
      icon: <Code2 className="w-7 h-7" />,
      iconBg: "bg-amber-50 border-amber-100 text-amber-600",
      hoverStyle: "hover:border-amber-400 hover:from-amber-50/20 hover:to-white hover:shadow-[0_20px_40px_rgba(245,158,11,0.06)]",
      accentLine: "bg-amber-500"
    },
    {
      title: "Placement Assistance",
      desc: "Resume grooming and mock interviews for job success.",
      icon: <Briefcase className="w-7 h-7" />,
      iconBg: "bg-rose-50 border-rose-100 text-rose-600",
      hoverStyle: "hover:border-rose-400 hover:from-rose-50/20 hover:to-white hover:shadow-[0_20px_40px_rgba(244,63,94,0.06)]",
      accentLine: "bg-rose-500"
    },
    {
      title: "Internship Support",
      desc: "Kickstart your career with top internship opportunities.",
      icon: <Rocket className="w-7 h-7" />,
      iconBg: "bg-sky-50 border-sky-100 text-sky-600",
      hoverStyle: "hover:border-sky-400 hover:from-sky-50/20 hover:to-white hover:shadow-[0_20px_40px_rgba(14,165,233,0.06)]",
      accentLine: "bg-sky-500"
    },
    {
      title: "Modern Learning",
      desc: "Practical execution over outdated theory-based learning.",
      icon: <Lightbulb className="w-7 h-7" />,
      iconBg: "bg-fuchsia-50 border-fuchsia-100 text-fuchsia-600",
      hoverStyle: "hover:border-fuchsia-400 hover:from-fuchsia-50/20 hover:to-white hover:shadow-[0_20px_40px_rgba(217,70,239,0.06)]",
      accentLine: "bg-fuchsia-500"
    },
  ];

  return (
    <section
      id="features"
      className="relative py-28 bg-white text-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-white" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">
          <p className="text-sky-600 font-semibold text-sm tracking-[0.35em] uppercase mb-3">
            Excellence in Education
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900">
            Why Choose <span className="text-sky-600">YugAntar Technologies</span>
          </h2>

          <p className="mt-5 max-w-2xl text-slate-600 text-base md:text-lg leading-relaxed">
            We focus on practical learning, industry-ready skills, and career growth.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {features.map((f, i) => (
            <div
              key={i}
              className="group premium-card-hover-light p-8 bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/90 rounded-2xl"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl w-0 group-hover:w-full transition-all duration-500 ${f.accentLine}`} />
              
              <div className="relative z-10 flex flex-col h-full pt-2">

                {/* Icon Container */}
                <div className={`mb-6 flex items-center justify-center w-14 h-14 rounded-xl border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${f.iconBg}`}>
                  {f.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {f.desc}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}