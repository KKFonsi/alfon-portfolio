import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const focusCards = [
  {
    title: "Mobile Development",
    description:
      "Building native Android applications with Kotlin, Java, XML, Retrofit, Room, and Mapbox.",
  },
  {
    title: "Web Development",
    description:
      "Creating responsive web applications using React, Next.js, TypeScript, PHP, and modern CSS.",
  },
  {
    title: "UI and System Design",
    description:
      "Designing clear interfaces, user flows, reusable components, and practical application structures.",
  },
];

export function AboutSection() {
  return (
    <Section id="about" className="border-b border-border bg-surface/35">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="I am an IT student and aspiring software developer with experience building web and mobile applications for academic and personal projects."
        />
        <div>
          <p className="text-base leading-8 text-foreground-muted sm:text-lg">
            I enjoy turning project ideas into functional systems, from
            interface planning and application logic to testing and deployment. I
            am particularly interested in Android development, frontend
            development, UI/UX, and software that solves practical everyday
            problems.
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
