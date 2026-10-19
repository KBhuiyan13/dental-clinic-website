export type Dentist = {
  slug: string;
  name: string;
  specialty: string;
  image: string;
  short: string;          // shown on the card
  bio: string;            // shown on the profile page
  degrees: string[];
  bmdc: string;           // BMDC registration number
  experience: string;
  expertise: string[];
  schedule: { days: string; time: string }[];
};

export const dentists: Dentist[] = [
  {
    slug: "Dr.-Arafat",
    name: "Dr. Md. Nurun Nabi Arafat",
    specialty: "Oral & Maxillofacial Surgeon",
    image: "/images/dentist-1.webp",
    short: "Experienced in Dental Implant Surgery, Advanced Endodontics and Smile Designing.",
    bio: "Dr. Arafat is an oral and maxillofacial surgeon focused on dental implants, complex extractions and smile design. He believes in explaining every option clearly so patients can make confident decisions about their care.",
    degrees: ["BDS (Rajshahi Medical College)", "DDS (Oral & Maxillofacial Surgery, D-OMFS)", "Higher Training (Dental Implant Surgery, Advanced Endodontics and Smile Designing)"],
    bmdc: "10654",
    experience: "5+ years",
    expertise: ["Dental Implants", "Oral Surgery", "Advanced Endodontics", "Smile Designing"],
    schedule: [
      { days: "Sunday – Thursday", time: "5:00 PM – 9:00 PM" },
      { days: "Friday - Saturday", time: "Closed"},
    ],
  },
  {
    slug: "Dr.-Richi",
    name: "Dr. Anika Islam Richi",
    specialty: "Orthodontist",
    image: "/images/dentist-2.webp",
    short: "Specializes in Advanced Endodontics, Orthodontic Braces and Aligners.",
    bio: "Dr. Richi helps children and adults achieve straighter, healthier smiles with braces and clear aligners, and also provides advanced root canal treatment.",
    degrees: ["BDS (Dhaka University)", "PGT in Dental Surgery (Cumilla Medical College & Hospital)", "Higher Training (Orthodontic Braces, Clear Aligners and Advanced Endodontics)"],
    bmdc: "16090",
    experience: "2+ years",
    expertise: ["Orthodontic Braces", "Clear Aligners", "Advanced Endodontics"],
    schedule: [
      { days: "Saturday – Thursday", time: "10:00 AM – 1:00 PM & 3:00 PM – 9:00 PM" },
      { days: "Friday", time: "Closed"},
                                     
    ],
  },
];