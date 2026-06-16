import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificates } from "@/data/certificates";

export function CertificatesSection() {
  return (
    <Section id="certificates" className="border-t border-border bg-surface/35">
      <SectionHeading
        eyebrow="Certificates"
        title="TESDA Certificates"
        description="Selected technical certificates included in my public portfolio."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {certificates.map((certificate) => (
          <article
            key={certificate.name}
            className="rounded-lg border border-border bg-background p-5"
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
  );
}
