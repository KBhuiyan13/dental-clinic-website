"use client";

import { useState } from "react";
import { clinic } from "../data/clinic";

const services = [
  "General Checkup",
  "Teeth Cleaning",
  "Root Canal Treatment",
  "Dental Implants",
  "Orthodontics (Braces / Aligners)",
  "Cosmetic Dentistry",
  "Oral Surgery",
  "Other",
];

export default function AppointmentForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const message = [
      `Hello ${clinic.name}, I'd like to book an appointment.`,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      `Preferred date: ${data.get("date")}`,
      `Preferred time: ${data.get("time")}`,
      data.get("message") ? `Note: ${data.get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSent(true);
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Request an Appointment</h2>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" required placeholder="Your name" />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" required placeholder="01XXXXXXXXX" />
        </div>

        <div className="form-field full">
          <label htmlFor="service">Service</label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="date">Preferred Date</label>
          <input id="date" name="date" type="date" required />
        </div>

        <div className="form-field">
          <label htmlFor="time">Preferred Time</label>
          <select id="time" name="time" required defaultValue="">
            <option value="" disabled>Select a time</option>
            <option>Afternoon (3 PM – 5 PM)</option>
            <option>Evening (5 PM – 9 PM)</option>
          </select>
        </div>

        <div className="form-field full">
          <label htmlFor="message">Message (optional)</label>
          <textarea id="message" name="message" rows={4} placeholder="Tell us about your concern" />
        </div>
      </div>

      <button type="submit" className="form-submit">Book via WhatsApp</button>
      <p className="form-note">We'll confirm your appointment time on WhatsApp.</p>

      {sent && (
        <p className="form-success">
          WhatsApp opened in a new tab. Press send there to finish booking.
        </p>
      )}
    </form>
  );
}