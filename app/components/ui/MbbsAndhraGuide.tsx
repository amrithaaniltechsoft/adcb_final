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

export default function MbbsAndhraGuide() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
            <span className="w-10 h-[1px] bg-white/20" />
            Andhra Pradesh MBBS
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Complete Counselling Guide
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            Everything you need to know about Andhra Pradesh MBBS counselling, eligibility, fees, and seat categories.
          </p>
        </div>

        {/* A. Regulations */}
        <div className="mb-10">
          <SectionHeading label="A. Regulations" />
          <div className="space-y-4">
            <FaqQuestion question="Can a single application make you eligible for every MBBS seat category in Andhra Pradesh, or are separate counselling rules involved?" />
            <FaqQuestion question="What is the difference between Competent Authority, Management Quota (Category-B), and NRI (Category-C) seats—and which one are you actually eligible for?" />
            <FaqQuestion question="Why does Andhra Pradesh conduct separate counselling for different seat categories even though the application process is common?" />
          </div>
        </div>

        {/* B. Number of Seats & Seat Sharing */}
        <div className="mb-10">
          <SectionHeading label="B. Number of Seats &amp; Seat Sharing" />
          <div className="space-y-4">
            <FaqQuestion question="Are all Management Quota MBBS seats in Andhra Pradesh open to candidates from across India, or do some seats give preference only to Andhra Pradesh local candidates?" />
            <FaqQuestion question="What is the difference between Category-B1, Category-B2, and Category-C (NRI) seats, and which category gives you the best chance of getting an MBBS seat?" />
            <FaqQuestion question="Can the number of seats in each category change every year due to seat-sharing rules and government approvals?" />
          </div>
        </div>

        {/* C. Eligibility */}
        <div className="mb-10">
          <SectionHeading label="C. Eligibility" />
          <div className="space-y-4">
            <FaqQuestion question="Is qualifying NEET enough to get an MBBS seat in Andhra Pradesh, or are there additional eligibility conditions you must satisfy?" />
            <FaqQuestion question="Does your NEET qualifying percentile only make you eligible to apply, or does it also guarantee you an MBBS seat?" />
            <FaqQuestion question="If you are an OCI/PIO candidate, are you eligible for every MBBS seat category in Andhra Pradesh, or only specific categories?" />
          </div>
        </div>

        {/* D. Educational Qualification */}
        <div className="mb-10">
          <SectionHeading label="D. Educational Qualification" />
          <div className="space-y-4">
            <FaqQuestion question="Does scoring 50% (or 40% for eligible categories) in PCB automatically make you eligible for an MBBS seat, or are there additional admission conditions?" />
            <FaqQuestion question="Can candidates from other states use their caste certificate for eligibility, even though there are no reservation quotas under these admissions?" />
            <FaqQuestion question="If you turn 17 after 31st December 2025, can you still participate in Andhra Pradesh MBBS Counselling this year?" />
          </div>
        </div>

        {/* E. Other Eligibility Criteria */}
        <div className="mb-10">
          <SectionHeading label="E. Other Eligibility Criteria" />
          <div className="space-y-4">
            <FaqQuestion question="Are you eligible for Category-B1, Category-B2, or Category-C (NRI) seats—and do you know the difference between them?" />
            <FaqQuestion question="Can candidates from outside Andhra Pradesh apply for every Management Quota seat, or are some categories reserved only for Andhra Pradesh local candidates?" />
            <FaqQuestion question="Are NRI and Minority MBBS seats open to everyone, or do they have separate eligibility conditions and mandatory supporting documents?" />
          </div>
        </div>

        {/* F. Admission Fees, University Fees & Tuition Fees */}
        <div className="mb-10">
          <SectionHeading label="F. Admission Fees, University Fees &amp; Tuition Fees" />
          <div className="space-y-4">
            <FaqQuestion question="Apart from the annual tuition fee, what additional University fees must you pay before your MBBS admission is confirmed?" />
            <FaqQuestion question="Why do MBBS tuition fees vary significantly between Competent Authority, Management Quota (Category-B), and NRI (Category-C) seats—and which option is right for you?" />
            <FaqQuestion question="Can the tuition fee for your allotted medical college change based on government orders?" />
          </div>
        </div>

      </div>
    </section>
  );
}
