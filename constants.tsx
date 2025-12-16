import { 
  BarChart3, 
  Cloud, 
  Code2, 
  Cpu, 
  Globe, 
  Layout, 
  ShieldCheck, 
  Users 
} from 'lucide-react';
import { ExperienceItem, SkillCategory, Certification, Metric } from './types';

export const PERSONAL_INFO = {
  name: "Shashank Dwivedi",
  title: "Delivery Lead | Enterprise Delivery Governance",
  subtitle: "DevOps-Enabled Program Execution | 11+ Years Experience",
  email: "shashankdwivedi.india@gmail.com",
  phone: "+91 7975749363",
  location: "Noida, India",
  linkedin: "linkedin.com/shashank-dwivedi",
  summary: "Delivery Lead with 11+ years of experience driving end-to-end delivery, DevOps transformation, and multi-team execution across large enterprise programs. Proven track record leading large cross-functional teams, improving release predictability, stabilizing operations, and optimizing CI/CD, cloud, and ITSM processes."
};

export const METRICS: Metric[] = [
  { name: "On-time Delivery", value: 97, suffix: "%", description: "Consistently achieved across 30+ releases/quarter" },
  { name: "Deploy Speed", value: 60, suffix: "%", description: "Improvement via Jenkins/GitLab CI/CD pipelines" },
  { name: "Reporting Time", value: 40, suffix: "%", description: "Reduction using GenAI automation" },
  { name: "Defect Leakage", value: 35, suffix: "%", description: "Reduction via automated testing & security scans" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "accenture",
    role: "Associate Manager – Delivery Lead",
    company: "Accenture Solutions Pvt. Ltd.",
    period: "Dec 2021 – Present",
    achievements: [
      "Received Accenture ACE Award (Q1’24) for delivery excellence.",
      "Delivered a critical modernization program 2 weeks ahead of schedule.",
      "Managed 60+ professionals across Dev, QA, Cloud & DevOps."
    ],
    subSections: [
      {
        title: "End-to-End Delivery",
        items: [
          "Led delivery across multiple product lines for a global life sciences client.",
          "Delivered 30+ releases per quarter with >97% on-time delivery.",
          "Reduced delivery escalations through enhanced risk tracking and dependency mapping."
        ]
      },
      {
        title: "GenAI-Enabled Improvements",
        items: [
          "Reduced documentation effort by 20–25% using GenAI for test-cases & knowledge base.",
          "Accelerated PoC cycles by 30% leveraging GitHub Copilot.",
          "Automated release summaries reducing reporting time by 40%."
        ]
      },
      {
        title: "Governance & RFP",
        items: [
          "Contributed to $3M+ in annual renewals via RFP support.",
          "Shaped detailed SOWs reducing downstream scope changes by 30%.",
          "Cut incident resolution time by 27% via structured RCA."
        ]
      }
    ]
  },
  {
    id: "infosys",
    role: "Technology Lead",
    company: "Infosys Ltd.",
    period: "Feb 2014 – Nov 2021",
    summary: "Career Progression: Systems Engineer → Senior Systems Engineer → Technology Analyst → Technology Lead",
    achievements: [
      "Built CI/CD pipelines (Jenkins, GitLab) improving deploy speed 60%.",
      "Introduced IaC (Terraform) reducing provisioning time from days to hours.",
      "Reduced build time 25% and high-severity incidents by 45%.",
      "Mentored junior engineers on DevOps tools, cloud, and containers."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "GitLab", "Jenkins", "GitHub Actions", "Terraform", "Docker", "Azure DevOps"]
  },
  {
    category: "Delivery & Governance",
    skills: ["SAFe & Scrum", "Release Management", "RFP/SOW Management", "Risk Management", "KPI Reporting"]
  },
  {
    category: "Tools & Platforms",
    skills: ["JIRA", "Confluence", "ServiceNow", "GenAI Tools (Copilot)", "ITIL"]
  },
  {
    category: "Domains",
    skills: ["Life Sciences", "E-Commerce", "FMCG", "Loyalty & Rewards"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "GH-300 : GitHub Copilot", date: "September 2025" },
  { name: "AWS Certified Cloud Practitioner", date: "June 2025" },
  { name: "Microsoft Azure Devops+Devops", date: "April 2025" },
  { name: "Project Management Fundamentals", date: "March 2025" },
  { name: "Generative AI Fundamentals Specialization", date: "Sep 2024" },
  { name: "DevOps, Cloud & Agile Foundations by IBM", date: "June 2023" }
];