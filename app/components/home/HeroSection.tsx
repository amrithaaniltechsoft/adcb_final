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

const DNB_SPECIALTIES = [
  "ANAESTHESIOLOGY",
  "ANATOMY",
  "BIOCHEMISTRY",
  "COMMUNITY MEDICINE",
  "CARDIO VASCULAR & THORACIC SURGERY (DIRECT 6 YEARS COURSE)",
  "DERMATOLOGY AND VENEREOLOGY AND LEPROSY",
  "EMERGENCY MEDICINE",
  "FAMILY MEDICINE",
  "FORENSIC MEDICINE",
  "GENERAL MEDICINE",
  "GENERAL SURGERY",
  "HOSPITAL ADMINISTRATION",
  "IMMUNO-HAEMATOLOGY AND BLOOD TRANSFUSION",
  "MICROBIOLOGY",
  "NUCLEAR MEDICINE",
  "NEURO SURGERY (DIRECT 6 YEARS COURSE)",
  "OPHTHALMOLOGY",
  "ORTHOPAEDICS",
  "OBSTETRICS AND GYNAECOLOGY",
  "OTORHINOLARYNGOLOGY (E.N.T.)",
  "PAEDIATRICS",
  "PATHOLOGY",
  "PHARMACOLOGY",
  "PHYSICAL MED. AND REHABILITATION",
  "PHYSIOLOGY",
  "PSYCHIATRY",
  "PAEDIATRIC SURGERY (DIRECT 6 YEARS COURSE)",
  "PALLIATIVE MEDICINE",
  "PLASTIC & RECONSTRUCTIVE SURGERY (DIRECT 6 YEARS COURSE)",
  "RADIATION ONCOLOGY",
  "RADIO-DIAGNOSIS",
  "RESPIRATORY MEDICINE",
  "TUBERCULOSIS AND CHEST DISEASES",
];

interface HeroSectionProps {
  specialties?: string[];
}

export default function HeroSection({ specialties }: HeroSectionProps) {
  const dnbSpecialties = specialties?.length ? specialties : DNB_SPECIALTIES;
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
          src="/hero-sec/adcb-hero2.mp4"
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
            DNB Specialties <br /> & Admission Support
          </h2>
        </div>

        {/* Bottom Row: Embla Carousel */}
        <div
          className={`w-full transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4 h-[180px] items-end">
              {dnbSpecialties.map((specialty, idx) => {
                const isRed = idx % 2 === 0;
                return (
                  <div
                    key={specialty}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4 min-w-0 flex relative h-[175px]"
                  >
                    <div
                      className={`group absolute bottom-0 left-4 right-0 bg-gradient-to-b from-[#141414] to-black border transition-all duration-500 ease-out flex flex-col justify-between h-[170px] hover:h-[190px] hover:-translate-y-1.5 z-10 hover:z-20 overflow-hidden ${
                        isRed
                          ? "border-white/10 hover:border-[#eb2525]/60 hover:shadow-[0_18px_45px_rgba(235,37,37,0.35)]"
                          : "border-white/10 hover:border-[#c0a062]/60 hover:shadow-[0_18px_45px_rgba(192,160,98,0.35)]"
                      }`}
                    >
                      {/* Corner glow */}
                      <div
                        className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl opacity-15 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none ${
                          isRed ? "bg-[#eb2525]" : "bg-[#c0a062]"
                        }`}
                      />

                      {/* Header band */}
                      <div
                        className={`relative w-full h-14 group-hover:h-20 transition-all duration-500 ease-in-out flex items-center justify-between px-6 overflow-hidden bg-gradient-to-r ${
                          isRed ? "from-[#eb2525] to-[#9e1414]" : "from-[#c0a062] to-[#8a6f33]"
                        }`}
                      >
                        {/* Wavy pattern background */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                          <svg className="w-full h-full object-cover" viewBox="0 0 1440 320" preserveAspectRatio="none">
                            <path fill="rgba(255,255,255,0.5)" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                          </svg>
                        </div>
                        {/* Shine sweep */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                        {/* Medical cross */}
                        <svg
                          className="relative z-10 w-5 h-5 text-white/90 group-hover:rotate-90 group-hover:scale-110 transition-transform duration-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" />
                        </svg>
                        {/* DNB tag */}
                        <span className="relative z-10 text-[10px] font-bold tracking-[0.3em] text-white/80 uppercase">
                          DNB
                        </span>
                      </div>

                      {/* Content Section */}
                      <div className="relative px-5 pt-3 pb-4 flex-grow flex flex-col justify-start items-start text-left w-full overflow-hidden">
                        <h3 className="font-[var(--font-outfit)] text-white text-sm md:text-base font-bold tracking-wide leading-snug">
                          {specialty}
                        </h3>
                        {/* Accent underline */}
                        <div
                          className={`mt-auto h-[2px] w-8 group-hover:w-20 transition-all duration-500 ease-out rounded-full ${
                            isRed ? "bg-[#eb2525]" : "bg-[#c0a062]"
                          }`}
                        />
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
