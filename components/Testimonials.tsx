import Marquee from "react-fast-marquee"

export default function Testimonials() {
    const testimonials = [
        {
            name: "Alex Rivera",
            username: "@alexrivera",
            image: "https://framerusercontent.com/images/Q6Uhycj3JpWbL2X82AeTSpMX47w.png?scale-down-to=512",
            text: "Our team's productivity has skyrocketed since we started using this tool."
        },
        {
            name: "Alex Rivera",
            username: "@alexrivera",
            image: "https://framerusercontent.com/images/Q6Uhycj3JpWbL2X82AeTSpMX47w.png?scale-down-to=512",
            text: "Our team's productivity has skyrocketed since we started using this tool."
        },
        {
            name: "Alex Rivera",
            username: "@alexrivera",
            image: "https://framerusercontent.com/images/Q6Uhycj3JpWbL2X82AeTSpMX47w.png?scale-down-to=512",
            text: "Our team's productivity has skyrocketed since we started using this tool."
        },
        {
            name: "Alex Rivera",
            username: "@alexrivera",
            image: "https://framerusercontent.com/images/Q6Uhycj3JpWbL2X82AeTSpMX47w.png?scale-down-to=512",
            text: "Our team's productivity has skyrocketed since we started using this tool."
        },
        {
            name: "Alex Rivera",
            username: "@alexrivera",
            image: "https://framerusercontent.com/images/Q6Uhycj3JpWbL2X82AeTSpMX47w.png?scale-down-to=512",
            text: "Our team's productivity has skyrocketed since we started using this tool."
        },
        {
            name: "Alex Rivera",
            username: "@alexrivera",
            image: "https://framerusercontent.com/images/Q6Uhycj3JpWbL2X82AeTSpMX47w.png?scale-down-to=512",
            text: "Our team's productivity has skyrocketed since we started using this tool."
        },
        {
            name: "Alex Rivera",
            username: "@alexrivera",
            image: "https://framerusercontent.com/images/Q6Uhycj3JpWbL2X82AeTSpMX47w.png?scale-down-to=512",
            text: "Our team's productivity has skyrocketed since we started using this tool."
        },
    ]

    return (
        <div className="flex flex-col items-center w-full justify-center py-40 gap-4">
            <div className="px-4 py-2 rounded-full bg-[var(--border)] text-white font-semibold">
                <p>Testimonials</p>
            </div>
            <h1 className="text-5xl font-bold text-center w-[900px]">What our users say</h1>
            <div className="w-[1200px] mx-auto">
                {["right", "left"].map(d => (
                    <Marquee
                        key={d}
                        gradient={true}
                        gradientColor="#121212"
                        direction={d === "right" ? "right" : "left"}
                        className="py-8 overflow-hidden"
                    >
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className={`flex flex-col gap-6 shadow-lg rounded-2xl border border-[var(--border)] p-10 w-[400px] mx-8`}
                            >
                                <p>{t.text}</p>
                                <div className="flex items-center gap-2">
                                    <img src={t.image} alt={t.name} width={40} height={40} className="rounded-full"/>
                                    <div>
                                        <p className="font-medium">{t.name}</p>
                                        <p className="text-[#676767]">{t.username}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                ))}
            </div>
        </div>
    )
}