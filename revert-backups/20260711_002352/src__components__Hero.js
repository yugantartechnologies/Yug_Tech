import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, PenTool, BarChart3, Globe, Search, Megaphone } from "lucide-react";

const services = [
  {
    title: "Website Development",
    text: "Build premium web experiences that convert.",
    path: "/website-development-ahmedabad",
    icon: Globe,
    accent: "from-orange-400 to-amber-500",
    label: "Web",
  },
  {
    title: "SEO & Growth",
    text: "Drive qualified traffic with technical SEO.",
    path: "/seo-services-ahmedabad",
    icon: Search,
    accent: "from-cyan-400 to-sky-500",
    label: "SEO",
  },
  {
    title: "Social Media Strategy",
    text: "Create high-impact campaigns for modern brands.",
    path: "/social-media-marketing-ahmedabad",
    icon: Megaphone,
    accent: "from-fuchsia-500 to-violet-500",
    label: "Social",
  },
];

const heroImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HeroSection({ onQuickEnroll }) {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: (event.clientX - rect.left - rect.width / 2) / rect.width,
      y: (event.clientY - rect.top - rect.height / 2) / rect.height,
    });
  };

  const imageOffset = {
    transform: `translate3d(${pointer.x * 18}px, ${pointer.y * 18}px, 0)`,
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_26%),radial-gradient(circle_at_85%_15%,rgba(168,85,247,0.16),transparent_18%)]" />
      <div className="absolute left-[-12%] top-8 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl opacity-90 hero-blob" />
      <div className="absolute right-[-12%] top-32 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl opacity-80 hero-blob" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-sky-200 tracking-[0.18em] uppercase backdrop-blur-xl">
              Premium IT training, services & growth
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight tracking-[-0.05em] text-white">
              Transform your career with global-grade
              <span className="block bg-gradient-to-r from-sky-300 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
                digital products.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Build future-ready skills, collaborate on live projects, and launch premium IT careers with YugAntar Technologies.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link to="/courses" className="button-primary cursor-magnet">
                Explore Courses
              </Link>
              <button
                type="button"
                onClick={() => onQuickEnroll?.()}
                className="button-secondary cursor-magnet"
              >
                Enroll Now
                <span className="button-arrow">→</span>
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 grid gap-5 sm:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative glass-card overflow-hidden p-6 rounded-3xl border border-white/10 cursor-magnet"
                  >
                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-sky-400/20 to-fuchsia-500/20" />
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${service.accent} text-white shadow-[0_20px_80px_rgba(37,99,235,0.18)]`}>
                        <Icon size={26} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.32em] text-slate-400">{service.label}</p>
                        <h3 className="mt-3 text-xl font-semibold text-white">{service.title}</h3>
                      </div>
                    </div>
                    <p className="relative z-10 mt-5 text-slate-300 text-sm leading-relaxed">
                      {service.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
            onMouseMove={handlePointerMove}
            onMouseLeave={() => setPointer({ x: 0, y: 0 })}
            className="relative"
          >
            <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" style={{ transform: `translate3d(${pointer.x * 40}px, ${pointer.y * 40}px, 0)` }} />
            <div className="absolute right-0 bottom-10 h-48 w-48 rounded-full bg-fuchsia-400/15 blur-3xl" style={{ transform: `translate3d(${pointer.x * -26}px, ${pointer.y * -26}px, 0)` }} />

            <div className="glass-card relative overflow-hidden rounded-[2rem] border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-400/8" />
              <motion.div style={imageOffset} className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={heroImage}
                  alt="IT training"
                  loading="lazy"
                  className="h-[520px] w-full object-cover"
                />
              </motion.div>
              <div className="absolute left-6 bottom-6 rounded-3xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                <p className="text-sm text-slate-400">Live classroom, mentor-led outcomes</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-3xl bg-gradient-to-br from-sky-400 to-fuchsia-500 shadow-[0_20px_60px_rgba(37,99,235,0.25)] flex items-center justify-center text-white">
                    <Code size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Trusted by students</p>
                    <p className="text-lg font-semibold text-white">15k+ course signups</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
