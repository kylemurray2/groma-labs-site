"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import Image from "next/image";

export function FounderSection() {
  return (
    <section id="about" className="py-32 relative bg-black border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6">
        <SectionReveal>
          <p className="text-xs font-medium tracking-[0.3em] text-primary/60 uppercase mb-12 text-center">
            Lab Director
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
          <SectionReveal delay={0.1}>
            <div className="mx-auto md:mx-0">
              <div className="w-[200px] h-[200px] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <Image
                  src="/km_portrait.png"
                  alt="Kyle Murray, PhD"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-center md:text-left">
                <h3 className="font-bold text-white text-lg">Kyle Murray, PhD</h3>
                <p className="text-sm text-primary/70">Founder &amp; Principal Investigator</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="space-y-5">
              <blockquote className="text-gray-300 leading-relaxed border-l-2 border-primary/30 pl-5 italic">
                &ldquo;I&apos;ve been developing radar remote sensing methods since 2015, building new algorithms
                to measure how Earth&apos;s surface deforms. What excites me most is translating
                cutting-edge research into tools that have tangible impact — whether that&apos;s helping
                a homebuyer understand their land, or enabling an engineer to monitor a bridge from space.&rdquo;
              </blockquote>

              <div className="space-y-4 pt-1 text-sm text-gray-400 leading-relaxed">
                <p>
                  <span className="text-white/90">Groma Labs</span> is an earth observation research and applied
                  science practice. We develop InSAR methods and software, take on monitoring and consulting
                  work where deformation matters, and build products that put satellite-derived ground
                  intelligence in reach of partners who need it—research, industry, and the public sector.
                </p>
                <p>
                  The lab is small by design: rigorous methods, clear communication, and work that holds up
                  when the question is safety, liability, or long-term infrastructure performance.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
