"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchModal from "../ui/SearchModal";
import { Button } from "../ui/Button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "MBBS", href: "#courses" },
  { label: "MDS", href: "#mds" },
  { label: "MD", href: "#international" },
  { label: "MS", href: "#ms" },
  { label: "DND", href: "#dnd" },
  { label: "International Opportunities", href: "#international-opportunities" },
  { label: "Contact", href: "#branches" },
];

const useTypingAnimation = (words: string[], typeSpeed = 100, deleteSpeed = 50, delay = 2000) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words, typeSpeed, deleteSpeed, delay]);

  return text;
};

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showPng, setShowPng] = useState(false);
  const [branchDropdownOpen, setBranchDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPng(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setAtTop(currentScrollY < 50);
      setVisible(lastScrollY > currentScrollY || currentScrollY < 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || showSearch ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, showSearch]);

  const searchKeywords = useMemo(() => ["for courses", "for universities", "a speciality"], []);
  const animatedSearchText = useTypingAnimation(searchKeywords);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
          } ${atTop ? "bg-transparent" : "bg-black/50 backdrop-blur-md border-b border-white/10"}`}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className={`flex items-center justify-between transition-all duration-300 ${atTop ? "h-32" : "h-24"}`}>
            {/* Left: Mobile Hamburger */}
            <div className="flex-1 flex justify-start">
              <button
                className="group flex items-center justify-center gap-x-3 rounded-full transition-colors h-16"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <div className="flex flex-col items-center justify-center gap-y-2">
                  <span
                    className={`block h-[2px] w-7 origin-center rounded-full transition-all duration-300 ease-in-out bg-white ${mobileOpen
                      ? "translate-y-[5px] rotate-45" : "group-hover:-translate-x-0.5"
                      }`}
                  />
                  <span
                    className={`block h-[2px] w-7 origin-center rounded-full transition-all duration-300 ease-in-out bg-white ${mobileOpen
                      ? "-translate-y-[5px] -rotate-45" : "group-hover:translate-x-0.5"
                      }`}
                  />
                </div>
                <span className="text-sm font-medium transition-colors text-white/80 group-hover:text-white">
                  Menu
                </span>
              </button>
            </div>

            {/* Center: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className={`block relative transition-all duration-300 hover:opacity-80 ${atTop ? "h-[120px] w-[160px]" : "h-20 w-[107px]"}`}>
                <Image
                  src="/logo/animated7.gif"
                  alt="ADCB Consultancy Logo"
                  width={180}
                  height={120}
                  className={`absolute inset-0 w-auto object-contain transition-all duration-300 ${atTop ? "h-[120px]" : "h-20"} ${showPng ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                  priority
                />
                <Image
                  src="/logo/logo-white4.png"
                  alt="ADCB Consultancy Logo"
                  width={180}
                  height={120}
                  className={`absolute inset-0 w-auto object-contain transition-all duration-300 ${atTop ? "h-[120px]" : "h-20"} ${showPng ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  priority
                />
              </Link>
            </div>

            {/* Right: Branch Dropdown */}
            <div className="flex-1 flex justify-end">
              <div
                className="relative inline-block text-left"
                onMouseEnter={() => setBranchDropdownOpen(true)}
                onMouseLeave={() => setBranchDropdownOpen(false)}
              >
                <Button
                  onClick={() => setBranchDropdownOpen(!branchDropdownOpen)}
                  variant="ghost"
                  className="rounded-full flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-300 text-white hover:shadow-white/5 active:scale-95"
                >
                  <span>FIND AN ADCB BRANCH</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${branchDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>

                {branchDropdownOpen && (
                  <div className="absolute right-0 pt-3 w-56 z-50">
                    <div className="rounded-md border border-white/15 bg-black/85 backdrop-blur-md shadow-2xl overflow-hidden transform transition-all duration-300">
                      <div className="py-1">
                        <Link
                          href="#cochin"
                          className="group flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors border-b border-white/5"
                          onClick={() => setBranchDropdownOpen(false)}
                        >
                          <svg
                            className="w-4 h-4 text-white/50 group-hover:text-[#ED1C24] transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Kochi</span>
                        </Link>
                        <Link
                          href="#calicut"
                          className="group flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                          onClick={() => setBranchDropdownOpen(false)}
                        >
                          <svg
                            className="w-4 h-4 text-white/50 group-hover:text-[#ED1C24] transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Calicut</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* Mobile Menu*/}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] flex items-stretch justify-start transition-all duration-700 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`bg-black/20 backdrop-blur-2xl border-r border-white/10 w-full max-w-md shadow-2xl transition-all duration-700 flex flex-col h-full overflow-hidden ${mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header area in mobile menu with Close Button */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10 w-full">
            <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
              <Image
                src="/logo/logo-white.png"
                alt="ADCB Consultancy Logo"
                width={64}
                height={64}
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
          <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-transparent scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/30">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-end py-2 group transform transition-all duration-700 ease-out ${mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-[320px] opacity-0"
                  }`}
                style={{
                  transitionDelay: mobileOpen
                    ? `${index * 100}ms`
                    : `${(navLinks.length - 1 - index) * 60}ms`
                }}
              >
                <span className="font-semibold text-xl text-white/80 group-hover:text-white transition-colors text-right">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </>
  );
}
