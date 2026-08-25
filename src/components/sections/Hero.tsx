import Image from "next/image";
import factoryGalleryHero from "@/assets/images/hero/factory_gallery_hero.jpg";
import factoryBgClean from "@/assets/images/hero/factory_bg_clean2.jpg";
import { Button } from "@/components/ui/Button";
import { heroStats } from "@/data/heroStats";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.frameBg} aria-hidden="true">
        <Image
          src={factoryGalleryHero}
          alt="Interior of a PEB steel fabrication factory with EOT cranes and fabrication bays"
          fill
          className={styles.frameBgImage}
          priority
          sizes="(max-width: 980px) 100vw, 72vw"
        />
      </div>

      <div className={styles.factoryHero} aria-hidden="true">
        <div className={styles.factoryHeroPhoto}>
          <Image
            src={factoryBgClean}
            alt=""
            fill
            className={styles.factoryHeroPhotoImage}
            sizes="(max-width: 980px) 100vw, 68vw"
          />
        </div>
        {/* Realism rule: no drawn cranes, trucks, hooks or fake structural lines over
            photography — motion comes only from camera drift and a light sweep accent. */}
        <div className={styles.factoryMotion}>
          <div className={styles.factoryLight} />
        </div>
        <div className={styles.factoryLive}>
          <span className={styles.factoryLiveDot} />
          <span>Live fabrication environment · Dharuhera plant</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>
          <span className="eyebrow">Pre-Engineered Steel Buildings · India</span>
          <h1 className={styles.heading}>
            Built on experience.
            <br />
            <em className={styles.headingAccent}>Framed in steel.</em>
          </h1>
          <p className={styles.lead}>
            Starashiyana Prefab LLP designs, fabricates and erects Pre-Engineered Buildings for industrial, warehouse
            and commercial projects — led by a team that has spent decades on real construction sites, not just
            design desks.
          </p>
          <div className={styles.actions}>
            <Button href="#contact" variant="primary">
              Request a Quote
            </Button>
            <Button href="#profile" variant="outline-light">
              Download Company Profile
            </Button>
          </div>
          <div className={styles.stats}>
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className={styles.statNum}>
                  {stat.highlightFirst ? <span>{stat.highlighted}</span> : stat.plain}
                  {stat.spaced ? " " : ""}
                  {stat.highlightFirst ? stat.plain : <span>{stat.highlighted}</span>}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
