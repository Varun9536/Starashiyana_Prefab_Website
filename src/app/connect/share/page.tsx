import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { connectCard as card } from "@/config/connectCard";
import { buildCardUrl } from "@/lib/qr";
import { ShareButton, CopyableValue } from "../CardInteractive";
import styles from "../card.module.css";

export const metadata: Metadata = {
  title: "Share Digital Card",
  robots: { index: false, follow: false },
};

export default function ShareCardPage() {
  const publicUrl = buildCardUrl(siteConfig.url);

  return (
    <div className={styles.outer}>
      <main className={styles.page}>
        <div className={styles.top}>
          <h1 className={styles.name}>Share This Card</h1>
          <div className={styles.company} style={{ marginTop: 8 }}>
            {card.name} &middot; {card.company}
          </div>
        </div>

        <div className={styles.qrWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element -- generated at request time by /connect/qr, not a static asset */}
          <img src="/connect/qr" alt="QR code that opens the digital business card" className={styles.qrImg} />
        </div>
        <div className={styles.note} style={{ marginTop: 14 }}>
          On a phone: press and hold the QR code above, then save it to your gallery — from there you can share it
          like any photo, or send it to a printer.
        </div>

        <div className={styles.actions}>
          <a
            href="/connect/qr?download=1"
            download
            className={`${styles.btn} ${styles.btnGold}`}
          >
            DOWNLOAD PNG
          </a>
          <a
            href="/connect/qr?format=svg&download=1"
            download
            className={styles.btn}
          >
            DOWNLOAD SVG
          </a>
        </div>

        <div className={styles.rule} />

        <div className={styles.item}>
          <div className={styles.label}>Shareable Link</div>
          <div className={styles.value}>
            <CopyableValue value={publicUrl}>
              <a href="/connect">{publicUrl.replace(/^https?:\/\//, "")}</a>
            </CopyableValue>
          </div>
        </div>

        <div className={styles.actions}>
          <a href="/connect" className={`${styles.btn} ${styles.btnGold}`}>
            OPEN CARD
          </a>
          <ShareButton url={publicUrl} className={styles.btn} />
        </div>

        <div className={styles.note}>
          Paste this link directly into WhatsApp, Instagram or Facebook, or scan/share the QR code — both always
          show your latest details.
        </div>
      </main>
    </div>
  );
}
