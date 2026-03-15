/*
 * DESIGN: Night Race Cinematic
 * Feature: Asymmetric two-column layout, alternating image/text sides
 * Uses pit stop and podium images with dramatic overlays
 */

const PIT_STOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419012309/FUBNiPFctLLWzH3m2BbTut/f1-pitstop-6LekPe5kBVmXjtigjaqT5E.webp";
const PODIUM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419012309/FUBNiPFctLLWzH3m2BbTut/f1-podium-Kseqg7oy4CR4FG6bWAW64o.webp";
const CAR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419012309/FUBNiPFctLLWzH3m2BbTut/f1-car-closeup-cXWGnyZycDZhL5NsZv8zWA.webp";

export default function FeatureSection() {
  return (
    <section className="overflow-hidden" style={{ background: "#080B0F" }}>
      {/* Feature 1: Pit Stop */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "500px" }}>
        {/* Image */}
        <div className="relative overflow-hidden" style={{ minHeight: "400px" }}>
          <img
            src={PIT_STOP_IMG}
            alt="F1 Pit Stop"
            className="w-full h-full object-cover"
            style={{ minHeight: "400px" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, transparent 60%, #080B0F 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div
          className="flex flex-col justify-center px-8 lg:px-16 py-16"
          style={{ background: "#080B0F" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "32px", height: "2px", background: "#E8002D" }} />
            <span className="f1-label" style={{ color: "#E8002D" }}>Precision Engineering</span>
          </div>
          <h2
            className="f1-heading text-white mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            THE ART OF THE
            <br />
            <span style={{ color: "#E8002D" }}>PIT STOP</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "'Barlow', sans-serif",
              lineHeight: 1.8,
              marginBottom: "2rem",
              maxWidth: "440px",
            }}
          >
            In under 2.5 seconds, a team of 20 mechanics can change all four tyres, 
            adjust the front wing, and send the driver back into battle. It is the 
            most choreographed athletic performance in professional sport.
          </p>
          <div className="flex gap-8">
            {[
              { value: "1.80s", label: "World Record Pit Stop" },
              { value: "20", label: "Mechanics Per Stop" },
              { value: "4", label: "Tyres Changed" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="f1-number"
                  style={{ fontSize: "2rem", color: "#E8002D", lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div
                  className="f1-label"
                  style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem", marginTop: "4px" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature 2: Podium (reversed) */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "500px" }}>
        {/* Content */}
        <div
          className="flex flex-col justify-center px-8 lg:px-16 py-16 order-2 lg:order-1"
          style={{ background: "#0A0D12" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "32px", height: "2px", background: "#C9A84C" }} />
            <span className="f1-label" style={{ color: "#C9A84C" }}>The Pinnacle</span>
          </div>
          <h2
            className="f1-heading text-white mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            GLORY ON THE
            <br />
            <span style={{ color: "#C9A84C" }}>PODIUM</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "'Barlow', sans-serif",
              lineHeight: 1.8,
              marginBottom: "2rem",
              maxWidth: "440px",
            }}
          >
            The podium is the ultimate reward — the culmination of thousands of 
            engineering hours, strategic brilliance, and raw driving talent. 
            Champagne, confetti, and the roar of the crowd. This is what every 
            driver races for.
          </p>
          <div className="flex gap-8">
            {[
              { value: "24", label: "Races Per Season" },
              { value: "3", label: "Podium Places" },
              { value: "25", label: "Points for a Win" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="f1-number"
                  style={{ fontSize: "2rem", color: "#C9A84C", lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div
                  className="f1-label"
                  style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem", marginTop: "4px" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden order-1 lg:order-2" style={{ minHeight: "400px" }}>
          <img
            src={PODIUM_IMG}
            alt="F1 Podium"
            className="w-full h-full object-cover"
            style={{ minHeight: "400px" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to left, transparent 60%, #0A0D12 100%)",
            }}
          />
        </div>
      </div>

      {/* Feature 3: Car Technology */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "500px" }}>
        {/* Image */}
        <div className="relative overflow-hidden" style={{ minHeight: "400px" }}>
          <img
            src={CAR_IMG}
            alt="F1 Car Technology"
            className="w-full h-full object-cover"
            style={{ minHeight: "400px", objectPosition: "center" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, transparent 60%, #080B0F 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div
          className="flex flex-col justify-center px-8 lg:px-16 py-16"
          style={{ background: "#080B0F" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "32px", height: "2px", background: "#00D4FF" }} />
            <span className="f1-label" style={{ color: "#00D4FF" }}>Technology</span>
          </div>
          <h2
            className="f1-heading text-white mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            THE FASTEST
            <br />
            <span style={{ color: "#00D4FF" }}>MACHINES</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "'Barlow', sans-serif",
              lineHeight: 1.8,
              marginBottom: "2rem",
              maxWidth: "440px",
            }}
          >
            A modern Formula 1 car is the most sophisticated racing machine ever 
            created. With over 80,000 components, a hybrid power unit producing 
            1,000 horsepower, and aerodynamics generating 3.5G of cornering force, 
            these are the ultimate expression of human engineering.
          </p>
          <div className="flex gap-8">
            {[
              { value: "1000+", label: "Horsepower" },
              { value: "350+", label: "km/h Top Speed" },
              { value: "3.5G", label: "Cornering Force" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="f1-number"
                  style={{ fontSize: "2rem", color: "#00D4FF", lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div
                  className="f1-label"
                  style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem", marginTop: "4px" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
