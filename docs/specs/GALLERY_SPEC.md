# Gallery Page Spec

## 1. Goal

Build the Gallery page for the ZLAT industrial company website.

The Gallery page should show real company machines, metal detectors, industrial equipment, installations, and product-related photos. The page must help visitors quickly understand that ZLAT works with real industrial systems and has practical experience in the production of industrial metal detectors.

The page should feel:

* professional
* industrial
* trustworthy
* clean
* visual-first
* responsive
* suitable for a B2B industrial company

The Gallery page must use the same visual direction, colors, layout quality, and component style as the homepage.

## Workflow

1. Use the official ZLAT EOOD website as the source for gallery photos and company information:

```text
http://www.zlat.com/
```

2. Use the already downloaded images from:

```text
assets/photos/Galeria
```

3. Do not use random stock photos.

4. Do not invent unrelated gallery content.

5. Use the original ZLAT images as the main visual material.

6. Use the ZLAT website as a template for understanding what the images represent.

7. If image names are unclear, create neutral captions based on visible content, such as:

```text
Industrial metal detector system
```

```text
Metal detector with conveyor belt
```

```text
Control unit and detection equipment
```

8. Keep the text short. The Gallery page should focus mainly on images.

9. When the images are hovered the cursor should indicate that the image can be enlarged. Do not show an extra plus icon or circular overlay on hover. When the user clicks an image, it should enlarge and have a closing button.

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
* image gallery packages
* heavy animation libraries

## 3. Design Direction

Use the same design system as the homepage.

The Gallery page should match the homepage visually and should not feel like a separate website.

The design should feel:

* industrial
* clean
* modern
* trustworthy
* practical
* image-focused
* easy to browse

Preferred visual direction:

* light blue-gray page background
* white navbar, cards, panels, and footer
* dark navy headings
* readable body text
* royal blue buttons and links
* amber accents for small highlights
* clean image cards
* soft shadows
* rounded corners
* clear spacing
* mobile-first layout

Use the color palette already defined for the homepage.

### Reference Color Palette

Use these exact colors as design tokens:

* Page background: `#F1F3F7`
* Header / footer / card surface: `#FFFFFF`
* Soft header surface: `#F6F7FA`
* Hero light gradient start: `#F8FBFF`
* Hero light gradient end: `#E9EEF5`
* Primary blue: `#3353C1`
* Primary blue dark: `#1440BC`
* Primary blue light: `#93A5DF`
* Heading navy: `#0E1629`
* Body text: `#334155`
* Muted text: `#64748B`
* Border gray: `#D1D5DC`
* Panel gray: `#EEF1F6`
* Accent amber: `#DBB24D`
* Accent amber dark: `#B98500`

### Color Application Rules

* Keep the navbar light.
* Use `#F1F3F7` as the main page background.
* Use white cards for image containers.
* Use `#D1D5DC` for borders and dividers.
* Use `#0E1629` for main headings.
* Use `#334155` for paragraph text.
* Use `#64748B` for captions and secondary metadata.
* Use `#3353C1` for primary buttons and important links.
* Use `#DBB24D` only as a small accent color.

## 4. Page Sections

The Gallery page should contain the following sections in this order:

1. Navbar
2. Gallery hero section
3. Gallery image grid
4. Optional featured project / equipment section
5. Contact call-to-action
6. Footer

## 5. Navbar

Reuse the existing `Navbar.astro` component if it already exists.

The navbar should include:

* company name or logo text: `ZLAT`
* navigation links:

  * Home
  * Services
  * Gallery
  * About
  * Contacts

The `Gallery` navigation link should appear as the active page.

The active state should use the same style as the homepage navigation, preferably with the amber accent color.

The navbar should remain responsive and should not overflow on mobile screens.

## 6. Gallery Hero Section

The hero section should introduce the gallery clearly.

It should include:

* small eyebrow label
* main heading
* short supporting text
* optional primary button to contact page
* optional secondary button to services page

Suggested eyebrow:

```text
Gallery
```

Suggested main heading:

```text
Real industrial metal detector systems
```

Suggested supporting text:

```text
Explore photos of ZLAT industrial metal detectors, conveyor systems, control units, and practical detection solutions used in production environments.
```

Suggested primary button:

```text
Contact ZLAT
```

Suggested secondary button:

```text
View Services
```

The hero should be simpler than the homepage hero but still strong and professional.

## 7. Gallery Intro Section

Do not include a separate gallery intro section between the hero and image grid.

The Gallery page should move directly from the hero section to the image grid so the page stays visual-first and focused on real ZLAT equipment photos.

## 8. Gallery Image Grid

The main content of the page should be an image grid.

Use images from:

```text
assets/photos/Galeria
```

The grid should display the ZLAT gallery photos in a clean, responsive layout.

### Grid Requirements

Desktop:

* 3 columns if enough space is available
* balanced spacing between cards
* image cards should have consistent height where possible

Tablet:

* 2 columns

Mobile:

* 1 column

### Image Card Requirements

Each image card should include:

* the image
* optional short caption
* optional category label
* rounded corners
* white card surface
* light border
* subtle shadow or hover effect

Example card content:

```text
Industrial metal detector
```

```text
Conveyor metal detection system
```

```text
Detection equipment installation
```

```text
Control unit and machine assembly
```

### Image Behavior

Images should:

* keep their aspect ratio or use controlled cropping with `object-cover`
* not stretch awkwardly
* load efficiently
* have descriptive `alt` text
* be optimized by Astro where possible

Do not use blurry, broken, or unrelated images.

If an image fails to load, the layout should not break.

## 9. Optional Featured Equipment Section

If there are enough strong images, add one featured section after the grid.

This section can highlight one larger image or a small group of important photos.

Use this section only if it improves the page.

Suggested heading:

```text
Built for industrial environments
```

Suggested text:

```text
ZLAT systems are designed for practical use in production lines where reliable metal detection and durable equipment are important.
```

The section may include:

* one large image
* two smaller support images
* short text panel
* trust points

Do not make this section too large.

## 10. Contact Call-to-Action

The Gallery page should end with a clear contact CTA.

The CTA should guide users toward contacting the company after viewing the equipment.

Suggested heading:

```text
Interested in an industrial metal detection solution?
```

Suggested message:

```text
Contact ZLAT to discuss metal detector systems, maintenance, diagnostics, or custom industrial requirements.
```

Suggested button:

```text
Contact ZLAT
```

The CTA should use the same style as the homepage contact CTA.

Use the primary blue color for the main CTA button.

## 11. Footer

Reuse the existing `Footer.astro` component if it already exists.

The footer should include:

* company name
* short description
* navigation links
* contact placeholder or real contact information from the ZLAT website
* copyright text

The footer should match the homepage footer.

## 12. Components

Prefer this component structure:

```text
src/layouts/MainLayout.astro

src/components/Navbar.astro
src/components/GalleryHero.astro
src/components/GalleryGrid.astro
src/components/GalleryCard.astro
src/components/GalleryFeatured.astro
src/components/ContactPreview.astro
src/components/Footer.astro

src/pages/gallery.astro
```

The Gallery page should compose components inside:

```text
src/pages/gallery.astro
```

Do not place the entire Gallery page inside one huge file unless the project is still in the earliest setup stage.

Reuse existing components where possible.

For example:

* reuse `Navbar.astro`
* reuse `Footer.astro`
* reuse `ContactPreview.astro` if the homepage already has one
* create only the gallery-specific components that are needed

## 13. Data Structure

If the project is simple, gallery image data may be stored directly inside the Gallery component.

Preferred simple structure:

```text
src/data/gallery.ts
```

or:

```text
src/data/gallery.js
```

Each gallery item should contain:

```text
image source
title
caption
alt text
category
```

Example data shape:

```js
{
  src: "/path-to-image",
  title: "Industrial metal detector",
  caption: "Metal detection equipment for production environments.",
  alt: "Industrial metal detector system by ZLAT",
  category: "Metal detector"
}
```

Do not over-engineer the data layer.

Do not add a CMS.

Do not add content collections unless the project already uses them.

## 14. Image Source Rules

The agent must use the existing downloaded images from:

```text
assets/photos/Galeria
```

The agent should inspect the available files and use the real images.

If Astro requires a different image import approach, use the correct Astro method for local assets.

If the project already uses `public/images/`, copy or reference the images consistently based on the existing project structure.

Do not mix many different asset strategies without reason.

The final implementation should have a clear and understandable image path strategy.

## 15. Text Source Rules

Use the ZLAT EOOD website as the source for company context and gallery meaning.

The agent should gather information from:

```text
http://www.zlat.com/
```

The page text should be based on the real company context:

* ZLAT EOOD
* industrial metal detectors
* design
* construction
* manufacturing
* maintenance
* diagnostics
* industrial applications

Do not invent unrelated services.

Do not make the company sound like a generic software company.

Do not make unsupported claims.

Keep all text professional and suitable for an industrial B2B website.

## 16. Responsive Requirements

The Gallery page must work well on:

* mobile screens
* tablets
* desktop screens

Mobile requirements:

* navbar should not overflow
* hero text should be readable
* buttons should stack or fit cleanly
* gallery grid should become one column
* image cards should not stretch too wide
* spacing should remain comfortable

Tablet requirements:

* gallery grid should use two columns where appropriate
* sections should remain readable and balanced

Desktop requirements:

* gallery grid should use three columns where appropriate
* page content should not stretch too wide
* images should feel organized and professional

## 17. Accessibility Requirements

The Gallery page should use:

* semantic HTML
* proper heading order
* descriptive `alt` text for every image
* readable contrast
* accessible link text
* keyboard-friendly navigation
* real links for navigation instead of buttons

Do not use empty `alt` text unless the image is purely decorative.

Since the gallery images show real equipment, each image should have useful alt text.

Example alt text:

```text
Industrial metal detector system manufactured by ZLAT
```

```text
Conveyor belt metal detector installation
```

```text
Control unit for industrial metal detection equipment
```

## 18. Performance Requirements

The Gallery page should stay lightweight.

Avoid:

* unnecessary JavaScript
* gallery slider libraries
* external modal or lightbox libraries
* heavy animations
* unused UI frameworks
* loading all images at unnecessarily huge sizes

Use Astro static rendering whenever possible.

Images should be optimized where possible.

Use lazy loading for images below the fold.

The page should pass `npm run build`.

## 19. JavaScript Requirements

Use minimal JavaScript only if needed.

Use a small vanilla JavaScript enhancement for opening clicked gallery images in a native modal/dialog.

Do not add:

* complex filtering
* external modal lightbox libraries
* carousel
* masonry library
* client-side routing

This spec is for a clean Gallery page with a lightweight image enlargement interaction.

## 20. Out of Scope

Do not implement:

* image upload system
* CMS
* admin dashboard
* backend logic
* filtering system
* search system
* animations requiring external libraries
* contact form logic
* services page
* about page
* contacts page

This spec is only for the Gallery page.

## 21. Acceptance Criteria

The Gallery page is complete when:

* `src/pages/gallery.astro` renders a full Gallery page.
* The page uses the same visual style as the homepage.
* The page includes navbar, gallery hero, image grid, contact CTA, and footer.
* The Gallery nav link has an active state.
* Real ZLAT images from `assets/photos/Galeria` are used.
* The ZLAT website is used as the source for company context and image meaning.
* No random stock images are used.
* No unrelated company text is invented.
* The image grid is responsive on mobile, tablet, and desktop.
* Every image has useful `alt` text.
* Styling is done with Tailwind CSS.
* Components are written as Astro components.
* No React, Next.js, shadcn/ui, or unnecessary JavaScript is added.
* The page matches the industrial blue/gray/gold design direction.
* `npm run build` succeeds.
