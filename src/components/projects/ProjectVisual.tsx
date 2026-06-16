import Image from "next/image";

import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectVisualProps = {
  project: Project;
  className?: string;
};

function getInitials(title: string) {
  return title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);
}

function getVisualMode(category: string) {
  if (category.includes("Mobile") || category.includes("Android")) {
    return "mobile";
  }

  if (category.includes("Concept") || category.includes("Community")) {
    return "concept";
  }

  return "web";
}

export function ProjectVisual({ project, className }: ProjectVisualProps) {
  const mode = getVisualMode(project.category);
  const coverImage = project.coverImage;

  if (coverImage?.src && coverImage.width && coverImage.height) {
    return (
      <div
        className={cn(
          "relative aspect-[16/9] overflow-hidden rounded-md border border-border bg-background",
          className,
        )}
      >
        <Image
          src={coverImage.src}
          alt={coverImage.alt}
          width={coverImage.width}
          height={coverImage.height}
          className="h-full w-full object-contain"
          sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-sm border border-white/20 bg-black/45 px-3 py-2 text-sm font-semibold text-white backdrop-blur">
          {coverImage.placeholderLabel}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-[16/9] overflow-hidden rounded-md border border-border bg-background p-4",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute right-4 top-4 font-mono text-xs uppercase tracking-[0.18em] text-primary">
        {project.category}
      </div>

      {mode === "mobile" ? (
        <div className="mx-auto flex h-full max-w-[9rem] flex-col rounded-lg border border-border-strong bg-surface-elevated p-3">
          <div className="mx-auto h-1 w-10 rounded-sm bg-border-strong" />
          <div className="mt-4 flex flex-1 flex-col gap-2">
            <div className="h-10 rounded-sm bg-primary-soft" />
            <div className="h-2 rounded-sm bg-border-strong" />
            <div className="h-2 w-2/3 rounded-sm bg-border" />
            <div className="mt-auto grid grid-cols-3 gap-1.5">
              <div className="h-7 rounded-sm bg-border" />
              <div className="h-7 rounded-sm bg-primary" />
              <div className="h-7 rounded-sm bg-border" />
            </div>
          </div>
        </div>
      ) : null}

      {mode === "web" ? (
        <div className="flex h-full flex-col rounded-md border border-border-strong bg-surface-elevated">
          <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-error" />
            <span className="h-2 w-2 rounded-full bg-warning" />
            <span className="h-2 w-2 rounded-full bg-success" />
          </div>
          <div className="grid flex-1 grid-cols-[0.8fr_1.2fr] gap-3 p-3">
            <div className="rounded-sm bg-primary-soft" />
            <div className="space-y-2">
              <div className="h-2 rounded-sm bg-primary" />
              <div className="h-2 rounded-sm bg-border-strong" />
              <div className="h-2 w-2/3 rounded-sm bg-border" />
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-10 rounded-sm bg-background" />
                <div className="h-10 rounded-sm bg-background" />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {mode === "concept" ? (
        <div className="grid h-full grid-cols-3 gap-3">
          <div className="rounded-sm border border-border-strong bg-surface-elevated p-3">
            <div className="h-2 rounded-sm bg-primary" />
            <div className="mt-3 h-10 rounded-sm bg-primary-soft" />
          </div>
          <div className="rounded-sm border border-border-strong bg-surface-elevated p-3">
            <div className="h-2 rounded-sm bg-border-strong" />
            <div className="mt-3 h-10 rounded-sm bg-background" />
          </div>
          <div className="rounded-sm border border-border-strong bg-surface-elevated p-3">
            <div className="h-2 rounded-sm bg-border" />
            <div className="mt-3 h-10 rounded-sm bg-primary-soft" />
          </div>
        </div>
      ) : null}

      <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-md border border-primary/40 bg-primary-soft text-xl font-semibold text-primary-hover">
        {getInitials(project.title)}
      </div>
    </div>
  );
}
