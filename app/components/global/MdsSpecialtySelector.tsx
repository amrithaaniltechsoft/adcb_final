"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";

const mdsSpecialties = [
  { name: "Conservative Dentistry", slug: "conservative-dentistry" },
  { name: "Orthodontics", slug: "orthodontics" },
  { name: "Prosthodontics", slug: "prosthodontics" },
  { name: "Oral Surgery", slug: "oral-surgery" },
  { name: "Periodontology", slug: "periodontology" },
  { name: "Pediatric Dentistry", slug: "pediatric-dentistry" },
  { name: "Oral Medicine", slug: "oral-medicine" },
  { name: "Oral Pathology", slug: "oral-pathology" },
  { name: "Public Health Dentistry", slug: "public-health-dentistry" },
];

export default function MdsSpecialtySelector() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const match = pathname.match(/^\/mds(?:\/([^/]+))?$/);
  if (!match) return null;

  const currentSlug = match[1] ?? null;
  const currentSpecialty = mdsSpecialties.find((s) => s.slug === currentSlug);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Button
        onClick={() => setOpen(!open)}
        variant="ghost"
        className="rounded-full flex items-center gap-1.5 sm:gap-2 border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-300 text-white hover:shadow-white/5 active:scale-95 max-sm:h-8 max-sm:!py-0 max-sm:!px-3 text-sm max-sm:max-w-[130px] min-w-0"
      >
        <svg
          className="w-4 h-4 text-white hidden sm:block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <span className="truncate min-w-0">
          <span className="hidden sm:inline">{currentSpecialty ? `MDS · ${currentSpecialty.name}` : "MDS · Select Speciality"}</span>
          <span className="inline sm:hidden">{currentSpecialty ? currentSpecialty.name : "Select Speciality"}</span>
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </Button>

      {open && (
        <div className="absolute right-0 pt-3 w-56 z-50">
          <div className="rounded-md border border-white/15 bg-black/85 backdrop-blur-md shadow-2xl overflow-hidden transform transition-all duration-300">
            <div className="py-1">
              {mdsSpecialties.map((specialty) => {
                const isActive = specialty.slug === currentSlug;
                return (
                  <Link
                    key={specialty.slug}
                    href={`/mds/${specialty.slug}`}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center justify-between gap-3 px-5 py-3.5 text-sm font-medium transition-colors border-b border-white/5 ${
                      isActive
                        ? "text-[#ED1C24] bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 transition-colors duration-300 ${isActive ? "text-[#ED1C24]" : "text-white/50 group-hover:text-[#ED1C24]"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      {specialty.name}
                    </span>
                    {isActive && (
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
