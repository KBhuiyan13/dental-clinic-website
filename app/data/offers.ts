import { clinic } from "./clinic";

/* ---------- Types ---------- */
export type Offer = {
  id: string;
  badge: string;        // big label on the card, e.g. "20% OFF"
  title: string;
  description: string;
  validUntil: string;   // "YYYY-MM-DD" – the offer hides itself after this date
  startsOn?: string;    // optional – hide until this date (good for festival offers)
};

export type Package = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;   // e.g. "per person" or "or monthly payments"
  includes: string[];
  popular?: boolean;
};

export type GroupOffer = { id: string; icon: string; title: string; description: string };

/* ---------- 1. Limited-time offers ---------- */
export const offers: Offer[] = [
  {
    id: "free-consultation",
    badge: "FREE",
    title: "Free Consultation with Scaling",
    description: "Book scaling and polishing and get your dental consultation free of charge.",
    validUntil: "2026-11-30",
  },
  {
    id: "whitening-20",
    badge: "20% OFF",
    title: "Teeth Whitening Offer",
    description: "Get a brighter smile this month with 20% off professional teeth whitening.",
    validUntil: "2026-11-30",
  },
  {
    id: "victory-day",
    badge: "16 DEC",
    title: "Victory Day Special",
    description: "Celebrate Victory Day with a special discount on checkups and scaling for the whole family.",
    startsOn: "2026-12-10",
    validUntil: "2026-12-20",
  },
];

/* ---------- 2. Treatment packages (PLACEHOLDER PRICES – replace!) ---------- */
export const packages: Package[] = [
  {
    id: "basic",
    name: "Basic Checkup",
    price: "৳X,XXX",
    includes: ["Dental consultation", "Digital X-ray (RVG)", "Scaling"],
  },
  {
    id: "bright-smile",
    name: "Bright Smile",
    price: "৳X,XXX",
    includes: ["Scaling", "Polishing", "Professional teeth whitening"],
    popular: true,
  },
  {
    id: "family",
    name: "Family Care",
    price: "৳X,XXX",
    priceNote: "for 3–4 family members",
    includes: ["Checkup for each member", "Advice for children & adults", "Priority appointments"],
  },
  {
    id: "braces-implant",
    name: "Braces / Implant Plan",
    price: "৳XX,XXX",
    priceNote: "total, or easy monthly payments",
    includes: ["Full treatment plan", "All follow-up visits", "Monthly payment option"],
  },
];

/* ---------- 3. Offers for specific groups ---------- */
export const groupOffers: GroupOffer[] = [
  { id: "students", icon: "🎓", title: "Students", description: "X% off on treatments with a valid student ID." },
  { id: "seniors", icon: "👴", title: "Senior Citizens", description: "X% off for patients aged 60 and above." },
  { id: "children", icon: "🧒", title: "Children's First Checkup", description: "Your child's first dental checkup is free." },
  { id: "referral", icon: "🤝", title: "Refer a Friend", description: "Bring a friend, and you both get a discount on your next visit." },
];

/* ---------- Terms ---------- */
export const offerTerms = [
  { q: "How do I claim an offer?", a: "Tap “Claim on WhatsApp” on any offer, or mention the offer when you book. Our team will confirm your appointment." },
  { q: "Can I combine offers?", a: "Offers cannot be combined unless stated. The best available offer will be applied." },
  { q: "Is every treatment suitable for me?", a: "Your dentist will examine you first and confirm the right treatment before any offer is applied." },
  { q: "When do offers end?", a: "Each limited-time offer shows its end date. Prices and offers may change without notice." },
];

/* ---------- Helpers ---------- */
const DHAKA = "+06:00";

export function daysLeft(validUntil: string, now = new Date()) {
  const end = new Date(`${validUntil}T23:59:59${DHAKA}`);
  return Math.ceil((end.getTime() - now.getTime()) / 86_400_000);
}

export function isActive(o: Offer, now = new Date()) {
  const started = !o.startsOn || new Date(`${o.startsOn}T00:00:00${DHAKA}`) <= now;
  return started && daysLeft(o.validUntil, now) > 0;
}

export function claimLink(offerName: string) {
  const text = `Hi ${clinic.name}, I'd like to claim the "${offerName}" offer.`;
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`;
}