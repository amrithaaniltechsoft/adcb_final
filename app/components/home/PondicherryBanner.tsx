"use client";

import { useState, useEffect, useRef } from "react";

interface BannerProps {
  id?: string;
  videoSrc?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function PondicherryBanner({
  id = "pondicherry-banner",
  videoSrc = "/banner/mbbs.mp4",
  title = "Affordable MBBS Seats In Pondicherry",
  description = "Secure your MBBS seat in premier medical colleges in Pondicherry with highly affordable fee structures.",
  buttonText = "Check Seat Availability",
  buttonHref = "#enquiry"
}: BannerProps = {}) {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      if (!video) return;
      if (video.readyState >= 1) {
        video.currentTime = 0;
        video.play().catch(() => { });
      } else {
        const handleMetadata = () => {
          video.currentTime = 0;
          video.play().catch(() => { });
          video.removeEventListener("loadedmetadata", handleMetadata);
        };
        video.addEventListener("loadedmetadata", handleMetadata);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          playVideo();
        } else {
          // Mute and pause the video when the banner is scrolled out of view (before/after)
          if (video) {
            video.pause();
            video.muted = true;
            setIsMuted(true);
          }
        }
      },
      { threshold: 0 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      observer.disconnect();
      if (video) {
        video.removeEventListener("loadedmetadata", playVideo);
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <section ref={bannerRef} id={id} className="relative h-[95vh] w-full bg-[#030303] overflow-hidden">
      {/* Banner Container */}
      <div className="relative w-full h-full flex items-end">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Bottom Right Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Audio Controller - Floating UI */}
        <div className="absolute top-6 right-8 lg:right-20 z-20 flex items-center gap-3">
          {/* {isMuted && (
            <span className="hidden sm:inline-block text-[11px] font-semibold text-white/80 uppercase tracking-widest bg-black/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md animate-pulse">
              Click to Enable Audio
            </span>
          )} */}
          <button
            onClick={toggleMute}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-black/50 text-white hover:bg-[#ED1C24] hover:border-[#ED1C24] transition-all duration-300 backdrop-blur-md focus:outline-none cursor-pointer"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-20 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-12 md:pb-24 gap-6">
            {/* Left: Title */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-xl md:max-w-2xl">
                {title}
              </h2>
            </div>

            {/* Right: Description & CTA Button */}
            <div
              className={`text-left md:text-right transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <p className="text-white/70 font-light max-w-sm md:ml-auto">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
