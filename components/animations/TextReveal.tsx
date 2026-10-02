"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

import { prefersReducedMotion, toRevealValues } from "@/animations/apply-config";
import { animationConfig } from "@/animations/config";
import type { TextRevealConfig } from "@/animations/types";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

type TextRevealProps = {
  text: string;
  /** Animate letter by letter ("chars") or line by line ("lines") */
  splitBy: "chars" | "lines";
  /** Which HTML tag to render, e.g. "h1" or "p" */
  as?: React.ElementType;
  className?: string;
  /** Your own settings. Defaults to heroText (chars) or paragraphText (lines) from config.ts */
  config?: TextRevealConfig;
  /** true = wait until the text scrolls into view (for text further down the page) */
  playOnScroll?: boolean;
};

export default function TextReveal({
  text,
  splitBy,
  as: Tag = "p",
  className = "",
  config,
  playOnScroll = false,
}: TextRevealProps) {
  const textRef = useRef<HTMLElement>(null);

  const settings =
    config ??
    (splitBy === "chars"
      ? animationConfig.heroText
      : animationConfig.paragraphText);

  useGSAP(
    () => {
      const element = textRef.current;
      if (!element) return;

      if (!prefersReducedMotion()) {
        const { from, to } = toRevealValues(settings);

        SplitText.create(element, {
          type: splitBy,
          // A mask wraps each piece in a parent with hidden overflow,
          // so a piece pushed down stays invisible until it rises.
          mask: settings.mask ? splitBy : undefined,
          // Line breaks change with screen width, so re-split lines on resize.
          autoSplit: splitBy === "lines",
          onSplit: (split) => {
            const pieces = splitBy === "chars" ? split.chars : split.lines;

            return gsap.fromTo(pieces, from, {
              ...to,
              duration: settings.duration,
              delay: settings.delay,
              ease: settings.ease,
              stagger: { each: settings.stagger, from: settings.staggerFrom },
              // Start when the top of the text reaches 85% down the screen
              scrollTrigger: playOnScroll
                ? { trigger: element, start: "top 85%" }
                : undefined,
            });
          },
        });
      }

      // The text starts hidden (see "invisible" below) so it does not flash
      // on screen before it is split and moved to its start position.
      gsap.set(element, { visibility: "visible" });
    },
    { scope: textRef },
  );

  return (
    <Tag ref={textRef} className={`invisible ${className}`}>
      {text}
    </Tag>
  );
}
