/*
 * DESIGN: Night Race Cinematic
 * Standings: Dark table with team color accents, Bebas Neue numbers
 * Tabs for Driver/Constructor standings
 */
import { useState } from "react";
import { Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react";

const driverStandings = [
  { pos: 1, name: "Vít Langr", team: "McLaren", teamColor: "#FF8000", pts: 0, wins: 0, trend: "same" },
  { pos: 2, name: "Pavol Nátny", team: "McLaren", teamColor: "#FF8000", pts: 0, wins: 0, trend: "same" },
  { pos: 3, name: "Eliáš Molnár", team: "Ferrari", teamColor: "#E8002D", pts: 0, wins: 0, trend: "same" },
  { pos: 4, name: "-", team: "Ferrari", teamColor: "#E8002D", pts: 0, wins: 0, trend: "same" },
  { pos: 5, name: "-", team: "Red Bull", teamColor: "#3671C6", pts: 0, wins: 0, trend: "same" },
  { pos: 6, name: "-", team: "Red Bull", teamColor: "#3671C6", pts: 0, wins: 0, trend: "same" },
  { pos: 7, name: "-", team: "Mercedes", teamColor: "#27F4D2", pts: 0, wins: 0, trend: "same" },
  { pos: 8, name: "-", team: "Mercedes", teamColor: "#27F4D2", pts: 0, wins: 0, trend: "same" },
  { pos: 9, name: "Štěpán Hlaváč", team: "Aston Martin", teamColor: "#358C75", pts: 0, wins: 0, trend: "same" },
  { pos: 10, name: "-", team: "Aston Martin", teamColor: "#358C75", pts: 0, wins: 0, trend: "same" },
  { pos: 11, name: "Martin Davídek", team: "Alpine", teamColor: "#FF87BC", pts: 0, wins: 0, trend: "same" },
  { pos: 12, name: "-", team: "Alpine", teamColor: "#FF87BC", pts: 0, wins: 0, trend: "same" },
  { pos: 13, name: "Alex Ondrejka", team: "Haas", teamColor: "#B6BABD", pts: 0, wins: 0, trend: "same" },
  { pos: 14, name: "-", team: "Haas", teamColor: "#B6BABD", pts: 0, wins: 0, trend: "same" },
  { pos: 15, name: "-", team: "Racing Bulls", teamColor: "#0059ff", pts: 0, wins: 0, trend: "same" },
  { pos: 16, name: "-", team: "Racing Bulls", teamColor: "#0059ff", pts: 0, wins: 0, trend: "same" },
  { pos: 17, name: "Daniel Klepal", team: "Williams", teamColor: "#64C4FF", pts: 0, wins: 0, trend: "same" },
  { pos: 18, name: "-", team: "Williams", teamColor: "#64C4FF", pts: 0, wins: 0, trend: "same" },
  { pos: 19, name: "-", team: "Kick Sauber", teamColor: "#00ff0d", pts: 0, wins: 0, trend: "same" },
  { pos: 20, name: "-", team: "Kick Sauber", teamColor: "#00ff0d", pts: 0, wins: 0, trend: "same"},
];

const constructorStandings = [
  { pos: 1, name: "McLaren", color: "#FF8000", pts: 0, wins: 0 },
  { pos: 2, name: "Ferrari", color: "#E8002D", pts: 0, wins: 0 },
  { pos: 3, name: "Red Bull Racing", color: "#3671C6", pts:0, wins: 0 },
  { pos: 4, name: "Mercedes", color: "#27F4D2", pts: 0, wins: 0 },
  { pos: 5, name: "Aston Martin", color: "#358C75", pts: 0, wins: 0 },
  { pos: 6, name: "Alpine", color: "#0093CC", pts: 0, wins: 0 },
  { pos: 7, name: "Haas", color: "#B6BABD", pts: 0, wins: 0 },
  { pos: 8, name: "Racing Bulls", color: "#0059ff", pts: 0, wins: 0 },
  { pos: 9, name: "Williams", color: "#64C4FF", pts: 0, wins: 0 },
  { pos: 10, name: "Kick Sauber", color: "#00ff0d", pts: 0, wins: 0 },

];

export default function StandingsSection() {
  const [activeTab, setActiveTab] = useState<"drivers" | "constructors">("drivers");

  const TrendIcon = ({ trend }: { trend: string }) => {
    if (trend === "up") return <TrendingUp size={14} style={{ color: "#00D4FF" }} />;
    if (trend === "down") return <TrendingDown size={14} style={{ color: "#E8002D" }} />;
    return <Minus size={14} style={{ color: "rgba(255,255,255,0.3)" }} />;
  };

  return (
    <section id="standings" className="py-24" style={{ background: "#080B0F" }}>
      <div className="container">
        <div className="relative mb-12">
          <span className="section-number">01</span>
          <div className="flex items-center gap-3 mb-3">
            <div style={{ width: "32px", height: "2px", background: "#E8002D" }} />
            <span className="f1-label" style={{ color: "#E8002D" }}>Šampionát</span>
          </div>
          <h2
            className="f1-heading text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Tabulka sezony 1
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {(["drivers", "constructors"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="f1-label px-6 py-3 transition-all duration-200"
              style={{
                color: activeTab === tab ? "white" : "rgba(255,255,255,0.4)",
                borderBottom: activeTab === tab ? "2px solid #E8002D" : "2px solid transparent",
                marginBottom: "-1px",
                background: "transparent",
                fontSize: "0.75rem",
              }}
            >
              {tab === "drivers" ? "Jezdci" : "Týmy"}
            </button>
          ))}
        </div>

        {/* Drivers Table */}
        {activeTab === "drivers" && (
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  {["Pozice", "Jezdec", "Tým", "Výhry", "Body", ""].map((h) => (
                    <th
                      key={h}
                      className="f1-label text-left py-3 px-4"
                      style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.65rem" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {driverStandings.map((driver, i) => (
                  <tr
                    key={driver.name}
                    className="standings-row"
                    style={{
                      animationDelay: `${i * 0.05}s`,
                    }}
                  >
                    <td className="py-4 px-4">
                      <span
                        className="f1-number"
                        style={{
                          fontSize: "1.5rem",
                          color: driver.pos <= 3 ? "#C9A84C" : "rgba(255,255,255,0.5)",
                        }}
                      >
                        {driver.pos <= 3 ? (
                          <span className="flex items-center gap-1">
                            {driver.pos === 1 && <Trophy size={14} style={{ color: "#C9A84C" }} />}
                            {driver.pos}
                          </span>
                        ) : driver.pos}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className="font-semibold text-white"
                        style={{ fontFamily: "'Barlow', sans-serif" }}
                      >
                        {driver.name}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div
                          style={{
                            width: "3px",
                            height: "16px",
                            background: driver.teamColor,
                            borderRadius: "2px",
                          }}
                        />
                        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}>
                          {driver.team}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="f1-number" style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.7)" }}>
                        {driver.wins}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className="f1-number"
                        style={{
                          fontSize: "1.5rem",
                          color: driver.pos === 1 ? "#E8002D" : "white",
                        }}
                      >
                        {driver.pts}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <TrendIcon trend={driver.trend} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Constructors Table */}
        {activeTab === "constructors" && (
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  {["Pozice", "Tým", "Výhry", "BODY"].map((h) => (
                    <th
                      key={h}
                      className="f1-label text-left py-3 px-4"
                      style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.65rem" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {constructorStandings.map((team, i) => (
                  <tr key={team.name} className="standings-row">
                    <td className="py-4 px-4">
                      <span
                        className="f1-number"
                        style={{
                          fontSize: "1.5rem",
                          color: team.pos <= 3 ? "#C9A84C" : "rgba(255,255,255,0.5)",
                        }}
                      >
                        {team.pos}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div
                          style={{
                            width: "4px",
                            height: "24px",
                            background: team.color,
                            borderRadius: "2px",
                          }}
                        />
                        <span
                          className="font-semibold text-white"
                          style={{ fontFamily: "'Barlow', sans-serif" }}
                        >
                          {team.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="f1-number" style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.7)" }}>
                        {team.wins}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className="f1-number"
                        style={{
                          fontSize: "1.5rem",
                          color: team.pos === 1 ? "#E8002D" : "white",
                        }}
                      >
                        {team.pts}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
