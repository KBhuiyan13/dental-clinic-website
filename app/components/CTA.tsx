import Link from "next/link";
import { clinic } from "../data/clinic";

type Props = { title?: string; text?: string };

export default function CTA({
  title = "Ready to Take Care of Your Smile?",
  text = "Schedule an appointment with our experienced dental team today.",
}: Props) {
  return (
    <section className="cta-section">
      <div className="cta-box">
        <div className="cta-text">
          <span className="cta-label">Book Your Visit</span>
          <h2>{title}</h2>
          <p>{text}</p>
          <p className="cta-hours">🕒 {clinic.hours[0].days}: {clinic.hours[0].time}</p>
        </div>

        <div className="cta-actions">
          <Link href="/contact" className="cta-primary">
            Book an Appointment <span aria-hidden="true">→</span>
          </Link>
          <div className="cta-secondary-row">
            <a href={`tel:${clinic.phone}`} className="cta-secondary">📞 Call Us</a>
            <a
              href={`https://wa.me/${clinic.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}