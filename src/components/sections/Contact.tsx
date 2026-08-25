import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";
import { QuoteForm } from "./QuoteForm";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact">
      <div className={styles.wrap}>
        <Reveal className={styles.info}>
          <span className="eyebrow eyebrow-on-dark">Get In Touch</span>
          <h2>Tell us about your project</h2>
          <p>
            Whether it&apos;s a warehouse, factory, cold storage unit or an expansion of your existing facility —
            share a brief of your requirements and our team will prepare a concept layout and budgetary offer.
          </p>

          <div className={styles.detail}>
            <div>
              <div className={styles.detailLabel}>Email</div>
              <div className={styles.detailValue}>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </div>
            </div>
          </div>

          <div className={styles.detail}>
            <div>
              <div className={styles.detailLabel}>Phone / WhatsApp</div>
              <div className={styles.detailValue}>
                <a href={`tel:${siteConfig.contact.phoneHref}`}>{siteConfig.contact.phoneDisplay}</a>
                &nbsp;·&nbsp;
                <a href={siteConfig.contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className={styles.detail}>
            <div>
              <div className={styles.detailLabel}>Registered Office</div>
              <div className={styles.detailValue}>{siteConfig.addresses.registeredOffice}</div>
            </div>
          </div>

          <div className={styles.detail}>
            <div>
              <div className={styles.detailLabel}>Manufacturing Unit</div>
              <div className={styles.detailValue}>{siteConfig.addresses.manufacturingUnit}</div>
            </div>
          </div>

          <div className={styles.detail} id="profile">
            <div>
              <div className={styles.detailLabel}>Company Profile</div>
              <div className={styles.detailValue}>
                <a href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Request: Company Profile PDF")}`}>
                  Request the PDF by email →
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
