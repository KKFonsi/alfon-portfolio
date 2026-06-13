import Link from "next/link";

import { PageContainer } from "@/components/layout/PageContainer";
import { siteConfig } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <PageContainer className="flex flex-col gap-4 py-8 text-sm text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-foreground">
            {currentYear} {siteConfig.name}
          </p>
          <p className="mt-1">Building practical web and mobile applications.</p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link
            href="/#contact"
            className="w-fit rounded-sm font-medium text-foreground-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Contact
          </Link>
          <a
            href={siteConfig.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-sm font-medium text-foreground-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            GitHub
          </a>
        </div>
      </PageContainer>
    </footer>
  );
}
