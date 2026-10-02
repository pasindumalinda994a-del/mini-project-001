// All the text, links, colors and images used on the site live here.
// Change these values to rebrand the project without touching any components.

import type { StaticImageData } from "next/image";

import dusk from "@/public/images/img1.jpeg";
import penumbra from "@/public/images/img2.jpeg";
import ember from "@/public/images/img3.jpeg";
import motion from "@/public/images/img4.jpeg";
import portrait from "@/public/images/portrait.jpeg";

export const siteName = "Umbra";
export const year = 2026;

export const tagline = "Portraits drawn from the dark.";
export const locationTag = "Portrait studio · Lisbon";

// The giant scrolling headline at the top of each page (Home uses siteName)
export const pageTitles = {
  projects: "Selected Work",
  info: "The Studio",
};

export const projectsIntro =
  "Four ongoing series, each one exploring a different side of shadow.";

// The navbar has a link on each side of the centered logo.
export const navLinks = {
  left: { label: "Projects", href: "/projects" },
  right: { label: "Info", href: "/info" },
};

// Pages with a dark background. The navbar switches to white text on these.
export const darkPages = ["/info"];

export type SiteImage = {
  src: StaticImageData;
  alt: string;
};

export const heroImage: SiteImage = {
  src: dusk,
  alt: "Portrait of a woman in a black high-neck coat at blue hour",
};

export const portraitImage: SiteImage = {
  src: portrait,
  alt: "Silhouette of a man in profile against a teal backdrop",
};

export type Series = {
  title: string;
  description: string;
  /** Card background. Each color is picked from its photo. */
  color: string;
  image: SiteImage;
};

export const series: Series[] = [
  {
    title: "Dusk",
    description: "Blue-hour portraits, lit by the last light of the day.",
    color: "#26324f",
    image: heroImage,
  },
  {
    title: "Penumbra",
    description: "Faces half-lost in darkness, cut by a single beam.",
    color: "#1d1c21",
    image: { src: penumbra, alt: "Black and white profile crossed by a beam of light" },
  },
  {
    title: "Ember",
    description: "Close, warm studies of skin, texture and colour.",
    color: "#6e3527",
    image: { src: ember, alt: "Close-up of a freckled face with red lips" },
  },
  {
    title: "Motion",
    description: "Bodies caught mid-turn and blurred into shadow.",
    color: "#4b4239",
    image: { src: motion, alt: "Woman in a black dress spinning, motion blurred" },
  },
];

export const bio =
  "Umbra is a portrait studio built around light, shadow and movement. Every image is shaped by contrast: faces carved out of darkness, bodies softened by motion, colour held back until it matters. The result is portraiture that feels modern, quiet and timeless.";

export const email = "hello@umbra.studio";

export const contactDetails = [
  { label: "Studio", value: "Lisbon, Portugal" },
  { label: "Email", value: email, href: `mailto:${email}` },
  {
    label: "Instagram",
    value: "@umbra.studio",
    href: "https://instagram.com/umbra.studio",
  },
];
