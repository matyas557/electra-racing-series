/*
 * DESIGN: Night Race Cinematic
 * News: Editorial card layout, category tags, reading time
 * Featured article with large image, smaller secondary articles
 */
import { Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const articles = [
  {
    id: 1,
    category: "Obecné",
    title: "Nová liga",
    time: "5 min read",
    date: "",
    featured: true,
    tag: "Obecné",
    tagColor: "#E8002D",
  },
  {
    id: 2,
    category: "-",
    title: "-",
    time: "3 min read",
    date: "",
    featured: false,
    tag: "Technical",
    tagColor: "#FF8000",
  },
  {
    id: 3,
    category: "-",
    title: "-",
    excerpt: "",
    time: "4 min read",
    date: "",
    featured: false,
    tag: "Exclusive",
    tagColor: "#C9A84C",
  },
  {
    id: 4,
    category: "-",
    title: "-",
    time: "6 min read",
    date: "",
    featured: false,
    tag: "Preview",
    tagColor: "#00D4FF",
  },
];

export default function NewsSection() {
  const handleReadMore = () => {
    toast.info("Full articles coming soon!", {
      description: "Stay tuned for the latest F1 news and analysis.",
    });
  };

  const featured = articles.find((a) => a.featured);
  const secondary = articles.filter((a) => !a.featured);

  return (
    <section id="news" className="py-24" style={{ background: "#0A0D12" }}>
      <div className="container">
        <div className="relative mb-12">
          <span className="section-number">05</span>
          <div className="flex items-center gap-3 mb-3">
            <div style={{ width: "32px", height: "2px", background: "#00D4FF" }} />
            <span className="f1-label" style={{ color: "#00D4FF" }}>Updaty ligy</span>
          </div>
          <div className="flex items-end justify-between">
            <h2
              className="f1-heading text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              ERS Novinky
            </h2>
            <button
              onClick={handleReadMore}
              className="hidden md:flex items-center gap-2 f1-label"
              style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem" }}
            >
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured Article */}
          {featured && (
            <div
              className="lg:col-span-2 race-card cursor-pointer"
              onClick={handleReadMore}
              style={{ borderRadius: "4px" }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  height: "280px",
                  background: "linear-gradient(135deg, #1a0a0a 0%, #0d1a2a 100%)",
                }}
              >
                {/* Decorative background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "radial-gradient(ellipse at 30% 50%, rgba(232,0,45,0.15) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute inset-0 checkered-bg" />
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    background: "linear-gradient(to top, rgba(17,20,24,1) 0%, transparent 100%)",
                  }}
                >
                  <div
                    className="f1-label mb-2 inline-block px-2 py-1"
                    style={{
                      color: featured.tagColor,
                      border: `1px solid ${featured.tagColor}40`,
                      background: `${featured.tagColor}15`,
                      fontSize: "0.6rem",
                      borderRadius: "2px",
                    }}
                  >
                    {featured.tag}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="f1-heading text-white mb-3"
                  style={{ fontSize: "1.6rem", lineHeight: 1.2 }}
                >
                  {featured.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "'Barlow', sans-serif",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                    fontSize: "0.9rem",
                  }}
                >
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span
                      className="f1-label"
                      style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.65rem" }}
                    >
                      {featured.date}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock size={11} style={{ color: "rgba(255,255,255,0.3)" }} />
                      <span
                        className="f1-label"
                        style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.65rem" }}
                      >
                        {featured.time}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1" style={{ color: "#E8002D" }}>
                    <span className="f1-label" style={{ fontSize: "0.65rem" }}>Více</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Articles */}
          <div className="flex flex-col gap-4">
            {secondary.map((article) => (
              <div
                key={article.id}
                className="race-card cursor-pointer flex-1"
                onClick={handleReadMore}
                style={{ borderRadius: "4px" }}
              >
                <div className="p-5">
                  <div
                    className="f1-label mb-2 inline-block px-2 py-1"
                    style={{
                      color: article.tagColor,
                      border: `1px solid ${article.tagColor}40`,
                      background: `${article.tagColor}15`,
                      fontSize: "0.6rem",
                      borderRadius: "2px",
                    }}
                  >
                    {article.tag}
                  </div>
                  <h3
                    className="f1-heading text-white mb-2"
                    style={{ fontSize: "1.1rem", lineHeight: 1.2 }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.8rem",
                      lineHeight: 1.6,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <span
                      className="f1-label"
                      style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.6rem" }}
                    >
                      {article.date}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock size={10} style={{ color: "rgba(255,255,255,0.25)" }} />
                      <span
                        className="f1-label"
                        style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.6rem" }}
                      >
                        {article.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
