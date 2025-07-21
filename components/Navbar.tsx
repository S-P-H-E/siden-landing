import Image from "next/image";

export default function Navbar() {
    return (
        <div className="flex justify-between w-full p-10 absolute">
            <div className="w-1/2 flex items-center gap-3">
                <Image src="/Logo.svg" alt="Siden Logo" width={25} height={25}/>
                <h1 className="text-2xl font-bold select-none">Siden</h1>
            </div>
            <div className="rounded-full bg-black text-white px-4 py-2">Test</div>
        </div>
    )
}