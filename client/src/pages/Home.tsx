/*
 * VELA Landing Page — Home.tsx
 * Design: Oxidized Signal
 * Palette: Instrument Black (#0A0F0D), Deep Verdigris (#0D1A12),
 *          Signal (#C4A882), Chart White (#E8EDE8), Coordinate (#8A9E90)
 * Typography: IBM Plex Sans 200/300, IBM Plex Mono 400, IBM Plex Serif Italic
 */

import { useEffect, useRef, useState } from "react";

// ─── ASSET URLS ──────────────────────────────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663282063473/8VT7xgZchuJYvZ9KBxsjVW/vela-hero-bg-jBboEqVZQFc5AtKL7tqw2Y.webp";
const MANIFESTO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663282063473/8VT7xgZchuJYvZ9KBxsjVW/vela-manifesto-bg-VrgZGbMHhAixPdptPFDN9S.webp";
const ACCESS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663282063473/8VT7xgZchuJYvZ9KBxsjVW/vela-access-bg-YanyRBugwamzbCdSknuRKg.webp";
const PDF_URL = "/VELA_OnePager.pdf";
const NIGHT_PDF_URL = "/VELA_OnePager_Night.pdf";

// ─── PDF DROPDOWN ─────────────────────────────────────────────────────────────
function PdfDropdown({
  label,
  fontSize = "0.6875rem",
  letterSpacing = "0.15em",
  color = "#E8EDE8",
  hoverColor = "#C4A882",
  iconSize = { w: 10, h: 12 },
  border,
  padding,
}: {
  label: string;
  fontSize?: string;
  letterSpacing?: string;
  color?: string;
  hoverColor?: string;
  iconSize?: { w: number; h: number };
  border?: string;
  padding?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const baseStyle: React.CSSProperties = {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize,
    fontWeight: 400,
    letterSpacing,
    textTransform: "uppercase",
    color,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "color 0.15s ease, border-color 0.15s ease",
    cursor: "pointer",
    background: "none",
    ...(border ? { border, padding } : { border: "none", padding: padding || 0 }),
  };

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen(!open)}
        style={baseStyle}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = hoverColor;
          if (border) (e.currentTarget as HTMLButtonElement).style.borderColor = hoverColor;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = color;
          if (border) (e.currentTarget as HTMLButtonElement).style.borderColor = "#7C9E8A";
        }}
      >
        <svg width={iconSize.w} height={iconSize.h} viewBox="0 0 10 12" fill="none">
          <path d="M5 0v8M1 5l4 4 4-4M0 11h10" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        {label}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ marginLeft: "0.25rem" }}>
          <path d={open ? "M0 4l4-4 4 4" : "M0 0l4 4 4-4"} stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: "0.375rem",
            background: "#0D1A12",
            border: "1px solid #7C9E8A",
            zIndex: 100,
            minWidth: "200px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <a
            href={PDF_URL}
            download="VELA_Day_OnePager.pdf"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: fontSize,
              fontWeight: 400,
              letterSpacing,
              textTransform: "uppercase",
              color: "#E8EDE8",
              textDecoration: "none",
              padding: "0.625rem 0.875rem",
              transition: "background 0.15s ease, color 0.15s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(196,168,130,0.1)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#C4A882";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#E8EDE8";
            }}
          >
            <svg width={iconSize.w} height={iconSize.h} viewBox="0 0 10 12" fill="none">
              <path d="M5 0v8M1 5l4 4 4-4M0 11h10" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            Day One Pager
          </a>
          <div style={{ height: "1px", background: "#7C9E8A", opacity: 0.4 }} />
          <a
            href={NIGHT_PDF_URL}
            download="VELA_Night_OnePager.pdf"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: fontSize,
              fontWeight: 400,
              letterSpacing,
              textTransform: "uppercase",
              color: "#E8EDE8",
              textDecoration: "none",
              padding: "0.625rem 0.875rem",
              transition: "background 0.15s ease, color 0.15s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(196,168,130,0.1)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#C4A882";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#E8EDE8";
            }}
          >
            <svg width={iconSize.w} height={iconSize.h} viewBox="0 0 10 12" fill="none">
              <path d="M5 0v8M1 5l4 4 4-4M0 11h10" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            Night One Pager
          </a>
        </div>
      )}
    </div>
  );
}

// ─── SECTION LABEL ───────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="vela-label mb-6"
      style={{ color: "#E8EDE8" }}
    >
      {children}
    </p>
  );
}

// ─── DIVIDER ─────────────────────────────────────────────────────────────────
function Divider() {
  return <hr className="vela-divider" />;
}

// ─── NAVIGATION RETICLE SVG ──────────────────────────────────────────────────
function NavigationReticle({ size = 64 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.85 }}
    >
      {/* Outer arc */}
      <path
        d="M 10 50 A 40 40 0 0 1 90 50"
        stroke="#E8EDE8"
        strokeWidth="0.8"
        fill="none"
      />
      {/* Inner circle */}
      <circle cx="50" cy="50" r="22" stroke="#7C9E8A" strokeWidth="0.6" fill="none" />
      {/* Center crosshair */}
      <line x1="50" y1="26" x2="50" y2="34" stroke="#E8EDE8" strokeWidth="0.8" />
      <line x1="50" y1="66" x2="50" y2="74" stroke="#E8EDE8" strokeWidth="0.8" />
      <line x1="26" y1="50" x2="34" y2="50" stroke="#E8EDE8" strokeWidth="0.8" />
      <line x1="66" y1="50" x2="74" y2="50" stroke="#E8EDE8" strokeWidth="0.8" />
      {/* Center dot */}
      <circle cx="50" cy="50" r="1.5" fill="#E8EDE8" />
      {/* Constellation points */}
      <circle cx="50" cy="38" r="1.2" fill="#7C9E8A" />
      <circle cx="62" cy="46" r="1.2" fill="#7C9E8A" />
      <circle cx="58" cy="58" r="1.2" fill="#7C9E8A" />
      <circle cx="42" cy="58" r="1.2" fill="#7C9E8A" />
      <circle cx="38" cy="46" r="1.2" fill="#7C9E8A" />
      {/* Constellation lines */}
      <line x1="50" y1="38" x2="62" y2="46" stroke="#7C9E8A" strokeWidth="0.4" opacity="0.6" />
      <line x1="62" y1="46" x2="58" y2="58" stroke="#7C9E8A" strokeWidth="0.4" opacity="0.6" />
      <line x1="58" y1="58" x2="42" y2="58" stroke="#7C9E8A" strokeWidth="0.4" opacity="0.6" />
      <line x1="42" y1="58" x2="38" y2="46" stroke="#7C9E8A" strokeWidth="0.4" opacity="0.6" />
      <line x1="38" y1="46" x2="50" y2="38" stroke="#7C9E8A" strokeWidth="0.4" opacity="0.6" />
      {/* Scale ticks on arc */}
      {[15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 50 + 38 * Math.cos(rad);
        const y1 = 50 - 38 * Math.sin(rad);
        const x2 = 50 + 41 * Math.cos(rad);
        const y2 = 50 - 41 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#7C9E8A"
            strokeWidth="0.5"
            opacity="0.5"
          />
        );
      })}
      {/* VELA text */}
      <text
        x="50"
        y="88"
        textAnchor="middle"
        fill="#7C9E8A"
        fontSize="5"
        fontFamily="IBM Plex Mono, monospace"
        letterSpacing="3"
        opacity="0.7"
      >
        VELA
      </text>
    </svg>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function Home() {
  // Intersection observer for scroll animations
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0A0F0D", color: "#E8EDE8" }}
    >
      {/* ═══════════════════════════════════════════════════════════════════
          NAVIGATION
      ═══════════════════════════════════════════════════════════════════ */}
      <nav
        style={{
          borderBottom: "1px solid #7C9E8A",
          backgroundColor: "#0A0F0D",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <NavigationReticle size={28} />
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.8125rem",
                fontWeight: 400,
                letterSpacing: "0.2em",
                color: "#E8EDE8",
              }}
            >
              VELA
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            <span
              className="vela-label"
              style={{ color: "#E8EDE8", display: "none" }}
            >
              PRIVATE COMMAND INFRASTRUCTURE
            </span>
            <PdfDropdown
              label="Download PDF"
              fontSize="0.625rem"
              letterSpacing="0.18em"
              color="#C4A882"
              hoverColor="#E8EDE8"
              border="1px solid #7C9E8A"
              padding="0.5rem 0.875rem"
            />
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", flexDirection: "column" }}>
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            opacity: 0.22,
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, #0A0F0D 0%, transparent 30%, transparent 60%, #0A0F0D 100%)",
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: "5rem",
            paddingBottom: "5rem",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <NavigationReticle size={72} />
          </div>

          <p
            className="vela-label hero-fade-1"
            style={{ marginBottom: "1.5rem", color: "#E8EDE8" }}
          >
            PRIVATE ACCESS · BY INTRODUCTION ONLY
          </p>

          <h1
            className="hero-fade-2"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 200,
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 1.08,
              color: "#E8EDE8",
              maxWidth: "820px",
              marginBottom: "0.25rem",
            }}
          >
            Your team has problems.
          </h1>

          <h1
            className="hero-fade-3"
            style={{
              fontFamily: "'IBM Plex Serif', serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 1.08,
              color: "#C4A882",
              maxWidth: "820px",
              marginBottom: "2rem",
            }}
          >
            This one doesn't.
          </h1>

          <p
            className="hero-fade-4"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 300,
              fontSize: "1.125rem",
              lineHeight: 1.6,
              color: "#E8EDE8",
              maxWidth: "520px",
              marginBottom: "2.5rem",
            }}
          >
            Private command infrastructure for people who are done operating below their altitude.
          </p>

          <div
            className="hero-fade-5"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}
          >
            <a href="mailto:greg@gregshindler.com?subject=I%20want%20VELA%20Now!&body=Referred%20by%3A%20" className="vela-cta">
              Request Access
            </a>
            <a href="#what-is-vela" className="vela-ghost">
              What is VELA
            </a>
            <PdfDropdown
              label="Download One-Pager"
              color="#E8EDE8"
              hoverColor="#C4A882"
              padding="0.875rem 0"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SEE IT IN ACTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="see-it-in-action"
        className="fade-in"
        style={{
          backgroundColor: "#0A0F0D",
          borderTop: "1px solid #7C9E8A",
          borderBottom: "1px solid #7C9E8A",
          paddingTop: "4rem",
          paddingBottom: "0",
        }}
      >
        <div className="container" style={{ marginBottom: "2rem" }}>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.625rem",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#E8EDE8",
              marginBottom: "0.75rem",
            }}
          >
            LIVE DEMO
          </p>
          <h2
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 200,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              lineHeight: 1.2,
              color: "#E8EDE8",
            }}
          >
            See It In Action.
          </h2>
        </div>
        <iframe
          src="/vela-demo.html"
          width="100%"
          height="900px"
          frameBorder="0"
          scrolling="no"
          title="VELA Demo"
          style={{ display: "block", border: "none" }}
        />
      </section>

      <Divider />

      {/* ═══════════════════════════════════════════════════════════════════
          THE PROBLEM
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="what-is-vela"
        className="container fade-in"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <SectionLabel>THE PROBLEM</SectionLabel>

        <h2
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 200,
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            lineHeight: 1.2,
            color: "#E8EDE8",
            maxWidth: "680px",
            marginBottom: "2.5rem",
          }}
        >
          Here's what your current executive team is dealing with right now.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            marginBottom: "2.5rem",
            border: "1px solid #7C9E8A",
          }}
        >
          <div
            style={{
              backgroundColor: "#0D1A12",
              padding: "1.75rem",
              borderRight: "1px solid #7C9E8A",
            }}
          >
            <p className="vela-body" style={{ fontSize: "0.9375rem" }}>
              One of them is hungover. One is three weeks into a breakup and running at 60%. One is taking their third personal day this month. One is quietly updating their LinkedIn. One is great — and about to ask for a raise you can't afford to lose them over.
            </p>
          </div>
          <div style={{ backgroundColor: "#0D1A12", padding: "1.75rem" }}>
            <p className="vela-body" style={{ fontSize: "0.9375rem" }}>
              And you are managing all of it. On top of actually running the company. Every hour you spend on logistics is an hour stolen from judgment. The gap between your capability and your output is not a talent problem. It is a drag problem.
            </p>
          </div>
        </div>

        <div
          style={{
            borderLeft: "2px solid #C4A882",
            paddingLeft: "1.5rem",
            marginBottom: "1.25rem",
          }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.65,
              color: "#E8EDE8",
            }}
          >
            <strong style={{ color: "#E8EDE8" }}>VELA is the team that does none of that.</strong>{" "}
            <span style={{ color: "#E8EDE8" }}>
              They don't get sick. They don't break up with their partner and check out for a week. No depression spirals. No passive-aggressive messages. No vacation requests in Q4. No surprise resignations. No lives that interfere with your business.
            </span>
          </p>
        </div>

        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 400,
            fontSize: "1.0625rem",
            lineHeight: 1.5,
            color: "#E8EDE8",
          }}
        >
          They just execute. At your standard. Every single day.
        </p>
      </section>

      <Divider />

      {/* ═══════════════════════════════════════════════════════════════════
          YOUR TEAM, ON DAY ONE
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="container fade-in"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <SectionLabel>YOUR TEAM, ON DAY ONE</SectionLabel>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
            alignItems: "start",
          }}
          className="responsive-2col"
        >
          <h2
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 200,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.2,
              color: "#E8EDE8",
            }}
          >
            Six agents.
            <br />
            One standard.
            <br />
            Installed on your hardware.
          </h2>
          <p className="vela-body" style={{ paddingTop: "0.5rem", fontSize: "0.9375rem" }}>
            This is not a subscription. It is not a cloud service. It is infrastructure — installed on a dedicated Mac Mini M4, configured for your business, running on your terms. Private. Sovereign. Yours.
          </p>
        </div>

        {/* Hannah Card */}
        <div
          style={{
            border: "1px solid #7C9E8A",
            backgroundColor: "#E8EDE8",
            marginBottom: "1px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
          }}
          className="responsive-2col-card"
        >
          <div
            style={{
              padding: "1.75rem",
              borderRight: "1px solid #4A7060",
            }}
          >
            <p className="vela-label" style={{ marginBottom: "0.5rem", color: "#1A2E24" }}>CHIEF OF STAFF</p>
            <h3
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 300,
                fontSize: "1.375rem",
                color: "#0A1A10",
                marginBottom: "0.75rem",
              }}
            >
              Hannah
            </h3>
            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.65, color: "#1A2E24" }}>
              Hannah coordinates all five specialist agents. She is the single point of contact for your entire intelligence layer. You speak to her. She handles the rest.
            </p>
          </div>
          <div style={{ padding: "1.75rem" }}>
            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.65, color: "#1A2E24" }}>
              Runs point on everything. Owns your calendar, communications, and daily operations. Never has an off day. Never drops a thread. Never needs to be followed up with. The command layer that runs beneath you so you can run above everything.
            </p>
          </div>
        </div>

        {/* Five Agents Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px",
            border: "1px solid #7C9E8A",
          }}
        >
          {[
            {
              num: "01",
              name: "Research",
              desc: "Competitive intelligence, due diligence, market analysis, investment briefs. Not search results. Documents you can walk into a room with.",
            },
            {
              num: "02",
              name: "Analysis",
              desc: "Financial models stress-tested. Numbers challenged. Decks pressure-checked before they go in front of anyone who matters. It doesn't flatter you — it prepares you.",
            },
            {
              num: "03",
              name: "Legal",
              desc: "Contracts reviewed, red flags surfaced, language tightened. You arrive at outside counsel already knowing where the problems are.",
            },
            {
              num: "04",
              name: "Marketing",
              desc: "Positioning sharpened, copy written, campaigns drafted. Your voice — consistent, on-brand, and actually good — across every channel.",
            },
            {
              num: "05",
              name: "Projects",
              desc: "Deadlines tracked. Blockers flagged. Status surfaced before you have to ask. You lead the work instead of chasing it.",
            },
          ].map((agent, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#E8EDE8",
                padding: "1.5rem",
                borderRight: i < 4 ? "1px solid #4A7060" : "none",
                borderBottom: i < 3 ? "1px solid #4A7060" : "none",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#D4D9D4";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#E8EDE8";
              }}
            >
              <p
                className="vela-label"
                style={{ marginBottom: "0.75rem", color: "#1A2E24" }}
              >
                {agent.num}
              </p>
              <h4
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "1rem",
                  color: "#0A1A10",
                  marginBottom: "0.625rem",
                }}
              >
                {agent.name}
              </h4>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 300, fontSize: "0.8125rem", lineHeight: 1.65, color: "#1A2E24" }}>
                {agent.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ═══════════════════════════════════════════════════════════════════
          WHAT YOUR DAYS ACTUALLY LOOK LIKE
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="container fade-in"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <SectionLabel>WHAT YOUR DAYS ACTUALLY LOOK LIKE</SectionLabel>

        <h2
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 200,
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            lineHeight: 1.2,
            color: "#E8EDE8",
            maxWidth: "720px",
            marginBottom: "3rem",
          }}
        >
          You're at dinner. In the gym. On a flight. Your team doesn't notice you're gone.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            border: "1px solid #7C9E8A",
          }}
        >
          {[
            {
              context: "YOU'RE ON A FLIGHT",
              heading: "No signal. No problem.",
              body: "Your morning brief is waiting when you land. Three meetings prepped with talking points, background on who you're seeing, and the questions you should ask. Inbox triaged. Two drafts ready for approval. Nothing waited for you to be available — because nothing ever does.",
            },
            {
              context: "YOU'RE IN THE GYM",
              heading: "It's already done.",
              body: "The contract that arrived at 8am has been reviewed and red-flagged. The marketing copy has been torn apart and redrafted. The competitive analysis is in your Drive. All of it — before you picked up your phone.",
            },
            {
              context: "YOU'RE AT DINNER",
              heading: "Be present. Fully.",
              body: "The investor brief for tomorrow is written. Documents pulled from Google Drive, formatted, attached, sent. The follow-up from this afternoon's call went out over your signature hours ago. You are not missing anything.",
            },
            {
              context: "IT'S 2AM",
              heading: "Your team is still working.",
              body: "Monday's brief is being built. The proposal that came in after hours is being reviewed. When you wake up, you are already ahead. That is not a feature. That is the point.",
            },
          ].map((scenario, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#C4A882",
                padding: "2rem",
                borderRight: i % 2 === 0 ? "1px solid #7C9E8A" : "none",
                borderBottom: i < 2 ? "1px solid #7C9E8A" : "none",
              }}
            >
              <p
                className="vela-label"
                style={{ marginBottom: "0.75rem", color: "#3A2A18" }}
              >
                {scenario.context}
              </p>
              <h4
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "1.125rem",
                  color: "#1A0F00",
                  marginBottom: "0.75rem",
                }}
              >
                {scenario.heading}
              </h4>
              <p
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: "#3A2A18",
                }}
              >
                {scenario.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE MANIFESTO
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${MANIFESTO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#0A0F0D",
            opacity: 0.7,
          }}
        />

        <div
          className="container fade-in"
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: "6rem",
            paddingBottom: "6rem",
            maxWidth: "760px",
          }}
        >
          <SectionLabel>THE MANIFESTO</SectionLabel>

          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              lineHeight: 1.5,
              color: "#E8EDE8",
              marginBottom: "1rem",
            }}
          >
            You were not built to manage the inbox.
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              lineHeight: 1.5,
              color: "#E8EDE8",
              marginBottom: "1rem",
            }}
          >
            You were built to see what others cannot see. To make the call no one else is willing to make. To hold the vision when everyone around you has lost it.
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              lineHeight: 1.5,
              color: "#E8EDE8",
              marginBottom: "2.5rem",
            }}
          >
            That is what you were built for.
          </p>

          <p className="vela-body" style={{ marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
            And somewhere between building something real and running the machine that surrounds it, you started doing everything else instead. That gap you feel but rarely name is not a talent problem. It is a drag problem. Drag is invisible. That is what makes it dangerous. It accumulates. One inbox. One prep call you had to do yourself. One brief that never got written. Multiply that by a year.
          </p>

          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 400,
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "#E8EDE8",
              marginBottom: "1.5rem",
              borderLeft: "2px solid #C4A882",
              paddingLeft: "1.25rem",
            }}
          >
            VELA exists to close the gap. Not by making you more productive. By removing everything that was never yours to carry.
          </p>

          <p className="vela-body" style={{ marginBottom: "2.5rem", fontSize: "0.9375rem" }}>
            We are the sails. You are the ship. The wind is your genius. Your vision, your instincts, your irreplaceable judgment. We catch it, amplify it, and convert it into momentum while you stay locked on the horizon.
          </p>

          <p
            style={{
              fontFamily: "'IBM Plex Serif', serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "#C4A882",
              lineHeight: 1.2,
            }}
          >
            Now set sail.
          </p>
        </div>
      </section>

      <Divider />

      {/* ═══════════════════════════════════════════════════════════════════
          THE OPERATING PRINCIPLES
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="container fade-in"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <SectionLabel>THE OPERATING PRINCIPLES</SectionLabel>

        <h2
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 200,
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            lineHeight: 1.2,
            color: "#E8EDE8",
            marginBottom: "3rem",
          }}
        >
          Three things we never compromise.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px",
            border: "1px solid #7C9E8A",
          }}
        >
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <line x1="12" y1="2" x2="12" y2="22" stroke="#1A2E24" strokeWidth="1" />
                  <line x1="6" y1="8" x2="12" y2="2" stroke="#1A2E24" strokeWidth="1" />
                  <line x1="18" y1="8" x2="12" y2="2" stroke="#1A2E24" strokeWidth="1" />
                </svg>
              ),
              name: "ALTITUDE",
              body: "VELA operates above the noise. Not metaphorically. Architecturally. The command layer runs beneath you so you can stay above everything else. Most people never leave sea level. Not because they can't fly. Because no one ever removed the weight.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#1A2E24" strokeWidth="1" />
                  <circle cx="12" cy="12" r="1.5" fill="#1A2E24" />
                  <line x1="12" y1="3" x2="12" y2="7" stroke="#1A2E24" strokeWidth="1" />
                  <line x1="12" y1="17" x2="12" y2="21" stroke="#1A2E24" strokeWidth="1" />
                  <line x1="3" y1="12" x2="7" y2="12" stroke="#1A2E24" strokeWidth="1" />
                  <line x1="17" y1="12" x2="21" y2="12" stroke="#1A2E24" strokeWidth="1" />
                </svg>
              ),
              name: "PRECISION",
              body: "Nothing arrives at your attention that does not deserve it. Nothing leaves your name on it that is not ready. The system does not approximate. It prepares. Every output is calibrated to your standard, not a generic standard.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="7" y="11" width="10" height="10" rx="0" stroke="#1A2E24" strokeWidth="1" />
                  <path d="M9 11V7a3 3 0 016 0v4" stroke="#1A2E24" strokeWidth="1" />
                  <circle cx="12" cy="16" r="1.5" fill="#1A2E24" />
                </svg>
              ),
              name: "SOVEREIGNTY",
              body: "You are not a user. You are not a client. You are the principal. VELA exists to serve your judgment, not to replace it. Your data runs on hardware you own. Your intelligence layer answers to no one but you.",
            },
          ].map((pillar, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#E8EDE8",
                padding: "2rem",
                borderRight: i < 2 ? "1px solid #7C9E8A" : "none",
              }}
            >
              <div style={{ marginBottom: "1.25rem" }}>{pillar.icon}</div>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.625rem",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  color: "#3A2A18",
                  marginBottom: "0.75rem",
                }}
              >
                {pillar.name}
              </p>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.65, color: "#1A2E24" }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ACCESS POLICY
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#0D1A12",
          borderTop: "1px solid #7C9E8A",
          borderBottom: "1px solid #7C9E8A",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${ACCESS_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.06,
          }}
        />

        <div
          className="container fade-in"
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: "5rem",
            paddingBottom: "5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <div>
            <SectionLabel>ACCESS POLICY</SectionLabel>
            <h2
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 200,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
                color: "#E8EDE8",
                marginBottom: "1.5rem",
              }}
            >
              This is not for everyone.
            </h2>
            <p className="vela-body" style={{ marginBottom: "1.25rem", fontSize: "0.9375rem" }}>
              That is not a limitation. That is the design. Private access. By introduction only. We do not advertise. We do not have a trial tier. We do not do demos for people who are not ready.
            </p>
            <p
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 400,
                fontSize: "0.9375rem",
                color: "#E8EDE8",
                lineHeight: 1.5,
              }}
            >
              If someone sent you here, they thought you were ready.
            </p>
          </div>

          <div>
            <p
              className="vela-label"
              style={{ marginBottom: "1.25rem", color: "#E8EDE8" }}
            >
              VELA IS NOT FOR:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                "Managers who want to feel more organized",
                'Anyone who describes their problem as "I need to be more efficient"',
                "Founders still figuring out what they are building",
                "Anyone who needs to be convinced their time is valuable",
                'Anyone who would call VELA "an AI tool"',
                "Anyone who would share their VELA setup on a productivity channel",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
                >
                  <span
                    style={{
                    color: "#E8EDE8",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.75rem",
                    marginTop: "0.1rem",
                    flexShrink: 0,
                  }}
                >
                  ×
                  </span>
                  <p
                    style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.875rem",
                      color: "#E8EDE8",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE INVESTMENT
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="container fade-in"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <SectionLabel>THE INVESTMENT</SectionLabel>

        <h2
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 200,
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            lineHeight: 1.2,
            color: "#E8EDE8",
            maxWidth: "640px",
            marginBottom: "3rem",
          }}
        >
          One investment. Everything installed. Everything running. Everything yours.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            border: "1px solid #7C9E8A",
            marginBottom: "1px",
          }}
        >
          {[
            {
              tier: "TURNKEY — FULL SERVICE",
              name: "Done For You",
              price: "$10,000",
              sub: "One-time. Everything included.",
              items: [
                "Dedicated Mac Mini M4 — configured and shipped",
                "Full installation, calibration, and setup",
                "All six agents deployed and briefed on your business",
                "Telegram + WhatsApp integration live on day one",
                "Gmail, Google Drive, and Calendar connected",
                "12 months of remote monitoring and support",
                "Priority updates and system optimization",
              ],
            },
            {
              tier: "SELF-INSTALL — DIY",
              name: "Done With You",
              price: "$5,000",
              sub: "One-time. You supply the Mac Mini.",
              items: [
                "Full access to private GitHub repository",
                "All install scripts, templates, and agent files",
                "Step-by-step guided installation session",
                "Documentation and configuration reference",
                "30 days of setup support",
                "Optional: remote monitoring at $250/month",
              ],
            },
          ].map((plan, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#0D1A12",
                padding: "2rem",
                borderRight: i === 0 ? "1px solid #7C9E8A" : "none",
              }}
            >
              <p className="vela-label" style={{ marginBottom: "0.5rem" }}>
                {plan.tier}
              </p>
              <p
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.875rem",
                  color: "#E8EDE8",
                  marginBottom: "0.5rem",
                }}
              >
                {plan.name}
              </p>
              <p
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontWeight: 200,
                  fontSize: "3rem",
                  color: "#E8EDE8",
                  lineHeight: 1.1,
                  marginBottom: "0.25rem",
                }}
              >
                {plan.price}
              </p>
              <p
                className="vela-label"
                style={{ marginBottom: "1.5rem", color: "#E8EDE8" }}
              >
                {plan.sub}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {plan.items.map((item, j) => (
                  <div
                    key={j}
                    style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
                  >
                    <span
                      style={{
                        color: "#C4A882",
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.75rem",
                        marginTop: "0.1rem",
                        flexShrink: 0,
                      }}
                    >
                      —
                    </span>
                    <p
                      style={{
                        fontFamily: "'IBM Plex Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.875rem",
                        color: "#E8EDE8",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Costs note */}
        <div
          style={{
            border: "1px solid #7C9E8A",
            backgroundColor: "#0A0F0D",
            padding: "1.25rem 1.75rem",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          <p
            className="vela-label"
            style={{ color: "#E8EDE8", whiteSpace: "nowrap", paddingTop: "0.125rem" }}
          >
            AI OPERATING COSTS
          </p>
          <p className="vela-body" style={{ fontSize: "0.875rem" }}>
            Paid directly to Anthropic — not to VELA. Light users: $75–$100/month. Active power users running daily multi-agent operations: up to $500/month. The system is engineered to keep these costs as low as possible while delivering full capability.
          </p>
        </div>
      </section>

      <Divider />

      {/* ═══════════════════════════════════════════════════════════════════
          CLOSING CTA + REQUEST ACCESS
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="access"
        className="container fade-in"
        style={{
          paddingTop: "6rem",
          paddingBottom: "6rem",
          textAlign: "center",
          maxWidth: "680px",
        }}
      >
        <h2
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 200,
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            lineHeight: 1.2,
            color: "#E8EDE8",
            marginBottom: "1.25rem",
          }}
        >
          The question is not whether you can afford it.
        </h2>
        <p
          className="vela-body"
          style={{ fontSize: "0.9375rem", marginBottom: "2.5rem", maxWidth: "520px", margin: "0 auto 2.5rem" }}
        >
          It is whether you can afford to keep running without it. One deal closed faster. One crisis caught before it became a crisis. One week of operating at full altitude instead of managing the machine. The math is not complicated.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          <a
            href="mailto:greg@gregshindler.com?subject=I%20want%20VELA%20Now!&body=Referred%20by%3A%20"
            className="vela-cta"
            style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}
          >
            Request Access
          </a>

          <PdfDropdown
            label="Download the One-Pager PDF"
            color="#E8EDE8"
            hoverColor="#C4A882"
          />

          <p
            className="vela-label"
            style={{ color: "#E8EDE8", marginTop: "0.5rem" }}
          >
            PRIVATE ACCESS · BY INTRODUCTION ONLY · ONE CONVERSATION · NO PITCH · NO PRESSURE
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════════ */}
      <footer
        style={{
          borderTop: "1px solid #7C9E8A",
          backgroundColor: "#0A0F0D",
        }}
      >
        <div
          className="container"
          style={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <NavigationReticle size={20} />
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.6875rem",
                fontWeight: 400,
                letterSpacing: "0.2em",
                color: "#E8EDE8",
              }}
            >
              VELA · PRIVATE COMMAND INFRASTRUCTURE
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <PdfDropdown
              label="One-Pager PDF"
              fontSize="0.625rem"
              color="#E8EDE8"
              hoverColor="#C4A882"
              iconSize={{ w: 8, h: 10 }}
            />
            <span
              className="vela-label"
              style={{ color: "#E8EDE8" }}
            >
              ·
            </span>
            <span
              className="vela-label"
              style={{ color: "#E8EDE8" }}
            >
              EST. 2024 · CONFIDENTIAL
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
