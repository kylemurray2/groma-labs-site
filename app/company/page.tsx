import { Navbar } from "@/components/layout/Navbar";
import Image from "next/image";

export default function CompanyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500/30">
            <Navbar />

            <main className="pt-32 pb-24 px-6">
                <div className="mx-auto max-w-3xl space-y-24">

                    {/* 1. The Mission (Why we exist) */}
                    <section className="space-y-6 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                            Democratizing Geophysics.
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We believe that <span className="text-white font-medium">ground stability data</span> shouldn't be a secret locked away in expensive engineering reports. It should be as accessible as a credit score.
                        </p>
                    </section>

                    {/* 2. The Story (The 'Why Now') */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4">The Story</h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            <p>
                                For decades, the technology to measure ground movement from space (InSAR) has existed, but it was reserved for oil companies, governments, and academic researchers.
                            </p>
                            <p>
                                Homeowners were left guessing. They would buy their dream home, only to discover cracks in the foundation five years later because the ground was slowly moving beneath them.
                            </p>
                            <p>
                                TerraCheck changes that. We process petabytes of Sentinel-1 satellite radar data to create a "living health record" for every parcel of land.
                            </p>
                        </div>
                    </section>

                    {/* 3. The Founder (Trust Signal) */}
                    <section className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                        <div className="space-y-4">
                            {/* Founder Image */}
                            <div className="aspect-square relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src="/km_portrait.png"
                                    alt="Kyle Murray, PhD"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-white text-lg">Kyle Murray, PhD</h3>
                                <p className="text-sm text-primary">Founder & Lead Geophysicist</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-white">From the Founder</h2>
                            <div className="prose prose-invert text-gray-400">
                                <p className="italic border-l-2 border-primary/50 pl-4">
                                    "I've been working with radar remote sensing data since 2015, developing new methods to measure how the earth changes. Throughout my research at Cornell, I realized there was a massive gap: we had the technology to measure ground deformation with millimeter precision from space, but that data never reached the people who needed it most—homeowners and homebuyers. TerraCheck exists to bridge that gap."
                                </p>
                                <ul className="list-disc pl-5 space-y-2 pt-2">
                                    <li><strong>PhD from Cornell University</strong> in Geophysics/Remote Sensing.</li>
                                    <li>Specializing in novel InSAR algorithms and time-series analysis since 2015.</li>
                                    <li>Focused on translating complex satellite data into actionable property insights.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 4. Core Values / The "TerraCheck Standard" */}
                    <section className="space-y-8">
                        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4">Our Principles</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2">Science First</h3>
                                <p className="text-sm text-gray-400">We don't guess. We rely on millimeter-accurate radar interferometry and peer-reviewed methodologies.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2">Transparency</h3>
                                <p className="text-sm text-gray-400">If the data is inconclusive, we say so. We prioritize honest risk assessment over fear-mongering.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2">Speed</h3>
                                <p className="text-sm text-gray-400">Real estate moves fast. Our reports are same day, not waiting weeks for a surveyor.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2">Design</h3>
                                <p className="text-sm text-gray-400">Complex data is useless if it's confusing. we treat UI/UX as a core engineering challenge.</p>
                            </div>
                        </div>
                    </section>

                    {/* 5. Contact / HQ */}
                    <section className="border-t border-white/10 pt-12 text-center space-y-4">
                        <h2 className="text-xl font-bold text-white">Based in Golden, Colorado</h2>
                        <p className="text-gray-500">
                            TerraCheck Analytics Inc.<br />
                            Golden, CO<br />
                            <a href="mailto:hello@terracheck.com" className="text-primary hover:underline transition-colors">hello@terracheck.com</a>
                        </p>
                    </section>

                </div>
            </main>
        </div>
    );
}
