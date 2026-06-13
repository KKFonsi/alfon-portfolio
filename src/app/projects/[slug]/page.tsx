import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import {
  caseStudyProjects,
  getCaseStudyProjectBySlug,
} from "@/lib/projects";
import { getCanonicalUrl } from "@/lib/site-url";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    ...(getCanonicalUrl(`/projects/${project.slug}`)
      ? {
          alternates: {
            canonical: getCanonicalUrl(`/projects/${project.slug}`),
          },
        }
      : {}),
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getCaseStudyProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
