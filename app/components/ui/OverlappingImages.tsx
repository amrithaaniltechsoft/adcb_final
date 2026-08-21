import Image from "next/image";

interface OverlappingImagesProps {
  leftImageSrc: string;
  leftImageAlt?: string;
  rightImageSrc: string;
  rightImageAlt?: string;
  heightClass?: string;
}

export default function OverlappingImages({
  leftImageSrc,
  leftImageAlt = "Background Image",
  rightImageSrc,
  rightImageAlt = "Foreground Image",
  heightClass = "h-[60vh] md:h-[100vh]",
}: OverlappingImagesProps) {
  return (
    <section className={`relative w-full ${heightClass} bg-black overflow-hidden`}>
      <div className="relative w-full h-full">
        {/* Left Image (Background / Top-Left) */}
        <div className="absolute top-0 left-0 w-[65%] h-[85%] z-10 opacity-20">
          <Image
            src={leftImageSrc}
            alt={leftImageAlt}
            fill
            className="object-cover"
          />
        </div>

        {/* Right Image (Foreground / Bottom-Right) */}
        <div className="absolute bottom-0 right-0 w-[65%] h-[85%] z-20">
          <Image
            src={rightImageSrc}
            alt={rightImageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
