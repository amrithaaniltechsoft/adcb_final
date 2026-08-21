import Navbar from "../components/global/Navbar";
import PreFooterCTA from "../components/global/PreFooterCTA";
import Footer from "../components/global/Footer";
import WhatsAppButton from "../components/global/WhatsAppButton";
import ScrollAnimatedImage from "../components/ui/ScrollAnimatedImage";
import Banner from "../components/global/Banner";
import ContentSection from "../components/ui/ContentSection";
import { buildSeoMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return buildSeoMetadata(
    "about",
    "About Us | ADCB Consultancy",
    "Learn about the Vision and Mission of ADCB Consultancy. Transforming medical careers and mentoring future leaders.",
    "ADCB about, education consultancy about, career counselling company"
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      {/* Main content wrapper that slides over the footer */}
      <main className="relative z-20 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.5)] min-h-screen flex flex-col">
        {/* Banner Section */}
        <Banner
          title="About Us"
          description="Empowering medical professionals and aspiring leaders to reach their highest potential."
          imageSrc="/page-banner/about-banner3.png"
          imageAlt="About ADCB Consultancy"
          buttonText="Our Vision & Mission"
          buttonHref="#vision"
        />

        {/* Vision Section */}
        <ContentSection
          id="vision"
          title="Our Vision"
          content="“Our vision is to transform the mindset of people from simply doing a job to becoming entrepreneurs and leaders. In the medical field, we aim to simplify the NEET counselling and admission process for doctors and future doctors by providing trusted guidance, transparent counselling, and complete support to help them secure admission in their desired colleges — all from the comfort of their homes.”"
        />

        {/* Scroll Driven Resizing Image */}
        <ScrollAnimatedImage />

        {/* Mission Section */}
        <ContentSection
          title="Our Mission"
          content="To guide doctors and future doctors through transparent, trusted, and end-to-end medical admission support and empower aspiring entrepreneurs with practical business education and real-world exposure."
        />

        {/* Scroll Driven Expanding Image Section */}
        <ScrollAnimatedImage
          variant="expand"
          foregroundImageSrc="/page-banner/mbbs-middle2.jpg"
          foregroundImageAlt="ADCB Consultancy Mission & Values"
        />

        <PreFooterCTA />
      </main>

      {/* Sticky footer wrapper that gets revealed as the user scrolls */}
      <div className="sticky bottom-0 z-10 w-full">
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}



