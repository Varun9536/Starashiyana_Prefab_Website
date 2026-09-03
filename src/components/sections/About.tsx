import Image from "next/image";
import aboutFactory from "@/assets/images/about/about_factory.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";
import styles from "./About.module.css";

export function About() {
  return (
    <section className="section section-cream" id="about">
      <Container>
        <div className={styles.grid}>
          <Reveal>
            <span className="eyebrow">About the Company</span>
            <h2 className={`section-head ${styles.heading}`}>
              A new-age PEB specialist, built on decades of site experience
            </h2>
            <div className={styles.copy}>
              <p>
                Starashiyana Prefab is a new-age company focused exclusively on Pre-Engineered Steel Buildings for
                industrial, warehouse and commercial projects across India. The firm is promoted by Harish Kumar
                Premi, together with the next generation, Tushar Premi and Tanishq Premi — a combination of decades
                of on-ground construction experience and modern, professional management.
              </p>
              <p>
                Before founding Starashiyana Prefab, our promoters were closely involved with{" "}
                <a href={siteConfig.parentCompany.url} target="_blank" rel="noopener noreferrer">
                  {siteConfig.parentCompany.name}
                </a>
                , a respected Delhi-based construction firm known for industrial, commercial, hotel, mall and
                residential projects. That practical, on-site learning now flows into Starashiyana Prefab — as a
                specialist PEB-focused venture within the same group.
              </p>
              <p>
                We design, detail, fabricate and erect steel buildings that are faster to build, easier to expand and
                more predictable in performance, while staying grounded in the realities of Indian sites and client
                expectations.
              </p>
            </div>
            <div className={styles.founderLine}>
              {siteConfig.founders.map((founder) => (
                <div key={founder.name} className={styles.founderName}>
                  {founder.name}
                  <span className={styles.founderRole}>{founder.role}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className={styles.visual}>
            <Image
              src={aboutFactory}
              alt=""
              fill
              className={styles.visualImage}
              quality={65}
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <div className={styles.badge}>
              <div className={styles.badgeNum}>Pan-India</div>
              <div className={styles.badgeLabel}>
                Execution across industrial, warehouse, commercial and institutional projects
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
