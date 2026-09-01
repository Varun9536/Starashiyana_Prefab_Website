import { connectCard } from "@/config/connectCard";
import { buildVCard, vCardFileName } from "@/lib/vcard";

export async function GET() {
  return new Response(buildVCard(connectCard), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${vCardFileName(connectCard)}"`,
      "Cache-Control": "no-store",
    },
  });
}
