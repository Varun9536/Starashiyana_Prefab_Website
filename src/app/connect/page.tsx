import type { Metadata } from "next";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { siteConfig } from "@/config/site";
import { connectCard as card } from "@/config/connectCard";
import { buildCardUrl } from "@/lib/qr";
import { TrackedLink, ShareButton, CopyableValue } from "./CardInteractive";
import styles from "./card.module.css";

const title = `${card.name} | ${card.company}`;
const description = [card.designation, card.company].filter(Boolean).join(" — ");

export const metadata: Metadata = {
  // `title.absolute` bypasses the root layout's "%s | Starashiyana Prefab
  // LLP" template — `title` already includes the company name.
  title: { absolute: title },
  description,
  // Unlisted by design — reachable only via the printed QR code, never
  // linked from the main site or indexed by search engines.
  robots: { index: false, follow: false },
  // images intentionally omitted — the opengraph-image.tsx file in this
  // segment generates a purpose-built share preview automatically.
  openGraph: { title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function ConnectPage() {
  const whatsappDigits = card.whatsappPhone.replace(/[^\d]/g, "");
  const publicUrl = buildCardUrl(siteConfig.url);

  const socialLinks = [
    { label: "Instagram", href: card.instagramUrl },
    { label: "LinkedIn", href: card.linkedinUrl },
    { label: "Facebook", href: card.facebookUrl },
    { label: "Twitter", href: card.twitterUrl },
  ].filter((link) => link.href);

  return (
    <div className={styles.outer}>
      <main className={styles.page}>
        <div className={styles.top}>
          <div className={styles.logoWrap}>
            <Image src={logo} alt={`${card.company} logo`} className={styles.logo} priority />
          </div>
          <h1 className={styles.name}>{card.name}</h1>
          {card.designation && <div className={styles.role}>{card.designation}</div>}
          {card.company && <div className={styles.company}>{card.company}</div>}
        </div>

        <div className={styles.rule} />

        {card.phone && (
          <div className={styles.item}>
            <div className={styles.label}>Phone Number</div>
            <div className={styles.value}>
              <CopyableValue value={card.phone}>
                <a href={`tel:${card.phone}`}>{card.phone.replace(/^\+91/, "")}</a>
              </CopyableValue>
            </div>
          </div>
        )}

        {card.email && (
          <div className={styles.item}>
            <div className={styles.label}>Email Address</div>
            <div className={styles.value}>
              <CopyableValue value={card.email}>
                <a href={`mailto:${card.email}`}>{card.email}</a>
              </CopyableValue>
            </div>
            {card.emailSecondary && (
              <div className={styles.value} style={{ marginTop: 8 }}>
                <CopyableValue value={card.emailSecondary}>
                  <a href={`mailto:${card.emailSecondary}`}>{card.emailSecondary}</a>
                </CopyableValue>
              </div>
            )}
          </div>
        )}

        {card.website && (
          <div className={styles.item}>
            <div className={styles.label}>Website</div>
            <div className={styles.value}>
              <a href={card.website} target="_blank" rel="noopener noreferrer">
                {card.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </a>
            </div>
          </div>
        )}

        {card.factoryAddress && (
          <div className={styles.item}>
            <div className={styles.label}>Factory Location</div>
            <div className={styles.value}>
              {card.factoryMapUrl ? (
                <a href={card.factoryMapUrl} target="_blank" rel="noopener noreferrer">
                  {card.factoryAddress}
                </a>
              ) : (
                card.factoryAddress
              )}
            </div>
          </div>
        )}

        <div className={styles.actions}>
          {card.phone && (
            <TrackedLink href={`tel:${card.phone}`} method="call" className={`${styles.btn} ${styles.btnGold}`}>
              CALL
            </TrackedLink>
          )}
          {whatsappDigits && (
            <TrackedLink href={`https://wa.me/${whatsappDigits}`} method="whatsapp" className={styles.btn}>
              WHATSAPP
            </TrackedLink>
          )}
          {card.email && (
            <TrackedLink href={`mailto:${card.email}`} method="email" className={styles.btn}>
              EMAIL
            </TrackedLink>
          )}
          {card.factoryMapUrl && (
            <TrackedLink href={card.factoryMapUrl} method="map" className={styles.btn}>
              MAP
            </TrackedLink>
          )}
        </div>

        {socialLinks.length > 0 && (
          <div className={styles.social}>
            <div className={styles.socialTitle}>Social Media</div>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className={styles.actions}>
          <TrackedLink
            href="/connect/vcard"
            method="save_contact"
            className={`${styles.btn} ${styles.btnGold}`}
            download={`${card.name.replace(/\s+/g, "-")}.vcf`}
          >
            SAVE CONTACT
          </TrackedLink>
          <ShareButton url={publicUrl} className={styles.btn} />
        </div>
        <div className={styles.note}>
          Tap SAVE CONTACT. Your phone will download {card.name}&apos;s contact card. Open it and tap Add to
          Contacts.
        </div>

        <div className={styles.footer}>
          <b>{card.company.toUpperCase()}</b>
          <br />
          BUILT ON EXPERIENCE &middot; FRAMED IN STEEL
        </div>
      </main>
    </div>
  );
}
