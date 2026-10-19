# 🦷 Dental Solution – Clinic Website

The official website of **Dental Solution Dental Clinic**, Dhaka, Bangladesh.
Patients can explore treatments, meet the dentists, view offers and book an appointment via WhatsApp.

**Live site:** https://your-site.vercel.app <!-- replace with the real link -->

---

## ✨ Features

- **Home, About, Services, Dentists, Gallery, Offers, Contact** pages
- **Service pages** for each treatment (`/services/[slug]`) with benefits, steps and FAQs
- **Dentist profiles** (`/dentists/[slug]`) with degrees, BMDC number and consultation hours
- **Category filters** on Services and Gallery
- **Gallery lightbox** with keyboard support and a **Safe view** toggle that blurs sensitive medical photos
- **Offers** that hide themselves after their end date, with a “Claim on WhatsApp” button
- **Appointment form** that sends the booking details to WhatsApp, with no backend needed
- Floating **WhatsApp button**, mobile menu, and fully responsive layout
- SEO-friendly titles and descriptions on every page

## 🛠 Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- TypeScript
- Tailwind CSS v4 + custom CSS (`app/globals.css`)
- Hosted on [Vercel](https://vercel.com)

## 🚀 Run It Locally

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the site at http://localhost:3000
npm run build    # check the production build before pushing
```

## 📁 Project Structure

```
app/
├── components/   # Header, Footer, Hero, CTA, GalleryGrid, ServiceFilter, …
├── data/         # ✏️ All editable content lives here
│   ├── clinic.ts     # name, phone, WhatsApp, address, hours
│   ├── services.ts   # treatments shown on Services pages
│   ├── dentists.ts   # dentist profiles
│   ├── gallery.ts    # gallery photos (+ sensitive flag)
│   └── offers.ts     # offers, packages, group discounts
├── services/     # /services and /services/[slug]
├── dentists/     # /dentists and /dentists/[slug]
├── gallery/      # /gallery
├── offers/       # /offers
├── about/        # /about
├── contact/      # /contact
├── layout.tsx    # shared header, footer, site metadata
└── globals.css   # all styles
public/images/    # logo, clinic, dentist and treatment photos
```

## ✏️ Updating Content

Most updates only need a change in **`app/data/`**, with no design or code changes:

| To change… | Edit |
|---|---|
| Phone, WhatsApp, address, opening hours | `app/data/clinic.ts` |
| Add or edit a treatment | `app/data/services.ts` |
| Dentist details or schedule | `app/data/dentists.ts` |
| Monthly offers and package prices | `app/data/offers.ts` (set `validUntil`, and expired offers hide themselves) |
| Gallery photos | add the image to `public/images/…`, then a line in `app/data/gallery.ts` |

**Image tips:** use `.webp` format, about 1200–1600 px wide.
Mark clinical photos that may upset viewers with `sensitive: true`.

## 🌐 Deployment

The site deploys automatically to Vercel on every push to `main`:

```bash
git add .
git commit -m "Describe your change"
git push
```

## 📝 Notes

- Medical information on this site is for general patient education and was reviewed by the clinic's dentists.
- Some treatment images are placeholders and will be replaced with the clinic's own or free-licence photos.

---

© Dental Solution. All rights reserved.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
