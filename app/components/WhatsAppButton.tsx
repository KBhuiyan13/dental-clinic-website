import { clinic } from "../data/clinic";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${clinic.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      💬 WhatsApp
    </a>
  );
}