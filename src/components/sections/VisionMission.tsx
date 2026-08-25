import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Container";
import styles from "./VisionMission.module.css";

export function VisionMission() {
  return (
    <section className="section section-charcoal">
      <Container>
        <h2 className="visually-hidden">Our Vision and Mission</h2>
        <div className={styles.grid}>
          <Reveal>
            <span className="eyebrow eyebrow-on-dark">Our Vision</span>
            <h3 className={styles.heading}>A trusted specialist, recognised for speed, clarity and reliability</h3>
            <div className={styles.column}>
              <p>
                To become a trusted specialist in pre-engineered steel buildings for industrial, warehouse and
                commercial projects across India, recognised for speed, clarity and reliability.
              </p>
              <p>
                To bridge the gap between design and site reality by offering steel building solutions that are
                technically sound, practically buildable and future ready.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <span className="eyebrow eyebrow-on-dark">Our Mission</span>
            <h3 className={styles.heading}>Single-point accountability, from design to handover</h3>
            <div className={styles.column}>
              <p>
                To deliver end-to-end PEB solutions — design, detailing, fabrication and erection — with
                single-point accountability, transparent communication and strict adherence to safety and quality
                standards.
              </p>
              <p>
                To use our practical construction experience to optimise every project for lower lifecycle cost,
                faster completion and easier expansion, with a culture where every team member treats the
                client&apos;s project like their own.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
