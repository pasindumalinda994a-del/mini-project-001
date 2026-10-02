type BottomBarProps = {
  /** Small text in the bottom-left corner, e.g. "Umbra® 2026" or "(Scroll)" */
  note: React.ReactNode;
  /** Buttons in the bottom-right corner */
  actions?: React.ReactNode;
  className?: string;
};

// The bottom edge of a full-screen section: a note on the left, actions on
// the right. On mobile both are centered, with the actions on top.
export default function BottomBar({ note, actions, className = "" }: BottomBarProps) {
  return (
    <div
      className={`page-x flex flex-col items-center gap-6 pb-8 md:flex-row md:items-end md:justify-between md:pb-10 ${className}`}
    >
      <p className="order-2 text-sm md:order-1">{note}</p>
      {actions && (
        <div className="order-1 flex items-center gap-2 md:order-2">{actions}</div>
      )}
    </div>
  );
}
