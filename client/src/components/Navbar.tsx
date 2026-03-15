/*
 * DESIGN: Night Race Cinematic
 * Navbar: Dark glass effect, F1 red accent, Barlow Condensed font
 * Sticky top with backdrop blur on scroll
 */
import { useState, useEffect } from "react";
import { Menu, X, Flag } from "lucide-react";

const navItems = [
  { label: "Standings", href: "#standings" },
  { label: "Calendar", href: "#calendar" },
  { label: "Teams", href: "#teams" },
  { label: "Drivers", href: "#drivers" },
  { label: "News", href: "#news" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(8, 11, 15, 0.95)"
          : "rgba(8, 11, 15, 0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(232, 0, 45, 0.3)"
          : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div
              className="w-8 h-8 flex items-center justify-center"
              style={{
                background: "#E8002D",
                clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
              }}
            >
              <Flag size={14} className="text-white" />
            </div>
            <span
              className="text-white font-black tracking-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.25rem", letterSpacing: "-0.01em" }}
            >
              F1<span style={{ color: "#E8002D" }}>RACE</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              className="hidden md:block f1-btn-primary text-sm"
              onClick={() => handleNavClick("#calendar")}
            >
              Race Schedule
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(8, 11, 15, 0.98)",
            borderTop: "1px solid rgba(232, 0, 45, 0.2)",
          }}
        >
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="nav-link text-left py-2"
                style={{ fontSize: "1.1rem" }}
              >
                {item.label}
              </button>
            ))}
            <button
              className="f1-btn-primary text-sm mt-2 w-full"
              onClick={() => handleNavClick("#calendar")}
            >
              Race Schedule
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
