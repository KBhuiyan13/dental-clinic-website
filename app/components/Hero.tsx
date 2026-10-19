import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* Hero Content */}
        <div className="hero-content">

          <span className="hero-label">
            Welcome to Dental Solution
          </span>

          <h1>
            Your Smile is
            <span> Our Commitment.</span>
          </h1>

          <p>
            Experience exceptional dental care with a team dedicated
            to your comfort, health and confidence. We provide
            modern, compassionate, and personalized dental solutions
            for you and your family.
          </p>

          <div className="hero-buttons">
            <Link
              href="/contact"
              className="hero-primary-button"
            >
              Book an Appointment
            </Link>

            <Link
              href="/services"
              className="hero-secondary-button"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust">

            <div className="trust-item">
              <strong>5+</strong>
              <span>Years of Experience</span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <strong>500+</strong>
              <span>Happy Patients</span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <strong>2</strong>
              <span>Expert Dentists</span>
            </div>

          </div>

        </div>

        {/* Hero Image */}
        <div className="hero-image-wrapper">

          <div className="hero-image-placeholder">
            <Image
              src="/images/clinic-hero.webp"
              alt="Dental Solution Clinic"
              fill
              priority
              className="hero-image"
              sizes="(max-width: 1000px) 100vw, 50vw"
            />  
          </div>

          {/* Floating Card */}
          <div className="hero-floating-card">

            <div className="floating-icon">
              ✓
            </div>

            <div>
              <strong>Trusted Dental Care</strong>
              <span>Comfortable & Professional</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}