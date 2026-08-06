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
  descriptionAfter?: string;
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

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

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
        className="relative py-24 md:py-32 bg-black overflow-hidden px-4 md:px-12"
      >
        <div className="max-w-[1440px] mx-auto z-10 relative">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/60 font-medium mb-4">
              <span className="w-10 h-[1px] bg-white/20" />
              Global Scope
              <span className="w-10 h-[1px] bg-white/20" />
            </span>
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-white">
              {title}
              <span className="font-semibold text-white"> {titleHighlight}</span>
            </h2>
          </div>

          <style>{`
            #international-carousel-track {
              --slide-half-width: 140px;
              --slide-total-width: 296px;
            }
            @media (min-width: 640px) {
              #international-carousel-track {
                --slide-half-width: 220px;
                --slide-total-width: 480px;
              }
            }
            @media (min-width: 768px) {
              #international-carousel-track {
                --slide-half-width: 250px;
                --slide-total-width: 540px;
              }
            }
          `}</style>

          <div
            ref={carouselRef}
            onClick={handleCarouselClick}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
              id="international-carousel-track"
              className={`flex gap-4 sm:gap-10 ${
                isTransitioning ? "transition-transform duration-700 ease-in-out" : "transition-none"
              }`}
              style={{
                transform: `translateX(calc(50% - var(--slide-half-width) - ${activeIndex} * var(--slide-total-width)))`
              } as React.CSSProperties}
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
                    className={`flex-shrink-0 w-[280px] sm:w-[440px] md:w-[500px] flex flex-col border-0 rounded-none cursor-pointer transition-all duration-700 ease-in-out group ${
                      isActive ? "opacity-100 scale-[1.01]" : "opacity-40 scale-100"
                    }`}
                  >
                    {/* Image container above content, active card has more height */}
                    <div
                      className={`relative w-full overflow-hidden transition-all duration-700 ease-in-out select-none pointer-events-none ${
                        isActive
                          ? "h-[180px] sm:h-[280px] md:h-[300px]"
                          : "h-[130px] sm:h-[200px] md:h-[220px]"
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
                    <div className="pt-4 sm:pt-8 flex flex-col text-white">
                      <h3 className="font-[var(--font-outfit)] text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
                        <span className="relative w-8 h-6 sm:w-11 sm:h-8 overflow-hidden rounded-none flex-shrink-0">
                          <Image src={item.flag} alt={item.name} fill className="object-cover" sizes="44px" />
                        </span>
                        {item.name}
                      </h3>

                      <ul className="space-y-2 sm:space-y-4">
                        {item.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 sm:gap-4 text-xs sm:text-sm md:text-base lg:text-lg text-white/75 font-medium leading-relaxed"
                          >
                            <span className="text-[var(--color-accent)] font-bold flex-shrink-0 text-sm mt-0.5">✓</span>
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
          <div className="flex justify-center gap-3 mt-8">
            {countries.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isTransitioning) return;
                  setActiveIndex(countries.length + idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex % countries.length === idx ? "bg-white w-6" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation Full-width Banner */}
      <section className="relative w-full py-28 md:py-36 bg-black overflow-hidden flex items-center justify-center border-t border-white/5">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={recommendation.backgroundImageSrc}
            alt={recommendation.title}
            fill
            sizes="100vw"
            className="object-cover object-center animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        </div>

        <div className="relative z-10 max-w-[1300px] w-full mx-auto px-8 md:px-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 text-white">
          <div className="flex-1">
            <h4 className="font-[var(--font-outfit)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              {recommendation.title}
            </h4>
            {recommendation.description && (
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
                {recommendation.description}
              </p>
            )}
            {recommendation.bullets && recommendation.bullets.length > 0 && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-lg text-white/85 mb-6">
                {recommendation.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {recommendation.descriptionAfter && (
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mt-5">
                {recommendation.descriptionAfter}
              </p>
            )}
          </div>
          <Button href={recommendation.buttonHref} variant="white" className="flex-shrink-0 rounded-none px-12 py-5 text-base">
            {recommendation.buttonText}
          </Button>
        </div>
      </section>
    </>
  );
}