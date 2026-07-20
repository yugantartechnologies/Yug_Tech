# YugAntar Technologies Website

Modern React web application for YugAntar Technologies, including company pages, course pages, inquiry forms, and admin dashboards.

## Tech Stack

- React (Create React App)
- Tailwind CSS
- Framer Motion
- React Router

## Run Locally

1. Install dependencies:
   - `npm install`
2. Start development server:
   - `npm start`
3. Open:
   - `http://localhost:3000`

## Build for Production

- `npm run build`

## Key Features

- Marketing pages for services, courses, internship, and contact
- Course/service/internship inquiry forms
- Student registration and attendance API integration
- Admin pages for viewing inquiries and applications

## API Configuration

Base URL is configured in `src/BASEURL.js`:

- Production: `https://yugantar.onrender.com`
- Local (commented): `http://localhost:5000`

## Recent Fixes

- Corrected text casing in testimonials (`YugAntar` branding consistency).
- Improved network failure handling in:
  - `src/services/studentsAPI.js`
  - `src/services/attendanceAPI.js`
  - `src/pages/Contact.js`
- Replaced old duplicated/default README content with this project-specific documentation.

## SEO and Indexing Fixes (Latest)

The following 3 SEO issues were identified and fixed:

1. Google bot sometimes cannot read full route content and metadata.
2. Slow indexing of important pages.
3. Lower ranking potential due to incomplete crawl and metadata signals.

### What Was Fixed

- Added complete SEO defaults in `public/index.html`:
  - Optimized `<title>`, `<meta name="description">`, `<meta name="keywords">`
  - `<link rel="canonical">`, `<meta name="robots">`, `<meta name="author">`
  - Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Added structured data in `public/index.html`:
  - `LocalBusiness` schema with `makesOffer`
  - Course schemas for:
    - MERN Stack Development Course
    - UI/UX Design Course
    - Digital Marketing Course
  - Breadcrumb schema (`Home > Courses > MERN Stack Development Course`)
- Activated dynamic route-level metadata by mounting `MetaTags` in `src/App.js`.
- Expanded `public/sitemap.xml` to include all major course and content URLs for faster discovery.
- Kept `public/robots.txt` with sitemap reference:
  - `Sitemap: https://www.yugantartechnologies.com/sitemap.xml`

### Why This Improves SEO

- Better crawler readability for both homepage defaults and route-level metadata.
- Faster URL discovery through a richer sitemap.
- Stronger relevance signals via schema markup and social metadata.

### Production Recommendation

For best SEO performance on a React SPA, add pre-rendering or SSR in future (for example, static pre-rendered HTML per route). This further improves bot readability and indexing speed.


