"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services, categories } from "../data/services";

type Filter = (typeof categories)[number];

export default function ServiceFilter() {
  const [active, setActive] = useState<Filter>("All");

  const shown =
    active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <section className="svc-section" id="all-services">
      <div className="svc-container">
        <div className="svc-section-heading">
          <span className="section-label">Treatments</span>
          <h2>Find the Right Care for You</h2>
          <p>Choose a category, or browse all our treatments below.</p>
        </div>

        <div className="svc-tabs">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={active === c}
              className={active === c ? "svc-tab active" : "svc-tab"}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="svc-grid">
          {shown.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="svc-card">
              {s.image ? (
                <div className="svc-card-image">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                    className={s.sensitive ? "is-blurred" : undefined}
                  />
                  {s.sensitive && (
                    <span className="svc-sensitive-tag">⚠ Sensitive image · view on the service page</span>
                  )}
                </div>
              ) : (
                <span className="svc-icon">{s.icon}</span>
              )}

              <span className="svc-category">{s.category}</span>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <span className="svc-meta">⏱ {s.duration}</span>
              <span className="svc-more">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}