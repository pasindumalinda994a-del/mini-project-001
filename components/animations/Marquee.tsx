import { animationConfig } from "@/animations/config";
import type { MarqueeConfig } from "@/animations/types";
import TextReveal from "@/components/animations/TextReveal";

type MarqueeProps = {
  text: string;
  /** How many times the text repeats in each half of the loop. Raise it for short words. */
  repeat?: number;
  className?: string;
  /** Your own settings. Defaults to marquee from config.ts */
  config?: MarqueeConfig;
};

// A giant headline that scrolls sideways forever.
// Each copy of the text is a <TextReveal>, so the letters also rise in using
// the heroText settings from config.ts.
export default function Marquee({
  text,
  repeat = 2,
  className = "",
  config = animationConfig.marquee,
}: MarqueeProps) {
  const copies = Array.from({ length: repeat });

  return (
    <h1
      aria-label={text}
      className={`type-display overflow-hidden whitespace-nowrap ${className}`}
    >
      {/* The track holds two identical halves. Sliding it left by exactly 50%
          puts half two where half one started, so the loop has no visible seam. */}
      <span
        aria-hidden="true"
        className="marquee-track flex w-max"
        style={
          {
            "--marquee-duration": `${config.speed}s`,
            "--marquee-direction": config.direction === "left" ? "normal" : "reverse",
          } as React.CSSProperties
        }
      >
        {[0, 1].map((half) => (
          <span key={half} className="flex shrink-0 items-center">
            {copies.map((_, index) => (
              <span key={index} className="flex items-center">
                <TextReveal as="span" splitBy="chars" text={text} className="block" />
                <span className="mx-[0.3em] size-[0.12em] rounded-full bg-current" />
              </span>
            ))}
          </span>
        ))}
      </span>
    </h1>
  );
}
