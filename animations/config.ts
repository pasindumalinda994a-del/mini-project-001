// ============================================================================
//  ANIMATION CONFIG: the only file you need to edit to change the animations.
//
//  1. Pick a style: change `activePreset` below and refresh the page.
//  2. Fine-tune it: change any number inside that preset.
//
//  Hover over a variable name in your editor to see what it does.
// ============================================================================

import type { AnimationPreset } from "./types";

export type PresetName =
  | "soft"
  | "dynamic"
  | "cinematic"
  | "aggressive"
  | "editorial";

export const activePreset: PresetName = "editorial";

// ----------------------------------------------------------------------------
//  CINEMATIC: the original look. Slow tilt-away, corner wipe, scrubbed images.
//  (Fully commented, so start here.)
// ----------------------------------------------------------------------------
const cinematic: AnimationPreset = {
  pageTransition: {
    exitDuration: 1.6, // seconds the old page takes to leave
    enterDuration: 1.5, // seconds the new page takes to arrive
    enterDelay: 0.25, // wait before the new page starts
    ease: "cubic-bezier(0.65, 0, 0.35, 1)", // CSS easing curve (slow-fast-slow)

    exitMidScale: 0.8, // old page first shrinks to this size...
    exitMidOpacity: 0.5, // ...and fades to this opacity
    exitX: -50, // then drifts left by 50% of the screen
    exitY: 20, // and down by 20%
    exitRotation: -10, // while tilting 10 degrees
    exitScale: 0.65, // ending at 65% size
    exitOpacity: 0.25, // and 25% opacity
    exitBlur: 0, // no blur

    enterX: 100, // new page starts one full screen to the right
    enterY: 20, // and 20% lower
    enterReveal: "corner", // it grows out of the bottom-right quarter
  },

  heroText: {
    duration: 1, // each letter takes 1 second to rise
    delay: 1.125, // starts as the new page finishes arriving
    ease: "power3.out", // fast start, soft landing
    stagger: 0.075, // next letter starts 0.075s later
    staggerFrom: "start", // left to right

    y: 100, // letters start one full letter-height below
    x: 0,
    rotation: 0,
    scale: 1,
    opacity: 1, // fully visible (the mask hides them instead)
    blur: 0,
    mask: true, // letters rise out of an invisible slot
  },

  marquee: {
    speed: 30, // seconds for one full loop (lower = faster)
    direction: "left", // text travels to the left
  },

  paragraphText: {
    duration: 2,
    delay: 0.5,
    ease: "power4.out",
    stagger: 0.1, // next line starts 0.1s later
    staggerFrom: "start",

    y: 100,
    x: 0,
    rotation: 0,
    scale: 1,
    opacity: 1,
    blur: 0,
    mask: true,
  },

  imageReveal: {
    start: "top 95%", // begin when the image top enters the screen
    end: "top 35%", // finish when it is 35% from the top
    scrub: 1, // follows the scrollbar, catching up over 1 second
    reverseOnScrollBack: false,
    duration: 1.2, // ignored while scrub is on
    ease: "power3.out", // ignored while scrub is on

    y: 20, // starts 20% of its height lower
    rotation: 0,
    opacity: 1,
    blur: 0,
    imageScale: 1.3, // photo starts zoomed in and settles to normal
    clipFrom: "bottom", // wipes up from the bottom edge
  },
};

// ----------------------------------------------------------------------------
//  SOFT: small movements, slow timing, fades and blur. Calm and elegant.
// ----------------------------------------------------------------------------
const soft: AnimationPreset = {
  pageTransition: {
    exitDuration: 1.2,
    enterDuration: 1.2,
    enterDelay: 0.15,
    ease: "cubic-bezier(0.33, 1, 0.68, 1)",

    exitMidScale: 0.96,
    exitMidOpacity: 0.7,
    exitX: 0,
    exitY: 6,
    exitRotation: 0,
    exitScale: 0.92,
    exitOpacity: 0,
    exitBlur: 8, // old page melts into a blur

    enterX: 0,
    enterY: 10,
    enterReveal: "bottom",
  },

  heroText: {
    duration: 1.4,
    delay: 1.1,
    ease: "power2.out",
    stagger: 0.04,
    staggerFrom: "start",

    y: 40, // small rise
    x: 0,
    rotation: 0,
    scale: 1,
    opacity: 0, // fade in
    blur: 10, // and come into focus
    mask: false, // letters float in freely
  },

  marquee: {
    speed: 40,
    direction: "left",
  },

  paragraphText: {
    duration: 1.6,
    delay: 0.9,
    ease: "power2.out",
    stagger: 0.08,
    staggerFrom: "start",

    y: 30,
    x: 0,
    rotation: 0,
    scale: 1,
    opacity: 0,
    blur: 8,
    mask: false,
  },

  imageReveal: {
    start: "top 90%",
    end: "top 50%",
    scrub: false, // plays once on its own
    reverseOnScrollBack: false,
    duration: 1.4,
    ease: "power2.out",

    y: 15,
    rotation: 0,
    opacity: 0,
    blur: 10,
    imageScale: 1.08,
    clipFrom: "none", // no wipe, just a fade
  },
};

// ----------------------------------------------------------------------------
//  DYNAMIC: full movements, fast timing, strong easing. Energetic and sharp.
// ----------------------------------------------------------------------------
const dynamic: AnimationPreset = {
  pageTransition: {
    exitDuration: 0.9,
    enterDuration: 0.9,
    enterDelay: 0.05,
    ease: "cubic-bezier(0.87, 0, 0.13, 1)",

    exitMidScale: 0.9,
    exitMidOpacity: 0.8,
    exitX: -60,
    exitY: 0,
    exitRotation: 0,
    exitScale: 0.8,
    exitOpacity: 0.2,
    exitBlur: 0,

    enterX: 30,
    enterY: 0,
    enterReveal: "left", // wipes open from its left edge
  },

  heroText: {
    duration: 0.8,
    delay: 0.9,
    ease: "expo.out",
    stagger: 0.08,
    staggerFrom: "start",

    y: 100,
    x: 0,
    rotation: 0,
    scale: 1,
    opacity: 1,
    blur: 0,
    mask: true,
  },

  marquee: {
    speed: 18,
    direction: "left",
  },

  paragraphText: {
    duration: 1,
    delay: 0.6,
    ease: "expo.out",
    stagger: 0.12,
    staggerFrom: "start",

    y: 100,
    x: 0,
    rotation: 0,
    scale: 1,
    opacity: 1,
    blur: 0,
    mask: true,
  },

  imageReveal: {
    start: "top 85%",
    end: "top 40%",
    scrub: false,
    reverseOnScrollBack: true, // hides again when you scroll back up
    duration: 0.9,
    ease: "expo.out",

    y: 30,
    rotation: 0,
    opacity: 1,
    blur: 0,
    imageScale: 1.2,
    clipFrom: "bottom",
  },
};

// ----------------------------------------------------------------------------
//  AGGRESSIVE: big rotation, fast timing, overshooting easing. Loud and playful.
// ----------------------------------------------------------------------------
const aggressive: AnimationPreset = {
  pageTransition: {
    exitDuration: 0.8,
    enterDuration: 0.8,
    enterDelay: 0,
    ease: "cubic-bezier(0.9, 0, 0.1, 1)",

    exitMidScale: 0.7,
    exitMidOpacity: 0.6,
    exitX: -80,
    exitY: 40,
    exitRotation: -25,
    exitScale: 0.4,
    exitOpacity: 0,
    exitBlur: 4,

    enterX: 0,
    enterY: 0,
    enterReveal: "center", // bursts out from the middle
  },

  heroText: {
    duration: 0.6,
    delay: 0.7,
    ease: "back.out(2)", // overshoots, then settles
    stagger: 0.04,
    staggerFrom: "random", // letters pop in a random order

    y: 120,
    x: 0,
    rotation: 25,
    scale: 0.6,
    opacity: 0,
    blur: 0,
    mask: false,
  },

  marquee: {
    speed: 10,
    direction: "right",
  },

  paragraphText: {
    duration: 0.7,
    delay: 0.5,
    ease: "back.out(1.7)",
    stagger: 0.06,
    staggerFrom: "start",

    y: 80,
    x: 0,
    rotation: 6,
    scale: 0.9,
    opacity: 0,
    blur: 0,
    mask: false,
  },

  imageReveal: {
    start: "top 95%",
    end: "top 50%",
    scrub: false,
    reverseOnScrollBack: true,
    duration: 0.6,
    ease: "back.out(1.7)",

    y: 40,
    rotation: 8,
    opacity: 0,
    blur: 0,
    imageScale: 1.4,
    clipFrom: "center",
  },
};

// ----------------------------------------------------------------------------
//  EDITORIAL: blur and focus instead of big movement. Quiet, magazine-like.
//  The old page dissolves, the new one opens from the center like an iris,
//  and text and images sharpen into place.
// ----------------------------------------------------------------------------
const editorial: AnimationPreset = {
  pageTransition: {
    exitDuration: 1.6,
    enterDuration: 1.5,
    enterDelay: 0.25,
    ease: "cubic-bezier(0.83, 0, 0.17, 1)",

    exitMidScale: 0.9,
    exitMidOpacity: 0.6,
    exitX: 0, // no drift: the old page stays centered
    exitY: 0,
    exitRotation: 0,
    exitScale: 0.8,
    exitOpacity: 0,
    exitBlur: 12, // and dissolves into a blur

    enterX: 0,
    enterY: 0,
    enterReveal: "center", // new page opens from a point in the middle
  },

  heroText: {
    duration: 1.5,
    delay: 1.125,
    ease: "power2.out",
    stagger: 0.05,
    staggerFrom: "start",

    y: 0,
    x: 0,
    rotation: 0,
    scale: 1.4, // letters start large...
    opacity: 0,
    blur: 20, // ...and blurry, then pull into focus
    mask: false,
  },

  marquee: {
    speed: 45,
    direction: "left",
  },

  paragraphText: {
    duration: 1.4,
    delay: 0.5,
    ease: "power2.out",
    stagger: 0.1,
    staggerFrom: "start",

    y: 0, // lines stay in place
    x: 0,
    rotation: 0,
    scale: 1,
    opacity: 0,
    blur: 12, // and come into focus
    mask: false,
  },

  imageReveal: {
    start: "top 95%",
    end: "top 35%",
    scrub: false,
    reverseOnScrollBack: false,
    duration: 1.6,
    ease: "power2.out",

    y: 10,
    rotation: 0,
    opacity: 0,
    blur: 20, // images lift out of a fog
    imageScale: 1.1,
    clipFrom: "none",
  },
};

const presets: Record<PresetName, AnimationPreset> = {
  soft,
  dynamic,
  cinematic,
  aggressive,
  editorial,
};

/** The settings every animation component reads. */
export const animationConfig = presets[activePreset];
