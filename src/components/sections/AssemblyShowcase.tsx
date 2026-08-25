import Image from "next/image";
import frameClean from "@/assets/images/assembly/frame_clean.jpg";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./AssemblyShowcase.module.css";

const STAGES = ["01 · Columns", "02 · Rafters", "03 · Purlins", "04 · Roof", "05 · Cladding"];

export function AssemblyShowcase() {
  return (
    <section className={styles.showcase} aria-label="PEB building assembly animation">
      <div className={styles.photo} aria-hidden="true">
        <Image src={frameClean} alt="" fill className={styles.photoImage} sizes="100vw" />
      </div>

      <div className={styles.content}>
        <Reveal className={styles.copy}>
          <span className="eyebrow eyebrow-on-dark">From Steel to Building</span>
          <h2>Watch a PEB come together.</h2>
          <p>
            The factory sequence is only half the story. On site, fabricated primary frames, secondary members,
            roofing and cladding are assembled into a complete industrial building with controlled erection and
            material handling.
          </p>
          <div className={styles.stages}>
            {STAGES.map((stage) => (
              <div key={stage} className={styles.stage}>
                {stage}
              </div>
            ))}
          </div>
        </Reveal>

        <div className={styles.frame} aria-hidden="true">
          <Image src={frameClean} alt="" fill className={styles.frameImage} sizes="(max-width: 980px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
