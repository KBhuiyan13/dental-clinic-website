"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { gallery, galleryCategories, type GalleryItem } from "../data/gallery";

type Filter = (typeof galleryCategories)[number];

export default function GalleryGrid() {
  const [active, setActive] = useState<Filter>("All");
  const [open, setOpen] = useState<number | null>(null);
  const [safeView, setSafeView] = useState(true);
  const [revealed, setRevealed] = useState<string[]>([]); // photos revealed one by one

  const shown = active === "All" ? gallery : gallery.filter((g) => g.category === active);
  const current = open !== null ? shown[open] : null;

  const isHidden = (item: GalleryItem) =>
    !!item.sensitive && safeView && !revealed.includes(item.src);

  const next = () => setOpen((i) => (i === null ? null : (i + 1) % shown.length));
  const prev = () => setOpen((i) => (i === null ? null : (i - 1 + shown.length) % shown.length));

  useEffect(() => {
    if (open === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? null : (i + 1) % shown.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? null : (i - 1 + shown.length) % shown.length));
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, shown.length]);

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-toolbar">
          <div className="svc-tabs">
            {galleryCategories.map((c) => (
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

          <label className="safe-toggle">
            <input
              type="checkbox"
              checked={safeView}
              onChange={(e) => {
                setSafeView(e.target.checked);
                if (e.target.checked) setRevealed([]); // turning safe view back on hides them again
              }}
            />
            <span className="safe-switch" aria-hidden="true" />
            Safe view <small>(blur sensitive medical photos)</small>
          </label>
        </div>

        <div className="gallery-grid">
          {shown.map((item, i) => {
            const hidden = isHidden(item);
            return (
              <button
                key={item.src}
                type="button"
                className="gallery-item"
                onClick={() => setOpen(i)}
                aria-label={`Open photo: ${item.caption ?? item.alt}${hidden ? " (sensitive image)" : ""}`}
              >
                <Image
                  src={item.src}
                  alt={hidden ? "Sensitive medical image (blurred)" : item.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  className={hidden ? "is-blurred" : undefined}
                />
                {hidden && <span className="gallery-sensitive-tag">⚠ Sensitive image · tap to view</span>}
                {item.caption && <span className="gallery-caption">{item.caption}</span>}
              </button>
            );
          })}
        </div>
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt} onClick={() => setOpen(null)}>
          <button type="button" className="lightbox-close" onClick={() => setOpen(null)} aria-label="Close">✕</button>

          <button
            type="button"
            className="lightbox-nav prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image">
              <Image
                src={current.src}
                alt={isHidden(current) ? "Sensitive medical image (blurred)" : current.alt}
                fill
                sizes="90vw"
                className={isHidden(current) ? "is-blurred" : undefined}
              />

              {isHidden(current) && (
                <div className="sensitive-overlay">
                  <strong>⚠ Sensitive medical image</strong>
                  <p>
                    This photo shows a real oral condition and is shared for patient education.
                    Some people may find it upsetting.
                  </p>
                  <button type="button" onClick={() => setRevealed((r) => [...r, current.src])}>
                    View image
                  </button>
                </div>
              )}
            </div>
            {current.caption && <figcaption>{current.caption}</figcaption>}
          </figure>

          <button
            type="button"
            className="lightbox-nav next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}