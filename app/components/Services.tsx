import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceFilter from "../components/ServiceFilter";
import CTA from "../components/CTA";
import { clinic } from "../data/clinic";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Dental implants, root canal, braces and aligners, cosmetic dentistry, oral surgery and general dental care at Dental Solution.",
};

const steps = [
  { title: "Book Your Visit", text: "Call, WhatsApp or use our online form to choose a convenient time." },
  { title: "Consultation", text: "Your dentist examines your teeth, takes X-rays if needed and listens to your concerns." },
  { title: "Clear Treatment Plan", text: "We explain your options and the cost before any treatment begins." },
  { title: "Treatment & Follow-up", text: "Comfortable treatment, clear aftercare advice and follow-up visits when needed." },
];

const faqs = [
  { q: "Do I need an appointment?", a: "Appointments are recommended so we can keep waiting time short. Call or message us on WhatsApp to book." },
  { q: "How much will my treatment cost?", a: "Cost depends on your case. Your dentist will explain the treatment plan and cost at your consultation before starting." },
  { q: "Is dental treatment painful?", a: "We use local anaesthesia and gentle techniques, so most treatments are comfortable." },
  { q: "Do you treat dental emergencies?", a: "Yes. If you have severe pain, swelling or a broken tooth, call us and we will try to see you as soon as possible." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="svc-hero">
        <div className="svc-hero-container">
          <div className="svc-hero-text">
            <span className="section-label">Our Services</span>
            <h1>
              Complete Dental Care, <span>All Under One Roof</span>
            </h1>
            <p>
              From routine checkups to implants, braces and oral surgery, our specialist dentists
              provide modern, comfortable treatment for the whole family.
            </p>

            <div className="svc-hero-buttons">
              <Link href="/contact" className="hero-primary-button">Book an Appointment</Link>
              <a
                href={`https://wa.me/${clinic.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-secondary-button"
              >
                Ask on WhatsApp
              </a>
            </div>

            <ul className="svc-hero-points">
              <li>Specialist dentists</li>
              <li>Strict sterilization</li>
              <li>Clear cost before treatment</li>
            </ul>
          </div>

          <div className="svc-hero-image">
            <Image
              src="/images/services-dental.webp"
              alt="Dental treatment at Dental Solution"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Filterable services */}
      <ServiceFilter />

      {/* How your visit works */}
      <section className="svc-section svc-process">
        <div className="svc-container">
          <div className="svc-section-heading">
            <span className="section-label">How It Works</span>
            <h2>Your Visit, Step by Step</h2>
          </div>
          <div className="process-grid">
            {steps.map((s) => (
              <div className="process-step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-section-heading">
            <span className="section-label">FAQ</span>
            <h2>Common Questions</h2>
          </div>
          <div className="faq-list svc-faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}