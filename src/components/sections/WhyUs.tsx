import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";
import { whyUsItems } from "@/data/whyUs";
import styles from "./WhyUs.module.css";

export function WhyUs() {
  return (
    <section className="section section-paper" id="why">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Starashiyana"
            heading="Five reasons clients choose us over a general contractor"
            description="We combine real construction experience with focused PEB execution to deliver buildings that are practical, efficient and dependable — understanding not only design and fabrication, but the on-site realities that affect speed, cost and coordination."
          />
        </Reveal>
      </Container>
      <Reveal className={styles.grid}>
        {whyUsItems.map((item) => (
          <div key={item.number} className={styles.card}>
            <div className={styles.number}>{item.number}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
