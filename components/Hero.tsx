import Link from "next/link";
import Video from "./Video";

export default function Hero() {
    return (
        <div className="h-[100dvh] pt-35 flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 border border-[var(--border)] shadow-lg rounded-full px-3 py-2">
                <div className="flex -space-x-4">
                    <img
                    className="w-8 h-8 rounded-full border-2 border-[var(--background)]"
                    src="https://i.pravatar.cc/100?img=1"
                    alt="User 1"
                    />
                    <img
                    className="w-8 h-8 rounded-full border-2 border-[var(--background)]"
                    src="https://i.pravatar.cc/100?img=2"
                    alt="User 2"
                    />
                    <img
                    className="w-8 h-8 rounded-full border-2 border-[var(--background)]"
                    src="https://i.pravatar.cc/100?img=3"
                    alt="User 3"
                    />
                </div>
                <p className="font-semibold">400+ users already signed up</p>
            </div>
            <h1 className="text-7xl font-bold text-center w-[800px]">Siden, your smart AI employee on demand.</h1>
            <p className="text-[var(--description)]">The most unfair advantage in business. Siden allows humans and AI to work together.</p>
            <Link href="https://siden.ai/auth?mode=signup" className="rounded-full bg-[var(--accent)] text-[var(--foreground)] px-6 py-3 font-semibold">JOIN WAITLIST</Link>
            <Video />
          </div>
    )
}