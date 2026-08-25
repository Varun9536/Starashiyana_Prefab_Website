import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="section section-paper">
      <Container>
        <div className={styles.wrap}>
          <div>
            <div className={styles.code}>404</div>
            <h1 className={styles.title}>This page doesn&apos;t exist</h1>
            <p className={styles.text}>
              The page you&apos;re looking for may have moved. Try the homepage, or head straight to one of the
              sections below.
            </p>
            <Button href="/" variant="primary">
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
