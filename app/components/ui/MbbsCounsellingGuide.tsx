"use client";

const textClass = "text-base md:text-lg text-gray-300 leading-relaxed";
const ctaBox = "bg-white/5 border-l-4 border-[#ED1C24] p-5 mt-8";
const ctaText = "text-gray-300 text-base md:text-lg";
const ctaTitle = "font-semibold text-[#ED1C24] text-base md:text-lg";

const sections = [
  {
    id: "disclaimer",
    label: "A. Disclaimer Points",
    content: (
      <div className="space-y-4">
        <p className="flex items-start gap-2 text-base md:text-lg text-gray-300 leading-relaxed"><span className="text-[#ED1C24] mt-1 flex-shrink-0">⚠️</span> One mistake in document submission can lead to cancellation of admission, forfeiture of fees, and debarment from future counselling.</p>
        <p className="flex items-start gap-2 text-base md:text-lg text-gray-300 leading-relaxed"><span className="text-[#ED1C24] mt-1 flex-shrink-0">⚠️</span> Certain rounds of counselling have strict joining rules. Failure to join after allotment may result in loss of Security Deposit and Tuition Fees.</p>
        <p className="flex items-start gap-2 text-base md:text-lg text-gray-300 leading-relaxed"><span className="text-[#ED1C24] mt-1 flex-shrink-0">⚠️</span> Not all candidates are eligible for Minority, Institutional, NRI, or special category seats. Eligibility needs to be verified before counselling.</p>
        <p className="flex items-start gap-2 text-base md:text-lg text-gray-300 leading-relaxed"><span className="text-[#ED1C24] mt-1 flex-shrink-0">⚠️</span> Security Deposit refunds are subject to counselling regulations. Many families are unaware of situations where refunds may be delayed or forfeited.</p>
        <p className="flex items-start gap-2 text-base md:text-lg text-gray-300 leading-relaxed"><span className="text-[#ED1C24] mt-1 flex-shrink-0">⚠️</span> Fee structures, bond conditions, and college-specific rules may differ across institutions. Candidates should understand these before choice filling.</p>
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-5 mt-8">
          <p className="font-semibold text-[#ED1C24] text-base md:text-lg">📞 Confused about any of these rules?</p>
          <p className="text-gray-300 text-base md:text-lg mt-2">Connect with ADCB&apos;s MBBS Counselling Experts for personalized Tamil Nadu counselling guidance and admission strategy.</p>
        </div>
      </div>
    )
  },
  {
    id: "glossary",
    label: "B. Glossary of Terms",
    content: (
      <div className="space-y-4">
        <FaqQuestion question="Can NRI seats become available for Management Quota candidates later during counselling?" />
        <FaqQuestion question="What is an 'NRI Lapsed Seat' and why do many students miss this opportunity?" />
        <FaqQuestion question="What happens if you don't join after receiving a seat allotment?" />
        <FaqQuestion question="Can you resign from an allotted seat without financial penalties?" />
        <FaqQuestion question="What is 'Free Exit' and which counselling rounds allow it?" />
        <FaqQuestion question="Can a student lose both Tuition Fee and Security Deposit due to a counselling mistake?" />
        <FaqQuestion question="What is a 'Virtual Vacancy' and how can it create unexpected MBBS opportunities in Round 2?" />
        <FaqQuestion question="Are Government Quota and Management Quota applications separate in Tamil Nadu?" />
        <FaqQuestion question="What additional charges are payable apart from the annual tuition fee?" />
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-5 mt-8">
          <p className="font-semibold text-[#ED1C24] text-base md:text-lg">⚠️ One misunderstanding of these counselling rules can result in loss of a seat, forfeiture of fees, or missing a better college opportunity.</p>
          <p className="text-gray-300 text-base md:text-lg mt-2">📞 Speak with ADCB&apos;s Tamil Nadu MBBS Counselling Experts before filling your choices.</p>
        </div>
      </div>
    )
  },
  {
    id: "important",
    label: "C. Important Information",
    content: (
      <div className="space-y-4">
        <FaqQuestion question="Can a candidate lose the entire ₹1,00,000 Security Deposit even after getting a seat?" />
        <FaqQuestion question="Why do some students lose both their Tuition Fee and Security Deposit after allotment?" />
        <FaqQuestion question="Can a better counselling strategy help secure a lower-fee MBBS seat?" />
        <FaqQuestion question="How are CMC Vellore MBBS seats distributed among different categories?" />
        <FaqQuestion question="Can non-Christian candidates get admission to CMC Vellore?" />
        <FaqQuestion question="Why do some students with good NEET scores still miss admission opportunities?" />
      </div>
    )
  },
  {
    id: "general-instructions",
    label: "D. General Instructions",
    content: (
      <div className="space-y-4">
        <FaqQuestion question="Can vacant Minority seats become available to other candidates in later rounds?" />
        <FaqQuestion question="What happens to unfilled NRI seats during counselling?" />
        <FaqQuestion question="Can a candidate miss an MBBS seat simply because they didn't understand seat conversion rules?" />
        <FaqQuestion question="Why do some students get admission despite having lower ranks than others?" />
        <FaqQuestion question="Are some MBBS opportunities available only after category conversion?" />
        <FaqQuestion question="Can understanding seat conversion rules increase your college options?" />
      </div>
    )
  },
  {
    id: "age-limit",
    label: "E. Age Limit",
    content: (
      <div className="space-y-4">
        <div className="bg-white/5 border border-white/10 rounded-lg p-7">
          <h3 className="font-medium text-white text-xl md:text-2xl mb-3">MBBS Eligibility Check</h3>
          <p className="text-base md:text-lg text-gray-300">Are You Eligible for Tamil Nadu MBBS Counselling?</p>
        </div>
      </div>
    )
  },
  {
    id: "general-eligibility",
    label: "F. General Eligibility Criteria",
    content: (
      <div className="space-y-4">
        <FaqQuestion question="Can OCI/PIO candidates apply for Tamil Nadu MBBS? If yes, are they eligible for reservation benefits?" />
        <FaqQuestion question="Is qualifying NEET enough for MBBS admission, or do your Class 12 marks and subject combination also determine your eligibility?" />
        <FaqQuestion question="Have you completed Class 12 from a Board outside Tamil Nadu? Do you need an Eligibility Certificate before participating in Tamil Nadu MBBS counselling?" />
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-4 mt-6">
          <p className="text-gray-300 text-sm">📞 Speak with ADCB&apos;s MBBS Counselling Experts to verify your eligibility before applying.</p>
        </div>
      </div>
    )
  },
  {
    id: "minority-eligibility",
    label: "G. Eligibility for Minority Seats",
    content: (
      <div className="space-y-4">
        <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
          <p className="font-semibold text-amber-300 text-base md:text-lg">🚨 Minority Quota – Are You Really Eligible?</p>
        </div>
        <FaqQuestion question="Can every Christian candidate apply for Christian Minority MBBS seats in Tamil Nadu, or are there additional eligibility requirements?" />
        <FaqQuestion question="Are Telugu and Malayalam-speaking candidates automatically eligible for Linguistic Minority seats, or are specific documents mandatory?" />
        <FaqQuestion question="Can you claim a Minority seat during counselling if you didn't submit the required Minority documents at the time of application?" />
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-4 mt-6">
          <p className="text-gray-300 text-sm">📞 Unsure about your Minority Quota eligibility? Speak with ADCB&apos;s MBBS Counselling Experts before applying.</p>
        </div>
      </div>
    )
  },
  {
    id: "nri-eligibility",
    label: "H. Eligibility Criteria for NRI",
    content: (
      <div className="space-y-4">
        <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
          <p className="font-semibold text-amber-300 text-base md:text-lg">🌍 NRI Quota – Are You Actually Eligible?</p>
        </div>
        <FaqQuestion question="Can any NRI relative sponsor your MBBS admission, or are only specific family members legally eligible?" />
        <FaqQuestion question="Are you sure you have all the mandatory NRI documents? Missing even one required document can result in rejection of your NRI application." />
        <FaqQuestion question="Does holding an OCI card automatically make you eligible for NRI Quota and other reserved seats in Tamil Nadu MBBS counselling?" />
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-4 mt-6">
          <p className="text-gray-300 text-sm">📞 Unsure about your NRI eligibility? Speak with ADCB&apos;s MBBS Counselling Experts before submitting your application.</p>
        </div>
        <div className="bg-white/5 border-l-4 border-amber-500 p-5 mb-6 mt-8">
          <p className="font-semibold text-amber-300 text-base md:text-lg">🚫 Before You Apply – Are You Eligible?</p>
        </div>
        <FaqQuestion question="Have you completed Class 12 from a Board outside Tamil Nadu? Do you need an Eligibility Certificate before your application can be accepted?" />
        <FaqQuestion question="Can a student who is already pursuing MBBS in India or abroad apply again for MBBS through Tamil Nadu counselling?" />
        <FaqQuestion question="Can an application be rejected even after qualifying NEET because of an eligibility-related requirement?" />
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-4 mt-6">
          <p className="text-gray-300 text-sm">📞 Not sure whether you&apos;re eligible? Speak with ADCB&apos;s MBBS Counselling Experts before submitting your application.</p>
        </div>
      </div>
    )
  },
  {
    id: "application-form",
    label: "J. Procedure for Filling and Submission of Online Application Form",
    content: (
      <div className="space-y-4">
        <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
          <p className="font-semibold text-amber-300 text-base md:text-lg">📝 Before You Submit Your Tamil Nadu MBBS Application…</p>
        </div>
        <FaqQuestion question="Can a single mistake in your online application or uploaded documents lead to rejection of your MBBS application?" />
        <FaqQuestion question="Can you edit or correct your application after submitting it, or is it locked permanently?" />
        <FaqQuestion question="Are you sure you have uploaded every mandatory document required for your category (General / Minority / NRI / OCI)?" />
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-4 mt-6">
          <p className="text-gray-300 text-sm">📞 Avoid costly application mistakes. Speak with ADCB&apos;s Tamil Nadu MBBS Counselling Experts before submitting your application.</p>
        </div>
      </div>
    )
  },
  {
    id: "fee-payment",
    label: "K. Method of Fee Payment",
    content: (
      <div className="space-y-4">
        <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
          <p className="font-semibold text-amber-300 text-base md:text-lg">💳 Before You Make Any Payment…</p>
        </div>
        <FaqQuestion question="Is money deducted from your bank account enough to confirm your Tamil Nadu MBBS application payment?" />
        <FaqQuestion question="Which bank account should you use if you want your Security Deposit refund without any issues?" />
        <FaqQuestion question="Can an incorrect bank account entered during registration delay or affect your Security Deposit refund?" />
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-4 mt-6">
          <p className="text-gray-300 text-sm">📞 Not sure about the payment or refund process? Speak with ADCB&apos;s Tamil Nadu MBBS Counselling Experts before making your payment.</p>
        </div>
      </div>
    )
  },
  {
    id: "community-certificate",
    label: "L. Community Certificate",
    content: (
      <div className="space-y-4">
        <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
          <p className="font-semibold text-amber-300 text-base md:text-lg">📜 Community Certificate – Is Yours Valid for Tamil Nadu MBBS Counselling?</p>
        </div>
        <FaqQuestion question="Is your Community Certificate issued by the correct authority, or could it be rejected during verification?" />
        <FaqQuestion question="Can an incorrect or invalid Community Certificate lead to cancellation of your MBBS admission even after joining the college?" />
        <FaqQuestion question="Are you sure your Community Certificate meets the latest Tamil Nadu MBBS counselling requirements?" />
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-4 mt-6">
          <p className="text-gray-300 text-sm">📞 Not sure whether your Community Certificate is valid? Get it verified by ADCB&apos;s Tamil Nadu MBBS Counselling Experts before applying.</p>
        </div>
      </div>
    )
  },
  {
    id: "selection-process",
    label: "M. Rank List and Method of Selection",
    content: (
      <div className="space-y-4">
        <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
          <p className="font-semibold text-amber-300 text-base md:text-lg">🎯 MBBS Selection Process – Are You Missing Hidden Admission Opportunities?</p>
        </div>
        <FaqQuestion question="Does qualifying NEET guarantee an MBBS seat in Tamil Nadu, or are there additional selection criteria you must satisfy?" />
        <FaqQuestion question="What happens to vacant NRI MBBS seats in later counselling rounds? Can non-NRI candidates become eligible for these seats?" />
        <FaqQuestion question="If Minority MBBS seats remain vacant, who becomes eligible for those seats in the subsequent counselling rounds?" />
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-4 mt-6">
          <p className="text-gray-300 text-sm">📞 Don&apos;t miss hidden admission opportunities. Speak with ADCB&apos;s Tamil Nadu MBBS Counselling Experts to understand the complete selection process.</p>
        </div>
      </div>
    )
  },
  {
    id: "counselling-rounds",
    label: "N. Rounds of Online Counselling",
    content: (
      <div className="space-y-4">
        <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
          <p className="font-semibold text-amber-300 text-base md:text-lg">🎯 Tamil Nadu MBBS Counselling Rounds – One Wrong Decision Can Cost You a Seat!</p>
        </div>
        <FaqQuestion question="Should you accept a seat in Round 1, or wait for a better college in Round 2? Which strategy gives you the best chance of admission?" />
        <FaqQuestion question="What happens if you don't join the seat allotted in Round 3 or the Stray Round? Can you lose your Security Deposit, Tuition Fee, and become ineligible for future counselling?" />
        <FaqQuestion question="Is the Stray Round your last opportunity to secure an MBBS seat? Who is actually eligible to participate?" />
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-4 mt-6">
          <p className="text-gray-300 text-sm">📞 Every counselling round follows different rules. Speak with ADCB&apos;s Tamil Nadu MBBS Counselling Experts before making your next move.</p>
        </div>
      </div>
    )
  },
  {
    id: "counselling-procedures",
    label: "O. Counselling Procedures",
    content: (
      <div className="space-y-4">
        <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
          <p className="font-semibold text-amber-300 text-base md:text-lg">📢 Tamil Nadu MBBS Counselling – Don&apos;t Make These Costly Mistakes!</p>
        </div>
        <FaqQuestion question="If you miss the First Round of Tamil Nadu MBBS counselling, can you still participate in the Second Round?" />
        <FaqQuestion question="Can you change your college preferences after locking your choices in the same counselling round?" />
        <FaqQuestion question="Once a seat is allotted, can you request a transfer to another college or MBBS course later?" />
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-4 mt-6">
          <p className="text-gray-300 text-sm">📞 Every counselling decision can impact your admission. Speak with ADCB&apos;s Tamil Nadu MBBS Counselling Experts before filling your choices.</p>
        </div>
      </div>
    )
  },
  {
    id: "seat-categories",
    label: "P. Categories of Seats",
    content: (
      <div className="space-y-4">
        <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
          <p className="font-semibold text-amber-300 text-base md:text-lg">🎯 Which MBBS Seat Category Gives You the Best Admission Opportunity?</p>
        </div>
        <FaqQuestion question="What is the difference between Management Quota, Minority Quota, NRI Quota, and NRI Lapsed Seats? Which category are you actually eligible for?" />
        <FaqQuestion question="Can a non-NRI candidate get admission through NRI Lapsed Seats? If yes, when and how?" />
        <FaqQuestion question="If you are placed on the Wait List, do you still have a chance of getting an MBBS seat? What should you do next?" />
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-4 mt-6">
          <p className="text-gray-300 text-sm">📞 Don&apos;t miss the right admission opportunity. Speak with ADCB&apos;s Tamil Nadu MBBS Counselling Experts to understand the best seat category for your NEET score.</p>
        </div>
      </div>
    )
  },
  {
    id: "fee-structure",
    label: "Q. Fee Structure",
    content: (
      <div className="space-y-4">
        <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
          <p className="font-semibold text-amber-300 text-base md:text-lg">💰 Tamil Nadu MBBS Fees – Are You Paying More Than You Need To?</p>
        </div>
        <FaqQuestion question="Why do some Tamil Nadu MBBS colleges have different tuition fees, and how do you identify the best-value option for your NEET score?" />
        <FaqQuestion question="What is the difference between Management Quota, NRI Quota, and NRI Lapsed Quota fees? Could choosing the wrong category cost you several lakhs more?" />
        <FaqQuestion question="Apart from the tuition fee, what additional expenses should you consider before taking admission into a Tamil Nadu MBBS college?" />
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-4 mt-6">
          <p className="text-gray-300 text-sm">📞 Make an informed financial decision. Speak with ADCB&apos;s Tamil Nadu MBBS Counselling Experts before locking your college preferences.</p>
        </div>
      </div>
    )
  },
  {
    id: "discontinuation",
    label: "R. Discontinuation of Fees",
    content: (
      <div className="space-y-4">
        <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
          <p className="font-semibold text-amber-300 text-base md:text-lg">⚠️ Before You Resign Your MBBS Seat, Know the Consequences!</p>
        </div>
        <FaqQuestion question="Can withdrawing from your MBBS seat after the counselling cut-off cost you a ₹10 lakh Discontinuation Fee?" />
        <FaqQuestion question="If you're allotted a seat in the Final Stray Round but don't join, could you lose your Security Deposit, Tuition Fee, and still have to pay the Discontinuation Fee?" />
        <FaqQuestion question="Can your MBBS admission be cancelled even after seat allotment if your original documents or eligibility verification are found to be incomplete or incorrect?" />
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-4 mt-6">
          <p className="text-gray-300 text-sm">📞 Don&apos;t risk costly mistakes. Speak with ADCB&apos;s Tamil Nadu MBBS Counselling Experts before making any admission or resignation decision.</p>
        </div>
      </div>
    )
  },
  {
    id: "faq",
    label: "S. FAQ Regarding Counselling Procedures",
    content: (
      <div className="space-y-4">
        <FaqQuestion question="Why do some Management Quota seats become available only in later counselling rounds?" />
        <FaqQuestion question="Can an NRI seat later become available for Management Quota candidates?" />
        <FaqQuestion question="Why do candidates with similar NEET scores often get different colleges?" />
        <FaqQuestion question="What happens if you don't download your allotment order on time?" />
        <FaqQuestion question="Can changing just one preference during choice filling improve your allotment?" />
        <FaqQuestion question="Are Minority seats available only to Minority candidates throughout counselling?" />
        <FaqQuestion question="Why do some seats suddenly appear in Round 2 or Round 3 even though they weren't available earlier?" />
      </div>
    )
  },
  {
    id: "annexures",
    label: "T. Annexures",
    content: (
      <div className="space-y-4">
        <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
          <p className="font-semibold text-amber-300 text-base md:text-lg">&ldquo;Do You Have the Correct Minority Certificate?&rdquo;</p>
        </div>
        <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
          <p className="font-semibold text-amber-300 text-base md:text-lg">&ldquo;Who Can Actually Sponsor You Under NRI Quota?&rdquo;</p>
        </div>
        <div className="bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6">
          <p className="font-semibold text-amber-300 text-base md:text-lg">&ldquo;One Missing Annexure Can Lead to Rejection&rdquo;</p>
        </div>
        <div className="bg-white/5 border-l-4 border-[#ED1C24] p-5 mt-8">
          <p className="text-gray-300 text-base md:text-lg">Not sure which certificates, annexures or declarations apply to your case?</p>
          <p className="text-gray-300 text-base md:text-lg font-semibold mt-2">Get your complete eligibility and document checklist verified by ADCB before submitting your application.</p>
        </div>
      </div>
    )
  }
];

function FaqQuestion({ question }: { question: string }) {
  return (
    <div className="flex items-start gap-4 p-5 md:p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#ED1C24]/30 transition-colors">
      <span className="text-[#ED1C24] flex-shrink-0 mt-0.5 text-lg">❓</span>
      <p className="text-base md:text-lg text-gray-300 leading-relaxed">{question}</p>
    </div>
  );
}

export default function MbbsCounsellingGuide() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
            <span className="w-10 h-[1px] bg-white/20" />
            Tamil Nadu MBBS
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Complete Counselling Guide
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            Everything you need to know about Tamil Nadu MBBS counselling, eligibility, fees, and seat categories.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.id} className="mb-14">
            <h2 className="font-[var(--font-outfit)] text-xl md:text-2xl lg:text-3xl font-medium text-white mb-7">{section.label}</h2>
            {section.content}
          </div>
        ))}
      </div>
    </section>
  );
}
