import type { Metadata } from "next";

import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The requested page could not be found in Kevin Kyle S. Alfon's portfolio.",
};

export default function NotFound() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24 lg:py-32">
      <PageContainer>
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            404
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
            Page Not Found
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground-muted sm:text-xl">
            The page you are looking for may have moved, or it may not be part
            of the public portfolio.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/">Back to Home</Button>
            <Button href="/projects" variant="secondary">
              View Projects
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
