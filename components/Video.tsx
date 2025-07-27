'use client'
import { useRef, useState, useEffect } from 'react'
import { IoIosPause } from 'react-icons/io'
import { FaPlay } from 'react-icons/fa'

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasUserStarted, setHasUserStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(true)

  useEffect(() => {
    if (!isPaused && showPlayButton) {
      const timeout = setTimeout(() => setShowPlayButton(false), 3000)
      return () => clearTimeout(timeout)
    }
  }, [isPaused, showPlayButton])

  const handlePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (!hasUserStarted) {
      video.currentTime = 0
      video.muted = false
      video.loop = true
      setHasUserStarted(true)
    }

    video.play().then(() => {
      setIsPaused(false)
    }).catch(() => {})
  }

  const handlePause = () => {
    const video = videoRef.current
    if (!video) return

    video.pause()
    setIsPaused(true)
    setShowPlayButton(true)
  }
  return (
        <div className="relative w-full max-w-[400px] md:max-w-[700px] rounded-2xl shadow-black/70 shadow-xl">
            {/* VIDEO */}
            <video
            ref={videoRef}
            src="/video.mp4"
            className={`w-full h-full rounded-2xl object-cover transition-all duration-500 ease-in-out ${
                !isPaused && hasUserStarted ? 'blur-0' : 'blur-0'
            }`}
            muted={!hasUserStarted}
            loop
            autoPlay
            playsInline
            onCanPlayThrough={() => setIsLoaded(true)}
            />

            {/* LOADER */}
            {isPaused && showPlayButton && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20 rounded-2xl">
                    {/* <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" /> */}
                </div>
            )}

            {/* PLAY BUTTON */}
            {isPaused && showPlayButton && (
                <div className="absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-500">
                    <button onClick={handlePlay} aria-label="Play video">
                    <div className="cursor-pointer text-[var(--background)] shadow-xl md:hover:scale-110 duration-500 rounded-xl flex items-center gap-2">
                        <FaPlay size={35}/>
                    </div>
                    </button>
                </div>
            )}

            {/* PAUSE BUTTON */}
            {!isPaused && hasUserStarted && (
            <div className="absolute top-4 right-4 z-30">
                <button onClick={handlePause} aria-label="Pause video">
                <div className="cursor-pointer shadow-xl flex border border-[#222224] text-[var(--background)] bg-blur px-3 py-2 rounded-xl backdrop-blur-sm transition">
                    <IoIosPause className="text-2xl" />
                    Pause
                </div>
                </button>
            </div>
            )}
        </div>
  )
}