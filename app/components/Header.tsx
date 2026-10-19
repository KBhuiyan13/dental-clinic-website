"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Dentists", href: "/dentists" },
    { name: "Offers", href: "/offers" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="site-header">
      <div className="header-container">

        {/* Logo */}
        <Link href="/" className="logo">
          <img
           src="images/dental-logo.webp"
           alt="Dental Solution Dental Clinic"
           className="logo-image"
         />

          <span className="logo-text">
            <strong>Dental Solution</strong>
            <small>Dental Clinic</small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Appointment Button */}
        <Link href="/contact" className="appointment-button">
          Book an Appointment
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="mobile-appointment-button"
            onClick={() => setMenuOpen(false)}
          >
            Book an Appointment
          </Link>
        </nav>
      )}
    </header>
  );
}