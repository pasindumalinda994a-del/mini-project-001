import Image from "next/image";

import Marquee from "@/components/animations/Marquee";
import TextReveal from "@/components/animations/TextReveal";
import BottomBar from "@/components/BottomBar";
import ButtonLink from "@/components/ui/ButtonLink";
import Tag from "@/components/ui/Tag";
import {
  bio,
  contactDetails,
  email,
  pageTitles,
  portraitImage,
} from "@/lib/site-content";

export default function InfoPage() {
  return (
    <main className="bg-night text-white">
      {/* Full-screen photo with a white headline on top */}
      <section className="relative flex h-svh flex-col overflow-hidden">
        <Image
          src={portraitImage.src}
          alt={portraitImage.alt}
          fill
          placeholder="blur"
          loading="eager"
          sizes="100vw"
          className="object-cover object-[50%_30%]"
        />
        {/* Darkens the top and bottom so the white text stays readable */}
        <div className="absolute inset-0 bg-linear-to-b from-night/40 via-transparent to-night/80" />

        <div className="relative flex flex-1 flex-col justify-between pt-[24svh]">
          <Marquee text={pageTitles.info} />
          <BottomBar
            note="(Scroll)"
            actions={
              <>
                <ButtonLink href={`mailto:${email}`} label="Book a session" tone="dark" />
                <ButtonLink
                  href={`mailto:${email}`}
                  label="Book a session"
                  variant="square"
                  tone="dark"
                />
              </>
            }
          />
        </div>
      </section>

      {/* Bio and contact details on the 12-column grid */}
      <section className="page-x grid gap-10 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Tag>(The studio)</Tag>
        </div>

        <div className="lg:col-span-9">
          <TextReveal
            as="p"
            splitBy="lines"
            text={bio}
            playOnScroll
            className="text-[clamp(1.5rem,3vw,2.75rem)] leading-[1.2] font-medium"
          />

          <dl className="mt-16 grid gap-8 sm:grid-cols-3 md:mt-24">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="border-t border-white/20 pt-5">
                <dt className="type-label text-white/50">{detail.label}</dt>
                <dd className="mt-3">
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
