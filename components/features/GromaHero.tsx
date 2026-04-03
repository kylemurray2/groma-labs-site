"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function GromaHero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/groma_hero.png"
          alt="Radar interferometry visualization"
          fill
          className="object-cover object-center opacity-[0.78]"
          priority
        />
        {/* Vignette-style overlays — lighter in the center so the artwork reads */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/25 to-black/88 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/45 z-10" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-20 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* Lab badge */}
          <div className="mx-auto inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-white/50 backdrop-blur-md mb-10">
            <span className="flex h-1 w-1 rounded-full bg-primary/60 mr-2" />
            Earth Observation Research &amp; Applied Science
          </div>

          {/* Main title */}
          <h1 className="mb-6 drop-shadow-[0_4px_32px_rgba(0,0,0,0.85)]">
            <span className="block text-7xl md:text-9xl font-extrabold tracking-tighter text-white">
              Groma
            </span>
            <span className="block text-2xl md:text-3xl font-light tracking-[0.3em] text-primary/70 uppercase mt-2">
              Labs
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300/95 font-light max-w-2xl mx-auto leading-relaxed mb-12 drop-shadow-[0_2px_16px_rgba(0,0,0,0.75)]">
            We develop novel remote sensing algorithms and translate satellite data
            into actionable intelligence. From fundamental research to commercial
            products — bridging the gap between scientific discovery and real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/#research"
              className="h-12 px-7 rounded-full border border-white/15 bg-white/5 text-white font-medium text-sm hover:bg-white/10 hover:border-white/25 transition-all backdrop-blur-sm inline-flex items-center justify-center gap-2"
            >
              Explore Our Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
            <Link
              href="/terracheck"
              className="h-11 px-5 rounded-full border border-transparent text-white/45 text-sm font-medium hover:text-white/65 hover:border-white/10 transition-all inline-flex items-center justify-center gap-1.5"
            >
              TerraCheck
              <span className="text-[11px] font-normal text-white/30 tracking-wide">coming soon</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
