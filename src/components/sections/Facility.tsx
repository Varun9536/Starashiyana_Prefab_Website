import Image from "next/image";
import factoryGalleryHero from "@/assets/images/hero/factory_gallery_hero.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";
import styles from "./Facility.module.css";

export function Facility() {
  return (
    <section className="section section-paper">
      <Container>
        <div className={styles.grid}>
          <Reveal>
            <span className="eyebrow">Factory Infrastructure</span>
            <h2 className={styles.heading}>
              Dharuhera: our own manufacturing unit, built the way we build for clients
            </h2>
            <div className={styles.copy}>
              <p>
                Our Dharuhera facility is where design meets discipline — a factory floor supported by an engineered
                mezzanine office, laid out with the same rigour we bring to every client project: clear structural
                grid, planned circulation, and room for future expansion.
              </p>
              <p>
                It stands as a working reference for prospective clients: a PEB shell, mezzanine system and finishing
                standard they can walk through before committing to their own.
              </p>
            </div>
          </Reveal>
          <Reveal className={styles.visual}>
            <Image
              src={factoryGalleryHero}
              alt="PEB fabrication floor at the Dharuhera manufacturing facility"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
