"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function TerraCheckCallout() {
  return (
    <section className="py-24 relative bg-black">
      <div className="mx-auto max-w-5xl px-6">
        <SectionReveal>
          <Link href="/terracheck" className="block group">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-10 md:p-14 overflow-hidden hover:border-white/[0.15] transition-all duration-500"
            >
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/[0.06] transition-colors duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-2.5 py-0.5 text-[10px] font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
                    Flagship Product
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  TerraCheck
                </h3>
                <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
                  The MRI for Real Estate. Instant, address-based ground health reports
                  powered by satellite radar interferometry. Currently in beta for
                  Jefferson County, CO.
                </p>

                <div className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Explore TerraCheck
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div className="absolute bottom-4 right-4 text-6xl font-black text-white/[0.03] select-none">
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
