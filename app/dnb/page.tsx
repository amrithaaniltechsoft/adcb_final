import Navbar from "../components/global/Navbar";
import PreFooterCTA from "../components/global/PreFooterCTA";
import Footer from "../components/global/Footer";
import WhatsAppButton from "../components/global/WhatsAppButton";
import Banner from "../components/global/Banner";
import ScrollAnimatedImage from "../components/ui/ScrollAnimatedImage";

const API_BASE_URL = process.env.ADCB_API_URL ?? "https://insighthealthservices.co.uk/";

/*const fallbackDnbSpecialties = [
  "ANAESTHESIOLOGY",
  "ANATOMY",
  "BIOCHEMISTRY",
  "COMMUNITY MEDICINE",
  "CARDIO VASCULAR & THORACIC SURGERY (DIRECT 6 YEARS COURSE)",
  "DERMATOLOGY AND VENEREOLOGY AND LEPROSY",
  "EMERGENCY MEDICINE",
  "FAMILY MEDICINE",
  "FORENSIC MEDICINE",
  "GENERAL MEDICINE",
  "GENERAL SURGERY",
  "HOSPITAL ADMINISTRATION",
  "IMMUNO-HAEMATOLOGY AND BLOOD TRANSFUSION",
  "MICROBIOLOGY",
  "NUCLEAR MEDICINE",
  "NEURO SURGERY (DIRECT 6 YEARS COURSE)",
  "OPHTHALMOLOGY",
  "ORTHOPAEDICS",
  "OBSTETRICS AND GYNAECOLOGY",
  "OTORHINOLARYNGOLOGY (E.N.T.)",
  "PAEDIATRICS",
  "PATHOLOGY",
  "PHARMACOLOGY",
  "PHYSICAL MED. AND REHABILITATION",
  "PHYSIOLOGY",
  "PSYCHIATRY",
  "PAEDIATRIC SURGERY (DIRECT 6 YEARS COURSE)",
  "PALLIATIVE MEDICINE",
  "PLASTIC & RECONSTRUCTIVE SURGERY (DIRECT 6 YEARS COURSE)",
  "RADIATION ONCOLOGY",
  "RADIO-DIAGNOSIS",
  "RESPIRATORY MEDICINE",
  "TUBERCULOSIS AND CHEST DISEASES",
];*/

const fallbackBanner = {
  title: "DNB Specialties",
  description:
    "Explore the complete list of DNB (Diplomate of National Board) specialties for PG medical admissions across India.",
};

const fallbackIntro = {
  title: "Available Specialties",
  description:
    "DNB courses are offered by the National Board of Examinations (NBE) in medical institutions and hospitals recognised for PG training across the country.",
};

interface ApiDnbContent {
  banner_title: string | null;
  banner_description: string | null;
  intro_title: string | null;
  intro_description: string | null;
  specialties: string[] | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
}

async function getDnbContent(): Promise<ApiDnbContent | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/dnb`, { cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.data) return null;
    return json.data as ApiDnbContent;
  } catch {
    return null;
  }
}

export async function generateMetadata() {
  const apiContent = await getDnbContent();

  const metaTitle =
    apiContent?.meta_title ||
    "DNB Specialties | PG Medical Admissions | ADCB Consultancy";
  const metaDescription =
    apiContent?.meta_description ||
    "Complete guide to DNB (Diplomate of National Board) specialties — the full list of broad and super-specialty courses, eligibility, and expert counselling guidance.";
  const metaKeywords =
    apiContent?.meta_keywords ||
    "DNB admission, DNB specialities, DNB counselling, postgraduate medical";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "website",
    },
  };
}

export default async function DnbPage() {
  const apiContent = await getDnbContent();

  const specialties = apiContent?.specialties?.length ? apiContent.specialties : fallbackDnbSpecialties;
  const banner = {
    title: apiContent?.banner_title || fallbackBanner.title,
    description: apiContent?.banner_description || fallbackBanner.description,
  };
  const intro = {
    title: apiContent?.intro_title || fallbackIntro.title,
    description: apiContent?.intro_description || fallbackIntro.description,
  };

  return (
    <>
      <Navbar />
      <main className="relative z-20 bg-black shadow-[0_15px_30px_rgba(0,0,0,0.5)] min-h-screen flex flex-col">
        <Banner
          title={banner.title}
          description={banner.description}
          imageSrc="/courses/md-ms.jpg"
          imageAlt="DNB Admissions"
        />

        <section className="py-20 md:py-24 bg-black text-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="font-[var(--font-outfit)] text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              {intro.title}
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
              {intro.description}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {specialties.map((specialty, index) => (
                <div
                  key={specialty}
                  className="flex items-start gap-4 p-5 bg-white/5 rounded-lg border border-white/10 hover:border-[#ED1C24]/30 transition-colors"
                >
                  <span className="text-[#ED1C24] flex-shrink-0 mt-0.5 text-sm font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {specialty}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ScrollAnimatedImage
          variant="expand"
          foregroundImageSrc="/page-banner/mbbs-middle1.jpg"
          foregroundImageAlt="ADCB Consultancy"
        >
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 bg-black/55 text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="font-[var(--font-outfit)] text-xl sm:text-2xl md:text-3xl font-normal tracking-tight leading-tight">
                Secure your DNB seat with expert, <br /> end-to-end counselling support.
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
