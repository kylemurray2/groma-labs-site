import { Navbar } from "@/components/layout/Navbar";
import { GromaHero } from "@/components/features/GromaHero";
import { Pillars } from "@/components/features/Pillars";
import { ResearchSection } from "@/components/features/ResearchSection";
import { FounderSection } from "@/components/features/FounderSection";
import { TerraCheckCallout } from "@/components/features/TerraCheckCallout";
import { ContactSection } from "@/components/features/ContactSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-cyan-500/30">
      <Navbar />

      <main className="relative">
        <GromaHero />
        <Pillars />
        <ResearchSection />
        <FounderSection />
        <TerraCheckCallout />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-20 border-t border-white/5 py-12 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold text-sm tracking-tight text-white/60">GROMA</span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-primary/40 uppercase">Labs</span>
            </div>
            <nav className="flex items-center gap-6 text-xs text-gray-500">
              <Link href="/#research" className="hover:text-white transition-colors">Research</Link>
              <Link href="/#consulting" className="hover:text-white transition-colors">Consulting</Link>
              <Link href="/terracheck" className="hover:text-white transition-colors">TerraCheck</Link>
              <Link href="mailto:kyle@gromalabs.com" className="hover:text-white transition-colors">Contact</Link>
            </nav>
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Groma Labs LLC. Golden, CO.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
