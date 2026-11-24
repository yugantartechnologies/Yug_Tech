import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InternshipModal from "../components/InternshipModal";
import {
  Terminal,
  Database,
  Clock,
  Award,
  Users,
  PhoneCall,
  ArrowRight,
  Server,
  Cpu,
  GitBranch
} from "lucide-react";

export default function PythonInternshipAhmedabad() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedProgram = {
    title: "Python Development Internship",
    duration: "3 Months",
    skills: ["Python (Core & Advanced)", "Object-Oriented Programming", "Django / Flask", "RESTful APIs", "PostgreSQL / SQLite", "Git & GitHub"],
  };

  const modules = [
    {
      title: "Module 1: Python Core & Data Structures",
      desc: "Python syntax, lists, dictionaries, tuples, sets, file I/O operations, error handling, modules, and Object-Oriented Programming (OOP) paradigms."
    },
    {
      title: "Module 2: Web Frameworks with Flask & Django",
      desc: "Setting up virtual environments, URL routing, views, templates, models, ORM queries, form handling, and administrative dashboards."
    },
    {
      title: "Module 3: REST API Development & Integration",
      desc: "Building clean RESTful APIs using Django REST Framework / Flask-RESTful, JSON serializers, authentication tokens, and testing with Postman."
    },
    {
      title: "Module 4: Databases, Automation & Deployment",
      desc: "Database modeling with SQLite and PostgreSQL, writing automation scripts, Git version control, and deploying backend applications."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-14 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-200">
            <Terminal className="w-4 h-4 text-amber-700" />
            3-Month Practical Program • Ahmedabad
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Python Development Internship in Ahmedabad
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Build strong backend engineering skills with practical Python training and real-world project tasks at Yugantar Technologies in Memnagar, Ahmedabad. Master Python, Django, REST APIs, and database design with 1-on-1 mentor guidance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
            >
              Apply for Python Internship
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#curriculum"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 hover:border-amber-500 hover:text-amber-600 px-7 py-3.5 rounded-xl font-semibold transition-all"
            >
              View Python Syllabus
            </a>
          </div>
        </div>
      </section>

      {/* Program Quick Specs */}
      <section className="bg-white border-y border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Clock className="w-7 h-7 text-amber-600 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Duration</div>
              <div className="text-base sm:text-lg font-bold text-slate-900">3 Months Practical</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Cpu className="w-7 h-7 text-amber-600 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Specialization</div>
              <div className="text-base sm:text-lg font-bold text-slate-900">Backend & API Systems</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Users className="w-7 h-7 text-amber-600 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Format</div>
              <div className="text-base sm:text-lg font-bold text-slate-900">1-on-1 Mentorship</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Award className="w-7 h-7 text-amber-600 mx-auto mb-2" />
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Outcome</div>
              <div className="text-base sm:text-lg font-bold text-slate-900">Recognized Certificate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Practical Activities */}
      <section id="curriculum" className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            What You Learn & Practice in Python
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Practical skills in Python scripting, backend web development, relational databases, and enterprise code quality.
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0">
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
              Hands-On Projects That Prepare You For IT Roles
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Build functional backend systems rather than solving only abstract exercises.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700">
              <Server className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="font-bold text-white text-base mb-2">Backend REST APIs</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Design endpoints for user authentication, CRUD data processing, and validation error responses.
              </p>
            </div>

            <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700">
              <Database className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="font-bold text-white text-base mb-2">Database Architecture</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Create normalized relational schemas, write raw SQL queries, and leverage Django ORM migrations.
              </p>
            </div>

            <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700">
              <GitBranch className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="font-bold text-white text-base mb-2">Clean Code & Git</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Follow PEP 8 style standards, write modular code, and manage version control with GitHub commits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & How to Apply */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Eligibility & Application Details
          </h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              • <strong>Target Audience:</strong> Students or graduates with backgrounds in BCA, MCA, B.Tech/BE (CSE, IT, EC), B.Sc (Computer Science / IT), or Diploma in IT.
            </p>
            <p>
              • <strong>Prior Experience:</strong> Basic knowledge of programming logic (variables, loops, conditions) in any language. We start from core Python and progress toward advanced architectures.
            </p>
            <p>
              • <strong>Office Location:</strong> In-person practical training at our center: <em>A-604, Sanskrit Galleria, Rangoli Ice Cream, Gurukul Road, Memnagar, Ahmedabad, Gujarat - 380052</em>.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Direct Mentor Helpline</p>
              <p className="text-base font-bold text-slate-900 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <a href="tel:9054372690" className="hover:text-amber-600 transition">+91 9054372690</a>
                <span className="text-slate-300">/</span>
                <a href="tel:7859982605" className="hover:text-amber-600 transition">7859982605</a>
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              Apply for Python Program
            </button>
          </div>
        </div>
      </section>

      {/* Cross Links to Other Tracks */}
      <section className="py-10 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">Explore Related Programs</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <Link to="/web-development-internship-ahmedabad" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-amber-600 font-medium">Web Development Internship</Link>
            <Link to="/digital-marketing-internship-ahmedabad" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-amber-600 font-medium">Digital Marketing Internship</Link>
            <Link to="/it-internship-ahmedabad" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-amber-600 font-medium">All IT Internships</Link>
            <Link to="/contact" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-amber-600 font-medium">Contact Office</Link>
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

