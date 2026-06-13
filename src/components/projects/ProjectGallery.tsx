import { ProjectVisual } from "@/components/projects/ProjectVisual";
import type { Project } from "@/types";

type ProjectGalleryProps = {
  project: Project;
};

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const images = project.images ?? [];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {images.map((image) => (
        <figure
          key={image.placeholderLabel}
          className="rounded-lg border border-border bg-surface p-4"
        >
          <ProjectVisual project={project} />
          <figcaption className="mt-4">
            <p className="font-medium text-foreground">
              {image.placeholderLabel}
            </p>
            {image.caption ? (
              <p className="mt-1 text-sm leading-6 text-foreground-muted">
                {image.caption}
              </p>
            ) : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
