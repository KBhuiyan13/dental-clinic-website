import Image from "next/image";
import Link from "next/link";

  export default function About({ showButton = true }: { showButton?: boolean }) {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* About Image */}
        <div className="about-image-wrapper">

          <div className="about-image">
            <Image
              src="/images/clinic-team-clean.webp"
              alt="Dental Solution Clinic Team"
              fill
              className="about-image-photo"
              sizes="(max-width: 900px) 100vw, 50vw"
            />

          </div>

          {/* Experience Badge */}
          <div className="experience-badge">
            <strong>5+</strong>
            <span>Years of<br />Experience</span>
          </div>

        </div>

        {/* About Content */}
        <div className="about-content">

          <span className="section-label">
            Our Story
          </span>

          <h2>
            Committed to Your Dental Health & Confidence
          </h2>

          <p className="about-intro">
            At Dental Solution, we believe that exceptional dental
            care is about more than just treating teeth. It is about
            creating a comfortable experience and helping every
            patient achieve a healthy, confident smile.
          
          
            Our experienced dental professionals combine modern
            technology with personalized care to provide reliable
            solutions for patients of all ages. From preventive
            checkups to advanced dental procedures, we are committed
            to delivering quality treatment in a welcoming and
            comfortable environment.
          </p>

          {/* Features */}
          <div className="about-features">

            <div className="about-feature">
              <div className="feature-check">
                ✓
              </div>

              <div>
                <strong>
                  Experienced Dentists
                </strong>

                <span>
                  Skilled professionals dedicated to your care.
                </span>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-check">
                ✓
              </div>

              <div>
                <strong>
                  Modern Technology
                </strong>

                <span>
                  Advanced equipment for precise treatment.
                </span>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-check">
                ✓
              </div>

              <div>
                <strong>
                  Patient-Centered Care
                </strong>

                <span>
                  Your comfort and satisfaction come first.
                </span>
              </div>
            </div>

          </div>

          {/* Button */}
          <Link
            href="/about"
            className="about-button"
          >
            Learn More About Us
            <span>→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}


