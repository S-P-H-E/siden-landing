import Link from "next/link";

export default function Banner() {
    return (
        <div className="bg-[var(--border)] text-[var(--foreground)] gap-2 w-full h-10 flex items-center justify-center motion-preset-slide-down delay-1000">
            <p className="text-sm font-medium">SIDEN IS IN BETA — JOIN THE WAITLIST</p>
            <Link href="https://siden.ai/auth?mode=signup" className="font-bold underline">JOIN NOW</Link>
        </div>
    )
}