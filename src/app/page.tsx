import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero";
import { MenuSection } from "@/components/sections/menu";
import { ShowcaseSection } from "@/components/sections/showcase";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-kanpai-charcoal">
      <Header />
      <HeroSection />
      <MenuSection />
      <ShowcaseSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
