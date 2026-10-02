import PageTransition from "@/components/animations/PageTransition";

// A template (unlike a layout) remounts on every navigation.
// That remount is what lets <PageTransition> animate the old page out and the
// new page in.
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
