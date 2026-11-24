import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InternshipModal from "../components/InternshipModal";
import {
  Globe,
  CheckCircle,
  Clock,
  Award,
  Users,
  PhoneCall,
  ArrowRight,
  Laptop,
  Layers,
  GitBranch
} from "lucide-react";

export default function WebDevelopmentInternshipAhmedabad() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedProgram = {
    title: "Web Development Internship",
    duration: "3 Months",
    skills: ["HTML5", "CSS3 / Tailwind", "JavaScript (ES6+)", "React.js", "Node.js & Express", "MongoDB", "Git & GitHub"],
  };

  const modules = [
    {
      title: "Module 1: Modern Frontend Foundations",
      desc: "Semantic HTML5, CSS Grid/Flexbox, responsive UI design, modern JavaScript (ES6+), DOM manipulation, and asynchronous programming."
    },
    {
      title: "Module 2: React.js Component Architecture",
      desc: "React hooks (useState, useEffect, useMemo), state management, routing with React Router, component lifecycle, and interactive UI patterns."
    },
    {
      title: "Module 3: Backend & REST APIs",
      desc: "Node.js runtime, Express server setup, RESTful API architecture, JSON handling, CRUD operations, and middleware."
    },
    {
      title: "Module 4: Database Integration & Deployment",
      desc: "MongoDB data modeling, Mongoose ODM, authentication fundamentals, Git version control, GitHub collaboration, and live server deployment."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-14 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-sky-200">
            <Globe className="w-4 h-4 text-sky-600" />
            3-Month Practical Program • Ahmedabad
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Web Development Internship in Ahmedabad
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Gain hands-on web development experience at Yugantar Technologies in Memnagar, Ahmedabad. Work on real production code, build modern responsive web applications using React and Node.js, and learn under experienced software mentors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
            >
              Apply for Web Dev Internship
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#curriculum"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 hover:border-sky-500 hover:text-sky-600 px-7 py-3.5 rounded-xl font-semibold transition-all"
            >
              View Learning Syllabus
            </a>
          </div>
        </div>
      </section>

      {/* Program Quick Specs */}
      <section className="bg-white border-y border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Clock className="w-7 h-7 text-sky-600 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Duration</div>
              <div className="text-base sm:text-lg font-bold text-slate-900">3 Months Practical</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Laptop className="w-7 h-7 text-sky-600 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Focus</div>
              <div className="text-base sm:text-lg font-bold text-slate-900">Frontend + Full Stack</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Users className="w-7 h-7 text-sky-600 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Mentorship</div>
              <div className="text-base sm:text-lg font-bold text-slate-900">1-on-1 Code Reviews</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Award className="w-7 h-7 text-sky-600 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Outcome</div>
              <div className="text-base sm:text-lg font-bold text-slate-900">Verified Certificate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Practical Activities */}
      <section id="curriculum" className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            What You Learn & Build During the Internship
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Our curriculum focuses on the skills tech companies actively recruit for in Ahmedabad.
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 font-bold flex items-center justify-center shrink-0">
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
              Real Project Experience, Not Just Classroom Theory
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Every intern works through the software development life cycle (SDLC) using professional workflows.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700">
              <GitBranch className="w-8 h-8 text-sky-400 mb-3" />
              <h4 className="font-bold text-white text-base mb-2">Git & Version Control</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Work with feature branches, pull requests, resolving merge conflicts, and publishing clean repositories on GitHub.
              </p>
            </div>

            <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700">
              <Layers className="w-8 h-8 text-sky-400 mb-3" />
              <h4 className="font-bold text-white text-base mb-2">Live Application Tasks</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Build responsive landing pages, CRUD dashboards, and dynamic client inquiry systems with real form validations.
              </p>
            </div>

            <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700">
              <CheckCircle className="w-8 h-8 text-sky-400 mb-3" />
              <h4 className="font-bold text-white text-base mb-2">Technical Interview Prep</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prepare your project portfolio, optimize your technical resume, and practice JavaScript / React coding questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & How to Apply */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Eligibility & Application Instructions
          </h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              • <strong>Eligible Candidates:</strong> Students pursuing or holding BCA, MCA, B.Tech / BE (Computer Science / IT), B.Sc (IT), or Diploma in Engineering. Freshers seeking practical hands-on experience are welcome.
            </p>
            <p>
              • <strong>Prerequisites:</strong> Basic understanding of computers and programming logic. Familiarity with HTML/CSS is helpful but fundamental concepts will be reinforced during training.
            </p>
            <p>
              • <strong>Location:</strong> In-person at our Memnagar office: <em>A-604, Sanskrit Galleria, Rangoli Ice Cream, Gurukul Road, Memnagar, Ahmedabad, Gujarat - 380052</em>.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Have Questions?</p>
              <p className="text-base font-bold text-slate-900 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-sky-600" />
                <a href="tel:9054372690" className="hover:text-sky-600 transition">+91 9054372690</a>
                <span className="text-slate-300">/</span>
                <a href="tel:7859982605" className="hover:text-sky-600 transition">7859982605</a>
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              Submit Internship Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Cross Links to Other Tracks & Services */}
      <section className="py-10 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">Explore Related Opportunities</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <Link to="/python-internship-ahmedabad" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-sky-600 font-medium">Python Internship</Link>
            <Link to="/digital-marketing-internship-ahmedabad" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-sky-600 font-medium">Digital Marketing Internship</Link>
            <Link to="/it-internship-ahmedabad" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-sky-600 font-medium">All IT Internships</Link>
            <Link to="/website-development-ahmedabad" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-sky-600 font-medium">Web Development Services (for Businesses)</Link>
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

