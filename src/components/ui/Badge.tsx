import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent" | "status";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "border-border bg-surface text-foreground-muted",
  accent: "border-primary/40 bg-primary-soft text-primary-hover",
  status: "border-border-strong bg-surface-elevated text-foreground",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2.5 py-1 text-xs font-medium leading-none",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
