import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";
import { processSteps } from "@/data/processSteps";
import { manufacturingReel } from "@/data/manufacturingReel";
import { ProcessReel } from "./ProcessReel";
import styles from "./ManufacturingProcess.module.css";

export function ManufacturingProcess() {
  return (
    <section className="section section-paper" id="process">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Manufacturing Process"
            heading="From first inquiry to final handover, in six stages"
            description="A structured sequence that gives clarity, speed, quality and execution control at every stage — the actual order in which a project moves through our floor and onto your site."
          />
        </Reveal>

        <Reveal className={styles.list}>
          {processSteps.map((step) => (
            <div key={step.step} className={styles.item}>
              <div className={styles.dot}>{step.step}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <ProcessReel frames={manufacturingReel} />
        </Reveal>
      </Container>
    </section>
  );
}
