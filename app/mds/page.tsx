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
  title: "MDS Admissions & Counselling | ADCB Consultancy",
  description: "Explore Master of Dental Surgery (MDS) specializations, counselling guidance, and global licensing pathways for dentists.",
};

const mdsSpecialties = [
  {
    title: "Key area including conservative dentistry",
    image: "/page-banner/mds-middle3a.jpg",
    highlights: [
      "Dental fillings (for cavities)",
      "Aesthetic restorations (tooth-colored fillings, veneers)",
      "Management of tooth wear and fractures",
      "Preventive care (fluoride therapy, sealants)"
    ]
  },
  {
    title: "Key area including Endodontics",
    image: "/courses/mds.jpg",
    highlights: [
      "Common procedures:",
      "Root canal treatment (RCT)",
      "Retreatment of failed RCT",
      "Management of dental trauma",
      "Surgical endodontics (apicoectomy)"
    ]
  }
];

const mdsCountries = [
  {
    name: "United Arab Emirates",
    flag: "/c-flag/uae.png",
    image: "/pathway/united-arab-emirates.jpg",
    highlights: [
      "Fastest pathway for Indian MDS graduates",
      "DHA / DOH / MOH licensing",
      "Strong demand for specialists",
      "Average Endodontist salaries often range from AED 15,000–35,000+ per month depending on experience and setup."
    ]
  },
  {
    name: "Saudi Arabia",
    flag: "/c-flag/sa.png",
    image: "/pathway/saudi-arabia.jpg",
    highlights: [
      "Good demand for specialist dentists",
      "Tax-free income",
      "Easier transition compared to Western countries."
    ]
  },
  {
    name: "Qatar",
    flag: "/c-flag/qatar.png",
    image: "/pathway/qatar.jpg",
    highlights: [
      "High-income healthcare market",
      "Strong demand for experienced specialists."
    ]
  },
  {
    name: "Oman",
    flag: "/c-flag/oman.png",
    image: "/pathway/oman.jpg",
    highlights: [
      "Growing dental sector",
      "Attractive specialist compensation."
    ]
  },
  {
    name: "United Kingdom",
    flag: "/c-flag/uk.png",
    image: "/pathway/united-kingdom.jpg",
    highlights: [
      "Requires ORE/LDS pathway",
      "Long-term career growth and specialist recognition."
    ]
  },
  {
    name: "Australia and New Zealand",
    flag: "/c-flag/au.webp",
    image: "/pathway/australia.jpg",
    highlights: [
      "ADC registration pathway",
      "Excellent quality of life and earning potential."
    ]
  },
  {
    name: "Canada",
    flag: "/c-flag/ca.png",
    image: "/pathway/canada.jpg",
    highlights: [
      "NDEB equivalency process",
      "Longer licensing route but excellent long-term opportunities."
    ]
  }
];

const mdsRecommendation = {
  title: "Best Country Recommendation",
  description: "If your goal is to start working abroad as early as possible after MDS, UAE is usually the most practical and popular destination for Indian Endodontists because of:",
  bullets: [
    "Relatively straightforward licensing pathways",
    "Strong Indian dentist community",
    "Good specialist demand",
    "Tax-efficient earnings",
    "Geographic proximity to India"
  ],
  buttonText: "Consult UAE Pathway",
  buttonHref: "#enquiry",
  backgroundImageSrc: "/page-banner/uae-banner.jpg"
};

export default function MdsPage() {
  return (
    <>
      <Navbar />
      {/* Main content wrapper that slides over the footer */}
      <main className="relative z-20 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.5)] min-h-screen flex flex-col">
        {/* Banner Section */}
        <Banner
          title="MDS Admissions & Counselling"
          description="Transform your dental career. Get expert, transparent guidance for NEET MDS counselling and secure admissions in top-tier dental colleges."
          imageSrc="/courses/mds.jpg"
          imageAlt="Master of Dental Surgery (MDS)"
          buttonText="Explore Specialties"
          buttonHref="#specialties"
        />

        {/* Overview Section */}
        <ContentSection
          id="overview"
          title="Conservative Dentistry & Endodontics"
          content="Conservative Dentistry & Endodontics is one of the most sought-after clinical branches in MDS. The branch primarily focuses on restoring teeth, aesthetic restorations, smile enhancement, and advanced root canal treatments.<br><br>It offers strong patient flow because restorative and endodontic procedures are required in almost every dental practice. It is a highly hands-on clinical branch with opportunities in private practice, specialty clinics, academics, and corporate dentistry."
        />

        <ClinicalAreasSpotlight specialties={mdsSpecialties} />
        {/* Custom Video Section (Boxed, with custom play cursor on hover) */}
        <CustomVideoPlayer
          videoSrc="/banner/md.mp4"
          videoTitle="ADCB Consultancy Campus Tour"
        />

        {/* Overview Scroll Animated Section */}
        <ScrollAnimatedImage
          variant="expand"
          foregroundImageSrc="/page-banner/mds-middle4.jpg"
          foregroundImageAlt="ADCB Consultancy Global Opportunities backdrop"
        >
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 bg-black/55 text-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-[var(--font-outfit)] text-2xl md:text-3xl font-normal tracking-tight leading-tight">
                Your MDS degree can open pathways abroad after obtaining the required local license.
              </h2>
            </div>
          </div>
        </ScrollAnimatedImage>

        <InternationalPathways
          title="Best Countries for"
          titleHighlight="Conservative Dentistry & Endodontics"
          countries={mdsCountries}
          recommendation={mdsRecommendation}
        />

        {/* Bottom Scroll Animated Image Section with CTA Overlay */}
        <ScrollAnimatedImage
          variant="expand"
          foregroundImageSrc="/page-banner/mds-middle2.png"
          foregroundImageAlt="ADCB Consultancy Clinic Setup"
        >
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 bg-black/55 text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="font-[var(--font-outfit)] text-2xl md:text-3xl font-normal tracking-tight leading-tight">
                Secure your dream MDS <br /> clinical specialization with expert, <br /> end-to-end counselling support.
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





