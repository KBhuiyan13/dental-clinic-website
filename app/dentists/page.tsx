import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Dentists from "../components/Dentists";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Our Dentists",
  description: "Meet the experienced dentists at Dental Solution: oral surgery, implants, orthodontics and more.",
};

export default function DentistsPage() {
  return (
    <>
      <PageHeader
        label="Our Dentists"
        title="Meet the Dental Experts"
        text="Experienced, caring professionals committed to personalized, high-quality dental care."
      />
      <Dentists showHeading={false} />
      <CTA />
    </>
  );
}