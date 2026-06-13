import Link from "next/link";

import { getAdjacentCaseStudyProjects } from "@/lib/projects";
import type { Project } from "@/types";

type ProjectNavigationProps = {
  project: Project;
};

export function ProjectNavigation({ project }: ProjectNavigationProps) {
  const { previous, next } = getAdjacentCaseStudyProjects(project.slug);

  return (
    <nav
      aria-label="Project case study navigation"
      className="grid gap-4 md:grid-cols-2"
    >
      {previous ? (
        <Link
          href={previous.href ?? "/projects"}
          className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-border-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Previous
          </span>
          <span className="mt-2 block text-lg font-semibold text-foreground">
            {previous.title}
          </span>
        </Link>
      ) : (
        <div className="rounded-lg border border-border bg-surface p-5 text-foreground-subtle">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em]">
            Previous
          </span>
          <span className="mt-2 block text-sm">No previous case study</span>
        </div>
      )}

      {next ? (
        <Link
          href={next.href ?? "/projects"}
          className="rounded-lg border border-border bg-surface p-5 text-left transition-colors hover:border-border-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:text-right"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Next
          </span>
          <span className="mt-2 block text-lg font-semibold text-foreground">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="rounded-lg border border-border bg-surface p-5 text-foreground-subtle md:text-right">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em]">
            Next
          </span>
          <span className="mt-2 block text-sm">No next case study</span>
        </div>
      )}
    </nav>
  );
}
