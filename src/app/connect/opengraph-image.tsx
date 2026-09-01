import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { connectCard as card } from "@/config/connectCard";

// This is what shows up as the link preview card when /connect is shared on
// WhatsApp, Instagram or Facebook — generated once at build time (no
// request-time data), so it costs nothing per share.
export const alt = `${card.name} — ${card.company}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "src/assets/images/logo.png"), "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f1e8",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og renders via Satori, not the DOM */}
        <img src={logoSrc} height={110} style={{ marginBottom: 36 }} alt="" />
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: 2,
            color: "#45484b",
            textTransform: "uppercase",
          }}
        >
          {card.name}
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 6,
            color: "#576447",
            textTransform: "uppercase",
          }}
        >
          {card.designation}
        </div>
        <div
          style={{
            marginTop: 10,
            fontSize: 22,
            letterSpacing: 4,
            color: "#74776f",
            textTransform: "uppercase",
          }}
        >
          {card.company}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 14,
            background: "#576447",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
