"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  accentColor?: string;
}

export function PillarCard({
  icon,
  title,
  description,
  className,
  accentColor = "cyan",
}: PillarCardProps) {
  const accentMap: Record<string, string> = {
    cyan: "group-hover:border-cyan-500/40 group-hover:shadow-cyan-500/5",
    amber: "group-hover:border-amber-500/40 group-hover:shadow-amber-500/5",
    white: "group-hover:border-white/30 group-hover:shadow-white/5",
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8",
        "hover:bg-white/[0.04] transition-all duration-300",
        "shadow-lg hover:shadow-xl",
        accentMap[accentColor] ?? accentMap.cyan,
        className
      )}
    >
      {/* Top accent line */}
      <div
        className={cn(
          "absolute top-0 left-6 right-6 h-px",
          "bg-gradient-to-r from-transparent via-white/20 to-transparent",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        )}
      />

      <div className="mb-5 text-3xl">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
