import Link from "next/link";

const Navigation = [
    { name: "Research", href: "/#research" },
    { name: "Consulting", href: "/#consulting" },
    { name: "About", href: "/#about" },
];

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <div className="flex items-center gap-1.5">
                    <Link href="/" className="flex items-baseline gap-1 hover:opacity-80 transition-opacity">
                        <span className="font-extrabold text-lg tracking-tight text-white">GROMA</span>
                        <span className="text-xs font-medium tracking-[0.2em] text-primary/80 uppercase">Labs</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {Navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/terracheck"
                        className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                    >
                        TerraCheck
                    </Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link
                        href="mailto:kyle@gromalabs.com"
                        className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white hover:bg-white/10 hover:border-white/25 transition-all backdrop-blur-sm"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
