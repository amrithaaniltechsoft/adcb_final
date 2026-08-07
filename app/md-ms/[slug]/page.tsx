import Navbar from "../../components/global/Navbar";
import PreFooterCTA from "../../components/global/PreFooterCTA";
import Footer from "../../components/global/Footer";
import WhatsAppButton from "../../components/global/WhatsAppButton";
import Banner from "../../components/global/Banner";
import { Button } from "../../components/ui/Button";
import { notFound } from "next/navigation";
import { mdmsBranchesData } from "./branchesData";
import { mdmsGuideData } from "./mdmsGuideData";
import ScrollAnimatedImage from "../../components/ui/ScrollAnimatedImage";
import MdMsGuide from "../../components/ui/MdMsGuide";

const mdmsStateSlugs = [
  "tamil-nadu",
  "kerala",
  "karnataka",
  "pondicherry",
  "telangana",
  "andhra-pradesh",
  "haryana",
  "punjab",
  "himachal-pradesh",
  "uttar-pradesh",
  "bihar",
  "chhattisgarh",
  "west-bengal",
  "uttarakhand",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = mdmsBranchesData[slug];

  if (!data) {
    return {
      title: "MD/MS Admissions & Counselling | ADCB Consultancy",
      description: "Secure your PG medical seat with expert NEET PG counselling and MD/MS admissions guidance.",
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function MdMsSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = mdmsBranchesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="relative z-20 bg-black shadow-[0_15px_30px_rgba(0,0,0,0.5)] min-h-screen flex flex-col">
        <Banner
          title={data.bannerTitle}
          description={data.bannerDescription}
          imageSrc={data.bannerImage}
          imageAlt={data.title}
        />

        {mdmsGuideData[slug] && <MdMsGuide slug={slug} />}

        {!mdmsStateSlugs.includes(slug) && (
          <section id="overview" className="py-20 md:py-24 bg-black text-white">
            <div className="max-w-5xl mx-auto px-6 lg:px-10">
              <h2 className="font-[var(--font-outfit)] text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                {data.overviewTitle}
              </h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                {data.overviewContent}
              </p>

              <div className="mt-10 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-[var(--font-outfit)] text-xl font-semibold text-white mb-4">
                    Key Highlights
                  </h3>
                  <ul className="space-y-3">
                    {data.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-zinc-300">
                        <svg
                          className="w-5 h-5 text-[#ED1C24] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-[var(--font-outfit)] text-xl font-semibold text-white mb-4">
                    {data.previewTitle}
                  </h3>
                  <ul className="space-y-3">
                    {data.previewPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-zinc-300">
                        <svg
                          className="w-5 h-5 text-[#ED1C24] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        <ScrollAnimatedImage
          variant="expand"
          foregroundImageSrc="/page-banner/mbbs-middle1.jpg"
          foregroundImageAlt="ADCB Consultancy"
        >
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 bg-black/55 text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="font-[var(--font-outfit)] text-xl sm:text-2xl md:text-3xl font-normal tracking-tight leading-tight">
                Secure your dream PG medical seat with expert, <br /> end-to-end counselling support.
              </h2>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Button href="#enquiry" size="md">
                  Join Course Now
                </Button>
                {!mdmsStateSlugs.includes(slug) && (
                  <Button href="#overview" variant="outlineWhite" size="md">
                    Learn More
                  </Button>
                )}
              </div>
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
