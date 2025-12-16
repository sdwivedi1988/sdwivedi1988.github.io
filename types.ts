import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  summary?: string;
  achievements: string[];
  subSections?: {
    title: string;
    items: string[];
  }[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
  date: string;
}

export interface Metric {
  name: string;
  value: number;
  suffix: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}