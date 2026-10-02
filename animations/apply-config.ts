// Turns the friendly values from config.ts into what GSAP and CSS understand.
// You normally don't need to edit this file.

import type { CSSProperties } from "react";
import type gsap from "gsap";

import { clipShapes, type PageTransitionConfig } from "./types";

type RevealStartState = {
  y: number;
  x?: number;
  rotation: number;
  scale?: number;
  opacity: number;
  blur: number;
};

/**
 * Builds the GSAP start state ("from") and end state ("to") for a reveal.
 * The end state is always the element's natural look: no offset, no tilt,
 * normal size, fully visible and sharp.
 */
export function toRevealValues(config: RevealStartState) {
  const from: gsap.TweenVars = {
    yPercent: config.y,
    x: config.x ?? 0,
    rotation: config.rotation,
    scale: config.scale ?? 1,
    opacity: config.opacity,
  };

  const to: gsap.TweenVars = {
    yPercent: 0,
    x: 0,
    rotation: 0,
    scale: 1,
    opacity: 1,
  };

  // Blur is only animated when it is used, because blur is costly to render.
  if (config.blur > 0) {
    from.filter = `blur(${config.blur}px)`;
    to.filter = "blur(0px)";
  }

  return { from, to };
}

/** Respects the operating-system setting for people sensitive to motion. */
export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Converts the page transition settings into CSS variables.
 * app/layout.tsx puts these on <html>, and app/page-transition.css reads them.
 */
export function toPageTransitionVariables(config: PageTransitionConfig) {
  return {
    "--page-ease": config.ease,
    "--page-exit-duration": `${config.exitDuration}s`,
    "--page-enter-duration": `${config.enterDuration}s`,
    "--page-enter-delay": `${config.enterDelay}s`,

    "--page-exit-mid-scale": config.exitMidScale,
    "--page-exit-mid-opacity": config.exitMidOpacity,
    "--page-exit-x": `${config.exitX}%`,
    "--page-exit-y": `${config.exitY}%`,
    "--page-exit-rotate": `${config.exitRotation}deg`,
    "--page-exit-scale": config.exitScale,
    "--page-exit-opacity": config.exitOpacity,
    "--page-exit-blur": `${config.exitBlur}px`,

    "--page-enter-x": `${config.enterX}%`,
    "--page-enter-y": `${config.enterY}%`,
    "--page-enter-clip": clipShapes[config.enterReveal],
  } as CSSProperties;
}
