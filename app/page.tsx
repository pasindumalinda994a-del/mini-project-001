import Image from "next/image";

import { animationConfig } from "@/animations/config";
import Marquee from "@/components/animations/Marquee";
import ScrollReveal from "@/components/animations/ScrollReveal";
import BottomBar from "@/components/BottomBar";
import ButtonLink from "@/components/ui/ButtonLink";
import Tag from "@/components/ui/Tag";
import { heroImage, locationTag, siteName, tagline, year } from "@/lib/site-content";

export default function HomePage() {
  return (
    <main className="flex min-h-svh flex-col bg-paper text-ink">
      <section className="flex flex-1 flex-col items-center justify-center gap-8 pt-28 md:gap-10 md:pt-32">
        {/* The giant headline runs behind a centered square photo */}
        <div className="relative w-full">
          <Marquee text={siteName} />

          <div className="absolute top-1/2 left-1/2 z-10 w-[clamp(9rem,22vw,19rem)] -translate-x-1/2 -translate-y-1/2">
            {/* Uses the imageReveal settings, but plays once on load instead of on scroll */}
            <ScrollReveal config={{ ...animationConfig.imageReveal, scrub: false }}>
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                placeholder="blur"
                loading="eager"
                sizes="(min-width: 768px) 22vw, 40vw"
                className="aspect-square w-full object-cover"
              />
            </ScrollReveal>
          </div>
        </div>

        <div className="page-x flex flex-col items-center gap-5 text-center">
          <p className="type-lead max-w-[22ch]">{tagline}</p>
          <Tag>{locationTag}</Tag>
        </div>
      </section>

      <BottomBar
        className="pt-10"
        note={`${siteName}® ${year}`}
        actions={
          <>
            <ButtonLink href="/projects" label="View projects" />
            <ButtonLink href="/projects" label="View projects" variant="square" />
          </>
        }
      />
    </main>
  );
}
