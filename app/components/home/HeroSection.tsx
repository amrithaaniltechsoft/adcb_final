"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "../ui/Button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

const CAROUSEL_CARDS = [
  {
    id: 1,
    title: "NEET PG Counselling Overview",
    desc: "50% AIQ seats in government medical colleges across India through MCC counselling",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
      </svg>
    )
  },
  {
    id: 2,
    title: "State Counselling",
    desc: "50% state quota seats in government and 100% private colleges of your domicile state",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Deemed Universities",
    desc: "Premium deemed medical universities with world-class infrastructure",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V11M12 21V11M5 21V11M3 21h18M3 7l9-4 9 4M4 11h16M4 7h16" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Management Quota",
    desc: "Direct admission in private medical colleges under management quota",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="22" x2="9" y2="16" />
        <line x1="15" y1="22" x2="15" y2="16" />
        <line x1="9" y1="16" x2="15" y2="16" />
        <path d="M8 6h2M14 6h2M8 10h2M14 10h2" />
      </svg>
    )
  },
  {
    id: 5,
    title: "NRI Quota",
    desc: "Special NRI sponsored seats in private and deemed medical colleges",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L14 19v-5.5l8 2.5z" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Choice Filling Guidance",
    desc: "Strategic choice filling to maximize your chances based on rank analysis",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <line x1="9" y1="6" x2="20" y2="6" />
        <line x1="9" y1="12" x2="20" y2="12" />
        <line x1="9" y1="18" x2="20" y2="18" />
        <circle cx="4" cy="6" r="1" />
        <circle cx="4" cy="12" r="1" />
        <circle cx="4" cy="18" r="1" />
      </svg>
    )
  },
  {
    id: 7,
    title: "Seat Allotment Support",
    desc: "Complete assistance during seat allotment rounds and upgradation",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18v3M18 18v3M4 10h16M5 10V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5M5 10v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
      </svg>
    )
  },
  {
    id: 8,
    title: "Reporting & Admission",
    desc: "End-to-end support from reporting to final admission formalities",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    )
  }
];

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

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="hero" className="relative min-h-screen lg:h-[105vh] w-full bg-[#030303] overflow-hidden flex flex-col justify-between">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover animate-slow-zoom"
          src="/hero-sec/adcb-hero3.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Bottom Right Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-20 w-full flex-grow flex flex-col justify-end pb-8 pt-32">

        {/* Title above Carousel */}
        <div className={`transition-all duration-1000 delay-200 mb-6 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* <span className="text-xs uppercase tracking-[0.2em] text-[#c0a062] font-bold block mb-1">Counselling & Pathways</span> */}
          <h2 className="font-[var(--font-outfit)] text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide">
            NEET PG Counselling <br /> & Admission Support
          </h2>
        </div>

        {/* Bottom Row: Embla Carousel */}
        <div
          className={`w-full transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4 h-[280px] items-end">
              {CAROUSEL_CARDS.map((card, idx) => {
                const isRed = idx % 2 === 0;
                return (
                  <div
                    key={card.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4 min-w-0 flex relative h-[270px]"
                  >
                    <div className="absolute bottom-0 left-4 right-0 group bg-black border-0 transition-all duration-300 flex flex-col justify-between h-[220px] hover:h-[260px] shadow-[0_8px_30px_rgba(0,0,0,0.5)] z-10 hover:z-20">

                      {/* Full-width header behind icon only */}
                      <div className={`w-full h-16 group-hover:h-24 transition-all duration-300 ease-in-out flex items-center px-6 relative overflow-hidden ${isRed ? 'bg-[#eb2525]' : 'bg-[#c0a062]'}`}>
                        {/* Wavy pattern background */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                          <svg className="w-full h-full object-cover" viewBox="0 0 1440 320" preserveAspectRatio="none">
                            <path fill="rgba(255,255,255,0.5)" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                          </svg>
                        </div>
                        {/* Icon */}
                        <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                          {card.icon}
                        </div>
                      </div>

                      {/* Content Section with padding aligned left */}
                      <div className="p-6 pt-4 flex-grow flex flex-col justify-start items-start text-left w-full overflow-hidden">
                        <h3 className="font-[var(--font-outfit)] text-white text-base font-bold mb-2 tracking-wide">
                          {card.title}
                        </h3>
                        <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed">
                          {card.desc}
                        </p>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Indicators */}
          {scrollSnaps.length > 0 && (
            <div className="flex justify-center gap-2 mt-6">
              {scrollSnaps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === idx ? "bg-[#eb2525] w-6" : "bg-white/20 hover:bg-white/40 w-1.5"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
