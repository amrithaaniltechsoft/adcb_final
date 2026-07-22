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
    <section className="relative h-[80vh] w-full bg-[#030303] overflow-hidden">
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-20 md:pb-24 gap-6">
            {/* Left: Title */}
            <div>
              <h1 className="font-[var(--font-outfit)] text-4xl md:text-5xl lg:text-7xl font-semibold text-white leading-tight max-w-xl md:max-w-2xl">
                {title}
              </h1>
            </div>

            {/* Right: Description & CTA Button */}
            <div className="text-left md:text-right">
              {description && (
                <p className="text-white/90 font-light max-w-sm mb-6 md:ml-auto">
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
