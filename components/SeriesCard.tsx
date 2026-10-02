import Image from "next/image";

import ScrollReveal from "@/components/animations/ScrollReveal";
import Logo from "@/components/ui/Logo";
import type { Series } from "@/lib/site-content";

type SeriesCardProps = {
  series: Series;
  /** Position in the list, shown as "01", "02", ... */
  index: number;
};

// Mobile: a horizontal card (color block left, photo right).
// Tablet and up: a tall card (color block with a vertical title on top, photo below).
export default function SeriesCard({ series, index }: SeriesCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group grid grid-cols-[3fr_2fr] text-white md:grid-cols-1">
      <div
        className="relative flex min-h-52 flex-col justify-between p-5 md:aspect-4/5 md:p-6"
        style={{ backgroundColor: series.color }}
      >
        <div className="hidden items-start justify-between md:flex">
          <Logo markOnly className="text-base" />
          <span className="type-label opacity-60">{number}</span>
        </div>

        {/* Reads bottom-to-top along the right edge from tablet up */}
        <h2 className="type-title md:absolute md:right-5 md:bottom-6 md:rotate-180 md:[writing-mode:vertical-rl]">
          {series.title}
        </h2>

        <p className="max-w-[18ch] text-sm leading-snug font-medium opacity-80">
          {series.description}
        </p>
      </div>

      <ScrollReveal className="h-full min-h-52 md:aspect-4/3 md:h-auto md:min-h-0">
        <Image
          src={series.image.src}
          alt={series.image.alt}
          placeholder="blur"
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 40vw"
          className="h-full w-full object-cover transition-[scale] duration-700 ease-premium group-hover:scale-105"
        />
      </ScrollReveal>
    </article>
  );
}
