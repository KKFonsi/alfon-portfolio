import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured);

export function FeaturedProjectsSection() {
  return (
    <Section id="projects" className="border-t border-border">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Projects"
        description="Selected web and mobile applications that demonstrate my development process, technical skills, and approach to solving practical problems."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="mt-10">
        <Button href="/projects" variant="secondary">
          View All Projects
        </Button>
      </div>
    </Section>
  );
}
