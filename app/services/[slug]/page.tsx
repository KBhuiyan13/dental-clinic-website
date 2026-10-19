import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "../../data/services";
import CTA from "../../components/CTA";
import SensitiveImage from "../../components/SensitiveImage";

type Props = { params: Promise<{ slug: string }> };

// Build one page per service ahead of time
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// A unique title and description for each service (good for Google)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.short };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="service-detail">
        <div className="service-detail-container">
          <Link href="/services" className="back-link">← All Services</Link>
          <span className="service-detail-icon">{service.icon}</span>
          <h1>{service.title}</h1>
          <p className="svc-meta">{service.category} · ⏱ {service.duration}</p>
          <p className="service-detail-intro">{service.intro}</p>

        {/* ↓ NEW: service photo (blurred with a warning if sensitive) */}
          {service.image &&
          (service.sensitive ? (
            <SensitiveImage src={service.image} alt={service.title} sizes="(max-width: 900px) 100vw, 900px" />
            ) : (
            <div className="service-detail-image">
               <Image src={service.image} alt={service.title} fill sizes="(max-width: 900px) 100vw, 900px" />
            </div>
              ))}
              {/* ↑ END NEW */}


          <div className="service-detail-grid">
            <div className="detail-card">
              <h2>Benefits</h2>
              <ul className="check-list">
                {service.benefits.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
            <div className="detail-card">
              <h2>What to Expect</h2>
              <ol className="step-list">
                {service.steps.map((s) => <li key={s}>{s}</li>)}
              </ol>
            </div>
          </div>

          {service.faqs.length > 0 && (
            <div className="faq-list">
              <h2>Frequently Asked Questions</h2>
              {service.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA title={`Interested in ${service.title}?`} text="Book a consultation with our dentists." />
    </>
  );
}