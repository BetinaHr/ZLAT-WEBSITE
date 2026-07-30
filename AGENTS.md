# AGENTS.md

## Project Overview

This project is a fast, responsive industrial company website for **ZLAT**.

The website is built with:

* Astro
* Tailwind CSS
* HTML-like `.astro` components
* Minimal JavaScript only when needed

The design direction is based on the provided v0/Vercel reference, but the implementation must be written as a clean Astro project.

## Important Rules

When working on this project:

* Do not use React.
* Do not use Next.js.
* Do not use shadcn/ui.
* Do not add unnecessary client-side JavaScript.
* Use Astro components for layout and page sections.
* Use Tailwind CSS for styling.
* Keep the website fast, responsive, and SEO-friendly.
* Prefer semantic HTML elements.
* Work in small steps instead of generating the whole website at once.
* The information on the website should be in Bulgarian.
* Every html element should have the corresponding meta descriptions, tags or other to make it appear in the search engines more.

## Development

When starting the development server, use background mode:

```bash
astro dev --background
```

Manage the background server with:

```bash
astro dev status
astro dev logs
astro dev stop
```

Use these commands to check the project:

```bash
npm run build
npm run preview
```

Run a build before considering a task complete.

## Project Structure

Use this structure as the preferred organization:

```text
src/
  layouts/
    MainLayout.astro

  components/
    Navbar.astro
    Hero.astro
    ServicesPreview.astro
    GalleryPreview.astro
    AboutPreview.astro
    ContactPreview.astro
    Footer.astro

  pages/
    index.astro
    services.astro
    gallery.astro
    about.astro
    contacts.astro

  styles/
    global.css

public/
  images/
    hero/
    gallery/
    services/
    logos/

docs/
  PROJECT_BRIEF.md
  DESIGN_REFERENCE.md
  HOMEPAGE_SPEC.md
  SERVICES_SPEC.md
  GALLERY_SPEC.md
  ABOUT_SPEC.md
  CONTACT_SPEC.md
```

## Workflow for Codex

Before implementing a feature, read the relevant documentation and project spec.

For every task:

1. Read the related file in `docs/`.
2. Inspect the current Astro components.
3. Make the smallest useful change.
4. Keep the implementation simple.
5. Test with the dev server.
6. Run a production build.
7. Do not modify unrelated files.

Do not implement multiple pages or large redesigns in one step unless explicitly asked.

## Design Reference

The v0/Vercel design should be used only as a visual and structural reference.

Do not copy React, Next.js, or shadcn/ui code from the reference.

Convert the design into:

* Astro pages
* Astro components
* Tailwind CSS classes
* Minimal JavaScript only where interaction is required

Focus on matching the visual direction:

* industrial B2B style
* blue, gray, and gold color palette
* clean navigation
* strong hero section
* responsive layout
* clear service sections
* professional gallery
* simple contact area

## Styling Guidelines

Use Tailwind CSS for most styling.

Prefer reusable section patterns:

* consistent spacing
* responsive containers
* clear headings
* readable text sizes
* accessible contrast
* mobile-first layouts

Avoid:

* large custom CSS files
* unnecessary animations
* overly complex class combinations
* duplicated layout code

Use `src/styles/global.css` only for global styles, CSS variables, base styles, and small reusable custom rules.

## Astro Guidelines

Use `.astro` components for static UI sections.

Use layouts for shared page structure.

Use pages only for route-level composition.

Prefer this pattern:

```astro
---
import MainLayout from "../layouts/MainLayout.astro";
import Hero from "../components/Hero.astro";
---

<MainLayout title="ZLAT Industrial">
  <Hero />
</MainLayout>
```

Do not add framework components unless the task explicitly requires them.

## JavaScript Guidelines

Use JavaScript only when needed for real interaction, such as:

* mobile navigation toggle
* gallery filtering
* contact form behavior
* small UI interactions

Do not add JavaScript for purely static sections.

Do not turn static content into client-side rendered UI.

## Documentation

Full Astro documentation:

https://docs.astro.build

Consult these guides before working on related tasks:

* Adding pages, dynamic routes, or middleware: https://docs.astro.build/en/guides/routing/
* Working with Astro components: https://docs.astro.build/en/basics/astro-components/
* Adding styles or using Tailwind: https://docs.astro.build/en/guides/styling/
* Adding or managing content: https://docs.astro.build/en/guides/content-collections/
* Supporting multiple languages: https://docs.astro.build/en/guides/internationalization/
* Using React, Vue, Svelte, or other framework components: https://docs.astro.build/en/guides/framework-components/

Only use framework components if the project requirements change.

## Completion Checklist

A task is complete only when:

* The requested feature is implemented.
* The layout works on mobile and desktop.
* The code is clean and readable.
* No unnecessary framework or library was added.
* No unrelated files were changed.
* `npm run build` succeeds.
* The result matches the project specs and design direction.
