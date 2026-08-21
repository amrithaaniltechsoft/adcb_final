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

export default function MbbsKeralaGuide() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
            <span className="w-10 h-[1px] bg-white/20" />
            Kerala MBBS
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Complete Counselling Guide
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            Everything you need to know about Kerala MBBS counselling, eligibility, fees, and seat categories.
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-14">
          <SectionHeading label="A. Introduction" />
          <div className="space-y-4">
            <FaqQuestion question="Is your NEET rank alone enough to secure an MBBS seat in Kerala?" />
            <FaqQuestion question="Do you know how Kerala's CAP counselling actually works?" />
            <FaqQuestion question="Are you aware of the hidden eligibility and counselling rules beyond your NEET rank?" />
          </div>
        </div>

        {/* B. Courses, Institutions and Seats */}
        <div className="mb-14">
          <SectionHeading label="B. Courses, Institutions and Seats" />
          <div className="space-y-4">
            <FaqQuestion question="Do you know which seat category gives you the best chance of getting an MBBS seat in Kerala? (Government, State Quota, Management, NRI, Minority or All India Quota?)" />
            <FaqQuestion question="Can you participate in Kerala MBBS counselling for Government, Private, Management & NRI seats through a single counselling process?" />
            <FaqQuestion question="Do you know when the final MBBS seat matrix and participating colleges are announced—and how it can impact your admission chances?" />
          </div>
        </div>

        {/* C. Duration of the courses */}
        <div className="mb-14">
          <SectionHeading label="C. Duration of the Courses" />
          <div className="space-y-4">
            <FaqQuestion question="Is Kerala MBBS actually a 4½-year course—or does it take 5½ years to complete?" />
            <FaqQuestion question="Is the 1-year compulsory internship mandatory to obtain your MBBS degree and medical registration?" />
            <FaqQuestion question="Do you know when you'll become eligible for PG entrance exams and start your medical career after MBBS?" />
          </div>
        </div>

        {/* D. RESERVATION OF SEATS */}
        <div className="mb-14">
          <SectionHeading label="D. Reservation of Seats for Various Courses" />
          <div className="space-y-4">
            <FaqQuestion question="Are you applying under the right quota—or could you be missing a better MBBS admission opportunity? (State Merit, EWS, SEBC, SC/ST, Management, NRI, Minority or All India Quota)" />
            <FaqQuestion question="Can a mistake in claiming your reservation category cost you an MBBS seat in Kerala?" />
          </div>
        </div>

        {/* E. CLAIMS FOR RESERVATION AND CERTIFICATES */}
        <div className="mb-14">
          <SectionHeading label="E. Claims for Reservation and Certificates to be Uploaded" />
          <div className="space-y-4">
            <HighlightBox>Reservation &amp; Certificate Confusion?</HighlightBox>
            <FaqQuestion question="Are you eligible for more than one reservation category, and which one gives you the best chance of securing an MBBS seat in Kerala?" />
            <FaqQuestion question="Do you know exactly which certificates and supporting documents are mandatory for your reservation claim?" />
            <FaqQuestion question="What happens if you select the wrong reservation category or fail to upload the required certificates before the application deadline?" />
            <CtaBox>Confused about your reservation eligibility or required certificates? Let ADCB verify everything before you apply.</CtaBox>
          </div>
        </div>

        {/* F. CRITERIA OF ELIGIBILITY FOR ADMISSION */}
        <div className="mb-14">
          <SectionHeading label="F. Criteria of Eligibility for Admission" />
          <div className="space-y-4">
            <HighlightBox>Eligibility Confusions – Are You Sure You&apos;re Eligible?</HighlightBox>
            <FaqQuestion question="Are you eligible for Kerala MBBS as a Keralite, Non-Keralite Category I (NK-I), or Non-Keralite Category II (NK-II)?" />
            <FaqQuestion question="Do you know which nativity certificate or supporting documents you need to prove your eligibility for Kerala MBBS admission?" />
            <FaqQuestion question="Will your NEET score, Class 12 marks, category, age, and domicile make you eligible for the seat you're aiming for?" />
            <CtaBox>Confused about your eligibility or the certificates required for Kerala MBBS admission? Let ADCB verify your eligibility, check your documents, and guide you to the right admission pathway before you apply.</CtaBox>
          </div>
        </div>

        {/* G. HOW TO APPLY */}
        <div className="mb-14">
          <SectionHeading label="G. How to Apply for the Entrance Examination / Admission" />
          <div className="space-y-4">
            <FaqQuestion question="Have you uploaded all the mandatory documents correctly?" />
            <FaqQuestion question="Did you know you cannot edit your application after final submission?" />
            <FaqQuestion question="Can you upload missing certificates after submitting the application?" />
            <CtaBox>Confused about the application process, mandatory documents, or whether your application is complete? Let ADCB verify your eligibility and documents before you apply—so you don&apos;t lose your MBBS seat due to avoidable mistakes.</CtaBox>
          </div>
        </div>

        {/* H. Examinations */}
        <div className="mb-14">
          <SectionHeading label="H. Examinations" />
          <div className="space-y-4">
            <FaqQuestion question="I qualified NEET. Am I actually eligible for Kerala MBBS Counselling?" />
            <FaqQuestion question="How is the Kerala MBBS Rank List prepared, and where will I stand?" />
            <FaqQuestion question="What mistakes can cancel my admission even after qualifying NEET?" />
          </div>
        </div>

        {/* I. CENTRALISED ALLOTMENT PROCESS */}
        <div className="mb-14">
          <SectionHeading label="I. Centralised Allotment Process (CAP) &amp; Online Submission of Options" />
          <div className="space-y-4">
            <HighlightBox>🤔 Are you sure you understand Kerala MBBS CAP completely?</HighlightBox>
            <FaqQuestion question="What happens if you arrange your options incorrectly, miss the mandatory option confirmation after an allotment, or decide not to join the allotted MBBS seat?" />
            <CtaBox>A single mistake during the Kerala Centralised Allotment Process (CAP) can affect your future allotments, upgrade chances, or even lead to the loss of your existing seat and remaining options. Before you lock your choices, make sure you understand every rule and its consequences.<br /><br />📞 Connect with ADCB&apos;s Kerala MBBS Counselling Experts for a personalized CAP strategy and avoid costly counselling mistakes.</CtaBox>
          </div>
        </div>

        {/* J. FEES */}
        <div className="mb-14">
          <SectionHeading label="J. Fees" />
          <div className="space-y-4">
            <FaqQuestion question="Can one wrong counselling decision cost you ₹10 Lakhs?" />
            <FaqQuestion question="Are you really eligible for fee concessions in Kerala MBBS?" />
            <FaqQuestion question="Will you get your counselling fee back if you cancel your MBBS admission?" />
            <CtaBox>📞 Connect with ADCB&apos;s Kerala MBBS Counselling Experts to understand the fee structure, refund policy, concessions, and penalty rules before participating in counselling.</CtaBox>
          </div>
        </div>

        {/* K. Courses & institutions */}
        <div className="mb-14">
          <SectionHeading label="K. Courses &amp; Institutions" />
          <div className="space-y-4">
            <FaqQuestion question="Are MBBS students in Kerala required to complete Rural Service after graduation? What are the actual rules and who has to serve?" />
            <FaqQuestion question="Apart from NEET and document verification, are there any compulsory medical requirements before MBBS admission?" />
            <FaqQuestion question="What happens if you fail to report to the allotted college on the scheduled date? Can your MBBS seat be restored?" />
            <CtaBox>Connect with ADCB&apos;s Kerala MBBS experts to understand every hidden rule before counselling, so you make informed decisions and avoid costly mistakes.</CtaBox>
          </div>
        </div>

      </div>
    </section>
  );
}
