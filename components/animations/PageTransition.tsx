import { ViewTransition } from "react";

// When the page inside changes, React asks the browser to animate the old
// page out and the new one in. "page-exit" and "page-enter" are CSS class
// names; the matching animations live in app/page-transition.css, and their
// values come from `pageTransition` in animations/config.ts.
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
