import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ShieldCheck, ArrowRight, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 text-slate-900 pt-24 pb-14 sm:pt-28 sm:pb-20 border-b border-slate-200/80">
      {/* Subtle Corporate Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 sm:gap-14 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Trust Eyebrow Badge */}
            <motion.div variants={fadeUp} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
                <span>Premier IT Company & Training Institute • Ahmedabad</span>
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeUp} 
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-tight text-slate-900"
            >
              Enterprise IT Services &{" "}
              <span className="text-sky-600">Practical Tech Training</span> in Ahmedabad
            </motion.h1>

            <motion.p 
              variants={fadeUp} 
              className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 font-normal"
            >
              Yugantar Technologies delivers high-impact custom website development, mobile apps, and search engine optimization (SEO) for businesses — alongside career-focused IT training, live project software engineering, and industry certifications.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={fadeUp} 
              className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto"
            >
              <a 
                href="#consultation-form" 
                className="w-full sm:w-auto text-center px-7 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold transition-all shadow-lg shadow-sky-600/20 hover:shadow-sky-600/30 hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link 
                to="/courses" 
                className="w-full sm:w-auto text-center px-7 py-3.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-semibold transition-all shadow-xs text-sm"
              >
                Explore Courses & Internships
              </Link>
            </motion.div>

            {/* Micro Trust Indicators */}
            <motion.div variants={fadeUp} className="mt-8 pt-6 border-t border-slate-200/90 flex flex-wrap items-center gap-5 sm:gap-7 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>150+ Enterprise Projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>4.9★ Google Reviews</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-sky-600" />
                <span>5,000+ Alumni Placed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean Office Workspace Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative lg:mt-2"
          >
            {/* Image Box */}
            <div className="relative w-full h-[300px] sm:h-[420px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImgIndex}
                  src={companyImages[currentImgIndex]}
                  alt="Yugantar Technologies Office Workspace"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
