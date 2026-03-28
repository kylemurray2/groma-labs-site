"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
    title: string;
    description: string;
    header?: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}

export function BentoGrid({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4",
                className
            )}
        >
            {children}
        </div>
    );
}

export function BentoCard({
    title,
    description,
    header,
    className,
    icon,
}: BentoCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.1] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            {header && <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2] overflow-hidden">{header}</div>}

            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon && <div className="mb-2 text-primary text-2xl">{icon}</div>}
                <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </motion.div>
    );
}
