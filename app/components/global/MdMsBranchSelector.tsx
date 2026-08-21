"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";

const mdmsStates = [
  { name: "Kerala", slug: "kerala" },
  { name: "Karnataka", slug: "karnataka" },
  { name: "Tamil Nadu", slug: "tamil-nadu" },
  { name: "Andhra Pradesh", slug: "andhra-pradesh" },
  { name: "Telangana", slug: "telangana" },
  { name: "Uttar Pradesh", slug: "uttar-pradesh" },
  { name: "Bihar", slug: "bihar" },
  { name: "Chhattisgarh", slug: "chhattisgarh" },
  { name: "Punjab", slug: "punjab" },
  { name: "Haryana", slug: "haryana" },
  { name: "Pondicherry", slug: "pondicherry" },
  { name: "West Bengal", slug: "west-bengal" },
  { name: "Himachal Pradesh", slug: "himachal-pradesh" },
  { name: "Uttarakhand", slug: "uttarakhand" },
];

export default function MdMsBranchSelector() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const match = pathname.match(/^\/md-ms(?:\/([^/]+))?$/);
  if (!match) return null;

  const currentSlug = match[1] ?? null;
  const currentState = mdmsStates.find((s) => s.slug === currentSlug);

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="truncate min-w-0">
          <span className="hidden sm:inline">{currentState ? `MD/MS · ${currentState.name}` : "MD/MS · Select State"}</span>
          <span className="inline sm:hidden">{currentState ? currentState.name : "Select State"}</span>
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
              {mdmsStates.map((state) => {
                const isActive = state.slug === currentSlug;
                return (
                  <Link
                    key={state.slug}
                    href={`/md-ms/${state.slug}`}
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {state.name}
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
