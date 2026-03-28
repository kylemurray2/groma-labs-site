import Link from "next/link";
import { cn } from "@/lib/utils";

const Navigation = [
    { name: "Learn", href: "/learn" },
    { name: "Product", href: "/#product" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Company", href: "/company" },
];

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="font-bold text-lg text-foreground hover:text-white transition-colors">
                        TerraCheck
                    </Link>
                    <div className="hidden sm:block">
                        <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary tracking-wide">BETA</span>
                    </div>
                </div>

                {/* Desktop Nav */}
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

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="hidden text-sm font-medium text-muted-foreground hover:text-white sm:block transition-colors"
                    >
                        Log in
                    </Link>
                    <Link
                        href="/search"
                        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 transition-colors"
                    >
                        Get Report
                    </Link>
                </div>
            </div>
        </nav>
    );
}
