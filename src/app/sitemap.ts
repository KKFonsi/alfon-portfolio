import type { MetadataRoute } from "next";

import { caseStudyProjects } from "@/lib/projects";
import { getAbsoluteUrl } from "@/lib/site-url";

const staticRoutes = ["/", "/about", "/projects"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...caseStudyProjects.map((project) => project.href ?? `/projects/${project.slug}`),
  ];

  return routes.map((route) => ({
    url: getAbsoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
