import React, { useState } from "react";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export default function CaseStudiesResultsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const caseStudies = [
    {
      id: "erp",
      category: "software",
      categoryLabel: "Custom Software / ERP",
      title: "Enterprise Inventory & Warehouse Automation System",
      client: "Industrial Equipment Manufacturer (Ahmedabad)",
      overview: "Transformed manual paperwork and multi-warehouse discrepancies into a centralized real-time cloud ERP with automated dispatch and tracking.",
      metrics: [
        { label: "Inventory Accuracy", value: "99.98%" },
        { label: "Labor Time Saved", value: "40+ Hrs/Wk" },
        { label: "Dispatch Latency", value: "-65%" }
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
    },
    {
      id: "ecommerce",
      category: "web",
      categoryLabel: "E-Commerce Web Platform",
      title: "High-Volume Multi-Store Digital Commerce Platform",
      client: "Apparel & Lifestyle Retailer",
      overview: "Engineered an ultra-fast headless Next.js storefront integrated with payment gateways, dynamic discount engines, and real-time stock sync.",
      metrics: [
        { label: "Avg Page Load Speed", value: "0.85s" },
        { label: "Checkout Conversion", value: "+72%" },
        { label: "Monthly GMV Handled", value: "₹2.4 Cr+" }
      ],
      technologies: ["Next.js 14", "Tailwind CSS", "Redis", "Razorpay", "Node.js"],
    },
    {
      id: "seo",
      category: "seo",
      categoryLabel: "SEO & Growth Marketing",
      title: "Google Rank #1 & Local Map Dominance Campaign",
      client: "Healthcare Clinic Network (Memnagar & Satellite)",
      overview: "Comprehensive technical SEO overhaul, localized schema injection, and high-DA citation building that drove regional search monopoly.",
      metrics: [
        { label: "Target Keywords in Top 3", value: "24+" },
        { label: "Organic Inbound Calls", value: "+340%" },
        { label: "Google Maps Actions", value: "12.8K/Mo" }
      ],
      technologies: ["Technical SEO", "Schema.org", "GMB Management", "Content Architecture"],
    },
    {
      id: "mobile",
      category: "mobile",
      categoryLabel: "Cross-Platform Mobile App",
      title: "On-Demand Delivery & Fleet Dispatch Application",
      client: "Regional Logistics & Express Delivery",
      overview: "Built an offline-first mobile application for delivery executives with live GPS breadcrumb tracking, barcode verification, and instant e-signatures.",
      metrics: [
        { label: "Live Trips Completed", value: "45,000+" },
        { label: "App Store Rating", value: "4.9 ★" },
        { label: "Crash-Free Sessions", value: "99.94%" }
      ],
      technologies: ["React Native", "Google Maps SDK", "Node.js", "Firebase", "WebSockets"],
    }
  ];

  const filtered = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter(c => c.category === activeFilter);

  return (
    <section className="py-18 sm:py-24 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-orange-600" />
              <span>Proven Commercial Impact</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Featured Client <span className="text-sky-600">Projects & Case Studies</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore how Yugantar Technologies engineers high-impact software, scalable e-commerce systems, and data-driven marketing for leading businesses across Gujarat.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "software", label: "ERP / Software" },
              { id: "web", label: "Web / E-Commerce" },
              { id: "seo", label: "SEO & Growth" },
              { id: "mobile", label: "Mobile Apps" }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filtered.map((study) => (
            <div
              key={study.id}
              className="bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-sky-300 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag & Client */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-slate-200 text-sky-700 shadow-2xs">
                    {study.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-500 font-medium truncate max-w-[200px]">
                    {study.client}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-3 leading-snug">
                  {study.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {study.overview}
                </p>

                {/* Performance Metrics Cards */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 py-4 border-y border-slate-200/80 mb-6 bg-white rounded-2xl p-3 shadow-2xs">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Tags & Action */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
                  <a
                    href="#consultation-form"
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 transition"
                  >
                    <span>Request Similar Custom Solution</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-orange-500" />
                  </a>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Verified Outcome
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
