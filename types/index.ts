import { ReactNode } from "react";

// Component Props Interfaces
export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FooterLinkProps {
  title: string;
  links: string[];
}

export interface SocialIconProps {
  children: ReactNode;
}

// Data Interfaces
export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FooterSection {
  title: string;
  links: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  position:
    | "center"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "decorative";
  className?: string;
}

export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showContent?: boolean;
}

// Common Types
export type IconComponent = ReactNode;
