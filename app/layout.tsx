import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dental Solution | Dental Clinic in Cumilla",
    template: "%s | Dental Solution",
  },
  description:
    "Dental Solution offers modern, compassionate dental care: implants, root canal, orthodontics, cosmetic dentistry and oral surgery.",
  openGraph: {
    title: "Dental Solution | Dental Clinic",
    description: "Your Smile is Our Commitment.",
    images: ["/images/clinic-hero.webp"],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}