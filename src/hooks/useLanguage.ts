import { useContext } from 'react';
import { CONTENT } from '@/constants/portfolio';
import { LanguageContext } from '@/context/LanguageContext';

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}

export function useContent() {
  const { lang } = useLanguage();
  return CONTENT[lang];
}
