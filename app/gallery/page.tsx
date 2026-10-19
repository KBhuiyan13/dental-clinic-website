import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import GalleryGrid from "../components/GalleryGrid";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Take a look inside Dental Solution: our clinic, our dental team and the treatments we provide.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        label="Gallery"
        title="A Look Inside Dental Solution"
        text="Our clinic, our team and the care we provide, so you know what to expect before your visit."
      />
      <GalleryGrid />
      <CTA title="Like What You See?" text="Visit us for a consultation with our experienced dentists." />
    </>
  );
}