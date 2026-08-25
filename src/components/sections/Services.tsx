import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/layout/Container";
import { services } from "@/data/services";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section className="section section-cream" id="services">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Products & Services"
            heading="Complete PEB solutions, for companies and independent owners"
            description="Whether you're a developer executing a large industrial package or a business owner building your first factory shed, we scope the work to fit — while carrying full responsibility for the steel building."
          />
        </Reveal>
      </Container>
      <Reveal className={styles.grid}>
        {services.map((service) => (
          <div key={service.title} className={styles.card}>
            <div className={styles.icon}>
              <Icon name={service.icon} size={34} />
            </div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
