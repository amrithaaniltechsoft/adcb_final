"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "../ui/Button";

const useRotatingText = (items: string[], interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setIsAnimating(false);
      }, 500); // Half a second for the exit animation
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return { currentText: items[currentIndex], isAnimating };
};

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroTitles = useMemo(
    () => [
      "Shape Your Medical Career With Precision",
      "Your Gateway to Premier Medical Schools",
      "Expert Guidance for Global Admissions",
    ],
    []
  );
  const { currentText, isAnimating } = useRotatingText(heroTitles);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative h-[95vh] w-full bg-[#030303] overflow-hidden">
      {/* Hero Container */}
      <div className="relative w-full h-full flex items-end">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            src="/hero-sec/adcb-hero2.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Bottom Right Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-20 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-12 md:pb-24 gap-6">
            {/* Left: Title */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <h1
                className={`font-[var(--font-outfit)] text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-xl md:max-w-2xl transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  }`}
              >
                {currentText}
              </h1>
            </div>

            {/* Right: Description & CTA Button */}
            <div
              className={`text-left md:text-right transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <p className="text-white/70 font-light max-w-sm mb-6 md:ml-auto">
                Expert admission guidance for premier medical, dental, and management programs worldwide.
              </p>
              <Button href="#courses" size="md">
                Explore Our Programs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
