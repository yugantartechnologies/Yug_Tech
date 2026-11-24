import React, { useState } from "react";

export default function HomeTechStackSection() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend & Web" },
    { id: "backend", label: "Backend & APIs" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "cloud", label: "Cloud & Database" }
  ];

  const technologies = [
    // Frontend
    {
      name: "React.js",
      category: "frontend",
      description: "Interactive SPAs & Component Architecture",
      color: "#0284c7",
      svg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 fill-none stroke-current text-sky-500">
          <circle cx="0" cy="0" r="2.05" fill="#0284c7" stroke="none" />
          <g stroke="#0284c7" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: "Next.js",
      category: "frontend",
      description: "Server-Side Rendering & Full-Stack Web",
      color: "#0f172a",
      svg: (
        <svg viewBox="0 0 180 180" className="w-8 h-8 fill-current text-slate-900">
          <circle cx="90" cy="90" fill="#0f172a" r="90" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
          <rect fill="white" height="72" width="12" x="115" y="54" />
        </svg>
      )
    },
    {
      name: "TypeScript",
      category: "frontend",
      description: "Enterprise Type Safety & Code Reliability",
      color: "#3178C6",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path d="M57.6 50.8v43.6h-9.9V50.8H34.4v-9h36.5v9H57.6zm37.2 24.3c0 3.7-1.3 6.6-4 8.7-2.7 2.1-6.5 3.1-11.4 3.1-4 0-7.8-.8-11.4-2.5v-9.3c3.6 2 7.1 3 10.6 3 2.5 0 4.4-.5 5.8-1.5 1.3-1 2-2.3 2-3.8 0-1.4-.6-2.5-1.7-3.4-1.2-.9-3.2-1.8-6.1-2.9-4.3-1.6-7.5-3.4-9.6-5.5-2.1-2.1-3.2-4.9-3.2-8.3 0-3.6 1.4-6.4 4.1-8.5 2.7-2.1 6.5-3.1 11.2-3.1 3.5 0 6.9.7 10.3 2.1v9c-3.1-1.6-6.3-2.4-9.5-2.4-2.3 0-4.1.5-5.4 1.4s-1.9 2.2-1.9 3.8c0 1.3.5 2.4 1.6 3.2 1.1.8 3.1 1.7 6.1 2.8 4.4 1.6 7.6 3.5 9.8 5.7 2.1 2.2 3.2 5.1 3.2 8.6z" fill="#ffffff" />
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      description: "Utility-First High-Speed Responsive Design",
      color: "#0284c7",
      svg: (
        <svg viewBox="0 0 54 33" className="w-8 h-8 fill-current text-sky-500">
          <path d="M13.5 0C6.07 0 1.35 4.5 0 12c2.7-3.6 5.8-4.95 9.45-4.05 2.08.52 3.57 2.03 5.22 3.7C17.37 14.37 20.66 18 27 18c7.43 0 12.15-4.5 13.5-12-2.7 3.6-5.8 4.95-9.45 4.05-2.08-.52-3.57-2.03-5.22-3.7C23.13 3.63 19.84 0 13.5 0zM0 18c6.07 0 10.79 4.5 12.15 12-2.7-3.6-5.8-4.95-9.45-4.05-2.08.52-3.57 2.03-5.22 3.7C17.37 32.37 20.66 36 27 36c7.43 0 12.15-4.5 13.5-12-2.7 3.6-5.8 4.95-9.45 4.05-2.08-.52-3.57-2.03-5.22-3.7C23.13 21.63 19.84 18 13.5 18z" />
        </svg>
      )
    },

    // Backend
    {
      name: "Node.js",
      category: "backend",
      description: "Event-Driven Asynchronous Server Runtime",
      color: "#16a34a",
      svg: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current text-emerald-600">
          <path d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5zm-1.2 5.5v16.1l-9-5.2V13.2l9-5.2zm2.4 0l9 5.2v5.7l-9 5.2V8z" />
        </svg>
      )
    },
    {
      name: "Python",
      category: "backend",
      description: "FastAPI, Django & Data Engineering",
      color: "#3776AB",
      svg: (
        <svg viewBox="0 0 110 110" className="w-8 h-8">
          <path d="M54.5 2C27.8 2 29.5 13.6 29.5 13.6l.03 12h25.4v3.6H19.7S2 27.2 2 54.5c0 27.2 15.6 26.3 15.6 26.3h9.3v-13s-.5-15.6 15.3-15.6h25.7s14.8.2 14.8-14.3V16.3S85 2 54.5 2zm-8.8 8c2.9 0 5.3 2.4 5.3 5.3s-2.4 5.3-5.3 5.3-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3z" fill="#3776AB" />
          <path d="M55.5 108c26.7 0 25-11.6 25-11.6l-.03-12H55.1v-3.6h35.2s17.7 2 17.7-25.3c0-27.2-15.6-26.3-15.6-26.3h-9.3v13s.5 15.6-15.3 15.6H47.4s-14.8-.2-14.8 14.3v21.6S25 108 55.5 108zm8.8-8c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z" fill="#f59e0b" />
        </svg>
      )
    },
    {
      name: "Java Spring Boot",
      category: "backend",
      description: "High-Volume Enterprise Systems & Microservices",
      color: "#ea580c",
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-orange-600">
          <path d="M8.8 17.6c0 .8 1.4 1.4 3.2 1.4s3.2-.6 3.2-1.4-1.4-1.4-3.2-1.4-3.2.6-3.2 1.4zm0-3.6c0 .8 1.4 1.4 3.2 1.4s3.2-.6 3.2-1.4-1.4-1.4-3.2-1.4-3.2.6-3.2 1.4zm10.7-3.8C18.6 9 17.2 8.4 15 8c.7-.9 1.2-2 1.2-3.1 0-2.7-2.2-4.9-4.9-4.9-1.6 0-3 .8-3.9 2-1-.4-2-.6-3-.6-2.4 0-4.4 1.9-4.4 4.3 0 1.2.5 2.3 1.3 3.1-2.2.4-3.6 1-4.5 2.2-.6.8-.7 1.8-.3 2.8.5 1.1 1.7 2 3.3 2.6.2 1.3 1.3 2.4 2.8 2.8 1.5.4 3.3.6 5.4.6 2.1 0 3.9-.2 5.4-.6 1.5-.4 2.6-1.5 2.8-2.8 1.6-.6 2.8-1.5 3.3-2.6.4-1 .3-2-.3-2.8z" />
        </svg>
      )
    },
    {
      name: "PHP & Laravel",
      category: "backend",
      description: "Robust MVC Architecture & E-Commerce Engines",
      color: "#e11d48",
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-rose-600">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-7h-2V7h2v2.5z" />
        </svg>
      )
    },

    // Mobile
    {
      name: "React Native",
      category: "mobile",
      description: "Native iOS & Android from a Unified Codebase",
      color: "#0284c7",
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-sky-600">
          <path d="M12 1.5c-4.5 0-8.5 2-10 5.5 1.5 3.5 5.5 5.5 10 5.5s8.5-2 10-5.5c-1.5-3.5-5.5-5.5-10-5.5zm0 8c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm0 2.5c-4.5 0-8.5 2-10 5.5 1.5 3.5 5.5 5.5 10 5.5s8.5-2 10-5.5c-1.5-3.5-5.5-5.5-10-5.5zm0 8c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" />
        </svg>
      )
    },
    {
      name: "Flutter",
      category: "mobile",
      description: "High-FPS Cross-Platform Mobile Applications",
      color: "#0284c7",
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-sky-600">
          <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm.072 11.233l-6.236 6.236L14.386 24h7.314l-9.873-9.874 2.559-2.893z" />
        </svg>
      )
    },

    // Cloud & Database
    {
      name: "MongoDB",
      category: "cloud",
      description: "Scalable Document Database & Aggregation",
      color: "#16a34a",
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-emerald-600">
          <path d="M12 0C11.5 0 10.9.3 10.7.7 9.8 2.2 7.5 7.4 7.5 12.1c0 4.8 2.8 8.8 4.5 11.2.3.4.9.7 1.4.7s1.1-.3 1.4-.7c1.7-2.4 4.5-6.4 4.5-11.2 0-4.7-2.3-9.9-3.2-11.4-.2-.4-.8-.7-1.3-.7h-.8z" />
        </svg>
      )
    },
    {
      name: "PostgreSQL",
      category: "cloud",
      description: "ACID Compliant Relational Enterprise Data",
      color: "#4f46e5",
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-indigo-600">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      )
    },
    {
      name: "Amazon Web Services",
      category: "cloud",
      description: "EC2, S3, RDS, Lambda & Cloud Architecture",
      color: "#d97706",
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-amber-600">
          <path d="M6.8 15.6c-.6 0-1.1-.2-1.5-.5-.4-.3-.6-.8-.6-1.4 0-.8.3-1.4.9-1.8.6-.4 1.5-.6 2.7-.6h1.2v-.4c0-.5-.1-.9-.4-1.1-.3-.2-.7-.3-1.3-.3-.6 0-1.3.1-2 .4l-.4-1.2c.8-.4 1.7-.6 2.6-.6 1.1 0 2 .3 2.5.8.5.5.8 1.3.8 2.3v4.2H10v-.9c-.6.7-1.7 1.1-2.9 1.1zm.5-1.2c.6 0 1.2-.2 1.6-.6.4-.4.6-.9.6-1.5v-.5H8.4c-.8 0-1.4.1-1.8.4-.4.3-.6.7-.6 1.2 0 .4.1.7.4.8.2.2.5.2.9.2zm14.4-4.8l-2 6.6h-1.5L16.4 11l-1.8 5.2h-1.5l-2-6.6h1.5l1.3 4.8 1.8-4.8h1.4l1.8 4.8 1.3-4.8h1.4z" />
        </svg>
      )
    },
    {
      name: "Docker Containers",
      category: "cloud",
      description: "Reproducible CI/CD Deployments & Microservices",
      color: "#0284c7",
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-sky-600">
          <path d="M13.8 7.3h2.1v2.1h-2.1V7.3zm-3.2 0h2.1v2.1h-2.1V7.3zm-3.2 0h2.1v2.1H7.4V7.3zm9.6 3.2h2.1v2.1H17v-2.1zm-3.2 0h2.1v2.1h-2.1v-2.1zm-3.2 0h2.1v2.1h-2.1v-2.1zm-3.2 0h2.1v2.1H7.4v-2.1zm-3.2 0h2.1v2.1H4.2v-2.1zm18.3 1.8c-.3-.2-1.2-.5-2.2-.2-.2-.5-.5-1.1-1-1.5l-.6.5c.4.4.7.9.8 1.4-.4.1-.9.4-1.3.7H1.3c-.3 1.4 0 2.8.7 4.1 1 1.7 2.7 2.8 4.6 3 4.4.4 8.7-.3 12.8-2.2 2.1-1 3.4-2.8 3.4-4.8 0-.4-.1-.7-.3-1z" />
        </svg>
      )
    }
  ];

  const filtered = activeTab === "all" 
    ? technologies 
    : technologies.filter(t => t.category === activeTab);

  return (
    <section className="py-18 sm:py-24 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Modern Technology Foundation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Engineered With <span className="text-sky-600">Industry-Leading Technologies</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            We build on proven, modern tech stacks designed for enterprise scalability, sub-second response times, and robust security standards.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-slate-900 text-white shadow-sm font-bold"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filtered.map((tech, index) => (
            <div
              key={index}
              className="bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-sky-300 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between group"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-105 shrink-0 shadow-2xs">
                  {tech.svg}
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-sky-600 transition-colors">
                    {tech.name}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    {tech.category}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200/60">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
