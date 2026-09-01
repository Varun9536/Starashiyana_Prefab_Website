import type { ConnectCard } from "@/config/connectCard";

function escapeVCardText(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

/** Builds a vCard 3.0 file from the card config. */
export function buildVCard(card: ConnectCard): string {
  const [firstName, ...rest] = card.name.trim().split(/\s+/);
  const lastName = rest.join(" ");

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escapeVCardText(card.name)}`,
    `N:${escapeVCardText(lastName)};${escapeVCardText(firstName ?? card.name)};;;`,
  ];

  if (card.company) lines.push(`ORG:${escapeVCardText(card.company)}`);
  if (card.designation) lines.push(`TITLE:${escapeVCardText(card.designation)}`);
  if (card.phone) lines.push(`TEL;TYPE=CELL,VOICE:${escapeVCardText(card.phone)}`);
  if (card.email) lines.push(`EMAIL:${escapeVCardText(card.email)}`);
  if (card.website) lines.push(`URL:${escapeVCardText(card.website)}`);
  if (card.factoryAddress) lines.push(`ADR;TYPE=WORK:;;${escapeVCardText(card.factoryAddress)};;;;`);

  lines.push("END:VCARD");
  return lines.join("\r\n");
}

export function vCardFileName(card: ConnectCard): string {
  return `${card.name.trim().replace(/\s+/g, "-")}.vcf`;
}
