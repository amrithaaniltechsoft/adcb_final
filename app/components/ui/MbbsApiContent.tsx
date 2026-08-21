"use client";

import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

function transformMbbsContent(html: string): string {
  let out = html;

  // FAQ question cards
  const faqCard = (q: string) =>
    `<div class="faq-question-card cursor-pointer flex items-start gap-4 p-5 md:p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#ED1C24]/30 transition-colors" role="button" tabindex="0"><span class="text-[#ED1C24] flex-shrink-0 mt-0.5 text-lg">❓</span><p class="text-base md:text-lg text-gray-300 leading-relaxed">${q}</p></div>`;
  out = out.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, (_m, list: string) => {
    const withStrong = list.replace(/<li><strong>([\s\S]*?)<\/strong><\/li>/g, (_m2, q: string) => faqCard(q));
    return withStrong.replace(/<li>([\s\S]*?)<\/li>/g, (_m2, q: string) => faqCard(q));
  });

  // Warning items
  out = out.replace(/<p class="warn"><span class="icon">([\s\S]*?)<\/span>([\s\S]*?)<\/p>/g, (_m, icon: string, text: string) =>
    `<p class="flex items-start gap-2 text-base md:text-lg text-gray-300 leading-relaxed"><span class="text-[#ED1C24] mt-1 flex-shrink-0">${icon}</span>${text}</p>`
  );

  // CTA boxes
  out = out.replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, (_m, inner: string) => {
    const ps = Array.from(inner.matchAll(/<p(?:\s+class="([^"]*)")?>([\s\S]*?)<\/p>/g));
    if (ps.length >= 2) {
      const title = ps[0][2];
      const body = ps[1][2];
      if (title.charCodeAt(0) > 127) {
        return `<div class="bg-white/5 border-l-4 border-[#ED1C24] p-5 mt-8"><p class="font-semibold text-[#ED1C24] text-base md:text-lg">${title}</p><p class="text-gray-300 text-base md:text-lg mt-2">${body}</p></div>`;
      }
      return `<div class="bg-white/5 border-l-4 border-[#ED1C24] p-5 mt-8"><p class="text-gray-300 text-base md:text-lg">${title}</p><p class="text-gray-300 text-base md:text-lg font-semibold mt-2">${body}</p></div>`;
    }
    const text = ps[0]?.[2] ?? "";
    if (!ps.length) {
      return `<div class="bg-white/5 border-l-4 border-[#ED1C24] p-5 mt-8"><p class="text-gray-300 text-base md:text-lg">${inner}</p></div>`;
    }
    return `<div class="bg-white/5 border-l-4 border-[#ED1C24] p-4 mt-6"><p class="text-gray-300 text-sm">${text}</p></div>`;
  });

  // Info panel
  out = out.replace(/<div class="panel"><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p><\/div>/g, (_m, title: string, text: string) =>
    `<div class="bg-white/5 border border-white/10 rounded-lg p-7"><h3 class="font-medium text-white text-xl md:text-2xl mb-3">${title}</h3><p class="text-base md:text-lg text-gray-300">${text}</p></div>`
  );

  // Group content into sections under their h2 headings
  const parts = out.split(/<h2>([\s\S]*?)<\/h2>/);
  let result = parts[0] ?? "";
  for (let i = 1; i < parts.length; i += 2) {
    const heading = parts[i];
    const body = parts[i + 1] ?? "";
    const withAlerts = body.replace(/<div class="alert"><p>([\s\S]*?)<\/p><\/div>/g, (_m, text: string, offset: number) => {
      const stripped = body.slice(0, offset).replace(/<div class="alert"><p>[\s\S]*?<\/p><\/div>/g, "");
      const box = /<[a-z]/i.test(stripped)
        ? "bg-white/5 border-l-4 border-amber-500 p-5 mb-6 mt-8"
        : "bg-white/5 border-l-4 border-amber-500/60 p-5 mb-6";
      return `<div class="${box}"><p class="font-semibold text-amber-300 text-base md:text-lg">${text}</p></div>`;
    });
    result += `<div class="mb-14"><h2 class="font-[var(--font-outfit)] text-xl md:text-2xl lg:text-3xl font-medium text-white mb-7">${heading}</h2><div class="space-y-4">${withAlerts}</div></div>`;
  }
  return result;
}

export default function MbbsApiContent({ content, stateName }: { content: string; stateName: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = (e.target as HTMLElement).closest(".faq-question-card");
    if (card) setIsModalOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = (e.target as HTMLElement).closest(".faq-question-card");
    if (card) setIsModalOpen(true);
  };

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
            <span className="w-10 h-[1px] bg-white/20" />
            {stateName} MBBS
            <span className="w-10 h-[1px] bg-white/20" />
          </span>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Complete Counselling Guide
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            Everything you need to know about {stateName} MBBS counselling, eligibility, fees, and seat categories.
          </p>
        </div>

        <div
          onClick={handleContentClick}
          onKeyDown={handleKeyDown}
          dangerouslySetInnerHTML={{ __html: transformMbbsContent(content) }}
        />
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCourse="MBBS"
      />
    </section>
  );
}
