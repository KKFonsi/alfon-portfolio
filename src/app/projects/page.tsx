import type { Metadata } from "next";

import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { getCanonicalUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore web, Android, desktop, and software projects by Kevin Kyle S. Alfon, including case studies for academic and personal work.",
  ...(getCanonicalUrl("/projects")
    ? {
        alternates: {
          canonical: getCanonicalUrl("/projects"),
        },
      }
    : {}),
};

function getProjectSummary() {
  const mobileCount = projects.filter(
    (project) =>
      project.category.includes("Mobile") ||
      project.category.includes("Android"),
  ).length;
  const webCount = projects.filter((project) =>
    project.category.includes("Web"),
  ).length;
  const conceptCount = projects.filter((project) =>
    project.category.includes("Concept") ||
    project.category.includes("Community"),
  ).length;

  return [
    `${projects.length} projects`,
    `${mobileCount} mobile applications`,
    `${webCount} web applications`,
    `${conceptCount} design concept`,
  ];
}

export default function ProjectsPage() {
  const summary = getProjectSummary();

  return (
    <>
      <section className="border-b border-border bg-background py-16 sm:py-20 lg:py-24">
        <PageContainer>
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Selected Work
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
              Projects
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-muted sm:text-xl">
              A collection of web, mobile, and system-design projects that
              demonstrate my development process, technical skills, and approach
              to solving practical problems.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {summary.map((item) => (
                <Badge key={item} variant="status">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <PageContainer>
          <ProjectsGrid projects={projects} />
        </PageContainer>
      </section>

      <section className="border-t border-border bg-surface/35 py-16 sm:py-20">
        <PageContainer>
          <div className="rounded-lg border border-border bg-background p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Want to know more about my work?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground-muted">
                  The available case studies explain the project goals,
                  features, technical decisions, and current status behind each
                  implemented portfolio route.
                </p>
              </div>
              <Button href="/about" variant="secondary">
                Learn About Me
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
