import Navbar from "./components/global/Navbar";
import HeroSection from "./components/home/HeroSection";
import PondicherryBanner from "./components/home/PondicherryBanner";
import FeaturedCourses from "./components/home/FeaturedCourses";
import PreFooterCTA from "./components/global/PreFooterCTA";
import Footer from "./components/global/Footer";
import WhatsAppButton from "./components/global/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Main content wrapper that slides over the footer */}
      <div className="relative z-20 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
        <main>
          <HeroSection />
          <PondicherryBanner />
          <FeaturedCourses />
          <PreFooterCTA />
        </main>
      </div>
      {/* Sticky footer wrapper that gets revealed as the user scrolls */}
      <div className="sticky bottom-0 z-10 w-full">
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}
