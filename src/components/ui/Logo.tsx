import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center rounded-sm text-lg font-semibold tracking-normal text-foreground transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      aria-label={`${siteConfig.shortName} portfolio home`}
    >
      <span>{siteConfig.shortName}</span>
      <span className="text-primary">.</span>
    </Link>
  );
}
