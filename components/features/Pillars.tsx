"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { PillarCard } from "@/components/ui/PillarCard";
import { Radar, Building2, FlaskConical } from "lucide-react";

export function Pillars() {
  return (
    <section id="consulting" className="py-32 relative bg-black border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.3em] text-primary/60 uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research. Consult. Build.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Groma Labs operates at the intersection of academic rigor and practical application,
              advancing earth observation science across three core pillars.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SectionReveal delay={0.1}>
            <PillarCard
              icon={<FlaskConical className="w-7 h-7 text-primary/70" />}
              title="Research"
              description="Novel InSAR algorithms, GPU-accelerated processing pipelines, and time-series analysis methods. We publish in peer-reviewed journals and collaborate with leading institutions."
              accentColor="cyan"
            />
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <PillarCard
              icon={<Building2 className="w-7 h-7 text-amber-500/70" />}
              title="Consulting"
              description="Expert structural deformation assessment using satellite radar interferometry. Infrastructure monitoring, risk analysis, and bespoke geophysical investigations for government and industry."
              accentColor="amber"
            />
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <PillarCard
              icon={<Radar className="w-7 h-7 text-white/60" />}
              title="Products"
              description="We translate research into tools that democratize access to geophysical data—including TerraCheck, a satellite-derived ground health offering for real estate, currently in development."
              accentColor="white"
            />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
