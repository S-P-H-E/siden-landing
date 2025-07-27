import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
    // ! Confirm social links
    const socials = [
        {
            logo: <FaGithub />,
            link: "https://github.com/Sidenai"
        },
        {
            logo: <FaXTwitter />,
            link: "https://x.com/siden_ai"
        },
        {
            logo: <GrInstagram />,
            link: "https://www.instagram.com/siden.ai"
        },
        {
            logo: <IoLogoLinkedin />,
            link: "https://www.linkedin.com/company/sidenai"
        },
    ]
    return (
        <>
            <div className="border-t border-t-[var(--border)] p-10">
                <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Image src="/Logo.svg" alt="Siden Logo" className="brightness-0" width={25} height={25} />
                            <h1 className="text-2xl font-bold select-none">Siden</h1>
                        </div>
                        <p className="text-[var(--description)] w-[300px]">The most unfair advantage in business. Siden allows humans and AI to work together.</p>
                        <div className="flex items-center gap-2">
                            {socials.map((s, i) => (
                                <Link href={s.link} target="_blank" key={i} className="text-[var(--description)] text-xl hover:text-[var(--accent)] transition-colors duration-300">{s.logo}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold select-none">Siden</h1>
                            {/* TODO: Add links */}
                            <div className="flex flex-col gap-1 text-[var(--description)]">
                                <Link href="/" className="hover:text-[var(--accent)] transition-colors duration-300">About</Link>
                                <Link href="/" className="hover:text-[var(--accent)] transition-colors duration-300">Contact Us</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold select-none">Legal</h1>
                            <div className="flex flex-col gap-1 text-[var(--description)]">
                                <Link href="/policy" className="hover:text-[var(--accent)] transition-colors duration-300">Privacy Policy</Link>
                                <Link href="/tos" className="hover:text-[var(--accent)] transition-colors duration-300">Terms of Service</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex flex-col relative items-center h-[100px] md:h-[200px] overflow-hidden">
                {/* <Link href="https://siden.ai/auth?mode=signup" className="bg-[#ececec] text-[#727272] font-semibold px-6 py-4 rounded-2xl flex items-center gap-2 z-[20] cursor-pointer">
                    JOIN WAITLIST
                    <FiArrowRight />
                </Link> */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-[var(--background)] to-transparent z-10 h-[100px]"/>
                <h1 className="absolute -top-[10px] md:-top-10 text-8xl md:text-[300px] font-extrabold text-[#e6e6e6] select-none">Siden AI</h1>
            </div>
        </>
    )
}