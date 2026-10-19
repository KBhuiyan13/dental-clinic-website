import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div>
          <strong className="footer-brand">Dental Solution</strong>
          <p>Your Smile is Our Commitment.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/dentists">Dentists</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>1st floor, 98/1(beside Dorjibari), Adjacent to Cumilla Victoria College Mosque Gate, Kandirpar, Cumilla - 3500</p>
          <p>Phone: +8801961750522</p>
          <p>Email: dental.solution.contact@gmail.com</p>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Dental Solution. All rights reserved.</p>
    </footer>
  );
}