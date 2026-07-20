import React, { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection({
  title = "Frequently Asked Questions",
  items = [],
  schemaId = "page-faq-schema",
  themeColor = "blue", // "blue" or "orange"
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
  const highlightTextClass = themeColor === "orange" ? "text-orange-400" : "text-sky-400";
  const borderHighlightClass = themeColor === "orange" ? "border-orange-500/25" : "border-blue-500/25";
  const bgHighlightClass = themeColor === "orange" ? "bg-orange-500/5" : "bg-blue-500/5";
  const shadowClass = themeColor === "orange" ? "shadow-[0_0_20px_rgba(249,115,22,0.03)]" : "shadow-[0_0_20px_rgba(56,189,248,0.03)]";

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 bg-slate-900/40 border border-slate-850 backdrop-blur-md rounded-3xl shadow-2xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-center text-white tracking-tight">
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
                  : "border-slate-850 bg-slate-900/20 hover:border-slate-800"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between text-left p-5 sm:p-6 font-bold text-sm sm:text-base text-white transition-colors cursor-pointer select-none focus:outline-none"
              >
                <span className={isOpen ? highlightTextClass : "hover:text-slate-200"}>
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    isOpen ? `${highlightTextClass} rotate-180` : ""
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-xs sm:text-sm text-slate-350 leading-relaxed border-t border-slate-850/20 pt-4">
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
