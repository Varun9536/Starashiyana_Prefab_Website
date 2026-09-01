import { siteConfig } from "@/config/site";
import { buildCardUrl, generateQrPng, generateQrSvg } from "@/lib/qr";

/**
 * Renders a scannable QR image pointing at the permanent /connect URL.
 * Shown inline by default (so opening it in a phone browser lets you
 * long-press → Save Image, like any photo) — add &download=1 for a proper
 * file download instead (useful when handing the PNG/SVG to a printer).
 */
export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const url = buildCardUrl(siteConfig.url);
  const isSvg = params.get("format") === "svg";
  const download = params.get("download") === "1";

  const disposition: Record<string, string> = download
    ? { "Content-Disposition": `attachment; filename="connect-qr.${isSvg ? "svg" : "png"}"` }
    : {};

  if (isSvg) {
    const svg = await generateQrSvg(url);
    return new Response(svg, {
      headers: { "Content-Type": "image/svg+xml", ...disposition },
    });
  }

  const png = await generateQrPng(url);
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png", ...disposition },
  });
}
