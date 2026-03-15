/*
 * DESIGN: Night Race Cinematic
 * Drivers: Profile cards with driver number in Bebas Neue, team color accents
 * Nationality flags, career stats, hover glow effects
 */

const drivers = [
  {
    number: "1",
    name: "Max Verstappen",
    shortName: "VER",
    team: "Red Bull Racing",
    teamColor: "#3671C6",
    nationality: "🇳🇱 Dutch",
    age: 26,
    wins: 59,
    poles: 40,
    championships: 4,
    bio: "The four-time world champion. Verstappen's raw speed and racecraft have made him the most dominant driver of his generation.",
  },
  {
    number: "4",
    name: "Lando Norris",
    shortName: "NOR",
    team: "McLaren",
    teamColor: "#FF8000",
    nationality: "🇬🇧 British",
    age: 25,
    wins: 4,
    poles: 5,
    championships: 0,
    bio: "The fan favourite with lightning pace. Norris is the brightest young talent in F1, pushing hard for his first championship.",
  },
  {
    number: "16",
    name: "Charles Leclerc",
    shortName: "LEC",
    team: "Ferrari",
    teamColor: "#E8002D",
    nationality: "🇲🇨 Monégasque",
    age: 27,
    wins: 8,
    poles: 24,
    championships: 0,
    bio: "The prince of Monaco and Ferrari's standard bearer. Leclerc's qualifying pace is among the finest the sport has ever seen.",
  },
  {
    number: "44",
    name: "Lewis Hamilton",
    shortName: "HAM",
    team: "Mercedes",
    teamColor: "#27F4D2",
    nationality: "🇬🇧 British",
    age: 40,
    wins: 103,
    poles: 104,
    championships: 7,
    bio: "The greatest of all time. Seven world championships, 103 wins — Hamilton's legacy is unmatched in the history of Formula 1.",
  },
  {
    number: "55",
    name: "Carlos Sainz",
    shortName: "SAI",
    team: "Ferrari",
    teamColor: "#E8002D",
    nationality: "🇪🇸 Spanish",
    age: 30,
    wins: 4,
    poles: 6,
    championships: 0,
    bio: "Smooth, consistent, and relentlessly quick. Sainz has proven himself a race winner and a genuine championship contender.",
  },
  {
    number: "63",
    name: "George Russell",
    shortName: "RUS",
    team: "Mercedes",
    teamColor: "#27F4D2",
    nationality: "🇬🇧 British",
    age: 26,
    wins: 2,
    poles: 3,
    championships: 0,
    bio: "Methodical, intelligent, and devastatingly quick. Russell is the future of Mercedes and a future world champion in the making.",
  },
];

export default function DriversSection() {
  return (
    <section id="drivers" className="py-24" style={{ background: "#0A0D12" }}>
      <div className="container">
        <div className="relative mb-12">
          <span className="section-number">04</span>
          <div className="flex items-center gap-3 mb-3">
            <div style={{ width: "32px", height: "2px", background: "#E8002D" }} />
            <span className="f1-label" style={{ color: "#E8002D" }}>The Grid</span>
          </div>
          <h2
            className="f1-heading text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            DRIVER PROFILES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {drivers.map((driver) => (
            <div
              key={driver.number}
              className="f1-card group"
              style={{
                borderRadius: "4px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Background driver number */}
              <div
                className="absolute top-0 right-0 f1-number"
                style={{
                  fontSize: "8rem",
                  color: "rgba(255,255,255,0.03)",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                {driver.number}
              </div>

              <div className="p-6 relative z-10">
                {/* Driver number accent */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="f1-number"
                    style={{
                      fontSize: "3.5rem",
                      color: driver.teamColor,
                      lineHeight: 1,
                      opacity: 0.9,
                    }}
                  >
                    {driver.number}
                  </div>
                  <div
                    className="f1-label px-2 py-1"
                    style={{
                      color: driver.teamColor,
                      border: `1px solid ${driver.teamColor}40`,
                      background: `${driver.teamColor}10`,
                      fontSize: "0.65rem",
                      borderRadius: "2px",
                    }}
                  >
                    {driver.shortName}
                  </div>
                </div>

                {/* Name */}
                <h3
                  className="f1-heading text-white mb-1"
                  style={{ fontSize: "1.5rem", lineHeight: 1.1 }}
                >
                  {driver.name}
                </h3>

                {/* Team */}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    style={{
                      width: "3px",
                      height: "14px",
                      background: driver.teamColor,
                      borderRadius: "2px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "'Barlow', sans-serif",
                    }}
                  >
                    {driver.team}
                  </span>
                </div>

                {/* Nationality */}
                <div
                  className="f1-label mb-4"
                  style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.65rem" }}
                >
                  {driver.nationality} · Age {driver.age}
                </div>

                {/* Bio */}
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "'Barlow', sans-serif",
                    lineHeight: 1.6,
                    marginBottom: "1.25rem",
                  }}
                >
                  {driver.bio}
                </p>

                {/* Stats */}
                <div
                  className="grid grid-cols-3 gap-3 pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {[
                    { value: driver.wins, label: "Wins" },
                    { value: driver.poles, label: "Poles" },
                    { value: driver.championships, label: "Titles" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div
                        className="f1-number"
                        style={{
                          fontSize: "1.75rem",
                          color: stat.label === "Titles" && stat.value > 0 ? "#C9A84C" : "white",
                          lineHeight: 1,
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="f1-label"
                        style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem", marginTop: "2px" }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
