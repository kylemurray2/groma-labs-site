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

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Education</p>
                  <p className="text-sm text-white font-medium">PhD, Geophysics</p>
                  <p className="text-xs text-gray-400">Cornell University</p>
                </div>
                <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Specialization</p>
                  <p className="text-sm text-white font-medium">InSAR &amp; Remote Sensing</p>
                  <p className="text-xs text-gray-400">Algorithm development since 2015</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Core Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Synthetic Aperture Radar (SAR)",
                    "InSAR Time-Series",
                    "Phase Unwrapping",
                    "GPU Computing",
                    "Geophysical Modeling",
                    "Remote Sensing",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-white/[0.04] text-gray-400 border border-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
