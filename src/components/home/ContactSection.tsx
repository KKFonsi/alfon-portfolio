import { ContactActions } from "@/components/contact/ContactActions";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <Section id="contact" className="border-t border-border bg-surface/35">
      <div className="rounded-lg border border-border bg-background p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Talk About Internship Opportunities"
            description="I am preparing for internship and OJT opportunities where I can contribute to practical software work while continuing to learn from real team workflows."
            className="max-w-2xl"
          />
          <ContactActions />
        </div>
        <div className="mt-8 grid gap-5 border-t border-border pt-6">
          <p className="max-w-3xl text-sm leading-6 text-foreground-muted">
            Public contact details are limited to portfolio-safe links. Email,
            GitHub, LinkedIn, and resume actions are available for internship
            and OJT conversations.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="status">Philippines</Badge>
            <Badge variant="accent">Internship / OJT preparation</Badge>
          </div>
        </div>
      </div>
    </Section>
  );
}
