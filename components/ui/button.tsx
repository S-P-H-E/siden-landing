import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import clsx from 'clsx'

export default function Button({href, children, className}: {href: string, children: React.ReactNode, className: string}) {
    return (
        <Link href={href} className={clsx("w-fit flex items-center gap-2 rounded-md bg-[var(--accent)] text-[var(--background)] px-6 py-3 font-semibold shadow-[#3e2bbd]/50 shadow-lg group", className)}>
            {children}
            <IoArrowForwardOutline className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"/>    
        </Link>
    )
}