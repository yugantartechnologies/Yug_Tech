import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InternshipModal from "../components/InternshipModal";
import {
  Megaphone,
  Search,
  BarChart3,
  Clock,
  Award,
  Users,
  PhoneCall,
  ArrowRight,
  Share2
} from "lucide-react";

export default function DigitalMarketingInternshipAhmedabad() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedProgram = {
    title: "Digital Marketing Internship",
    duration: "3 Months",
    skills: ["SEO (Technical & On-Page)", "Keyword Research", "Google Search Console", "Social Media Strategy", "Content Planning", "Analytics & Reporting"],
  };

  const modules = [
    {
      title: "Module 1: Search Engine Optimization (SEO) Foundations",
      desc: "Understanding search intent, conducting keyword research with real tools, title tags, meta descriptions, heading structure, and on-page optimization principles."
    },
    {
      title: "Module 2: Technical SEO & Website Audits",
      desc: "Analyzing crawl errors, XML sitemaps, robots.txt, schema markup, Core Web Vitals basics, and site audit checklists."
    },
    {
      title: "Module 3: Social Media Marketing & Content Planning",
      desc: "Platform-specific marketing strategies (Instagram, LinkedIn, Facebook), editorial calendar creation, graphic copywriting, and audience engagement techniques."
    },
    {
      title: "Module 4: Search Console, Analytics & Performance Reporting",
      desc: "Monitoring search traffic, impressions, click-through rates (CTR) on Google Search Console, tracking conversions, and preparing executive client reports."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-14 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            <Megaphone className="w-4 h-4 text-emerald-700" />
            3-Month Practical Program • Ahmedabad
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Digital Marketing Internship in Ahmedabad
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Learn real-world digital growth strategies at Yugantar Technologies in Memnagar, Ahmedabad. Gain practical project experience in Search Engine Optimization (SEO), social media content marketing, Google Search Console analysis, and campaign reporting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
            >
              Apply for Marketing Internship
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#curriculum"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 hover:border-emerald-500 hover:text-emerald-600 px-7 py-3.5 rounded-xl font-semibold transition-all"
            >
              View Practical Modules
            </a>
          </div>
        </div>
      </section>

      {/* Program Quick Specs */}
      <section className="bg-white border-y border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Clock className="w-7 h-7 text-emerald-600 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Duration</div>
              <div className="text-base sm:text-lg font-bold text-slate-900">3 Months Practical</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Search className="w-7 h-7 text-emerald-600 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Core Focus</div>
              <div className="text-base sm:text-lg font-bold text-slate-900">SEO & Social Media</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Users className="w-7 h-7 text-emerald-600 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Guidance</div>
              <div className="text-base sm:text-lg font-bold text-slate-900">Campaign Mentors</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Award className="w-7 h-7 text-emerald-600 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Credentials</div>
              <div className="text-base sm:text-lg font-bold text-slate-900">Verified Certificate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Practical Activities */}
      <section id="curriculum" className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            What You Practice During the Internship
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Practical activities designed around real market dynamics and organic visibility techniques.
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{m.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Projects & Workflow */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Hands-On Marketing Experience on Live Case Studies
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              You will produce actionable marketing collateral rather than just memorizing definitions.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700">
              <Search className="w-8 h-8 text-emerald-400 mb-3" />
              <h4 className="font-bold text-white text-base mb-2">Live SEO Audits</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Run complete on-page and technical website audits, identify indexing gaps, and write optimized metadata.
              </p>
            </div>

            <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700">
              <Share2 className="w-8 h-8 text-emerald-400 mb-3" />
              <h4 className="font-bold text-white text-base mb-2">Content Strategy</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Plan weekly content calendars, write value-driven captions, and understand audience targeting nuances.
              </p>
            </div>

            <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700">
              <BarChart3 className="w-8 h-8 text-emerald-400 mb-3" />
              <h4 className="font-bold text-white text-base mb-2">Analytics & Performance</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Interpret Search Console queries, measure organic keyword movements, and synthesize findings into client reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & How to Apply */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Eligibility & Application Guidelines
          </h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              • <strong>Eligible Applicants:</strong> Students or graduates in BBA, B.Com, BCA, MBA, Mass Communication, B.Tech, or anyone with strong interest in digital media and brand growth.
            </p>
            <p>
              • <strong>Skills Required:</strong> Good written communication, creative mindset, and eagerness to learn analytics tools. No prior coding experience required.
            </p>
            <p>
              • <strong>Office Location:</strong> In-person at our Memnagar center: <em>A-604, Sanskrit Galleria, Rangoli Ice Cream, Gurukul Road, Memnagar, Ahmedabad, Gujarat - 380052</em>.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Have Questions?</p>
              <p className="text-base font-bold text-slate-900 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                +91 9054372690
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              Apply for Marketing Internship
            </button>
          </div>
        </div>
      </section>

      {/* Cross Links */}
      <section className="py-10 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">Explore Related Opportunities</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <Link to="/web-development-internship-ahmedabad" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-600 font-medium">Web Development Internship</Link>
            <Link to="/python-internship-ahmedabad" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-600 font-medium">Python Internship</Link>
            <Link to="/it-internship-ahmedabad" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-600 font-medium">All IT Internships</Link>
            <Link to="/digital-marketing-ahmedabad" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-600 font-medium">Digital Marketing Services (for Businesses)</Link>
          </div>
        </div>
      </section>

      <InternshipModal
        internship={selectedProgram}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
}

