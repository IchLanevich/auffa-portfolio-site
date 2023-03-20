import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface navbarLinks {
  name: string;
  url: string;
}

export interface Navbar {
  logo: string;
  links: navbarLinks[];
}

export interface SocialMediaLink {
  name: string;
  url: string;
  icon: ReactNode;
}

export interface Hero {
  title: string;
  subtitle: string;
  img: StaticImageData;
  socmed: SocialMediaLink[];
  primaryCta: {text: string, url: string};
  secondaryCta: {text: string, url: string};
}

export interface AboutMe {
  title: string;
  subtitle: string;
  img: StaticImageData;
  textContents: { text: string }[];
}

export interface skillByCategory {
  category: string;
  skills: string[];
}

export interface MySkills {
  title: string;
  skillsByCategory: skillByCategory[];
}

export interface project {
  title: string;
  description: string;
  img: StaticImageData;
  tags: string[];
  projectType: string;
  projectUrl: string,
}

export interface FeaturedPortfolio {
  title: string;
  projects: project[];
}

export interface Contact {
  title: string;
  subtitle: string;
  contactType: string;
  mailAddress: string;
  socmed: SocialMediaLink[];
}

export interface Link {
  name: string;
  url: string;
}

export interface Footer {
  links: Link[];
  socmed: SocialMediaLink[];
}
