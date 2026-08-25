import type { NavLink } from "@/config/navigation";
import styles from "./Navbar.module.css";

export function Navbar({ links }: { links: NavLink[] }) {
  return (
    <nav aria-label="Primary">
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
