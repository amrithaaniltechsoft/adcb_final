import Navbar from "../components/global/Navbar";
import PreFooterCTA from "../components/global/PreFooterCTA";
import Footer from "../components/global/Footer";
import WhatsAppButton from "../components/global/WhatsAppButton";
import Banner from "../components/global/Banner";
import BlogList from "./BlogList";
import { buildSeoMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return buildSeoMetadata(
    "blog",
    "Latest Medical Admissions News & Blogs | ADCB Consultancy",
    "Stay updated with the latest notifications, choice filling strategies, eligibility updates, and guides for MBBS, MD/MS, and MDS admissions in India and abroad.",
    "medical admission blog, counselling tips, career guidance articles"
  );
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-20 bg-black shadow-[0_15px_30px_rgba(0,0,0,0.5)] min-h-screen flex flex-col">
        {/* Banner Section */}
        <Banner
          title="Insights & Admissions Blog"
          description="Your ultimate source for NEET UG/PG counselling updates, documentation rules, and admissions news."
          imageSrc="/page-banner/about-banner2.png"
          imageAlt="ADCB Insights Blog"
        />

        {/* Interactive Blog List Section */}
        <div id="articles">
          <BlogList />
        </div>

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
