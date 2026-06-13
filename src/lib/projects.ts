import { projects } from "@/data/projects";

export const caseStudyProjects = projects.filter((project) => project.caseStudy);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getCaseStudyProjectBySlug(slug: string) {
  return caseStudyProjects.find((project) => project.slug === slug);
}

export function getAdjacentCaseStudyProjects(slug: string) {
  const currentIndex = caseStudyProjects.findIndex(
    (project) => project.slug === slug,
  );

  return {
    previous: currentIndex > 0 ? caseStudyProjects[currentIndex - 1] : null,
    next:
      currentIndex >= 0 && currentIndex < caseStudyProjects.length - 1
        ? caseStudyProjects[currentIndex + 1]
        : null,
  };
}
