import React from "react";
import { Link } from "react-router-dom";
import { Code2, Palette, LineChart } from "lucide-react";

export default function CourseHighlights() {
  const popularCourses = [
    {
      title: "Full Stack Development (MERN)",
      description: "Master MongoDB, Express, React, and Node.js with hands-on projects.",
      icon: <Code2 className="w-7 h-7" />,
      iconBg: "bg-indigo-50 border-indigo-100 text-indigo-600",
      badgeStyle: "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20",
      hoverStyle: "hover:border-indigo-400 hover:from-indigo-50/20 hover:to-white hover:shadow-[0_20px_40px_rgba(99,102,241,0.06)]",
      accentLine: "bg-indigo-500",
      duration: "3 Months",
      popular: true,
      link: "/courses/full-stack-mern",
    },
    {
      title: "UI/UX Design",
      description: "Learn to design user-friendly and visually appealing websites and apps using modern UI/UX principles and tools.",
      icon: <Palette className="w-7 h-7" />,
      iconBg: "bg-emerald-50 border-emerald-100 text-emerald-600",
      badgeStyle: "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20",
      hoverStyle: "hover:border-emerald-400 hover:from-emerald-50/20 hover:to-white hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)]",
      accentLine: "bg-emerald-500",
      duration: "3 Months",
      popular: true,
      link: "/courses/ui-ux-design",
    },
    {
      title: "Digital Marketing",
      description: "Learn SEO, social media marketing, and online advertising to grow businesses digitally.",
      icon: <LineChart className="w-7 h-7" />,
      iconBg: "bg-amber-50 border-amber-100 text-amber-600",
      badgeStyle: "bg-amber-500/10 text-amber-500 border border-amber-500/20",
      hoverStyle: "hover:border-amber-400 hover:from-amber-50/20 hover:to-white hover:shadow-[0_20px_40px_rgba(245,158,11,0.06)]",
      accentLine: "bg-amber-500",
      duration: "3 Months",
      popular: true,
      link: "/courses/digital-marketing",
    },
  ];

  return (
    <section
      className="relative py-28 bg-white text-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-sky-600 font-semibold text-sm tracking-[0.35em] uppercase mb-3">
            Popular Programs
          </p> 

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Start Your <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">Professional Journey</span>
          </h2>  

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed">
            Choose from our career-focused programs designed to make you industry-ready
            with practical knowledge and real-world skills.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

          {popularCourses.map((course, index) => (
            <div
              key={index}
              className="group premium-card-hover-light p-8 bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/90 rounded-2xl"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl w-0 group-hover:w-full transition-all duration-500 ${course.accentLine}`} />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full pt-2">

                {/* Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-xl border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${course.iconBg}`}>
                    {course.icon}
                  </div>

                  {course.popular && (
                    <span className={`text-xs font-semibold px-3 py-1 rounded-lg ${course.badgeStyle}`}>
                      Popular
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Divider */}
                <div className="h-[1px] w-full bg-slate-200 mb-5"></div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-semibold text-slate-400">
                    {course.duration}
                  </span>

                  <Link
                    to={course.link}
                    className="inline-flex items-center gap-2 text-sky-600 font-bold group-hover:text-sky-700 transition-colors"
                  >
                    View Details
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/courses"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 px-7 py-3.5 rounded-xl font-bold text-white shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            View All Courses
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}