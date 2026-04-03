"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { motion } from "framer-motion";
import { Cpu, Activity, Globe2 } from "lucide-react";

interface ResearchCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  metric?: { value: string; label: string };
}

function ResearchCard({ icon, title, description, tags, metric }: ResearchCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="group relative rounded-xl border border-white/[0.06] bg-white/[0.015] p-6 hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
          {icon}
        </div>
        {metric && (
          <div className="text-right">
            <div className="text-2xl font-bold text-primary/80">{metric.value}</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider">{metric.label}</div>
          </div>
        )}
      </div>

      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/[0.04] text-gray-500 border border-white/[0.06]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function ResearchSection() {
  return (
    <section id="research" className="py-32 relative bg-black">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.3em] text-primary/60 uppercase mb-4">
              Active Research
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Current Focus Areas
            </h2>
            <p className="text-gray-500 max-w-xl">
              Algorithm and software development, operational monitoring, and earth science—
              from robust InSAR stacks to hazard-relevant deformation signals and process-oriented
              interpretation.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <SectionReveal delay={0.1}>
            <ResearchCard
              icon={<Cpu className="w-5 h-5 text-primary/70" />}
              title="InSAR Methods Development"
              description="Parallel and GPU-accelerated processing, atmospheric noise mitigation, and phase unwrapping—building InSAR stacks that scale and stay usable in noisy conditions."
              tags={["GPU / parallel", "Atmospheric noise", "Unwrapping"]}
            />
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <ResearchCard
              icon={<Activity className="w-5 h-5 text-primary/70" />}
              title="Monitoring"
              description="Infrastructure deformation and stability, coastal flooding hazards, and broader geophysical hazards—turning repeat-pass radar into operational situational awareness."
              tags={["Infrastructure", "Coastal flooding", "Geophysical hazards"]}
            />
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <ResearchCard
              icon={<Globe2 className="w-5 h-5 text-primary/70" />}
              title="Earth Science Applications"
              description="Groundwater, climate variability, coastal processes, and tectonics and volcanology—linking InSAR velocities to hydrologic, cryospheric, and solid-earth processes."
              tags={["Groundwater", "Climate variability", "Coastal processes", "Tectonics & volcanology"]}
            />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
