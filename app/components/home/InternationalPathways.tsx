"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

export interface CountryItem {
  name: string;
  flag: string;
  image: string;
  highlights: string[];
}

export interface RecommendationData {
  title: string;
  description: string;
  bullets: string[];
  buttonText: string;
  buttonHref: string;
  backgroundImageSrc: string;
}

interface InternationalPathwaysProps {
  title: string;
  titleHighlight: string;
  countries: CountryItem[];
  recommendation: RecommendationData;
}

export default function InternationalPathways({
  title,
  titleHighlight,
  countries,
  recommendation,
}: InternationalPathwaysProps) {
  const [activeIndex, setActiveIndex] = useState<number>(countries.length);
  const [cursorType, setCursorType] = useState<"left" | "right">("right");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const extendedCountries = [...countries, ...countries, ...countries];

  const nextSlide = () => {
    if (!isTransitioning) return;
    setActiveIndex((prev) => prev + 1);
  };
  const prevSlide = () => {
    if (!isTransitioning) return;
    setActiveIndex((prev) => prev - 1);
  };

  useEffect(() => {
    // Seamless infinite loop jump
    if (activeIndex >= countries.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(activeIndex - countries.length);
      }, 700); // matches transition speed
      return () => clearTimeout(timer);
    }
    if (activeIndex < countries.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(activeIndex + countries.length);
      }, 700); // matches transition speed
      return () => clearTimeout(timer);
    }
  }, [activeIndex, countries.length]);

  useEffect(() => {
    if (!isTransitioning) {
      // Re-enable transitions on the next browser frame
      const frame = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning]);

  const handleCarouselClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    const rect = carouselRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const midpoint = rect.width / 2;
    if (clickX < midpoint) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    const rect = carouselRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const midpoint = rect.width / 2;
    setCursorType(mouseX < midpoint ? "left" : "right");
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <section
        id="international"
        className="relative py-16 md:py-24 bg-black overflow-hidden px-4 md:px-12"
      >
        <div className="max-w-[1440px] mx-auto z-10 relative">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/60 font-medium mb-3">
              <span className="w-8 h-[1px] bg-white/20" />
              Global Scope
              <span className="w-8 h-[1px] bg-white/20" />
            </span>
            <h2 className="font-[var(--font-outfit)] text-4xl md:text-5xl font-light tracking-tight leading-tight text-white">
              {title}
              <span className="font-semibold text-white"> {titleHighlight}</span>
            </h2>
          </div>

          <div
            ref={carouselRef}
            onClick={handleCarouselClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative w-full overflow-hidden py-10 select-none ${
              isHovered ? "lg:cursor-none" : ""
            }`}
          >
            {/* Custom Cursor Button UI */}
            {isHovered && typeof window !== "undefined" && (
              <div
                className="fixed pointer-events-none z-50 w-16 h-16 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg shadow-2xl transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${mousePos.x}px`,
                  top: `${mousePos.y}px`,
                }}
              >
                {cursorType === "left" ? "←" : "→"}
              </div>
            )}

            <div
              className={`flex gap-8 ${
                isTransitioning ? "transition-transform duration-700 ease-in-out" : "transition-none"
              }`}
              style={{
                transform: `translateX(calc(50% - 190px - ${activeIndex * 412}px))`
              }}
            >
              {extendedCountries.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={`${item.name}-${index}`}
                    onClick={(e) => {
                      // Prevent trigger if they click the card itself to switch index directly
                      e.stopPropagation();
                      if (!isTransitioning) return;
                      setActiveIndex(index);
                    }}
                    className={`flex-shrink-0 w-[340px] md:w-[380px] flex flex-col border-0 rounded-none cursor-pointer transition-all duration-700 ease-in-out group ${
                      isActive ? "opacity-100 scale-[1.01]" : "opacity-40 scale-100"
                    }`}
                  >
                    {/* Image container above content, active card has more height */}
                    <div
                      className={`relative w-full overflow-hidden transition-all duration-700 ease-in-out select-none pointer-events-none ${
                        isActive
                          ? "h-[200px] md:h-[280px]"
                          : "h-[140px] md:h-[200px]"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
                    </div>

                    {/* Content below the image */}
                    <div className="pt-6 flex flex-col text-white">
                      <h3 className="font-[var(--font-outfit)] text-2xl font-bold tracking-tight mb-4 flex items-center gap-3">
                        <span className="relative w-8 h-6 overflow-hidden rounded-none flex-shrink-0">
                          <Image src={item.flag} alt={item.name} fill className="object-cover" />
                        </span>
                        {item.name}
                      </h3>

                      <ul className="space-y-3">
                        {item.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-xs md:text-sm text-white/70 font-medium leading-relaxed"
                          >
                            <span className="text-white/40 font-semibold flex-shrink-0 text-[13px] mt-0.5">✓</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-4">
            {countries.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isTransitioning) return;
                  setActiveIndex(countries.length + idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex % countries.length === idx ? "bg-white w-4" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation Full-width Banner */}
      <section className="relative w-full py-20 bg-black overflow-hidden flex items-center justify-center border-t border-white/5">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={recommendation.backgroundImageSrc}
            alt={recommendation.title}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        </div>

        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 text-white">
          <div>
            <h4 className="font-[var(--font-outfit)] text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              {recommendation.title}
            </h4>
            <p className="text-white/90 text-sm leading-relaxed max-w-2xl">
              {recommendation.description}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-white/80 mt-4">
              {recommendation.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-white/60">✓</span> {b}
                </li>
              ))}
            </ul>
          </div>
          <Button href={recommendation.buttonHref} variant="white" className="flex-shrink-0 rounded-none px-10 py-4">
            {recommendation.buttonText}
          </Button>
        </div>
      </section>
    </>
  );
}