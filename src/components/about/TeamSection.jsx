import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

function TeamCard3D({ member, index }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate 3D tilt angles
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 10;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;

    setRotate({ x: rotateX, y: rotateY });
    setSpotlight({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setSpotlight({ x: 0, y: 0, opacity: 0 });
  };

  return (
    <motion.div
      className="perspective-1000"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: rotate.x === 0 && rotate.y === 0 ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
        }}
        className="group relative bg-white border border-slate-200/90 rounded-[2.25rem] p-8 text-center shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-sky-500/20 hover:border-sky-400 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer transform-gpu select-text"
      >
        {/* Dynamic Cursor Spotlight Effect (Z-Index 0 behind content) */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[2.25rem] z-0"
          style={{
            opacity: spotlight.opacity,
            background: `radial-gradient(350px circle at ${spotlight.x}px ${spotlight.y}px, rgba(56, 189, 248, 0.12), transparent 80%)`,
          }}
        />

        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* Shimmer Light Reflection Sweep (Z-Index 0) */}
        <div className="absolute top-0 -left-[120%] w-[180%] h-full bg-gradient-to-r from-transparent via-sky-100/30 to-transparent skew-x-[-25deg] group-hover:left-[120%] transition-all duration-1000 ease-in-out pointer-events-none z-0" />

        {/* Card Main Content (Z-Index 10 above overlays) */}
        <div className="relative z-10 flex flex-col items-center">
          
          {/* Avatar Container with Halo */}
          <div className="relative mx-auto w-36 h-36 mb-6">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 opacity-80 group-hover:opacity-100 blur-xs group-hover:animate-spin-slow transition-all duration-500" />
            
            <div className="relative w-full h-full rounded-full p-1 bg-white shadow-xl overflow-hidden">
              <img
                src={member.image || "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"}
                alt={member.name}
                className="w-full h-full object-cover rounded-full bg-slate-100 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <span className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-sky-600 border-2 border-white text-white flex items-center justify-center shadow-md group-hover:bg-blue-600 transition-colors">
              <ShieldCheck className="w-4 h-4" />
            </span>
          </div>

          {/* Member Name */}
          <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors tracking-tight mb-2">
            {member.name}
          </h3>

          {/* Designation Pill */}
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-sky-800 bg-sky-100/90 border border-sky-300/80 group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-md transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-sky-600 group-hover:bg-white animate-pulse" />
              {member.designation}
            </span>
          </div>

          {/* Detailed Description - High Contrast Dark Slate Text */}
          {member.description && (
            <p className="text-slate-700 text-sm leading-relaxed font-normal mb-6 text-center">
              {member.description}
            </p>
          )}
        </div>

        {/* Action Button */}
        {member.linkedin && (
          <div className="pt-5 border-t border-slate-100 mt-auto relative z-10 w-full">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 text-xs font-bold text-slate-800 hover:text-white bg-slate-100 hover:bg-gradient-to-r hover:from-sky-600 hover:to-blue-600 border border-slate-200 hover:border-transparent px-5 py-3 rounded-2xl transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-sky-500/25 group/btn"
              aria-label={`LinkedIn profile for ${member.name}`}
            >
              <FaLinkedin className="w-4 h-4 text-sky-600 group-hover/btn:text-white transition-colors" />
              <span>Connect on LinkedIn</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 -translate-x-1 group-hover/btn:translate-x-0 transition-all text-white" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function TeamSection({ team }) {
  if (!team || !team.length) return null;

  return (
    <section className="py-24 px-6 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-sky-600 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-100/80 px-3.5 py-1.5 rounded-md border border-sky-200 inline-block">
            OUR LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Leadership & Executive Team
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Driven technology leaders, strategy managers, and execution heads shaping digital transformation in Ahmedabad.
          </p>
        </div>

        {/* 3-Column Equal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard3D key={member.id || index} member={member} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
