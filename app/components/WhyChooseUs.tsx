const reasons = [
  {
    icon: "✓",
    title: "Experienced Professionals",
    description:
      "Our skilled dental professionals bring years of experience and expertise to every treatment.",
  },
  {
    icon: "⚙",
    title: "Modern Technology",
    description:
      "We use modern dental equipment and advanced techniques to provide safe and effective treatment.",
  },
  {
    icon: "♥",
    title: "Patient-Centered Care",
    description:
      "Every treatment plan is personalized to your needs, comfort, and long-term oral health.",
  },
  {
    icon: "✦",
    title: "Comfortable Environment",
    description:
      "We create a welcoming and relaxing environment where you can feel comfortable throughout your visit.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section" id="why-choose-us">
      <div className="why-choose-container">

        {/* Section Heading */}
        <div className="why-choose-heading">

          <span className="section-label">
            Why Choose Us
          </span>

          <h2>
            Dental Care You Can Trust
          </h2>

          <p>
            We combine professional expertise, modern technology,
            and compassionate care to provide a dental experience
            focused on your health, comfort, and confidence.
          </p>

        </div>

        {/* Reasons Grid */}
        <div className="reasons-grid">

          {reasons.map((reason) => (
            <div
              className="reason-card"
              key={reason.title}
            >

              <div className="reason-icon">
                {reason.icon}
              </div>

              <h3>
                {reason.title}
              </h3>

              <p>
                {reason.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}