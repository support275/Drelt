import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "DREEF — DRE Lending Toolkit";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(to right, #1A5632 0%, #3A9458 100%)",
          position: "relative",
        }}
      >
        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "48px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "#C8973A",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              fontWeight: "700",
              color: "#1A5632",
              fontFamily: "Georgia, serif",
              letterSpacing: "-0.5px",
            }}
          >
            D
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ color: "white", fontSize: "26px", fontWeight: "700", letterSpacing: "-0.3px" }}>
              DREEF
            </span>
            <span style={{ color: "#E5B86A", fontSize: "12px", fontWeight: "600", letterSpacing: "2.5px" }}>
              DRE LENDING TOOLKIT
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          <span
            style={{
              color: "white",
              fontSize: "56px",
              fontWeight: "700",
              lineHeight: "1.2",
              fontFamily: "Georgia, serif",
            }}
          >
            Distributed Renewable Energy
          </span>
          <span
            style={{
              color: "#C8973A",
              fontSize: "56px",
              fontWeight: "700",
              lineHeight: "1.2",
              fontFamily: "Georgia, serif",
            }}
          >
            Lending Toolkit
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "22px",
            lineHeight: "1.6",
            marginTop: "28px",
            maxWidth: "700px",
          }}
        >
          A comprehensive framework for standardising DRE credit assessment across InfraCredit&apos;s pipeline — from origination through financial close.
        </p>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "56px", marginTop: "48px" }}>
          {[
            { num: "4", label: "ASSESSMENT PILLARS" },
            { num: "3", label: "ISSUE CATEGORIES" },
            { num: "6", label: "LIFECYCLE STAGES" },
            { num: "6–9", label: "MONTHS AVG. TIMELINE" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ color: "#E5B86A", fontSize: "30px", fontWeight: "700", fontFamily: "Georgia, serif" }}>
                {s.num}
              </span>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", fontWeight: "600", letterSpacing: "1.5px" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
