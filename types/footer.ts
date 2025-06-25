import { ReactNode } from "react";

export interface FooterLinkProps {
  title: string;
  links: {
    link: string;
    icon?: ReactNode;
    title: string;
  }[];
}

export interface SocialIconProps {
  children: ReactNode;
}
