import { notFound } from "next/navigation";
import { getConnectCard, getConnectCardSlugs } from "@/config/connectCard";
import { ConnectCardPage, connectCardMetadata } from "../ConnectCardPage";

export function generateStaticParams() {
  return getConnectCardSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = getConnectCard(slug);
  if (!card) return {};
  return connectCardMetadata(card);
}

export default async function ConnectSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = getConnectCard(slug);

  if (!card) notFound();

  return <ConnectCardPage card={card} />;
}
