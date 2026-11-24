import React from "react";
import { Users, Star, Award, Briefcase } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      number: "150+",
      label: "Enterprise Projects Delivered",
      subtext: "Websites, Mobile Apps & Custom CRM Platforms",
      icon: <Briefcase className="w-6 h-6 text-sky-600" />,
      bg: "bg-sky-50 border-sky-100",
    },
    {
      number: "5,000+",
      label: "Students & Developers Trained",
      subtext: "MERN, Python, Java & UI/UX Career Programs",
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50 border-emerald-100",
    },
    {
      number: "4.9 / 5",
      label: "Average Google Reviews Rating",
      subtext: "Consistently rated 5 stars by clients & students",
      icon: <Star className="w-6 h-6 text-amber-500 fill-amber-500" />,
      bg: "bg-amber-50 border-amber-100",
    },
    {
      number: "95%",
      label: "Placement & Growth Success",
      subtext: "Direct recruitment pipeline with partner IT firms",
      icon: <Award className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50 border-purple-100",
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white hover:bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-105 transition-transform ${stat.bg}`}>
                  {stat.icon}
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
