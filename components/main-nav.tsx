"use client"

import Link from "next/link";
import {siteConfig} from "@/config/site";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {Icons} from "@/components/icon";

export function MainNav() {
    const pathname = usePathname()
    return (
        <nav className="flex items-center space-x-4 lg:space-x-6 mt-4">
            {/* Logo */}
            <Link href="/" className="mr-6 flex items-center space-x-2">
                {/*<Icons.logo className="h-8 w-8"/>*/}
                <span className="font-bold text-2xl">{siteConfig.name}</span>
            </Link>
            <Link href="/blog" className={cn("text-xl font-medium transition-colors hover:text-primary hidden sm:block",
                pathname === "/blog" ? "text-foreground" : "text-foreground/60")}>
                Blog
            </Link>

            <Link href="/about" className={cn("text-xl font-medium transition-colors hover:text-primary hidden sm:block",
                pathname === "/about" ? "text-foreground" : "text-foreground/60")}>
                About
            </Link>
        </nav>
    )
}