import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export default function LocationSection({ contact }) {
  if (!contact) return null;

  return (
    <section className="py-24 px-6 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Office Details */}
        <motion.div
          className="lg:col-span-6 space-y-6 text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sky-600 font-mono text-xs font-semibold tracking-wider uppercase bg-sky-50 px-3.5 py-1.5 rounded-md border border-sky-100 inline-block">
            LOCATION & CONTACT
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {contact.title || "Visit Yugantar Technologies"}
          </h2>

          {contact.subtitle && (
            <p className="text-slate-600 text-base leading-relaxed">
              {contact.subtitle}
            </p>
          )}

          <div className="space-y-4 pt-2">
            {contact.address && (
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="p-3 bg-white border border-slate-200 rounded-xl text-sky-600 shadow-2xs">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Location Status
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    {contact.address}
                  </p>
                  {contact.mapsUrl ? (
                    <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-600 font-semibold underline inline-flex items-center gap-1 mt-1">
                      Open Google Maps <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : null}
                </div>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              {contact.phone && (
                <a
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/50 transition-all duration-300 group"
                >
                  <div className="p-2.5 bg-white border border-slate-200 rounded-xl text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs group-hover:text-sky-600 transition-colors">
                      Call Us Directly
                    </h4>
                    <p className="text-slate-700 text-xs font-semibold mt-0.5">
                      {contact.phone}
                    </p>
                  </div>
                </a>
              )}

              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/50 transition-all duration-300 group"
                >
                  <div className="p-2.5 bg-white border border-slate-200 rounded-xl text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs group-hover:text-sky-600 transition-colors">
                      Send Email Inquiry
                    </h4>
                    <p className="text-slate-700 text-xs font-semibold mt-0.5 truncate max-w-[160px]">
                      {contact.email}
                    </p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Office Photo */}
        <motion.div
          className="lg:col-span-6 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full max-w-lg group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500 to-indigo-500 rounded-3xl blur-lg opacity-15 group-hover:opacity-30 transition duration-500" />
            <div className="relative bg-slate-50 border border-slate-200/90 rounded-3xl p-3 shadow-xl overflow-hidden">
              <img
                src={contact.image}
                alt={contact.imageAlt || "Yugantar Technologies Office Navrangpura"}
                className="w-full h-[360px] sm:h-[400px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
