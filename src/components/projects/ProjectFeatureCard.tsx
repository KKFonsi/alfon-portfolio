import type { ProjectFeature } from "@/types";

type ProjectFeatureCardProps = {
  feature: ProjectFeature;
  index: number;
};

export function ProjectFeatureCard({ feature, index }: ProjectFeatureCardProps) {
  return (
    <article className="rounded-lg border border-border bg-surface p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-primary/40 bg-primary-soft font-mono text-sm font-semibold text-primary-hover">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">
        {feature.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-foreground-muted">
        {feature.description}
      </p>
    </article>
  );
}
