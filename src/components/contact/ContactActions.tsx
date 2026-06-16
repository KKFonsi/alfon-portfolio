import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { getAbsoluteUrl } from "@/lib/site-url";
import { cn } from "@/lib/utils";

type ContactActionsProps = {
  className?: string;
};

const disabledButtonClasses =
  "inline-flex min-h-11 items-center justify-center rounded-sm border border-border-strong bg-surface px-5 py-2.5 text-sm font-semibold text-foreground-subtle disabled:cursor-not-allowed disabled:opacity-70";

export function ContactActions({ className }: ContactActionsProps) {
  const { contact } = siteConfig;
  const mailHref = contact.email ? `mailto:${contact.email}` : null;
  const resumeHref = contact.resumeAvailable ? contact.resumePath : null;
  const resumePreviewHref = resumeHref
    ? `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
        getAbsoluteUrl(resumeHref),
      )}`
    : null;

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row lg:flex-col", className)}>
      {mailHref ? (
        <Button href={mailHref} aria-label="Email Kevin Kyle S. Alfon">
          Email Me
        </Button>
      ) : (
        <button
          type="button"
          disabled
          className={disabledButtonClasses}
          aria-label="Email address not yet available"
        >
          Email Unavailable
        </button>
      )}

      <Button
        href={contact.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        aria-label="Open Kevin Kyle S. Alfon's GitHub profile in a new tab"
      >
        GitHub Profile (External)
      </Button>

      <Button
        href={contact.linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        aria-label="Open Kevin Kyle S. Alfon's LinkedIn profile in a new tab"
      >
        LinkedIn Profile (External)
      </Button>

      {resumeHref ? (
        <>
          <Button
            href={resumePreviewHref ?? resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            aria-label="Preview Kevin Kyle S. Alfon's resume in a new tab"
          >
            View Resume
          </Button>
          <Button
            href={resumeHref}
            download
            variant="secondary"
            aria-label="Download Kevin Kyle S. Alfon's resume"
          >
            Download Resume
          </Button>
        </>
      ) : (
        <button
          type="button"
          disabled
          className={disabledButtonClasses}
          aria-label="Resume not yet available"
        >
          Resume Coming Soon
        </button>
      )}
    </div>
  );
}
