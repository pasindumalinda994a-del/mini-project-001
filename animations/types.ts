// The "shape" of an animation preset.
// Hover over any variable in config.ts and your editor shows the comment from here.

/**
 * Named clip-path shapes. A clip-path hides everything outside a polygon,
 * so animating from one of these to "none" (full screen) looks like a wipe.
 */
export const clipShapes = {
  /** Fully visible: no wipe */
  none: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  /** Starts as the bottom-right quarter */
  corner: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)",
  /** Starts as a thin line along the bottom edge */
  bottom: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  /** Starts as a thin line along the left edge */
  left: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
  /** Starts as a single point in the middle */
  center: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
};

export type ClipShape = keyof typeof clipShapes;

/** The page-to-page transition. Runs in CSS, so `ease` is a CSS easing. */
export type PageTransitionConfig = {
  /** Seconds the old page takes to leave */
  exitDuration: number;
  /** Seconds the new page takes to arrive */
  enterDuration: number;
  /** Seconds to wait before the new page starts arriving */
  enterDelay: number;
  /** CSS easing curve, e.g. "ease-in-out" or "cubic-bezier(0.65, 0, 0.35, 1)" */
  ease: string;

  /** The old page first shrinks to this size (1 = no shrink)... */
  exitMidScale: number;
  /** ...and fades to this opacity (0 = invisible, 1 = solid) */
  exitMidOpacity: number;
  /** Then it drifts sideways this far, in % of the screen (negative = left) */
  exitX: number;
  /** ...and up or down this far, in % of the screen (positive = down) */
  exitY: number;
  /** Degrees of tilt at the end (negative = counter-clockwise) */
  exitRotation: number;
  /** Final size of the old page */
  exitScale: number;
  /** Final opacity of the old page */
  exitOpacity: number;
  /** Pixels of blur on the old page at the end (0 = sharp) */
  exitBlur: number;

  /** Where the new page slides in from, in % of the screen (positive = right) */
  enterX: number;
  /** Where the new page slides in from, in % of the screen (positive = below) */
  enterY: number;
  /** The clip shape the new page grows out of */
  enterReveal: ClipShape;
};

/** A GSAP text reveal. Text is split into letters or lines first. */
export type TextRevealConfig = {
  /** Seconds each letter or line takes to animate */
  duration: number;
  /** Seconds to wait before the first letter or line starts */
  delay: number;
  /** GSAP ease, e.g. "power3.out", "expo.out", "back.out(2)". See gsap.com/docs/v3/Eases */
  ease: string;
  /** Seconds between one letter or line starting and the next */
  stagger: number;
  /** Which letter or line goes first */
  staggerFrom: "start" | "center" | "end" | "random";

  /** Start this far below, in % of the letter or line height (negative = above) */
  y: number;
  /** Start this far to the side, in pixels (negative = left) */
  x: number;
  /** Start tilted by this many degrees */
  rotation: number;
  /** Start at this size (1 = normal, 0.5 = half) */
  scale: number;
  /** Start at this opacity (0 = invisible, 1 = solid) */
  opacity: number;
  /** Start with this many pixels of blur */
  blur: number;
  /** true = each letter or line is clipped, so it appears to rise out of an invisible slot */
  mask: boolean;
};

/** A reveal that plays when an element scrolls into view (used on the gallery images). */
export type ScrollRevealConfig = {
  /** When to start: "[element edge] [screen position]". "top 90%" = element top reaches 90% down the screen */
  start: string;
  /** When to finish (only matters when scrub is on) */
  end: string;
  /** false = play once on its own; a number = tie progress to the scrollbar (higher = smoother, laggier) */
  scrub: false | number;
  /** true = play backwards when you scroll back up past the start (only when scrub is false) */
  reverseOnScrollBack: boolean;
  /** Seconds the reveal takes (only when scrub is false) */
  duration: number;
  /** GSAP ease (only when scrub is false) */
  ease: string;

  /** Start this far below, in % of the element height */
  y: number;
  /** Start tilted by this many degrees */
  rotation: number;
  /** Start at this opacity */
  opacity: number;
  /** Start with this many pixels of blur */
  blur: number;
  /** The image inside starts zoomed to this size, then settles to 1 */
  imageScale: number;
  /** The clip shape the element grows out of */
  clipFrom: ClipShape;
};

/** The giant headline that scrolls sideways forever. */
export type MarqueeConfig = {
  /** Seconds for one full loop (lower = faster) */
  speed: number;
  /** Which way the text travels */
  direction: "left" | "right";
};

export type AnimationPreset = {
  pageTransition: PageTransitionConfig;
  /** Big marquee headlines on every page, split into letters */
  heroText: TextRevealConfig;
  /** How the marquee headlines scroll */
  marquee: MarqueeConfig;
  /** Info page paragraph, split into lines */
  paragraphText: TextRevealConfig;
  /** Projects page images, revealed on scroll */
  imageReveal: ScrollRevealConfig;
};
