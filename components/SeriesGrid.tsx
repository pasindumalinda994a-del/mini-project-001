import SeriesCard from "@/components/SeriesCard";
import type { Series } from "@/lib/site-content";

type SeriesGridProps = {
  items: Series[];
};

// 1 column on mobile, 2 on tablet, 4 on wide screens.
export default function SeriesGrid({ items }: SeriesGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
      {items.map((item, index) => (
        <SeriesCard key={item.title} series={item} index={index} />
      ))}
    </div>
  );
}
