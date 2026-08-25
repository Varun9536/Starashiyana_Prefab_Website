import Image from "next/image";
import mezzanineReal from "@/assets/images/facility/mezzanine_real.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { Container } from "@/components/layout/Container";
import { cx } from "@/lib/utils";
import { specTable, structureTags, mezzanineTags } from "@/data/specTable";
import { framingSystems } from "@/data/framingSystems";
import styles from "./PebStructure.module.css";

export function PebStructure() {
  return (
    <section className="section section-cream" id="structure">
      <Container>
        <div className={styles.overviewGrid}>
          <Reveal>
            <span className="eyebrow">Technology & Engineering</span>
            <h2 className={styles.overviewHeading}>
              Engineered members, purpose-built for every part of the frame
            </h2>
            <div className={styles.overviewCopy}>
              <p>
                Every PEB structure combines hot-rolled primary members (tapered I-sections, built-up box sections)
                with cold-formed secondary members (Z-purlins, C-sections, cee purlins, eave struts), tied together
                with rod and cable bracing, sag arrestors and flange braces.
              </p>
              <p>
                Roof and wall cladding, insulation, ventilation and daylighting systems are specified to match load,
                climate and usage — from PUF/PIR insulation to turbo ventilators and polycarbonate skylights.
              </p>
            </div>
            <div className={cx("tag-row", styles.tagsWrap)}>
              {structureTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <table className={styles.specTable}>
              <tbody>
                {specTable.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>

        <div className={styles.framingBlock}>
          <h3>Standard Framing Systems</h3>
          <p>We engineer to the framing geometry that fits your span, clearance and load — not a one-size template.</p>
          <Reveal className={styles.framingGrid}>
            {framingSystems.map((frame) => (
              <div key={frame.name} className={styles.framingCard}>
                <div className={styles.framingImage}>
                  <Image src={frame.image} alt={frame.alt} fill sizes="(max-width: 900px) 50vw, 33vw" />
                </div>
                <h5>{frame.name}</h5>
                <span className={styles.framingMaxWidth}>{frame.maxWidth}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <div className={styles.mezzanineBlock}>
          <Reveal>
            <h3>Mezzanine Systems</h3>
            <p>
              Mezzanine floors add usable area within an existing PEB envelope — engineered with intermediate support
              columns, staircases, walkways, and handrails to meet safety code while keeping the shop floor clear
              below.
            </p>
            <div className="tag-row">
              {mezzanineTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Reveal>
          <Reveal className={styles.mezzanineVisual}>
            <Image
              src={mezzanineReal}
              alt="Realistic PEB factory interior with steel mezzanine, stairs, guardrails and columns"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
