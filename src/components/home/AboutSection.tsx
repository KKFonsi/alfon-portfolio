import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const focusCards = [
  {
    title: "Software Range",
    description:
      "Building web, Android, desktop, and other software projects for academic and personal use cases.",
  },
  {
    title: "Agentic Workflow",
    description:
      "Using Codex, Claude, and similar tools as part of an honest AI-assisted development process.",
  },
  {
    title: "Technical Direction",
    description:
      "Defining requirements, reviewing generated code, testing behavior, debugging issues, and refining interfaces.",
  },
];

export function AboutSection() {
  return (
    <Section id="about" className="border-b border-border bg-surface/35">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="I am an Information Technology student and AI-assisted developer building practical software projects with a transparent vibe-coding workflow."
        />
        <div>
          <p className="text-base leading-8 text-foreground-muted sm:text-lg">
            I consider myself a vibe coder, and I am transparent that my
            projects could not have reached their current scope without AI
            assistance. My contribution is not just entering prompts: I help
            define the requirements, plan the features, make UI decisions,
            direct implementation, test behavior, resolve issues, and review the
            generated work until the project feels usable.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {focusCards.map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-border bg-background p-5"
              >
                <Badge variant="accent">{card.title}</Badge>
                <p className="mt-4 text-sm leading-6 text-foreground-muted">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
