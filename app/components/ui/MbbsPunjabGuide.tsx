"use client";

function FaqQuestion({ question }: { question: string }) {
  return (
    <div className="flex items-start gap-4 p-5 md:p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#ED1C24]/30 transition-colors">
      <span className="text-[#ED1C24] flex-shrink-0 mt-0.5 text-lg">❓</span>
      <p className="text-base md:text-lg text-gray-300 leading-relaxed">{question}</p>
    </div>
  );
}

function CtaBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/5 border-l-4 border-[#ED1C24] p-5 mt-8">
      <p className="text-gray-300 text-base md:text-lg">{children}</p>
    </div>
  );
}

function SectionHeading({ label }: { label: string }) {
  return <h2 className="font-[var(--font-outfit)] text-xl md:text-2xl lg:text-3xl font-medium text-white mb-7">{label}</h2>;
}

export default function MbbsPunjabGuide() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
            <span className="w-10 h-[1px] bg-white/20" />
            Punjab MBBS
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Complete Counselling Guide
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            Everything you need to know about Punjab MBBS counselling, eligibility, fees, and seat categories.
          </p>
        </div>

        {/* A. General Instructions */}
        <div className="mb-10">
          <SectionHeading label="A. General Instructions" />
          <div className="space-y-4">
            <FaqQuestion question="Are you really eligible for Punjab MBBS State Counselling?" />
            <FaqQuestion question="Can your allotted MBBS seat be cancelled even after allotment?" />
            <FaqQuestion question="Did you know your preferred college may not appear in the final seat matrix?" />
            <FaqQuestion question="Will paying the admission fee confirm your MBBS seat?" />
            <FaqQuestion question="Are you filling the correct college and quota preferences during counselling?" />
            <FaqQuestion question="What happens if Punjab MBBS counselling rules change after you apply?" />
          </div>
        </div>

        {/* B. Instructions for NRI candidates */}
        <div className="mb-10">
          <SectionHeading label="B. Instructions for NRI Candidates" />
          <div className="space-y-4">
            <FaqQuestion question="Who is actually eligible to apply under the Punjab MBBS NRI Quota?" />
            <FaqQuestion question="Is qualifying NEET-UG mandatory even for NRI quota admissions?" />
            <FaqQuestion question="Do you need an Eligibility/Equivalency Certificate before applying for NRI seats?" />
            <FaqQuestion question="Are there separate application fees and eligibility charges for NRI candidates?" />
            <FaqQuestion question="Can the NRI application or eligibility fee be refunded if you don't get a seat?" />
            <FaqQuestion question="Are you following the correct application process for Punjab MBBS NRI admissions?" />
          </div>
        </div>

        {/* C. Eligibility Criteria */}
        <div className="mb-10">
          <SectionHeading label="C. Eligibility Criteria" />
          <div className="space-y-4">
            <FaqQuestion question="Have you qualified all the eligibility conditions for Punjab MBBS, or just cleared NEET-UG 2025?" />
            <FaqQuestion question="Will your NEET score alone decide your Punjab MBBS admission?" />
            <FaqQuestion question="Are you eligible for Punjab MBBS counselling based on your age and state admission rules?" />
          </div>
        </div>

      </div>
    </section>
  );
}
