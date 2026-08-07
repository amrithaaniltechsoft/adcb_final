import { mdmsGuideData } from "../../md-ms/[slug]/mdmsGuideData";

const stateNames: Record<string, string> = {
  "tamil-nadu": "Tamil Nadu",
  kerala: "Kerala",
  karnataka: "Karnataka",
  "andhra-pradesh": "Andhra Pradesh",
  telangana: "Telangana",
  "uttar-pradesh": "Uttar Pradesh",
  bihar: "Bihar",
  punjab: "Punjab",
  haryana: "Haryana",
  pondicherry: "Pondicherry",
  "west-bengal": "West Bengal",
  "himachal-pradesh": "Himachal Pradesh",
  uttarakhand: "Uttarakhand",
  chhattisgarh: "Chhattisgarh",
};

function FaqQuestion({ question }: { question: string }) {
  return (
    <div className="flex items-start gap-4 p-5 md:p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#ED1C24]/30 transition-colors">
      <span className="text-[#ED1C24] flex-shrink-0 mt-0.5 text-lg">❓</span>
      <p className="text-base md:text-lg text-gray-300 leading-relaxed">{question}</p>
    </div>
  );
}

export default function MdMsGuide({ slug }: { slug: string }) {
  const sections = mdmsGuideData[slug] ?? [];
  const stateName = stateNames[slug] ?? "State";

  if (sections.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
            <span className="w-10 h-[1px] bg-white/20" />
            {stateName} MD/MS
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Complete Counselling Guide
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            Everything you need to know about {stateName} MD/MS counselling, eligibility, fees, and seat allotment.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.id} className="mb-14">
            <h2 className="font-[var(--font-outfit)] text-xl md:text-2xl lg:text-3xl font-medium text-white mb-7">{section.label}</h2>
            <div className="space-y-4">
              {section.questions.map((question) => (
                <FaqQuestion key={question} question={question} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
