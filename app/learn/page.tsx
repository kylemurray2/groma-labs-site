import { Navbar } from "@/components/layout/Navbar";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

export default function LearnPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500/30">
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12">
                <div className="mx-auto max-w-4xl space-y-24">

                    {/* Header */}
                    <section className="text-center space-y-6">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-3xl mb-4">
                            TerraCheck Education Center
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                            The Ground is Moving. <br /> Here's Why.
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            We tend to think of the earth beneath our feet as "solid rock." In reality, it's a dynamic, breathing system that rises and falls with water tables, soil cycles, and human activity.
                        </p>
                    </section>

                    {/* 1. What is Deformation? */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">What is Ground Deformation?</h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            <p>
                                Ground deformation refers to the change in the land's surface elevation over time. It happens slowly—often millimeters per year—but over decades, it can cause catastrophic damage to infrastructure.
                            </p>
                            <ul className="list-none pl-0 space-y-4 pt-4">
                                <li className="flex gap-4">
                                    <div className="h-full pt-1"><span className="text-red-500 text-xl font-bold">Subsidence</span></div>
                                    <div>
                                        <strong className="text-white block">The Sinking Earth</strong>
                                        <span className="text-base text-gray-500">When the ground lowers relative to sea level. This is the most common and destructive form of deformation, often irreversible.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="h-full pt-1"><span className="text-cyan-500 text-xl font-bold">Heave</span></div>
                                    <div>
                                        <strong className="text-white block">The Rising Earth</strong>
                                        <span className="text-base text-gray-500">When the ground swells upward. This is frequent in clay-rich soils that expand when wet, lifting foundations with incredible force.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 2. Causes Grid */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold text-white">The Hidden Causes</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                                <div className="text-3xl mb-4">💧</div>
                                <h3 className="text-xl font-bold text-white mb-2">Groundwater Withdrawal</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Visualize a wet sponge. When it's full of water, it's plump. When you squeeze (pump) the water out, the sponge shrinks and flattens. Aquifers work the same way. As cities pump groundwater, the sediment layers above collapse.
                                </p>
                            </div>
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                                <div className="text-3xl mb-4">🧊</div>
                                <h3 className="text-xl font-bold text-white mb-2">Expansive "Clay" Soils</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Common in Colorado, Texas, and the UK. Certain clay minerals act like a concertina, expanding by up to 10% volume when wet and shrinking when dry. This seasonal "heartbeat" wreaks havoc on rigid concrete foundations.
                                </p>
                            </div>
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                                <div className="text-3xl mb-4">🏗️</div>
                                <h3 className="text-xl font-bold text-white mb-2">Sediment Compaction</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    New land is often soft. Areas built on reclaimed land, old landfills, or river deltas naturally settle over time as the weight of new buildings compresses the loose soil beneath.
                                </p>
                            </div>
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-red-500/30 transition-colors">
                                <div className="text-3xl mb-4">🌋</div>
                                <h3 className="text-xl font-bold text-white mb-2">Tectonic Activity</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Deep earth forces. While earthquakes are sudden, the strain accumulation along fault lines often manifests as slow, subtle creeping motion detectable years before a rupture.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 3. Risks & Vulnerabilities */}
                    <section className="grid md:grid-cols-2 gap-12 items-center bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">Why Should You Care?</h2>
                            <p className="text-gray-400">Since standard home inspections only look at the building, these risks are often completely missed until it's too late.</p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold mt-1">✕</span>
                                    <span><strong>Foundation Failure:</strong> Differential settlement (one side sinking faster than the other) snaps concrete slabs.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold mt-1">✕</span>
                                    <span><strong>Increased Flood Risk:</strong> In coastal zones, 1 inch of subsidence can expose thousands of inland acres to high tide flooding.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold mt-1">✕</span>
                                    <span><strong>Broken Infrastructure:</strong> Buried pipes and utility lines shear when the ground moves, leading to costly leaks.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-black/50 p-6 rounded-xl border border-white/10 text-sm space-y-4">
                            <h3 className="text-white font-bold tracking-wide uppercase text-xs">High Risk Zones</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-gray-400">Costal Cities</span>
                                    <span className="text-red-400 font-mono">High Flood Risk</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-gray-400">Colorado Front Range</span>
                                    <span className="text-amber-400 font-mono">Expansive Soil</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-gray-400">Central Valley, CA</span>
                                    <span className="text-red-400 font-mono">Aquifer Depletion</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-gray-400">Houston, TX</span>
                                    <span className="text-red-400 font-mono">Rapid Subsidence</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4. How We Measure It */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">How TerraCheck Measures It</h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            <p>
                                We use <strong>InSAR (Interferometric Synthetic Aperture Radar)</strong>. It is essentially a tape measure from space.
                            </p>
                            <p>
                                Satellites like the European Space Agency's Sentinel-1 orbit the earth, beaming radar waves down to the surface. By comparing the phase of the radar waves from one pass to the next (interferometry), we can detect changes in elevation as small as a few millimeters.
                            </p>
                            <div className="grid grid-cols-3 gap-4 mt-8 not-prose">
                                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/5">
                                    <span className="block text-2xl mb-2">📡</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Active Radar</span>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/5">
                                    <span className="block text-2xl mb-2">☁️</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Sees Thru Clouds</span>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/5">
                                    <span className="block text-2xl mb-2">📏</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Millimeter Accuracy</span>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 py-12 bg-black text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} TerraCheck Analytics. All rights reserved.</p>
                <p className="mt-2 text-xs text-gray-600">Educational content provided for informational purposes only. Consult a geotechnical engineer for site-specific advice.</p>
            </footer>
        </div>
    );
}
