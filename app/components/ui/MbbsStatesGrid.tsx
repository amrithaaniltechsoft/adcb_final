"use client";

import Link from "next/link";

const states = [
  { name: "Tamil Nadu", slug: "tamil-nadu", description: "Premier government & private medical colleges" },
  { name: "Kerala", slug: "kerala", description: "Excellent clinical training environment" },
  { name: "Karnataka", slug: "karnataka", description: "Largest medical seat availability" },
  { name: "Pondicherry", slug: "pondicherry", description: "Affordable MBBS with JIPMER advantage" },
  { name: "Telangana", slug: "telangana", description: "Renowned institutions & modern facilities" },
  { name: "Andhra Pradesh", slug: "andhra-pradesh", description: "Historic medical colleges & growing sector" },
  { name: "Haryana", slug: "haryana", description: "NCR proximity & quality education" },
  { name: "Punjab", slug: "punjab", description: "Well-established medical institutions" },
  { name: "Himachal Pradesh", slug: "himachal-pradesh", description: "Serene academic environment" },
  { name: "Uttar Pradesh", slug: "uttar-pradesh", description: "Vast seat availability & diverse exposure" },
  { name: "Bihar", slug: "bihar", description: "Affordable & growing medical education" },
];

export default function MbbsStatesGrid() {
  return (
    <section id="states" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase text-black/40 font-medium mb-2">
            <span className="w-8 h-[1px] bg-black/20" />
            Top Destinations
            <span className="w-8 h-[1px] bg-black/20" />
          </span>
          <h2 className="font-[var(--font-outfit)] text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight leading-tight text-black">
            MBBS Admissions by State
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Explore MBBS opportunities across India&apos;s top medical education destinations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {states.map((state) => (
            <Link
              key={state.slug}
              href={`/mbbs/${state.slug}`}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-5 hover:border-[#ED1C24]/30 hover:shadow-lg hover:shadow-[#ED1C24]/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#ED1C24]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ED1C24]/20 transition-colors">
                  <svg className="w-4 h-4 text-[#ED1C24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-black group-hover:text-[#ED1C24] transition-colors">
                    {state.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">{state.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
