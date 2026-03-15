/*
 * DESIGN: Night Race Cinematic
 * Calendar: Race cards with country flags, circuit names, glowing hover effects
 * Horizontal scroll on mobile, grid on desktop
 */
import { MapPin, Clock, Calendar } from "lucide-react";

const races = [
  { round: "01", name: "Bahrain Grand Prix", circuit: "Bahrain International Circuit", country: "Bahrain", flag: "🇧🇭", date: "Mar 2", status: "completed", winner: "Verstappen" },
  { round: "02", name: "Saudi Arabian Grand Prix", circuit: "Jeddah Corniche Circuit", country: "Saudi Arabia", flag: "🇸🇦", date: "Mar 9", status: "completed", winner: "Verstappen" },
  { round: "03", name: "Australian Grand Prix", circuit: "Albert Park Circuit", country: "Australia", flag: "🇦🇺", date: "Mar 24", status: "next", winner: null },
  { round: "04", name: "Japanese Grand Prix", circuit: "Suzuka International Racing Course", country: "Japan", flag: "🇯🇵", date: "Apr 7", status: "upcoming", winner: null },
  { round: "05", name: "Chinese Grand Prix", circuit: "Shanghai International Circuit", country: "China", flag: "🇨🇳", date: "Apr 21", status: "upcoming", winner: null },
  { round: "06", name: "Miami Grand Prix", circuit: "Miami International Autodrome", country: "USA", flag: "🇺🇸", date: "May 5", status: "upcoming", winner: null },
  { round: "07", name: "Emilia Romagna Grand Prix", circuit: "Autodromo Enzo e Dino Ferrari", country: "Italy", flag: "🇮🇹", date: "May 19", status: "upcoming", winner: null },
  { round: "08", name: "Monaco Grand Prix", circuit: "Circuit de Monaco", country: "Monaco", flag: "🇲🇨", date: "May 26", status: "upcoming", winner: null },
  { round: "09", name: "Canadian Grand Prix", circuit: "Circuit Gilles Villeneuve", country: "Canada", flag: "🇨🇦", date: "Jun 9", status: "upcoming", winner: null },
  { round: "10", name: "Spanish Grand Prix", circuit: "Circuit de Barcelona-Catalunya", country: "Spain", flag: "🇪🇸", date: "Jun 23", status: "upcoming", winner: null },
  { round: "11", name: "Austrian Grand Prix", circuit: "Red Bull Ring", country: "Austria", flag: "🇦🇹", date: "Jun 30", status: "upcoming", winner: null },
  { round: "12", name: "British Grand Prix", circuit: "Silverstone Circuit", country: "UK", flag: "🇬🇧", date: "Jul 7", status: "upcoming", winner: null },
];

export default function CalendarSection() {
  return (
    <section id="calendar" className="py-24" style={{ background: "#0A0D12" }}>
      <div className="container">
        <div className="relative mb-12">
          <span className="section-number">02</span>
          <div className="flex items-center gap-3 mb-3">
            <div style={{ width: "32px", height: "2px", background: "#00D4FF" }} />
            <span className="f1-label" style={{ color: "#00D4FF" }}>2025 Season</span>
          </div>
          <h2
            className="f1-heading text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            RACE CALENDAR
          </h2>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mb-8">
          {[
            { color: "rgba(255,255,255,0.2)", label: "Completed" },
            { color: "#E8002D", label: "Next Race" },
            { color: "rgba(255,255,255,0.06)", label: "Upcoming" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div style={{ width: "12px", height: "12px", background: item.color, borderRadius: "2px" }} />
              <span className="f1-label" style={{ color: "rgba(255,255,255,0.4)" }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Race Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {races.map((race) => (
            <div
              key={race.round}
              className="race-card"
              style={{
                opacity: race.status === "completed" ? 0.6 : 1,
                border: race.status === "next"
                  ? "1px solid rgba(232, 0, 45, 0.5)"
                  : "1px solid rgba(255,255,255,0.06)",
                boxShadow: race.status === "next"
                  ? "0 0 30px rgba(232, 0, 45, 0.15)"
                  : "none",
              }}
            >
              {race.status === "next" && (
                <div
                  style={{
                    background: "#E8002D",
                    padding: "4px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      background: "white",
                      borderRadius: "50%",
                      animation: "pulse 1.5s ease-in-out infinite",
                    }}
                  />
                  <span className="f1-label text-white" style={{ fontSize: "0.6rem" }}>
                    NEXT RACE
                  </span>
                </div>
              )}

              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="f1-number"
                      style={{ fontSize: "2.5rem", color: "rgba(255,255,255,0.1)", lineHeight: 1 }}
                    >
                      {race.round}
                    </span>
                  </div>
                  <span style={{ fontSize: "2rem" }}>{race.flag}</span>
                </div>

                <h3
                  className="f1-heading text-white mb-1"
                  style={{ fontSize: "1.3rem", lineHeight: 1.1 }}
                >
                  {race.name}
                </h3>

                <div className="flex items-center gap-1 mb-3">
                  <MapPin size={11} style={{ color: "rgba(255,255,255,0.3)" }} />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "'Barlow', sans-serif",
                    }}
                  >
                    {race.circuit}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Calendar size={11} style={{ color: "#00D4FF" }} />
                    <span
                      className="f1-label"
                      style={{ color: "#00D4FF", fontSize: "0.65rem" }}
                    >
                      {race.date}, 2025
                    </span>
                  </div>

                  {race.winner && (
                    <div
                      className="f1-label"
                      style={{
                        color: "#C9A84C",
                        fontSize: "0.65rem",
                        background: "rgba(201, 168, 76, 0.1)",
                        padding: "2px 8px",
                        borderRadius: "2px",
                      }}
                    >
                      🏆 {race.winner}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
