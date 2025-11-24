import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  client: string;
  title: string;
  category: string;
  image: string;
  stats: string;
  description: string; // Added description field
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface NavLink {
  label: string;
  href: string;
}