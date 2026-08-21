"use client";

import { useRef, useState } from "react";

interface CustomVideoPlayerProps {
  videoSrc?: string;
  videoTitle?: string;
  badgeText?: string;
  showBadge?: boolean;
}

export default function CustomVideoPlayer({
  videoSrc = "/banner/md.mp4",
  videoTitle = "ADCB Consultancy Campus Tour",
  badgeText = "Watch Campus Tour & Counselling Overview",
  showBadge = false,
}: CustomVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration;
    if (dur) {
      setProgress((current / dur) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(formatTime(videoRef.current.duration));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-24 px-6 lg:px-8 md:py-36 bg-black text-white flex-col justify-center">
      <div className="max-w-[1200px] mx-auto w-full">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleTogglePlay}
          className="relative w-full aspect-video overflow-hidden bg-black group cursor-none rounded-none shadow-none border-none"
        >
          {/* Video element */}
          <video
            ref={videoRef}
            src={videoSrc}
            loop
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            className="w-full h-full object-cover"
          />

          {/* Custom Cursor / Play Button */}
          {isHovered && (
            <div
              style={{
                left: `${cursorPos.x}px`,
                top: `${cursorPos.y}px`,
                transform: "translate(-50%, -50%)",
              }}
              className="pointer-events-none absolute z-30 flex h-16 w-16 items-center justify-center rounded-full bg-[#ED1C24] text-white shadow-lg transition-transform duration-75 ease-out scale-100"
            >
              {isPlaying ? (
                // Pause Icon
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                // Play Icon
                <svg className="h-6 w-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          )}

          {/* Static UI Overlay (gradient) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />

          {/* Custom Video Player UI Overlay (visible when paused) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col justify-between bg-black/45 z-20 transition-opacity duration-300">
              {/* Top Bar or Title */}
              <div className="p-6 text-lg font-semibold tracking-wide text-white/95 font-[var(--font-outfit)]">
                {videoTitle}
              </div>

              {/* Centered Play Button (mobile only) */}
              <div className="absolute inset-0 flex md:hidden items-center justify-center">
                <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#ED1C24] text-white shadow-2xl transition-transform duration-300 scale-100 hover:scale-110">
                  <svg className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Bottom Custom Control Bar */}
              <div className="p-6 bg-gradient-to-t from-black/85 to-transparent flex flex-col gap-3 z-30">
                <div className="flex items-center justify-between text-sm font-medium text-white/85">
                  <span className="text-xs">{currentTime}</span>
                  <span className="text-xs">{duration}</span>
                </div>
                {/* Progress bar line */}
                <div className="w-full h-1 bg-white/25 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#ED1C24]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Floating badge (hidden when player UI is shown) */}
          {isPlaying && showBadge && (
            <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-[#ED1C24] animate-pulse" />
              {badgeText}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
