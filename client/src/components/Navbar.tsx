import { useState, useEffect } from "react";

const navItems = [
  { label: "Tabulka", href: "#standings" },
  { label: "Kalendář", href: "#calendar" },
  { label: "Týmy", href: "#teams" },
  { label: "Jezdci", href: "#drivers" },
  { label: "Novinky", href: "#news" },
  { label: "Registrace", href: "https://forms.gle/usJmW6ktqnTFGvT59" }
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

    if (href.startsWith("http")) {
      window.open(href, "_blank");
      return;
    }

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
          : "1px solid rgba(255,255,255,0.05)"
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span
              className="text-white font-black"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "1.25rem"
              }}
            >
              ELECTRA <span style={{ color: "#E8002D" }}>RACING SERIES</span>
            </span>
          </a>

          {/* Desktop MENU */}
          <div className="hidden md:flex relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav-link"
            >
              MENU
            </button>

            {menuOpen && (
              <div
                className="absolute top-12 right-0 flex flex-col gap-2 p-4 rounded-xl"
                style={{
                  background: "rgba(8, 11, 15, 0.98)",
                  border: "1px solid rgba(232, 0, 45, 0.3)",
                  backdropFilter: "blur(20px)"
                }}
              >
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="nav-link text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger (mobile only) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8"
            >
              <span
                className={`block h-[2px] w-6 bg-white transition-all ${
                  menuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-white my-1 transition-all ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-white transition-all ${
                  menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(8, 11, 15, 0.98)",
            borderTop: "1px solid rgba(232, 0, 45, 0.2)"
          }}
        >
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="nav-link text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}