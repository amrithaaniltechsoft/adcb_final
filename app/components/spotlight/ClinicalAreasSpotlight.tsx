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
    <section className="relative py-16 bg-black overflow-hidden px-4 md:px-12">
      <div className="max-w-[900px] mx-auto z-10 relative">
        <div className={`grid grid-cols-1 gap-8 items-start ${
          specialties.length === 1
            ? "max-w-[450px] mx-auto w-full"
            : "md:grid-cols-2"
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
                      ? "h-[200px] md:h-[280px]"
                      : "h-[140px] md:h-[200px]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle top/bottom image gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
                </div>

                {/* Card Content below the image */}
                <div className="pt-6 flex flex-col text-white">
                  <h3 className="font-[var(--font-outfit)] text-2xl md:text-3xl font-bold tracking-tight mb-6">
                    {item.title}
                  </h3>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-xs md:text-sm text-white/70 font-medium leading-relaxed"
                      >
                        {/* Gray/White Tick shape bullet point */}
                        <span className="text-white/40 font-semibold flex-shrink-0 text-[13px]">✓</span>
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
