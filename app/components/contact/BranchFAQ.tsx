"use client";

import { useState } from "react";

interface BranchFAQProps {
  branch: {
    city: string;
    phone: string;
    email: string;
    hours: string;
  };
  faqs?: Array<{ question: string; answer: string }>;
}

export default function BranchFAQ({ branch, faqs = [] }: BranchFAQProps) {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const defaultFaqs = [
    {
      question: `How do I schedule a consultation at the ${branch.city} branch?`,
      answer: `You can schedule a consultation by calling our ${branch.city} team at ${branch.phone}, emailing us at ${branch.email}, or by submitting the inquiry form below. Our academic counselors will get back to you within 24 hours.`,
    },
    {
      question: "What documents should I bring for my counseling session?",
      answer: "We recommend bringing your NEET scorecard, 10th and 12th grade mark sheets, government-issued photo ID, and any past academic records to help our team guide you effectively.",
    },
    {
      question: `Can I visit the ${branch.city} office without an appointment?`,
      answer: `While walk-ins are welcome during our working hours (${branch.hours}), we highly recommend scheduling an appointment in advance to ensure a dedicated senior advisor is available to assist you.`,
    },
    {
      question: "Do you offer guidance for international medical admissions?",
      answer: "Yes, ADCB Consultancy specializes in end-to-end medical counseling for admissions both in India (private and government colleges) and top global destinations including the UK, UAE, Saudi Arabia, and Canada.",
    },
    {
      question: "Is there a service fee for the initial consultation?",
      answer: "Our initial evaluation and counseling session is free of charge. We will assess your profile and discuss options tailored to your eligibility and career goals.",
    },
  ];

  const effectiveFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-12 sm:py-20 bg-black text-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8">
        {/* FAQ Heading Above, Content Below */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/60 font-medium mb-2">
            <span className="w-8 h-[1px] bg-white/20" />
            HAVE QUESTIONS?
            <span className="w-8 h-[1px] bg-white/20" />
          </span>
          <h2 className="font-[var(--font-outfit)] text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Frequently
            <span className="font-semibold text-white"> Asked Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion Content Below */}
        <div className="space-y-4">
          {effectiveFaqs.map((faq, index) => {
            const isOpen = openFAQIndex === index;
            return (
              <div
                key={index}
                className="border-b border-zinc-800 bg-transparent transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="font-[var(--font-outfit)] font-semibold text-white group-hover:text-zinc-300 transition-colors text-base md:text-lg">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0 text-zinc-400 group-hover:text-white transition-colors">
                    {isOpen ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px]" : "max-h-0"
                    }`}
                >
                  <div className="py-5 text-medium text-zinc-200 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
