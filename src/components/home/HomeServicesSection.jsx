import React from "react";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Search, 
  TrendingUp, 
  Cpu, 
  Palette, 
  ArrowRight
} from "lucide-react";

export default function HomeServicesSection() {
  const services = [
    {
      icon: <Globe className="w-6 h-6 text-sky-600" />,
      bg: "bg-sky-50 border-sky-100",
      accent: "bg-sky-500",
      title: "Web & Enterprise Development",
      description: "Fast, secure, responsive corporate websites, e-commerce stores, and complex SaaS portals engineered on React, Next.js, and Node.js.",
      link: "/website-development-ahmedabad",
      tags: ["Next.js & React", "E-Commerce", "Custom Web Apps", "REST & GraphQL"]
    },
    {
      icon: <Smartphone className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50 border-purple-100",
      accent: "bg-purple-500",
      title: "Mobile App Development",
      description: "High-performance iOS and Android mobile apps engineered with React Native and Flutter for flawless user engagement.",
      link: "/services",
      tags: ["iOS & Android", "React Native", "Flutter", "Cross-Platform"]
    },
    {
      icon: <Search className="w-6 h-6 text-orange-600" />,
      bg: "bg-orange-50 border-orange-100",
      accent: "bg-orange-500",
      title: "SEO & Search Ranking (#1 SERP)",
      description: "Dominate Google search results with proven technical site audits, local Google Business Profile map pack ranking, and ethical backlinks.",
      link: "/seo-services-ahmedabad",
      tags: ["Technical SEO", "Google Maps Top 3", "Keyword Research", "Zero Penalties"]
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-rose-600" />,
      bg: "bg-rose-50 border-rose-100",
      accent: "bg-rose-500",
      title: "Performance & Social Marketing",
      description: "High-ROAS Meta and Google ad campaigns, landing page conversion-rate optimization (CRO), and targeted B2B lead generation funnels.",
      link: "/performance-marketing-ahmedabad",
      tags: ["Google Ads", "Meta & Instagram Ads", "4.8x Avg ROAS", "Lead Funnels"]
    },
    {
      icon: <Cpu className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50 border-emerald-100",
      accent: "bg-emerald-500",
      title: "Custom CRM & ERP Software",
      description: "Automate company operations, inventory, customer pipelines, and internal business workflows with custom-engineered software.",
      link: "/services",
      tags: ["Custom CRM", "ERP Systems", "Cloud Database", "Workflow Automation"]
    },
    {
      icon: <Palette className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50 border-amber-100",
      accent: "bg-amber-500",
      title: "UI/UX Design & Brand Strategy",
      description: "Human-centered user experiences, design systems, and interactive Figma prototypes designed to convert visitors into loyal clients.",
      link: "/courses/ui-ux-design",
      tags: ["Figma Design", "Wireframes & Prototypes", "Design Systems", "Usability Testing"]
    }
  ];

  return (
    <section className="py-18 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Enterprise Digital Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            End-to-End <span className="text-sky-600">IT Services & Digital Solutions</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            From modern responsive web design to enterprise cloud architecture and high-converting marketing campaigns, we engineer technological solutions that accelerate your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white hover:bg-white border border-slate-200 hover:border-sky-300 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${service.bg}`}>
                    {service.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2.5">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={service.link}
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 transition"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="text-xs font-semibold text-slate-500 hover:text-orange-600 transition"
                >
                  Get Quote →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">Have a specific custom project or technical requirement in mind?</h4>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">Our technical consultants in Ahmedabad are ready to evaluate your project scope and provide a free quotation.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/services"
              className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm transition shadow-xs"
            >
              All Services
            </Link>
            <a
              href="#consultation-form"
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-600/20 transition hover:-translate-y-0.5"
            >
              Discuss Your Scope
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
