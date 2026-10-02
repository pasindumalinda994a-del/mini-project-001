import Link from "next/link";

/** "light" = on a light background (navy button), "dark" = on a dark background (white button) */
export type Tone = "light" | "dark";

type ButtonLinkProps = {
  href: string;
  /** Button text. For the square button it is read by screen readers only. */
  label: string;
  /** "outline" = text button with a thin border, "square" = solid square with an arrow */
  variant?: "outline" | "square";
  tone?: Tone;
};

const styles = {
  outline: {
    light: "border-ink text-ink hover:bg-ink hover:text-paper",
    dark: "border-white text-white hover:bg-white hover:text-ink",
  },
  square: {
    light: "bg-ink text-paper hover:bg-ink/80",
    dark: "bg-white text-ink hover:bg-white/80",
  },
};

export default function ButtonLink({
  href,
  label,
  variant = "outline",
  tone = "light",
}: ButtonLinkProps) {
  if (variant === "square") {
    return (
      <Link
        href={href}
        aria-label={label}
        className={`group grid size-12 place-items-center transition-colors duration-500 ease-premium ${styles.square[tone]}`}
      >
        <ArrowIcon />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`type-label inline-flex h-12 items-center gap-4 border px-6 transition-colors duration-500 ease-premium ${styles.outline[tone]}`}
    >
      {label}
      <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="transition-transform duration-500 ease-premium group-hover:translate-x-0.5"
    >
      <path d="M2 8h12M9 3l5 5-5 5" />
    </svg>
  );
}
