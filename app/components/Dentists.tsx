import Image from "next/image";

import Link from "next/link";
import { dentists } from "../data/dentists";

   export default function Dentists({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="dentists-section">
      <div className="dentists-container">

        {/* Section Heading */}
      {showHeading && (
       <div className="dentists-heading">

          <span className="section-label">The Dentists</span>
          <h2>Meet The Dental Experts</h2>
          <p>
           Our experienced team of dental professionals is committed
           to providing personalized, compassionate, and high-quality
           dental care for every patient.
          </p>

        </div>
      )}

        {/* Dentists Grid */}
        <div className="dentists-grid">

          {dentists.map((dentist) => (
            <div
              className="dentist-card"
              key={dentist.name}
            >

              {/* Dentist Image */}
              <div className="dentist-image-wrapper">

                <Image
                  src={dentist.image}
                  alt={dentist.name}
                  fill
                  className="dentist-image"
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
                />

              </div>

              {/* Dentist Information */}
              <div className="dentist-info">

                <h3>
                  {dentist.name}
                </h3>

                <span className="dentist-specialty">
                  {dentist.specialty}
                </span>

                <p>
                  {dentist.short}
                </p>

                <Link href={`/dentists/${dentist.slug}`} className="dentist-button">
                  View Profile
                  <span>→</span>
                </Link>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
      
  );
}