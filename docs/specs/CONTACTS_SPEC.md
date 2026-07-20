# Contacts Page Spec

## 1. Goal

Build a simple Contacts page for the ZLAT industrial company website.

The page should explain how to contact the company clearly without anything unnecessary.

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
2. Contact hero section
3. Contact call-to-action
4. Footer

## 5. Content Requirements

Use real information from the ZLAT EOOD website.

The page should include company phone number, location and email.

The displayed company address must be clickable and open the exact location in an
online map in a new browser tab. The link must use the full postal address, have
descriptive accessible text, and include the appropriate security attributes for
an external link.

Do not add fake claims about:

* years of experience
* number of clients
* certifications
* awards
* international projects

Only include those if they are clearly found on the ZLAT website.

## 6. Design
Use CONTACT.png as a reference for the layout but in the website native color palette.

## 7. Components

Prefer this structure:

```text
src/layouts/MainLayout.astro

src/components/Navbar.astro
src/components/ContactHero.astro
src/components/Footer.astro

src/pages/contact.astro
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
