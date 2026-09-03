import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { siteConfig } from "@/config/site";
import { footerLinkGroups } from "@/config/navigation";
import styles from "./Footer.module.css";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div>
            <div className={styles.logoWrap}>
              <Image
                src={logo}
                alt={`${siteConfig.name} logo`}
                className={styles.logo}
                width={340}
                height={278}
              />
            </div>
            <p className={styles.blurb}>
              An independent PEB company built by engineers and project professionals who have spent years on real
              sites — not just design offices.
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h5 className={styles.heading}>{group.title}</h5>
              <ul className={styles.linkList}>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.link}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h5 className={styles.heading}>Get In Touch</h5>
            <ul className={styles.linkList}>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className={styles.link}>
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.link}>
                  Request a Quote
                </a>
              </li>
              <li>
                <a href="#faq" className={styles.link}>
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>
            © {year} {siteConfig.name}. All rights reserved.
          </div>
          <div className={`mono ${styles.bottomTagline}`}>BUILT ON EXPERIENCE · FRAMED IN STEEL</div>
        </div>
      </Container>
    </footer>
  );
}
