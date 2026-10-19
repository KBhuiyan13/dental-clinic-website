import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import { offers, packages, groupOffers, offerTerms, isActive, daysLeft, claimLink } from "../data/offers";

export const metadata: Metadata = {
  title: "Offers & Packages",
  description: "Current dental offers, treatment packages and special discounts at Dental Solution.",
};

// Rebuild this page every hour so expired offers disappear and countdowns stay accurate
export const revalidate = 3600;

function timeLabel(validUntil: string) {
  const d = daysLeft(validUntil);
  if (d <= 1) return "⏳ Last day!";
  if (d <= 7) return `⏳ Ends in ${d} days`;
  const date = new Date(`${validUntil}T12:00:00+06:00`).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Dhaka",
  });
  return `Valid until ${date}`;
}

export default function OffersPage() {
  const activeOffers = offers.filter((o) => isActive(o));

  return (
    <>
      <PageHeader
        label="Offers"
        title="Offers & Treatment Packages"
        text="Quality dental care at a better price. Claim any offer on WhatsApp in one tap."
      />

      {/* 1. Limited-time offers */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-section-heading">
            <span className="section-label">Limited Time</span>
            <h2>Current Offers</h2>
          </div>

          {activeOffers.length === 0 ? (
            <p className="offers-empty">No limited-time offers right now. Check our packages below!</p>
          ) : (
            <div className="offer-grid">
              {activeOffers.map((o) => (
                <div className="offer-card" key={o.id}>
                  <span className="offer-badge">{o.badge}</span>
                  <h3>{o.title}</h3>
                  <p>{o.description}</p>
                  <span className={daysLeft(o.validUntil) <= 7 ? "offer-timer urgent" : "offer-timer"}>
                    {timeLabel(o.validUntil)}
                  </span>
                  <a href={claimLink(o.title)} target="_blank" rel="noopener noreferrer" className="offer-claim">
                    💬 Claim on WhatsApp
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 2. Packages */}
      <section className="svc-section pkg-section">
        <div className="svc-container">
          <div className="svc-section-heading">
            <span className="section-label">Packages</span>
            <h2>Treatment Packages</h2>
            <p>Simple, upfront pricing for the treatments our patients ask for most.</p>
          </div>

          <div className="pkg-grid">
            {packages.map((p) => (
              <div className={p.popular ? "pkg-card popular" : "pkg-card"} key={p.id}>
                {p.popular && <span className="pkg-ribbon">Most Popular</span>}
                <h3>{p.name}</h3>
                <p className="pkg-price">{p.price}</p>
                {p.priceNote && <p className="pkg-note">{p.priceNote}</p>}
                <ul className="pkg-includes">
                  {p.includes.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a href={claimLink(p.name)} target="_blank" rel="noopener noreferrer" className="pkg-button">
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Special groups */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-section-heading">
            <span className="section-label">Special Discounts</span>
            <h2>Offers for You &amp; Your Family</h2>
          </div>
          <div className="group-grid">
            {groupOffers.map((g) => (
              <div className="group-card" key={g.id}>
                <span className="group-icon">{g.icon}</span>
                <h3>{g.title}</h3>
                <p>{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-section-heading">
            <span className="section-label">Good to Know</span>
            <h2>Offer Terms</h2>
          </div>
          <div className="faq-list svc-faq">
            {offerTerms.map((t) => (
              <details key={t.q}>
                <summary>{t.q}</summary>
                <p>{t.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Have a Question About an Offer?" text="Call or message us and we'll help you choose the right treatment." />
    </>
  );
}