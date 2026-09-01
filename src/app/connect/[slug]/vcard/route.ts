import { notFound } from "next/navigation";
import { getConnectCard } from "@/config/connectCard";
import { buildVCard, vCardFileName } from "@/lib/vcard";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = getConnectCard(slug);

  if (!card) notFound();

  return new Response(buildVCard(card), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${vCardFileName(card)}"`,
      "Cache-Control": "no-store",
    },
  });
}
