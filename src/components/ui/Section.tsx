import type { ComponentPropsWithoutRef } from "react";

import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  contained?: boolean;
};

export function Section({
  children,
  className,
  contained = true,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-20 lg:py-24", className)} {...props}>
      {contained ? <PageContainer>{children}</PageContainer> : children}
    </section>
  );
}
