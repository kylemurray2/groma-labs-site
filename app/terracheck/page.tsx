import { TerraCheckNavbar } from "@/components/layout/TerraCheckNavbar";
import Link from "next/link";

export const metadata = {
    title: "TerraCheck | Coming Soon | Groma Labs",
    description:
        "TerraCheck will offer satellite-derived ground health insights for real estate. Not in production yet — from Groma Labs.",
};

export default function TerraCheckComingSoonPage() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-cyan-500/30">
            <TerraCheckNavbar />

            <main className="relative pt-24 pb-20 px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-white/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" aria-hidden />
                        Coming soon — not in production
                    </p>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
                        TerraCheck
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-4">
                        Address-based ground health reporting powered by satellite radar interferometry
                        (InSAR)—think of it as a living read on how the land beneath a property has moved
                        over time.
                    </p>

                    <p className="text-base text-gray-500 leading-relaxed mb-10">
                        TerraCheck is developed by{" "}
                        <Link href="/" className="text-primary/80 hover:text-primary transition-colors">
                            Groma Labs
                        </Link>
                        . We are not accepting orders or sign-ups yet; the product remains in development.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black hover:bg-gray-200 transition-colors"
                        >
                            Back to Groma Labs
                        </Link>
                        <Link
                            href="/learn"
                            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 text-sm font-medium text-white/80 hover:bg-white/[0.08] hover:border-white/25 transition-colors"
                        >
                            Learn about the science
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="relative z-20 border-t border-white/5 py-10 bg-black text-center text-sm text-muted-foreground">
                <p>
                    &copy; {new Date().getFullYear()} TerraCheck · A{" "}
                    <Link href="/" className="text-primary/60 hover:text-primary transition-colors">
                        Groma Labs
                    </Link>{" "}
                    initiative
                </p>
            </footer>
        </div>
    );
}
