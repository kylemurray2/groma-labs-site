"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { Mail, MapPin, Handshake } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-32 relative bg-black border-t border-white/5">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionReveal>
          <p className="text-xs font-medium tracking-[0.3em] text-primary/60 uppercase mb-4">
            Collaborate
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work With Us
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-12">
            We&apos;re open to consulting engagements, joint grant proposals,
            and research collaborations. If you need InSAR expertise
            or are looking for a co-PI, let&apos;s talk.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-6 hover:bg-white/[0.04] transition-colors">
              <Handshake className="w-6 h-6 text-primary/50 mx-auto mb-3" />
              <h3 className="text-sm font-medium text-white mb-1">Consulting</h3>
              <p className="text-xs text-gray-500">InSAR analysis, structural assessment, custom processing</p>
            </div>
            <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-6 hover:bg-white/[0.04] transition-colors">
              <Mail className="w-6 h-6 text-primary/50 mx-auto mb-3" />
              <h3 className="text-sm font-medium text-white mb-1">Grant Proposals</h3>
              <p className="text-xs text-gray-500">Co-PI or consultant on NASA, NSF, and DOE funded research</p>
            </div>
            <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-6 hover:bg-white/[0.04] transition-colors">
              <MapPin className="w-6 h-6 text-primary/50 mx-auto mb-3" />
              <h3 className="text-sm font-medium text-white mb-1">Academic Collaboration</h3>
              <p className="text-xs text-gray-500">Joint research, data sharing, and university partnerships</p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="space-y-3">
            <a
              href="mailto:kyle@gromalabs.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 hover:border-white/25 transition-all backdrop-blur-sm"
            >
              <Mail className="w-4 h-4" />
              kyle@gromalabs.com
            </a>
            <p className="text-xs text-gray-600 pt-2">
              Golden, Colorado
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
