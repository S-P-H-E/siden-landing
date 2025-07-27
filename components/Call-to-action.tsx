import Button from "./ui/button";

export default function CallToAction(){
    return (
        <div className="w-full max-w-[400px] md:max-w-6xl my-20 md:h-[400px] h-auto p-8 md:p-14 mx-auto bg-[var(--accent)] rounded-4xl flex flex-col justify-between items-center gap-6">
            <h1 className="text-[var(--background)] text-3xl md:text-7xl font-medium max-w-lg w-full px-4 text-center">Start Using Siden AI Soon</h1>
            <div className="flex flex-col items-center gap-4">
                <Button href="https://siden.ai/auth?mode=signup" className="bg-white !text-[var(--accent)]">JOIN WAITLIST</Button>
                <p className="text-[var(--background)] font-medium">The most unfair advantage in business.</p>
            </div>
        </div>
    )
}