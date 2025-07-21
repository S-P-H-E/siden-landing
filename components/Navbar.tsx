import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex justify-between w-full p-10 absolute">
            <div className="w-1/2 flex items-center gap-3">
                <Image src="/Logo.svg" alt="Siden Logo" className="brightness-0 invert" width={25} height={25}/>
                <h1 className="text-2xl font-bold select-none">Siden</h1>
            </div>
            <Link href="https://siden.ai/auth?mode=signup" className="rounded-full bg-[var(--accent)] text-[var(--foreground)] px-6 py-3 font-semibold">JOIN WAITLIST</Link>
        </div>
    )
}