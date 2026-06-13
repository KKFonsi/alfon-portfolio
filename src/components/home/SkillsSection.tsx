import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Skills and Technologies"
        description="Technologies and tools I use to design, build, test, and deploy web and mobile applications."
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
  );
}
