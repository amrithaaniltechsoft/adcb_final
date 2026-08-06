import Navbar from "../components/global/Navbar";
import PreFooterCTA from "../components/global/PreFooterCTA";
import Footer from "../components/global/Footer";
import WhatsAppButton from "../components/global/WhatsAppButton";
import Banner from "../components/global/Banner";
import MbbsCounsellingGuide from "../components/ui/MbbsCounsellingGuide";

export const metadata = {
  title: "Tamil Nadu MBBS Counselling Guide | ADCB Consultancy",
  description: "Complete guide to Tamil Nadu MBBS counselling — eligibility, fees, seat categories, NRI/Minority quotas, application process, and expert counselling support.",
};

export default function MbbsPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-20 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.5)] min-h-screen flex flex-col">
        <Banner
          title="Tamil Nadu MBBS Counselling Guide"
          description="Complete information on eligibility, seat categories, fee structure, counselling rounds, and expert guidance for Tamil Nadu MBBS admissions."
          imageSrc="/courses/mbbs.jpg"
          imageAlt="MBBS Counselling Guide"
          buttonText="Explore Guide"
          buttonHref="#guide"
        />

        <div id="guide">
          <MbbsCounsellingGuide />
        </div>

        <PreFooterCTA />
      </main>

      <div className="sticky bottom-0 z-10 w-full">
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}
