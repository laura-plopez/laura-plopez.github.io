import type { PortfolioData } from '@/types/portfolio';

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: 'Laura Pérez',
    title: 'Developer & Marketing',
    bio: [
      'Nací el año 1997',
      'en Toledo, España.',
      'Estudié comunicación',
      'audiovisual y desarrollo',
      'de aplicaciones',
      'multiplataforma.',
    ],
  },
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'faq', label: 'FAQ' },
  ],
};
