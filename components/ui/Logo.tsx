import { siteName } from "@/lib/site-content";

type LogoProps = {
  /** Show only the ring and the first letter (used on the cards) */
  markOnly?: boolean;
  className?: string;
};

// The brand mark: a small ring (a camera lens) followed by the name.
// It uses `currentColor`, so it takes the text color of its parent.
export default function Logo({ markOnly = false, className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-[0.6em] font-display font-bold uppercase ${className}`}
    >
      <span
        aria-hidden="true"
        className="size-[0.85em] rounded-full border-[0.15em] border-current"
      />
      {markOnly ? (
        <span aria-hidden="true">{siteName[0]}</span>
      ) : (
        // Negative margin cancels the letter spacing after the last letter
        <span className="mr-[-0.32em] tracking-[0.32em]">{siteName}</span>
      )}
    </span>
  );
}
