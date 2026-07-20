# About Page Spec

## 1. Goal

Build a simple About Us page for the ZLAT industrial company website.

The page should explain who ZLAT is, what the company does, and why visitors can trust it.

Use the official ZLAT website as the source for company information:

```text
http://www.zlat.com/
```

Do not invent unsupported company claims.

## 2. Tech Stack

Use:

* Astro
* Tailwind CSS
* `.astro` components

Do not use:

* React
* Next.js
* shadcn/ui
* unnecessary JavaScript

## 3. Design Direction

Use the same design style as the homepage, services page, and gallery page.

Use the same blue / gray / white / amber industrial color palette.

The page should feel:

* professional
* clean
* industrial
* trustworthy
* simple

## 4. Page Sections

The About page should include:

1. Navbar
2. About hero section
3. Company overview
4. What ZLAT does
5. Trust points
6. Contact call-to-action
7. Footer

## 5. Content Requirements

Use real information from the ZLAT EOOD website.

The page should mention that ZLAT works with:

* industrial metal detectors
* design
* construction
* production
* maintenance
* diagnostics
* industrial technical solutions

Do not add fake claims about:

* years of experience
* number of clients
* certifications
* awards
* international projects

Only include those if they are clearly found on the ZLAT website.

## 6. Design
Use photos ABOUTUS1.png and ABOUTUS2.png as reference for the design.
Make a timeline with the important dates of the company and call it History as a section.
Use all the photos from the original website.
Focus more on the history of the company.
Company overview should contain only pretty formatted text with corresponding images.
Add more to the history section. All important years.

Trust points:

* Technical industrial focus
* Practical production solutions
* Maintenance and diagnostics support

Do not:
add any unnecessary elements for now.

## 7. Components

Prefer this structure:

```text
src/layouts/MainLayout.astro

src/components/Navbar.astro
src/components/AboutHero.astro
src/components/AboutContent.astro
src/components/AboutTrustPoints.astro
src/components/ContactPreview.astro
src/components/Footer.astro

src/pages/about.astro
```

Reuse existing components where possible.

## 8. Responsive Requirements

The page must work on:

* mobile
* tablet
* desktop

Mobile layout should stack sections vertically.

Desktop layout may use two-column sections.

## 9. Accessibility Requirements

Use:

* semantic HTML
* correct heading order
* readable contrast
* descriptive link text
* useful image alt text if images are used

## 10. Out of Scope

Do not add:

* CMS
* backend logic
* animations requiring libraries
* contact form logic
* timeline section unless needed
* fake company history

## 11. SEO / Search Engine Indexing Requirements

The About page should be easy for search engines like Google to crawl, understand, and index.

Add basic SEO metadata:

* unique page title
* unique meta description
* canonical URL if the project already supports it
* no `noindex` tag
* clear heading structure

Suggested page title:

```text
About ZLAT EOOD | Industrial Metal Detector Systems
```

Suggested meta description:

```text
Learn about ZLAT EOOD, a company focused on the design, construction, production, maintenance, and diagnostics of industrial metal detector systems.
```

SEO requirements:

* Use only one `<h1>` on the page.
* Use clear section headings with relevant keywords.
* Include important terms naturally, such as:

  * ZLAT EOOD
  * industrial metal detectors
  * metal detector systems
  * design
  * construction
  * production
  * maintenance
  * diagnostics
* Use descriptive internal links, not vague text like “click here”.
* Make sure the About page is linked from the navbar.
* Add useful `alt` text for every real image.
* Keep the page statically rendered with Astro where possible.
* Do not hide important content behind JavaScript.
* Do not block the page from indexing.

12. Acceptance Criteria
* The page has a unique SEO title and meta description.
* The page uses one clear `<h1>`.
* The page is linked from the navbar.
* The page does not include a `noindex` directive.
* Important company and service keywords are included naturally in visible text.
