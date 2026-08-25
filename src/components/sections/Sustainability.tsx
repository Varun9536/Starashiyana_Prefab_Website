import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/layout/Container";
import { sustainabilityItems } from "@/data/sustainability";
import styles from "./Sustainability.module.css";

export function Sustainability() {
  return (
    <section className="section section-paper">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Sustainability & Safety"
            heading="Steel that performs — for the client and the planet"
            description="Pre-engineered steel construction inherently reduces waste and lifecycle impact compared to conventional builds; we design to extend that advantage further."
          />
        </Reveal>
      </Container>
      <Reveal className={styles.grid}>
        {sustainabilityItems.map((item) => (
          <div key={item.title} className={styles.card}>
            <div className={styles.icon}>
              <Icon name={item.icon} size={30} />
            </div>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
