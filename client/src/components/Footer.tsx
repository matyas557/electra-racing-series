/*
 * DESIGN: Night Race Cinematic
 * Footer: Dark, minimal, F1 branding, social links, checkered flag accent
 */
import { Flag, Twitter, Instagram, Youtube, Facebook } from "lucide-react";
import { toast } from "sonner";

const footerLinks = {
  Racing: ["Standings", "Calendar", "Results", "Live Timing"],
  Teams: ["Red Bull Racing", "Ferrari", "McLaren", "Mercedes"],
  Drivers: ["Max Verstappen", "Lando Norris", "Charles Leclerc", "Lewis Hamilton"],
  More: ["About F1", "History", "Technology", "Fan Zone"],
};

const socials = [
  { Icon: Twitter, label: "Twitter" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Facebook, label: "Facebook" },
];

export default function Footer() {
  const handleLink = () => {
    toast.info("Coming soon!", { description: "This section is under development." });
  };

  return (
    <footer style={{ background: "#06080C", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Main footer content */}
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
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
                className="text-white font-black"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.25rem" }}
              >
                F1<span style={{ color: "#E8002D" }}>RACE</span>
              </span>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.35)",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.8rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              The ultimate destination for Formula 1 fans. Live standings, race results, team profiles, and more.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socials.map(({ Icon, label }) => (
                <button
                  key={label}
                  onClick={handleLink}
                  className="w-8 h-8 flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "4px",
                    color: "rgba(255,255,255,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "white";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(232,0,45,0.4)";
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(232,0,45,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                  }}
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="f1-label mb-4"
                style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.65rem" }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={handleLink}
                      style={{
                        color: "rgba(255,255,255,0.35)",
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "0.85rem",
                        background: "transparent",
                        border: "none",
                        padding: 0,
                        transition: "color 0.2s ease",
                        textAlign: "left",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.35)";
                      }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "1.25rem 0",
        }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="f1-label"
            style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.65rem" }}
          >
            © 2025 F1RACE. All rights reserved. Formula 1 and related marks are trademarks of Formula One Licensing B.V.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((item) => (
              <button
                key={item}
                onClick={handleLink}
                className="f1-label"
                style={{
                  color: "rgba(255,255,255,0.2)",
                  fontSize: "0.65rem",
                  background: "transparent",
                  border: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.2)";
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
