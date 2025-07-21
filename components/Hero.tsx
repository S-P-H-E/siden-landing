import Video from "./Video";

export default function Hero() {
    return (
        <div className="h-[100dvh] pt-35 flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 border border-[#edeff3] shadow-lg rounded-full px-3 py-2">
                <div className="flex -space-x-4">
                    <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://i.pravatar.cc/100?img=1"
                    alt="User 1"
                    />
                    <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://i.pravatar.cc/100?img=2"
                    alt="User 2"
                    />
                    <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://i.pravatar.cc/100?img=3"
                    alt="User 3"
                    />
                </div>
                <p>400+ users already signed up</p>
            </div>
            <h1 className="text-7xl font-bold text-center w-[800px]">Siden, your smart AI employee on demand.</h1>
            <p className="text-[#3b3b3c]">The most unfair advantage in business. Siden allows humans and AI to work together.</p>
            <div className="space-x-4">
                <button className="cursor-pointer bg-black text-white rounded-full px-6 py-3">
                    Join Waitlist
                </button>
            </div>
            <Video />
          </div>
    )
}