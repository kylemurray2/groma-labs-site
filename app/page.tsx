import { Navbar } from "@/components/layout/Navbar";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import Image from "next/image";

// import { HeroScene } from "@/components/visualizations/HeroScene"; // We can keep using this component container if we want to restore 3D later, or just remove if we are strict about "no animation" for now. The user said "remove for now", so I will not use <HeroScene /> but I'll leave the import commented out or removed.
// Actually, let's stick to the "Static Linear Vibe" requested.

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-cyan-500/30">
      <Navbar />

      <main className="relative pt-0">

        {/* --- HERO SECTION : CENTERPIECE --- */}
        <div className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/wild_things_neighborhood.png"
              alt="The Neighborhood"
              fill
              className="object-cover object-bottom"
              priority
            />
            {/* Overlays for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          </div>

          {/* Hero Content */}
          <div className="relative z-20 px-6 text-center max-w-5xl mx-auto mt-[-10vh]">

            <div className="mx-auto inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md animate-fade-in hover:bg-white/20 transition-colors cursor-default mb-8">
              <span className="flex h-1.5 w-1.5 rounded-full bg-white mr-2 animate-pulse"></span>
              Live Beta: Jefferson County, CO
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] mb-6">
              TerraCheck
            </h1>

            <p className="text-xl md:text-3xl text-white/90 font-light tracking-wide max-w-2xl mx-auto leading-relaxed drop-shadow-md mb-10">
              Your World, Verified. <br />
              <span className="text-white/60 text-lg md:text-xl block mt-4">The MRI for Real Estate. We use historical satellite radar to reveal invisible risks beneath the soil.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="h-14 px-8 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                Search Address
              </button>
              <button className="h-14 px-8 rounded-full border border-white/30 bg-black/40 text-white hover:bg-black/60 hover:border-white/50 transition-all font-medium backdrop-blur-md text-lg">
                View Sample Report
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </div>

        {/* --- STATS SECTION --- */}
        <div className="relative border-y border-white/10 bg-black z-20">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">40%</div>
                <p className="text-sm text-gray-400">of structural damage comes from soil movement, not construction defects.</p>
              </div>
              <div className="px-4 pt-8 md:pt-0">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">$2k+</div>
                <p className="text-sm text-gray-400">Cost of a traditional geotechnical engineering report.</p>
              </div>
              <div className="px-4 pt-8 md:pt-0">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">5mm</div>
                <p className="text-sm text-gray-400">Precision of our InSAR satellite measurements (Sub-centimeter).</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- FEATURE BENTO GRID --- */}
        <section id="product" className="py-32 relative bg-black z-20">
          <div className="mx-auto max-w-7xl px-6 mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">See what the seller can't see.</h2>
            <p className="text-muted-foreground max-w-xl">
              Our platform processes terabytes of Sentinel-1 radar data to generate a comprehensive ground health profile for any address.
            </p>
          </div>

          <BentoGrid>
            <BentoCard
              className="md:col-span-2"
              title="Historical Ground Velocity"
              description="Track vertical displacement over 5 years. Is the ground sinking (subsidence) or rising (heave)? We detect movement as slow as 1mm-yr."
              header={<div className="w-full h-full bg-neutral-900 rounded-xl border border-white/5 flex items-center justify-center text-neutral-500 font-mono text-xs">Interactive Velocity Map Visualization</div>}
              icon={<span className="text-2xl grayscale">📉</span>}
            />
            <BentoCard
              className="md:col-span-1"
              title="Seasonal Volatility"
              description="Expansive clay soils swell in winter and shrink in summer. We measure this 'heartbeat' which cracks foundations."
              header={
                <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-white/5 bg-black">
                  <Image
                    src="/house_cartoon.jpg"
                    alt="Expansive Soil Risk"
                    fill
                    className="object-cover object-center opacity-80 group-hover/bento:opacity-100 transition-opacity duration-500 grayscale"
                  />
                </div>
              }
              icon={<span className="text-2xl grayscale">🏚️</span>}
            />
            <BentoCard
              className="md:col-span-1"
              title="Slope & Landslide Risk"
              description="Digital Elevation Models (DEM) highlight steep grades and drainage bowls that threaten stability."
              icon={<span className="text-2xl grayscale">⛰️</span>}
              header={<div className="w-full h-full bg-neutral-900 border border-white/5 rounded-xl" />}
            />
            <BentoCard
              className="md:col-span-2"
              title="The Ground Health Score™"
              description="We synthesize velocity, volatility, and slope into a single 0-100 score. Green means stable. Red means run."
              icon={<span className="text-2xl grayscale">🛡️</span>}
              header={<div className="w-full h-full bg-neutral-900 border border-white/5 rounded-xl flex items-center justify-center"><h3 className="text-4xl font-bold text-white">92<span className="text-sm text-gray-500">/100</span></h3></div>}
            />
          </BentoGrid>
        </section>

        {/* --- PRICING --- */}
        <section id="pricing" className="py-24 bg-white/[0.02] border-t border-white/5 z-20 relative">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-muted-foreground">Geophysics, democratized.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Residential */}
              <div className="rounded-3xl border border-white/10 bg-black p-8 hover:border-white/30 transition-colors relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-medium text-white mb-2">Residential</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">$29</span>
                  <span className="text-sm text-muted-foreground">/ report</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-gray-400">
                  <li className="flex items-center gap-3"><span className="text-white">✓</span> Same day PDF Download</li>
                  <li className="flex items-center gap-3"><span className="text-white">✓</span> 5-Year History</li>
                  <li className="flex items-center gap-3"><span className="text-white">✓</span> Clay/Expansive Soil Risk</li>
                  <li className="flex items-center gap-3"><span className="text-white">✓</span> Email Support</li>
                </ul>
                <button className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                  Get Report
                </button>
              </div>

              {/* Commercial */}
              <div className="rounded-3xl border border-white/10 bg-black p-8 hover:border-white/30 transition-colors relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-medium text-white mb-2">Commercial / Enterprise</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">$299</span>
                  <span className="text-sm text-muted-foreground">/ site</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-gray-400">
                  <li className="flex items-center gap-3"><span className="text-white">✓</span> High-Res Raw Data (CSV)</li>
                  <li className="flex items-center gap-3"><span className="text-white">✓</span> Multi-Acre Analysis</li>
                  <li className="flex items-center gap-3"><span className="text-white">✓</span> Analyst Consultation Included</li>
                  <li className="flex items-center gap-3"><span className="text-white">✓</span> API Access Available</li>
                </ul>
                <button className="w-full py-3 rounded-lg border border-white/20 bg-transparent text-white font-medium hover:bg-white/5 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Removed bottom vision section as it's now the hero */}
      </main>

      {/* Footer */}
      <footer className="relative z-20 border-t border-white/5 py-12 bg-black text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} TerraCheck Analytics. All rights reserved.</p>
      </footer>
    </div>
  );
}
