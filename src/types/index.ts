import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  /** Section id used for active-link tracking. */
  id: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

// Interface for reasons or motivations
export interface Reason {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  featured?: boolean;
  overview: string;
  description: string;
  url: string;
  /** Facts observed on the live site, not claims about internals. */
  highlights: string[];
  technologies: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  };
}
