import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Navigation } from "@/components/layout/Navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur">
      <PageContainer className="flex min-h-16 items-center justify-between gap-4">
        <Logo />
        <Navigation />
        <MobileNavigation />
      </PageContainer>
    </header>
  );
}
