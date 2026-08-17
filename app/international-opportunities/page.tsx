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
    name: "USA",
    flag: "/c-flag/usa.png",
    image: "/pathway/usa.jpg",
    highlights: [
      "Opportunity to pursue fellowships, advanced clinical training, research and medical practice",
      "Indian postgraduate doctors can enter the US pathway through ECFMG certification and USMLE requirements, subject to eligibility",
      "Opportunities across specialties in hospitals, academic medicine and research",
    ],
  },
  {
    name: "United Kingdom",
    flag: "/c-flag/uk.png",
    image: "/pathway/united-kingdom.jpg",
    highlights: [
      "Indian MD/MS holders can explore specialist registration, NHS opportunities, fellowships and further training",
      "Doctors with acceptable international postgraduate qualifications can apply through the GMC's relevant registration routes",
      "Particularly attractive for doctors seeking NHS and academic career opportunities",
    ],
  },
  {
    name: "Australia",
    flag: "/c-flag/au.webp",
    image: "/pathway/australia.jpg",
    highlights: [
      "Internationally trained specialists can apply through Australia's Specialist Pathway",
      "Qualifications and specialist training are assessed by the relevant Australian authority before registration",
      "Opportunities include specialist practice, further training, research and hospital-based careers",
    ],
  },
  {
    name: "New Zealand",
    flag: "/c-flag/au.webp",
    image: "/pathway/australia.jpg",
    highlights: [
      "Overseas-trained specialists can apply for specialist/vocational registration through the appropriate pathway",
      "New Zealand specifically has a pathway for specialists trained outside New Zealand and Australia, where qualifications and experience are assessed individually",
      "Opportunities are available in hospitals, specialist practice and healthcare services",
    ],
  },
  {
    name: "United Arab Emirates",
    flag: "/c-flag/uae.png",
    image: "/pathway/united-arab-emirates.jpg",
    highlights: [
      "MD/MS doctors can explore opportunities in Dubai, Abu Dhabi and other Emirates",
      "Specialist licensing is governed by UAE health authorities and is based on qualifications, training, experience and licensing requirements",
      "Strong opportunities in private hospitals, healthcare groups and specialist clinics",
    ],
  },
  {
    name: "Qatar",
    flag: "/c-flag/qatar.png",
    image: "/pathway/qatar.jpg",
    highlights: [
      "Indian postgraduate doctors can explore specialist medical practice and hospital opportunities",
      "Qatar's DHP evaluates postgraduate qualifications and post-qualification clinical experience for specialist licensing",
      "Opportunities exist across government and private healthcare institutions",
    ],
  },
  {
    name: "Saudi Arabia",
    flag: "/c-flag/sa.png",
    image: "/pathway/saudi-arabia.jpg",
    highlights: [
      "Indian MD/MS doctors can explore opportunities for specialist medical practice in Saudi Arabia",
      "Overseas postgraduate qualifications are assessed by the Saudi Commission for Health Specialties (SCFHS) for professional classification",
      "Opportunities are available across government hospitals, private hospitals, healthcare groups and specialist clinics",
      "Doctors may pursue careers in specialist departments corresponding to their postgraduate qualification",
      "International qualifications require appropriate verification, professional registration and clinical experience as applicable under SCFHS requirements",
    ],
  },
  {
    name: "Ireland",
    flag: "/c-flag/uk.png",
    image: "/pathway/united-kingdom.jpg",
    highlights: [
      "Indian MD/MS doctors can explore opportunities for medical practice, specialist pathways and further postgraduate training in Ireland",
      "Internationally trained doctors can pursue registration through the Medical Council of Ireland, subject to the applicable registration pathway",
      "Opportunities exist across public hospitals, private healthcare, specialist services, research and academic medicine",
      "Doctors may also explore further specialist training and fellowship opportunities",
      "Registration and specialist practice are subject to qualification assessment, registration requirements and applicable Irish medical regulations",
    ],
  },
  {
    name: "Germany",
    flag: "/c-flag/uk.png",
    image: "/pathway/united-kingdom.jpg",
    highlights: [
      "Indian MD/MS doctors can explore opportunities for specialist medical practice and further medical training in Germany",
      "Doctors with overseas specialist qualifications can apply for recognition of their specialist title in Germany",
      "Medical practice requires the appropriate German medical licence (Approbation) before specialist-title recognition can be pursued",
      "Opportunities are available in hospitals, specialist departments, clinics, research and academic healthcare",
      "The pathway generally involves recognition of qualifications, licensing and German-language requirements",
    ],
  },
  {
    name: "Canada",
    flag: "/c-flag/ca.png",
    image: "/pathway/canada.jpg",
    highlights: [
      "Indian MD/MS doctors can explore pathways for specialist practice, further training, fellowship and advanced medical careers in Canada",
      "Internationally trained specialists may be assessed through routes such as the Royal College Practice Eligibility Route (PER), depending on their specialty and training background",
      "The assessment compares international postgraduate training with Canadian specialist-training standards",
      "Eligible doctors may need to complete Royal College examinations and practice requirements before certification",
      "Medical licensing is ultimately handled by the provincial or territorial medical regulatory authority, separate from Royal College certification",
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
