import Image from "next/image";
import Link from "next/link";
import { blogsData, BlogPost } from "./blogsData";

export default function BlogList() {
  return (
    <section className="py-16 md:py-24 bg-black flex-grow">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        {/* Blog Post Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {blogsData.map((post: BlogPost, index: number) => (
            <article
              key={post.slug}
              className="group flex flex-col bg-transparent transition-all duration-500"
            >
              {/* Image Container */}
              <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={index < 3}
                />
              </Link>

              {/* Content */}
              <div className="pt-4 pb-0 flex flex-col flex-grow">
                {/* Date & Read time */}
                <div className="flex items-center gap-1.5 sm:gap-3 text-white/40 text-[10px] sm:text-xs font-medium mb-2 sm:mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/20" />
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-[var(--font-outfit)] text-sm sm:text-xl font-semibold text-white mb-2 sm:mb-3 line-clamp-2 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#ED1C24] transition-colors relative block">
                    {post.title}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ED1C24] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-2 sm:line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Divider */}
                <div className="border-t border-white/8 pt-4 sm:pt-5 mt-auto flex items-center justify-between">
                  {/* Author */}
                  <span className="text-[10px] sm:text-xs text-white/40 font-medium">
                    By {post.author}
                  </span>

                  {/* Arrow CTA */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-[#ED1C24] uppercase tracking-wider group/link"
                  >
                    Read Article
                    <svg
                      className="w-4 h-4 transform group-hover/link:translate-x-1.5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
