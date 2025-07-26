import Marquee from "react-fast-marquee"
import Tag from "./ui/tag"

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
        <div className="flex flex-col items-center w-full justify-center pb-40 pt-20 gap-4">
            {/* <Tag>
                Testimonials
            </Tag> */}
            <h1 className="text-5xl font-bold text-center w-[900px]">What our users say</h1>
            <p className="text-lg text-[var(--description)] text-center mb-8 max-w-2xl">Real stories from teams and founders who use Siden to work smarter, faster, and happier every day.</p>
            <div className="w-[1200px] mx-auto">
                {["right", "left"].map(d => (
                    <Marquee
                        key={d}
                        gradient={true}
                        gradientColor="#fff"
                        direction={d === "right" ? "right" : "left"}
                        className="py-8 overflow-hidden"
                    >
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className={`flex flex-col gap-6 shadow-lg rounded-2xl border border-[#e8e8e8] p-10 w-[400px] mx-8`}
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