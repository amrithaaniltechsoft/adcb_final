"use client";

function FaqQuestion({ question }: { question: string }) {
  return (
    <div className="flex items-start gap-4 p-5 md:p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#ED1C24]/30 transition-colors">
      <span className="text-[#ED1C24] flex-shrink-0 mt-0.5 text-lg">❓</span>
      <p className="text-base md:text-lg text-gray-300 leading-relaxed">{question}</p>
    </div>
  );
}

function SectionHeading({ label }: { label: string }) {
  return <h2 className="font-[var(--font-outfit)] text-xl md:text-2xl lg:text-3xl font-medium text-white mb-7">{label}</h2>;
}

export default function MbbsBiharGuide() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
            <span className="w-10 h-[1px] bg-white/20" />
            Bihar MBBS
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Complete Counselling Guide
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            Everything you need to know about Bihar MBBS counselling, eligibility, fees, and seat categories.
          </p>
        </div>

        <div className="mb-10">
          <SectionHeading label="Key Questions" />
          <div className="space-y-4">
            <FaqQuestion question="Did you know that 50% of the seats in Bihar Private Medical Colleges are offered at Government Medical College fees? Are you eligible for them?" />
            <FaqQuestion question="Are you sure you know which candidates can participate in Bihar MBBS Counselling? Is Bihar domicile mandatory for every type of seat?" />
            <FaqQuestion question="Planning to apply for Private Medical Colleges? Do you know why you may have to deposit ₹2,00,000 as a refundable security deposit?" />
            <FaqQuestion question="Do you know what happens to your security deposit if you don't join the allotted college or skip the reporting process?" />
            <FaqQuestion question="Round 1, Round 2, Round 3 & Stray Vacancy Round – Do you know which rounds you remain eligible for after getting a seat?" />
            <FaqQuestion question="Should you choose 'Upgradation – YES' or 'NO' after Round 1? One wrong decision can change your final college." />
            <FaqQuestion question="Do you know which original documents are compulsory during Bihar MBBS counselling? Missing even one document can affect your admission." />
            <FaqQuestion question="Confused about Government, Private, Minority & NRI seats? Do you know which category you are actually eligible for?" />
            <FaqQuestion question="Do you know how Bihar prepares the final merit list and allots seats based on NEET Rank, category and choice filling?" />
            <FaqQuestion question="Do you know the most common mistakes students make during Bihar MBBS choice filling that can cost them a better medical college?" />
          </div>
        </div>

      </div>
    </section>
  );
}
