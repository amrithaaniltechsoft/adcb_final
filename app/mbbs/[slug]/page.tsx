import Navbar from "../../components/global/Navbar";
import PreFooterCTA from "../../components/global/PreFooterCTA";
import Footer from "../../components/global/Footer";
import WhatsAppButton from "../../components/global/WhatsAppButton";
import Banner from "../../components/global/Banner";
import { Button } from "../../components/ui/Button";
import { notFound } from "next/navigation";
import { statesData } from "./statesData";
import ScrollAnimatedImage from "../../components/ui/ScrollAnimatedImage";
import MbbsCounsellingGuide from "../../components/ui/MbbsCounsellingGuide";
import MbbsKeralaGuide from "../../components/ui/MbbsKeralaGuide";
import MbbsKarnatakaGuide from "../../components/ui/MbbsKarnatakaGuide";
import MbbsPondicherryGuide from "../../components/ui/MbbsPondicherryGuide";
import MbbsTelanganaGuide from "../../components/ui/MbbsTelanganaGuide";
import MbbsAndhraGuide from "../../components/ui/MbbsAndhraGuide";
import MbbsHaryanaGuide from "../../components/ui/MbbsHaryanaGuide";
import MbbsPunjabGuide from "../../components/ui/MbbsPunjabGuide";
import MbbsHimachalGuide from "../../components/ui/MbbsHimachalGuide";
import MbbsUttarPradeshGuide from "../../components/ui/MbbsUttarPradeshGuide";
import MbbsBiharGuide from "../../components/ui/MbbsBiharGuide";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = statesData[slug];

  if (!data) {
    return {
      title: "MBBS Admissions & Counselling | ADCB Consultancy",
      description: "Secure your medical future with expert NEET UG counselling and MBBS admissions guidance.",
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function MbbsSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = statesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="relative z-20 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.5)] min-h-screen flex flex-col">
        <Banner
          title={data.bannerTitle}
          description={data.bannerDescription}
          imageSrc={data.bannerImage}
          imageAlt={data.title}
        />

        {slug === "kerala" ? <MbbsKeralaGuide /> : slug === "karnataka" ? <MbbsKarnatakaGuide /> : slug === "pondicherry" ? <MbbsPondicherryGuide /> : slug === "telangana" ? <MbbsTelanganaGuide /> : slug === "andhra-pradesh" ? <MbbsAndhraGuide /> : slug === "haryana" ? <MbbsHaryanaGuide /> : slug === "punjab" ? <MbbsPunjabGuide /> : slug === "himachal-pradesh" ? <MbbsHimachalGuide /> : slug === "uttar-pradesh" ? <MbbsUttarPradeshGuide /> : slug === "bihar" ? <MbbsBiharGuide /> : <MbbsCounsellingGuide />}

        <ScrollAnimatedImage
          variant="expand"
          foregroundImageSrc="/page-banner/mbbs-middle1.jpg"
          foregroundImageAlt="ADCB Consultancy"
        >
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 bg-black/55 text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="font-[var(--font-outfit)] text-xl sm:text-2xl md:text-3xl font-normal tracking-tight leading-tight">
                Secure your dream medical seat with expert, <br /> end-to-end counselling support.
              </h2>
            </div>
          </div>
        </ScrollAnimatedImage>

        <PreFooterCTA />
      </main>

      <div className="sticky bottom-0 z-10 w-full">
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}
