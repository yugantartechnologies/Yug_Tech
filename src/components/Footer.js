import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Facebook, Linkedin, Clock, MapPin } from "lucide-react";

const logo = "/Yuganter_Technologies.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Brand, Tagline & Overview (4 cols - ample space to prevent overlap) */}
          <div className="lg:col-span-4 space-y-5 lg:pr-6">
            <Link to="/" className="inline-flex items-center gap-3.5 group" title="Yugantar Technologies">
              <div className="w-12 h-12 rounded-xl bg-white p-1.5 shadow-md border border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={logo}
                  alt="Yugantar Technologies Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-extrabold text-white leading-tight tracking-tight">
                  Yugantar <span className="text-sky-400">Technologies</span>
                </span>
                <span className="text-[8.5px] tracking-[0.14em] uppercase text-slate-400 mt-1 font-bold flex items-center gap-1.5">
                  <span className="text-sky-400">INNOVATION TODAY</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
                  <span className="text-orange-400">A BETTER TOMORROW</span>
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              Empowering next-generation tech leaders with professional, industry-oriented training and high-performance digital solutions tailored for business success.
            </p>

            {/* Social Icons */}
            <div className="pt-1 flex items-center gap-3">
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
                    className="w-9 h-9 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 flex items-center justify-center transition-all duration-200 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400 hover:-translate-y-0.5"
                    aria-label={item.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Training & Internships (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider pb-3 border-b border-slate-800/90 flex items-center justify-between">
              <span>Training & Internships</span>
              <span className="w-5 h-0.5 bg-sky-500 rounded-full" />
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "IT Internship Programs", path: "/it-internship-ahmedabad" },
                { label: "MERN Stack Development", path: "/courses/full-stack-mern" },
                { label: "Python Development", path: "/courses/python-development" },
                { label: "Java Full Stack", path: "/courses/java-full-stack" },
                { label: "UI/UX Design", path: "/courses/ui-ux-design" },
                { label: "Data Science & AI/ML", path: "/courses/data-science-ai-ml" },
                { label: "Digital Marketing Training", path: "/courses/digital-marketing" },
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.path} 
                    className="text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-1.5 group text-sm"
                  >
                    <span className="text-slate-600 group-hover:text-sky-400 transition-colors text-xs">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: IT Solutions (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider pb-3 border-b border-slate-800/90 flex items-center justify-between">
              <span>IT Solutions</span>
              <span className="w-5 h-0.5 bg-orange-500 rounded-full" />
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "SEO Services", path: "/seo-services-ahmedabad" },
                { label: "Website Development", path: "/website-development-ahmedabad" },
                { label: "Social Media Marketing", path: "/social-media-marketing-ahmedabad" },
                { label: "Digital Marketing Agency", path: "/digital-marketing-ahmedabad" },
                { label: "Google Business Profile", path: "/google-business-profile-management-ahmedabad" },
                { label: "Performance Marketing", path: "/performance-marketing-ahmedabad" },
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.path} 
                    className="text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-1.5 group text-sm"
                  >
                    <span className="text-slate-600 group-hover:text-sky-400 transition-colors text-xs">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider pb-3 border-b border-slate-800/90 flex items-center justify-between">
              <span>Get In Touch</span>
              <span className="w-5 h-0.5 bg-emerald-500 rounded-full" />
            </h3>
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-400 flex-shrink-0 mt-0.5" size={17} />
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wide">Office Address</p>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    A-604, Sanskrit Galleria, Rangoli Ice Cream, Gurukul Road, Memnagar, Ahmedabad, Gujarat - 380052
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-sky-400 flex-shrink-0 mt-0.5" size={17} />
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wide">Call For Inquiry</p>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <a href="tel:9054372690" className="text-sky-400 hover:text-sky-300 font-bold text-sm transition">
                      +91 9054372690
                    </a>
                    <a href="tel:7859982605" className="text-sky-400 hover:text-sky-300 font-bold text-sm transition">
                      +91 7859982605
                    </a>
                  </div>
                </div>
              </div>

              <a href="mailto:info@yugantartechnologies.com" className="flex items-center gap-3 hover:text-white transition group">
                <Mail className="text-sky-400 flex-shrink-0" size={17} />
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wide">Email Us</p>
                  <p className="text-slate-300 group-hover:text-sky-400 transition-colors text-xs mt-0.5 font-medium">info@yugantartechnologies.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-slate-400">
                <Clock className="text-emerald-400 flex-shrink-0" size={17} />
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wide">Working Hours</p>
                  <p className="text-xs text-slate-300 mt-0.5">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
          <p>© {currentYear} Yugantar Technologies. All Rights Reserved.</p>
          
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-end">
            <span className="text-slate-400 font-medium">
              Innovation Today <span className="text-orange-500">•</span> A Better Tomorrow
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
