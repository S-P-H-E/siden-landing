import Link from "next/link";
import Video from "./Video";
import Button from "./ui/button";
import { FlipWords } from "./ui/FlipWords";

export default function Hero() {
    const words = ["Assistant", "Workforce", "Employee", "Team", "Agent"];
    return (
        <div className="relative h-[100dvh] bg-white w-full flex flex-col items-center justify-center gap-5 rounded-t-3xl pt-24 z-10 mb-20">
            
            {/* Remove top gradient, keep only bottom fade if needed */}
            <div className="absolute -bottom-10 w-full bg-gradient-to-t from-[var(--accent)] to-transparent -z-10 h-[50dvh] rounded-b-4xl"/>
            {/* <div className="absolute top-[400px] w-full bg-[radial-gradient(circle_at_center,var(--accent)_10%,transparent_40%)] -z-10 h-[100dvh]"/> */}

            <h1 className="text-7xl text-[5rem] font-bold w-2xl text-center">
                Your On-Demand<br/>
                AI <span className="text-[var(--accent)]"><FlipWords words={words} className="font-bold"/>.</span>
            </h1>
            <p className="text-[var(--description)] font-medium w-md text-center">Siden gives businesses an unfair edge by enabling humans and AI to work together.</p>
            <Button href="https://siden.ai/auth?mode=signup">JOIN WAITLIST</Button>
            <Video />
          </div>
    )
}