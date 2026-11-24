import React from "react";
import { Link } from "react-router-dom";
import { Code2, Palette, LineChart, Terminal, ArrowRight, Award } from "lucide-react";

export default function CourseHighlights() {
  const popularCourses = [
    {
      title: "Full Stack Development (MERN)",
      description: "Master MongoDB, Express.js, React 19, and Node.js with production REST APIs, microservices, and live cloud deployment.",
      icon: <Code2 className="w-6 h-6 text-sky-600" />,
      bg: "bg-sky-50 border-sky-100",
      duration: "6 Months",
      projects: "5+ Live Projects",
      link: "/courses/full-stack-mern",
      tags: ["React 19", "Node.js", "MongoDB", "Express", "REST APIs"]
    },
    {
      title: "Python Full Stack & AI/ML",
      description: "Learn Python from foundational logic to FastAPI, Django backend systems, database modeling, and machine learning integration.",
      icon: <Terminal className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50 border-emerald-100",
      duration: "6 Months",
      projects: "4+ Live Projects",
      link: "/courses/python-development",
      tags: ["Python 3.12", "Django", "FastAPI", "PostgreSQL", "Pandas"]
    },
    {
      title: "UI/UX Product Design & Figma",
      description: "Create human-centered user experiences, design systems, design thinking heuristics, wireframes, and interactive clickable prototypes in Figma.",
      icon: <Palette className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50 border-purple-100",
      duration: "3 Months",
      projects: "6+ Portfolio Case Studies",
      link: "/courses/ui-ux-design",
      tags: ["Figma", "Design Systems", "Wireframing", "User Research"]
    },
    {
      title: "Digital Marketing & Performance SEO",
      description: "Master Google SEO algorithms, Google Business Profile Maps ranking, Meta & Google Ads, and conversion rate optimization.",
      icon: <LineChart className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50 border-amber-100",
      duration: "3 Months",
      projects: "Live Ad Budget Campaigns",
      link: "/courses/digital-marketing",
      tags: ["Technical SEO", "Google Ads", "Meta Ads", "Analytics"]
    },
  ];

  return (
    <section
      className="py-18 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-orange-600" />
            <span>Career Acceleration Programs</span>
          </div> 

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Industry-Oriented <span className="text-sky-600">Tech Training & Internships</span>
          </h2>  

          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Gain the hands-on engineering skills required by modern IT companies. Real projects, verified certification, and direct hiring assistance in Ahmedabad.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {popularCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white hover:bg-white border border-slate-200/90 hover:border-sky-300 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-105 transition-transform ${course.bg}`}>
                    {course.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                    {course.duration}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold mb-2 text-slate-900 group-hover:text-sky-600 transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {course.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {course.projects}
                </span>

                <Link
                  to={course.link}
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 transition"
                >
                  <span>Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Programs CTA */}
        <div className="text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 hover:border-slate-400 transition shadow-xs"
          >
            <span>Explore All 10+ Tech Courses & Internships</span>
            <ArrowRight className="w-4 h-4 text-orange-600" />
          </Link>
        </div>

      </div>
    </section>
  );
}
