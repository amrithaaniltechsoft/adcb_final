import Navbar from "../components/global/Navbar";
import PreFooterCTA from "../components/global/PreFooterCTA";
import Footer from "../components/global/Footer";
import WhatsAppButton from "../components/global/WhatsAppButton";
import ScrollAnimatedImage from "../components/ui/ScrollAnimatedImage";
import Banner from "../components/global/Banner";
import ContentSection from "../components/ui/ContentSection";
import CustomVideoPlayer from "../components/ui/CustomVideoPlayer";
import FeaturedCourses from "../components/home/FeaturedCourses";
import ClinicalAreasSpotlight from "../components/spotlight/ClinicalAreasSpotlight";
import InternationalPathways from "../components/home/InternationalPathways";
import { Button } from "../components/ui/Button";

export const metadata = {
  title: "MBBS Admissions & Counselling | ADCB Consultancy",
  description: "Secure your future in medicine. Get expert guidance for NEET UG counselling, seat selection, and admissions in premier medical colleges globally and in India.",
};

const mbbsSpecialties = [
  {
    title: "General Medicine",
    image: "/page-banner/mbbs-medicine.png",
    highlights: [
      "Diagnostic medicine & comprehensive patient care",
      "Management of acute, chronic, and infectious illnesses",
      "Preventive healthcare counseling & public wellness",
      "Specialist clinical rotations and diagnostics"
    ]
  },
  {
    title: "General Surgery & Trauma",
    image: "/page-banner/mbbs-surgery.png",
    highlights: [
      "Core surgical procedures and critical trauma care",
      "Pre-operative diagnostics & post-operative patient recovery",
      "Introduction to minimally invasive surgical techniques",
      "Emergency medical interventions and life support"
    ]
  }
];

const mbbsCountries = [
  {
    name: "United Kingdom",
    flag: "/c-flag/uk.png",
    image: "/pathway/united-kingdom.jpg",
    highlights: [
      "PLAB / UKMLA pathway for licensing",
      "Direct residency training opportunities",
      "NHS salary & excellent clinical setup",
      "Highly respected global qualification."
    ]
  },
  {
    name: "United Arab Emirates",
    flag: "/c-flag/uae.png",
    image: "/pathway/united-arab-emirates.jpg",
    highlights: [
      "Fastest growing medical hub",
      "DHA / DOH / MOH licensing options",
      "Tax-free clinical packages",
      "Straightforward residency transition."
    ]
  },
  {
    name: "Saudi Arabia",
    flag: "/c-flag/sa.png",
    image: "/pathway/saudi-arabia.jpg",
    highlights: [
      "High demand for general practitioners & specialists",
      "Excellent medical infrastructure",
      "Attractive tax-free compensation packages."
    ]
  },
  {
    name: "Canada",
    flag: "/c-flag/ca.png",
    image: "/pathway/canada.jpg",
    highlights: [
      "MCCEE / MCCQE licensing process",
      "High quality of life & premier medical earnings",
      "Strong long-term residency options."
    ]
  }
];

const mbbsRecommendation = {
  title: "Best Country Recommendation",
  description: "For Indian medical graduates (MBBS) seeking rapid clinical licensing and immediate practice, the UK and UAE are the most popular destinations because of:",
  bullets: [
    "Well-defined licensing exams (PLAB/DHA)",
    "High clinical integration and familiar setups",
    "Immediate pathway to specialist training",
    "Exceptional packages and lifestyle",
    "Strong support networks for foreign medical graduates"
  ],
  buttonText: "Consult Global Pathway",
  buttonHref: "#enquiry",
  backgroundImageSrc: "/page-banner/uae-banner.jpg"
};

export default function MbbsPage() {
  return (
    <>
      <Navbar />
      {/* Main content wrapper that slides over the footer */}
      <main className="relative z-20 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.5)] min-h-screen flex flex-col">
        {/* Banner Section */}
        <Banner
          title="MBBS Admissions & Counselling"
          description="Secure your medical future. Get expert, transparent guidance for NEET UG counselling and secure MBBS seats in premier medical universities."
          imageSrc="/courses/mbbs.jpg"
          imageAlt="MBBS Medicine & Surgery"
          buttonText="Explore Specialties"
          buttonHref="#specialties"
        />

        {/* Overview Section */}
        <ContentSection
          id="overview"
          title="Clinical Medicine & Surgery Training"
          content="The Bachelor of Medicine, Bachelor of Surgery (MBBS) is the cornerstone of medical healthcare practice, combining foundational bio-sciences with clinical medicine rotations.<br><br>Indian medical students receive extensive hands-on training under medical professionals, prepping them for general practice, specialist PG residency options, or research pathways globally."
        />

        <ClinicalAreasSpotlight specialties={mbbsSpecialties} />

        {/* Custom Video Section (Boxed, with custom play cursor on hover) */}
        <CustomVideoPlayer
          videoSrc="/banner/mbbs.mp4"
          videoTitle="ADCB Consultancy Campus Tour"
        />

        {/* Overview Scroll Animated Section */}
        <ScrollAnimatedImage
          variant="expand"
          foregroundImageSrc="/page-banner/mbbs-middle4.jpg"
          foregroundImageAlt="ADCB Consultancy Global Opportunities backdrop"
        >
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 bg-black/55 text-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-[var(--font-outfit)] text-2xl md:text-3xl font-normal tracking-tight leading-tight">
                An MBBS degree opens pathways to practice globally, with licensing options in the UK, UAE, USA, and beyond.
              </h2>
            </div>
          </div>
        </ScrollAnimatedImage>

        <InternationalPathways
          title="Best Countries for"
          titleHighlight="MBBS Study Abroad"
          countries={mbbsCountries}
          recommendation={mbbsRecommendation}
        />

        {/* Bottom Scroll Animated Image Section with CTA Overlay */}
        <ScrollAnimatedImage
          variant="expand"
          foregroundImageSrc="/page-banner/mbbs-middle1.jpg"
          foregroundImageAlt="ADCB Consultancy Clinic Setup"
        >
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 bg-black/55 text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="font-[var(--font-outfit)] text-2xl md:text-3xl font-normal tracking-tight leading-tight">
                Secure your dream medical seat with expert, <br /> end-to-end counselling support.
              </h2>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Button href="#enquiry" size="md">
                  Join Course Now
                </Button>
                <Button href="#overview" variant="outlineWhite" size="md">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimatedImage>

        {/* Featured Courses Section */}
        <FeaturedCourses />

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
