import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    document.title = "Skill-Based Training & Internship Programs - YugAntar Technologies";
  }, []);

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
    { icon: <Briefcase className="w-8 h-8" />, title: "Live Projects", desc: "Work on real client & industry projects." },
    { icon: <GraduationCap className="w-8 h-8" />, title: "Skill-Based Training", desc: "Practical hands-on developer training." },
    { icon: <Award className="w-8 h-8" />, title: "Certification", desc: "Recognized internship certificate." },
    { icon: <Rocket className="w-8 h-8" />, title: "Career Support", desc: "100% placement & interview guidance." },
  ];

  const openModal = (program) => {
    setSelectedInternship(program);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans">

      <Navbar />

      {/* Hero Section */}

      <section className="py-24 text-center max-w-7xl mx-auto px-6">

        <h1 className="text-3xl lg:text-5xl font-bold leading-snug mb-4 text-slate-900">
          Skill-Based Training & <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Live Project Internships</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          Launch your career with practical skill-based training and real-world project internships in Ahmedabad. Work on live production code, learn from industry experts, and get certified.
        </p>

        <a
          href="#programs"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 px-7 py-3.5 rounded-xl font-bold text-white shadow-xl shadow-blue-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-300"
        >
          Explore Programs
        </a>

      </section>

      {/* Benefits Section */}

      <section className="py-16 bg-white border-t border-b border-slate-200">

        <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
          Why Choose Our Internship?
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        {/* ================== INTERNSHIP CONTENT ================== */}
        <div className="space-y-6 mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">
            Internship Opportunities for Students
          </h2>

          <p className="text-slate-600 leading-8">
            We believe that practical experience is essential for building a successful career.
            That is why YugAntar Technologies offers an{" "}
            <a href="/internship-program-ahmedabad" className="text-sky-600 font-semibold hover:underline">
              IT Internship Program in Ahmedabad
            </a>{" "}
            for students enrolled in our courses. Our internship programs are designed to bridge
            the gap between theoretical knowledge and real-world industry experience.
          </p>

          <p className="text-slate-600 leading-8">
            Students from our{" "}
            <a href="/mern-stack-course-ahmedabad" className="text-sky-600 font-semibold hover:underline">
              MERN Stack Development Course
            </a>
            ,{" "}
            <a href="/ui-ux-design-course-ahmedabad" className="text-sky-600 font-semibold hover:underline">
              UI UX Design Course
            </a>
            , and{" "}
            <a href="/digital-marketing-course-ahmedabad" className="text-sky-600 font-semibold hover:underline">
              Digital Marketing Course
            </a>{" "}
            can participate in real-world projects during their internship. This hands-on
            experience helps students understand development workflows, teamwork, and
            client requirements. By working on live projects, students build confidence,
            improve problem-solving skills, and become job-ready for opportunities in
            IT and digital marketing industries.
          </p>
        </div>

        {/* ================== SERVICES SECTION ================== */}
        <div className="space-y-6 mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">
            Digital Marketing and Website Development Services in Ahmedabad
          </h2>

          <p className="text-slate-600 leading-8">
            Along with training programs, YugAntar Technologies also provides professional
            digital solutions for businesses in Ahmedabad. Our services help companies
            build a strong online presence, reach their target audience, and generate
            more leads through effective digital strategies.
          </p>

          <p className="text-slate-600 leading-8">
            We offer{" "}
            <a href="/website-development-ahmedabad" className="text-sky-600 font-semibold hover:underline">
              Website Development Services in Ahmedabad
            </a>{" "}
            including landing pages, static websites, dynamic applications, and
            e-commerce solutions tailored to business needs.
          </p>

          <p className="text-slate-600 leading-8">
            Our{" "}
            <a href="/seo-services-ahmedabad" className="text-sky-600 font-semibold hover:underline">
              SEO Services in Ahmedabad
            </a>{" "}
            focus on improving search engine rankings using on-page SEO, technical SEO,
            and local SEO strategies to increase visibility and organic traffic.
          </p>

          <p className="text-slate-600 leading-8">
            Businesses can also grow their brand with our{" "}
            <a href="/social-media-marketing-ahmedabad" className="text-sky-600 font-semibold hover:underline">
              Social Media Marketing Services in Ahmedabad
            </a>{" "}
            where we manage platforms like Instagram, Facebook, and LinkedIn to
            engage audiences and drive conversions.
          </p>
        </div>

        {/* ================== WHY CHOOSE US ================== */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Choose YugAntar Technologies
          </h2>

          <p className="text-slate-600 leading-8">
            YugAntar Technologies is trusted by students and businesses across Ahmedabad
            because of our practical and industry-focused approach. Our courses are designed
            by experts and include hands-on training with real-world projects that help
            students build strong technical skills.
          </p>

          <p className="text-slate-600 leading-8">
            We focus on small batch sizes, personalized mentorship, and internship
            opportunities so that every student receives individual attention and
            guidance throughout their learning journey.
          </p>

          <p className="text-slate-600 leading-8">
            Businesses trust our digital marketing and development services because we
            deliver result-driven solutions. Whether you want to build a career in IT
            or grow your business online, YugAntar Technologies provides the right
            platform to achieve your goals.
          </p>
        </div>

      </div>

      </section>
 
      {/* Programs */}

      <section id="programs" className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14 text-slate-900">
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

      <section className="py-20 bg-white border-t border-slate-200 text-center">

        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Ready to Start Your Career?
        </h2>

        <p className="text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
          Apply now and gain real-world experience with YugAntar Technologies.
        </p>

        <a
          href="#programs"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-300"
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