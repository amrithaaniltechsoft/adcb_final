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

export default function MbbsHimachalGuide() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
            <span className="w-10 h-[1px] bg-white/20" />
            Himachal Pradesh MBBS
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Complete Counselling Guide
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            Everything you need to know about Himachal Pradesh MBBS counselling, eligibility, fees, and seat categories.
          </p>
        </div>

        {/* A. Introduction */}
        <div className="mb-10">
          <SectionHeading label="A. Introduction" />
          <div className="space-y-4">
            <FaqQuestion question="Are you eligible for Himachal Pradesh MBBS State Quota, or can you apply only under the Management Quota?" />
            <FaqQuestion question="Can non-Himachali candidates get admission to MBBS in Himachal Pradesh? If yes, under which quota and what are the eligibility conditions?" />
            <FaqQuestion question="What documents are mandatory after seat allotment, and can your admission be cancelled if even one document is missing at the time of reporting?" />
          </div>
        </div>

        {/* B. Distribution of Seats & Admission Criteria */}
        <div className="mb-10">
          <SectionHeading label="B. Distribution of Seats &amp; Admission Criteria" />
          <div className="space-y-4">
            <FaqQuestion question="Did you know that Himachal Pradesh has different seat quotas (State, Management & NRI), and your eligibility depends on which quota you apply under?" />
            <FaqQuestion question="Which category of seat gives you the highest chance of getting an MBBS seat in Himachal Pradesh based on your NEET score?" />
            <FaqQuestion question="Can you get admission to a Private Medical College in Himachal Pradesh at a lower fee through a different quota than the one you are planning to apply under?" />
          </div>
        </div>

        {/* C. NRI Category */}
        <div className="mb-10">
          <SectionHeading label="C. NRI Category" />
          <div className="space-y-4">
            <FaqQuestion question="Can you apply under the NRI Quota even if you are not an NRI but one of your parents is an NRI/OCI/PIO?" />
            <FaqQuestion question="What are the mandatory NRI documents required during counselling, and can your admission be rejected if even one document is missing or incorrectly submitted?" />
            <FaqQuestion question="Did you know that if NRI seats remain vacant in the third round, they can be converted to other eligible candidates under specific rules? Could this improve your admission chances?" />
          </div>
        </div>

        {/* D. Eligibility and Educational Qualifications */}
        <div className="mb-10">
          <SectionHeading label="D. Eligibility and Educational Qualifications" />
          <div className="space-y-4">
            <FaqQuestion question="Can you get a Himachal Pradesh State Quota MBBS seat even if you studied outside Himachal Pradesh?" />
            <FaqQuestion question="Are children of Central Government, Defence, or Government employees posted outside Himachal Pradesh eligible for State Quota admission?" />
            <FaqQuestion question="If you are not a Bonafide Himachali, can you still get an MBBS seat in Himachal Pradesh? Which quota can you apply under?" />
            <FaqQuestion question="Is passing Class 11 & 12 from Himachal Pradesh compulsory for every State Quota candidate, or are there special exemptions?" />
            <FaqQuestion question="Can reserved category candidates apply under both their reserved category and the General (Unreserved) category during counselling?" />
            <FaqQuestion question="Does qualifying NEET-UG alone guarantee admission to MBBS in Himachal Pradesh, or are there additional eligibility conditions you must satisfy?" />
          </div>
        </div>

        {/* E. Counselling & Admission Procedure */}
        <div className="mb-10">
          <SectionHeading label="E. Counselling &amp; Admission Procedure" />
          <div className="space-y-4">
            <FaqQuestion question="Can you lose your allotted MBBS seat if you fail to report to the college or miss even one step after seat allotment?" />
            <FaqQuestion question="Do you need to submit fresh college choices in every round of counselling, even if you already participated in the previous round?" />
            <FaqQuestion question="If you participate in Round 2 or Round 3 for upgradation and don't get a better seat, will you lose your previously allotted seat?" />
            <FaqQuestion question="Can you fill colleges in your preference list even if there are no vacant seats displayed for those colleges?" />
            <FaqQuestion question="Why do some candidates have to pay a token amount before Round 2 and Round 3, and how can this affect their counselling participation?" />
            <FaqQuestion question="What happens to reserved category, NRI, PwD, J&K Migrant, and Tibetan Refugee seats if they remain vacant in later rounds? Can General category candidates benefit?" />
          </div>
        </div>

      </div>
    </section>
  );
}
