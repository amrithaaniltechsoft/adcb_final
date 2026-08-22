import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import WhatsAppButton from "../../components/global/WhatsAppButton";
import PreFooterCTA from "../../components/global/PreFooterCTA";
import { blogsData, getBlogs } from "../blogsData";
import BlogInquiryForm from "./BlogInquiryForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getBlogs();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog | ADCB Consultancy" };
  return {
    title: `${post.title} | ADCB Consultancy Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getBlogs();
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedPosts = posts.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 3);

  const otherPosts = relatedPosts.length > 0
    ? relatedPosts
    : posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="relative z-20 bg-black min-h-screen flex flex-col">
        {/* Hero Banner */}
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-zinc-950">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover object-center opacity-50"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 max-w-[1440px] mx-auto px-8 lg:px-20 pb-12 md:pb-16">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/40 text-xs font-medium mb-5 uppercase tracking-wider">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70 line-clamp-1">{post.title}</span>
            </div>

            {/* Category Badge */}
            <span className="inline-block bg-[#ED1C24] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mt-5 text-white/50 text-xs font-medium">
              <span className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {post.author}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-14 md:py-20 w-full">
          <div className="flex flex-col lg:flex-row gap-14 xl:gap-20">

            {/* Left: Article Body */}
            <article className="flex-1 min-w-0">
              {/* Excerpt / Lead */}
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light border-l-4 border-[#ED1C24] pl-6 mb-10">
                {post.excerpt}
              </p>

              {/* HTML Content */}
              <div
                className="prose-blog text-white/80"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Back Link */}
              <div className="mt-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-3 text-sm font-semibold text-white/60 hover:text-white transition-colors group"
                >
                  <svg
                    className="w-4 h-4 transform group-hover:-translate-x-1.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Back to All Articles
                </Link>
              </div>
            </article>

            {/* Right: Sticky Sidebar */}
            <aside className="lg:w-[360px] xl:w-[400px] flex-shrink-0">
              <div className="lg:sticky lg:top-32 space-y-8">

                {/* Inquiry Form */}
                <BlogInquiryForm />

                {/* Related Articles */}
                {otherPosts.length > 0 && (
                  <div className="border border-white/8 p-6">
                    <h3 className="font-[var(--font-outfit)] text-sm font-bold text-white uppercase tracking-widest mb-5 pb-4 border-b border-white/8">
                      Related Articles
                    </h3>
                    <div className="space-y-5">
                      {otherPosts.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/blog/${related.slug}`}
                          className="group flex items-start gap-4"
                        >
                          <div className="relative w-20 h-14 flex-shrink-0 overflow-hidden bg-zinc-800">
                            <Image
                              src={related.image}
                              alt={related.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white/80 text-xs font-semibold leading-snug line-clamp-2 group-hover:text-[#ED1C24] transition-colors">
                              {related.title}
                            </p>
                            <p className="text-white/30 text-[10px] mt-1.5">{related.date}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </aside>
          </div>
        </div>

        <PreFooterCTA />
      </main>

      <div className="sticky bottom-0 z-10 w-full">
        <Footer />
      </div>
      <WhatsAppButton />

      {/* Inline prose styles for dark theme */}
      <style>{`
        .prose-blog h3 {
          font-family: var(--font-outfit);
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .prose-blog p {
          font-size: 1.125rem;
          line-height: 1.85;
          margin-bottom: 1rem;
          color: rgba(255,255,255,0.75);
        }
        .prose-blog ul {
          margin: 0.75rem 0 1.25rem 0;
          padding-left: 1.25rem;
          space-y: 0.5rem;
        }
        .prose-blog ul li {
          font-size: 1.0625rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.7);
          margin-bottom: 0.4rem;
          list-style-type: disc;
        }
        .prose-blog strong {
          color: #ffffff;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}
