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
              Yugantar <span className="text-sky-400">Technologies</span>
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
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2.5 text-slate-200 bg-white/10 rounded-xl border border-white/10 transition hover:bg-white/15 active:scale-95"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-slate-950/98 border-t border-white/10 shadow-2xl backdrop-blur-3xl animate-fadeIn">
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
                      ? "text-white bg-sky-500/15 border border-sky-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                  }`}
                >
                  <span className="text-base font-semibold">{item.name}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-sky-400"></span>}
                </Link>
              );
            })}

            <div className="mt-4 pt-4 border-t border-white/10 space-y-2.5 px-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Quick Contact Desk</p>
              <a
                href="tel:9054372690"
                className="block py-2.5 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl text-xs text-sky-400 font-bold text-center transition"
              >
                📞 Call +91 9054372690
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
