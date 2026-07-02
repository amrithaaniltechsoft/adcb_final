"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchModal from "../ui/SearchModal";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#courses" },
  { label: "MDS Specialities", href: "#mds" },
  { label: "International", href: "#international" },
  { label: "Universities", href: "#universities" },
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPng(true);
    }, 4000);
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
          } ${atTop ? "bg-transparent" : "bg-black"}`}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="flex items-center justify-between h-24">
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
              <Link href="/" className="block relative h-20 w-[80px] hover:opacity-80 transition-opacity duration-300">
                <Image
                  src="/logo/animated4.gif"
                  alt="ADCB Consultancy Logo"
                  width={80}
                  height={80}
                  className={`absolute inset-0 h-20 w-auto object-contain transition-opacity duration-1000 ${showPng ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                  priority
                />
                <Image
                  src="/logo/logo-white2.png"
                  alt="ADCB Consultancy Logo"
                  width={80}
                  height={80}
                  className={`absolute inset-0 h-20 w-auto object-contain transition-opacity duration-1000 ${showPng ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  priority
                />
              </Link>
            </div>

            {/* Right: Search CTA */}
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setShowSearch(true)}
                className="flex items-center gap-2 text-sm font-medium transition-colors text-white/80 hover:text-white"
                aria-label="Open search"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span className="hidden md:inline">
                  Search <span className="w-28 inline-block text-left">{animatedSearchText}</span>
                  {/* <span className="animate-pulse">|</span> */}
                </span>
              </button>
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
          <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-transparent">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-end py-4 group transform transition-all duration-700 ease-out ${mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-[320px] opacity-0"
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
