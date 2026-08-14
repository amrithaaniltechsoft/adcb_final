import Navbar from "../components/global/Navbar";
import PreFooterCTA from "../components/global/PreFooterCTA";
import Footer from "../components/global/Footer";
import WhatsAppButton from "../components/global/WhatsAppButton";
import Banner from "../components/global/Banner";
import InternationalGrid, { type CountryItem } from "../components/home/InternationalGrid";
import { buildSeoMetadata } from "@/lib/seo";
import API_BASE_URL from "@/lib/apiUrl";

export async function generateMetadata() {
  return buildSeoMetadata(
    "international-opportunities",
    "International Opportunities & Licensing Pathways | ADCB Consultancy",
    "Explore medical and dental residency, licensing, and practice options in the UK, UAE, Saudi Arabia, Canada, Qatar, Oman, and Australia.",
    "study abroad, international medical admissions, UAE dental license, UK medical"
  );
}

const internationalCountries = [
  {
    name: "United Kingdom",
    flag: "/c-flag/uk.png",
    image: "/pathway/united-kingdom.jpg",
    highlights: [
      "PLAB / UKMLA pathway for medical licensing",
      "Direct residency training opportunities with NHS salaries",
      "ORE / LDS exam pathways for dentists registration",
      "Highly respected global qualifications with long-term residency options",
    ],
  },
  {
    name: "United Arab Emirates",
    flag: "/c-flag/uae.png",
    image: "/pathway/united-arab-emirates.jpg",
    highlights: [
      "DHA (Dubai), DOH (Abu Dhabi), or MOH licensing options",
      "Fastest growing medical and dental hub in the Middle East",
      "Attractive tax-free clinical compensation packages",
      "Straightforward licensing integration for Indian graduates",
    ],
  },
  {
    name: "Saudi Arabia",
    flag: "/c-flag/sa.png",
    image: "/pathway/saudi-arabia.jpg",
    highlights: [
      "High demand for general practitioners, specialists, and dental practitioners",
      "Excellent, rapidly growing medical infrastructure",
      "Highly competitive tax-free salaries and relocation benefits",
      "Easier licensing and transition pathways for overseas medical professionals",
    ],
  },
  {
    name: "Canada",
    flag: "/c-flag/ca.png",
    image: "/pathway/canada.jpg",
    highlights: [
      "MCCEE / MCCQE licensing process for medical graduates",
      "NDEB equivalency and licensing process for dentists",
      "High quality of life, public safety, and premier earning brackets",
      "Strong pathways for permanent residency and citizenship",
    ],
  },
  {
    name: "Qatar",
    flag: "/c-flag/qatar.png",
    image: "/pathway/qatar.jpg",
    highlights: [
      "DHP (Department of Healthcare Professions) licensing",
      "High-income state-of-the-art healthcare market",
      "Lucrative tax-free specialist packages and housing allowances",
      "Relatively short credential evaluation timeline",
    ],
  },
  {
    name: "Oman",
    flag: "/c-flag/oman.png",
    image: "/pathway/oman.jpg",
    highlights: [
      "OMSB (Oman Medical Specialty Board) examinations",
      "Expanding healthcare system with clean clinics and hospitals",
      "Attractive specialist and general practitioner compensation",
      "Stable environment, scenic lifestyle, and geographic proximity to India",
    ],
  },
  {
    name: "Australia & New Zealand",
    flag: "/c-flag/au.webp",
    image: "/pathway/australia.jpg",
    highlights: [
      "AMC registration for physicians and ADC registration for dentists",
      "Exceptional quality of life, work-life balance, and premier earnings",
      "Strong demand for rural and metropolitan clinical specialists",
      "Well-defined permanent residency pathways for skilled medical workers",
    ],
  },
];

const recommendationData = {
  title: "Best Path Recommendation",
  description: "For Indian medical and dental graduates seeking rapid licensing and immediate clinical practice, the UAE (DHA/DOH) and the UK (PLAB/UKMLA) represent the most practical pathways due to direct exam lines and large support communities.",
  bullets: [
    "Well-defined licensing exams (PLAB/DHA)",
    "Familiar clinical guidelines and practices",
    "Fast credentials evaluation and registration",
    "Highly competitive salary ranges",
  ],
  buttonText: "Schedule Global Consultation",
  buttonHref: "/contact",
  backgroundImageSrc: "/page-banner/uae-banner.jpg",
};

interface ApiOpportunity {
  slug: string;
  title: string;
  description: string;
  image: string | null;
  flag: string | null;
}

async function getOpportunities(): Promise<CountryItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/opportunities`, { cache: "no-store" });
    if (!res.ok) return [];
    const json = await res.json();
    if (!Array.isArray(json.data) || json.data.length === 0) return [];

    return json.data.map((item: ApiOpportunity) => ({
      name: item.title,
      flag: item.flag ?? "/c-flag/uk.png",
      image: item.image ?? "/pathway/united-kingdom.jpg",
      highlights: item.description
        .split("\n")
        .map((h) => h.trim())
        .filter(Boolean),
    }));
  } catch {
    return [];
  }
}

export default async function InternationalOpportunitiesPage() {
  const apiCountries = await getOpportunities();
  const countries = apiCountries.length > 0 ? apiCountries : internationalCountries;

  return (
    <>
      <Navbar />
      <main className="relative z-20 bg-black shadow-[0_15px_30px_rgba(0,0,0,0.5)] min-h-screen flex flex-col">
        {/* Banner Section */}
        <Banner
          title="Global Medical Pathways"
          description="Transform your career globally. Secure licensing guidance, exam preparation advice, and credential pathways for premier countries."
          imageSrc="/international-opportunities/banner.png"
          imageAlt="International Opportunities Banner"
        />

        {/* Modular Grid Layout Section */}
        <div id="pathways-grid">
          <InternationalGrid
            title="Best Countries for"
            titleHighlight="Medical & Dental Practice"
            countries={countries}
            recommendation={recommendationData}
          />
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
