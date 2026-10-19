import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { dentists } from "../../data/dentists";
import CTA from "../../components/CTA";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return dentists.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dentist = dentists.find((d) => d.slug === slug);
  if (!dentist) return {};
  return {
    title: `${dentist.name} – ${dentist.specialty}`,
    description: dentist.short,
    openGraph: { images: [dentist.image] },
  };
}

export default async function DentistProfilePage({ params }: Props) {
  const { slug } = await params;
  const dentist = dentists.find((d) => d.slug === slug);
  if (!dentist) notFound();

  return (
    <>
      <section className="profile-section">
        <div className="profile-container">
          <Link href="/dentists" className="back-link">← All Dentists</Link>

          <div className="profile-grid">
            <div className="profile-photo">
              <Image
                src={dentist.image}
                alt={dentist.name}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>

            <div className="profile-info">
              <span className="section-label">{dentist.specialty}</span>
              <h1>{dentist.name}</h1>
              <p className="profile-degrees">{dentist.degrees.join(", ")}</p>

              <div className="profile-stats">
                <div><strong>{dentist.experience}</strong><span>Experience</span></div>
                <div><strong>{dentist.bmdc}</strong><span>BMDC Reg. No.</span></div>
              </div>

              <p className="profile-bio">{dentist.bio}</p>

              <h2>Areas of Expertise</h2>
              <ul className="expertise-tags">
                {dentist.expertise.map((e) => <li key={e}>{e}</li>)}
              </ul>

              <h2>Consultation Hours</h2>
              <ul className="hours-list">
                {dentist.schedule.map((s) => (
                  <li key={s.days}><span>{s.days}</span><strong>{s.time}</strong></li>
                ))}
              </ul>

              <Link href="/contact" className="profile-book-button">
                Book with {dentist.name.split(" ").slice(0, 2).join(" ")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA title="Not sure which dentist to see?" text="Contact us and we'll match you with the right specialist." />
    </>
  );
}