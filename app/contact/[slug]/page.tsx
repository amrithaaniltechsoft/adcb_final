import Navbar from "../../components/global/Navbar";
import PreFooterCTA from "../../components/global/PreFooterCTA";
import Footer from "../../components/global/Footer";
import WhatsAppButton from "../../components/global/WhatsAppButton";
import Banner from "../../components/global/Banner";
import { notFound } from "next/navigation";
import BranchDetails from "../../components/contact/BranchDetails";
import BranchMap from "../../components/contact/BranchMap";
import BranchForm from "../../components/contact/BranchForm";
import BranchFAQ from "../../components/contact/BranchFAQ";

interface BranchDetailsData {
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapEmbedUrl: string;
}

const branchData: Record<string, BranchDetailsData> = {
  kochi: {
    city: "Kochi",
    address: "3rd Floor, ADCB Tower, MG Road, Kochi, Kerala - 682016",
    phone: "+91 94460 12345",
    email: "kochi@adcbconsultancy.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.688195860361!2d76.28189871479361!3d9.972322392870026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d3886f6a735%3A0xe54e6fa189c4ad3!2sMG%20Road%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1658428800000!5m2!1sen!2sin"
  },
  cochin: {
    city: "Kochi",
    address: "3rd Floor, ADCB Tower, MG Road, Kochi, Kerala - 682016",
    phone: "+91 94460 12345",
    email: "kochi@adcbconsultancy.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.688195860361!2d76.28189871479361!3d9.972322392870026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d3886f6a735%3A0xe54e6fa189c4ad3!2sMG%20Road%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1658428800000!5m2!1sen!2sin"
  },
  calicut: {
    city: "Calicut",
    address: "1st Floor, ADCB Plaza, Mavoor Road, Calicut, Kerala - 673004",
    phone: "+91 94460 67890",
    email: "calicut@adcbconsultancy.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.853044146197!2d75.78720191479934!3d11.258753091995166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6593bf1bb470f%3A0x6e9f16e451b6ad7f!2sMavoor%20Rd%2C%20Kozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1658428800000!5m2!1sen!2sin"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = branchData[slug.toLowerCase()];
  if (!branch) {
    return {
      title: "Branch Not Found | ADCB Consultancy",
    };
  }
  return {
    title: `${branch.city} Office | ADCB Consultancy`,
    description: `Connect with our ${branch.city} branch for medical admission counselling. Location: ${branch.address}, Phone: ${branch.phone}.`,
  };
}

export default async function BranchContactPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = branchData[slug.toLowerCase()];

  if (!branch) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="relative z-20 bg-black shadow-[0_15px_30px_rgba(0,0,0,0.5)] min-h-screen flex flex-col">
        {/* Banner Section */}
        <Banner
          title={`${branch.city} Office`}
          description={`Direct contact information and route map for ADCB Consultancy branch in ${branch.city}, Kerala.`}
          imageSrc="/page-banner/contact2.png"
          imageAlt={`${branch.city} Office Banner`}
          buttonText="View Address"
          buttonHref="#details"
        />

        {/* Modular Branch components */}
        <BranchDetails branch={branch} />
        <BranchMap branch={branch} />
        <BranchForm branch={branch} />
        <BranchFAQ branch={branch} />

        <PreFooterCTA />
      </main>

      <div className="sticky bottom-0 z-10 w-full">
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}
