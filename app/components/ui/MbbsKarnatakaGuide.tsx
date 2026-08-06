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

export default function MbbsKarnatakaGuide() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
            <span className="w-10 h-[1px] bg-white/20" />
            Karnataka MBBS
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Complete Counselling Guide
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            Everything you need to know about Karnataka MBBS counselling, eligibility, fees, and seat categories.
          </p>
        </div>

        {/* Instructions for students */}
        <div className="mb-14">
          <SectionHeading label="A. Instructions for Students Seeking Admission to First MBBS (Academic Year 2025-26)" />
          <div className="space-y-4">
            <FaqQuestion question="Additional Documents May Be Required Depending on Your Category" />
            <FaqQuestion question="Mandatory Affidavits & Bonds Before Admission" />
            <FaqQuestion question="Document Verification Is More Than Just Carrying Originals" />
            <CtaBox>Avoid last-minute surprises—get your documents verified by ADCB before reporting.</CtaBox>
          </div>
        </div>

        {/* B. Fee Structure */}
        <div className="mb-14">
          <SectionHeading label="B. Fee Structure" />
          <div className="space-y-4">
            <FaqQuestion question="How Much MBBS Fee Do You Actually Have to Pay in Karnataka?" />
            <FaqQuestion question="Are You Eligible for Fee Concessions or SSP Scholarship Benefits?" />
            <FaqQuestion question="Do You Know the Correct Fee Payment Process for Your Allotted Seat?" />
          </div>
        </div>

      </div>
    </section>
  );
}
