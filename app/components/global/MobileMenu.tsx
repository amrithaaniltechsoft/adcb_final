"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../ui/Button";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  navLinks: NavLink[];
}

const courseDetails: Record<string, { video: string; image: string; href: string; title: string }> = {
  MBBS: {
    video: "/banner/mbbs.mp4",
    image: "/courses/mbbs.jpg",
    href: "/mbbs",
    title: "Bachelor of Medicine & Surgery",
  },
  MDS: {
    video: "/banner/md.mp4",
    image: "/courses/mds.jpg",
    href: "/mds",
    title: "Master of Dental Surgery",
  },
  MD: {
    video: "/banner/md.mp4",
    image: "/courses/md-ms.jpg",
    href: "/#international",
    title: "Doctor of Medicine",
  },
  MS: {
    video: "/banner/md.mp4",
    image: "/courses/md-ms.jpg",
    href: "/#ms",
    title: "Master of Surgery",
  },
  DND: {
    video: "/banner/b1.mp4",
    image: "/courses/mttm.jpg",
    href: "/#dnd",
    title: "Diplomate of National Board",
  },
};

export default function MobileMenu({
  mobileOpen,
  setMobileOpen,
  navLinks,
}: MobileMenuProps) {
  const [activeCourse, setActiveCourse] = useState<string | null>(null);

  useEffect(() => {
    if (!mobileOpen) {
      setActiveCourse(null);
    }
  }, [mobileOpen]);

  const handleLinkInteract = (label: string) => {
    // Only courses trigger backgrounds and details
    if (courseDetails[label]) {
      setActiveCourse(label);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/40 z-[60] flex items-stretch justify-start transition-all duration-700 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      onClick={() => setMobileOpen(false)}
    >
      {/* Left Menu Panel */}
      <div
        className={`relative bg-black/20 backdrop-blur-2xl border-r border-white/10 w-full max-w-md shadow-2xl transition-all duration-700 flex flex-col h-full overflow-hidden ${mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Video (Triggered on active course) */}
        {activeCourse && courseDetails[activeCourse] && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              key={activeCourse}
              src={courseDetails[activeCourse].video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-25"
            />
            {/* Dark gradient tint overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" /> */}
          </div>
        )}

        {/* Header area with Close Button */}
        <div className="relative z-10 flex items-center justify-between px-6 py-6 border-b border-white/10 w-full">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
            <Image
              src="/logo/logo-white.png"
              alt="ADCB Consultancy Logo"
              width={64}
              height={64}
              style={{ width: "auto", height: "auto" }}
              className="h-12 w-auto"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-md transition-all"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="relative z-10 flex-1 p-6 md:p-10 overflow-y-auto bg-transparent scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/30">
          {navLinks.map((link, index) => {
            const isCourse = !!courseDetails[link.label];
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
                  if (isCourse && isDesktop) {
                    e.preventDefault();
                    handleLinkInteract(link.label);
                  } else {
                    setMobileOpen(false);
                  }
                }}
                className={`flex items-center justify-end py-2 group transform transition-all duration-700 ease-out ${mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-[320px] opacity-0"
                  }`}
                style={{
                  transitionDelay: mobileOpen
                    ? `${index * 100}ms`
                    : `${(navLinks.length - 1 - index) * 60}ms`,
                }}
              >
                <span className={`font-medium text-xl transition-colors text-right ${activeCourse === link.label ? "text-white" : "text-white/40 group-hover:text-white"
                  }`}>
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Right-side Details Section (desktop only, occupies empty space) */}
      <div
        className="hidden lg:flex flex-col flex-1 items-center justify-center relative z-10 h-full"
        onClick={() => setMobileOpen(false)}
      >
        {activeCourse && courseDetails[activeCourse] && (
          <div
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center transition-all duration-700 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Box (Full size, full height) */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <Image
                src={courseDetails[activeCourse].image}
                alt={courseDetails[activeCourse].title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              {/* Dark overlay gradient to help the Discover button stand out */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Discover Button */}
            <div className="absolute bottom-12 z-20">
              <Button
                href={courseDetails[activeCourse].href}
                onClick={() => setMobileOpen(false)}
                variant="primary"
                className="px-16 min-w-[220px]"
              >
                Discover
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
