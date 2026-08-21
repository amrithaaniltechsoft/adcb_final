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

export default function MbbsUttarPradeshGuide() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
            <span className="w-10 h-[1px] bg-white/20" />
            Uttar Pradesh MBBS
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Complete Counselling Guide
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            Everything you need to know about Uttar Pradesh MBBS counselling, eligibility, fees, and seat categories.
          </p>
        </div>

        <div className="mb-10">
          <SectionHeading label="Key Questions" />
          <div className="space-y-4">
            <FaqQuestion question="Can students from other states apply for MBBS admission in Uttar Pradesh? If yes, which quota are they eligible for?" />
            <FaqQuestion question="Which quota should you choose in Uttar Pradesh counselling to maximize your chances of getting an MBBS seat?" />
            <FaqQuestion question="Can a wrong choice filling strategy cost you a better medical college even with a good NEET rank?" />
            <FaqQuestion question="If you don't get a seat in Round 1, should you still participate in Round 2 and Mop-Up Round?" />
            <FaqQuestion question="Can you upgrade your allotted college without losing your existing seat during counselling?" />
            <FaqQuestion question="What happens if you don't report to the allotted college after seat allotment? Will you be allowed to participate in the next round?" />
            <FaqQuestion question="Which documents can lead to rejection of your admission even after receiving a seat allotment?" />
            <FaqQuestion question="Can reserved category candidates get admission through the General (Open Merit) category as well?" />
            <FaqQuestion question="Are there any hidden opportunities when seats remain vacant after the initial counselling rounds?" />
            <FaqQuestion question="Is qualifying NEET enough to secure an MBBS seat in Uttar Pradesh, or are there additional counselling rules that every student must know?" />
          </div>
        </div>

      </div>
    </section>
  );
}
