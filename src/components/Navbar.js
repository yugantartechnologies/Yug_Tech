import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const logo = "/Yuganter_Technologies.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Internship", path: "/internship" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-slate-950/95 border-b border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
          : "backdrop-blur-md bg-slate-950/90 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 transition-all duration-300 cursor-magnet">
          <img
            src={logo}
            alt="Yugantar Technologies"
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />
          <div>
            <h1 className="text-base md:text-xl font-bold text-white leading-none whitespace-nowrap">
              Yugantar <span className="text-sky-400">technologies</span>
            </h1>
            <p className="text-[9px] md:text-[10px] text-sky-300 tracking-[0.18em] uppercase mt-1.5 font-semibold">
              TRAINING AND IT SOLUTION
            </p>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`link-underline text-base md:text-lg font-semibold transition-colors duration-200 ${
                  active ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="button-secondary cursor-magnet hidden lg:inline-flex"
          >
            Contact Us
            <span className="button-arrow">→</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-slate-200 bg-white/10 rounded-2xl border border-white/10 transition hover:bg-white/15"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-slate-950/95 border-t border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.24)] backdrop-blur-3xl">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-2xl font-semibold transition duration-200 ${
                    active
                      ? "text-white bg-slate-900/50"
                      : "text-slate-300 hover:text-white hover:bg-slate-900/40"
                  }`}
                >
                  <span className="text-base font-semibold">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
