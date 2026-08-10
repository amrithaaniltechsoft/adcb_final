import Navbar from "../components/global/Navbar";
import PreFooterCTA from "../components/global/PreFooterCTA";
import Footer from "../components/global/Footer";
import WhatsAppButton from "../components/global/WhatsAppButton";
import Banner from "../components/global/Banner";
import ScrollAnimatedImage from "../components/ui/ScrollAnimatedImage";

const dnbSpecialties = [
  "ANAESTHESIOLOGY",
  "Anatomy",
  "BIOCHEMISTRY",
  "COMMUNITY MEDICINE",
  "Cardio Vascular & Thoracic Surgery (Direct 6 Years Course)",
  "DERMATOLOGY and VENEREOLOGY and LEPROSY",
  "Emergency Medicine",
  "FAMILY MEDICINE",
  "FORENSIC MEDICINE",
  "GENERAL MEDICINE",
  "GENERAL SURGERY",
  "Hospital Administration",
  "IMMUNO- HAEMATOLOGY AND BLOOD TRANSFUSION",
  "MICROBIOLOGY",
  "NUCLEAR MEDICINE",
  "Neuro Surgery (Direct 6 Years Course)",
  "OPHTHALMOLOGY",
  "ORTHOPAEDICS",
  "Obstetrics and Gynaecology",
  "Otorhinolaryngology (E.N.T.)",
  "PAEDIATRICS",
  "PATHOLOGY",
  "PHARMACOLOGY",
  "PHYSICAL MED. and REHABILITATION",
  "PHYSIOLOGY",
  "PSYCHIATRY",
  "Paediatric Surgery (Direct 6 Years Course)",
  "Palliative Medicine",
  "Plastic & Reconstructive Surgery (Direct 6 Years Course)",
  "RADIATION ONCOLOGY",
  "RADIO-DIAGNOSIS",
  "Respiratory Medicine",
  "Tuberculosis and CHEST DISEASES",
];

export const metadata = {
  title: "DNB Specialties | PG Medical Admissions | ADCB Consultancy",
  description:
    "Complete guide to DNB (Diplomate of National Board) specialties — the full list of broad and super-specialty courses, eligibility, and expert counselling guidance.",
};

export default function DnbPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-20 bg-black shadow-[0_15px_30px_rgba(0,0,0,0.5)] min-h-screen flex flex-col">
        <Banner
          title="DNB Specialties"
          description="Explore the complete list of DNB (Diplomate of National Board) specialties for PG medical admissions across India."
          imageSrc="/courses/md-ms.jpg"
          imageAlt="DNB Admissions"
        />

        <section className="py-20 md:py-24 bg-black text-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="font-[var(--font-outfit)] text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Available Specialties
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
              DNB courses are offered by the National Board of Examinations (NBE) in medical institutions and hospitals recognised for PG training across the country.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {dnbSpecialties.map((specialty, index) => (
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
