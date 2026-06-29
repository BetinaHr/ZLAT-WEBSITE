# Homepage Spec

## 1. Goal

Build the homepage for the ZLAT industrial company website.

The homepage should introduce the company, communicate trust, show the main services, preview the gallery, and guide visitors toward contacting the business.

The page must be fast, responsive, professional, and suitable for an industrial B2B company.

## Workflow
1. Download all images from this website http://www.zlat.com/ and place them in the assets/photos folder in the project
2. Gather all the information from the link and use it as template for the text.

## 2. Tech Stack

Use the existing project stack:

* Astro
* Tailwind CSS
* `.astro` components
* Minimal JavaScript only where needed

Do not use:

* React
* Next.js
* shadcn/ui
* client-side routing
* unnecessary external UI libraries

## 3. Design Direction

Use the provided v0/Vercel design as a visual reference only.

The design should feel:

* industrial
* professional
* trustworthy
* clean
* modern
* responsive

Preferred visual direction:

* light blue-gray page backgrounds
* white navigation, cards, content panels, and footer
* saturated royal blue brand and CTA elements
* very dark navy headings and body text
* small gold/amber accents for active states, eyebrows, highlights, and secondary emphasis
* strong hero section
* clear navigation
* large readable headings
* structured sections
* professional spacing
* mobile-first layout

Do not copy React or Next.js code from the reference.

Use the color palette sampled from the provided reference screenshots in `src/assets/references/` and apply the corresponding colors to the same element types.

### Reference Color Palette

Use these exact colors as the homepage design tokens:

* Page background: `#F1F3F7`
  * Used behind section content and as the main light industrial page canvas.
* Header / footer / card surface: `#FFFFFF`
  * Used for the navbar background, content cards, product cards, footer background, and clean panel surfaces.
* Soft header surface: `#F6F7FA`
  * Used for the top navigation area when a slightly off-white surface is needed.
* Hero light gradient start: `#F8FBFF`
  * Used in the hero background gradient.
* Hero light gradient end: `#E9EEF5`
  * Used as the subtle cool end color in the hero background gradient.
* Primary blue: `#3353C1`
  * Used for primary buttons, the CTA band, logo mark background, icon accents, and emphasized hero text.
* Primary blue dark: `#1440BC`
  * Used for button borders, stronger blue shadows, and hover/active blue states.
* Primary blue light: `#93A5DF`
  * Used only for subtle blue highlights, soft shadows, or low-emphasis blue UI details.
* Heading navy: `#0E1629`
  * Used for main headings, logo text, strong labels, and high-emphasis text.
* Body text: `#334155`
  * Used for paragraph copy and normal descriptive text.
* Muted text: `#64748B`
  * Used for secondary metadata, small descriptions, and footer supporting text.
* Border gray: `#D1D5DC`
  * Used for card borders, nav separators, input-like panels, and light dividers.
* Panel gray: `#EEF1F6`
  * Used for muted cards, industry chips, and soft UI blocks.
* Accent amber: `#DBB24D`
  * Used for the active nav underline, section eyebrow text, small icon accents, and gold highlights.
* Accent amber dark: `#B98500`
  * Used for stronger amber text or hover states when more contrast is needed.

### Color Application Rules

* Keep the navbar light, not dark: use `#F6F7FA` or `#FFFFFF` with dark navy text.
* Use `#3353C1` for the main call-to-action buttons and the large contact CTA band.
* Use `#DBB24D` sparingly as a highlight color, not as a large background except for small buttons or icons.
* Use white cards on the `#F1F3F7` page background with `#D1D5DC` borders.
* Use `#0E1629` for all major headings and `#334155` for readable body text.
* Avoid the previous dark navy site-wide header treatment; the reference uses a light navbar with blue and amber accents.

## 4. Page Sections

The homepage should contain the following sections in this order:

1. Navbar
2. Hero section
3. Services preview
4. Gallery preview
5. About preview
6. Contact call-to-action
7. Footer

## 5. Navbar

The navbar should include:

* company name or logo text: `ZLAT`
* navigation links:

  * Home
  * Services
  * Gallery
  * About
  * Contacts
* responsive mobile menu behavior if needed
* sticky or fixed positioning if it fits the design
* clear contrast against the background

The navbar should help the user quickly understand that this is a professional industrial company website.

## 6. Hero Section

The hero section is the most important part of the homepage.

It should include:

* main headline
* short supporting text
* primary call-to-action button
* secondary call-to-action button
* industrial visual feeling through background, layout, image, gradient, or decoration
* white background with slight gradient

Suggested content:

Main headline:

```text
ЗЛАТ ЕООД - Металодетектори
```

Supporting text:

```text
Проектиране, конструиране и производство на промишлени металдетектори
```

Primary button:

```text
View Services
```

Secondary button:

```text
Contact Us
```

The hero should look strong on desktop and remain clean on mobile.

## 7. Services Preview

The services preview should show the main service areas of the company.

Include 3 service cards:

1. Industrial Metal Detectors
2. Maintenance & Diagnostics
3. Custom Industrial Solutions

Each card should include:

* short title
* short description
* optional icon or visual marker
* link or button to the Services page

The section should not contain too much text. It should quickly show what the company offers.

## 8. Gallery Preview

The gallery preview should show that the company works with real machines, equipment, or industrial systems.

Include:

* section heading
* short description
* 3 to 6 image placeholders or image cards
* button/link to the Gallery page

Images should be loaded from the `public/images/` folder.

Use placeholder blocks only if real images are not available yet.

## 9. About Preview

The about preview should briefly explain who the company is.

Include:

* short heading
* short paragraph about experience, reliability, and industrial focus
* 2 or 3 trust points

Example trust points:

* Industrial experience
* Practical technical support
* Reliable service and maintenance

Add a button/link to the About page.

## 10. Contact Call-to-Action

The contact CTA should guide visitors to contact the company.

Include:

* short heading
* short message
* button/link to the Contacts page

Suggested heading:

```text
Need a reliable industrial detection solution?
```

Suggested button:

```text
Contact ZLAT
```

## 11. Footer

The footer should include:

* company name
* short description
* navigation links
* contact placeholder information
* copyright text

The footer should be simple and professional.

## 12. Components

Prefer this component structure:

```text
src/layouts/MainLayout.astro

src/components/Navbar.astro
src/components/Hero.astro
src/components/ServicesPreview.astro
src/components/GalleryPreview.astro
src/components/AboutPreview.astro
src/components/ContactPreview.astro
src/components/Footer.astro

src/pages/index.astro
```

The homepage should compose components inside `src/pages/index.astro`.

Do not place the entire homepage inside one huge file unless the project is still in the earliest setup stage.

## 13. Responsive Requirements

The homepage must work well on:

* mobile screens
* tablets
* desktop screens

Mobile requirements:

* navbar should not overflow
* hero text should be readable
* buttons should stack or fit cleanly
* cards should become one column
* spacing should remain comfortable

Desktop requirements:

* hero should use available width well
* sections should feel balanced
* cards may use grid layouts
* content should not stretch too wide

## 14. Accessibility Requirements

The homepage should use:

* semantic HTML
* readable text contrast
* descriptive link text
* accessible button text
* proper heading order
* `alt` text for images when real images are used

Do not use buttons for navigation when links are more appropriate.

## 15. Performance Requirements

The homepage should stay lightweight.

Avoid:

* unnecessary JavaScript
* large animation libraries
* heavy external dependencies
* unused UI frameworks

Use static Astro components whenever possible.

## 16. Out of Scope

Do not implement the full Services page.

Do not implement the full Gallery page.

Do not implement the full About page.

Do not implement the full Contacts page.

Do not add backend logic.

Do not add a working contact form yet.

Do not add CMS or content collections yet.

This spec is only for the homepage.

## 17. Acceptance Criteria

The homepage is complete when:

* `src/pages/index.astro` renders a full homepage.
* The homepage includes navbar, hero, services preview, gallery preview, about preview, contact CTA, and footer.
* The implementation uses Astro components.
* Styling is done with Tailwind CSS.
* The page is responsive on mobile and desktop.
* No React, Next.js, or shadcn/ui code is added.
* No unnecessary JavaScript is added.
* The visual direction matches the industrial blue/gray/gold style.
* `npm run build` succeeds.
