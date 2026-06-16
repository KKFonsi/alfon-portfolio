import type { Metadata } from "next";

import { PageContainer } from "@/components/layout/PageContainer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificates } from "@/data/certificates";
import { skillGroups } from "@/data/skills";
import { getCanonicalUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kevin Kyle S. Alfon, an Information Technology student and AI-assisted developer preparing for internship and OJT opportunities.",
  ...(getCanonicalUrl("/about")
    ? {
        alternates: {
          canonical: getCanonicalUrl("/about"),
        },
      }
    : {}),
};

const overviewCards = [
  {
    title: "Current Focus",
    description:
      "Preparing for internship and on-the-job training opportunities while continuing to build academic and personal software projects.",
  },
  {
    title: "Project Range",
    description:
      "Works across web, Android, desktop, and other software projects, with attention to interfaces, backend behavior, data, and UI design.",
  },
  {
    title: "AI-Assisted Direction",
    description:
      "Uses agentic tools while still planning requirements, testing behavior, debugging issues, and reviewing generated implementation.",
  },
];

const approachItems = [
  "Define the project goal, requirements, user roles, and expected behavior before implementation work starts.",
  "Use AI-assisted and agentic development tools such as Codex and Claude to move from project ideas into working applications.",
  "Direct implementation choices, review generated code, and check whether the output matches the intended product behavior.",
  "Test features after each phase, debug issues, and preserve working behavior when adding or changing functionality.",
  "Refine interfaces based on user needs, readability, navigation clarity, and practical workflows.",
];

const learningGoals = [
  "Strengthening TypeScript and React architecture",
  "Improving Android application architecture",
  "Building more reliable backend APIs",
  "Improving database design",
  "Writing maintainable and understandable code",
  "Using AI-assisted development tools responsibly",
  "Developing stronger testing and deployment practices",
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-background py-16 sm:py-20 lg:py-24">
        <PageContainer>
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              About
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
              Kevin Kyle S. Alfon
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-muted sm:text-xl">
              Information Technology student at the Polytechnic University of
              the Philippines, building practical web, Android, desktop, and
              other software projects while preparing for internship and OJT
              opportunities.
            </p>
          </div>
        </PageContainer>
      </section>

      <Section className="border-b border-border bg-surface/35">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Overview"
            title="A practical software development foundation"
            description="My current work is centered on learning by building complete, understandable systems for academic and personal projects."
          />
          <div>
            <p className="text-base leading-8 text-foreground-muted sm:text-lg">
              I am an Information Technology student and AI-assisted developer.
              I consider myself a vibe coder, and I am transparent that my
              projects could not have been completed in their current form
              without AI assistance. That does not mean I only enter prompts: I
              still participate in project planning, requirements definition, UI
              decisions, testing, debugging, technical direction, and reviewing
              generated implementation.
            </p>
            <p className="mt-5 text-base leading-8 text-foreground-muted sm:text-lg">
              My current workflow uses tools such as Codex and Claude to help
              turn ideas into working applications, while I keep responsibility
              for deciding what the project should do, whether the generated
              work fits the requirements, and how the user experience should be
              refined.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {overviewCards.map((card) => (
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

      <Section>
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="Technologies and tools represented by my current portfolio projects and development practice."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/35">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Approach"
            title="How I approach projects"
            description="I try to keep each project structured enough to maintain while still moving in clear, achievable phases."
          />
          <div className="grid gap-3">
            {approachItems.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-border bg-background p-5"
              >
                <p className="text-sm leading-6 text-foreground-muted">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-border bg-surface p-6 sm:p-8">
            <SectionHeading
              eyebrow="Education"
              title="Current Status"
              description="Polytechnic University of the Philippines"
              className="max-w-none"
            />
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="status">Information Technology</Badge>
              <Badge variant="accent">
                Preparing for internship / OJT opportunities
              </Badge>
            </div>
          </article>

          <article className="rounded-lg border border-border bg-surface p-6 sm:p-8">
            <SectionHeading
              eyebrow="Learning"
              title="Current Learning Goals"
              description="Areas I am actively strengthening as I prepare for real team workflows."
              className="max-w-none"
            />
            <ul className="mt-6 grid gap-3">
              {learningGoals.map((goal) => (
                <li key={goal} className="flex gap-3 text-sm text-foreground-muted">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/35">
        <SectionHeading
          eyebrow="Certificates"
          title="TESDA Certificates"
          description="Public certificate names included without certificate numbers, dates, training-center details, or verification claims."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {certificates.map((certificate) => (
            <article
              key={certificate.name}
              className="rounded-lg border border-border bg-background p-6"
            >
              <Badge variant="accent">TESDA</Badge>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-foreground">
                {certificate.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground-muted">
                {certificate.issuer}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/35">
        <div className="rounded-lg border border-border bg-background p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              eyebrow="Contact"
              title="Open to internship and OJT conversations"
              description="For current contact options and portfolio links, visit the contact section on the homepage."
              className="max-w-2xl"
            />
            <Button href="/#contact">Go to Contact</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
