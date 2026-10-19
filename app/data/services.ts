
export const categories = ["All", "Preventive", "Restorative", "Cosmetic", "Orthodontics", "Surgery"] as const;
export type Category = Exclude<(typeof categories)[number], "All">;

export type Service = {
  slug: string;        // used in the URL: /services/dental-implants
  icon: string;
  title: string;
  category: Category;
  duration: string;
  short: string;       // shown on the card
  intro: string; 
  image?: string;   // optional: services without a photo show their icon
  sensitive?: boolean;   // true = blur the image behind a warning      // first paragraph on the detail page
  benefits: string[];
  steps: string[];
  faqs: { q: string; a: string }[];
};



export const services: Service[] = [
  {
    slug: "dental-implants",
    icon: "◇",
    title: "Dental Implants",
    image: "/images/services/dental-implant.webp",
    sensitive: false,
    category: "Restorative",
    duration: "3–6 months, several visits",
    short: "A natural-looking, durable and comfortable solution for missing teeth.",
    intro:
      "A dental implant replaces the root of a missing tooth with a small titanium post, topped with a crown that looks and works like a natural tooth.",
    benefits: [
      "Looks and feels like a natural tooth",
      "Protects the jawbone and neighbouring teeth",
      "Long-lasting with proper care",
    ],
    steps: [
      "Consultation, X-ray and treatment planning",
      "Implant placement under local anaesthesia",
      "Healing period while the implant bonds with the bone",
      "Fitting the final crown",
    ],
    faqs: [
      { q: "Is the procedure painful?", a: "It is done under local anaesthesia, so most patients feel only mild discomfort afterwards." },
      { q: "How long does the whole process take?", a: "It depends on your case. Your dentist will give you a timeline at the consultation." },
    ],
  },
  {
    slug: "root-canal-treatment",
    icon: "◉",
    title: "Root Canal Treatment",
    image: "/images/services/root-canal.webp",
    sensitive: false,
    category: "Restorative",
    duration: "1–2 visits",
    short: "Relieve tooth pain and save your natural tooth with modern, comfortable treatment.",
    intro:
      "Root canal treatment removes infected or inflamed tissue from inside the tooth, cleans and seals it, and saves the tooth from extraction.",
    benefits: ["Relieves tooth pain", "Saves your natural tooth", "Stops the infection from spreading"],
    steps: [
      "Examination and X-ray",
      "Cleaning and shaping the root canals",
      "Filling and sealing the canals",
      "Restoring the tooth with a filling or crown",
    ],
    faqs: [
      { q: "How many visits are needed?", a: "Many cases are finished in one or two visits, depending on the tooth and the infection." },
    ],
  },
  {
    slug: "general-dentistry",
    icon: "🦷",
    title: "General Dentistry",
    image: "/images/services/dental-checkup.webp",
    sensitive: false,
    category: "Preventive",
    duration: "30–60 minutes",
    short: "Checkups, scaling, fillings and preventive care to keep teeth and gums healthy.",
    intro: "Regular checkups catch problems early, when they are simpler and cheaper to treat. We examine your teeth and gums, clean away plaque and tartar, and advise you on daily care.",
    benefits: ["Find problems early", "Fresher breath and healthier gums", "Prevent costly treatment later"],
    steps: ["Examination of teeth and gums", "X-ray if needed", "Scaling and polishing", "Advice and a follow-up plan"],
    faqs: [
      { q: "How often should I get a checkup?", a: "Most people should visit every six months. Your dentist may suggest a different schedule for you." },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    icon: "✨",
    title: "Cosmetic Dentistry",
    image: "/images/services/smile-designing.webp",
    sensitive: false,
    category: "Cosmetic",
    duration: "1–3 visits",
    short: "Whitening, veneers and smile design to give you a smile you're proud of.",
    intro: "Cosmetic treatments improve the colour, shape and alignment of your teeth. We plan every smile to look natural and suit your face.",
    benefits: ["Brighter, more even smile", "Natural-looking results", "Boosts confidence"],
    steps: ["Smile consultation", "Choosing the right treatment", "Treatment", "Aftercare advice"],
    faqs: [
      { q: "Is teeth whitening safe?", a: "Professional whitening done by a dentist is safe. We check your teeth first to choose the right method." },
    ],
  },
  {
    slug: "orthodontic-treatment",
    icon: "😁",
    title: "Orthodontic Treatment",
    image: "/images/services/braces-aligners.webp",
    sensitive: false,
    category: "Orthodontics",
    duration: "12–24 months",
    short: "Braces and clear aligners to straighten teeth and correct bite problems.",
    intro: "Orthodontic treatment gradually moves teeth into the right position using braces or clear aligners. It improves both appearance and how your teeth work.",
    benefits: ["Straighter teeth", "Better bite and chewing", "Easier to clean teeth"],
    steps: ["Orthodontic assessment and X-rays", "Treatment plan: braces or aligners", "Regular adjustment visits", "Retainer to hold the result"],
    faqs: [
      { q: "Am I too old for braces?", a: "No. Adults can have orthodontic treatment too, and clear aligners are a popular discreet option." },
    ],
  },
  {
    slug: "oral-surgery",
    icon: "➕",
    title: "Oral Surgery",
    //image: "/images/services/oral-cancer.webp",
    //sensitive: True,
    //image: "/images/services/oral-ulcer.webp",
    //sensitive: True,
    image: "/images/services/tooth-extraction.webp",
    sensitive: false,
    category: "Surgery",
    duration: "Depends on the procedure",
    short: "Wisdom tooth removal, complex extractions and minor oral surgery done safely.",
    intro: "Our oral and maxillofacial surgeon performs procedures such as impacted wisdom tooth removal and complex extractions, with a focus on safety and comfort.",
    benefits: ["Relief from pain and infection", "Performed by a specialist surgeon", "Clear aftercare guidance"],
    steps: ["Consultation and X-ray", "Procedure under local anaesthesia", "Aftercare instructions", "Follow-up check"],
    faqs: [
      { q: "How long is recovery after wisdom tooth removal?", a: "Most people feel better within a few days. Your dentist will give you clear aftercare instructions." },
    ],
  }, // Add General Dentistry, Cosmetic Dentistry, Orthodontic Treatment
  // and Oral Surgery in the same shape.
];