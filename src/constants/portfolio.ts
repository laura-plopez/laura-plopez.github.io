import { PortfolioData } from '../types/portfolio';

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: 'Laura Pérez',
    title: 'Developer & Marketing',
    birthYear: 1997,
    location: 'Toledo, España',
    education: 'Comunicación audiovisual y desarrollo de aplicaciones multiplataforma'
  },
  navigation: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
    { id: 'faq', label: 'FAQ', href: '#faq' }
  ]
};