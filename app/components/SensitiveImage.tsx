"use client";

import { useState } from "react";
import Image from "next/image";

type Props = { src: string; alt: string; sizes: string };

export default function SensitiveImage({ src, alt, sizes }: Props) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="sensitive-image">
      <Image src={src} alt={alt} fill sizes={sizes} className={revealed ? "" : "is-blurred"} />

      {!revealed ? (
        <div className="sensitive-overlay">
          <strong>⚠ Sensitive medical image</strong>
          <p>
            This photo shows a real oral condition and is shared for patient education.
            Some people may find it upsetting.
          </p>
          <button type="button" onClick={() => setRevealed(true)}>View image</button>
        </div>
      ) : (
        <button type="button" className="sensitive-hide" onClick={() => setRevealed(false)}>
          Hide image
        </button>
      )}
    </div>
  );
}