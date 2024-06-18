import Link from "next/link";
import {siteConfig} from "@/config/site";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {Icons} from "@/components/icon";
import {MainNav} from "@/components/main-nav";
import {MobileNav} from "@/components/mobile-nav";
import {ModeToggle} from "@/components/mode-toggle";

export function SiteHeader(){
    return (
        <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95
        backdrop-blur supports-[backdrop-filter]:bg-background/60 h-[5rem]">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <MainNav />
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center gap-4">
                        <Link href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
                            <div className={cn(buttonVariants({variant: "ghost"}),"w-10 mt-5 px-0 hidden sm:inline-flex")}>
                                <Icons.instagram className="h-8 w-8" />
                                <span className="sr-only">Instagram</span>
                            </div>
                        </Link>

                        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                            <div className={cn(buttonVariants({variant: "ghost"}),"w-10 mt-5 px-0 hidden sm:inline-flex")}>
                                <Icons.github className="h-8 w-8" />
                                <span className="sr-only">Github</span>
                            </div>
                        </Link>
                        <ModeToggle />
                        <MobileNav />
                    </nav>
                </div>
            </div>
        </header>
    )
}