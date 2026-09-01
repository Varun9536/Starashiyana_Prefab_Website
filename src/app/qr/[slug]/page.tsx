import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getConnectCard, getConnectCardSlugs } from "@/config/connectCard";
import { ShareCardPage } from "../../connect/ShareCardPage";

export const metadata: Metadata = {
  title: "QR Code",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return getConnectCardSlugs().map((slug) => ({ slug }));
}

export default async function QrSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = getConnectCard(slug);

  if (!card) notFound();

  return <ShareCardPage card={card} qrImagePath={`/qr/${card.slug}/image`} />;
}
