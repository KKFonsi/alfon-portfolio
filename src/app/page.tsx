import { AboutSection } from "@/components/home/AboutSection";
import { CertificatesSection } from "@/components/home/CertificatesSection";
import { ContactSection } from "@/components/home/ContactSection";
import { HeroSection } from "@/components/home/HeroSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { FeaturedProjectsSection } from "@/components/projects/FeaturedProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificatesSection />
      <FeaturedProjectsSection />
      <ContactSection />
    </>
  );
}
