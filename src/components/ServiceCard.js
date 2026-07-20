import React from "react";

export default function ServiceCard({ service, onBook }) {
  return (
    <div className="group premium-card-hover-light bg-white border border-slate-200/90 p-8 rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-sky-50 transition-all duration-300"></div>
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 text-white text-3xl mb-6 shadow-lg transition-transform duration-300">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-700 leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
              <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Book Now Button */}
        <button
          onClick={() => onBook(service)}
          className="w-full py-3 px-6 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
