import Link from "next/link";

const Navigation = [
    { name: "Learn", href: "/learn" },
    { name: "Groma Labs", href: "/" },
];

export function TerraCheckNavbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-2">
                    <Link href="/terracheck" className="font-bold text-lg text-foreground hover:text-white transition-colors">
                        TerraCheck
                    </Link>
                    <div className="hidden sm:block">
                        <span className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-medium text-white/50 tracking-wide">
                            Coming soon
                        </span>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {Navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="mailto:murray@gromalabs.com"
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/25 transition-colors"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
