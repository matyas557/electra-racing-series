/*
 * DESIGN: Night Race Cinematic
 * Drivers: Profile cards with driver number in Bebas Neue, team color accents
 * Nationality flags, career stats, hover glow effects
 */

const drivers = [
  {
    number: "73",
    name: "Vít Langr",
    shortName: "LAN",
    team: "McLaren",
    teamColor: "#FF8000",
    nationality: "Česká Republika",
    age: 11,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
    {
    number: "3",
    name: "Pavol Nátny",
    shortName: "NAT",
    team: "McLaren",
    teamColor: "#FF8000",
    nationality: "Slovensko",
    age: 18,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "8",
    name: "Eliáš Molnár",
    shortName: "MOL",
    team: "Ferrari",
    teamColor: "#E8002D",
    nationality: "Slovensko",
    age: 14,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "0",
    name: "-",
    shortName: "0",
    team: "Ferrari",
    teamColor: "#E8002D",
    nationality: "",
    age: 0,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "0",
    name: "-",
    shortName: "-",
    team: "Red Bull Racing",
    teamColor: "#3671C6",
    nationality: "-",
    age: 0,
    wins: 0,
    poles: 0,
    championships: 0,
   
  },
    {
    number: "0",
    name: "-",
    shortName: "-",
    team: "Red Bull Racing",
    teamColor: "#3671C6",
    nationality: "",
    age: 0,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  
  
  {
    number: "0",
    name: "-",
    shortName: "0",
    team: "Mercedes",
    teamColor: "#27F4D2",
    nationality: "",
    age: 0,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "0",
    name: "-",
    shortName: "0",
    team: "Mercedes",
    teamColor: "#27F4D2",
    nationality: "",
    age: 0,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "78",
    name: "Štěpán Hlaváč",
    shortName: "HLA",
    team: "Aston Martin",
    teamColor: "#358C75",
    nationality: "Česká Republika",
    age: 13,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "0",
    name: "-",
    shortName: "0",
    team: "Aston Martin",
    teamColor: "#358C75",
    nationality: "",
    age: 0,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "47",
    name: "Martin Davídek",
    shortName: "DAV",
    team: "Alpine",
    teamColor: "#FF87BC",
    nationality: "Česká Republika",
    age: 18,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "0",
    name: "-",
    shortName: "0",
    team: "Alpine",
    teamColor: "#FF87BC",
    nationality: "",
    age: 0,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "13",
    name: "Alex Ondrejka",
    shortName: "OND",
    team: "Haas",
    teamColor: "#B6BABD",
    nationality: "Slovensko",
    age: 18,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "0",
    name: "-",
    shortName: "0",
    team: "Haas",
    teamColor: "#B6BABD",
    nationality: "",
    age: 0,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "0",
    name: "-",
    shortName: "0",
    team: "Racing Bulls",
    teamColor: "#0059ff",
    nationality: "",
    age: 0,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "0",
    name: "-",
    shortName: "0",
    team: "Racing Bulls",
    teamColor: "#0059ff",
    nationality: "",
    age: 0,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "0",
    name: "",
    shortName: "",
    team: "Williams",
    teamColor: "#64C4FF",
    nationality: "",
    age: 0,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "93",
    name: "Daniel Klepal",
    shortName: "KLE",
    team: "Williams",
    teamColor: "#64C4FF",
    nationality: "Česká Republika",
    age: 16,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "0",
    name: "",
    shortName: "",
    team: "Kick Sauber",
    teamColor: "#00ff0d",
    nationality: "Slovensko",
    age: 0,
    wins: 0,
    poles: 0,
    championships: 0,
    
  },
  {
    number: "0",
    name: "-",
    shortName: "-",
    team: "Kick Sauber",
    teamColor: "#00ff0d",
    nationality: "",
    age: 0,
    wins: 0,
    poles: 0,
    championships: 0,
    
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
            <span className="f1-label" style={{ color: "#E8002D" }}>Jezdci v ERS</span>
          </div>
          <h2
            className="f1-heading text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Profily jezdců
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
