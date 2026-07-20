import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Clock } from "lucide-react";

const logo = "/Yuganter_Technologies.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-20 bg-slate-950 text-white border-t border-slate-900">
      {/* Background visual glows */}
      <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-slate-950/90 to-transparent blur-3xl" />
      <div className="absolute left-[-8%] top-16 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute right-[-10%] bottom-8 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="glass-card border border-white/10 p-8 md:p-12 rounded-[2rem] overflow-hidden bg-slate-950/40 backdrop-blur-md">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Column 1: Company Profile */}
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Yugantar Technologies"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h2 className="text-xl font-bold text-white leading-tight">
                    Yugantar <span className="text-sky-400">technologies</span>
                  </h2>
                  <p className="text-[9px] tracking-[0.18em] uppercase text-sky-300 mt-1 font-semibold">
                    TRAINING AND IT SOLUTION
                  </p>
                </div>
              </Link>
              
              <p className="text-slate-400 leading-relaxed text-sm">
                Empowering next-generation tech leaders with professional, industry-oriented training and high-performance digital solutions tailored for business success.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
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
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-500/10 hover:text-sky-300 hover:scale-110 hover:-translate-y-1"
                      aria-label={item.label}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Popular Courses */}
            <div>
              <h3 className="text-base font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/10 inline-block">
                Training Programs
              </h3>
              <ul className="space-y-3.5 text-sm">
                {[
                  { label: "MERN Stack Development", path: "/courses/full-stack-mern" },
                  { label: "Python Development", path: "/courses/python-development" },
                  { label: "Java Full Stack", path: "/courses/java-full-stack" },
                  { label: "UI/UX Design", path: "/courses/ui-ux-design" },
                  { label: "Data Science & AI/ML", path: "/courses/data-science-ai-ml" },
                  { label: "Mobile App Development", path: "/courses/mobile-app-development" },
                  { label: "Digital Marketing", path: "/courses/digital-marketing" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-slate-400 hover:text-sky-300 transition-colors duration-250 flex items-center gap-1 group">
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0 text-sky-400 text-xs">→</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: IT Solutions */}
            <div>
              <h3 className="text-base font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/10 inline-block">
                IT Solutions
              </h3>
              <ul className="space-y-3.5 text-sm">
                {[
                  { label: "Website Development", path: "/website-development-ahmedabad" },
                  { label: "SEO Services", path: "/seo-services-ahmedabad" },
                  { label: "Social Media Management", path: "/social-media-marketing-ahmedabad" },
                  { label: "Google Business Profile", path: "/google-business-profile-management-ahmedabad" },
                  { label: "Digital Marketing Solutions", path: "/services" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-slate-400 hover:text-sky-300 transition-colors duration-250 flex items-center gap-1 group">
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0 text-sky-400 text-xs">→</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="space-y-6">
              <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2 pb-2 border-b border-white/10 inline-block">
                Get In Touch
              </h3>
              <div className="space-y-4 text-sm text-slate-400">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=204+Yash+Aqua+Vijay+Cross+Road+Navrangpura+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition group"
                  aria-label="Address"
                >
                  <MapPin className="text-sky-400 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={18} />
                  <div>
                    <p className="font-semibold text-white group-hover:text-sky-300 transition-colors">Visit Our Location</p>
                    <p className="leading-relaxed text-slate-400 mt-0.5">204, Yash Aqua, Vijay Cross Road, Navrangpura, Ahmedabad</p>
                    <p className="text-xs text-sky-300 mt-1 font-medium underline">Open in Google Maps</p>
                  </div>
                </a>

                <a href="tel:7859982605" className="flex items-center gap-3 hover:text-white transition group" aria-label="Phone number">
                  <Phone className="text-sky-400 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" size={18} />
                  <p className="text-slate-450 group-hover:text-sky-300 transition-colors font-medium">Call: 7859982605</p>
                </a>

                <a href="mailto:info@yugantartechnologies.com" className="flex items-center gap-3 hover:text-white transition group" aria-label="Email address">
                  <Mail className="text-sky-400 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" size={18} />
                  <p className="text-slate-450 group-hover:text-sky-300 transition-colors font-medium">info@yugantartechnologies.com</p>
                </a>

                <div className="flex items-center gap-3 text-slate-400">
                  <Clock className="text-sky-400 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold text-white">Office Hours</p>
                    <p className="text-xs mt-0.5">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Support */}
          <div className="mt-12 border-t border-white/10 pt-6 text-slate-500 text-sm flex flex-col md:flex-row gap-3 justify-between items-center text-center md:text-left">
            <p>© {currentYear} Yugantar Technologies. All Rights Reserved.</p>
            <p className="text-slate-500">
              Designed & Supported by Yugantar — <span className="text-sky-400/80 font-medium">TRAINING AND IT SOLUTION</span>.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
