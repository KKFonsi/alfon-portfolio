import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition duration-150 hover:-translate-y-0.5 hover:border-border-strong">
      <div className="border-b border-border bg-background p-4">
        <ProjectVisual project={project} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          <Badge variant="accent">{project.category}</Badge>
          <Badge variant="status">{project.status}</Badge>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-foreground">
          {project.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-foreground-muted">
          {project.shortDescription}
        </p>
        <p className="mt-3 flex-1 text-sm leading-6 text-foreground-subtle">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
        {project.caseStudy && project.href ? (
          <div className="mt-6">
            <Link
              href={project.href}
              className="inline-flex min-h-10 items-center justify-center rounded-sm border border-primary bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-primary-hover hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              View Case Study
            </Link>
          </div>
        ) : (
          <div className="mt-6">
            <span className="inline-flex min-h-10 items-center justify-center rounded-sm border border-border-strong bg-background px-4 py-2 text-sm font-semibold text-foreground-subtle">
              Case study coming soon
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
