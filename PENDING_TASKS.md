# SEANORA GLOBAL — PENDING TASKS & IMPROVEMENT REPORT
# Generated: March 2026
# ============================================================
# This document covers every aspect of the project:
# Features · Styling · SEO · Optimization · Missing Sections
# Bugs · Content · Accessibility · DevOps · Suggestions
# ============================================================


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🔴  CRITICAL — Must fix before going live
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### [CONTENT-01] Hero section has wrong brand copy
- File: src/pages/Home/components/Hero.jsx (~line 51)
- Issue: Paragraph reads "At Awake, we help small startups tackle the world's biggest
  challenges…" — "Awake" is a completely different company/template.
- Fix: Rewrite the hero heading, subheading and paragraph to reflect
  Seanora Global's identity as an IT services and consulting company.

### [CONTENT-02] Testimonials are all fake placeholder data
- File: src/pages/Home/components/Testimonials.jsx
- Issue: 8 testimonials use generic names, generic quotes, and random
  face images from the external CDN pravatar.cc.
- Fix: Replace with real client testimonials. If unavailable, use
  clearly labeled "sample" data or remove the section temporarily.
- Extra: Remove dependency on pravatar.cc — host images locally.

### [CONTENT-03] Client logos are all the same placeholder
- File: src/pages/Home/components/Clients.jsx
- Issue: Only one real logo (aws.png) exists. The marquee duplicates
  it 12 times. The section title implies multiple real clients.
- Fix: Add actual client/partner logos. Until real logos are available,
  either remove the section or clearly label it "Technology Partners".

### [FORM-01] Contact form does not submit to any backend
- File: src/pages/Contact/components/ContactSection.jsx
- Issue: The form uses setTimeout to fake a success state. No email is
  ever sent. No data is stored anywhere.
- Fix: Integrate a real form backend. Options:
    a) Formspree (easiest — just change the action URL)
    b) EmailJS (client-side email sending, no server needed)
    c) Custom API endpoint / serverless function (Vercel, Netlify)

### [FORM-02] Job application form does not submit to any backend
- File: src/pages/Careers/JobDetail.jsx
- Issue: The apply form calls console.log() on submit. Resume upload
  is wired to state only — no file is actually sent anywhere.
- Fix: Integrate a job application handler. Options:
    a) Email via EmailJS with file attachment
    b) Formspree with file upload support
    c) A dedicated ATS (Applicant Tracking System) integration

### [SEO-01] VITE_SITE_URL environment variable is not configured
- File: src/components/seo/SEO.jsx, .env (missing)
- Issue: Without this variable, canonical URLs and Open Graph URLs
  fall back to window.location.origin at runtime, which returns
  "http://localhost:5173" during react-snap pre-rendering.
  Social sharing and SEO canonicals will all be wrong.
- Fix: Create a .env file at the project root:
    VITE_SITE_URL=https://seanoraglobal.com
  Also create .env.example so future devs know what's needed.

### [SEO-02] Open Graph / social share image is the Vite logo
- File: index.html (og:image, twitter:image)
- Issue: /vite.svg is set as the social media preview image for ALL
  pages. Anyone sharing a link will see the Vite logo — not Seanora.
- Fix: Create a branded OG image (1200×630px recommended).
  Place it at /public/og-image.jpg and update index.html + SEO.jsx.

### [SEO-03] Favicon is the default Vite logo
- File: index.html (<link rel="icon" href="/vite.svg">)
- Issue: The browser tab shows the Vite flame icon, not Seanora's logo.
- Fix: Export the Seanora Global SVG logo as a favicon.
  Ideally provide: favicon.ico, favicon-32x32.png, apple-touch-icon.png
  and link all three in index.html.


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🟠  HIGH — Fix soon for professional quality
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### [BUG-01] Dark mode button has no functionality
- File: src/components/layout/Header.jsx (desktop + mobile menus)
- Issue: A Moon icon button exists with aria-label="Toggle color mode"
  but has no onClick handler and no dark mode is implemented anywhere
  in CSS or state. It's a broken interactive element.
- Fix (choose one):
    a) Implement dark mode using Tailwind's `dark:` variant +
       a `prefers-color-scheme` media query or localStorage toggle.
    b) Remove the button entirely until dark mode is planned.

### [BUG-02] Font preload in index.html references wrong filename
- File: index.html (line ~18)
- Issue: <link rel="preload" href="/fonts/Manrope-Variable.woff2">
  The actual file on disk is: Manrope-VariableFont_wght.woff2
  This silently 404s, wastes a preload request, and Manrope isn't
  even used in CSS — so the preload is completely pointless.
- Fix: Remove the preload tag entirely. If Manrope is intended to
  be used, import it in index.css and fix the filename reference.

### [BUG-03] react-snap Puppeteer path is hardcoded to macOS
- File: package.json ("postbuild" script)
- Issue: PUPPETEER_EXECUTABLE_PATH is hardcoded to
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  This breaks on Linux CI/CD pipelines and any non-Mac machine.
- Fix: Use an environment variable instead:
  "PUPPETEER_EXECUTABLE_PATH=${CHROME_PATH:-$(which google-chrome)}"
  Or install puppeteer as a dev dependency and let it manage Chrome.

### [BUG-04] react-snap does not pre-render job detail pages
- File: package.json ("reactSnap" → "include")
- Issue: Only top-level routes are listed. /careers/1 through /careers/5
  are dynamic and will never be pre-rendered as static HTML.
- Fix: Either add all job IDs explicitly to the "include" array,
  or switch to a proper SSG/SSR approach (Astro, Next.js, or Vite SSR).

### [NAMING-01] Component named "WhyChooseAlenotech" (wrong brand)
- File: src/pages/Services/components/WhyChooseAlenotech.jsx
- Issue: The file and component are named after a completely different
  company. The content inside correctly references Seanora Global.
- Fix: Rename file to WhyChooseSeanora.jsx and update the component
  name + the import in Services.jsx.

### [SOCIAL-01] Footer social media links point to platform homepages
- File: src/components/layout/Footer.jsx
- Issue: Facebook, X (Twitter), Instagram, LinkedIn icons all link to
  the platform root (e.g. linkedin.com), not Seanora's actual profiles.
- Fix: Add real social media profile URLs or remove the icons if
  Seanora Global doesn't have active accounts on those platforms.

### [CONTENT-04] Footer is missing a link to the Contact page
- File: src/components/layout/Footer.jsx ("Quick Links" column)
- Issue: Footer lists Home, About Us, Our Services, Careers — but
  Contact is missing from the navigation column.
- Fix: Add <Link to="/contact">Contact Us</Link> to the Quick Links list.

### [CONTENT-05] Footer service links all point to the same /services page
- File: src/components/layout/Footer.jsx (Services column)
- Issue: All 5 service items link to /services with no differentiation.
  If individual service pages are added later, this will need updating.
- Fix: Either add anchor hash links (e.g. /services#cloud-computing)
  or note this for when individual service detail pages are built.

### [CONTENT-06] Hero avatar images come from a third-party CDN
- File: src/pages/Home/components/Hero.jsx
- Issue: The 4 trust-indicator avatars use pravatar.cc — a random
  photo placeholder service. These are not real clients or employees.
  The CDN can go down, is a privacy concern, and looks unprofessional.
- Fix: Replace with locally hosted photos of real team members,
  real client contacts (with permission), or an icon/illustration.

### [PERF-01] No image optimization pipeline
- Issue: All images (PNG, JPEG) are served at full original resolution
  and file size. No WebP conversion, no responsive srcset, no Vite
  image plugin is configured.
- Fix:
    a) Install vite-plugin-imagemin or @vite-image-optimizer to compress
       images at build time.
    b) Convert PNG/JPEG to WebP format.
    c) Add width/height attributes to all <img> tags to prevent CLS.
    d) Use srcset for responsive images in Hero and Testimonials.


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🟡  MEDIUM — Polish and professional completeness
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### [MISSING-01] No Privacy Policy page
- Every professional website needs a Privacy Policy, especially with
  a contact form that collects email addresses and names.
- Fix: Create /privacy route, PrivacyPolicy.jsx page, and link it
  in the footer. If using a form backend service, their data handling
  policies must also be disclosed.

### [MISSING-02] No Terms of Service page
- Related to MISSING-01. A terms page is expected by business clients.
- Fix: Create /terms route, TermsOfService.jsx, and link from footer.

### [MISSING-03] No Cookie Consent / GDPR Banner
- If the site is accessible from the EU or UK, a cookie consent
  mechanism is legally required (especially with Google Maps iframe
  which loads third-party cookies).
- Fix: Implement a minimal cookie consent banner using a library like
  react-cookie-consent or build a simple custom one.

### [MISSING-04] No individual Service detail pages
- Services are listed as cards on /services but clicking "Learn More"
  links to /services (the same page). Each service should have its own
  dedicated page with full descriptions, process, case studies, pricing.
- Routes to add: /services/web-mobile, /services/cloud, etc.

### [MISSING-05] No Blog / Insights section
- For an IT company, a blog or insights section significantly improves
  SEO (long-tail keyword ranking) and establishes thought leadership.
- Routes to add: /blog, /blog/:slug
- This is optional but strongly recommended for organic traffic.

### [MISSING-06] No Case Studies / Portfolio section
- Prospective clients almost always want to see past work and results.
  There is no portfolio, case studies, or project showcase section.
- Fix: Add a /work or /case-studies page with project summaries.

### [MISSING-07] No page transitions / loading between routes
- Navigation between pages is instant (no page transition animation).
  The PageLoader only shows on the very first load of a lazy chunk.
- Fix: Add subtle Framer Motion page transition wrappers in Layout.jsx
  or in each page's root element using AnimatePresence.

### [MISSING-08] No "Back to top" behaviour on route change
- When navigating between pages (e.g. Home → About), the scroll
  position is preserved rather than scrolling to the top of the page.
- Fix: Add a ScrollRestoration component from react-router-dom or
  a useEffect that calls window.scrollTo(0, 0) on location change.

### [MISSING-09] No sitemap.xml
- Search engines need a sitemap to efficiently discover all pages.
- Fix: Add vite-plugin-sitemap or generate a static sitemap.xml
  and reference it in a robots.txt file.
  Also create /public/robots.txt (currently missing).

### [MISSING-10] No robots.txt
- File: /public/robots.txt (does not exist)
- Without this, crawlers operate with no guidance. Job detail pages
  have noindex meta tags, but robots.txt is still expected.
- Fix: Create /public/robots.txt with at minimum:
    User-agent: *
    Disallow:
    Sitemap: https://seanoraglobal.com/sitemap.xml

### [MISSING-11] Careers filters have categories with no jobs
- File: src/pages/Careers/components/CareersBoard.jsx
- Issue: CATEGORIES includes "Operations", "Finance", "Management" but
  no jobs in JOBS_DATA belong to these departments. Clicking them
  always shows the empty state — which looks like a bug, not intent.
- Fix: Either add placeholder jobs for those departments, or only
  show category pills that have at least one matching job.

### [SEO-04] Duplicate meta tags in index.html conflict with Helmet
- File: index.html (og:title, og:description, twitter:title, etc.)
- Issue: Static OG/Twitter meta tags exist in index.html AND are also
  managed dynamically by react-helmet-async. Both render in the HTML,
  which can confuse social media scrapers.
- Fix: Remove the static duplicate meta tags from index.html and rely
  entirely on react-helmet-async for all dynamic meta injection.

### [SEO-05] Careers page title has double separator
- File: src/pages/Careers/Careers.jsx
- Issue: title prop is "Careers | Be Part of Our Mission"
  SEO.jsx appends "| Seanora Global", resulting in:
  "Careers | Be Part of Our Mission | Seanora Global"
  The double pipe looks unprofessional.
- Fix: Change to "Careers — Be Part of Our Mission" or just "Careers"
  and let the description carry the longer text.

### [SEO-06] Missing structured data types
- Issue: No LocalBusiness schema (important for a company with a 
  physical address). No FAQPage schema for the FAQ section.
  No BreadcrumbList schema matching the visual breadcrumbs.
- Fix: Add these JSON-LD schemas to the relevant pages:
    - Home.jsx: Add LocalBusiness schema with the Sheridan WY address
    - About.jsx: Add FAQPage schema for the accordion items
    - All pages: Add BreadcrumbList schema matching visual breadcrumbs

### [A11Y-01] Form fields have no error messages for invalid input
- File: ContactSection.jsx, JobDetail.jsx
- Issue: Fields use the native browser required attribute, which shows
  platform-specific validation bubbles. There is no custom accessible
  error messaging for screen readers or keyboard-only users.
- Fix: Add aria-invalid, aria-describedby, and visible error <span>
  elements beneath each invalid field on form submission attempt.

### [A11Y-02] Accordion items lack proper ARIA attributes
- File: src/components/ui/Accordion.jsx
- Issue: The FAQ accordion items need aria-expanded on the trigger
  button and aria-hidden on the collapsed panel to be fully accessible.
- Fix: Verify aria-expanded toggles correctly and content panel has
  role="region" with a matching aria-labelledby.

### [A11Y-03] Animated scroll sections may cause motion sickness
- Issue: The horizontal scroll animation in WhyChooseUs (Home) is a
  strong vestibular motion trigger. No prefers-reduced-motion check.
- Fix: Wrap the scroll animation in a CSS media query:
  @media (prefers-reduced-motion: reduce) { ... }
  Or in JS: window.matchMedia('(prefers-reduced-motion: reduce)')


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🟢  LOW / NICE TO HAVE — Refinements and future planning
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### [CLEANUP-01] Container.jsx is dead code
- File: src/components/layout/Container.jsx
- Issue: The component is defined but never imported or used anywhere.
- Fix: Delete the file or start using it to standardize page widths.

### [CLEANUP-02] Unused hero-section images
- Files: src/assets/hero-section/download.png (and 2 variants)
- Issue: Three images exist in the assets folder but are never imported.
- Fix: Either use them in the Hero or delete them.

### [CLEANUP-03] src/Untitled file
- File: src/Untitled
- Issue: An untracked file of unknown content exists at the src root.
- Fix: Review and delete it.

### [CLEANUP-04] src/styles/ directory is empty
- File: src/styles/ (untracked)
- Issue: An empty directory is tracked. Likely a leftover.
- Fix: Delete the directory.

### [CLEANUP-05] CSS custom property system is unused dead code
- File: src/index.css (the large :root { } block)
- Issue: ~40 CSS variables are defined (--primary, --accent,
  --navbar-bg, etc.) but NOT a single component uses them. All
  components hardcode raw hex values instead.
- Fix (choose one):
    a) Refactor components to use these variables for theming consistency.
    b) Delete the unused :root block to reduce CSS payload.

### [CLEANUP-06] Duplicate marquee animation definition
- Files: src/index.css AND tailwind.config.js
- Issue: The @keyframes marquee and .animate-marquee class are defined
  in both places. Tailwind v4 uses the config-defined animation, so
  the CSS block is redundant.
- Fix: Remove the @keyframes marquee block from index.css.

### [CLEANUP-07] Multiple unused logo files
- Files: src/assets/logos/ contains logo_2.jpeg, Seanora Global.jpeg,
  Seanora Global.png, logo_animation_1.mp4, logo_animation_2.mp4
- Only logo_1.png and Seanora Global.svg appear to be used.
- Fix: Audit which logo files are actually in use and delete the rest,
  or use them intentionally (e.g. the animated logo on page load).

### [PERF-02] No bundle size analysis
- Issue: There is no visibility into what is contributing to the
  JavaScript bundle size. Large dependencies may be slipping in.
- Fix: Add rollup-plugin-visualizer to vite.config.js:
  import { visualizer } from 'rollup-plugin-visualizer';
  Run `vite build` and open the generated stats.html to inspect.

### [PERF-03] Google Fonts loaded via @import (render-blocking)
- File: src/index.css (line 1: @import url("https://fonts.googleapis..."))
- Issue: CSS @import is render-blocking. The fonts are loaded
  synchronously, delaying First Contentful Paint.
- Fix: Move the Google Fonts URL to a <link rel="preconnect"> and
  <link rel="stylesheet"> in index.html's <head> with crossorigin.
  Or self-host the fonts (already done for Manrope — do the same
  for Inter Tight and Instrument Serif).

### [PERF-04] Google Maps iframe loads on Contact page always
- File: ContactSection.jsx
- Issue: The Google Maps iframe loads immediately when the Contact page
  is visited, even if the user never scrolls to the map.
- Fix: Implement lazy iframe loading — show a static map thumbnail
  with a "Click to load map" button, or use Intersection Observer
  to inject the iframe only when it enters the viewport.

### [PERF-05] No caching strategy / service worker
- Issue: No Cache-Control headers are defined, and no service worker
  or PWA manifest exists.
- Fix (optional): Add a vite-plugin-pwa for basic offline support
  and caching strategy. At minimum, configure the hosting platform
  (Vercel/Netlify) to serve appropriate Cache-Control headers for
  static assets.

### [UX-01] No loading skeleton for job list
- File: CareersBoard.jsx
- Issue: When the careers page first loads, there is a brief flash
  where no content shows before the job cards animate in.
- Fix: Add skeleton placeholder cards that match the real card layout,
  shown while the component is mounting/lazy-loading.

### [UX-02] No "Share" or "Save job" functionality on job detail pages
- File: JobDetail.jsx
- Issue: Users can't easily share a job listing or bookmark it.
- Fix: Add a native Web Share API button or a simple "Copy link"
  button to the job detail page header.

### [UX-03] Contact form has no character count on the message field
- File: ContactSection.jsx
- Issue: The message textarea has no maximum length or character counter,
  which can result in very long or very short submissions.
- Fix: Add maxLength={1000} and a character count display below the
  textarea (e.g. "342 / 1000").

### [UX-04] No "scroll progress" indicator on long pages
- Issue: On very long pages (Home, About with horizontal scroll section),
  users have no visual progress indicator.
- Fix (optional): Add a thin progress bar at the top of the page
  using useScroll from Framer Motion.

### [UX-05] Mobile menu has no sub-navigation for Services
- File: Header.jsx
- Issue: If individual service pages are added later, the mobile menu
  will need a collapsible sub-menu for the Services section.
- Fix: Plan for a nested accordion-style mobile nav item for Services.

### [UX-06] No 404 page for invalid career IDs
- File: JobDetail.jsx
- Issue: If a user visits /careers/999 (an ID that doesn't exist),
  the page renders with no content — it doesn't redirect to 404.
- Fix: Add a guard in JobDetail.jsx:
  if (!job) return <Navigate to="/404" replace />;

### [DX-01] No .env.example file
- Issue: New developers have no idea what environment variables are
  needed to run the project. VITE_SITE_URL is not documented.
- Fix: Create .env.example with placeholder values and comments.

### [DX-02] No README.md with setup instructions
- Issue: There is no README in the project. A new developer joining
  would not know how to set up, build, or deploy the project.
- Fix: Create README.md covering:
  - Project description
  - Tech stack
  - Installation (npm install)
  - Development (npm run dev)
  - Build + Pre-render (npm run build)
  - Environment variables (.env setup)
  - Deployment instructions

### [DX-03] ESLint config may need stricter rules
- Issue: The current ESLint setup catches basic issues but prop-types
  warnings (SonarQube-style) are widespread and ignored.
- Fix: Either enforce prop-types consistently across all components,
  or migrate to TypeScript (recommended for a project of this scale)
  and replace prop-types checking with TS interfaces.

### [FUTURE-01] Consider migrating to TypeScript
- Issue: The project is JavaScript-only. As it grows, type errors will
  be harder to catch without TS. The jobs.js data structure especially
  benefits from typed interfaces.
- Recommendation: Gradually migrate to .tsx/.ts. Start with the data
  files (jobs.ts) and utility functions, then components.

### [FUTURE-02] Consider a CMS for content management
- Issue: All content (jobs, services, testimonials, FAQ) is hardcoded
  in .js files. Any content update requires a developer and a
  re-deployment.
- Recommendation: Integrate a headless CMS (Sanity, Contentful, or
  even a simple Airtable base) for managing jobs, testimonials,
  and FAQ items without code changes.

### [FUTURE-03] Analytics is not configured
- Issue: There is no web analytics setup. The company cannot see
  traffic, user journeys, bounce rates, or conversion events.
- Fix: Integrate one of the following:
    a) Google Analytics 4 (via gtag.js or react-ga4)
    b) Plausible (privacy-friendly, no cookie consent needed)
    c) Posthog (open-source, feature flags + analytics)

### [FUTURE-04] No error tracking / crash monitoring
- Issue: If a JavaScript error occurs in production, it is invisible.
  No error is logged to any service.
- Fix: Integrate Sentry (react SDK) for automatic error reporting,
  breadcrumb tracking, and session replay.

### [FUTURE-05] Deployment pipeline not configured
- Issue: There is no CI/CD pipeline (GitHub Actions, Vercel, Netlify)
  for automated builds and deployments.
- Fix: Set up a basic pipeline that:
    1. Installs dependencies (npm ci)
    2. Runs linting (npm run lint)
    3. Builds the project (npm run build)
    4. Deploys to hosting (Vercel/Netlify one-click deploy)


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 📋  QUICK REFERENCE CHECKLIST
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before launching, the following MUST be completed:

  [ ] CONTENT-01  Rewrite Hero copy (remove "At Awake" text)
  [ ] CONTENT-02  Replace fake testimonials with real ones
  [ ] CONTENT-03  Add real client/partner logos to Clients section
  [ ] FORM-01     Connect Contact form to real backend (Formspree/EmailJS)
  [ ] FORM-02     Connect Job Application form to real backend
  [ ] SEO-01      Create .env with VITE_SITE_URL=https://seanoraglobal.com
  [ ] SEO-02      Create branded OG image (1200×630px) and update meta tags
  [ ] SEO-03      Replace /vite.svg favicon with Seanora Global favicon
  [ ] BUG-01      Fix or remove the non-functional dark mode button
  [ ] BUG-02      Remove broken Manrope font preload from index.html
  [ ] NAMING-01   Rename WhyChooseAlenotech → WhyChooseSeanora
  [ ] SOCIAL-01   Update footer social media links to real profiles
  [ ] CONTENT-04  Add Contact page link to footer Quick Links
  [ ] MISSING-01  Add Privacy Policy page (/privacy)
  [ ] MISSING-09  Add sitemap.xml
  [ ] MISSING-10  Add robots.txt
  [ ] SEO-04      Remove duplicate static OG meta tags from index.html
  [ ] UX-06       Handle invalid career IDs → redirect to 404
  [ ] DX-01       Create .env.example file
  [ ] DX-02       Create README.md with setup instructions

Recommended (before or shortly after launch):

  [ ] MISSING-02  Add Terms of Service page (/terms)
  [ ] MISSING-03  Add Cookie Consent / GDPR banner
  [ ] MISSING-04  Build individual Service detail pages
  [ ] MISSING-08  Add scroll-to-top on route change
  [ ] PERF-01     Image optimization (WebP, compression, srcset)
  [ ] PERF-03     Move Google Fonts @import to <link> in index.html
  [ ] FUTURE-03   Set up web analytics (Plausible or GA4)
  [ ] FUTURE-04   Set up error tracking (Sentry)
  [ ] FUTURE-05   Set up CI/CD pipeline (Vercel / GitHub Actions)

Future planning:

  [ ] MISSING-05  Add Blog / Insights section for SEO
  [ ] MISSING-06  Add Case Studies / Portfolio section
  [ ] FUTURE-01   Migrate to TypeScript
  [ ] FUTURE-02   Integrate a CMS for content management
  [ ] CONTENT-06  Replace hero avatar images with real photos


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 📊  TASK COUNT SUMMARY
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  🔴 Critical (must fix before launch):     8 tasks
  🟠 High (professional quality):          13 tasks
  🟡 Medium (polish + compliance):         17 tasks
  🟢 Low / Future planning:               20 tasks
  ─────────────────────────────────────────────────
  Total identified tasks:                 58 tasks


# ============================================================
# END OF REPORT
# ============================================================
