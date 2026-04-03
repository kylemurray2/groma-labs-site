"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function TerraCheckCallout() {
  return (
    <section className="py-16 relative bg-black border-t border-white/[0.04]">
      <div className="mx-auto max-w-5xl px-6">
        <SectionReveal>
          <Link href="/terracheck" className="block group">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent p-8 md:p-10 overflow-hidden hover:border-white/[0.1] transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 text-[10px] font-medium tracking-wider uppercase rounded-full border border-white/10 bg-white/[0.03] text-white/45">
                    In development
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-3">
                  TerraCheck
                </h3>
                <p className="text-base text-gray-500 max-w-xl mb-6 leading-relaxed">
                  Satellite-derived ground health insights for real estate. Not in production yet—
                  we&apos;ll share more when the product is ready.
                </p>

                <div className="inline-flex items-center gap-2 text-white/50 text-sm font-medium group-hover:text-white/70 group-hover:gap-2.5 transition-all">
                  What we&apos;re building
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div className="absolute bottom-4 right-4 text-6xl font-black text-white/[0.02] select-none">
                  TC
                </div>
              </div>
            </motion.div>
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
