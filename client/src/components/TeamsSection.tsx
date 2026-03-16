/*
 * DESIGN: Night Race Cinematic
 * Teams: Constructor cards with team color bars, driver names, championship info
 * Asymmetric grid layout with featured team highlight
 */

const teams = [
  {
    name: "McLaren",
    fullName: "McLaren Formula 1 Team",
    color: "#FF8000",
    secondColor: "#000000",
    drivers: ["-", "-"],
    base: "Woking,Velká Británie",
    championships: 0,
    founded: 2026,
    
  },
  {
    name: "Ferrari",
    fullName: "Scuderia Ferrari HP",
    color: "#E8002D",
    secondColor: "#ffffff",
    drivers: ["-", "-"],
    base: "Maranello, Itálie",
    championships: 0,
    founded: 2026,
   
  },
  {
    name: "Red Bull Racing",
    fullName: "Oracle Red Bull Racing",
    color: "#3671C6",
    secondColor: "#CC1E4A",
    drivers: ["-", "-"],
    base: "Milton Keynes, Velká Británie",
    championships: 0,
    founded: 2026,
  },
  {
    name: "Mercedes",
    fullName: "Mercedes-AMG Petronas F1 Team",
    color: "#27F4D2",
    secondColor: "#000000",
    drivers: ["-", "-"],
    base: "Brackley, Velká Británie",
    championships: 0,
    founded: 2026,
    
  },
  {
    name: "Aston Martin",
    fullName: "Aston Martin Aramco F1 Team",
    color: "#358C75",
    secondColor: "#CEDC00",
    drivers: ["-", "-"],
    base: "Silverstone, Velká Británie",
    championships: 0,
    founded: 2026,
  },
  {
    name: "Alpine",
    fullName: "BWT Alpine F1 Team",
    color: "#0093CC",
    secondColor: "#FF87BC",
    drivers: ["Martin Davídek", "-"],
    base: "Enstone, Velká Británie",
    championships: 0,
    founded: 2026,
  },
  {
    name: "Haas",
    fullName: "TGR Haas F1 Team",
    color: "#B6BABD",
    secondColor: "#ff0000",
    drivers: ["-", "-"],
    base: "Kannapolis, USA",
    championships: 0,
    founded: 2026,
  },
  {
    name: "Racing Bulls",
    fullName: "Visa Cash App Racing Bulls F1 Team",
    color: "#0059ff",
    secondColor: "#ffffff",
    drivers: ["-", "-"],
    base: "Faenza, Itálie",
    championships: 0,
    founded: 2026,
  },
  {
    name: "Williams",
    fullName: "Atlassian Williams F1 Team",
    color: "#64C4FF",
    secondColor: "#ffffff",
    drivers: ["Daniel Klepal", ""],
    base: "Grove, Velká Británie",
    championships: 0,
    founded: 2026,
  },
  {
    name: "Kick Sauber",
    fullName: "Stake Kick F1 Team Sauber",
    color: "#00ff0d",
    secondColor: "#000000",
    drivers: ["-", "-"],
    base: "Hinwil, švýcarsko",
    championships: 0,
    founded: 2026,
  },
];

export default function TeamsSection() {
  return (
    <section id="teams" className="py-24" style={{ background: "#080B0F" }}>
      <div className="container">
        <div className="relative mb-12">
          <span className="section-number">03</span>
          <div className="flex items-center gap-3 mb-3">
            <div style={{ width: "32px", height: "2px", background: "#C9A84C" }} />
            <span className="f1-label" style={{ color: "#C9A84C" }}>Týmy v ERS</span>
          </div>
          <h2
            className="f1-heading text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            LINE-UP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {teams.map((team) => (
            <div
              key={team.name}
              className="f1-card group"
              style={{ borderRadius: "4px", overflow: "hidden" }}
            >
              {/* Team color bar */}
              <div
                style={{
                  height: "4px",
                  background: `linear-gradient(90deg, ${team.color}, ${team.secondColor})`,
                }}
              />

              <div className="p-6">
                {/* Team name */}
                <div className="mb-4">
                  <h3
                    className="f1-heading text-white"
                    style={{ fontSize: "1.6rem", lineHeight: 1 }}
                  >
                    {team.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.3)",
                      fontFamily: "'Barlow', sans-serif",
                      marginTop: "2px",
                    }}
                  >
                    {team.fullName}
                  </p>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "'Barlow', sans-serif",
                    lineHeight: 1.6,
                    marginBottom: "1.25rem",
                  }}
                >
              
                </p>

                {/* Drivers */}
                <div className="mb-4">
                  <div className="f1-label mb-2" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem" }}>
                    Jezdci
                  </div>
                  <div className="flex flex-col gap-1">
                    {team.drivers.map((driver) => (
                      <div
                        key={driver}
                        className="flex items-center gap-2"
                      >
                        <div
                          style={{
                            width: "3px",
                            height: "14px",
                            background: team.color,
                            borderRadius: "2px",
                          }}
                        />
                        <span
                          style={{
                            fontSize: "0.875rem",
                            color: "rgba(255,255,255,0.8)",
                            fontFamily: "'Barlow', sans-serif",
                            fontWeight: 500,
                          }}
                        >
                          {driver}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats row */}
                <div
                  className="flex gap-6 pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div>
                    <div
                      className="f1-number"
                      style={{ fontSize: "1.75rem", color: team.color, lineHeight: 1 }}
                    >
                      {team.championships}
                    </div>
                    <div className="f1-label" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem" }}>
                     Tituly
                    </div>
                  </div>
                  <div>
                    <div
                      className="f1-number"
                      style={{ fontSize: "1.75rem", color: "rgba(255,255,255,0.6)", lineHeight: 1 }}
                    >
                      {team.founded}
                    </div>
                    <div className="f1-label" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem" }}>
                      Založeno
                    </div>
                  </div>
                  <div>
                    <div
                      className="f1-number"
                      style={{ fontSize: "1.75rem", color: "rgba(255,255,255,0.6)", lineHeight: 1 }}
                    >
                      {team.base.split(",")[1]?.trim() || team.base}
                    </div>
                    <div className="f1-label" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem" }}>
                      Sídlo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
