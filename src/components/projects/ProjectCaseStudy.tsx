import Link from "next/link";
import type { ReactNode } from "react";

import { PageContainer } from "@/components/layout/PageContainer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ChallengeCard } from "@/components/projects/ChallengeCard";
import { ProjectFeatureCard } from "@/components/projects/ProjectFeatureCard";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import type { Project } from "@/types";

type ProjectCaseStudyProps = {
  project: Project;
};

function SectionBlock({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-3xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const features = project.features ?? [];
  const challenges = project.challenges ?? [];
  const links = project.links ?? [];

  return (
    <>
      <section className="border-b border-border bg-background py-16 sm:py-20 lg:py-24">
        <PageContainer>
          <Link
            href="/projects"
            className="inline-flex rounded-sm text-sm font-semibold text-foreground-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Projects / {project.title}
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="accent">{project.category}</Badge>
                <Badge variant="status">{project.status}</Badge>
              </div>
              <h1 className="mt-6 text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-muted sm:text-xl">
                {project.shortDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.slice(0, 6).map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/projects" variant="secondary">
                  Back to All Projects
                </Button>
              </div>
            </div>

            <ProjectVisual project={project} />
          </div>
        </PageContainer>
      </section>

      <PageContainer>
        <section className="grid gap-4 border-b border-border py-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Project Type", project.category],
            ["Status", project.status],
            ["My Role", project.roleSummary ?? "Design and development contribution"],
            ["Primary Platform", project.primaryPlatform ?? "Software"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-border bg-surface p-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {label}
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                {value}
              </p>
            </div>
          ))}
        </section>

        <SectionBlock eyebrow="Overview" title="Project Overview">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-lg border border-border bg-surface p-6">
              <h3 className="text-xl font-semibold text-foreground">What it is</h3>
              <p className="mt-4 text-base leading-8 text-foreground-muted">
                {project.description}
              </p>
            </article>
            <article className="rounded-lg border border-border bg-surface p-6">
              <h3 className="text-xl font-semibold text-foreground">
                Problem addressed
              </h3>
              <p className="mt-4 text-base leading-8 text-foreground-muted">
                {project.problem}
              </p>
            </article>
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="Role" title="My Contribution">
          <div className="max-w-4xl rounded-lg border border-border bg-surface p-6">
            <p className="text-base leading-8 text-foreground-muted">
              {project.role}
            </p>
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="Features" title="Main Features">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <ProjectFeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="Technology" title="Technologies Used">
          <div className="flex max-w-4xl flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="Previews" title="Visual Previews">
          <ProjectGallery project={project} />
        </SectionBlock>

        <SectionBlock eyebrow="Decisions" title="Challenges and Solutions">
          <div className="grid gap-5">
            {challenges.map((challenge) => (
              <ChallengeCard key={challenge.title} challenge={challenge} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="Status" title="Current Status">
          <div className="max-w-4xl rounded-lg border border-border bg-surface p-6">
            <Badge variant="status">{project.status}</Badge>
            <p className="mt-5 text-base leading-8 text-foreground-muted">
              {project.currentStatus}
            </p>
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="Links" title="Project Links">
          {links.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl rounded-lg border border-border bg-surface p-6">
              <p className="text-sm leading-6 text-foreground-muted">
                Public project links are not available yet.
              </p>
            </div>
          )}
        </SectionBlock>

        <section className="border-t border-border py-14 sm:py-16">
          <ProjectNavigation project={project} />
          <div className="mt-8">
            <Button href="/projects" variant="secondary">
              Back to All Projects
            </Button>
          </div>
        </section>
      </PageContainer>
    </>
  );
}
