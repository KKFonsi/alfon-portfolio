import Image from "next/image";

import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { cn } from "@/lib/utils";
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
          {image.src && image.width && image.height ? (
            <div
              className={cn(
                "relative overflow-hidden rounded-md border border-border bg-background",
                image.width < image.height
                  ? "mx-auto aspect-[9/16] max-w-sm"
                  : "aspect-[16/9]",
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-full w-full object-contain"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          ) : (
            <ProjectVisual project={project} />
          )}
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
