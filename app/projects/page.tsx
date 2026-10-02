import Marquee from "@/components/animations/Marquee";
import BottomBar from "@/components/BottomBar";
import SeriesGrid from "@/components/SeriesGrid";
import ButtonLink from "@/components/ui/ButtonLink";
import Tag from "@/components/ui/Tag";
import { pageTitles, projectsIntro, series, siteName, year } from "@/lib/site-content";

export default function ProjectsPage() {
  const seriesCount = String(series.length).padStart(2, "0");

  return (
    <main className="min-h-svh bg-mist text-ink">
      <section className="pt-32 md:pt-40">
        <Marquee text={pageTitles.projects} />

        {/* Intro row on the 12-column grid: tag left, text right */}
        <div className="page-x mt-10 grid gap-6 md:mt-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Tag>({seriesCount}) Series</Tag>
          </div>
          <p className="type-lead max-w-[30ch] lg:col-span-6 lg:col-start-7">
            {projectsIntro}
          </p>
        </div>
      </section>

      <section className="page-x py-12 md:py-16">
        <SeriesGrid items={series} />
      </section>

      <BottomBar
        note={`${siteName}® ${year}`}
        actions={
          <>
            <ButtonLink href="/info" label="Meet the studio" />
            <ButtonLink href="/info" label="Meet the studio" variant="square" />
          </>
        }
      />
    </main>
  );
}
