import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Search, Megaphone, GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const companyImages = [
  "/workspace.png",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
];

export default function HeroSection({ onQuickEnroll }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % companyImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
          alt="IT Company Office Background"
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(249,115,22,0.12),transparent_30%)] z-0" />
      <div className="absolute left-[-10%] top-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl opacity-70 z-0" />
      <div className="absolute right-[-10%] top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl opacity-60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12 sm:pt-28 sm:pb-20 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-12 items-center">
          
          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p 
              variants={fadeUp} 
              className="text-sky-400 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4"
            >
              IT Training & Digital Solutions
            </motion.p>

            <motion.h1 
              variants={fadeUp} 
              className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.18] tracking-tight text-white"
            >
              Professional IT Services &{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                Digital Solutions in Ahmedabad
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeUp} 
              className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-lg leading-relaxed text-slate-300"
            >
              Yugantar Technologies delivers high-impact IT services, custom website development, and data-driven SEO solutions for businesses — alongside career-focused IT education, practical software training, and certifications in Ahmedabad.
            </motion.p>

            <motion.div 
              variants={fadeUp} 
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Link 
                to="/contact" 
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-bold transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                Discuss Your Website Project
              </Link>
              <Link 
                to="/courses" 
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl border border-slate-700 text-white hover:bg-slate-800/40 font-semibold transition-all"
              >
                Explore IT Education & Courses
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Workspace Showcase with Floating Stat Badges (Softs Solution Service style) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:mt-6"
          >
            {/* Floating Glassmorphism Badges surrounding the hero right box */}
            <div className="absolute -top-3 right-2 z-20 bg-slate-950/90 border border-sky-400/40 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2 animate-bounce-slow">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs sm:text-sm">
                🎓
              </span>
              <div>
                <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Practical Learning</p>
                <p className="text-[11px] sm:text-xs font-bold text-sky-300">10+ Top Tech Courses</p>
              </div>
            </div>

            <div className="absolute top-1/3 left-2 z-20 bg-slate-950/90 border border-emerald-400/40 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2 hidden sm:flex">
              <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                💼
              </span>
              <div>
                <p className="text-[11px] text-slate-400 font-medium">Career Support</p>
                <p className="text-xs font-bold text-emerald-300">100% Job Assistance</p>
              </div>
            </div>

            <div className="absolute -bottom-3 right-2 z-20 bg-slate-950/90 border border-amber-400/40 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs sm:text-sm">
                ⭐
              </span>
              <div>
                <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Verified Trainers</p>
                <p className="text-[11px] sm:text-xs font-bold text-amber-300">Expert Mentorship</p>
              </div>
            </div>

            {/* Automatic Image Slideshow Box */}
            <div className="relative w-full h-[260px] sm:h-[380px] md:h-[480px] rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl group bg-slate-950">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImgIndex}
                  src={companyImages[currentImgIndex]}
                  alt="IT Company Workspace"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute top-6 left-6 bg-slate-950/80 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-sky-300 backdrop-blur-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live IT Workspace & Mentorship Hub
              </div>

              {/* Navigation dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
                {companyImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentImgIndex ? "bg-sky-400 w-5" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Dual-Audience Navigation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Card 1 - SEO Services */}
          <Link
            to="/seo-services-ahmedabad"
            className="group block premium-card-hover bg-gradient-to-br from-slate-900/80 to-slate-950/90 border border-slate-800/80 rounded-2xl p-5 cursor-pointer"
          >
            <div className="flex items-start gap-3.5">
              <div className="bg-orange-950/40 border border-orange-900/30 p-2.5 rounded-xl text-orange-400 group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300 flex-shrink-0">
                <Search size={20} />
              </div>
              <div>
                <h4 className="text-white text-base font-bold group-hover:text-orange-300 transition-colors flex items-center gap-1">
                  SEO Services
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-xs">→</span>
                </h4>
                <p className="text-slate-400 text-xs mt-1 font-medium leading-relaxed">Search visibility & organic traffic growth.</p>
              </div>
            </div>
          </Link>

          {/* Card 2 - Website Development */}
          <Link
            to="/website-development-ahmedabad"
            className="group block premium-card-hover bg-gradient-to-br from-slate-900/80 to-slate-950/90 border border-slate-800/80 rounded-2xl p-5 cursor-pointer"
          >
            <div className="flex items-start gap-3.5">
              <div className="bg-blue-950/40 border border-blue-900/30 p-2.5 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 flex-shrink-0">
                <Globe size={20} />
              </div>
              <div>
                <h4 className="text-white text-base font-bold group-hover:text-blue-300 transition-colors flex items-center gap-1">
                  Website Development
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-xs">→</span>
                </h4>
                <p className="text-slate-400 text-xs mt-1 font-medium leading-relaxed">Fast, responsive & custom business websites.</p>
              </div>
            </div>
          </Link>

          {/* Card 3 - Social Media Marketing */}
          <Link
            to="/social-media-marketing-ahmedabad"
            className="group block premium-card-hover bg-gradient-to-br from-slate-900/80 to-slate-950/90 border border-slate-800/80 rounded-2xl p-5 cursor-pointer"
          >
            <div className="flex items-start gap-3.5">
              <div className="bg-sky-950/40 border border-sky-900/30 p-2.5 rounded-xl text-sky-400 group-hover:bg-sky-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 flex-shrink-0">
                <Megaphone size={20} />
              </div>
              <div>
                <h4 className="text-white text-base font-bold group-hover:text-sky-300 transition-colors flex items-center gap-1">
                  Social Media Marketing
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-xs">→</span>
                </h4>
                <p className="text-slate-400 text-xs mt-1 font-medium leading-relaxed">Audience engagement & brand growth.</p>
              </div>
            </div>
          </Link>

          {/* Card 4 - IT Education */}
          <Link
            to="/courses"
            className="group block premium-card-hover bg-gradient-to-br from-slate-900/80 to-slate-950/90 border border-slate-800/80 rounded-2xl p-5 cursor-pointer"
          >
            <div className="flex items-start gap-3.5">
              <div className="bg-emerald-950/40 border border-emerald-900/30 p-2.5 rounded-xl text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 flex-shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <h4 className="text-white text-base font-bold group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                  IT Education
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-xs">→</span>
                </h4>
                <p className="text-slate-400 text-xs mt-1 font-medium leading-relaxed">Job-oriented tech courses, practical coding & certifications.</p>
              </div>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
