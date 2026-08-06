import Navbar from "../components/global/Navbar";
import PreFooterCTA from "../components/global/PreFooterCTA";
import Footer from "../components/global/Footer";
import WhatsAppButton from "../components/global/WhatsAppButton";
import Banner from "../components/global/Banner";
import Link from "next/link";
import ContactForm from "../components/contact/ContactForm";

export const metadata = {
  title: "Contact Us | ADCB Consultancy",
  description: "Get in touch with ADCB Consultancy branches in Kochi and Calicut. Speak with our medical admission experts today.",
};

const branches = [
  {
    city: "Kochi",
    slug: "kochi",
    address: "3rd Floor, ADCB Tower, MG Road, Kochi, Kerala - 682016",
    phone: "+91 94460 12345",
    email: "kochi@adcbconsultancy.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
  {
    city: "Calicut",
    slug: "calicut",
    address: "1st Floor, ADCB Plaza, Mavoor Road, Calicut, Kerala - 673004",
    phone: "+91 94460 67890",
    email: "calicut@adcbconsultancy.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-20 bg-black shadow-[0_15px_30px_rgba(0,0,0,0.5)] min-h-screen flex flex-col">
        {/* Banner Section */}
        <Banner
          title="Contact Our Offices"
          description="Have questions about MBBS or MDS admissions? Connect with our expert advisors at our regional branches."
          imageSrc="/page-banner/contact2.png"
          imageAlt="Contact ADCB Consultancy"
        />

        {/* Branch Selection Section */}
        <section id="offices" className="py-12 sm:py-20 bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
            {/* Header Style matching Home page */}
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-16">
              <span className="inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/60 font-medium mb-2">
                <span className="w-8 h-[1px] bg-white/20" />
                OUR PRESENCE
                <span className="w-8 h-[1px] bg-white/20" />
              </span>
              <h2 className="font-[var(--font-outfit)] text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight leading-tight text-white">
                Select Your
                <span className="font-semibold text-white"> Nearest Branch</span>
              </h2>
            </div>

            {/* Clean minimal branch selections */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-3xl mx-auto">
              {branches.map((branch) => (
                <Link
                  key={branch.slug}
                  href={`/contact/${branch.slug}`}
                  className="group block text-center p-8 sm:p-12 border border-zinc-400 hover:border-white transition-all duration-300 rounded-sm bg-zinc-950/20"
                >
                  <h3 className="font-[var(--font-outfit)] text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-300 group-hover:text-white transition-colors duration-300">
                    {branch.city}
                  </h3>
                  <span className="inline-block mt-3 text-xs tracking-widest text-zinc-300 group-hover:text-white transition-colors duration-300">
                    VIEW OFFICE DETAILS →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Modular General Quick Inquiry Form */}
        <ContactForm />

        <PreFooterCTA />
      </main>

      <div className="sticky bottom-0 z-10 w-full">
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}
