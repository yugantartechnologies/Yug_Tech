import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import {
  Users,
  Star,
  Target,
  Award,
  Rocket,
  Handshake,
  Lightbulb,
  GraduationCap,
  Sparkles,
  RefreshCw,
  Brain,
} from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About YugAntar Technologies Ahmedabad - Best IT Company in Navrangpura";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "YugAntar Technologies Ahmedabad - Top IT company near Vijay Cross Road offering software development, web solutions, and tech services for businesses in Gujarat."
      );
    }
  }, []);

  const stats = [
    { 
      number: "5000+", 
      label: "Students Trained", 
      icon: <Users className="w-8 h-8 mx-auto" />, 
      cardStyle: "hover:border-indigo-400 hover:shadow-[0_15px_30px_rgba(99,102,241,0.06)] hover:from-indigo-50/20", 
      accent: "bg-indigo-500",
      iconColor: "text-indigo-500"
    },
    { 
      number: "4.9★", 
      label: "Google Rating", 
      icon: <Star className="w-8 h-8 mx-auto fill-amber-550/10" />, 
      cardStyle: "hover:border-amber-400 hover:shadow-[0_15px_30px_rgba(245,158,11,0.06)] hover:from-amber-50/20", 
      accent: "bg-amber-500",
      iconColor: "text-amber-500"
    },
    { 
      number: "100%", 
      label: "Placement Support", 
      icon: <Target className="w-8 h-8 mx-auto" />, 
      cardStyle: "hover:border-sky-400 hover:shadow-[0_15px_30px_rgba(14,165,233,0.06)] hover:from-sky-50/20", 
      accent: "bg-sky-500",
      iconColor: "text-sky-500"
    },
    { 
      number: "50+", 
      label: "Expert Mentors", 
      icon: <Award className="w-8 h-8 mx-auto" />, 
      cardStyle: "hover:border-emerald-400 hover:shadow-[0_15px_30px_rgba(16,185,129,0.06)] hover:from-emerald-50/20", 
      accent: "bg-emerald-500",
      iconColor: "text-emerald-500"
    }
  ];

  const values = [
    {
      title: "Industry First Learning",
      desc: "Skills-focused training designed for real-world IT careers, not just certificates.",
      icon: <Rocket className="w-7 h-7" />,
      iconBg: "bg-sky-50 border-sky-100 text-sky-600",
      hoverStyle: "hover:border-sky-400 hover:from-sky-50/20 hover:shadow-[0_15px_30px_rgba(14,165,233,0.06)]",
      accent: "bg-sky-500"
    },
    {
      title: "Integrity & Transparency",
      desc: "Honest guidance, realistic outcomes, and long-term student success.",
      icon: <Handshake className="w-7 h-7" />,
      iconBg: "bg-indigo-50 border-indigo-100 text-indigo-600",
      hoverStyle: "hover:border-indigo-400 hover:from-indigo-50/20 hover:shadow-[0_15px_30px_rgba(99,102,241,0.06)]",
      accent: "bg-indigo-500"
    },
    {
      title: "Innovation Driven",
      desc: "Curriculum aligned with modern tools, frameworks, and global tech trends.",
      icon: <Lightbulb className="w-7 h-7" />,
      iconBg: "bg-fuchsia-50 border-fuchsia-100 text-fuchsia-600",
      hoverStyle: "hover:border-fuchsia-400 hover:from-fuchsia-50/20 hover:shadow-[0_15px_30px_rgba(217,70,239,0.06)]",
      accent: "bg-fuchsia-500"
    },
    {
      title: "Student-Centric Approach",
      desc: "Every student receives mentorship, confidence, and career direction.",
      icon: <GraduationCap className="w-7 h-7" />,
      iconBg: "bg-emerald-50 border-emerald-100 text-emerald-600",
      hoverStyle: "hover:border-emerald-400 hover:from-emerald-50/20 hover:shadow-[0_15px_30px_rgba(16,185,129,0.06)]",
      accent: "bg-emerald-500"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      <PageHeader
        title="About YugAntar Technologies"
        subtitle="Building Skills. Creating Careers. Shaping the Next Generation."
      />

      <main className="flex-grow">
        
        {/* Stats Section */}
        <motion.section
          className="py-20 bg-white border-b border-slate-200/60"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-4xl font-extrabold text-center mb-16 text-slate-900 tracking-tight"
              variants={fadeInUp}
            >
              Our Impact in Numbers
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className={`group relative text-center bg-gradient-to-br from-white to-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 ${s.cardStyle}`}
                  variants={fadeInUp}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl w-0 group-hover:w-full transition-all duration-500 ${s.accent}`} />
                  <div className={`mb-4 transform transition-transform duration-300 group-hover:scale-110 ${s.iconColor}`}>{s.icon}</div>
                  <h3 className="text-3xl font-extrabold text-slate-900">{s.number}</h3>
                  <p className="text-slate-500 mt-1.5 font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Story Section */}
        <motion.section
          className="py-24 bg-slate-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              className="text-4xl font-extrabold text-center mb-16 text-slate-900 tracking-tight"
              variants={fadeInUp}
            >
              Our Story — A New Era Begins
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                className="flex items-start space-x-5 bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm"
                variants={fadeInUp}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-center text-sky-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    The Beginning
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    YugAntar Technologies was founded with a vision to bridge
                    the gap between academic learning and real-world industry
                    requirements. Many students graduate with theoretical
                    knowledge but lack practical exposure needed in the IT
                    industry.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-5 bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm"
                variants={fadeInUp}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    The Transformation
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    The name <strong>YugAntar</strong> represents a new era
                    of transformation. Our mission is to redefine technical
                    education by providing industry-oriented training,
                    real project experience, and mentorship from experienced
                    professionals.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Mission Vision */}
        <motion.section
          className="py-24 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-4xl font-extrabold text-center mb-16 text-slate-900 tracking-tight"
              variants={fadeInUp}
            >
              Our Mission & Vision
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10">
              <motion.div
                className="group relative bg-gradient-to-br from-white to-white border border-slate-200 rounded-3xl p-8 hover:-translate-y-1 hover:border-sky-500/20 hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 transition-all duration-300 group-hover:scale-105">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-sky-600">
                  Our Mission
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  To empower students with practical IT skills, industry
                  confidence, and career clarity through expert mentorship
                  and real-world project experience.
                </p>
              </motion.div>

              <motion.div
                className="group relative bg-gradient-to-br from-slate-900 to-indigo-950 border border-slate-800 p-8 rounded-3xl text-white hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] hover:border-indigo-500/30 transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.08),transparent_40%)] rounded-3xl" />
                <div className="relative z-10 mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 transition-all duration-300 group-hover:scale-105">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="relative z-10 text-2xl font-bold mb-4 text-white">
                  Our Vision
                </h3>
                <p className="relative z-10 leading-relaxed text-slate-350">
                  To become India's most trusted IT training institute by
                  producing globally competitive professionals equipped
                  with practical skills and ethical values.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          className="py-24 bg-slate-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-4xl font-extrabold text-center mb-16 text-slate-900 tracking-tight"
              variants={fadeInUp}
            >
              What Makes Us Different
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  className={`group relative p-6 bg-gradient-to-br from-white to-white border border-slate-200/80 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 ${v.hoverStyle}`}
                  variants={fadeInUp}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl w-0 group-hover:w-full transition-all duration-500 ${v.accent}`} />
                  <div className={`mb-5 flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${v.iconBg}`}>
                    {v.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-slate-900 group-hover:text-slate-950 transition-colors">
                    {v.title}
                  </h4>
                  <p className="text-slate-550 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Philosophy */}
        <motion.section
          className="py-24 bg-white border-t border-slate-200/60"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              className="text-4xl font-extrabold mb-8 text-slate-900 tracking-tight"
              variants={fadeInUp}
            >
              Five Minds. One Mission.
            </motion.h2>

            <div className="space-y-6 text-left max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-6">
                Leading IT Training Institute in Navrangpura Ahmedabad
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg text-center">
                YugAntar Technologies is located in Navrangpura, one of the major
                education and business hubs of Ahmedabad. Students from across the
                city join our institute to learn modern technologies and digital
                marketing skills.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg text-center">
                Our training programs and digital services help individuals and
                businesses grow in the digital economy. If you are searching for a
                reliable IT training institute or digital marketing agency in Ahmedabad,
                YugAntar Technologies is the right place to start your journey.
              </p>
              
              <motion.p
                className="text-slate-600 leading-relaxed text-lg text-center mt-6"
                variants={fadeInUp}
              >
                Our team combines expertise in technology, training,
                and industry practices to create a learning ecosystem
                where students gain confidence, practical knowledge,
                and career-ready skills.
                <br /><br />
                <strong className="text-indigo-600 block text-xl font-bold">
                  At YugAntar Technologies, our mission is to transform
                  passionate learners into skilled IT professionals
                  ready for the global industry.
                </strong>
              </motion.p>
            </div>

            <motion.div
              className="flex justify-center space-x-6"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-sky-50/50 border border-sky-100 rounded-2xl flex items-center justify-center text-sky-600 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
                <Brain className="w-8 h-8" />
              </div>
              <div className="w-16 h-16 bg-indigo-50/50 border border-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                <Users className="w-8 h-8" />
              </div>
              <div className="w-16 h-16 bg-emerald-50/50 border border-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                <Target className="w-8 h-8" />
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}