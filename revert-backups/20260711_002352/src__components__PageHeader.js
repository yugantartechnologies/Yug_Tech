import React from "react";

export default function PageHeader({ title, subtitle, bgImage }) {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-transparent text-slate-900"
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
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>

      {/* Light Overlay when image is used */}
      {bgImage && (
        <div className="absolute inset-0 bg-white/80"></div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-orange-100 border border-orange-200 rounded-lg text-sm font-semibold text-orange-700">
          {subtitle}
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight text-slate-900">
          {title}
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto"></div>
      </div>
    </section>
  );
}