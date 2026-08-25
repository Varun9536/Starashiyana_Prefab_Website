import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";
import { sectors } from "@/data/sectors";
import styles from "./Sectors.module.css";

export function Sectors() {
  return (
    <section className="section section-paper">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Industries We Serve"
            heading="Sectors we can cater to"
            description="From industrial sheds to airport infrastructure — our framing systems scale across sector and span requirements."
          />
        </Reveal>
      </Container>
      <Reveal className={styles.grid}>
        {sectors.map((group) => (
          <div key={group.title} className={styles.card}>
            <h4>{group.title}</h4>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
