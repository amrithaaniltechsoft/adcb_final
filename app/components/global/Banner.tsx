import Image from "next/image";
import { Button } from "../ui/Button";

interface BannerProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function Banner({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonHref,
}: BannerProps) {
  return (
    <section className="relative h-[70vh] md:h-[95vh] w-full bg-[#030303] overflow-hidden">
      {/* Banner Container */}
      <div className="relative w-full h-full flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden animate-slow-zoom">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center opacity-70"
          />
          {/* Bottom Right Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-20 w-full animate-[fadeInUp_1s_ease-out]">
          <div className="flex flex-col items-start pb-12 md:pb-24 gap-6 max-w-3xl">
            {/* Title */}
            <div>
              <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                {title}
              </h1>
            </div>

            {/* Description & CTA Button */}
            <div className="text-left">
              {description && (
                <p className="text-white/90 font-light text-base md:text-lg max-w-xl mb-6">
                  {description}
                </p>
              )}
              {buttonText && buttonHref && (
                <Button href={buttonHref} size="lg">
                  {buttonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
