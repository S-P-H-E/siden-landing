import Button from "./ui/button";

export default function CallToAction(){
    return (
        <div className="w-6xl mb-10 h-[400px] p-10 mx-auto bg-[var(--accent)] rounded-4xl flex flex-col justify-between items-center">
            <h1>Start Using Siden AI Soon</h1>
            <div>
                <Button href="https://siden.ai/auth?mode=signup" className="">JOIN WAITLIST</Button>
                <p>The generalist AI Agent that acts on your behalf</p>
            </div>
        </div>
    )
}