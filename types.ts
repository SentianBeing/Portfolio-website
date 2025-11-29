import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  subServices: string[];
  tag?: string;
  tagColor?: 'yellow' | 'white';
  isPrimary?: boolean;
}

export interface StatItem {
  icon: LucideIcon;
  text: string;
}