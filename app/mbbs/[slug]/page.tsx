import Navbar from "../../components/global/Navbar";
import PreFooterCTA from "../../components/global/PreFooterCTA";
import Footer from "../../components/global/Footer";
import WhatsAppButton from "../../components/global/WhatsAppButton";
import Banner from "../../components/global/Banner";
import { Button } from "../../components/ui/Button";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { statesData } from "./statesData";
import ScrollAnimatedImage from "../../components/ui/ScrollAnimatedImage";
import MbbsCounsellingGuide from "../../components/ui/MbbsCounsellingGuide";
import MbbsKeralaGuide from "../../components/ui/MbbsKeralaGuide";
import MbbsKarnatakaGuide from "../../components/ui/MbbsKarnatakaGuide";
import MbbsPondicherryGuide from "../../components/ui/MbbsPondicherryGuide";
import MbbsTelanganaGuide from "../../components/ui/MbbsTelanganaGuide";
import MbbsAndhraGuide from "../../components/ui/MbbsAndhraGuide";
import MbbsHaryanaGuide from "../../components/ui/MbbsHaryanaGuide";
import MbbsPunjabGuide from "../../components/ui/MbbsPunjabGuide";
import MbbsHimachalGuide from "../../components/ui/MbbsHimachalGuide";
import MbbsUttarPradeshGuide from "../../components/ui/MbbsUttarPradeshGuide";
import MbbsBiharGuide from "../../components/ui/MbbsBiharGuide";

const API_BASE_URL = process.env.ADCB_API_URL ?? "http://127.0.0.1:8000";

interface ApiMbbsContent {
  state: string;
  slug: string;
  banner_title: string | null;
  banner_description: string | null;
  content: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
}

async function getMbbsContent(slug: string): Promise<ApiMbbsContent | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/mbbs-contents/${slug}`, { cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.data) return null;
    return json.data as ApiMbbsContent;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [data, apiContent] = await Promise.all([statesData[slug], getMbbsContent(slug)]);

  if (!data) {
    return {
      title: "MBBS Admissions & Counselling | ADCB Consultancy",
      description: "Secure your medical future with expert NEET UG counselling and MBBS admissions guidance.",
    };
  }

  return {
    title: apiContent?.meta_title || data.metaTitle,
    description: apiContent?.meta_description || data.metaDescription,
    keywords: apiContent?.meta_keywords || undefined,
  };
}

const guideBySlug: Record<string, () => ReactNode> = {
  kerala: () => <MbbsKeralaGuide />,
  karnataka: () => <MbbsKarnatakaGuide />,
  pondicherry: () => <MbbsPondicherryGuide />,
  telangana: () => <MbbsTelanganaGuide />,
  "andhra-pradesh": () => <MbbsAndhraGuide />,
  haryana: () => <MbbsHaryanaGuide />,
  punjab: () => <MbbsPunjabGuide />,
  "himachal-pradesh": () => <MbbsHimachalGuide />,
  "uttar-pradesh": () => <MbbsUttarPradeshGuide />,
  bihar: () => <MbbsBiharGuide />,
};

const defaultGuide = () => <MbbsCounsellingGuide />;

function transformMbbsContent(html: string): string {
  let out = html;

  // FAQ question cards
  const faqCard = (q: string) =>
    `<div class="flex items-start gap-4 p-5 md:p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#ED1C24]/30 transition-colors"><span class="text-[#ED1C24] flex-shrink-0 mt-0.5 text-lg">❓</span><p class="text-base md:text-lg text-gray-300 leading-relaxed">${q}</p></div>`;
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

function MbbsContentBody({ content, stateName }: { content: string; stateName: string }) {
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

        <div dangerouslySetInnerHTML={{ __html: transformMbbsContent(content) }} />
      </div>
    </section>
  );
}

export default async function MbbsSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [data, apiContent] = await Promise.all([statesData[slug], getMbbsContent(slug)]);

  if (!data) {
    notFound();
  }

  const GuideComponent = guideBySlug[slug] ?? defaultGuide;

  return (
    <>
      <Navbar />
      <main className="relative z-20 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.5)] min-h-screen flex flex-col">
        <Banner
          title={apiContent?.banner_title || data.bannerTitle}
          description={apiContent?.banner_description || data.bannerDescription}
          imageSrc={data.bannerImage}
          imageAlt={data.title}
        />

        {apiContent?.content ? (
          <MbbsContentBody content={apiContent.content} stateName={apiContent.state} />
        ) : (
          <GuideComponent />
        )}

        <ScrollAnimatedImage
          variant="expand"
          foregroundImageSrc="/page-banner/mbbs-middle1.jpg"
          foregroundImageAlt="ADCB Consultancy"
        >
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 bg-black/55 text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="font-[var(--font-outfit)] text-xl sm:text-2xl md:text-3xl font-normal tracking-tight leading-tight">
                Secure your dream medical seat with expert, <br /> end-to-end counselling support.
              </h2>
            </div>
          </div>
        </ScrollAnimatedImage>

        <PreFooterCTA />
      </main>

      <div className="sticky bottom-0 z-10 w-full">
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}
