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
  Smartphone,
  Palette,
  BarChart3,
  Server,
} from "lucide-react";

export default function Internship() {

  const [selectedInternship, setSelectedInternship] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Internship Programs - YugAntar Technologies";
  }, []);

  const internshipPrograms = [
    {
      title: "Web Development Internship",
      duration: "3 Months",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      icon: <Globe className="w-12 h-12 text-orange-500" />,
      description:
        "Build modern websites and web applications while working on real projects with our development team.",
    },
    {
      title: "Python Development Internship",
      duration: "3 Months",
      skills: ["Python", "Flask", "Django", "APIs", "Databases"],
      icon: <Code className="w-12 h-12 text-orange-500" />,
      description:
        "Learn backend development and build scalable applications using modern Python frameworks.",
    },
    {
      title: "Mobile App Development Internship",
      duration: "3 Months",
      skills: ["Flutter", "React Native", "Firebase"],
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      description:
        "Create cross-platform mobile applications and understand the full mobile development lifecycle.",
    },
    {
      title: "UI / UX Design Internship",
      duration: "3 Months",
      skills: ["Figma", "Wireframing", "Prototyping"],
      icon: <Palette className="w-12 h-12 text-orange-500" />,
      description:
        "Design modern user interfaces and learn how to create intuitive digital experiences.",
    },
    {
      title: "Data Science Internship",
      duration: "3 Months",
      skills: ["Python", "ML", "Data Analysis", "Visualization"],
      icon: <BarChart3 className="w-12 h-12 text-amber-400" />,
      description:
        "Work with real datasets and learn machine learning, data analysis, and visualization techniques.",
    },
    {
      title: "Java Development Internship",
      duration: "3 Months",
      skills: ["Java", "Spring Boot", "REST APIs"],
      icon: <Server className="w-12 h-12 text-purple-400" />,
      description:
        "Develop enterprise-grade applications using modern Java frameworks and backend architecture.",
    },
  ];

  const benefits = [
    { icon: <Briefcase className="w-10 h-10 mx-auto text-orange-500" />, title: "Live Projects", desc: "Work on real industry projects." },
    { icon: <GraduationCap className="w-10 h-10 mx-auto text-orange-500" />, title: "Expert Mentors", desc: "Guidance from experienced developers." },
    { icon: <Award className="w-10 h-10 mx-auto text-amber-400" />, title: "Certification", desc: "Internship completion certificate." },
    { icon: <Rocket className="w-10 h-10 mx-auto text-orange-500" />, title: "Career Support", desc: "Interview preparation & career guidance." },
  ];

  const openModal = (program) => {
    setSelectedInternship(program);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-slate-50 text-slate-900">

      <Navbar />

      {/* Hero Section */}

      <section className="py-24 text-center max-w-7xl mx-auto px-6">

        <h1 className="text-3xl lg:text-5xl font-bold leading-snug mb-4 text-slate-900">
          Internship Programs
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          Start your career with hands-on industry internships.  
          Gain practical experience, build real projects, and learn from expert mentors.
        </p>

        <a
          href="#programs"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 rounded-xl font-bold text-slate-900 shadow-xl "
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
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="site-card rounded-3xl p-8 text-center text-slate-900"
            >
              <div className="mb-4">{b.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{b.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ================== INTERNSHIP CONTENT ================== */}
        <div className="space-y-6 mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">
            Internship Opportunities for Students
          </h2>

          <p className="text-slate-600 leading-8">
            We believe that practical experience is essential for building a successful career.
            That is why YugAntar Technologies offers an{" "}
            <a href="/internship-program-ahmedabad" className="text-orange-500 font-semibold hover:underline">
              IT Internship Program in Ahmedabad
            </a>{" "}
            for students enrolled in our courses. Our internship programs are designed to bridge
            the gap between theoretical knowledge and real-world industry experience.
          </p>

          <p className="text-slate-600 leading-8">
            Students from our{" "}
            <a href="/mern-stack-course-ahmedabad" className="text-orange-500 font-semibold hover:underline">
              MERN Stack Development Course
            </a>
            ,{" "}
            <a href="/ui-ux-design-course-ahmedabad" className="text-orange-500 font-semibold hover:underline">
              UI UX Design Course
            </a>
            , and{" "}
            <a href="/digital-marketing-course-ahmedabad" className="text-orange-500 font-semibold hover:underline">
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
            <a href="/website-development-ahmedabad" className="text-orange-500 font-semibold hover:underline">
              Website Development Services in Ahmedabad
            </a>{" "}
            including landing pages, static websites, dynamic applications, and
            e-commerce solutions tailored to business needs.
          </p>

          <p className="text-slate-600 leading-8">
            Our{" "}
            <a href="/seo-services-ahmedabad" className="text-orange-500 font-semibold hover:underline">
              SEO Services in Ahmedabad
            </a>{" "}
            focus on improving search engine rankings using on-page SEO, technical SEO,
            and local SEO strategies to increase visibility and organic traffic.
          </p>

          <p className="text-slate-600 leading-8">
            Businesses can also grow their brand with our{" "}
            <a href="/social-media-marketing-ahmedabad" className="text-orange-500 font-semibold hover:underline">
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

            {internshipPrograms.map((p, i) => (

              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="site-card rounded-3xl p-8 flex flex-col h-full"
              >

                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-white border border-slate-200 text-slate-900 transition-all duration-500">
                  {p.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {p.title}
                </h3>

                <div className="mb-4">
                  <span className="text-xs px-3 py-1 rounded-lg bg-orange-500/10 text-orange-500 border border-orange-500/20 font-semibold">
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
                      className="text-xs px-3 py-1 bg-slate-100 border border-slate-700 text-slate-600 rounded-lg"
                    >
                      {s}
                    </span>

                  ))}

                </div>

                <button
                  onClick={() => openModal(p)}
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 rounded-xl font-bold text-slate-900 shadow-xl hover:from-blue-500 hover:to-blue-600 transition duration-300 mt-auto"
                >
                  Apply Now
                </button>

              </motion.div>

            ))}

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
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3.5 rounded-xl font-bold text-slate-900 shadow-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
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