import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const logo = "/Yuganter_Technologies.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-slate-950/90 to-transparent blur-3xl" />
      <div className="absolute left-[-8%] top-16 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="absolute right-[-10%] bottom-8 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="glass-card border border-white/10 p-12 rounded-[2rem] overflow-hidden">
          <div className="grid lg:grid-cols-[360px_1fr_1fr] gap-12">
            <div className="md:pr-4">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={logo}
                  alt="YugAntar Technologies"
                  className="w-14 h-14 rounded-3xl object-contain border border-white/10 bg-slate-950/60 p-1"
                />
                <div>
                  <h2 className="text-3xl font-bold text-white leading-tight">
                    YugAntar
                    <span className="block text-sky-400">Technologies</span>
                  </h2>
                  <p className="text-[11px] tracking-[0.4em] uppercase text-sky-300 mt-2">Training & IT Services</p>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed text-sm max-w-xl">
                Professional IT training, internships, and digital services crafted for modern businesses and ambitious learners.
              </p>

              <div className="flex items-center gap-3 mt-6">
                {[
                  { href: "https://www.facebook.com/share/16Ao4uJg7S/", icon: Facebook, label: "Facebook" },
                  { href: "https://www.instagram.com/yugantar_technologies?igsh=Z2Q5cXMxaXg2dm93", icon: Instagram, label: "Instagram" },
                  { href: "https://www.linkedin.com/company/yugantartechnologies", icon: Linkedin, label: "LinkedIn" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-sky-400/50 hover:text-sky-300"
                      aria-label={item.label}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                {[
                  { label: "Home", path: "/" },
                  { label: "Courses", path: "/courses" },
                  { label: "Services", path: "/services" },
                  { label: "Internship", path: "/internship" },
                  { label: "Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="link-underline text-slate-400 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
              <div className="space-y-4 text-sm text-slate-400">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=204+Yash+Aqua+Vijay+Cross+Road+Navrangpura+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition"
                  aria-label="Address"
                >
                  <MapPin className="text-sky-400 mt-1" size={18} />
                  <div>
                    <p className="font-semibold text-white">Visit Our Location</p>
                    <p className="leading-relaxed text-slate-400">204, Yash Aqua, Vijay Cross Road, Navrangpura, Ahmedabad</p>
                    <p className="text-sm text-sky-300 mt-1">Open in Google Maps</p>
                  </div>
                </a>

                <a href="tel:7859982605" className="flex items-center gap-3 hover:text-white transition" aria-label="Phone number">
                  <Phone className="text-cyan-400" size={18} />
                  <p className="text-slate-400">7859982605</p>
                </a>

                <a href="mailto:info@yugantartechnologies.com" className="flex items-center gap-3 hover:text-white transition" aria-label="Email address">
                  <Mail className="text-cyan-400" size={18} />
                  <p className="text-slate-400">info@yugantartechnologies.com</p>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-slate-500 text-sm flex flex-col lg:flex-row gap-2 justify-between items-center">
            <p>© {currentYear} YugAntar Technologies. All Rights Reserved.</p>
            <p className="text-slate-500">Designed and supported by YugAntar — premium IT training & services.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
