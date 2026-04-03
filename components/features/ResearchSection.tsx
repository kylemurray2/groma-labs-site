"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { motion } from "framer-motion";
import { Cpu, Activity, Satellite } from "lucide-react";

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
              Our work spans algorithm development, high-performance computing, and
              applied remote sensing — with a focus on making satellite-derived measurements
              faster, more accurate, and more accessible.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <SectionReveal delay={0.1}>
            <ResearchCard
              icon={<Cpu className="w-5 h-5 text-primary/70" />}
              title="GPU-Native Phase Unwrapping"
              description="A massively parallel PD-CNF solver that replaces SNAPHU for large-scale InSAR processing. Production-ready, topologically consistent, and dramatically faster."
              tags={["CUDA", "Phase Unwrapping", "HPC"]}
              metric={{ value: "13×", label: "faster" }}
            />
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <ResearchCard
              icon={<Activity className="w-5 h-5 text-primary/70" />}
              title="Deformation Time-Series Analysis"
              description="Novel harmonic decomposition methods that separate seasonal soil signals from long-term tectonic or anthropogenic trends with sub-centimeter accuracy."
              tags={["MintPy", "Time Series", "InSAR"]}
              metric={{ value: "<5mm", label: "precision" }}
            />
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <ResearchCard
              icon={<Satellite className="w-5 h-5 text-primary/70" />}
              title="Infrastructure Monitoring"
              description="Applying persistent scatterer and distributed scatterer techniques to monitor bridges, dams, and building stability from space using Sentinel-1 radar data."
              tags={["Sentinel-1", "PS-InSAR", "Monitoring"]}
            />
          </SectionReveal>
        </div>

        {/* Data sources bar */}
        <SectionReveal delay={0.4}>
          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-[10px] font-medium tracking-[0.3em] text-gray-600 uppercase mb-5">
              Built With
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary/40" />
                ESA Sentinel-1
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary/40" />
                NASA ASF HyP3
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary/40" />
                MintPy
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary/40" />
                ISCE2/3
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary/40" />
                CUDA / Python
              </span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
