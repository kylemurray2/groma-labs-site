"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = [
    { name: "Research", href: "/#research" },
    { name: "Consulting", href: "/#consulting" },
    { name: "About", href: "/#about" },
];

const mobileLinks = [
    ...Navigation,
    { name: "TerraCheck", href: "/terracheck" },
];

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-1.5 min-w-0">
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

                <div className="flex items-center gap-2 md:gap-4">
                    <Link
                        href="mailto:murray@gromalabs.com"
                        className="rounded-full border border-white/15 bg-white/5 px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white hover:bg-white/10 hover:border-white/25 transition-all backdrop-blur-sm whitespace-nowrap"
                    >
                        Contact
                    </Link>

                    {/* Mobile menu toggle */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((o) => !o)}
                        className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/90 hover:bg-white/5 hover:border-white/20 transition-colors"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
                    </button>
                </div>
            </div>

            {/* Mobile nav panel */}
            {menuOpen ? (
                <>
                    <button
                        type="button"
                        className="fixed inset-0 top-16 z-40 bg-black/50 md:hidden"
                        aria-label="Close menu"
                        onClick={closeMenu}
                    />
                    <div
                        id="mobile-nav"
                        className="md:hidden absolute left-0 right-0 top-full z-50 border-b border-white/10 bg-background/95 backdrop-blur-xl shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
                    >
                        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
                            {mobileLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground hover:text-white hover:bg-white/[0.06] transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            ) : null}
        </nav>
    );
}
