import { existsSync } from "node:fs";
import { join } from "node:path";

import Image from "next/image";

import { PageContainer } from "@/components/layout/PageContainer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

const focusItems = [
  "AI-Assisted Development",
  "Vibe Coding",
  "Android Projects",
  "Web Projects",
];

const portraitPath = "/images/kevin-portrait.webp";
const hasProcessedPortrait = existsSync(
  join(process.cwd(), "public", "images", "kevin-portrait.webp"),
);

function HeroVisual() {
  if (hasProcessedPortrait) {
    return (
      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-primary/35 bg-surface shadow-lg shadow-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(168,85,247,0.24),transparent_55%)]" />
        <Image
          src={portraitPath}
          alt="Portrait of Kevin Kyle S. Alfon"
          width={900}
          height={1100}
          priority
          className="relative h-full w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className="relative rounded-lg border border-border bg-surface p-4 shadow-lg shadow-black/20"
      aria-hidden="true"
    >
      <div className="rounded-md border border-border-strong bg-background">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-error" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning" />
          <span className="h-2.5 w-2.5 rounded-full bg-success" />
          <span className="ml-3 font-mono text-xs text-foreground-subtle">
            portfolio.tsx
          </span>
        </div>
        <div className="space-y-4 p-5">
          <div className="grid gap-3 sm:grid-cols-[0.8fr_1fr]">
            <div className="rounded-sm border border-border bg-surface-elevated p-4">
              <div className="h-2 w-16 rounded-sm bg-primary" />
              <div className="mt-4 h-2 w-full rounded-sm bg-border-strong" />
              <div className="mt-2 h-2 w-3/4 rounded-sm bg-border" />
            </div>
            <div className="rounded-sm border border-border bg-surface-elevated p-4">
              <div className="h-2 w-20 rounded-sm bg-primary-soft" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-12 rounded-sm bg-primary-soft" />
                <div className="h-12 rounded-sm bg-border" />
                <div className="h-12 rounded-sm bg-border-strong" />
              </div>
            </div>
          </div>
          <div className="rounded-sm border border-border bg-surface-elevated p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="h-2 w-24 rounded-sm bg-foreground-subtle" />
                <div className="h-2 w-36 rounded-sm bg-border-strong" />
              </div>
              <div className="h-9 w-24 rounded-sm bg-primary" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="h-2 rounded-sm bg-primary" />
            <div className="h-2 rounded-sm bg-border-strong" />
            <div className="h-2 rounded-sm bg-border-strong" />
            <div className="h-2 rounded-sm bg-primary-soft" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="overflow-hidden border-b border-border bg-background py-20 sm:py-24 lg:py-32">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-center">
          <div className="max-w-4xl">
            <Badge variant="accent">
              Preparing for internship and OJT opportunities
            </Badge>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl xl:text-6xl">
              Hi, I&apos;m {siteConfig.name}
            </h1>
            <p className="mt-5 text-2xl font-medium leading-snug text-primary-hover sm:text-3xl">
              Information Technology Student and AI-Assisted Developer
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground-muted sm:text-xl">
              I use tools such as Codex and Claude as part of a transparent
              vibe-coding workflow to turn project ideas into working web,
              Android, desktop, and software projects.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-foreground-muted">
              AI assistance helps my projects reach their current scope, while
              I still define requirements, plan features, direct implementation,
              review generated code, test behavior, debug issues, and refine the
              user experience.
            </p>
            <p className="mt-4 text-base text-foreground-subtle">
              Based in the Philippines
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/projects">View My Projects</Button>
              <Button href="/#about" variant="secondary">
                About Me
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Current focus areas">
              {focusItems.map((item) => (
                <li key={item}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <HeroVisual />
        </div>
      </PageContainer>
    </section>
  );
}
