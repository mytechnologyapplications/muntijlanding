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
