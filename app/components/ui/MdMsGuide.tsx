"use client";

import { useState } from "react";
import ConsultationModal from "./ConsultationModal";
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

interface MdMsGuideSection {
  id: string;
  label: string;
  questions: string[];
}

interface ApiMdmsGuide {
  state_slug: string;
  title: string | null;
  subtitle: string | null;
  intro: string | null;
  sections: MdMsGuideSection[] | null;
}

function FaqQuestion({ question, onOpenForm }: { question: string; onOpenForm: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpenForm}
      className="w-full text-left flex items-start gap-4 p-5 md:p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#ED1C24]/30 hover:bg-white/[0.08] transition-colors cursor-pointer group"
    >
      <span className="text-[#ED1C24] flex-shrink-0 mt-0.5 text-lg">❓</span>
      <p className="text-base md:text-lg text-gray-300 leading-relaxed flex-1">{question}</p>
      <span className="flex-shrink-0 mt-1 text-[#ED1C24] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        Enquire →
      </span>
    </button>
  );
}

export default function MdMsGuide({
  slug,
  guide,
}: {
  slug: string;
  guide?: ApiMdmsGuide | null;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openForm = () => setIsModalOpen(true);

  const localSections = mdmsGuideData[slug] ?? [];
  const sections = guide?.sections?.length ? guide.sections : localSections;
  const stateName = stateNames[slug] ?? "State";

  if (sections.length === 0) return null;

  const eyebrow = guide?.title || `${stateName} MD/MS`;
  const heading = guide?.subtitle || "Complete Counselling Guide";
  const intro =
    guide?.intro ||
    `Everything you need to know about ${stateName} MD/MS counselling, eligibility, fees, and seat allotment.`;

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
            <span className="w-10 h-[1px] bg-white/20" />
            {eyebrow}
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            {heading}
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            {intro}
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.id} className="mb-14">
            <h2 className="font-[var(--font-outfit)] text-xl md:text-2xl lg:text-3xl font-medium text-white mb-7">{section.label}</h2>
            <div className="space-y-4">
              {section.questions.map((question) => (
                <FaqQuestion key={question} question={question} onOpenForm={openForm} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCourse="MD/MS"
      />
    </section>
  );
}
