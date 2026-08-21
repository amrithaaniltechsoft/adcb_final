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

export default function MbbsTelanganaGuide() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
            <span className="w-10 h-[1px] bg-white/20" />
            Telangana MBBS
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Complete Counselling Guide
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            Everything you need to know about Telangana MBBS counselling, eligibility, fees, and seat categories.
          </p>
        </div>

        {/* A. Number of Seats under Competent Authority Quota */}
        <div className="mb-10">
          <SectionHeading label="A. Number of Seats under Competent Authority Quota" />
          <div className="space-y-4">
            <FaqQuestion question="Can you get an MBBS seat if new seats are approved after the counselling process has already started?" />
            <FaqQuestion question="When will the final Telangana MBBS seat matrix be released, and how can it change your college options?" />
            <FaqQuestion question="Are all Government and Private MBBS seats available from the beginning, or are additional seats added later without a fresh notification?" />
          </div>
        </div>

        {/* B. Eligibility */}
        <div className="mb-10">
          <SectionHeading label="B. Eligibility" />
          <div className="space-y-4">
            <FaqQuestion question="Does studying outside Telangana automatically make you ineligible for Telangana State MBBS Counselling?" />
            <FaqQuestion question="Can you still claim Telangana domicile if you haven't studied in the state for the last four consecutive years?" />
            <FaqQuestion question="Are you eligible for Telangana MBBS Counselling if you qualify NEET but don't satisfy the state's local candidate rules?" />
          </div>
        </div>

        {/* C. Admission */}
        <div className="mb-10">
          <SectionHeading label="C. Admission" />
          <div className="space-y-4">
            <FaqQuestion question="Can candidates from other states participate in Telangana State MBBS Counselling?" />
            <FaqQuestion question="What happens if you pay the registration fee but are later found ineligible for Telangana MBBS Counselling?" />
            <FaqQuestion question="Have you verified your eligibility before paying the counselling registration fee, or could you lose the entire amount?" />
          </div>
        </div>

        {/* D. Reservation */}
        <div className="mb-10">
          <SectionHeading label="D. Reservation" />
          <div className="space-y-4">
            <FaqQuestion question="Do you know which reservation benefits you are actually eligible for, or could you be missing out due to incorrect documentation?" />
            <FaqQuestion question="Can NCC certificates, EWS status, PWD, CAP, or other special category benefits improve your chances of getting an MBBS seat in Telangana?" />
            <FaqQuestion question="Are all reservation benefits available to every Telangana candidate, or do some apply only to specific colleges and categories?" />
          </div>
        </div>

        {/* E. Online Application */}
        <div className="mb-10">
          <SectionHeading label="E. Online Application" />
          <div className="space-y-4">
            <FaqQuestion question="Do you know which documents are mandatory for Telangana MBBS Counselling, and can a single missing document lead to rejection?" />
            <FaqQuestion question="Can you edit your application after submission, and until which stage are changes allowed?" />
            <FaqQuestion question="What happens if you make a mistake while filling the online application or uploading your certificates? Can it be corrected before verification?" />
          </div>
        </div>

        {/* F. Counselling & Admission Rules */}
        <div className="mb-10">
          <SectionHeading label="F. Counselling &amp; Admission Rules" />
          <div className="space-y-4">
            <FaqQuestion question="Is your certificate verification done only once? What happens if you miss uploading even one mandatory document?" />
            <FaqQuestion question="Can you change your college preferences after locking your web options, or is your choice final?" />
            <FaqQuestion question="What happens if you receive an MBBS seat but fail to report to the allotted college with all original documents before the deadline?" />
          </div>
        </div>

        {/* G. Fees & Discontinuation */}
        <div className="mb-10">
          <SectionHeading label="G. Fees &amp; Discontinuation" />
          <div className="space-y-4">
            <FaqQuestion question="Apart from tuition fees, what additional university charges must you pay before downloading your MBBS allotment letter?" />
            <FaqQuestion question="Do you know the last date for free exit, or could withdrawing from your MBBS seat later cost you ₹20 lakh?" />
            <FaqQuestion question="Before accepting an MBBS seat, have you understood the bond and discontinuation rules that could lead to a huge financial penalty?" />
          </div>
        </div>

      </div>
    </section>
  );
}
