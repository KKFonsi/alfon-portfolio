"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectFilter = {
  label: string;
  value: string;
};

const filters: ProjectFilter[] = [
  { label: "All", value: "all" },
  { label: "Mobile Applications", value: "mobile" },
  { label: "Web Applications", value: "web" },
  { label: "Design and Concepts", value: "concept" },
];

type ProjectsGridProps = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => {
      if (activeFilter === "mobile") {
        return (
          project.category.includes("Mobile") ||
          project.category.includes("Android")
        );
      }

      if (activeFilter === "web") {
        return project.category.includes("Web");
      }

      return (
        project.category.includes("Concept") ||
        project.category.includes("Community")
      );
    });
  }, [activeFilter, projects]);

  return (
    <div className="mt-10">
      <div
        className="flex flex-wrap gap-2"
        aria-label="Filter projects by category"
        role="group"
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "rounded-sm border px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-surface text-foreground-muted hover:border-border-strong hover:text-foreground",
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-foreground-subtle" aria-live="polite">
        Showing {filteredProjects.length} of {projects.length} projects.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
