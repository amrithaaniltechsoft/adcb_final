"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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

interface SubCategory {
  shortTitle: string;
  fullTitle: string;
  video: string;
  image: string;
  href: string;
}

interface CourseDetails {
  video: string;
  image: string;
  href: string;
  title: string;
  subCategories?: SubCategory[];
}

const courseDetails: Record<string, CourseDetails> = {
  MBBS: {
    video: "/banner/mbbs.mp4",
    image: "/courses/mbbs.jpg",
    href: "/mbbs",
    title: "Bachelor of Medicine & Surgery",
    subCategories: [],
  },
  MDS: {
    video: "/banner/md.mp4",
    image: "/courses/mds.jpg",
    href: "/mds",
    title: "Master of Dental Surgery",
    subCategories: [
      { shortTitle: "Conservative Dentistry", fullTitle: "Conservative Dentistry & Endodontics", video: "/banner/md.mp4", image: "/mds/Conservative Dentistry & Endodontics.jpg", href: "/mds/conservative-dentistry" },
      { shortTitle: "Orthodontics", fullTitle: "Orthodontics & Dentofacial Orthopaedics", video: "/banner/md.mp4", image: "/mds/Orthodontics & Dentofacial Orthopaedics.jpg", href: "/mds/orthodontics" },
      { shortTitle: "Prosthodontics", fullTitle: "Prosthodontics & Crown and Bridge", video: "/banner/md.mp4", image: "/mds/Prosthodontics & Crown and Bridge.jpg", href: "/mds/prosthodontics" },
      { shortTitle: "Oral Surgery", fullTitle: "Oral & Maxillofacial Surgery (OMFS)", video: "/banner/md.mp4", image: "/mds/Oral & Maxillofacial Surgery.jpg", href: "/mds/oral-surgery" },
      { shortTitle: "Periodontology", fullTitle: "Periodontology", video: "/banner/md.mp4", image: "/mds/Periodontology.jpg", href: "/mds/periodontology" },
      { shortTitle: "Pediatric Dentistry", fullTitle: "Pediatric & Preventive Dentistry", video: "/banner/md.mp4", image: "/mds/Pediatric & Preventive Dentistry.jpg", href: "/mds/pediatric-dentistry" },
      { shortTitle: "Oral Medicine", fullTitle: "Oral Medicine & Radiology", video: "/banner/md.mp4", image: "/mds/Oral Medicine & Radiology.jpg", href: "/mds/oral-medicine" },
      { shortTitle: "Oral Pathology", fullTitle: "Oral & Maxillofacial Pathology", video: "/banner/md.mp4", image: "/mds/Oral Pathology.jpg", href: "/mds/oral-pathology" },
      { shortTitle: "Public Health Dentistry", fullTitle: "Public Health Dentistry (PHD)", video: "/banner/md.mp4", image: "/mds/Public Health Dentistry.jpg", href: "/mds/public-health-dentistry" },
    ]
  },
  MD: {
    video: "/banner/md.mp4",
    image: "/courses/md-ms.jpg",
    href: "/#international",
    title: "Doctor of Medicine",
    subCategories: [],
  },
  MS: {
    video: "/banner/md.mp4",
    image: "/courses/md-ms.jpg",
    href: "/#ms",
    title: "Master of Surgery",
    subCategories: [],
  },
  DND: {
    video: "/banner/b1.mp4",
    image: "/courses/mttm.jpg",
    href: "/#dnd",
    title: "Diplomate of National Board",
    subCategories: [],
  },
};

export default function MobileMenu({
  mobileOpen,
  setMobileOpen,
  navLinks,
}: MobileMenuProps) {
  const pathname = usePathname();
  const [activeCourse, setActiveCourse] = useState<string | null>(null); // e.g. 'MDS'
  const [activeSubCategory, setActiveSubCategory] = useState<SubCategory | null>(null);
  const [showSubMenu, setShowSubMenu] = useState(false);

  // Close menu when navigating to the same page the user is already on
  const handleLinkClick = (href: string, fallback?: () => void) => {
    if (pathname === href) {
      setMobileOpen(false);
    } else if (fallback) {
      fallback();
    }
  };

  useEffect(() => {
    if (!mobileOpen) {
      setActiveCourse(null);
      setActiveSubCategory(null);
      setShowSubMenu(false);
    }
  }, [mobileOpen]);

  const handleCourseClick = (label: string) => {
    if (courseDetails[label]) {
      const course = courseDetails[label];
      if (course.subCategories && course.subCategories.length > 0) {
        setActiveCourse(label);
        setShowSubMenu(true);
        setActiveSubCategory(course.subCategories[0]); // Select first subcategory by default
      } else {
        // No subcategories, just show the main course detail
        setActiveCourse(label);
        setShowSubMenu(false);
        setActiveSubCategory(null);
      }
    }
  };

  const handleSubCategoryHover = (subCategory: SubCategory) => {
    setActiveSubCategory(subCategory);
  };

  const handleBackClick = () => {
    setShowSubMenu(false);
    setActiveSubCategory(null);
    // Keep activeCourse to show the main menu again
  };

  const activeVideo = activeSubCategory?.video || (activeCourse ? courseDetails[activeCourse]?.video : null);
  const activeImage = activeSubCategory?.image || (activeCourse && !showSubMenu ? courseDetails[activeCourse]?.image : null);
  const activeTitle = activeSubCategory?.fullTitle || (activeCourse && !showSubMenu ? courseDetails[activeCourse]?.title : null);
  const activeHref = activeSubCategory?.href || (activeCourse && !showSubMenu ? courseDetails[activeCourse]?.href : null);

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
        {activeVideo && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              key={activeVideo}
              src={activeVideo}
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
              width={48}
              height={48}
              priority
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
          {showSubMenu && activeCourse && courseDetails[activeCourse]?.subCategories ? (
            // Sub-menu view
            <div className="animate-fade-in">
              <button onClick={handleBackClick} className="flex items-center gap-2 text-sm text-white/60 hover:text-white mb-4 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                Back to Courses
              </button>
              {courseDetails[activeCourse]?.subCategories?.map((subLink, index) => (
                <a
                  key={subLink.shortTitle}
                  href={subLink.href}
                  onClick={(e) => {
                    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
                    if (pathname === subLink.href) {
                      // Already on this page — just close the menu
                      e.preventDefault();
                      setMobileOpen(false);
                    } else if (isDesktop) {
                      e.preventDefault();
                      handleSubCategoryHover(subLink);
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                  className="flex items-center justify-end py-2 group"
                >
                  <span className={`font-medium text-xl transition-colors text-right ${activeSubCategory?.shortTitle === subLink.shortTitle ? "text-white" : "text-white/40 group-hover:text-white"}`}>
                    {subLink.shortTitle}
                  </span>
                </a>
              ))}
            </div>
          ) : (
            // Main menu view
            navLinks.map((link, index) => {
              const isCourse = !!courseDetails[link.label];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
                    if (pathname === link.href) {
                      // Already on this page — just close the menu
                      e.preventDefault();
                      setMobileOpen(false);
                    } else if (isCourse && isDesktop) {
                      e.preventDefault();
                      handleCourseClick(link.label);
                    } else if (!isCourse) {
                      setMobileOpen(false);
                    } else {
                      handleCourseClick(link.label);
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
                  <span className={`font-medium text-xl transition-colors text-right ${activeCourse === link.label && !showSubMenu ? "text-white" : "text-white/40 group-hover:text-white"
                    }`}>
                    {link.label}
                  </span>
                </a>
              );
            })
          )}
        </div>
      </div>

      {/* Right-side Details Section (desktop only, occupies empty space) */}
      <div
        className="hidden lg:flex flex-col flex-1 items-center justify-center relative z-10 h-full"
        onClick={() => setMobileOpen(false)}
      >
        {activeImage && activeTitle && activeHref && (
          <div
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center transition-all duration-700 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Box (Full size, full height) */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <Image
                key={activeImage}
                src={activeImage}
                alt={activeTitle}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              {/* Dark overlay gradient to help the Discover button stand out */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Discover Button & Title */}
            <div className="absolute bottom-12 z-20 flex flex-col items-center gap-4 text-center px-6">
              <div className="text-white text-2xl font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-[var(--font-outfit)]">
                {activeTitle}
              </div>
              <Button
                href={activeHref}
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
