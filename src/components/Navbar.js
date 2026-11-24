import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const logo = "/Yuganter_Technologies.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Internship", path: "/it-internship-ahmedabad" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md border-b border-slate-200/90 shadow-sm"
          : "bg-white/90 backdrop-blur-md border-b border-slate-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2">
        {/* Brand Logo & Name - Never clipped or truncated on any device */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 sm:gap-3 transition-all duration-300 group flex-shrink-0"
          title="Yugantar Technologies - IT Services & Training Ahmedabad"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-white p-1 shadow-sm border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <img
              src={logo}
              alt="Yugantar Technologies Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center flex-shrink-0">
            <div className="text-[15px] xs:text-[17px] sm:text-lg md:text-xl font-extrabold text-slate-900 leading-tight tracking-tight whitespace-nowrap">
              Yugantar <span className="text-sky-600">Technologies</span>
            </div>
            <div className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] text-slate-500 tracking-[0.14em] uppercase font-bold flex items-center gap-1 sm:gap-1.5 whitespace-nowrap mt-0.5">
              <span className="text-sky-600">INNOVATION TODAY</span>
              <span className="w-1 h-1 rounded-full bg-orange-500 inline-block"></span>
              <span className="text-orange-600">A BETTER TOMORROW</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm md:text-base font-semibold transition-colors duration-200 relative py-1 ${
                  active ? "text-sky-600 font-bold" : "text-slate-700 hover:text-sky-600"
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Quick Contacts & CTA */}
        <div className="hidden xl:flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/90 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 shadow-2xs">
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <a href="tel:9054372690" className="hover:text-sky-600 transition font-bold">+91 9054372690</a>
            <span className="text-slate-300">/</span>
            <a href="tel:7859982605" className="hover:text-sky-600 transition font-bold">7859982605</a>
          </div>

          <a
            href="/#consultation-form"
            className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition duration-200 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Free Consultation
          </a>
        </div>

        {/* Mobile Hamburger Button Only */}
        <div className="flex xl:hidden items-center flex-shrink-0">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-700 bg-slate-100 rounded-xl border border-slate-200 transition hover:bg-slate-200 active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 shadow-2xl animate-fadeIn max-h-[calc(100vh-65px)] overflow-y-auto">
          <nav className="flex flex-col p-4 gap-1.5">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium transition duration-200 flex items-center justify-between ${
                    active
                      ? "text-sky-700 bg-sky-50 border border-sky-200/80 font-bold"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-base font-semibold">{item.name}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-sky-600"></span>}
                </Link>
              );
            })}

            <div className="mt-3 pt-3 border-t border-slate-200 space-y-2">
              <a
                href="tel:9054372690"
                className="flex items-center justify-center gap-2 py-2 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-700 font-semibold text-center transition"
              >
                <Phone className="w-3.5 h-3.5 text-orange-600" />
                <span>Call: +91 9054372690</span>
              </a>
              <a
                href="tel:7859982605"
                className="flex items-center justify-center gap-2 py-2 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-700 font-semibold text-center transition"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>Call: +91 7859982605</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
