type TagProps = {
  children: React.ReactNode;
  className?: string;
};

// A small uppercase label inside a thin box. Takes the color of its parent.
export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`type-label inline-block border border-current px-3 py-2 ${className}`}
    >
      {children}
    </span>
  );
}
