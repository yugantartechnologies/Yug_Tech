import React, { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection({
  title = "Frequently Asked Questions",
  items = [],
  schemaId = "page-faq-schema",
  themeColor = "blue", // "blue" or "orange"
  isLight = false,
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schemaData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    }),
    [items]
  );

  useEffect(() => {
    if (!items.length) return undefined;

    let faqScript = document.head.querySelector(`#${schemaId}`);
    if (!faqScript) {
      faqScript = document.createElement("script");
      faqScript.type = "application/ld+json";
      faqScript.id = schemaId;
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(schemaData);

    return () => {
      const existingScript = document.head.querySelector(`#${schemaId}`);
      if (existingScript) existingScript.remove();
    };
  }, [items, schemaData, schemaId]);

  if (!items.length) return null;

  // Compute theme highlight classes
  const highlightTextClass = themeColor === "orange" ? (isLight ? "text-orange-600" : "text-orange-400") : (isLight ? "text-sky-600" : "text-sky-400");
  const borderHighlightClass = themeColor === "orange" 
    ? (isLight ? "border-orange-300" : "border-orange-500/25") 
    : (isLight ? "border-sky-300" : "border-blue-500/25");
  const bgHighlightClass = themeColor === "orange" 
    ? (isLight ? "bg-orange-50/60" : "bg-orange-500/5") 
    : (isLight ? "bg-sky-50/60" : "bg-blue-50/5");
  const shadowClass = themeColor === "orange" 
    ? (isLight ? "shadow-md shadow-orange-500/10" : "shadow-[0_0_20px_rgba(249,115,22,0.03)]") 
    : (isLight ? "shadow-md shadow-sky-500/10" : "shadow-[0_0_20px_rgba(56,189,248,0.03)]");

  return (
    <section className={`max-w-4xl mx-auto px-6 py-16 rounded-3xl ${
      isLight 
        ? "bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50" 
        : "bg-slate-900/40 border border-slate-850 backdrop-blur-md shadow-2xl"
    }`}>
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-center tracking-tight ${
        isLight ? "text-slate-900" : "text-white"
      }`}>
        {title}
      </h2>
      
      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? `${borderHighlightClass} ${bgHighlightClass} ${shadowClass}`
                  : isLight 
                    ? "border-slate-200/80 bg-slate-50/60 hover:border-slate-300 hover:bg-slate-100/50"
                    : "border-slate-850 bg-slate-900/20 hover:border-slate-800"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between text-left p-5 sm:p-6 font-bold text-sm sm:text-base transition-colors cursor-pointer select-none focus:outline-none"
              >
                <span className={isOpen ? highlightTextClass : isLight ? "text-slate-800 hover:text-slate-900" : "text-white hover:text-slate-200"}>
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    isOpen ? `${highlightTextClass} rotate-180` : isLight ? "text-slate-400" : "text-slate-400"
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className={`px-6 pb-6 text-xs sm:text-sm leading-relaxed border-t pt-4 ${
                  isLight ? "text-slate-600 border-slate-200/60" : "text-slate-350 border-slate-850/20"
                }`}>
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
