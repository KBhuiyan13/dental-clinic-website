import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import ServiceFilter from "../components/ServiceFilter";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Dental implants, root canal, orthodontics, cosmetic dentistry, oral surgery and general dental care.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Our Services"
        title="Comprehensive Dental Care for Your Family"
        text="Professional, modern and compassionate dental care to keep your smile healthy, confident and beautiful."
      />

      <section className="services-banner-wide">
        <div className="banner-scroll">
          <Image
            src="/images/services-banner.webp"
            alt="Dental Solution services: check-up, digital X-ray, scaling, whitening, gum surgery, fillings, smile design, root canal, crown and bridge, dentures, extraction, children's dentistry, braces, implants, laser whitening, jaw joint treatment, cyst and tumor treatment, jaw fracture treatment, mouth ulcers and oral cancer treatment"
            width={4078}
            height={1154}
            sizes="(max-width: 900px) 1800px, 100vw"
          />
        </div>
        <p className="banner-hint">← Swipe to see all services →</p>
      </section>

      <ServiceFilter />
      <CTA />
    </>
  );
}