import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between bg-[#EAE5D9] px-6 shadow-sm border-b border-zinc-200 md:px-12">
            <Link href="/" className="flex items-center gap-4">
                <Image
                    src="/logo.png"
                    alt="Kanpai Sushi Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                />
                <span className="font-sans text-lg font-medium tracking-[0.2em] text-kanpai-charcoal uppercase">
                    Kanpai Sushi
                </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.15em] text-zinc-500 uppercase">
                <Link href="#menu" className="transition-colors hover:text-kanpai-charcoal">
                    Menu
                </Link>
                <Link href="#about" className="transition-colors hover:text-kanpai-charcoal">
                    À Propos
                </Link>
                <Link href="#contact" className="transition-colors hover:text-kanpai-charcoal">
                    Contact
                </Link>
            </nav>

            <div className="flex items-center gap-4">
                <button className="hidden rounded bg-kanpai-crimson px-6 py-2.5 text-xs font-bold tracking-widest text-white transition-transform hover:scale-105 active:scale-95 md:block">
                    COMMANDER
                </button>
                <button className="md:hidden text-kanpai-charcoal">
                    <Menu className="h-6 w-6" />
                </button>
            </div>
        </header>
    );
}
