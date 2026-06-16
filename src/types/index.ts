export interface NavigationItem {
  label: string;
  href: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectImage {
  alt: string;
  caption?: string;
  placeholderLabel: string;
  src?: string;
  width?: number;
  height?: number;
}

export interface ProjectLink {
  label: string;
  href: string;
  type: "github" | "demo" | "website" | "apk";
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  problem?: string;
  role?: string;
  roleSummary?: string;
  currentStatus?: string;
  primaryPlatform?: string;
  technologies: string[];
  status: string;
  href?: string;
  featured: boolean;
  caseStudy: boolean;
  features?: ProjectFeature[];
  challenges?: ProjectChallenge[];
  images?: ProjectImage[];
  coverImage?: ProjectImage;
  links?: ProjectLink[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
}
