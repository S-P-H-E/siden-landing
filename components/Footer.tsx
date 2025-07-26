import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Footer() {
    return (
        <div className="flex flex-col relative items-center h-[300px] overflow-hidden">
            <Link href="https://siden.ai/auth?mode=signup" className="bg-[#ececec] text-[#727272] font-semibold px-6 py-4 rounded-2xl flex items-center gap-2 z-[20] cursor-pointer">
                JOIN WAITLIST
                <FiArrowRight />
            </Link>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[var(--background)] to-transparent z-10 h-[100px]"/>
            <h1 className="absolute text-[300px] font-extrabold text-[#e6e6e6] select-none">Siden</h1>
        </div>
    )
}