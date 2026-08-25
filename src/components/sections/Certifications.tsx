import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Container } from "@/components/layout/Container";
import { certificationTags } from "@/data/specTable";

export function Certifications() {
  return (
    <section className="section section-cream">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Certifications"
            heading="Engineered to recognised design and material standards"
            description="Our design, fabrication and coating practices are aligned with the codes and standards commonly required for PEB projects across India."
          />
        </Reveal>
        <Reveal className="tag-row">
          {certificationTags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
