import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/layout/Container";
import { qualityItems } from "@/data/qualityItems";
import styles from "./QualityAssurance.module.css";

const BIG_WORDS = ["Accuracy", "Reliability", "Safety"];

export function QualityAssurance() {
  return (
    <section className="section section-charcoal">
      <Container>
        <Reveal>
          <SectionHeading
            dark
            eyebrow="Quality Assurance"
            heading="Strong buildings come from disciplined process"
            description="Accurate fabrication and safe site execution, checked at every stage — not inspected only at the end."
          />
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.list}>
            {qualityItems.map((item) => (
              <div key={item.title} className={styles.item}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className={styles.side}>
            <Icon name="checkCircle" size={60} />
            <div className={styles.rule} />
            {BIG_WORDS.map((word) => (
              <div key={word} className={styles.bigWord}>
                {word}
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
