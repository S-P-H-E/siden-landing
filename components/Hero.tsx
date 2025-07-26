import Link from "next/link";
import Video from "./Video";

export default function Hero() {
    return (
        <div className="relative h-[100dvh] w-full flex flex-col md:flex-row items-center justify-center bg-white rounded-t-3xl pt-24 z-10">
            {/* <div className="flex items-center gap-4 border border-[var(--border)] shadow-lg rounded-full px-3 py-2">
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
            </div> */}
            {/* Remove top gradient, keep only bottom fade if needed */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[white] to-transparent -z-10 h-[100dvh]"/>

            <div className="h-full flex flex-col items-start justify-center gap-4">
                <h1 className="text-7xl font-bold w-[800px]">Siden, your smart AI employee on demand.</h1>
                <p className="text-[var(--description)]">The most unfair advantage in business. Siden allows humans and AI to work together.</p>
                <Link href="https://siden.ai/auth?mode=signup" className="rounded-md bg-[var(--accent)] text-[var(--background)] px-6 py-3 font-semibold">JOIN WAITLIST</Link>
            </div>
            <div>
                <Video />
            </div>
          </div>
    )
}