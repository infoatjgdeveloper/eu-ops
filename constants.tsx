
import React from 'react';
import { Service, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Operations', href: '#partnership' },
  { label: 'Engagement', href: '#engagement' },
  { label: 'Services', href: '#services' },
  { label: 'Regions', href: '#regions' },
  { label: 'Contact', href: '#contact' }
];

export const SERVICES: Service[] = [
  {
    id: 'software',
    title: 'Software Engineering',
    description: 'Custom enterprise-grade software and scalable architectures.',
    icon: 'fa-code',
    items: ['Custom enterprise software', 'Web & mobile development', 'Scalable backend systems', 'Microservices architecture']
  },
  {
    id: 'ai',
    title: 'AI & Intelligent Systems',
    description: 'Empowering business workflows with cutting-edge intelligence.',
    icon: 'fa-brain',
    items: ['AI workflow integration', 'Intelligent automation', 'Data-driven platforms', 'AI decision support']
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Modern infrastructure for high-availability enterprise systems.',
    icon: 'fa-cloud',
    items: ['Cloud migration', 'DevOps CI/CD pipelines', 'Cloud-native architecture', 'Infrastructure optimization']
  },
  {
    id: 'cyber',
    title: 'Cybersecurity',
    description: 'Secure application design aligned with GDPR standards.',
    icon: 'fa-shield-halved',
    items: ['Secure application design', 'Risk assessment', 'Enterprise consulting', 'GDPR alignment']
  }
];

export const EU_COUNTRIES = [
  "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
  "Denmark", "Estonia", "Finland", "France", "Germany", "Greece",
  "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg",
  "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
  "Slovenia", "Spain", "Sweden"
];

export const ENGAGEMENT_TYPES = [
  {
    id: 'investor',
    title: 'Investor Relations',
    description: 'Explore venture opportunities within the JG AI European ecosystem.',
    icon: 'fa-chart-pie',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'Partner with us on pan-European digital infrastructure projects.',
    icon: 'fa-handshake',
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    id: 'career',
    title: 'Apply for Job',
    description: 'Join our world-class engineering team based in Germany.',
    icon: 'fa-user-tie',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 'client',
    title: 'New Client',
    description: 'Request a consultation for custom enterprise AI or software.',
    icon: 'fa-briefcase',
    color: 'bg-slate-100 text-slate-600'
  }
];
