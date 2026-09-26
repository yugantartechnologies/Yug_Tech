import React from "react";

export default function PageHeader({ title, subtitle, bgImage }) {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden bg-slate-950 text-white shadow-xl"
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* Dark Gradient Overlay for High Contrast & Professional Tech Vibe */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/90 backdrop-blur-[2px]"></div>

      {/* Glowing Neon Orbs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {subtitle && (
          <div className="inline-block mb-3 px-4 py-1.5 bg-slate-900/80 border border-sky-400/30 rounded-full text-xs font-bold uppercase tracking-wider text-sky-400 backdrop-blur-md shadow-lg">
            {subtitle}
          </div>
        )}

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-white drop-shadow-md">
          {title}
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-orange-500 mx-auto rounded-full"></div>
      </div>
    </section>
  );
}