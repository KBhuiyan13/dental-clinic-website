export const galleryCategories = ["All", "Clinic", "Team", "Treatments"] as const;
export type GalleryCategory = Exclude<(typeof galleryCategories)[number], "All">;

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
  sensitive?: boolean;   // true = blurred behind a warning in safe view
};

/* Clinic and team photos */
const clinicAndTeam: GalleryItem[] = [
  { src: "/images/clinic-hero.webp", alt: "Dr. Arafat treating a patient at Dental Solution", category: "Clinic", caption: "Our treatment room" },
  { src: "/images/clinic-team-clean.webp", alt: "Dr. Arafat in the operating theatre", category: "Team", caption: "Dr. Arafat in the operating theatre" },
  { src: "/images/dentist-1.webp", alt: "Dr. Md. Nurun Nabi Arafat", category: "Team", caption: "Dr. Md. Nurun Nabi Arafat" },
  { src: "/images/dentist-2.webp", alt: "Dr. Anika Islam Richi", category: "Team", caption: "Dr. Anika Islam Richi" },
];

/* Treatment photos from /public/images/services/  –  [file name, caption, sensitive?] */
const treatmentPhotos: [string, string, boolean?][] = [
  ["dental-checkup", "Dental check-up"],
  ["digital-xray", "Digital dental X-ray (RVG)"],
  ["scaling-polishing", "Scaling & polishing"],
  ["teeth-whitening", "Teeth whitening"],
  ["laser-whitening", "Laser teeth whitening"],
  ["periodontal-surgery", "Gum (periodontal) treatment"],
  ["cosmetic-filling", "Cosmetic filling"],
  ["smile-designing", "Smile designing"],
  ["root-canal", "Root canal treatment"],
  ["crown-bridge", "Crown & bridge"],
  ["flexible-denture", "Flexible denture"],
  ["tooth-extraction", "Tooth extraction"],
  ["pediatric-dentistry", "Children's dentistry"],
  ["braces-aligners", "Braces & aligners"],
  ["dental-implant", "Dental implants"],
  ["tmj-treatment", "Jaw joint (TMJ) treatment"],
  ["cyst-tumor", "Oral cyst & tumor treatment"],
  ["jaw-fracture", "Facial & jaw fracture treatment"],
  ["oral-ulcer", "Mouth & gum ulcer treatment", true],
  ["oral-cancer", "Oral cancer treatment", true],
];

const treatments: GalleryItem[] = treatmentPhotos.map(([file, caption, sensitive]) => ({
  src: `/images/services/${file}.webp`,
  alt: caption,
  category: "Treatments",
  caption,
  sensitive,
}));

/* ⬇ This is the line the error was missing */
export const gallery: GalleryItem[] = [...clinicAndTeam, ...treatments];