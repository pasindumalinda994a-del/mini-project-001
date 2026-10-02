"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { prefersReducedMotion, toRevealValues } from "@/animations/apply-config";
import { animationConfig } from "@/animations/config";
import { clipShapes, type ScrollRevealConfig } from "@/animations/types";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Your own settings. Defaults to imageReveal from config.ts */
  config?: ScrollRevealConfig;
};

export default function ScrollReveal({
  children,
  className = "",
  config = animationConfig.imageReveal,
}: ScrollRevealProps) {
  // The outer box stays put and tells ScrollTrigger where the element is.
  // The inner box is the one that moves, so it can't confuse the trigger.
  const triggerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trigger = triggerRef.current;
      const reveal = revealRef.current;
      if (!trigger || !reveal || prefersReducedMotion()) return;

      const { from, to } = toRevealValues(config);
      const image = reveal.querySelector("img");

      // With scrub on, the scrollbar controls the timing, so no easing is used.
      const ease = config.scrub === false ? config.ease : "none";

      const timeline = gsap.timeline({
        defaults: { duration: config.duration, ease },
        scrollTrigger: {
          trigger,
          start: config.start,
          end: config.end,
          scrub: config.scrub,
          toggleActions: config.reverseOnScrollBack
            ? "play none none reverse"
            : "play none none none",
        },
      });

      // Move, fade and wipe the box in...
      timeline.fromTo(
        reveal,
        { ...from, clipPath: clipShapes[config.clipFrom] },
        { ...to, clipPath: clipShapes.none },
      );

      // ...while the photo inside zooms out at the same time (position 0).
      if (image) {
        timeline.fromTo(image, { scale: config.imageScale }, { scale: 1 }, 0);
      }
    },
    { scope: triggerRef },
  );

  return (
    <div ref={triggerRef} className={className}>
      <div ref={revealRef} className="h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}
