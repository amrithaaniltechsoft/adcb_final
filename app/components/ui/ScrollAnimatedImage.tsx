"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ScrollAnimatedImageProps {
  variant?: "default" | "expand";
  backgroundImageSrc?: string;
  backgroundImageAlt?: string;
  foregroundImageSrc?: string;
  foregroundImageAlt?: string;
  containerClassName?: string;
  backgroundHeightClassName?: string;
  mobileStartWidth?: number;
  mobileStartHeight?: number;
  desktopStartWidth?: number;
  desktopStartHeight?: number;
  children?: React.ReactNode;
}

export default function ScrollAnimatedImage({
  variant = "default",
  backgroundImageSrc = "/pathway/canada.jpg",
  backgroundImageAlt = "ADCB Consultancy Campus Library Backdrop",
  foregroundImageSrc = "/page-banner/about-middle4.png",
  foregroundImageAlt = "ADCB Consultancy Campus Library",
  containerClassName,
  backgroundHeightClassName = "h-[50vh] md:h-[70vh]",
  mobileStartWidth,
  mobileStartHeight,
  desktopStartWidth,
  desktopStartHeight,
  children,
}: ScrollAnimatedImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const isExpand = variant === "expand";

  // Set defaults based on the variant
  const startWidthMobile = mobileStartWidth !== undefined ? mobileStartWidth : (isExpand ? 300 : 200);
  const startHeightMobile = mobileStartHeight !== undefined ? mobileStartHeight : (isExpand ? 170 : 380);
  const startWidthDesktop = desktopStartWidth !== undefined ? desktopStartWidth : (isExpand ? 800 : 280);
  const startHeightDesktop = desktopStartHeight !== undefined ? desktopStartHeight : (isExpand ? 450 : 520);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageWrapperRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      let progress = 0;

      if (isExpand) {
        // Sticky Pinned scroll progress calculation
        const totalScrollDistance = rect.height - viewportHeight;
        const scrolled = -rect.top;
        progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
      } else {
        // Default scroll calculation
        const entryPoint = viewportHeight;
        const exitPoint = viewportHeight * 0.15;
        const totalRange = entryPoint - exitPoint;
        const distance = rect.top - exitPoint;
        progress = Math.max(0, Math.min(1, 1 - distance / totalRange));
      }

      const parentWidth = isExpand ? window.innerWidth : containerRef.current.clientWidth;
      const parentHeight = isExpand ? window.innerHeight : containerRef.current.clientHeight;

      const isMobile = window.innerWidth < 768;
      // Start size based on screen size
      const startWidth = isMobile ? startWidthMobile : startWidthDesktop;
      const startHeight = isMobile ? startHeightMobile : startHeightDesktop;

      const currentWidth = startWidth + (parentWidth - startWidth) * progress;
      const currentHeight = startHeight + (parentHeight - startHeight) * progress;

      imageWrapperRef.current.style.width = `${currentWidth}px`;
      imageWrapperRef.current.style.height = `${currentHeight}px`;
      imageWrapperRef.current.style.borderRadius = "0px";

      // Zoom effect on foreground image: scale from 1 to 1.12
      if (imageRef.current) {
        imageRef.current.style.transform = `scale(${1 + progress * 0.12})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // Run once on mount to set initial size based on scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [variant, isExpand, startWidthMobile, startHeightMobile, startWidthDesktop, startHeightDesktop]);

  if (isExpand) {
    return (
      <div
        ref={containerRef}
        className="relative w-full h-[200vh] bg-black"
      >
        {/* Sticky viewport container (remains pinned) */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
          {/* Foreground Animated Resizing & Zooming Image */}
          <div
            ref={imageWrapperRef}
            style={{
              width: `${startWidthDesktop}px`,
              height: `${startHeightDesktop}px`,
              borderRadius: "0px",
            }}
            className="relative z-10 overflow-hidden will-change-[width,height] rounded-none"
          >
            {/* Foreground Image */}
            <Image
              ref={imageRef}
              src={foregroundImageSrc}
              alt={foregroundImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 90vw, 100vw"
              className="object-cover object-center rounded-none transition-transform duration-75 ease-out"
              priority
            />
          </div>
          {/* Overlay Children Content */}
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={containerClassName || "relative w-full h-[70vh] md:h-[90vh] flex items-end justify-center bg-black overflow-hidden rounded-none"}
    >
      {/* Background Static Image */}
      <div className={`absolute bottom-0 left-0 right-0 z-0 select-none pointer-events-none ${backgroundHeightClassName}`}>
        <Image
          src={backgroundImageSrc}
          alt={backgroundImageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 90vw, 100vw"
          className="object-cover object-bottom rounded-none"
        />
        {/* Dark overlay to help the sharp foreground card stand out */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Foreground Animated Resizing & Zooming Image */}
      <div
        ref={imageWrapperRef}
        style={{
          width: `${startWidthDesktop}px`,
          height: `${startHeightDesktop}px`,
          borderRadius: "0px",
        }}
        className="relative z-10 overflow-hidden will-change-[width,height] rounded-none"
      >
        {/* Foreground Image */}
        <Image
          ref={imageRef}
          src={foregroundImageSrc}
          alt={foregroundImageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 90vw, 100vw"
          className="object-cover object-bottom rounded-none transition-transform duration-75 ease-out"
          priority
        />
      </div>
    </div>
  );
}
