import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getConnectCard } from "@/config/connectCard";
import { buildCardUrl, generateQrPng, generateQrSvg } from "@/lib/qr";

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = getConnectCard(slug);

  if (!card) notFound();

  const searchParams = new URL(request.url).searchParams;
  const url = buildCardUrl(siteConfig.url, card.slug);
  const isSvg = searchParams.get("format") === "svg";
  const download = searchParams.get("download") === "1";

  const disposition: Record<string, string> = download
    ? { "Content-Disposition": `attachment; filename="${card.slug}-qr.${isSvg ? "svg" : "png"}"` }
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
