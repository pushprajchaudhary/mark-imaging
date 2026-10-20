import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Mark Imaging – Radiology Outsourcing Solution";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social share image, generated at build time. */
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo/mark-imaging-logo-cropped.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#07111f",
          color: "#ffffff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ display: "flex", background: "#ffffff", borderRadius: 20, padding: 14 }}>
              <img src={logoSrc} width={134} height={96} alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: 4 }}>MARK IMAGING</div>
              <div style={{ fontSize: 24, color: "#ff6b67", marginTop: 6 }}>Radiology Outsourcing Solution</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
              One partner for radiology reporting, staffing and software
            </div>
            <div style={{ fontSize: 28, color: "#b9c2cf", marginTop: 24 }}>
              24×7 CT & MRI reporting · Radiologist staffing · Second opinions · PACS, RIS, HIS
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
