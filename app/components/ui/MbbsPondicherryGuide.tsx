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

export default function MbbsPondicherryGuide() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
            <span className="w-10 h-[1px] bg-white/20" />
            Pondicherry MBBS
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Complete Counselling Guide
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            Everything you need to know about Pondicherry MBBS counselling, eligibility, fees, and seat categories.
          </p>
        </div>

        {/* A. Introduction */}
        <div className="mb-10">
          <SectionHeading label="A. Introduction" />
          <div className="space-y-4">
            <FaqQuestion question="Can students from other states also get MBBS admission in Puducherry, or is it only for Puducherry domicile candidates?" />
            <FaqQuestion question="What is the difference between Government Quota, Management Quota, Self-Supporting Quota, Minority Quota, and NRI Quota in Puducherry MBBS admissions?" />
            <FaqQuestion question="Can I participate in both CENTAC counselling and MCC counselling for MBBS, and which option gives me a better chance of getting a seat?" />
          </div>
        </div>

        {/* B. Important Dates */}
        <div className="mb-10">
          <SectionHeading label="B. Important Dates" />
          <div className="space-y-4">
            <FaqQuestion question="What happens if I miss the CENTAC application deadline? Can I still participate in Puducherry MBBS counselling?" />
            <FaqQuestion question="Why does CENTAC publish three different Merit Lists (Draft, Revised Draft & Final)? Do I need to take any action after each list?" />
            <FaqQuestion question="What is the difference between Round 1, Round 2, Round 3, and the Stray Round? Which round gives me the best chance of getting an MBBS seat?" />
          </div>
        </div>

        {/* C. Details of Application Fee */}
        <div className="mb-10">
          <SectionHeading label="C. Details of Application Fee" />
          <div className="space-y-4">
            <FaqQuestion question="Which application fee should I pay if I want to apply for both Government Quota and Management Quota in Puducherry MBBS?" />
            <FaqQuestion question="Can I change my quota preference after paying the application fee, or will I have to submit a fresh application?" />
            <FaqQuestion question="What happens if I pay the wrong application fee or select the wrong quota while applying? Can it be corrected later?" />
          </div>
        </div>

        {/* D. Mode of Application */}
        <div className="mb-10">
          <SectionHeading label="D. Mode of Application" />
          <div className="space-y-4">
            <FaqQuestion question="Can I edit my application after submitting it? If yes, until when can I make corrections?" />
            <FaqQuestion question="What happens if I accidentally submit two CENTAC applications or enter incorrect information in my application?" />
            <FaqQuestion question="Can I change my college or course preferences after locking my choices, or is my selection final?" />
          </div>
        </div>

        {/* E. Mode of Communication */}
        <div className="mb-10">
          <SectionHeading label="E. Mode of Communication" />
          <div className="space-y-4">
            <FaqQuestion question="How will I know if a new counselling round or important CENTAC notification has been released?" />
            <FaqQuestion question="What happens if I miss an important SMS or enter the wrong mobile number or email during registration? Can it affect my admission?" />
            <FaqQuestion question="Will CENTAC personally inform me about counselling dates and seat allotment, or do I need to check the website regularly?" />
          </div>
        </div>

        {/* F. Seat Information */}
        <div className="mb-10">
          <SectionHeading label="F. Seat Information" />
          <div className="space-y-4">
            <FaqQuestion question="Out of the total MBBS seats in Puducherry, how many are actually available for Government Quota, Management Quota, NRI Quota, and Other State candidates?" />
            <FaqQuestion question="Which MBBS colleges in Puducherry offer the highest chances of getting a seat based on my NEET score and category?" />
            <FaqQuestion question="Can the number of MBBS seats in Puducherry increase or decrease during the counselling process, and how does it affect seat allotment?" />
          </div>
        </div>

        {/* G. Categories of Seats for NEET UG Courses */}
        <div className="mb-10">
          <SectionHeading label="G. Categories of Seats for NEET UG Courses" />
          <div className="space-y-4">
            <FaqQuestion question="Which MBBS seat category am I actually eligible for in Puducherry—Government Quota, Management Quota, Minority Quota, AGE Quota, or NRI Quota?" />
            <FaqQuestion question="Can students from other states apply for MBBS seats in Puducherry? If yes, under which quota and in which colleges?" />
            <FaqQuestion question="If I am a Christian or Telugu minority candidate, what additional benefits do I get, and what documents are required to claim the Minority Quota?" />
          </div>
        </div>

        {/* H. Eligibility Criteria for Candidates */}
        <div className="mb-10">
          <SectionHeading label="H. Eligibility Criteria for Candidates" />
          <div className="space-y-4">
            <FaqQuestion question="Am I eligible for the Puducherry Government Quota, or will I be considered an Other State candidate?" />
            <FaqQuestion question="I have eligibility in both Puducherry and another state. Can I apply for the Government Quota in both, or will it affect my admission?" />
            <FaqQuestion question="Who can apply under the NRI, NRI Sponsored, OCI, or OCI Sponsored quota, and what documents are required to prove eligibility?" />
          </div>
        </div>

        {/* I. Reservation of Seats: Seat Distribution */}
        <div className="mb-10">
          <SectionHeading label="I. Reservation of Seats: Seat Distribution" />
          <div className="space-y-4">
            <FaqQuestion question="Which reservation category am I eligible for in the Puducherry Government Quota, and how will it affect my chances of getting an MBBS seat?" />
            <FaqQuestion question="Am I eligible for the 10% Government School Students (GSS) reservation or the Regional Quota (Karaikal, Mahe, or Yanam)? What documents are required to claim these benefits?" />
            <FaqQuestion question="Can I change my reservation, regional, or special category claim after submitting my application, or is it final?" />
          </div>
        </div>

        {/* J. Reservation Algorithm for Government Quota Seats */}
        <div className="mb-10">
          <SectionHeading label="J. Reservation Algorithm for Government Quota Seats" />
          <div className="space-y-4">
            <FaqQuestion question="If I don't get a seat in my reserved category, will I still be considered under the Unreserved (UR) category or in later counselling rounds?" />
            <FaqQuestion question="What happens to Minority Quota, NRI Quota, or reserved seats if they remain vacant? Can other candidates become eligible for these seats in later rounds?" />
            <FaqQuestion question="Can I claim special reservations like Government School (GSS), EWS, PwD, Sports, Freedom Fighter, or Ex-Servicemen? What are the eligibility conditions and documents required?" />
          </div>
        </div>

        {/* K. Documents to be Uploaded */}
        <div className="mb-10">
          <SectionHeading label="K. Documents to be Uploaded" />
          <div className="space-y-4">
            <FaqQuestion question="Which documents are mandatory for my category (Government Quota, Other State, NRI, OCI, or Management Quota), and what happens if even one document is missing?" />
            <FaqQuestion question="Do my certificates (Residence, Community, EWS, NRI/OCI, etc.) need to be issued after a specific date, or can I use older documents?" />
            <FaqQuestion question="I studied outside Puducherry or from a different education board. Do I need any additional certificates like an Equivalence Certificate or other special documents for MBBS admission?" />
          </div>
        </div>

        {/* L. Payment of Fee */}
        <div className="mb-10">
          <SectionHeading label="L. Payment of Fee" />
          <div className="space-y-4">
            <FaqQuestion question="If I get an MBBS seat but don't join or later resign, how much money will I lose? Does the forfeiture amount change in each counselling round?" />
            <FaqQuestion question="Do I have to pay the full tuition fee before participating in Round 3 or the Stray Round? Is this amount refundable if I don't get a seat?" />
            <FaqQuestion question="I have already secured an MBBS seat through JIPMER/MCC. Can I still participate in CENTAC counselling, and are there any additional deposit or forfeiture rules?" />
          </div>
        </div>

        {/* M. Conditions for Forfeiture of Registration Fee/Tuition Fee */}
        <div className="mb-10">
          <SectionHeading label="M. Conditions for Forfeiture of Registration Fee/Tuition Fee" />
          <div className="space-y-4">
            <FaqQuestion question="If I get an MBBS seat but decide not to join or want to resign later, how much money will I lose in each counselling round?" />
            <FaqQuestion question="Can my admission be cancelled even after seat allotment if my documents or application details are found to be incorrect? What will happen to the fees I have already paid?" />
            <FaqQuestion question="What is the last safe date to withdraw from counselling without facing forfeiture or losing my registration/tuition fee?" />
          </div>
        </div>

        {/* N. Refund of Registration Fee / Tuition Fee */}
        <div className="mb-10">
          <SectionHeading label="N. Refund of Registration Fee / Tuition Fee" />
          <div className="space-y-4">
            <FaqQuestion question="If I don't get an MBBS seat or withdraw from counselling, will I get my registration or tuition fee refunded? How long does the refund process take?" />
            <FaqQuestion question="Will my refund be credited to any bank account, or does it have to be the same account used for making the payment?" />
            <FaqQuestion question="I'm applying under the NRI/OCI quota. Are there any special refund rules for NRI candidates, and which bank account will receive the refund?" />
          </div>
        </div>

        {/* O. Submission of Course Preferences */}
        <div className="mb-10">
          <SectionHeading label="O. Submission of Course Preferences" />
          <div className="space-y-4">
            <FaqQuestion question="Are you filling your Pondicherry MBBS college preferences in the correct order, or could one wrong choice cost you a better seat?" />
            <FaqQuestion question="Did you know that your course preferences have to be submitted again for every counselling round? What happens if you don't?" />
            <FaqQuestion question="Can you change your college preferences after the last date, or are your choices permanently locked?" />
          </div>
        </div>

        {/* P. Merit List */}
        <div className="mb-10">
          <SectionHeading label="P. Merit List" />
          <div className="space-y-4">
            <FaqQuestion question="Did you know Pondicherry publishes separate Merit Lists for Government, Management, Minority, and NRI Quotas? Which Merit List will your name appear in?" />
            <FaqQuestion question="Can you correct your Residence, Category, or Special Category claim after the Final Merit List is published?" />
            <FaqQuestion question="If the NEET cut-off is reduced later, can fresh candidates still apply for Pondicherry MBBS counselling?" />
          </div>
        </div>

        {/* Q. Number of Rounds of Online Counselling */}
        <div className="mb-10">
          <SectionHeading label="Q. Number of Rounds of Online Counselling" />
          <div className="space-y-4">
            <FaqQuestion question="Did you know you have to submit fresh college preferences in every counselling round? Your previous choices become invalid automatically." />
            <FaqQuestion question="Can you keep your old MBBS seat if you get a better one through sliding in Round 2 or Round 3?" />
            <FaqQuestion question="Who is eligible for the Stray Round, and why are many students not allowed to participate despite qualifying in NEET?" />
          </div>
        </div>

        {/* R. College-wise Courses Offered with Number of Seats */}
        <div className="mb-10">
          <SectionHeading label="R. College-wise Courses Offered with Number of Seats" />
          <div className="space-y-4">
            <FaqQuestion question="Did you know that not all 650 MBBS seats in Pondicherry are available under the same quota? Which colleges offer Government Quota, Management Quota, NRI Quota, and Minority Quota seats?" />
            <FaqQuestion question="Which Pondicherry private medical colleges offer Christian Minority or Telugu Minority seats, and who is actually eligible to claim them?" />
            <FaqQuestion question="Can your NEET rank secure a seat in IGMC, PIMS, SMVMCH, or SVMCH&RI? Which college gives you the highest admission chances based on your category and score?" />
          </div>
        </div>

      </div>
    </section>
  );
}
