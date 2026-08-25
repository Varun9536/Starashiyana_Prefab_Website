export type IconName =
  | "industrial"
  | "warehouse"
  | "coldStorage"
  | "commercial"
  | "institutional"
  | "expansion"
  | "recycle"
  | "lowerLoad"
  | "cleanSite"
  | "safety"
  | "checkCircle";

type IconDef = {
  viewBox: string;
  strokeWidth: number;
  fill: string;
  children: React.ReactNode;
};

const ICONS: Record<IconName, IconDef> = {
  industrial: {
    viewBox: "0 0 24 24",
    strokeWidth: 1.6,
    fill: "none",
    children: <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />,
  },
  warehouse: {
    viewBox: "0 0 24 24",
    strokeWidth: 1.6,
    fill: "none",
    children: <path d="M3 3h18v18H3zM3 9h18M9 21V9" />,
  },
  coldStorage: {
    viewBox: "0 0 24 24",
    strokeWidth: 1.6,
    fill: "none",
    children: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </>
    ),
  },
  commercial: {
    viewBox: "0 0 24 24",
    strokeWidth: 1.6,
    fill: "none",
    children: <path d="M3 21V9l9-6 9 6v12M9 21v-8h6v8" />,
  },
  institutional: {
    viewBox: "0 0 24 24",
    strokeWidth: 1.6,
    fill: "none",
    children: <path d="M4 21V7a2 2 0 012-2h5v16M15 21V11h5v10" />,
  },
  expansion: {
    viewBox: "0 0 24 24",
    strokeWidth: 1.6,
    fill: "none",
    children: <path d="M12 2l3 6 6 1-4.5 4.5L17.5 20 12 17l-5.5 3 1-6.5L3 9l6-1z" />,
  },
  recycle: {
    viewBox: "0 0 24 24",
    strokeWidth: 1.8,
    fill: "none",
    children: <path d="M12 2v20M2 12h20" />,
  },
  lowerLoad: {
    viewBox: "0 0 24 24",
    strokeWidth: 1.8,
    fill: "none",
    children: <path d="M4 12l6 6L20 6" />,
  },
  cleanSite: {
    viewBox: "0 0 24 24",
    strokeWidth: 1.8,
    fill: "none",
    children: <rect x="4" y="4" width="16" height="16" />,
  },
  safety: {
    viewBox: "0 0 24 24",
    strokeWidth: 1.8,
    fill: "none",
    children: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l4 2" />
      </>
    ),
  },
  checkCircle: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    fill: "none",
    children: <path d="M5 12l5 5L20 7" />,
  },
};

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
};

/**
 * Renders one of the site's inline SVG icons. Stroke uses `currentColor`, so
 * color is controlled by the surrounding element's CSS `color` token —
 * matching the original design's per-context icon colors without hardcoding
 * hex values inside markup.
 */
export function Icon({ name, size = 24, className, "aria-hidden": ariaHidden = true }: IconProps) {
  const def = ICONS[name];
  return (
    <svg
      width={size}
      height={size}
      viewBox={def.viewBox}
      fill={def.fill}
      stroke="currentColor"
      strokeWidth={def.strokeWidth}
      className={className}
      aria-hidden={ariaHidden}
    >
      {def.children}
    </svg>
  );
}
