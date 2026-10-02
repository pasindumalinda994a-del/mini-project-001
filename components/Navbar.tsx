"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/components/ui/Logo";
import { darkPages, navLinks, siteName } from "@/lib/site-content";

// Three zones: a link on the left, the logo in the middle, a link on the right.
export default function Navbar() {
  // The current URL, e.g. "/info". Used for the active link and the text color.
  const pathname = usePathname();
  const isDarkPage = darkPages.includes(pathname);

  return (
    <nav
      // Giving the navbar its own view-transition name lets
      // app/page-transition.css keep it still while the pages animate.
      style={{ viewTransitionName: "navbar" }}
      className={`page-x fixed inset-x-0 top-0 z-10 grid grid-cols-[1fr_auto_1fr] items-center py-6 transition-colors duration-500 ease-premium md:py-8 ${
        isDarkPage ? "text-white" : "text-ink"
      }`}
    >
      <NavLink
        {...navLinks.left}
        isActive={pathname === navLinks.left.href}
        className="justify-self-start"
      />

      <Link href="/" aria-label={`${siteName} home`} className="text-sm md:text-lg">
        <Logo />
      </Link>

      <NavLink
        {...navLinks.right}
        isActive={pathname === navLinks.right.href}
        className="justify-self-end"
      />
    </nav>
  );
}

type NavLinkProps = {
  label: string;
  href: string;
  isActive: boolean;
  className?: string;
};

function NavLink({ label, href, isActive, className = "" }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`group relative py-2 text-sm font-medium md:text-base ${className}`}
    >
      {label}
      {/* Underline: always shown on the current page, slides in on hover elsewhere */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 h-px origin-left bg-current transition-transform duration-500 ease-premium ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}
