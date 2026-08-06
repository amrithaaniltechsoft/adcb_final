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

function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
      <p className="font-semibold text-amber-300 text-base md:text-lg">{children}</p>
    </div>
  );
}

function SectionHeading({ label }: { label: string }) {
  return <h2 className="font-[var(--font-outfit)] text-xl md:text-2xl lg:text-3xl font-medium text-white mb-7">{label}</h2>;
}

export default function MbbsHaryanaGuide() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
            <span className="w-10 h-[1px] bg-white/20" />
            Haryana MBBS
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Complete Counselling Guide
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            Everything you need to know about Haryana MBBS counselling, eligibility, fees, and seat categories.
          </p>
        </div>

        {/* A. Reservations */}
        <div className="mb-10">
          <SectionHeading label="A. Reservations" />
          <div className="space-y-4">
            <FaqQuestion question="Are all MBBS seats in Haryana reserved under the State Quota, or how are seats divided between All India Quota, State Quota, Management Quota, and NRI Quota?" />
            <FaqQuestion question="Can every NEET-qualified candidate claim Haryana State Quota benefits, or are there specific eligibility conditions for reservation?" />
            <FaqQuestion question="Are reservations and seat distribution the same in Government, Private, and Private University medical colleges in Haryana?" />
          </div>
        </div>

        {/* B. Admission */}
        <div className="mb-10">
          <SectionHeading label="B. Admission" />
          <div className="space-y-4">
            <FaqQuestion question="Can the number of MBBS seats in Haryana change even after the admission notification is released?" />
            <FaqQuestion question="Is online registration alone enough for Haryana MBBS Counselling, or is physical document verification also mandatory?" />
            <FaqQuestion question="Does the Haryana reservation policy apply to every medical college, or only to specific Government and State Quota seats?" />
          </div>
        </div>

        {/* C. Eligibility Criteria */}
        <div className="mb-10">
          <SectionHeading label="C. Eligibility Criteria" />
          <div className="space-y-4">
            <FaqQuestion question="Are Haryana domicile candidates the only ones eligible for Government MBBS seats, or can students from other states also secure admission?" />
            <FaqQuestion question="If you're not a Haryana resident, are you still eligible for Management Quota MBBS seats in Haryana Medical Colleges?" />
            <FaqQuestion question="Have you checked whether your original documents meet Haryana's admission verification requirements, or could your allotted seat be cancelled?" />
          </div>
        </div>

        {/* D. Admission Process */}
        <div className="mb-10">
          <SectionHeading label="D. Admission Process" />
          <div className="space-y-4">
            <FaqQuestion question="Can your MBBS seat still be cancelled even after online allotment and fee payment?" />
            <FaqQuestion question="Do you know the deposit amount required to participate in the 2nd Round of Haryana MBBS Counselling—and when it is refundable or forfeited?" />
            <FaqQuestion question="If you don't get your preferred college in Round 1, should you upgrade in Round 2 or retain your existing seat? Which option is better for your rank?" />
          </div>
        </div>

        {/* E. Admission to NRI category */}
        <div className="mb-10">
          <SectionHeading label="E. Admission to NRI Category" />
          <div className="space-y-4">
            <FaqQuestion question="Who is actually eligible to apply under the Haryana NRI MBBS Quota—only NRIs, or can OCI, PIO, Foreign Nationals, and relatives of NRIs also apply?" />
            <FaqQuestion question="Can a distant NRI relative sponsor your MBBS admission, or are only specific family relationships accepted under Haryana's NRI rules?" />
            <FaqQuestion question="If NRI seats remain vacant, what happens to those seats—and could that increase your chances of getting an MBBS admission?" />
          </div>
        </div>

        {/* F. Fee Structure */}
        <div className="mb-10">
          <SectionHeading label="F. Fee Structure" />
          <div className="space-y-4">
            <FaqQuestion question="Can you pay only 50% of the tuition fee at the time of admission in Haryana Private Medical Colleges, or is the full fee mandatory?" />
            <FaqQuestion question="If you upgrade to a better college in a later counselling round, what happens to the tuition fee you've already paid?" />
            <FaqQuestion question="Can you get a refund of your MBBS tuition fee if you decide to withdraw your admission—and what are the conditions and deadlines?" />
          </div>
        </div>

        {/* G. General Instructions */}
        <div className="mb-10">
          <SectionHeading label="G. General Instructions" />
          <div className="space-y-4">
            <FaqQuestion question="Can you claim a reserved category seat later if you forget to select your category during registration?" />
            <FaqQuestion question="Will your admission be cancelled if even one certificate or reservation document is found to be incorrect during verification?" />
            <FaqQuestion question="Do you know which documents are mandatory at counselling, and which missing certificate can stop your MBBS admission even after seat allotment?" />
          </div>
        </div>

      </div>
    </section>
  );
}
