# Configurable Page Animations (Next.js mini project)

A small, editorial-style portfolio site for Umbra, a fictional portrait studio, with three pages: Home, Projects and Info. It shows five animations:

- **Page transition:** the old page shrinks, tilts and drifts away while the new page wipes in.
- **Marquee headline:** a giant page title scrolls sideways forever on every page.
- **Letter reveal:** the marquee letters rise into place.
- **Line reveal:** the Info paragraph rises line by line as you scroll to it.
- **Scroll reveal:** photos wipe and zoom into view.

The lesson of this project: **every animation reads its values from one config file, and every color and type style from one CSS file.** Change a few values there and the whole site looks and moves differently. You never touch the component code.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, React's built-in **`<ViewTransition>`**, and **GSAP** (SplitText + ScrollTrigger).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and click between the pages in the top menu.

## Change the animation

Open **`animations/config.ts`**.

### 1. Pick a style

```ts
export const activePreset: PresetName = "cinematic";
```

Change it to `"soft"`, `"dynamic"`, `"cinematic"`, `"aggressive"` or `"editorial"`, save, and refresh.

| Preset       | Feel                                                                                    |
| ------------ | --------------------------------------------------------------------------------------- |
| `soft`       | Small moves, slow timing, fades and blur. Calm and elegant.                             |
| `dynamic`    | Full moves, fast timing, strong easing. Energetic and sharp.                            |
| `cinematic`  | The original look: slow tilt-away, corner wipe, scroll-linked images.                   |
| `aggressive` | Big rotation, fast timing, overshooting easing. Loud and playful.                       |
| `editorial`  | Blur and focus instead of movement: iris page reveal, sharpening text and foggy images. |

### 2. Fine-tune it

Each preset has five groups. Every value has a comment, and hovering over a name in your editor shows a full explanation from `animations/types.ts`.

| Group            | Controls                             | Examples of what you can change                     |
| ---------------- | ------------------------------------ | --------------------------------------------------- |
| `pageTransition` | Moving between pages                 | durations, easing, tilt, drift, blur, wipe shape    |
| `heroText`       | Marquee headline letters             | duration, stagger, order, start offset, mask on/off |
| `marquee`        | How the marquee headlines scroll     | loop speed, direction                               |
| `paragraphText`  | Info paragraph, line by line         | same as `heroText`                                  |
| `imageReveal`    | Photos (Home hero and Projects cards)| trigger points, scrub, zoom, wipe shape, blur       |

### Try these

- **Make the old page fall to the right:** in `pageTransition`, set `exitX: 50` and `exitRotation: 10`.
- **Speed up the headlines:** in `marquee`, set `speed: 12`. Set `direction: "right"` to reverse them.
- **Play the image reveal once instead of following the scrollbar:** in `imageReveal`, set `scrub: false`.
- **Make the letters appear from the middle outward:** in `heroText`, set `staggerFrom: "center"`.
- **Let letters float in visibly instead of rising from a slot:** in `heroText`, set `mask: false` and `opacity: 0`.
- **Change the wipe shape:** set `enterReveal` or `clipFrom` to `"corner"`, `"bottom"`, `"left"`, `"center"` or `"none"`.

## Design system

The look is built from a handful of decisions, all defined in **`app/globals.css`**:

| Token / utility | Value                                  | Used for                                        |
| --------------- | -------------------------------------- | ----------------------------------------------- |
| `paper`         | `#f4f3ef` warm white                   | Home background                                 |
| `mist`          | `#e4e4e8` light grey                   | Projects background behind the cards            |
| `ink`           | `#172040` deep navy                    | Brand color, main text, buttons                 |
| `ink-soft`      | `#5b6280`                              | Secondary text                                  |
| `night`         | `#0e1428`                              | Info page, and the backdrop during transitions  |
| `ease-premium`  | `cubic-bezier(0.65, 0, 0.35, 1)`       | Every hover and UI transition                   |
| `type-display`  | Cabinet Grotesk 800, up to 17rem       | Marquee headlines                               |
| `type-title`    | Cabinet Grotesk 700                    | Card titles                                     |
| `type-lead`     | Onest 500                              | Intro lines                                     |
| `type-label`    | Cabinet Grotesk 700, tiny, spaced caps | Tags, buttons, small labels                     |
| `page-x`        | `clamp(1.25rem, 4vw, 3rem)`            | The side margin on every section                |

The colors become Tailwind classes automatically, for example `bg-mist`, `text-ink` or `border-ink/20`.

**Layout rules used on every page:**

- A full-height first screen: a giant headline crossed by one strong image, with small UI in the corners (navigation at the top, a note and buttons at the bottom via `BottomBar`).
- Content below uses a 12-column grid on large screens and a single column on mobile.
- Sharp corners everywhere, no shadows, thin 1px lines instead of boxes.

**Building blocks** in `components/`:

- `ui/Logo.tsx`: ring mark plus the spaced-out name (or just the mark, for cards).
- `ui/Tag.tsx`: small uppercase label in a thin box.
- `ui/ButtonLink.tsx`: an outline button, or a solid square arrow button. `tone="dark"` for dark backgrounds.
- `BottomBar.tsx`: the bottom corners of a full-screen section.
- `SeriesCard.tsx` / `SeriesGrid.tsx`: color-block project cards. Horizontal on mobile, tall with a vertical title from tablet up.

**Rebrand in two files:**

1. `lib/site-content.ts`: name, tagline, page headlines, links, photos, series titles and colors, bio, contact details. Add `"/your-page"` to `darkPages` to make the navbar white on a dark page.
2. `app/globals.css`: colors, fonts, type sizes, side margin.

## Fonts and licensing

- **Onest** (body text) is loaded with `next/font/google`. It uses the SIL Open Font License, so it is free to use and ship.
- **Cabinet Grotesk** (headlines and labels) is loaded from [Fontshare](https://www.fontshare.com/fonts/cabinet-grotesk)'s free CDN through a `<link>` in `app/layout.tsx`. It is free for personal and commercial use under the ITF Free Font License, but **the font files may not be redistributed**, so this project does not include them. If you want to self-host it, download it yourself from Fontshare and keep the files out of anything you share or sell.

## Project tour

```text
animations/
  config.ts            <- EDIT ME: active preset + all the presets
  types.ts             What every variable means, plus the wipe shapes
  apply-config.ts      Turns config values into GSAP values and CSS variables
components/
  animations/
    PageTransition.tsx Wraps a page in <ViewTransition>
    Marquee.tsx        Giant scrolling headline (each copy uses TextReveal)
    TextReveal.tsx     Letter-by-letter or line-by-line reveal (GSAP SplitText)
    ScrollReveal.tsx   Reveal on scroll for anything inside it (GSAP ScrollTrigger)
  ui/
    Logo.tsx           Brand mark
    Tag.tsx            Boxed label
    ButtonLink.tsx     Outline and square buttons
  Navbar.tsx           Three-zone top navigation (link | logo | link)
  BottomBar.tsx        Note + buttons along the bottom of a full-screen section
  SeriesCard.tsx       One color-block project card
  SeriesGrid.tsx       Responsive grid of cards
app/
  layout.tsx           Fonts, navbar, page-transition values
  template.tsx         Wraps every page in <PageTransition>
  page-transition.css  Page-transition keyframes (read values from config)
  globals.css          <- EDIT ME: colors, fonts, type styles, marquee keyframes
  page.tsx             Home page
  projects/page.tsx    Projects page
  info/page.tsx        Info page
lib/
  site-content.ts      <- EDIT ME: all text, links, colors and photos
public/images/         The photos
```

Every animation follows the same path:

```text
animations/config.ts      the numbers you choose
        |
animations/apply-config.ts  turns them into GSAP / CSS values
        |
components/animations/*   runs the animation
        |
app/**/page.tsx           uses the component on a page
```

## How each animation works

**Page transition.** Modern browsers have a **View Transitions API**: right before the page changes, the browser screenshots the old page, then screenshots the new one, and lets CSS animate the two screenshots.

1. `app/template.tsx` remounts on every navigation and wraps the page in `<PageTransition>`. That component renders React's `<ViewTransition enter="page-enter" exit="page-exit">`.
2. React gives the old screenshot the class `page-exit` and the new one `page-enter`.
3. `app/page-transition.css` animates them with the `page-out` and `page-in` keyframes.
4. The keyframes use CSS variables such as `var(--page-exit-rotate)`. `app/layout.tsx` sets those variables on `<html>` from `pageTransition` in the config.
5. The navbar has its own `viewTransitionName`, so the CSS keeps it frozen on top.

**Marquee.** `Marquee` puts two identical halves of repeated text side by side and slides the whole track left by exactly 50% with a CSS animation. At the end of each loop, half two sits exactly where half one started, so the jump back is invisible. `speed` and `direction` from the config become CSS variables on the track.

**Text reveal.** `TextReveal` uses GSAP SplitText to wrap each letter or line in its own element. With `mask: true`, each piece also sits inside a box with hidden overflow. GSAP then animates every piece from the config's start state (offset, tilt, size, opacity, blur) to its natural state, one after another (`stagger`). With `playOnScroll`, it waits until the text scrolls into view.

**Scroll reveal.** `ScrollReveal` creates a GSAP timeline controlled by ScrollTrigger. When the element reaches the `start` point, the box wipes open (`clipFrom`), moves, fades and unblurs, while the photo inside zooms from `imageScale` to normal. With `scrub` set to a number, the animation follows the scrollbar instead of playing on its own.

## Reusing the components

```tsx
<Marquee text="Hello" />
<TextReveal as="h2" splitBy="chars" text="Hello" />
<TextReveal as="p" splitBy="lines" text="A longer paragraph..." playOnScroll />
<ScrollReveal>
  <Image src={photo} alt="" />
</ScrollReveal>
```

Each animation component also accepts a `config` prop if one element should move differently from the rest:

```tsx
<ScrollReveal config={{ ...animationConfig.imageReveal, scrub: false }}>...</ScrollReveal>
```

## Browser support and accessibility

- The page transition works in Chromium 125+ (Chrome, Edge, Arc, ...) and recent Safari and Firefox versions. In older browsers, the links still work; the page just changes instantly.
- If the visitor has turned on "reduce motion" in their operating system, all animations are skipped and the marquees stop.
