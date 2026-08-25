import Image from "next/image";
import type { ReelFrame } from "@/data/manufacturingReel";
import styles from "./ProcessReel.module.css";

/**
 * Auto-scrolling "belt" of manufacturing photos. The frame list is duplicated
 * once so the CSS marquee (`translateX(-50%)`) loops seamlessly — the content
 * itself is defined once in `data/manufacturingReel.ts`.
 */
export function ProcessReel({ frames }: { frames: ReelFrame[] }) {
  const beltFrames = [...frames, ...frames];

  return (
    <div className={styles.visual} aria-label="Animated manufacturing process visual">
      <div className={styles.title}>Inside the manufacturing flow</div>
      <div className={styles.track} aria-hidden="true">
        {beltFrames.map((frame, index) => (
          <div key={`${frame.label}-${index}`} className={styles.card}>
            <div className={styles.thumb}>
              <Image src={frame.image} alt={frame.alt} fill sizes="210px" />
            </div>
            <div className={styles.copy}>
              {frame.label}
              <span>{frame.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
