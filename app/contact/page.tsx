import type { Metadata } from "next";
import AppointmentForm from "../components/AppointmentForm";
import { clinic } from "../data/clinic";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description:
    "Book an appointment at Dental Solution. Find our address, phone, WhatsApp and opening hours.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`;

  return (
    <>
      <section className="contact-header">
        <div className="contact-header-container">
          <span className="section-label">Contact Us</span>
          <h1>Book Your Appointment</h1>
          <p>Fill in the form and we&apos;ll confirm your visit on WhatsApp, or call us directly.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <AppointmentForm />

          <aside className="contact-info">
            <div className="info-card">
              <h3>Visit Us</h3>
              <p>{clinic.address}</p>
            </div>

            <div className="info-card">
              <h3>Call or WhatsApp</h3>
              <a href={`tel:${clinic.phone}`}>{clinic.phoneDisplay}</a>
              <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
              <a
                href={`https://wa.me/${clinic.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="info-card">
              <h3>Opening Hours</h3>
              <ul className="hours-list">
                {clinic.hours.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <strong>{h.time}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="contact-map">
        <iframe
          src={mapSrc}
          title="Dental Solution location on Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}