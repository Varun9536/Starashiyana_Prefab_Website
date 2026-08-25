import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";
import { machinery } from "@/data/machinery";
import styles from "./Machinery.module.css";

export function Machinery() {
  return (
    <section className="section section-paper">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Manufacturing Capabilities"
            heading="Factory infrastructure built for precision fabrication"
            description="Our production line combines CNC-driven cutting and punching with heavy fabrication equipment, so every member leaves the factory dimensionally accurate and ready for fast site assembly."
          />
        </Reveal>
        <Reveal className={styles.grid}>
          {machinery.map((machine) => (
            <div key={machine.name} className={styles.card}>
              <div className={styles.thumb}>
                <Image
                  src={machine.image}
                  alt={machine.alt}
                  fill
                  className={styles.thumbImage}
                  sizes="(max-width: 980px) 50vw, 25vw"
                />
              </div>
              <h5>{machine.name}</h5>
              <span className={styles.category}>{machine.category}</span>
              <p className={styles.info}>{machine.info}</p>
              <div className={styles.role}>{machine.role}</div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
