import Image from "next/image";

interface ContentSectionProps {
  id?: string;
  title: string;
  content: string;
  className?: string;
  variant?: "default" | "banner";
  backgroundImageSrc?: string;
}

export default function ContentSection({
  id,
  title,
  content,
  className,
  variant = "default",
  backgroundImageSrc,
}: ContentSectionProps) {
  const isBanner = variant === "banner" && backgroundImageSrc;
  const defaultClassName = isBanner
    ? "relative py-24 md:py-36 px-6 lg:px-8 bg-black text-white flex items-center justify-center min-h-[35vh] overflow-hidden"
    : "py-24 md:py-36 px-6 lg:px-8 bg-black text-white flex-col justify-center";

  return (
    <section id={id} className={className || defaultClassName}>
      {isBanner && (
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={backgroundImageSrc}
            alt={title}
            fill
            className="object-cover opacity-20 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
        </div>
      )}
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Content Card */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
            {title}
          </h2>
          {content && (
            <p 
              className="font-[var(--font-inter)] text-base md:text-lg lg:text-xl font-light text-white/90 leading-relaxed md:leading-loose max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
