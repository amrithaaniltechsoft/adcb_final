"use client";

import { useState } from "react";
import Image from "next/image";

export interface SpecialtyItem {
  title: string;
  image: string;
  highlights: string[];
}

interface ClinicalAreasSpotlightProps {
  specialties: SpecialtyItem[];
}

export default function ClinicalAreasSpotlight({ specialties }: ClinicalAreasSpotlightProps) {
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden px-4 md:px-12">
      <div className="max-w-[1200px] mx-auto z-10 relative">
        <div className={`grid gap-4 sm:gap-12 items-start ${
          specialties.length === 1
            ? "grid-cols-1 max-w-[700px] mx-auto w-full"
            : "grid-cols-2"
        }`}>
          {specialties.map((item, index) => {
            const isActive = activeCard === index;
            return (
              <div
                key={item.title}
                onMouseEnter={() => setActiveCard(index)}
                className={`relative flex flex-col cursor-pointer transition-all duration-700 ease-in-out group ${
                  isActive ? "opacity-100 scale-[1.01]" : "opacity-60 scale-100"
                }`}
              >
                {/* Image Container above content, expands downwards on hover/active */}
                <div
                  className={`relative w-full overflow-hidden transition-all duration-700 ease-in-out select-none pointer-events-none ${
                    isActive
                      ? "h-[160px] sm:h-[280px] md:h-[400px]"
                      : "h-[120px] sm:h-[200px] md:h-[300px]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle top/bottom image gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
                </div>

                {/* Card Content below the image */}
                <div className="pt-4 sm:pt-8 flex flex-col text-white">
                  <h3 className="font-[var(--font-outfit)] text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-8">
                    {item.title}
                  </h3>

                  {/* Highlights */}
                  <ul className="space-y-2 sm:space-y-4">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 sm:gap-4 text-xs sm:text-sm md:text-base lg:text-lg text-white/75 font-medium leading-relaxed"
                      >
                        {/* Accent Tick shape bullet point */}
                        <span className="text-[var(--color-accent)] font-bold flex-shrink-0 text-xs sm:text-base mt-0.5">✓</span>
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
    </section>
  );
}
