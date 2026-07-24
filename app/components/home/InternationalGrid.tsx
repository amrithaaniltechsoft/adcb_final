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

interface InternationalGridProps {
  title: string;
  titleHighlight: string;
  countries: CountryItem[];
  recommendation: RecommendationData;
}

export default function InternationalGrid({
  title,
  titleHighlight,
  countries,
  recommendation,
}: InternationalGridProps) {
  return (
    <div className="bg-black text-white">
      {/* Grid Section */}
      <section className="relative py-20 px-4 md:px-12 bg-black">
        <div className="max-w-[1440px] mx-auto z-10 relative">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/60 font-medium mb-3">
              <span className="w-8 h-[1px] bg-white/20" />
              GLOBAL SCOPE
              <span className="w-8 h-[1px] bg-white/20" />
            </span>
            <h2 className="font-[var(--font-outfit)] text-4xl md:text-5xl font-light tracking-tight leading-tight text-white">
              {title}
              <span className="font-semibold text-white"> {titleHighlight}</span>
            </h2>
          </div>

          {/* Grid Layout instead of Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {countries.map((item) => (
              <div
                key={item.name}
                className="flex flex-col border-0 rounded-none group bg-transparent transition-all duration-300"
              >
                {/* Image container above content */}
                <div className="relative w-full h-[240px] overflow-hidden bg-zinc-950">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </div>

                {/* Content below the image */}
                <div className="pt-6 flex flex-col text-white">
                  <h3 className="font-[var(--font-outfit)] text-2xl font-bold tracking-tight mb-4 flex items-center gap-3">
                    <span className="relative w-8 h-6 overflow-hidden rounded-none flex-shrink-0">
                      <Image
                        src={item.flag}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </span>
                    {item.name}
                  </h3>

                  <ul className="space-y-3 flex-grow">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-xs md:text-sm text-zinc-400 font-medium leading-relaxed"
                      >
                        <span className="text-white/40 font-semibold flex-shrink-0 text-[13px] mt-0.5">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation Full-width Banner */}
      <section className="relative w-full py-20 bg-black overflow-hidden flex items-center justify-center border-t border-zinc-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={recommendation.backgroundImageSrc}
            alt={recommendation.title}
            fill
            sizes="100vw"
            className="object-cover object-center animate-slow-zoom"
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
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-zinc-300 mt-4">
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
    </div>
  );
}
