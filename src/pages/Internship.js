import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InternshipModal from "../components/InternshipModal";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Rocket,
  Globe,
  Code,
  Megaphone,
  Palette,
  BarChart3,
  Server,
} from "lucide-react";

export default function Internship() {

  const [selectedInternship, setSelectedInternship] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedIcons, setClickedIcons] = useState({});

  const toggleIconColor = (id) => {
    setClickedIcons((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const internshipPrograms = [
    {
      title: "Web Development Internship",
      duration: "3 Months",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      icon: <Globe className="w-8 h-8" />,
      description:
        "Build modern websites and web applications while working on real projects with our development team.",
    },
    {
      title: "Python Development Internship",
      duration: "3 Months",
      skills: ["Python", "Flask", "Django", "APIs", "Databases"],
      icon: <Code className="w-8 h-8" />,
      description:
        "Learn backend development and build scalable applications using modern Python frameworks.",
    },
    {
      title: "Digital Marketing Internship",
      duration: "3 Months",
      skills: ["SEO", "SMM", "Google Ads", "Meta Ads", "Content Marketing"],
      icon: <Megaphone className="w-8 h-8" />,
      description:
        "Master SEO, social media advertising, PPC campaigns, and lead generation strategies on live client projects.",
    },
    {
      title: "UI / UX Design Internship",
      duration: "3 Months",
      skills: ["Figma", "Wireframing", "Prototyping"],
      icon: <Palette className="w-8 h-8" />,
      description:
        "Design modern user interfaces and learn how to create intuitive digital experiences.",
    },
    {
      title: "Data Science Internship",
      duration: "3 Months",
      skills: ["Python", "ML", "Data Analysis", "Visualization"],
      icon: <BarChart3 className="w-8 h-8" />,
      description:
        "Work with real datasets and learn machine learning, data analysis, and visualization techniques.",
    },
    {
      title: "Java Development Internship",
      duration: "3 Months",
      skills: ["Java", "Spring Boot", "REST APIs"],
      icon: <Server className="w-8 h-8" />,
      description:
        "Develop enterprise-grade applications using modern Java frameworks and backend architecture.",
    },
  ];

  const benefits = [
    { icon: <Briefcase className="w-8 h-8" />, title: "Live Projects", desc: "Work on real industry and live client tasks." },
    { icon: <GraduationCap className="w-8 h-8" />, title: "Skill-Based Training", desc: "Practical hands-on technical mentorship." },
    { icon: <Award className="w-8 h-8" />, title: "Certification", desc: "Recognized project completion certificate." },
    { icon: <Rocket className="w-8 h-8" />, title: "Career Mentorship", desc: "Resume building and technical interview prep." },
  ];

  const openModal = (program) => {
    setSelectedInternship(program);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans">

      <Navbar />

      {/* Hero Section */}

      <section className="pt-28 pb-12 sm:py-24 text-center max-w-7xl mx-auto px-4 sm:px-6">

        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug mb-4 text-slate-900">
          IT Internship Programs in Ahmedabad
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10">
          Explore practical IT internship opportunities at Yugantar Technologies in Ahmedabad. Discover available domains, project-based learning, 1-on-1 developer mentorship, and program details.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#programs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 px-7 py-3.5 rounded-xl font-bold text-white shadow-xl shadow-blue-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore Internship Domains
          </a>
          <a
            href="#eligibility"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-700 border border-slate-300 hover:border-sky-500 hover:text-sky-600 px-7 py-3.5 rounded-xl font-semibold transition-all duration-300"
          >
            Eligibility & Structure
          </a>
        </div>

      </section>

      {/* Benefits Section */}

      <section className="py-12 sm:py-16 bg-white border-t border-b border-slate-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-slate-900">
          Why Choose Our Internship?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16">
          {benefits.map((b, i) => {
            const isOrange = clickedIcons[`benefit-${i}`];
            return (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                onClick={() => toggleIconColor(`benefit-${i}`)}
                className="site-card rounded-3xl p-8 text-center text-slate-900 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div
                  className={`mb-4 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    isOrange
                      ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white border-2 border-orange-400 shadow-lg shadow-orange-500/40 scale-110"
                      : "bg-sky-50 border border-sky-100 text-sky-600 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white group-hover:border-orange-400 group-hover:shadow-lg group-hover:shadow-orange-500/30 group-hover:scale-110"
                  }`}
                >
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-orange-600 transition-colors">{b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ================== DEDICATED DOMAINS & DIRECT LINKS ================== */}
        <div className="space-y-6 mb-16 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Specialized Internship Tracks in Ahmedabad
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore our focused practical internship domains. Each track features hands-on projects, modern toolchains, and industry-aligned mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="text-xs uppercase tracking-wider font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">Frontend & Full Stack</span>
              <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">Web Development Internship</h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Work on React, Node.js, REST APIs, Git workflows, and build production-ready responsive applications.
              </p>
              <a href="/web-development-internship-ahmedabad" className="text-sm font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1.5">
                View Curriculum & Projects &rarr;
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">Backend & Automation</span>
              <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">Python Internship</h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Build backend web applications, database schemas with Django/Flask, and write clean scalable Python code.
              </p>
              <a href="/python-internship-ahmedabad" className="text-sm font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1.5">
                View Curriculum & Projects &rarr;
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Growth & Analytics</span>
              <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">Digital Marketing Internship</h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Execute live Search Engine Optimization audits, Google Search Console tracking, and social media campaigns.
              </p>
              <a href="/digital-marketing-internship-ahmedabad" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1.5">
                View Curriculum & Projects &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* ================== ELIGIBILITY & PROGRAM DETAILS ================== */}
        <div id="eligibility" className="space-y-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-10 rounded-3xl shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Internship Program Details & Eligibility
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Our internship program is designed to bridge the gap between classroom theory and real-world software engineering workflows. You will collaborate with active developers and gain genuine practical experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                <h4 className="font-bold text-sky-400 text-base mb-2">Who Can Apply?</h4>
                <ul className="space-y-1.5 text-slate-300 text-xs sm:text-sm">
                  <li>• Students of BCA, MCA, B.Tech, BE, B.Sc (IT), or Diploma in IT/CS</li>
                  <li>• Fresh graduates and tech enthusiasts seeking hands-on skills</li>
                  <li>• Candidates with basic programming interest or marketing curiosity</li>
                </ul>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                <h4 className="font-bold text-sky-400 text-base mb-2">Program Structure</h4>
                <ul className="space-y-1.5 text-slate-300 text-xs sm:text-sm">
                  <li>• <strong>Duration:</strong> 3 Months of practical project-based learning</li>
                  <li>• <strong>Mentorship:</strong> 1-on-1 code reviews and weekly milestones</li>
                  <li>• <strong>Certification:</strong> Verified certificate upon project completion</li>
                  <li>• <strong>Mode:</strong> In-person practical training at our Ahmedabad center</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================== APPLICATION PROCESS ================== */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              How the Internship Application Process Works
            </h3>

            <div className="grid sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
                <h5 className="font-bold text-slate-900 text-sm mb-1">Apply Online</h5>
                <p className="text-xs text-slate-600">Select your preferred domain and submit the inquiry form.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
                <h5 className="font-bold text-slate-900 text-sm mb-1">Counselling</h5>
                <p className="text-xs text-slate-600">Discuss syllabus, expectations, and batch schedules with our mentor.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
                <h5 className="font-bold text-slate-900 text-sm mb-1">Project Work</h5>
                <p className="text-xs text-slate-600">Build 3+ milestone projects with source control and daily support.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center mx-auto mb-3">4</div>
                <h5 className="font-bold text-slate-900 text-sm mb-1">Certification</h5>
                <p className="text-xs text-slate-600">Receive project verification, certificate, and interview guidance.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      </section>
 
      {/* Programs */}

      <section id="programs" className="py-14 sm:py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-14 text-slate-900">
            Explore Internship Programs
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {internshipPrograms.map((p, i) => {
              const isOrange = clickedIcons[`program-${i}`];
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="group site-card rounded-3xl p-8 flex flex-col h-full bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300"
                >

                  <div
                    onClick={() => toggleIconColor(`program-${i}`)}
                    title="Click to toggle orange color"
                    className={`mb-6 flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-400 cursor-pointer ${
                      isOrange
                        ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white border-2 border-orange-400 shadow-xl shadow-orange-500/40 scale-110 rotate-3"
                        : "bg-sky-50 border border-sky-100 text-sky-600 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white group-hover:border-orange-400 group-hover:shadow-lg group-hover:shadow-orange-500/30 group-hover:scale-110"
                    }`}
                  >
                    {p.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-orange-600 transition-colors">
                    {p.title}
                  </h3>

                  <div className="mb-4">
                    <span className="text-xs px-3 py-1 rounded-lg bg-sky-100 text-sky-700 border border-sky-200 font-semibold">
                      {p.duration}
                    </span>
                  </div>

                  <p className="text-slate-600 mt-2 mb-5 leading-relaxed text-sm flex-grow">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">

                    {p.skills.map((s, idx) => (

                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded-lg font-medium"
                      >
                        {s}
                      </span>

                    ))}

                  </div>

                  <button
                    onClick={() => openModal(p)}
                    className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-bold py-3 px-5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-300 mt-auto cursor-pointer"
                  >
                    Apply Now
                  </button>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-t border-slate-200 text-center">

        <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-slate-900">
          Ready to Start Your Career?
        </h2>

        <p className="text-slate-600 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
          Apply now and gain real-world experience with YugAntar Technologies.
        </p>

        <a
          href="#programs"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-300"
        >
          Apply for Internship
        </a>

      </section>

      <InternshipModal
        internship={selectedInternship}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />

    </div>
  );
}