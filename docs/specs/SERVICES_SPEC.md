# Services Page Spec

## Goal

Build a simple ZLAT Services page that matches:

```text
src/assets/references/Services.png
```

The page should clearly show the main services and the industrial applications. Do not add extra long service sections.

## Page Sections

Use only:

1. Navbar
2. Blue centered hero
3. Six circular service bubbles
4. Applications section
5. Footer

## Hero

The hero should match the screenshot:

* blue background
* subtle dotted texture
* centered text
* small amber label `Услуги`
* large white heading
* short supporting line

Hero heading:

```text
Комплексни решения за индустриални металдетектори
```

Hero text:

```text
От производство и интеграция до диагностика, калибриране и сервиз - всичко на едно място.
```

## Service Bubbles

Show six large circular bubbles in a 3x2 grid on desktop:

* Производство — `Металдетектори ZBI и ZPI`
* Диагностика — `Проверка на системи и неизправности`
* Ремонт — `Собствено и чуждо производство`
* Калибриране — `Проверка с тестови карти`
* Поддръжка — `Сервиз и техническа помощ`
* Интеграция — `Внедряване в производствената линия`

Responsive layout:

* desktop: 3 columns
* tablet: 2 columns
* mobile: 1 column

On-click the bubble should open a pop-up window, showcasing more information about the service.
In the pop-up there should be corresponding images and the window should be scrollable without the main webpage being scrolled at the same time.

## Applications Section

Keep the Applications section below the bubbles. It should explain where ZLAT metal detector systems are used.

Applications may include:

* хранително производство
* текстил и облекло
* пластмасова промишленост
* дърводобивна промишленост
* въгледобивна промишленост
* инертна промишленост

Use Applications.png for the design. 
Do not change the size of the current text and cards. 
Add blue icons and make the card edges yellow on hover.

## SEO

Keep semantic HTML, one clear `h1`, useful `h2` headings, Bulgarian meta description, and useful image/section text.

Naturally include relevant phrases such as:

* `металотърсач`
* `промишлен металдетектор`
* `ремонт на металдетектор`
* `калибриране на металдетектор`
* `сервиз на металдетектори`

Do not keyword-stuff.

## Tech Rules

Use Astro components and Tailwind CSS. Do not use React, Next.js, shadcn/ui, or unnecessary JavaScript.

## Completion Criteria

The task is complete when:

* `/services` renders successfully.
* The top area matches `Services.png`.
* Only the hero, six service bubbles, and applications remain between navbar and footer.
* The page is responsive.
* `npm run build` succeeds.
