/*
 * DESIGN: Night Race Cinematic
 * Hero: Full-viewport, night race imagery, animated speed lines, dramatic typography
 * Car image slides in from right, heading staggered animation
 */
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMG = "";

const speedLines = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  top: `${8 + i * 7}%`,
  delay: `${i * 0.4}s`,
  duration: `${2.5 + (i % 3) * 0.8}s`,
  width: `${30 + (i % 4) * 20}%`,
  opacity: 0.3 + (i % 3) * 0.15,
}));

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector("#standings");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", background: "#080B0F" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="F1 Night Race"
          className="w-full h-full object-cover"
          style={{
            opacity: loaded ? 0.55 : 0,
            transition: "opacity 1.2s ease",
            objectPosition: "center 40%",
          }}
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(8,11,15,0.95) 0%, rgba(8,11,15,0.7) 50%, rgba(8,11,15,0.3) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,11,15,1) 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Animated speed lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {speedLines.map((line) => (
          <div
            key={line.id}
            className="absolute"
            style={{
              top: line.top,
              left: 0,
              height: "1px",
              width: line.width,
              background: `linear-gradient(90deg, transparent, rgba(232, 0, 45, ${line.opacity}), transparent)`,
              animation: `speedLine ${line.duration} ease-in-out ${line.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container flex flex-col justify-center" style={{ minHeight: "100vh", paddingTop: "6rem" }}>
        <div className="max-w-3xl">
          {/* Season label */}
          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease 0.2s",
            }}
          >
            <div style={{ width: "32px", height: "2px", background: "#E8002D" }} />
            <span
              className="f1-label"
              style={{ color: "#E8002D", fontSize: "0.7rem" }}
            >
              ELECTRA  Racing series - Sezona 1
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="f1-heading text-white mb-6"
            style={{
              fontSize: "clamp(4rem, 10vw, 9rem)",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.8s ease 0.4s",
            }}
          >
            Vítejte na oficiální stránce F1 ligy ERS
          </h1>

          {/* Subheading */}
          <p
            className="text-lg mb-10"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              maxWidth: "480px",
              lineHeight: 1.7,
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease 0.6s",
            }}
          >
        
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.8s",
            }}
          >
            <button
              className="f1-btn-primary"
              onClick={() => {
                const el = document.querySelector("#standings");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              zobrazit tabulku
            </button>
            <button
              className="f1-btn-outline"
              onClick={() => {
                const el = document.querySelector("#calendar");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Závodní kalendář
            </button>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-8 mt-16 pt-8"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.8s ease 1s",
            }}
          >
            {[
              { value: "12", label: "závodů" },
              { value: "10", label: "Týmů" },
              { value: "16", label: "jezdců" },
              { value: "1", label: "měsíc působení" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="f1-number text-white"
                  style={{ fontSize: "2.5rem", lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div
                  className="f1-label mt-1"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        style={{ animation: "bounce 2s ease-in-out infinite" }}
      >
        <span className="f1-label" style={{ fontSize: "0.65rem" }}>Scroll</span>
        <ChevronDown size={20} />
      </button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
