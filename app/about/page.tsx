import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Dentists from "../components/Dentists";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Dental Solution: our story, mission, values and the dentists behind your care.",
};

const values = [
  { title: "Our Mission", text: "To provide safe, modern and affordable dental care that helps every patient smile with confidence." },
  { title: "Our Vision", text: "To be the most trusted dental clinic in our community, known for honest advice and gentle care." },
  { title: "Our Promise", text: "Clear explanations, transparent pricing and strict sterilization for every patient, every visit." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="Your Trusted Partner for a Healthy Smile"
        text="Professional and compassionate dental care in a comfortable, welcoming environment."
      />
      <About showButton={false} />

      <section className="values-section">
        <div className="values-container">
          {values.map((v) => (
            <div className="value-card" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
      <Dentists />
      <CTA />
    </>
  );
}